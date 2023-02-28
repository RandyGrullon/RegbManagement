using Ardalis.SmartEnum;

namespace Domain.DinnerAggregate.Enums;

public class ReservationStatus : SmartEnum<ReservationStatus>
{
    public ReservationStatus(string name, int value) : base(name, value)
    {
    }

    public static readonly ReservationStatus PendingGuestApproval = new(nameof(PendingGuestApproval), 1);
    public static readonly ReservationStatus Reserved = new(nameof(Reserved), 2);
    public static readonly ReservationStatus Cancelled = new(nameof(Cancelled), 3);
}