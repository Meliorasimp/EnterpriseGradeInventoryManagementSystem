using Microsoft.EntityFrameworkCore;
using EnterpriseGradeInventoryAPI.Models;

namespace EnterpriseGradeInventoryAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Inventory> Inventories { get; set; }
    }
}