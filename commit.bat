@echo off
echo Pushing changes to remote Repository...
echo Select Repository to push to:
echo [1] Enterprise Inventory System
echo [2] Mira
echo [3] Quanta
echo [4] SkyCast

set /p repoChoice=

if "%repoChoice%"=="1" (
    cd /d "C:\Users\melio\OneDrive\Documents\Website Projects\EnterpriseGradeInventoryManagementSystem"
) else if "%repoChoice%"=="2" (
    cd /d "C:\Users\melio\OneDrive\Documents\Website Projects\Mira"
) else if "%repoChoice%"=="3" (
    cd /d "C:\Users\melio\OneDrive\Documents\Website Projects\Quanta"
) else if "%repoChoice%"=="4" (
    cd /d "C:\Users\melio\OneDrive\Documents\Website Projects\SkyCast"
) else (
    echo Invalid repository choice.
    exit /b
)

echo Enter your commit message:

set /p commitMessage=

git switch feature

git add .

git commit -m "%commitMessage%"

git push origin feature

echo Changes pushed successfully!
echo Do you want to Merge into main branch? (y/n)
set /p mergeChoice=
if /i "%mergeChoice%"=="y" (
    git switch main
    git merge feature
    git push origin main
    echo Merged into main branch and pushed successfully!
) else (
    echo Merge skipped.
)

pause