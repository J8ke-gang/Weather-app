/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _fetchWeather_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchWeather.js */ \"./src/fetchWeather.js\");\n/* harmony import */ var _processData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./processData.js */ \"./src/processData.js\");\n\n\n\n\n\nconst apiKey = \"34a2bba7b8dc4a6ba57153207252701\";\nconst cityInput = document.getElementById(\"city\");\nconst weatherDisplay = document.getElementById(\"weather-display\");\nconst form = document.getElementById(\"weather-form\");\n\nform.addEventListener(\"submit\", async (e) => {\n  e.preventDefault();\n  const city = cityInput.value.trim();\n  if (!city) {\n    alert(\"Please enter a valid city\");\n    return;\n  }\n\n  weatherDisplay.innerHTML = \"<p>Loading...</p>\";\n\n  try {\n    const rawData = await (0,_fetchWeather_js__WEBPACK_IMPORTED_MODULE_1__.fetchWeather)(city, apiKey);\n    const weatherData = (0,_processData_js__WEBPACK_IMPORTED_MODULE_2__.processWeatherData)(rawData);\n\n    // 3-day weather forecast display\n    const forecastHTML = weatherData.forecast\n      .map(\n        (day) => `\n        <div class=\"forecast-day\">\n          <h4>${day.date}</h4>\n          <p>Max Temp: ${day.maxTemp ?? \"N/A\"}°C</p>\n          <p>Min Temp: ${day.minTemp ?? \"N/A\"}°C</p>\n          <p>Condition: ${day.condition || \"N/A\"}</p>\n          <img src=\"${day.icon || \"fallback-icon.png\"}\" alt=\"${\n          day.condition || \"Weather icon\"\n        }\">\n        </div>\n      `\n      )\n      .join(\"\");\n\n    const capitalizedCity = weatherData.location\n      .toLowerCase()\n      .replace(/\\b\\w/g, (c) => c.toUpperCase());\n\n    // Final display\n    weatherDisplay.innerHTML = `\n      <h3>3-Day Weather Forecast for ${capitalizedCity}</h3>\n      <div class=\"forecast-container\">${forecastHTML}</div>\n    `;\n  } catch (error) {\n    console.error(\"Error:\", error.message);\n    weatherDisplay.innerHTML = `<p>Failed to get weather data. Please try again later.</p>`;\n    alert(\"Failed to get weather data\");\n  }\n});\n\n\n//# sourceURL=webpack://weather-app/./src/app.js?");

/***/ }),

/***/ "./src/fetchWeather.js":
/*!*****************************!*\
  !*** ./src/fetchWeather.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchWeather: () => (/* binding */ fetchWeather)\n/* harmony export */ });\nasync function fetchWeather(city, apiKey) {\n  const endpoint = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3&aqi=no&alerts=no`;\n\n  const response = await fetch(endpoint);\n  if (!response.ok) {\n    throw new Error(\"Failed to fetch weather data\");\n  }\n\n  return response.json();\n}\n\n\n//# sourceURL=webpack://weather-app/./src/fetchWeather.js?");

/***/ }),

/***/ "./src/processData.js":
/*!****************************!*\
  !*** ./src/processData.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   processWeatherData: () => (/* binding */ processWeatherData)\n/* harmony export */ });\nfunction processWeatherData(rawData) {\n  const location = rawData.location.name;\n  const forecast = rawData.forecast.forecastday.map((day) => ({\n    date: day.date,\n    maxTemp: day.day.maxtemp_c,\n    minTemp: day.day.mintemp_c,\n    condition: day.day.condition.text,\n    icon: day.day.condition.icon,\n  }));\n\n  return { location, forecast };\n}\n\n\n//# sourceURL=webpack://weather-app/./src/processData.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://weather-app/./src/styles.css?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;