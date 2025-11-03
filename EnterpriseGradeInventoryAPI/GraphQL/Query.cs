
using EnterpriseGradeInventoryAPI.Data;
using EnterpriseGradeInventoryAPI.Models;

namespace EnterpriseGradeInventoryAPI.GraphQL
{
  public class Query
  {
    // Example query: get all users
    public IQueryable<User> GetUsers([Service] ApplicationDbContext context)
    {
      return context.Users;
    }
    // Example query: get a user by id
    public User? GetUserById([Service] ApplicationDbContext context, int id)
    {
      return context.Users.FirstOrDefault(u => u.Id == id);
    }
  }
}