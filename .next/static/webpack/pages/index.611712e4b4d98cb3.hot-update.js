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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst contractABI = __webpack_require__(/*! ../artifacts/contracts/DegenToken.sol/DegenToken.json */ \"./artifacts/contracts/DegenToken.sol/DegenToken.json\"); // Replace with your contract's ABI\nfunction App() {\n    _s();\n    const [web3, setWeb3] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [contract, setContract] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [owner, setOwner] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [totalSupply, setTotalSupply] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [symbol, setSymbol] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [transactionLog, setTransactionLog] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Connect to the local blockchain (assuming it's running on localhost:8545)\n        const initWeb3 = async ()=>{\n            if (window.ethereum) {\n                window.web3 = new web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"](window.ethereum);\n                try {\n                    await window.ethereum.enable();\n                    setWeb3(window.web3);\n                } catch (error) {\n                    console.error(error);\n                }\n            } else if (window.web3) {\n                window.web3 = new web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"](window.web3.currentProvider);\n                setWeb3(window.web3);\n            } else {\n                console.log(\"Non-Ethereum browser detected. You should consider trying MetaMask!\");\n            }\n        };\n        initWeb3();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (web3) {\n            const initContract = async ()=>{\n                const contract = new web3.eth.Contract(contractABI.abi, \"0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512\"); // Replace with your contract's address\n                setContract(contract);\n                const owner = await contract.methods.owner().call();\n                setOwner(owner);\n                const balance = await contract.methods.balanceOf(owner).call();\n                setBalance(balance);\n                const totalSupply = await contract.methods.totalSupply().call();\n                setTotalSupply(totalSupply);\n                const name = await contract.methods.name().call();\n                setName(name);\n                const symbol = await contract.methods.symbol().call();\n                setSymbol(symbol);\n                // Watch for events\n                contract.events.allEvents({\n                    fromBlock: \"latest\"\n                }).on(\"data\", (event)=>{\n                    // Log the event\n                    const log = {\n                        sender: event.returnValues.from,\n                        receiver: event.returnValues.to,\n                        functionName: event.event,\n                        amount: event.returnValues.value,\n                        timestamp: new Date(event.block.timestamp * 1000).toLocaleString()\n                    };\n                    setTransactionLog((prevLog)=>[\n                            ...prevLog,\n                            log\n                        ]);\n                }).on(\"error\", (error)=>{\n                    console.error(\"Error:\", error);\n                });\n            };\n            initContract();\n        }\n    }, [\n        web3\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Contract Details\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Arun Thakur\\\\Desktop\\\\Proj\\\\Attempt 3\\\\pages\\\\index.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Owner: \",\n                            owner\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Arun Thakur\\\\Desktop\\\\Proj\\\\Attempt 3\\\\pages\\\\index.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Owner's Balance: \",\n                            balance\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Arun Thakur\\\\Desktop\\\\Proj\\\\Attempt 3\\\\pages\\\\index.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Total Supply: \",\n                            totalSupply\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Arun Thakur\\\\Desktop\\\\Proj\\\\Attempt 3\\\\pages\\\\index.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Token Name: \",\n                            name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Arun Thakur\\\\Desktop\\\\Proj\\\\Attempt 3\\\\pages\\\\index.js\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Token Symbol: \",\n                            symbol\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Arun Thakur\\\\Desktop\\\\Proj\\\\Attempt 3\\\\pages\\\\index.js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Arun Thakur\\\\Desktop\\\\Proj\\\\Attempt 3\\\\pages\\\\index.js\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Transaction Log\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Arun Thakur\\\\Desktop\\\\Proj\\\\Attempt 3\\\\pages\\\\index.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: transactionLog.map((log, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Sender: \",\n                                            log.sender\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Arun Thakur\\\\Desktop\\\\Proj\\\\Attempt 3\\\\pages\\\\index.js\",\n                                        lineNumber: 90,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Receiver: \",\n                                            log.receiver\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Arun Thakur\\\\Desktop\\\\Proj\\\\Attempt 3\\\\pages\\\\index.js\",\n                                        lineNumber: 91,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Function: \",\n                                            log.functionName\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Arun Thakur\\\\Desktop\\\\Proj\\\\Attempt 3\\\\pages\\\\index.js\",\n                                        lineNumber: 92,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Amount: \",\n                                            log.amount\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Arun Thakur\\\\Desktop\\\\Proj\\\\Attempt 3\\\\pages\\\\index.js\",\n                                        lineNumber: 93,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Timestamp: \",\n                                            log.timestamp\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Arun Thakur\\\\Desktop\\\\Proj\\\\Attempt 3\\\\pages\\\\index.js\",\n                                        lineNumber: 94,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"C:\\\\Users\\\\Arun Thakur\\\\Desktop\\\\Proj\\\\Attempt 3\\\\pages\\\\index.js\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Arun Thakur\\\\Desktop\\\\Proj\\\\Attempt 3\\\\pages\\\\index.js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Arun Thakur\\\\Desktop\\\\Proj\\\\Attempt 3\\\\pages\\\\index.js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Arun Thakur\\\\Desktop\\\\Proj\\\\Attempt 3\\\\pages\\\\index.js\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"zFmXWLlsygJvkTEG1xds0CTSFe8=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFdlYjMgZnJvbSAnd2ViMyc7XHJcbmNvbnN0IGNvbnRyYWN0QUJJID0gcmVxdWlyZSgnLi4vYXJ0aWZhY3RzL2NvbnRyYWN0cy9EZWdlblRva2VuLnNvbC9EZWdlblRva2VuLmpzb24nKTsgLy8gUmVwbGFjZSB3aXRoIHlvdXIgY29udHJhY3QncyBBQklcclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuICBjb25zdCBbd2ViMywgc2V0V2ViM10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbY29udHJhY3QsIHNldENvbnRyYWN0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtvd25lciwgc2V0T3duZXJdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtiYWxhbmNlLCBzZXRCYWxhbmNlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdG90YWxTdXBwbHksIHNldFRvdGFsU3VwcGx5XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3N5bWJvbCwgc2V0U3ltYm9sXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdHJhbnNhY3Rpb25Mb2csIHNldFRyYW5zYWN0aW9uTG9nXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIENvbm5lY3QgdG8gdGhlIGxvY2FsIGJsb2NrY2hhaW4gKGFzc3VtaW5nIGl0J3MgcnVubmluZyBvbiBsb2NhbGhvc3Q6ODU0NSlcclxuICAgIGNvbnN0IGluaXRXZWIzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XHJcbiAgICAgICAgd2luZG93LndlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0uZW5hYmxlKCk7XHJcbiAgICAgICAgICBzZXRXZWIzKHdpbmRvdy53ZWIzKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKHdpbmRvdy53ZWIzKSB7XHJcbiAgICAgICAgd2luZG93LndlYjMgPSBuZXcgV2ViMyh3aW5kb3cud2ViMy5jdXJyZW50UHJvdmlkZXIpO1xyXG4gICAgICAgIHNldFdlYjMod2luZG93LndlYjMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdOb24tRXRoZXJldW0gYnJvd3NlciBkZXRlY3RlZC4gWW91IHNob3VsZCBjb25zaWRlciB0cnlpbmcgTWV0YU1hc2shJyk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaW5pdFdlYjMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAod2ViMykge1xyXG4gICAgICBjb25zdCBpbml0Q29udHJhY3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoY29udHJhY3RBQkkuYWJpLCAnMHhlN2YxNzI1RTc3MzRDRTI4OEY4MzY3ZTFCYjE0M0U5MGJiM0YwNTEyJyk7IC8vIFJlcGxhY2Ugd2l0aCB5b3VyIGNvbnRyYWN0J3MgYWRkcmVzc1xyXG4gICAgICAgIHNldENvbnRyYWN0KGNvbnRyYWN0KTtcclxuICAgICAgICBjb25zdCBvd25lciA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMub3duZXIoKS5jYWxsKCk7XHJcbiAgICAgICAgc2V0T3duZXIob3duZXIpO1xyXG4gICAgICAgIGNvbnN0IGJhbGFuY2UgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLmJhbGFuY2VPZihvd25lcikuY2FsbCgpO1xyXG4gICAgICAgIHNldEJhbGFuY2UoYmFsYW5jZSk7XHJcbiAgICAgICAgY29uc3QgdG90YWxTdXBwbHkgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLnRvdGFsU3VwcGx5KCkuY2FsbCgpO1xyXG4gICAgICAgIHNldFRvdGFsU3VwcGx5KHRvdGFsU3VwcGx5KTtcclxuICAgICAgICBjb25zdCBuYW1lID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy5uYW1lKCkuY2FsbCgpO1xyXG4gICAgICAgIHNldE5hbWUobmFtZSk7XHJcbiAgICAgICAgY29uc3Qgc3ltYm9sID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy5zeW1ib2woKS5jYWxsKCk7XHJcbiAgICAgICAgc2V0U3ltYm9sKHN5bWJvbCk7XHJcblxyXG4gICAgICAgIC8vIFdhdGNoIGZvciBldmVudHNcclxuICAgICAgICBjb250cmFjdC5ldmVudHMuYWxsRXZlbnRzKHsgZnJvbUJsb2NrOiAnbGF0ZXN0JyB9KVxyXG4gICAgICAgICAgLm9uKCdkYXRhJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAvLyBMb2cgdGhlIGV2ZW50XHJcbiAgICAgICAgICAgIGNvbnN0IGxvZyA9IHtcclxuICAgICAgICAgICAgICBzZW5kZXI6IGV2ZW50LnJldHVyblZhbHVlcy5mcm9tLFxyXG4gICAgICAgICAgICAgIHJlY2VpdmVyOiBldmVudC5yZXR1cm5WYWx1ZXMudG8sXHJcbiAgICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBldmVudC5ldmVudCxcclxuICAgICAgICAgICAgICBhbW91bnQ6IGV2ZW50LnJldHVyblZhbHVlcy52YWx1ZSxcclxuICAgICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKGV2ZW50LmJsb2NrLnRpbWVzdGFtcCAqIDEwMDApLnRvTG9jYWxlU3RyaW5nKClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgc2V0VHJhbnNhY3Rpb25Mb2cocHJldkxvZyA9PiBbLi4ucHJldkxvZywgbG9nXSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLm9uKCdlcnJvcicsIGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpbml0Q29udHJhY3QoKTtcclxuICAgIH1cclxuICB9LCBbd2ViM10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGhlYWRlcj5cclxuICAgICAgICA8aDE+Q29udHJhY3QgRGV0YWlsczwvaDE+XHJcbiAgICAgICAgPHA+T3duZXI6IHtvd25lcn08L3A+XHJcbiAgICAgICAgPHA+T3duZXIncyBCYWxhbmNlOiB7YmFsYW5jZX08L3A+XHJcbiAgICAgICAgPHA+VG90YWwgU3VwcGx5OiB7dG90YWxTdXBwbHl9PC9wPlxyXG4gICAgICAgIDxwPlRva2VuIE5hbWU6IHtuYW1lfTwvcD5cclxuICAgICAgICA8cD5Ub2tlbiBTeW1ib2w6IHtzeW1ib2x9PC9wPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgPGgyPlRyYW5zYWN0aW9uIExvZzwvaDI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAge3RyYW5zYWN0aW9uTG9nLm1hcCgobG9nLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgPHA+U2VuZGVyOiB7bG9nLnNlbmRlcn08L3A+XHJcbiAgICAgICAgICAgICAgPHA+UmVjZWl2ZXI6IHtsb2cucmVjZWl2ZXJ9PC9wPlxyXG4gICAgICAgICAgICAgIDxwPkZ1bmN0aW9uOiB7bG9nLmZ1bmN0aW9uTmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgPHA+QW1vdW50OiB7bG9nLmFtb3VudH08L3A+XHJcbiAgICAgICAgICAgICAgPHA+VGltZXN0YW1wOiB7bG9nLnRpbWVzdGFtcH08L3A+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiV2ViMyIsImNvbnRyYWN0QUJJIiwicmVxdWlyZSIsIkFwcCIsIndlYjMiLCJzZXRXZWIzIiwiY29udHJhY3QiLCJzZXRDb250cmFjdCIsIm93bmVyIiwic2V0T3duZXIiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsInRvdGFsU3VwcGx5Iiwic2V0VG90YWxTdXBwbHkiLCJuYW1lIiwic2V0TmFtZSIsInN5bWJvbCIsInNldFN5bWJvbCIsInRyYW5zYWN0aW9uTG9nIiwic2V0VHJhbnNhY3Rpb25Mb2ciLCJpbml0V2ViMyIsIndpbmRvdyIsImV0aGVyZXVtIiwiZW5hYmxlIiwiZXJyb3IiLCJjb25zb2xlIiwiY3VycmVudFByb3ZpZGVyIiwibG9nIiwiaW5pdENvbnRyYWN0IiwiZXRoIiwiQ29udHJhY3QiLCJhYmkiLCJtZXRob2RzIiwiY2FsbCIsImJhbGFuY2VPZiIsImV2ZW50cyIsImFsbEV2ZW50cyIsImZyb21CbG9jayIsIm9uIiwiZXZlbnQiLCJzZW5kZXIiLCJyZXR1cm5WYWx1ZXMiLCJmcm9tIiwicmVjZWl2ZXIiLCJ0byIsImZ1bmN0aW9uTmFtZSIsImFtb3VudCIsInZhbHVlIiwidGltZXN0YW1wIiwiRGF0ZSIsImJsb2NrIiwidG9Mb2NhbGVTdHJpbmciLCJwcmV2TG9nIiwiZGl2IiwiaGVhZGVyIiwiaDEiLCJwIiwic2VjdGlvbiIsImgyIiwidWwiLCJtYXAiLCJpbmRleCIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});