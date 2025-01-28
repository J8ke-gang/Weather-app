/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetchWeather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchWeather.js */ \"./src/fetchWeather.js\");\n/* harmony import */ var _processData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./processData.js */ \"./src/processData.js\");\n\n\n\nconst apiKey = '34a2bba7b8dc4a6ba57153207252701';\nconst cityInput = document.getElementById('city');\nconst weatherDisplay = document.getElementById('weather-display');\nconst getWeatherButton = document.getElementById('get-weather-button');\n\ngetWeatherButton.addEventListener('click', async () => {\n  const city = cityInput.value.trim(); // Trim input to remove extra spaces\n  if (!city) {\n    alert('Please enter a valid city');\n    return;\n  }\n\n  weatherDisplay.innerHTML = '<p>Loading...</p>'; // Show a loading message\n\n  try {\n    const rawData = await (0,_fetchWeather_js__WEBPACK_IMPORTED_MODULE_0__.fetchWeather)(city, apiKey); // Fetch raw data\n    const weatherData = (0,_processData_js__WEBPACK_IMPORTED_MODULE_1__.processWeatherData)(rawData); // Process the data\n\n    // Display processed data\n    weatherDisplay.innerHTML = `\n      <h3>Weather in ${weatherData.location}</h3>\n      <p>Temperature: ${weatherData.temperature}°C</p>\n      <p>Condition: ${weatherData.condition}</p>\n      <img src=\"${weatherData.icon}\" alt=\"${weatherData.condition}\">\n    `;\n  } catch (error) {\n    console.error('Error:', error.message);\n    weatherDisplay.innerHTML = `<p>Failed to get weather data. Please try again later.</p>`;\n    alert('Failed to get weather data');\n  }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzIiwibWFwcGluZ3MiOiI7OztBQUFpRDtBQUNLOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrREFBa0Q7O0FBRWxEO0FBQ0EsMEJBQTBCLDhEQUFZLGdCQUFnQjtBQUN0RCx3QkFBd0IsbUVBQWtCLFdBQVc7O0FBRXJEO0FBQ0E7QUFDQSx1QkFBdUIscUJBQXFCO0FBQzVDLHdCQUF3Qix3QkFBd0I7QUFDaEQsc0JBQXNCLHNCQUFzQjtBQUM1QyxrQkFBa0IsaUJBQWlCLFNBQVMsc0JBQXNCO0FBQ2xFO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZldGNoV2VhdGhlciB9IGZyb20gJy4vZmV0Y2hXZWF0aGVyLmpzJztcbmltcG9ydCB7IHByb2Nlc3NXZWF0aGVyRGF0YSB9IGZyb20gJy4vcHJvY2Vzc0RhdGEuanMnO1xuXG5jb25zdCBhcGlLZXkgPSAnMzRhMmJiYTdiOGRjNGE2YmE1NzE1MzIwNzI1MjcwMSc7XG5jb25zdCBjaXR5SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eScpO1xuY29uc3Qgd2VhdGhlckRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlci1kaXNwbGF5Jyk7XG5jb25zdCBnZXRXZWF0aGVyQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dldC13ZWF0aGVyLWJ1dHRvbicpO1xuXG5nZXRXZWF0aGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICBjb25zdCBjaXR5ID0gY2l0eUlucHV0LnZhbHVlLnRyaW0oKTsgLy8gVHJpbSBpbnB1dCB0byByZW1vdmUgZXh0cmEgc3BhY2VzXG4gIGlmICghY2l0eSkge1xuICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgYSB2YWxpZCBjaXR5Jyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgd2VhdGhlckRpc3BsYXkuaW5uZXJIVE1MID0gJzxwPkxvYWRpbmcuLi48L3A+JzsgLy8gU2hvdyBhIGxvYWRpbmcgbWVzc2FnZVxuXG4gIHRyeSB7XG4gICAgY29uc3QgcmF3RGF0YSA9IGF3YWl0IGZldGNoV2VhdGhlcihjaXR5LCBhcGlLZXkpOyAvLyBGZXRjaCByYXcgZGF0YVxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gcHJvY2Vzc1dlYXRoZXJEYXRhKHJhd0RhdGEpOyAvLyBQcm9jZXNzIHRoZSBkYXRhXG5cbiAgICAvLyBEaXNwbGF5IHByb2Nlc3NlZCBkYXRhXG4gICAgd2VhdGhlckRpc3BsYXkuaW5uZXJIVE1MID0gYFxuICAgICAgPGgzPldlYXRoZXIgaW4gJHt3ZWF0aGVyRGF0YS5sb2NhdGlvbn08L2gzPlxuICAgICAgPHA+VGVtcGVyYXR1cmU6ICR7d2VhdGhlckRhdGEudGVtcGVyYXR1cmV9wrBDPC9wPlxuICAgICAgPHA+Q29uZGl0aW9uOiAke3dlYXRoZXJEYXRhLmNvbmRpdGlvbn08L3A+XG4gICAgICA8aW1nIHNyYz1cIiR7d2VhdGhlckRhdGEuaWNvbn1cIiBhbHQ9XCIke3dlYXRoZXJEYXRhLmNvbmRpdGlvbn1cIj5cbiAgICBgO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgIHdlYXRoZXJEaXNwbGF5LmlubmVySFRNTCA9IGA8cD5GYWlsZWQgdG8gZ2V0IHdlYXRoZXIgZGF0YS4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci48L3A+YDtcbiAgICBhbGVydCgnRmFpbGVkIHRvIGdldCB3ZWF0aGVyIGRhdGEnKTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ }),

/***/ "./src/fetchWeather.js":
/*!*****************************!*\
  !*** ./src/fetchWeather.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchWeather: () => (/* binding */ fetchWeather)\n/* harmony export */ });\nasync function fetchWeather(city, apiKey) {\n  const endpoint = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3&aqi=no&alerts=no`;\n\n  const response = await fetch(endpoint);\n  if (!response.ok) {\n    throw new Error('Failed to fetch weather data');\n  }\n\n  return response.json();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmV0Y2hXZWF0aGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTztBQUNQLHNFQUFzRSxPQUFPLEtBQUssS0FBSzs7QUFFdkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2ZldGNoV2VhdGhlci5qcz82NjFmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFdlYXRoZXIoY2l0eSwgYXBpS2V5KSB7XG4gIGNvbnN0IGVuZHBvaW50ID0gYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7YXBpS2V5fSZxPSR7Y2l0eX0mZGF5cz0zJmFxaT1ubyZhbGVydHM9bm9gO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZW5kcG9pbnQpO1xuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggd2VhdGhlciBkYXRhJyk7XG4gIH1cblxuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/fetchWeather.js\n");

/***/ }),

/***/ "./src/processData.js":
/*!****************************!*\
  !*** ./src/processData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   processWeatherData: () => (/* binding */ processWeatherData)\n/* harmony export */ });\nfunction processWeatherData(data) {\n    return {\n      location: data.location.name,\n      temperature: data.current.temp_c,\n      condition: data.current.condition.text,\n      icon: data.current.condition.icon,\n    };\n  }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvY2Vzc0RhdGEuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3Byb2Nlc3NEYXRhLmpzPzYzM2EiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NXZWF0aGVyRGF0YShkYXRhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvY2F0aW9uOiBkYXRhLmxvY2F0aW9uLm5hbWUsXG4gICAgICB0ZW1wZXJhdHVyZTogZGF0YS5jdXJyZW50LnRlbXBfYyxcbiAgICAgIGNvbmRpdGlvbjogZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LFxuICAgICAgaWNvbjogZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uLFxuICAgIH07XG4gIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/processData.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;