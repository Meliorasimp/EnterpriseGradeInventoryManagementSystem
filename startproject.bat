@echo off
echo ====================================
echo Starting Enterprise Grade Inventory System
echo ====================================

REM Start the backend (.NET API) in a new terminal window
start "Backend" cmd /k "cd /d C:\Users\melio\OneDrive\Documents\Website Projects\EnterpriseGradeInventoryManagementSystem\EnterpriseGradeInventoryAPI && dotnet run --launch-profile https"

REM Start the frontend (React/Vite app) in another terminal window
start "Frontend" cmd /k "cd /d C:\Users\melio\OneDrive\Documents\Website Projects\EnterpriseGradeInventoryManagementSystem\EnterpriseGradeInventoryClient && npm run dev"

REM
start http://localhost:5173

echo ====================================
echo Backend and Frontend are starting...
echo ====================================
pause
