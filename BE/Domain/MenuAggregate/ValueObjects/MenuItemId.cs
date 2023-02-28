using Domain.Common.Models;

namespace Domain.MenuAggregate.ValueObjects;

public sealed class MenuItemId : ValueObject
{
    public Guid Value { get; private set; }

    private MenuItemId(Guid value)
    {
        Value = value;
    }

    public override IEnumerable<object> GetEqualityComponents()
    {
        yield return Value;
    }

    public static MenuItemId Create(Guid value)
    {
        return new MenuItemId(value);
    }

    public static MenuItemId CreateUnique()
    {
        return new MenuItemId(Guid.NewGuid());
    }
}