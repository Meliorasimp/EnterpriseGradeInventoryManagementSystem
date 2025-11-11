using EnterpriseGradeInventoryAPI.Data;
using EnterpriseGradeInventoryAPI.Models;

namespace EnterpriseGradeInventoryAPI.Models
{
  public class StorageLocation
  {
    public int Id { get; set; }
    public string LocationCode { get; set; } = null!;
    public int Capacity { get; set; }
    public int CurrentOccupancy { get; set; }
    public string CategoryStored { get; set; } = null!;
    public int Utilization { get; set; }
    public string UnitOfMeasure { get; set; } = null!;
    public string Notes { get; set; } = null!;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    //Foreign Key to Warehouse Model
    public int WarehouseId { get; set; }
    public Warehouse Warehouse { get; set; } = null!;
  }
}