using System.Reflection;
using Microsoft.Extensions.DependencyInjection;
using MediatR;
using Application.Authentication.Commands.Register;
using ErrorOr;
using Application.Authentication.Common;
using Application.Authentication.Common.Behaviors;
using FluentValidation;

namespace Application;

public static class DependencyInjection
{
    public static IServiceCollection AddApplication(this IServiceCollection services)
    {
        services.AddMediatR(typeof(DependencyInjection).Assembly);

        services.AddScoped(
            typeof(IPipelineBehavior<,>),
            typeof(ValidateBehavior<,>)
        );

        services.AddScoped<IValidator<RegisterCommand>, RegisterCommandValidator>();

        services.AddValidatorsFromAssembly(Assembly.GetExecutingAssembly());

        return services;
    }

}