using Domain.Common.Models;
using Domain.Common.ValueObjects;
using Domain.DinnerAggregate.ValueObjects;
using Domain.HostAggregate.ValueObjects;
using Domain.MenuAggregate.Entities;
using Domain.MenuAggregate.ValueObjects;
using Domain.MenuReviewAggregate.ValueObjects;

namespace Domain.MenuAggregate;

public sealed class Menu : AggregateRoot<MenuId>
{
    private readonly List<MenuSection> _sections = new();
    private readonly List<DinnerId> _dinnerIds = new();
    private readonly List<MenuReviewId> _menuReviewIds = new();

    public string Name { get; private set; }
    public string Description { get; private set; }
    public AverageRating AverageRating { get; private set; }
    public IReadOnlyList<MenuSection> Sections => _sections.AsReadOnly();
    public HostId HostId { get; private set; }

    public IReadOnlyList<DinnerId> DinnerIds => _dinnerIds.AsReadOnly();
    public IReadOnlyList<MenuReviewId> MenuReviewIds => _menuReviewIds.AsReadOnly();

    public DateTime CreatedDateTime { get; private set; }
    public DateTime UpdatedDateTime { get; private set; }

    private Menu(
        MenuId menuId,
        HostId hostId,
        string name,
        string description,
        AverageRating averageRating,
        List<MenuSection> sections)
        : base(menuId)
    {
        HostId = hostId;
        Name = name;
        Description = description;
        AverageRating = averageRating;
        _sections = sections;
    }

    public static Menu Create(
        HostId hostId,
        string name,
        string description,
        List<MenuSection>? sections = null)
    {
        // TODO: enforce invariants
        return new Menu(
            MenuId.CreateUnique(),
            hostId,
            name,
            description,
            AverageRating.CreateNew(),
            sections ?? new());
    }

#pragma warning disable CS8618
    private Menu()
    {
    }
#pragma warning restore CS8618
}