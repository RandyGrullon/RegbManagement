using System.Data.Common;

using Domain.MenuAggregate;

using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Persistence;

public class RegbDbContext : DbContext
{
    public RegbDbContext(DbContextOptions<RegbDbContext> options)
        : base(options)
    {
    }

    public DbSet<Menu> Menus { get; set; } = null!;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .ApplyConfigurationsFromAssembly(typeof(RegbDbContext).Assembly);

        base.OnModelCreating(modelBuilder);
    }
}