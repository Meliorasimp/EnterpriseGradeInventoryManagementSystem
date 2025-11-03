using Microsoft.EntityFrameworkCore;
using EnterpriseGradeInventoryAPI.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

// Enable CORS for the client app (default Vite port 5173)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowClient",
        policy => policy
            .WithOrigins("http://localhost:5173", "https://localhost:5173")
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials()
    );
});
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Configure GraphQL
builder.Services
    .AddGraphQLServer()
    .AddQueryType<EnterpriseGradeInventoryAPI.GraphQL.Query>()
    .AddMutationType<EnterpriseGradeInventoryAPI.GraphQL.Mutation>();
    

var app = builder.Build();



// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

// Use CORS
app.UseCors("AllowClient");

app.UseHttpsRedirection();

// Map GraphQL endpoint
app.MapGraphQL("/graphql");

app.Run();
