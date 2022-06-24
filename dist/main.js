/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/javascripts/getData.js":
/*!***************************************!*\
  !*** ./public/javascripts/getData.js ***!
  \***************************************/
/***/ (() => {

eval("\r\n\r\nconst xhr = new XMLHttpRequest(),\r\n\tmethod = \"GET\",\r\n\turl = \"https://testing-api-one.herokuapp.com/\";\r\n\r\n\tfunction addInfo(){\r\nvar body = document.getElementsByTagName(\"body\")[0];\r\nxhr.open(method, url, true);\r\nif(!('withCredentials' in xhr)){\r\n\talert('No CORS');\r\n}\r\nelse{\r\nxhr.onreadystatechange = function () {\r\n\tif (this.readyState == 4 && this.status == 200) {\r\n\t\tvar newArr = JSON.parse(this.responseText);\r\n\t\r\n\t\tfor (var i = 0; i < newArr.length; i++) {\r\n\t\t\tlet divs = document.createElement(\"div\");\r\n\t\t\tlet texts = document.createTextNode(newArr[i].name);\r\n\t\t\tdivs.appendChild(texts);\r\n\t\t\tbody.appendChild(divs);\r\n\t\t}\r\n\t\r\n\t}\r\n\r\n};\r\nxhr.send();\r\n\r\n\r\n}\r\n}\n\n//# sourceURL=webpack://api-ui/./public/javascripts/getData.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/javascripts/getData.js"]();
/******/ 	
/******/ })()
;