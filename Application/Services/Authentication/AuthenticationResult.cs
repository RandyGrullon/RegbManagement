
using Domain.Entities;
namespace Application.Services.Authentication;

public record AuthenticationResult(
    User User,
    string Token
);