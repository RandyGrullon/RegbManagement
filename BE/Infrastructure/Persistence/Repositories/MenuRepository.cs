using Application.Common.Interfaces.Persistence;
using Domain.MenuAggregate;

namespace Infrastructure.Persistence.Repositories;

public class MenuRepository : IMenuRepository
{
    private readonly RegbDbContext _dbContext;

    public MenuRepository(RegbDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public void Add(Menu menu)
    {
        _dbContext.Add(menu);
        _dbContext.SaveChanges();
    }
}