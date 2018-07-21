@echo off
echo Starting babel in watch mode for src/app.js
echo [CTRL-C] Y [RETURN] to quit
REM babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
REM babel src/playground/es6-let-const.js --out-file=public/scripts/app.js --presets=env,react --watch
REM babel src/playground/es6-arrow-function.js --out-file=public/scripts/app.js --presets=env,react --watch
babel src/playground/es6-arrow-function2.js --out-file=public/scripts/app.js --presets=env,react --watch