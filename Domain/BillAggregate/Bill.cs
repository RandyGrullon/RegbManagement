using Domain.BillAggregate.ValueObjects;
using Domain.Common.Models;
using Domain.DinnerAggregate.ValueObjects;
using Domain.GuestAggregate.ValueObjects;
using Domain.HostAggregate.ValueObjects;

namespace Domain.BillAggregate;

public sealed class Bill : AggregateRoot<BillId>
{
    public DinnerId DinnerId { get; }
    public GuestId GuestId { get; }
    public HostId HostId { get; }
    public Price Amount { get; }
    public DateTime CreatedDateTime { get; }
    public DateTime UpdatedDateTime { get; }

    private Bill(
        DinnerId dinnerId,
        GuestId guestId,
        HostId hostId,
        Price amount,
        DateTime createdDateTime,
        DateTime updatedDateTime)
        : base(BillId.Create(dinnerId, guestId))
    {
        DinnerId = dinnerId;
        GuestId = guestId;
        HostId = hostId;
        Amount = amount;
        CreatedDateTime = createdDateTime;
        UpdatedDateTime = updatedDateTime;
    }

    public static Bill Create(
        DinnerId dinnerId,
        GuestId guestId,
        HostId hostId,
        Price amount,
        DateTime createdDateTime,
        DateTime updatedDateTime)
    {
        // TODO: enforce invariants
        return new Bill(
            dinnerId,
            guestId,
            hostId,
            amount,
            createdDateTime,
            updatedDateTime);
    }
}