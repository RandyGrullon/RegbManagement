using Application.Common.Interfaces.Authentication;
using Application.Common.Interfaces.Persistence;
using ErrorOr;
using Domain.Entities;
using Domain.Common.Errors;

namespace Application.Services.Authentication.Commands;

public class AuthenticationCommandService : IAuthenticationCommandService
{
    private readonly IJwtTokenGenerator _jwtTokenGenerator;
    private readonly IUserRepository _userRepository;

    public AuthenticationCommandService(IJwtTokenGenerator jwtTokenGenerator,
        IUserRepository userRepository)
    {
        _jwtTokenGenerator = jwtTokenGenerator;
        _userRepository = userRepository;
    }
    public ErrorOr<AuthenticationResult> Register(string firstName, string lastName, string email, string password)
    {
        //Validate the user doenst exist
        if(_userRepository.GetUserByEmail(email) is not null){
            return Errors.User.DuplicateEmail;
        }
        //create user (generate unique ID) & persist to DB
        var user = new User
        {
            FirstName = firstName,
            LastName = lastName,
            Email = email,
            Password = password
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
