using Domain.Common.Models;

namespace Domain.MenuAggregate.ValueObjects;

public sealed class MenuSectionId : ValueObject
{
    public MenuSectionId(Guid value)
    {
        Value = value;
    }

    public Guid Value { get; private set; }

    public static MenuSectionId CreateUnique()
    {
        // TODO: enforce invariants
        return new MenuSectionId(Guid.NewGuid());
    }

    public static MenuSectionId Create(Guid value)
    {
        // TODO: enforce invariants
        return new MenuSectionId(value);
    }

    public override IEnumerable<object> GetEqualityComponents()
    {
        yield return Value;
    }
}