using Domain.BillAggregate.ValueObjects;
using Domain.Common.Models;
using Domain.DinnerAggregate.ValueObjects;
using Domain.GuestAggregate.Entities;
using Domain.GuestAggregate.ValueObjects;
using Domain.MenuReviewAggregate.ValueObjects;
using Domain.UserAggregate.ValueObjects;

namespace Domain.GuestAggregate;

public sealed class Guest : AggregateRoot<GuestId>
{
    private readonly List<DinnerId> _upcomingDinnerIds = new();
    private readonly List<DinnerId> _pastDinnerIds = new();
    private readonly List<DinnerId> _pendingDinnerIds = new();
    private readonly List<BillId> _billIds = new();
    private readonly List<MenuReviewId> _menuReviewIds = new();
    private readonly List<GuestRating> _ratings = new();

    public string FirstName { get; }
    public string LastName { get; }
    public Uri ProfileImage { get; }
    public UserId UserId { get; }

    public IReadOnlyList<DinnerId> UpcomingDinnerIds => _upcomingDinnerIds.AsReadOnly();
    public IReadOnlyList<DinnerId> PastDinnerIds => _pastDinnerIds.AsReadOnly();
    public IReadOnlyList<DinnerId> PendingDinnerIds => _pendingDinnerIds.AsReadOnly();
    public IReadOnlyList<BillId> BillIds => _billIds.AsReadOnly();
    public IReadOnlyList<MenuReviewId> MenuReviewIds => _menuReviewIds.AsReadOnly();
    public IReadOnlyList<GuestRating> Ratings => _ratings.AsReadOnly();

    public DateTime CreatedDateTime { get; }
    public DateTime UpdatedDateTime { get; }

    private Guest(string firstName, string lastName, Uri profileImage, UserId userId, GuestRating? guestRating = null, GuestId? guestId = null)
        : base(guestId ?? GuestId.CreateUnique())
    {
        FirstName = firstName;
        LastName = lastName;
        ProfileImage = profileImage;
        UserId = userId;
    }

    public static Guest Create(string firstName, string lastName, Uri profileImage, UserId userId)
    {
        // TODO: enforce invariants
        return new Guest(firstName, lastName, profileImage, userId);
    }
}