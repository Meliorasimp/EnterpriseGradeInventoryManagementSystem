using EnterpriseGradeInventoryAPI.Data;
using EnterpriseGradeInventoryAPI.Models;
using Microsoft.AspNetCore.Identity;

namespace EnterpriseGradeInventoryAPI.GraphQL
{
  public class Mutation
  {
    // Register a new user 
    public async Task<UserPayload> registerUser([Service] ApplicationDbContext context, string firstname, string lastname, string email, string password)
    {
      try
      {
        // Check if user already exists
        var existingUser = context.Users.FirstOrDefault(u => u.Email == email);
        if (existingUser != null)
        {
          throw new GraphQLException("User with this email already exists");
        }

        var passwordHasher = new PasswordHasher<User>();
        var user = new User
        {
          FirstName = firstname,
          LastName = lastname,
          Email = email,
          PasswordHash = passwordHasher.HashPassword(null!, password)
        };

        context.Users.Add(user);
        await context.SaveChangesAsync();
        return new UserPayload
        {
          Id = user.Id,
          Firstname = user.FirstName,
          Lastname = user.LastName,
          Email = user.Email
        };
      }
      catch (Exception ex)
      {
        throw new GraphQLException($"Registration failed: {ex.Message}");
      }
    }
  }

  // DTO for GraphQL response
  public class UserPayload
  {
    public int Id { get; set; }
    public string Firstname { get; set; } = string.Empty;
    public string Lastname { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
  }

}