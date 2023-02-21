using Microsoft.Extensions.DependencyInjection;
using Application.Services.Authentication.Commands;
using Application.Services.Authentication.Queries;

namespace Application;

public static class DependencyInjection
{
    public static IServiceCollection AddApplication(this IServiceCollection services)
    {
        services.AddScoped<IAuthenticationCommandService, AuthenticationCommandService>();
        services.AddScoped<IAuthenticationQueryService, AuthenticationQueryService>();
        return services;
    }

}