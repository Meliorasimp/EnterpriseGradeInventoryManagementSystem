using EnterpriseGradeInventoryAPI.Data;
using EnterpriseGradeInventoryAPI.Models;
using HotChocolate;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace EnterpriseGradeInventoryAPI.GraphQL.Mutations
{
  public class LoginMutation
  {
    public async Task<User> loginUser([Service] ApplicationDbContext context, string loginemail, string loginpassword)
    {
      var passwordHasher = new PasswordHasher<User>();
      var user = await context.Users.FirstOrDefaultAsync(u => u.Email == loginemail);
      if (user == null)
      {
        throw new GraphQLException("Invalid email or password");
      }
      var passwordVerificationResult = passwordHasher.VerifyHashedPassword(user, user.PasswordHash, loginpassword);
      if (passwordVerificationResult == PasswordVerificationResult.Failed)
      {
        throw new GraphQLException("Invalid email or password");
      }
      return user;
    }
  }
}