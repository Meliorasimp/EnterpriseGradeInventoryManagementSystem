using EnterpriseGradeInventoryAPI.Data;
using EnterpriseGradeInventoryAPI.Models;
using HotChocolate.Types;
using HotChocolate;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

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

    // Get average utilization status across all storage locations
    public int GetAverageUtilizationStatus([Service] ApplicationDbContext context)
    {
      var location = context.StorageLocations.ToList();
      if (location.Count == 0)
      {
        return 0;
      }

      int totalMaxCapacity = location.Sum(loc => loc.MaxCapacity);
      int totalCurrentCapacity = location.Sum(loc => loc.OccupiedCapacity);

      if(totalMaxCapacity == 0)
      {
        return 0;
      }

      return (int)Math.Round((double)totalCurrentCapacity / totalMaxCapacity * 100);
    }

    // Get total number of storage locations
    public int GetTotalLocations ([Service] ApplicationDbContext context)
    {
      return context.StorageLocations.Count();
    }

    // Get available space percentage across all storage locations
    public int GetAvailableSpace([Service] ApplicationDbContext context)
    {
      var location = context.StorageLocations.ToList();

      int totalAvailableSpace = location.Sum(loc => loc.MaxCapacity - loc.OccupiedCapacity);

      int totalMaxCapacity = location.Sum(loc => loc.MaxCapacity);
      if(totalMaxCapacity == 0)
      {
        return 0;
      }

      double averageAvailableSpace = totalAvailableSpace / (double)totalMaxCapacity * 100;

      return (int)Math.Round(averageAvailableSpace);
    }

    // Get count of storage locations that have reached or exceeded capacity
    public int GetCapacityAlert([Service] ApplicationDbContext context)
    {
      var alertCount = context.StorageLocations
        .Count(sl => sl.OccupiedCapacity >= sl.MaxCapacity);

      return alertCount;
    }

    // Get total capacity across all storage locations
    public int GetTotalCapacity([Service] ApplicationDbContext context)
    {
      var location = context.StorageLocations.ToList();
      int totalMaxCapacity = location.Sum(loc => loc.MaxCapacity);
      return totalMaxCapacity;
    }

    // Get total occupied capacity across all storage locations
    public int GetTotalOccupiedCapacity([Service] ApplicationDbContext context)
    {
      var location = context.StorageLocations.ToList();
      int totalCurrentCapacity = location.Sum(loc => loc.OccupiedCapacity);
      return totalCurrentCapacity;
    }
    
    // Get total available space across all storage locations
    public int GetTotalAvailableSpace([Service] ApplicationDbContext context)
    {
      var location = context.StorageLocations.ToList();
      int totalMaxCapacity = location.Sum(loc => loc.MaxCapacity);
      int totalCurrentCapacity = location.Sum(loc => loc.OccupiedCapacity);
      return totalMaxCapacity - totalCurrentCapacity;
    }
    // Get storage location by warehouse name
    public async Task<StorageLocation> GetStorageLocationWarehouse([Service] ApplicationDbContext context, string warehouseName)
    {
      var storageLocation = await context.StorageLocations
        .Include(sl => sl.Warehouse)
        .Include(sl => sl.User)
        .Where(sl => sl.Warehouse != null && sl.Warehouse.WarehouseName == warehouseName)
        .ToListAsync();

      if (storageLocation.Count == 0)
      {
        throw new GraphQLException($"Storage location for warehouse '{warehouseName}' not found.");
      }

      return storageLocation;
    }

    //Get Storage Location by Search Term
    public IQueryable<StorageLocation> GetStorageLocationSearch([Service] ApplicationDbContext context, string searchTerm)
    {
      var keyword = searchTerm.ToLower();
      return context.StorageLocations
        .Include(sl => sl.Warehouse)
        .Include(sl => sl.User)
        .Where(sl =>
          sl.LocationCode.ToLower().Contains(keyword) ||
          sl.Warehouse != null && sl.Warehouse.WarehouseName.ToLower().Contains(keyword));
    }
  }
}