using EnterpriseGradeInventoryAPI.Data;
using EnterpriseGradeInventoryAPI.Models;
using HotChocolate;

namespace EnterpriseGradeInventoryAPI.GraphQL.Mutations
{
  //Input type for GraphQL mutations
  public class InventoryInput
  {
    public string ItemSKU { get; set; } = string.Empty;
    public string ProductName { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    public string WarehouseLocation { get; set; } = string.Empty;
    public string RackLocation { get; set; } = string.Empty;
    public int QuantityInStock { get; set; }
    public int ReorderLevel { get; set; }
    public string UnitOfMeasure { get; set; } = string.Empty;
    public int CostPerUnit { get; set; }
    public int TotalValue { get; set; }
  }

  public class InventoryMutation
  {
    //Add Inventory to the Database
    public async Task<InventoryPayload> addInventory([Service] ApplicationDbContext context, string userId, List<InventoryInput> inventory)
    {
      try
      {
        foreach (var item in inventory)
        {
          var newInventory = new Inventory
          {
            ItemSKU = item.ItemSKU,
            ProductName = item.ProductName,
            Category = item.Category,
            WarehouseLocation = item.WarehouseLocation,
            RackLocation = item.RackLocation,
            QuantityInStock = item.QuantityInStock,
            ReorderLevel = item.ReorderLevel,
            UnitOfMeasure = item.UnitOfMeasure,
            CostPerUnit = item.CostPerUnit,
            TotalValue = item.QuantityInStock * item.CostPerUnit,
            UserId = int.Parse(userId),
            LastRestocked = DateTime.Now
          };
          context.Inventories.Add(newInventory);
        }
        //Save changes to MySQL Database
        await context.SaveChangesAsync();
        
        // Get the last added inventory for response
        var lastInventory = context.Inventories.OrderBy(i => i.Id).Last();
        
        return new InventoryPayload
        {
          Id = lastInventory.Id,
          ItemName = lastInventory.ProductName,
          Quantity = lastInventory.QuantityInStock,
          UserId = int.Parse(userId)
        };
      }
      catch (Exception ex)
      {
        // Handle exceptions
        throw new GraphQLException("Error adding inventory", ex);
      }
    }

    //Return type for GraphQL response OwO
    public class InventoryPayload
    {
      [GraphQLName("id")]
      public int Id { get; set; }
      [GraphQLName("itemName")]
      public string ItemName { get; set; } = string.Empty;
      [GraphQLName("quantity")]
      public int Quantity { get; set; }
      [GraphQLName("userId")]
      public int UserId { get; set; }

    }
  }
}