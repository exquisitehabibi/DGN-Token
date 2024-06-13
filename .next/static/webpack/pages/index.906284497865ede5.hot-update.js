"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst contractABI = __webpack_require__(/*! ../artifacts/contracts/DegenToken.sol/DegenToken.json */ \"./artifacts/contracts/DegenToken.sol/DegenToken.json\"); // Replace with your contract's ABI\nfunction App() {\n    _s();\n    const [web3, setWeb3] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [contract, setContract] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [owner, setOwner] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [totalSupply, setTotalSupply] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [symbol, setSymbol] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Connect to the local blockchain (assuming it's running on localhost:8545)\n        const initWeb3 = async ()=>{\n            if (window.ethereum) {\n                window.web3 = new web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"](window.ethereum);\n                try {\n                    await window.ethereum.enable();\n                    setWeb3(window.web3);\n                } catch (error) {\n                    console.error(error);\n                }\n            } else if (window.web3) {\n                window.web3 = new web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"](window.web3.currentProvider);\n                setWeb3(window.web3);\n            } else {\n                console.log(\"Non-Ethereum browser detected. You should consider trying MetaMask!\");\n            }\n        };\n        initWeb3();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (web3) {\n            const initContract = async ()=>{\n                const contract = new web3.eth.Contract(contractABI.abi, \"0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512\"); // Replace with your contract's address\n                setContract(contract);\n                const owner = await contract.methods.owner().call();\n                setOwner(owner);\n                const balance = await contract.methods.balanceOf(owner).call();\n                setBalance(balance);\n                const totalSupply = await contract.methods.totalSupply().call();\n                setTotalSupply(totalSupply);\n                const name = await contract.methods.name().call();\n                setName(name);\n                const symbol = await contract.methods.symbol().call();\n                setSymbol(symbol);\n            };\n            initContract();\n        }\n    }, [\n        web3\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Contract Details\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Arun Thakur\\\\Desktop\\\\Proj\\\\Attempt 3\\\\pages\\\\index.js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Owner: \",\n                        owner\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Arun Thakur\\\\Desktop\\\\Proj\\\\Attempt 3\\\\pages\\\\index.js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Owner's Balance: \",\n                        balance\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Arun Thakur\\\\Desktop\\\\Proj\\\\Attempt 3\\\\pages\\\\index.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Total Supply: \",\n                        totalSupply\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Arun Thakur\\\\Desktop\\\\Proj\\\\Attempt 3\\\\pages\\\\index.js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Token Name: \",\n                        name\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Arun Thakur\\\\Desktop\\\\Proj\\\\Attempt 3\\\\pages\\\\index.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Token Symbol: \",\n                        symbol\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Arun Thakur\\\\Desktop\\\\Proj\\\\Attempt 3\\\\pages\\\\index.js\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Arun Thakur\\\\Desktop\\\\Proj\\\\Attempt 3\\\\pages\\\\index.js\",\n            lineNumber: 59,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Arun Thakur\\\\Desktop\\\\Proj\\\\Attempt 3\\\\pages\\\\index.js\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"EgDE58JevOiFu2eBnJOuAVrPe/o=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgV2ViMyBmcm9tICd3ZWIzJztcclxuY29uc3QgY29udHJhY3RBQkkgPSByZXF1aXJlKCcuLi9hcnRpZmFjdHMvY29udHJhY3RzL0RlZ2VuVG9rZW4uc29sL0RlZ2VuVG9rZW4uanNvbicpOyAvLyBSZXBsYWNlIHdpdGggeW91ciBjb250cmFjdCdzIEFCSVxyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gIGNvbnN0IFt3ZWIzLCBzZXRXZWIzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtjb250cmFjdCwgc2V0Q29udHJhY3RdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW293bmVyLCBzZXRPd25lcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt0b3RhbFN1cHBseSwgc2V0VG90YWxTdXBwbHldID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc3ltYm9sLCBzZXRTeW1ib2xdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gQ29ubmVjdCB0byB0aGUgbG9jYWwgYmxvY2tjaGFpbiAoYXNzdW1pbmcgaXQncyBydW5uaW5nIG9uIGxvY2FsaG9zdDo4NTQ1KVxyXG4gICAgY29uc3QgaW5pdFdlYjMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcclxuICAgICAgICB3aW5kb3cud2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5lbmFibGUoKTtcclxuICAgICAgICAgIHNldFdlYjMod2luZG93LndlYjMpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAod2luZG93LndlYjMpIHtcclxuICAgICAgICB3aW5kb3cud2ViMyA9IG5ldyBXZWIzKHdpbmRvdy53ZWIzLmN1cnJlbnRQcm92aWRlcik7XHJcbiAgICAgICAgc2V0V2ViMyh3aW5kb3cud2ViMyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ05vbi1FdGhlcmV1bSBicm93c2VyIGRldGVjdGVkLiBZb3Ugc2hvdWxkIGNvbnNpZGVyIHRyeWluZyBNZXRhTWFzayEnKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpbml0V2ViMygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh3ZWIzKSB7XHJcbiAgICAgIGNvbnN0IGluaXRDb250cmFjdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBjb250cmFjdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChjb250cmFjdEFCSS5hYmksICcweGU3ZjE3MjVFNzczNENFMjg4RjgzNjdlMUJiMTQzRTkwYmIzRjA1MTInKTsgLy8gUmVwbGFjZSB3aXRoIHlvdXIgY29udHJhY3QncyBhZGRyZXNzXHJcbiAgICAgICAgc2V0Q29udHJhY3QoY29udHJhY3QpO1xyXG4gICAgICAgIGNvbnN0IG93bmVyID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy5vd25lcigpLmNhbGwoKTtcclxuICAgICAgICBzZXRPd25lcihvd25lcik7XHJcbiAgICAgICAgY29uc3QgYmFsYW5jZSA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuYmFsYW5jZU9mKG93bmVyKS5jYWxsKCk7XHJcbiAgICAgICAgc2V0QmFsYW5jZShiYWxhbmNlKTtcclxuICAgICAgICBjb25zdCB0b3RhbFN1cHBseSA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMudG90YWxTdXBwbHkoKS5jYWxsKCk7XHJcbiAgICAgICAgc2V0VG90YWxTdXBwbHkodG90YWxTdXBwbHkpO1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLm5hbWUoKS5jYWxsKCk7XHJcbiAgICAgICAgc2V0TmFtZShuYW1lKTtcclxuICAgICAgICBjb25zdCBzeW1ib2wgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLnN5bWJvbCgpLmNhbGwoKTtcclxuICAgICAgICBzZXRTeW1ib2woc3ltYm9sKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGluaXRDb250cmFjdCgpO1xyXG4gICAgfVxyXG4gIH0sIFt3ZWIzXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aGVhZGVyPlxyXG4gICAgICAgIDxoMT5Db250cmFjdCBEZXRhaWxzPC9oMT5cclxuICAgICAgICA8cD5Pd25lcjoge293bmVyfTwvcD5cclxuICAgICAgICA8cD5Pd25lcidzIEJhbGFuY2U6IHtiYWxhbmNlfTwvcD5cclxuICAgICAgICA8cD5Ub3RhbCBTdXBwbHk6IHt0b3RhbFN1cHBseX08L3A+XHJcbiAgICAgICAgPHA+VG9rZW4gTmFtZToge25hbWV9PC9wPlxyXG4gICAgICAgIDxwPlRva2VuIFN5bWJvbDoge3N5bWJvbH08L3A+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiV2ViMyIsImNvbnRyYWN0QUJJIiwicmVxdWlyZSIsIkFwcCIsIndlYjMiLCJzZXRXZWIzIiwiY29udHJhY3QiLCJzZXRDb250cmFjdCIsIm93bmVyIiwic2V0T3duZXIiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsInRvdGFsU3VwcGx5Iiwic2V0VG90YWxTdXBwbHkiLCJuYW1lIiwic2V0TmFtZSIsInN5bWJvbCIsInNldFN5bWJvbCIsImluaXRXZWIzIiwid2luZG93IiwiZXRoZXJldW0iLCJlbmFibGUiLCJlcnJvciIsImNvbnNvbGUiLCJjdXJyZW50UHJvdmlkZXIiLCJsb2ciLCJpbml0Q29udHJhY3QiLCJldGgiLCJDb250cmFjdCIsImFiaSIsIm1ldGhvZHMiLCJjYWxsIiwiYmFsYW5jZU9mIiwiZGl2IiwiaGVhZGVyIiwiaDEiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});