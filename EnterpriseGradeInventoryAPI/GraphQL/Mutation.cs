using EnterpriseGradeInventoryAPI.Data;
using EnterpriseGradeInventoryAPI.Models;

namespace EnterpriseGradeInventoryAPI.GraphQL
{
  public class Mutation
  {
    // Example mutation: create a new user
    public async Task<User> addUser([Service] ApplicationDbContext context, string firstname, string lastname, string email, string passwordHash)
    {
      var user = new User
      {
        FirstName = firstname,
        LastName = lastname,
        Email = email,
        PasswordHash = passwordHash
      };
      context.Users.Add(user);
      await context.SaveChangesAsync();
      return user;
    } 
  }
}