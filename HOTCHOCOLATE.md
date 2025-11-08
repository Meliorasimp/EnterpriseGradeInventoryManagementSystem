The function Name of the Query or Mutation must Match with the c# function in the backend,
Do note that Hotchocolate Removes Some Prefixes so I listed all the Prefixes it
removes to save you time and Headache.

From Query/Mutation name ➡️ Backend C# name

Prefixes HotChocolate Removes:
Get Prefix (Most Common):
GetUser() → user
GetUsers() → users
GetInventory() → inventory
GetUserById() → userById
GetProductList() → productList

Is Prefix (Boolean Methods):
IsActive() → active
IsValid() → valid
IsAuthenticated() → authenticated

Has Prefix (Boolean Methods):
HasPermission() → permission
HasAccess() → access
HasInventory() → inventory

Can Prefix (Boolean Methods):
CanEdit() → edit
CanDelete() → delete
CanAccess() → access

❌ Prefixes HotChocolate KEEPS:
Action Verbs (Mutations):
CreateUser() → createUser ✅
UpdateProduct() → updateProduct ✅
DeleteItem() → deleteItem ✅
AddInventory() → addInventory ✅

Other Verbs:
FindUser() → findUser ✅
SearchProducts() → searchProducts ✅
CalculateTotal() → calculateTotal ✅
