using Application.Authentication.Commands.Register;
using Application.Authentication.Common;
using Application.Authentication.Queries.Login;
using Contracts.Authentication;
using Mapster;

namespace Api.Common.Mapping;

public class AuthenticationMappingConfig : IRegister
{
    public void Register(TypeAdapterConfig config)
    {
        config.NewConfig<RegisterCommand, RegisterRequest>();
        config.NewConfig<LoginQuery, LoginRequest>();
        config.NewConfig<AuthenticationResult, AuthenticationResult>()
            .Map(dest => dest, src => src.User);
    }
}