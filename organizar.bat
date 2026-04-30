@echo off
echo =========================================
echo Organizador do Projeto Máquina ISP
echo =========================================

echo.
echo Criando pastas...
if not exist "css" mkdir css
if not exist "javascript" mkdir javascript
if not exist "images" mkdir images
if not exist "videos" mkdir videos

echo.
echo Movendo imagens...
move "*.jpg" "images\" >nul 2>&1
move "*.png" "images\" >nul 2>&1

echo.
echo Movendo vídeos...
move "*.mp4" "videos\" >nul 2>&1

echo.
echo =========================================
echo Organizacao concluida com sucesso!
echo =========================================
pause
