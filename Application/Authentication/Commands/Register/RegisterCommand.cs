
using ErrorOr;
using MediatR;
using Application.Authentication.Common;

namespace Application.Authentication.Commands.Register;

public record RegisterCommand(
    string firstName,
    string lastName,
    string email,
    string password
) : IRequest<ErrorOr<AuthenticationResult>>;