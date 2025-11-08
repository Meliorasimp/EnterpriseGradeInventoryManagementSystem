using EnterpriseGradeInventoryAPI.Data;
using EnterpriseGradeInventoryAPI.Models;
using HotChocolate.Types;
using HotChocolate;
using System.Linq;

namespace EnterpriseGradeInventoryAPI.GraphQL.Queries
{
  [ExtendObjectType(typeof(Query))]
  public class InventoryQuery
  {
    public IQueryable<Inventory> GetAllInventoryItems([Service] ApplicationDbContext context) =>
    context.Inventories;
    
    public int GetTotalInventoryValue([Service] ApplicationDbContext context)
    {
      return context.Inventories.Sum(i => i.TotalValue);
    }
    
    public int GetInStockItems([Service] ApplicationDbContext context)
    {
      return context.Inventories.Count(i => i.QuantityInStock > 0 && i.QuantityInStock > i.ReorderLevel);
    }

    public int GetLowStockItems([Service] ApplicationDbContext context)
    {
      return context.Inventories.Count(i => i.QuantityInStock <= i.ReorderLevel);
    }

    public int GetOutOfStockItems([Service] ApplicationDbContext context)
    {
      return context.Inventories.Count(i => i.QuantityInStock == 0);
    }
    
    public IQueryable<Inventory> GetItemBySearchTerm([Service] ApplicationDbContext context, string searchTerm)
    {
      var keyword = searchTerm.ToLower();
      return context.Inventories.Where(i =>
        i.ProductName.ToLower().Contains(keyword) ||
        i.Category.ToLower().Contains(keyword) ||
        i.WarehouseLocation.ToLower().Contains(keyword) ||
        i.ItemSKU.ToLower().Contains(keyword));
    }
  }
}