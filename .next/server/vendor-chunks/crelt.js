"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/crelt";
exports.ids = ["vendor-chunks/crelt"];
exports.modules = {

/***/ "(ssr)/./node_modules/crelt/index.js":
/*!*************************************!*\
  !*** ./node_modules/crelt/index.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ crelt)\n/* harmony export */ });\nfunction crelt() {\n  var elt = arguments[0]\n  if (typeof elt == \"string\") elt = document.createElement(elt)\n  var i = 1, next = arguments[1]\n  if (next && typeof next == \"object\" && next.nodeType == null && !Array.isArray(next)) {\n    for (var name in next) if (Object.prototype.hasOwnProperty.call(next, name)) {\n      var value = next[name]\n      if (typeof value == \"string\") elt.setAttribute(name, value)\n      else if (value != null) elt[name] = value\n    }\n    i++\n  }\n  for (; i < arguments.length; i++) add(elt, arguments[i])\n  return elt\n}\n\nfunction add(elt, child) {\n  if (typeof child == \"string\") {\n    elt.appendChild(document.createTextNode(child))\n  } else if (child == null) {\n  } else if (child.nodeType != null) {\n    elt.appendChild(child)\n  } else if (Array.isArray(child)) {\n    for (var i = 0; i < child.length; i++) add(elt, child[i])\n  } else {\n    throw new RangeError(\"Unsupported child node: \" + child)\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY3JlbHQvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsc0JBQXNCO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSixvQkFBb0Isa0JBQWtCO0FBQ3RDLElBQUk7QUFDSjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hLmZvdWFkL1Byb2plY3RzL0Zyb250ZW5kX0Jvb2ttYXJrcy9mcm9udGVuZF9ib29rbWFya3Mvbm9kZV9tb2R1bGVzL2NyZWx0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWx0KCkge1xuICB2YXIgZWx0ID0gYXJndW1lbnRzWzBdXG4gIGlmICh0eXBlb2YgZWx0ID09IFwic3RyaW5nXCIpIGVsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWx0KVxuICB2YXIgaSA9IDEsIG5leHQgPSBhcmd1bWVudHNbMV1cbiAgaWYgKG5leHQgJiYgdHlwZW9mIG5leHQgPT0gXCJvYmplY3RcIiAmJiBuZXh0Lm5vZGVUeXBlID09IG51bGwgJiYgIUFycmF5LmlzQXJyYXkobmV4dCkpIHtcbiAgICBmb3IgKHZhciBuYW1lIGluIG5leHQpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobmV4dCwgbmFtZSkpIHtcbiAgICAgIHZhciB2YWx1ZSA9IG5leHRbbmFtZV1cbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT0gXCJzdHJpbmdcIikgZWx0LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSlcbiAgICAgIGVsc2UgaWYgKHZhbHVlICE9IG51bGwpIGVsdFtuYW1lXSA9IHZhbHVlXG4gICAgfVxuICAgIGkrK1xuICB9XG4gIGZvciAoOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhZGQoZWx0LCBhcmd1bWVudHNbaV0pXG4gIHJldHVybiBlbHRcbn1cblxuZnVuY3Rpb24gYWRkKGVsdCwgY2hpbGQpIHtcbiAgaWYgKHR5cGVvZiBjaGlsZCA9PSBcInN0cmluZ1wiKSB7XG4gICAgZWx0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNoaWxkKSlcbiAgfSBlbHNlIGlmIChjaGlsZCA9PSBudWxsKSB7XG4gIH0gZWxzZSBpZiAoY2hpbGQubm9kZVR5cGUgIT0gbnVsbCkge1xuICAgIGVsdC5hcHBlbmRDaGlsZChjaGlsZClcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGNoaWxkKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGQubGVuZ3RoOyBpKyspIGFkZChlbHQsIGNoaWxkW2ldKVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVW5zdXBwb3J0ZWQgY2hpbGQgbm9kZTogXCIgKyBjaGlsZClcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/crelt/index.js\n");

/***/ })

};
;