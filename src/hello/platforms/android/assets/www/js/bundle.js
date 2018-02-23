webpackJsonp([0],{

/***/ 130:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js__);
/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.start = function () {
        var _this = this;
        document.addEventListener("deviceready", function () { return _this.onDeviceReady(); }, false);
    };
    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // "pause", "resume", etc.
    App.prototype.onDeviceReady = function () {
        this.receivedEvent("deviceready");
    };
    // Update DOM on a Received Event
    App.prototype.receivedEvent = function (id) {
        var parentElement = document.getElementById(id), _a = [".listening", ".received"]
            .map(function (sel) { return parentElement.querySelector(sel); }), listeningElement = _a[0], receivedElement = _a[1];
        [{ el: listeningElement, display: "none" },
            { el: receivedElement, display: "block" }]
            .forEach(function (_a) {
            var el = _a.el, display = _a.display;
            return el.setAttribute("style", "display:" + display);
        });
        console.log("Received Event: " + id);
    };
    return App;
}());
var app = new App();
app.start();


/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(131);
module.exports = __webpack_require__(130);


/***/ })

},[342]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zY3NzL3N0eWxlcy5zY3NzP2JmYTEiLCJ3ZWJwYWNrOi8vLy4vZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx5Qzs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCRztBQUNjO0FBRWpCO0lBQUE7SUEwQkEsQ0FBQztJQXhCRyxtQkFBSyxHQUFMO1FBQUEsaUJBRUM7UUFERyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLGNBQU0sWUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFwQixDQUFvQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFFRCw0QkFBNEI7SUFDNUIsRUFBRTtJQUNGLG1EQUFtRDtJQUNuRCwwQkFBMEI7SUFDMUIsMkJBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELGlDQUFpQztJQUNqQywyQkFBYSxHQUFiLFVBQWMsRUFBRTtRQUNSLGlCQUFhLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFDM0M7NkVBQ2lELEVBRGhELHdCQUFnQixFQUFFLHVCQUFlLENBQ2dCO1FBRXRELENBQUMsRUFBRSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBQztZQUN4QyxFQUFFLEVBQUUsRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO2FBQ3JDLE9BQU8sQ0FBQyxVQUFDLEVBQWE7Z0JBQVosVUFBRSxFQUFFLG9CQUFPO1lBQU0sU0FBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsYUFBVyxPQUFTLENBQUM7UUFBOUMsQ0FBOEMsQ0FBQyxDQUFDO1FBRWhGLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQW1CLEVBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDTCxVQUFDO0FBQUQsQ0FBQztBQUVELElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7QUFDcEIsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDIiwiZmlsZSI6ImpzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zY3NzL3N0eWxlcy5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IFwiY29yZS1qc1wiO1xuXG5jbGFzcyBBcHAge1xuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkZXZpY2VyZWFkeVwiLCAoKSA9PiB0aGlzLm9uRGV2aWNlUmVhZHkoKSwgZmFsc2UpO1xuICAgIH1cblxuICAgIC8vIGRldmljZXJlYWR5IEV2ZW50IEhhbmRsZXJcbiAgICAvL1xuICAgIC8vIEJpbmQgYW55IGNvcmRvdmEgZXZlbnRzIGhlcmUuIENvbW1vbiBldmVudHMgYXJlOlxuICAgIC8vIFwicGF1c2VcIiwgXCJyZXN1bWVcIiwgZXRjLlxuICAgIG9uRGV2aWNlUmVhZHkoKSB7XG4gICAgICAgIHRoaXMucmVjZWl2ZWRFdmVudChcImRldmljZXJlYWR5XCIpO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBET00gb24gYSBSZWNlaXZlZCBFdmVudFxuICAgIHJlY2VpdmVkRXZlbnQoaWQpIHtcbiAgICAgICAgbGV0IHBhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCksXG4gICAgICAgICAgICBbbGlzdGVuaW5nRWxlbWVudCwgcmVjZWl2ZWRFbGVtZW50XSA9IFtcIi5saXN0ZW5pbmdcIiwgXCIucmVjZWl2ZWRcIl1cbiAgICAgICAgICAgICAgICAubWFwKHNlbCA9PiBwYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsKSk7XG5cbiAgICAgICAgW3sgZWw6IGxpc3RlbmluZ0VsZW1lbnQsIGRpc3BsYXk6IFwibm9uZVwifSxcbiAgICAgICAgIHsgZWw6IHJlY2VpdmVkRWxlbWVudCwgZGlzcGxheTogXCJibG9ja1wifV1cbiAgICAgICAgICAgIC5mb3JFYWNoKCh7ZWwsIGRpc3BsYXl9KSA9PiBlbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgZGlzcGxheToke2Rpc3BsYXl9YCkpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGBSZWNlaXZlZCBFdmVudDogJHtpZH1gKTtcbiAgICB9XG59XG5cbmxldCBhcHAgPSBuZXcgQXBwKCk7XG5hcHAuc3RhcnQoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VzL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==