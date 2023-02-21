using Application.Common.Interfaces.Authentication;
using Application.Common.Interfaces.Persistence;
using ErrorOr;
using Domain.Entities;
using Domain.Common.Errors;

namespace Application.Services.Authentication.Queries;

public class AuthenticationQueryService : IAuthenticationQueryService
{
    private readonly IJwtTokenGenerator _jwtTokenGenerator;
    private readonly IUserRepository _userRepository;

    public AuthenticationQueryService(IJwtTokenGenerator jwtTokenGenerator,
        IUserRepository userRepository)
    {
        _jwtTokenGenerator = jwtTokenGenerator;
        _userRepository = userRepository;
    }
   
    public ErrorOr<AuthenticationResult> Login(string email, string password)
    {

        // 1. make sure the user does exist
        if(_userRepository.GetUserByEmail(email) is not User user)
        {
            return Errors.Authentication.InvalidCredentials;
        }

        // 2. validate the password is correct
        if(user.Password != password)
        {
            return Errors.Authentication.InvalidCredentials;
        }

        // 3. create JWT Token
        var token = _jwtTokenGenerator.GenerateToken(user);
        return new AuthenticationResult(
            user,
            token
        );
    }

   
}
