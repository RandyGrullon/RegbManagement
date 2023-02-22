using MediatR;
using ErrorOr;
using Application.Common.Interfaces.Persistence;
using Application.Common.Interfaces.Authentication;
using Domain.Entities;
using System.Diagnostics;
using Domain.Common.Errors;
using Application.Authentication.Common;



namespace Application.Authentication.Commands.Register;

public class RegisterCommandHandler : IRequestHandler<RegisterCommand, ErrorOr<AuthenticationResult>>
{

    private readonly IJwtTokenGenerator _jwtTokenGenerator;
    private readonly IUserRepository _userRepository;

    public RegisterCommandHandler(IJwtTokenGenerator jwtTokenGenerator, IUserRepository userRepository)
    {
        _jwtTokenGenerator = jwtTokenGenerator;
        _userRepository = userRepository;
    }




    public async Task<ErrorOr<AuthenticationResult>> Handle(RegisterCommand command, CancellationToken cancellationToken)
    {
        //Validate the user doenst exist
        if (_userRepository.GetUserByEmail(command.email) is not null)
        {
            return Errors.User.DuplicateEmail;
        }
        //create user (generate unique ID) & persist to DB
        var user = new User
        {
            FirstName = command.firstName,
            LastName = command.lastName,
            Email = command.email,
            Password = command.password
        };

        _userRepository.Add(user);
        //create JWT Token

        var token = _jwtTokenGenerator.GenerateToken(user);


        return new AuthenticationResult(
            user,
            token
        );

    }
}