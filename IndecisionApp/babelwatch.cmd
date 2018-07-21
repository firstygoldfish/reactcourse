@echo off
echo Starting babel in watch mode for src/app.js
echo [CTRL-C] Y [RETURN] to quit
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch