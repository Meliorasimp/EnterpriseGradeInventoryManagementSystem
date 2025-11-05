@echo off
echo Starting Enterprise Grade Inventory System

REM Start the backend (.NET API) in a new terminal window
start "Backend" cmd /k "cd /d C:\Users\melio\OneDrive\Documents\Website Projects\EnterpriseGradeInventoryManagementSystem\EnterpriseGradeInventoryAPI && dotnet run --launch-profile https"

REM Start the frontend (React/Vite app) in another terminal window
start "Frontend" cmd /k "cd /d C:\Users\melio\OneDrive\Documents\Website Projects\EnterpriseGradeInventoryManagementSystem\EnterpriseGradeInventoryClient && npm run dev"


echo Backend and Frontend are starting...
pause
