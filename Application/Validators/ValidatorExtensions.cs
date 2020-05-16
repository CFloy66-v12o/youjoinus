using FluentValidation;

namespace Application.Validators
{
    public static class ValidatorExtensions
    {
        public static IRuleBuilder<T, string> Password<T>(this IRuleBuilder<T, string> ruleBuilder)
        {
            var options = ruleBuilder
            .NotEmpty()
            .MinimumLength(6)
            .WithMessage("password must be at least 6 characters")
            .Matches("[A-Z]").WithMessage("password must contain at least 1 uppercase letter")
            .Matches("[a-z]").WithMessage("password must contain at least 1 lower case letter")
            .Matches("[0-9]").WithMessage("password must contain a number")
            .Matches("[^a-zA-Z0-9]").WithMessage("password must contain non-alphanumeric characters");

            return options;
        }
    }
}
