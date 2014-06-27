@echo off
if "%1" == "" goto :err
checkit web\js\LabelDesigner%1.js /f /e1
if errorlevel 1 goto :file-exists
goto :copy
:file-exists
qask "Copy web\js\LabelDesigner.js over web\js\LabelDesigner%1.js (y,n)?" yn
if errorlevel 2 goto :exit
:copy
echo copy web\LabelDesigner.jsp to web\LabelDesigner%1.jsp
copy web\LabelDesigner.jsp web\LabelDesigner%1.jsp
echo copy web\js\LabelDesigner.js to web\js\LabelDesigner%1.js
copy web\js\LabelDesigner.js web\js\LabelDesigner%1.js
goto :exit
:err
echo version required
:exit