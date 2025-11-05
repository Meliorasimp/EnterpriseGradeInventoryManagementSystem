@echo off
echo Select Repository:
echo [1] Enterprise Inventory API
echo [2] React Frontend
set /p choice=

if "%choice%"=="1" (
    cd /d "C:\Users\melio\Documents\EnterpriseInventoryAPI"
) else if "%choice%"=="2" (
    cd /d "C:\Users\melio\Documents\EnterpriseInventoryFrontend"
) else (
    echo Invalid choice.
    exit /b
)

echo Enter commit message:
set /p msg=

git add .
git commit -m "%msg%"
git push origin feature

pause
