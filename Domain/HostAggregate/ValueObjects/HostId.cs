using Domain.Common.Models;
using Domain.UserAggregate.ValueObjects;

namespace Domain.HostAggregate.ValueObjects;

public sealed class HostId : ValueObject
{
    private HostId(string value)
    {
        Value = value;
    }

    public string Value { get; private set; }

    public static HostId Create(UserId userId)
    {
        // TODO: enforce invariants
        return new HostId($"Host_{userId.Value}");
    }

    public static HostId Create(string hostId)
    {
        // TODO: enforce invariants
        return new HostId(hostId);
    }

    public override IEnumerable<object> GetEqualityComponents()
    {
        yield return Value;
    }
}