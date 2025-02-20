/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forum/components/DiscussionOverview.tsx":
/*!*****************************************************!*\
  !*** ./src/forum/components/DiscussionOverview.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DiscussionOverview)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Link */ "flarum/common/components/Link");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Tooltip */ "flarum/common/components/Tooltip");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/helpers/avatar */ "flarum/common/helpers/avatar");
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_5__);






var DiscussionOverview = /*#__PURE__*/function (_Component) {
  function DiscussionOverview() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.discussion = void 0;
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(DiscussionOverview, _Component);
  var _proto = DiscussionOverview.prototype;
  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
    this.discussion = this.attrs.discussion;
  };
  _proto.view = function view() {
    var discussion = this.discussion;
    var posts = discussion.posts();
    var participantCount = discussion.attribute('participantCount');
    var lastPost = posts == null ? void 0 : posts[posts.length - 1];
    var participantUsers = new Set();
    posts.forEach(function (post) {
      var user = post.user();
      if (user) {
        participantUsers.add(user);
      }
    });
    return m('[', null, m("ul", {
      className: "DiscussionOverview-list"
    }, m("li", {
      className: "created-at"
    }, m("h4", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().translator.trans('datlechin-discussion-overview.forum.created')), m("div", {
      className: "time"
    }, dayjs(discussion.createdAt()).fromNow())), m("li", {
      className: "last-reply"
    }, m("h4", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().translator.trans('datlechin-discussion-overview.forum.last_reply')), m((flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().route.post(lastPost)
    }, m("div", {
      className: "time"
    }, flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_4___default()(lastPost.user()), dayjs(discussion.lastPostedAt()).fromNow()))), m("li", {
      className: "replies"
    }, m("span", {
      className: "number"
    }, discussion.replyCount()), m("h4", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().translator.trans('datlechin-discussion-overview.forum.replies'))), flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().initializers.has('michaelbelgium-discussion-views') ? m("li", {
      className: "views"
    }, m("span", {
      className: "number"
    }, discussion.viewCount()), m("h4", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().translator.trans('datlechin-discussion-overview.forum.views'))) : null, m("li", {
      className: "users"
    }, m("span", {
      className: "number"
    }, participantCount), m("h4", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().translator.trans('datlechin-discussion-overview.forum.users'))), m("li", {
      className: "likes"
    }, m("span", {
      className: "number"
    }, posts[0].attribute('likesCount') || 0), m("h4", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().translator.trans('datlechin-discussion-overview.forum.likes'))), m("li", {
      className: "avatars"
    }, m("div", {
      className: "user-list"
    }, Array.from(participantUsers).map(function (user) {
      return m((flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_3___default()), {
        key: user.id(),
        text: user.attribute('username')
      }, m((flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().route.user(user)
      }, flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_4___default()(user)));
    })))));
  };
  return DiscussionOverview;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/index.tsx":
/*!*****************************!*\
  !*** ./src/forum/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_PostStream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/PostStream */ "flarum/forum/components/PostStream");
/* harmony import */ var flarum_forum_components_PostStream__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_PostStream__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_DiscussionOverview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/DiscussionOverview */ "./src/forum/components/DiscussionOverview.tsx");




flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('datlechin/flarum-discussion-overview', function () {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_PostStream__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'oncreate', function () {
    var postStream = document.querySelector('.CommentPost div');
    if (!postStream) {
      return;
    }
    var discussion = this.discussion;
    var div = document.createElement('div');
    div.className = 'DiscussionOverview';
    m.mount(postStream.appendChild(div), {
      view: function view() {
        return m(_components_DiscussionOverview__WEBPACK_IMPORTED_MODULE_3__["default"], {
          discussion: discussion
        });
      }
    });
  });
});

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/components/Link":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/components/Link']" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Link'];

/***/ }),

/***/ "flarum/common/components/Tooltip":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['common/components/Tooltip']" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Tooltip'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/helpers/avatar":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/avatar']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/avatar'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/PostStream":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/PostStream']" ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/PostStream'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, o);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.tsx");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map