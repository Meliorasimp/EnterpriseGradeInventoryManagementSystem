using EnterpriseGradeInventoryAPI.Data;
using EnterpriseGradeInventoryAPI.Models;
using HotChocolate.Types;
using HotChocolate;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace EnterpriseGradeInventoryAPI.GraphQL.Queries
{
  [ExtendObjectType(typeof(Query))]
  public class StorageLocationQuery
  {

    public async Task<List<StorageLocation>> GetAllStorageLocations([Service] ApplicationDbContext context)
    {
      try
      {
        var storageLocations = await context.StorageLocations
          .Include(sl => sl.Warehouse)
          .Include(sl => sl.User)
          .ToListAsync();
        return storageLocations;
      }
      catch (Exception ex)
      {
        // Log or throw a more specific error
        throw new GraphQLException($"Error fetching storage locations: {ex.Message}");
      }
    }

    /*public int GetAverageUtilizationStatus([Service] ApplicationDbContext context)
    {
      foreach(var location in context.StorageLocations)
      {
        int totalMaxCapacity = location.MaxCapacity;
        int usedCapacity = location.OccupiedCapacity;
        if (totalMaxCapacity == 0) continue; // Avoid division by zero
        int averageUtilization = usedCapacity / totalMaxCapacity * 100;
      }
    } */
  }
}