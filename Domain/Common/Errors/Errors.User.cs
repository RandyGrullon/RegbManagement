using ErrorOr;

namespace Domain.Common.Errors;

public static partial class Errors
{
    public static class User
    {
        public static Error DuplicateEmail => Error.Conflict(code: 
            "user.DuplicateEmail", 
            description: "Email is already in use");
    }
}