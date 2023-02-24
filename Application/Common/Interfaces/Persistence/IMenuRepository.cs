using Domain.MenuAggregate;

namespace Application.Common.Interfaces.Persistence;

public interface IMenuRepository
{
    void Add(Menu menu);
}