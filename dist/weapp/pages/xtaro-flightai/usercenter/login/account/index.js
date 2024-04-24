(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/xtaro-flightai/usercenter/login/account/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/xtaro-flightai/usercenter/login/account/index!./src/pages/xtaro-flightai/usercenter/login/account/index.tsx":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/xtaro-flightai/usercenter/login/account/index!./src/pages/xtaro-flightai/usercenter/login/account/index.tsx ***!
  \************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var _Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _common_BasePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/BasePage */ "./src/pages/xtaro-flightai/common/BasePage.tsx");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.scss */ "./src/pages/xtaro-flightai/usercenter/login/account/index.module.scss");
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container */ "./src/pages/xtaro-flightai/usercenter/login/account/container/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");




// pages/usercenter/login-account/index.ts






var Index = /*#__PURE__*/function (_React$Component) {
  function Index() {
    (0,_Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Index);
    return (0,_Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Index, arguments);
  }
  (0,_Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_7__["default"])(Index, _React$Component);
  return (0,_Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_8__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // 开启录制
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].taroPage,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.CustomWrapper, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].taroPage,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_container__WEBPACK_IMPORTED_MODULE_3__.AccountProvider, {})
        })
      });
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ __webpack_exports__["default"] = ((0,_common_BasePage__WEBPACK_IMPORTED_MODULE_1__["default"])({
  pageId: "getPageId"
})(Index));

// Page({
//   data: {
//     formData: { account: "" },//15600000000/Qqun@1438
//     showPassword: false,
//     accountLogin: "账号登录",
//     stepDisabled: true,
//     readedPolicy: false,
//     isChecked: false,
//     navigatorProps: {
//       url: "/pages/usercenter/register/account/index"
//     }
//   },
//   changEye: function () {
//     this.setData({
//       showPassword: !this.data.showPassword
//     })
//   },
//   inputChange: function (e) {
//     let prop = e.currentTarget.dataset.prop
//     let value = e.detail.value
//     this.data.formData[prop] = value;
//     let flag = this.getVerificationCode(value);
//     // flag = true;
//     if (value.length > 11) {
//       wx.showToast({
//         "title": "手机号码不正确"
//       });
//     }
//     if (!flag) {
//       this.setData({
//         stepDisabled: true,
//       });
//     } else {
//       this.setData({
//         stepDisabled: false,
//       });
//     }
//     this.setData({
//       formData: this.data.formData
//     })
//   },
//   goStep2() {
//     let readedPolicy = this.data.readedPolicy;
//     if (readedPolicy) {
//       let account = this.data.formData.account;
//       wx.navigateTo({ url: `/pages/usercenter/code/index?account=${account}&operate=login` });
//     } else {
//       wx.showToast({ title: "请先阅读 服务协议和隐私政策" })
//     }

//   },
//   onLoad() {
//     // checkWxSession();
//     // wxLogin();
//   },
//   onShow() {
//     // this.getTabBar()?.init();
//   },
//   getPhoneNumber(e) {
//     let prefix="[zy]getPhoneNumber";
//     let { code, errMsg, iv, encryptedData } = e.detail;
//     console.log(prefix, code, e, errMsg, iv, encryptedData);

//     if (this.data?.readedPolicy) {
//       let account = this.data.formData.account;
//       if (errMsg.startsWith('getPhoneNumber:fail ')) {
//         wx.showModal({
//           title: '获取失败',
//           showCancel: false,
//           content: errMsg,
//           success: function (res) { }
//         })
//       }
//       else {
//         console.log(prefix, "getPhoneNumber code success");
//         let session = getApp().globalData?.session || {};
//         let { openid, unionid } = session;
//         phoneLoginService({ code, openid, unionid }).then((data) => {
//           //微信快捷登录完成
//           if(data){
//             wx.showModal({
//               title: '提示',
//               showCancel: false,
//               content: '快捷登录成功',
//               success: function (res) {
//                 wx.switchTab({ url: '/pages/cart/index' });
//               }
//             })
//           }else{
//             wx.showToast({title:"微信快捷登录失败"});
//           }
//         })
//       }
//     } else {
//       wx.showToast({ title: "请先阅读 服务协议和隐私政策" })
//       return;
//     }
//   },
//   onChangeOfRead(e) {
//     wx.showToast({ title: JSON.stringify(e) + "---" });
//     this.setData({
//       readedPolicy: e?.detail?.checked,
//       isChecked: !this.data.isChecked,
//     });

//   },
//   agreeUser(e) {
//     wx.showToast({ title: "agreeUser" });
//     return false;
//   },
//   agreePrivacy(e) {
//     wx.showToast({ title: "agreePrivacy" });
//     return false;
//   },
//   getVerificationCode: function (phone) {
//     // https://developer.aliyun.com/article/1431953?spm=5176.26934562.main.1.33046d28Ikjk93
//     var reg = /^1[3-9][0-9]{9}$/;
//     var flag = reg.test(phone)
//     return flag;
//   },
// })

/***/ }),

/***/ "./src/pages/xtaro-flightai/common/BasePage.tsx":
/*!******************************************************!*\
  !*** ./src/pages/xtaro-flightai/common/BasePage.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FPage; }
/* harmony export */ });
/* harmony import */ var _Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var _Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");









/**
 * @name 封装Base.js页面
 */
function FPage(_ref) {
  (0,_Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref);
  return function (ConnectComponent) {
    return /*#__PURE__*/function (_React$Component) {
      function BaseComponent() {
        var _this;
        (0,_Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, BaseComponent);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = (0,_Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, BaseComponent, [].concat(args));
        (0,_Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_this, "pageRef", null);
        return _this;
      }
      (0,_Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_6__["default"])(BaseComponent, _React$Component);
      return (0,_Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_7__["default"])(BaseComponent, [{
        key: "handleEvent",
        value:
        // 对xTaro生命周期函数进行封装，并传递至目标页面。
        function handleEvent(eventName, object) {
          return this.pageRef && this.pageRef[eventName] && this.pageRef[eventName](object);
        }

        // 对`componentDidShow`生命周期方法进行封装，根据需求可以进一步封装其他生命周期方法。
      }, {
        key: "componentDidShow",
        value: function componentDidShow() {
          this.handleEvent("componentDidShow");
        }
      }, {
        key: "componentDidHide",
        value: function componentDidHide() {
          this.handleEvent("componentDidHide");
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;
          // 可在这添加Provider
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ConnectComponent, (0,_Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__["default"])({
              ref: function ref(_ref2) {
                return _this2.pageRef = _ref2;
              }
            }, this.props))
          });
        }
      }]);
    }(react__WEBPACK_IMPORTED_MODULE_0__.Component);
  };
}

/***/ }),

/***/ "./src/pages/xtaro-flightai/common/ScrollView/index.tsx":
/*!**************************************************************!*\
  !*** ./src/pages/xtaro-flightai/common/ScrollView/index.tsx ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XScrollView: function() { return /* binding */ XScrollView; }
/* harmony export */ });
/* harmony import */ var _Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.scss */ "./src/pages/xtaro-flightai/common/ScrollView/index.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");





var XScrollView = function XScrollView(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.ScrollView, (0,_Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({
    className: "".concat(_index_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].container, " ").concat(props.className),
    scrollY: true
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].scrollHelper,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].scrollContainer,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].scrollContent,
          children: props.children
        })
      })
    })
  }));
};

/***/ }),

/***/ "./src/pages/xtaro-flightai/usercenter/login/account/action/index.tsx":
/*!****************************************************************************!*\
  !*** ./src/pages/xtaro-flightai/usercenter/login/account/action/index.tsx ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EAccountAction: function() { return /* binding */ EAccountAction; }
/* harmony export */ });
var EAccountAction = /*#__PURE__*/function (EAccountAction) {
  EAccountAction["modifyTripType"] = "modifyTripType";
  EAccountAction["updateOneWayDate"] = "updateOneWayDate";
  EAccountAction["updateRoundDate"] = "updateRoundDate";
  EAccountAction["updateDepartCity"] = "updateDepartCity";
  EAccountAction["updateArriveCity"] = "updateArriveCity";
  EAccountAction["exchangeCity"] = "exchangeCity";
  EAccountAction["updateLuggageCheck"] = "updateLuggageCheck";
  EAccountAction["changePassenger"] = "changePassenger";
  EAccountAction["updateHotelCityCheck"] = "updateHotelCityCheck";
  EAccountAction["updateHotelCity"] = "updateHotelCity";
  EAccountAction["updateHotelDate"] = "updateHotelDate";
  EAccountAction["loadHistory"] = "loadHistory";
  EAccountAction["closeTips"] = "closeTips";
  EAccountAction["removeHistory"] = "removeHistory";
  EAccountAction["changEye"] = "changEye";
  return EAccountAction;
}({});

/***/ }),

/***/ "./src/pages/xtaro-flightai/usercenter/login/account/component/AccountContent.tsx":
/*!****************************************************************************************!*\
  !*** ./src/pages/xtaro-flightai/usercenter/login/account/component/AccountContent.tsx ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountContent: function() { return /* binding */ AccountContent; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var _AccountContent_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountContent.module.scss */ "./src/pages/xtaro-flightai/usercenter/login/account/component/AccountContent.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");




var AccountContent = function AccountContent(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: _AccountContent_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imageContainer,
    children: props.children
  });
};

/***/ }),

/***/ "./src/pages/xtaro-flightai/usercenter/login/account/component/index.tsx":
/*!*******************************************************************************!*\
  !*** ./src/pages/xtaro-flightai/usercenter/login/account/component/index.tsx ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountFragment: function() { return /* binding */ AccountFragment; }
/* harmony export */ });
/* harmony import */ var _Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.scss */ "./src/pages/xtaro-flightai/usercenter/login/account/component/index.module.scss");
/* harmony import */ var _common_ScrollView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/ScrollView */ "./src/pages/xtaro-flightai/common/ScrollView/index.tsx");
/* harmony import */ var _AccountContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AccountContent */ "./src/pages/xtaro-flightai/usercenter/login/account/component/AccountContent.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");



// import { SearchBoxContainer } from '../container/SearchBoxContainer';


// import { FooterContainer } from '../container/FooterContainer';



var AccountFragment = function AccountFragment() {
  // 是否展示广告位
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
    _React$useState2 = (0,_Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_React$useState, 2),
    showAd = _React$useState2[0],
    setShowAd = _React$useState2[1];
  var handleShowAdChange = function handleShowAdChange(newShowAd) {
    setShowAd(newShowAd);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_common_ScrollView__WEBPACK_IMPORTED_MODULE_2__.XScrollView, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].scroll,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_AccountContent__WEBPACK_IMPORTED_MODULE_3__.AccountContent, {
        showAd: showAd,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
          children: "abc-AccountContent"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
          children: "zy-AccountContent"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
      children: "FooterContainer"
    })]
  });
};

/***/ }),

/***/ "./src/pages/xtaro-flightai/usercenter/login/account/container/AccountContainer.tsx":
/*!******************************************************************************************!*\
  !*** ./src/pages/xtaro-flightai/usercenter/login/account/container/AccountContainer.tsx ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountContainer: function() { return /* binding */ AccountContainer; }
/* harmony export */ });
/* harmony import */ var _Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component */ "./src/pages/xtaro-flightai/usercenter/login/account/component/index.tsx");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context */ "./src/pages/xtaro-flightai/usercenter/login/account/context/index.ts");
/* harmony import */ var _handler_localeHook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../handler/localeHook */ "./src/pages/xtaro-flightai/usercenter/login/account/handler/localeHook.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");






var AccountContainer = function AccountContainer() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__.AccountContext),
    _useContext2 = (0,_Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useContext, 2),
    state = _useContext2[0],
    dispatch = _useContext2[1];
  var locale = (0,_handler_localeHook__WEBPACK_IMPORTED_MODULE_3__.useLocale)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_component__WEBPACK_IMPORTED_MODULE_1__.AccountFragment, {});
};

/***/ }),

/***/ "./src/pages/xtaro-flightai/usercenter/login/account/container/index.tsx":
/*!*******************************************************************************!*\
  !*** ./src/pages/xtaro-flightai/usercenter/login/account/container/index.tsx ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountProvider: function() { return /* binding */ AccountProvider; }
/* harmony export */ });
/* harmony import */ var _Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducer */ "./src/pages/xtaro-flightai/usercenter/login/account/reducer/index.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state */ "./src/pages/xtaro-flightai/usercenter/login/account/state/index.ts");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context */ "./src/pages/xtaro-flightai/usercenter/login/account/context/index.ts");
/* harmony import */ var _handler_localeHook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../handler/localeHook */ "./src/pages/xtaro-flightai/usercenter/login/account/handler/localeHook.ts");
/* harmony import */ var _AccountContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AccountContainer */ "./src/pages/xtaro-flightai/usercenter/login/account/container/AccountContainer.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");









var AccountProvider = function AccountProvider() {
  var _getCurrentInstance$r;
  var urlParam = (_getCurrentInstance$r = (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.getCurrentInstance)().router) === null || _getCurrentInstance$r === void 0 ? void 0 : _getCurrentInstance$r.params;
  var _useLocaleHook = (0,_handler_localeHook__WEBPACK_IMPORTED_MODULE_5__.useLocaleHook)(_reducer__WEBPACK_IMPORTED_MODULE_2__.reducer, (0,_state__WEBPACK_IMPORTED_MODULE_3__.getInitState)(urlParam)),
    _useLocaleHook2 = (0,_Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useLocaleHook, 2),
    state = _useLocaleHook2[0],
    dispatch = _useLocaleHook2[1];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_context__WEBPACK_IMPORTED_MODULE_4__.AccountContext.Provider, {
    value: [state, dispatch],
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_AccountContainer__WEBPACK_IMPORTED_MODULE_6__.AccountContainer, {})
  });
};

/***/ }),

/***/ "./src/pages/xtaro-flightai/usercenter/login/account/context/index.ts":
/*!****************************************************************************!*\
  !*** ./src/pages/xtaro-flightai/usercenter/login/account/context/index.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountContext: function() { return /* binding */ AccountContext; },
/* harmony export */   SharkContext: function() { return /* binding */ SharkContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./src/pages/xtaro-flightai/usercenter/login/account/state/index.ts");


var dispatchEmpty = function dispatchEmpty() {};
var contextModel = [_state__WEBPACK_IMPORTED_MODULE_1__.defaultState, dispatchEmpty];
var AccountContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(contextModel);

var contextModal = ['en-US', {
  get: function get() {
    return '';
  },
  sharkDatas: {
    '6002': {},
    '37888': {}
  }
}];
var SharkContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(contextModal);


/***/ }),

/***/ "./src/pages/xtaro-flightai/usercenter/login/account/handler/localeHook.ts":
/*!*********************************************************************************!*\
  !*** ./src/pages/xtaro-flightai/usercenter/login/account/handler/localeHook.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useLocale: function() { return /* binding */ useLocale; },
/* harmony export */   useLocaleHook: function() { return /* binding */ useLocaleHook; }
/* harmony export */ });
/* harmony import */ var _Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context */ "./src/pages/xtaro-flightai/usercenter/login/account/context/index.ts");





// export const useLocaleHook = () => {
//     return 'zh_CN';
// };

// shark
var useLocale = function useLocale() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__.SharkContext),
    _useContext2 = (0,_Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useContext, 2),
    locale = _useContext2[0],
    _ = _useContext2[1];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = (0,_Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
    text = _useState2[0],
    setText = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setText(locale.replace('-', '_'));
  }, [locale]);
  return text;
};
function useLocaleHook(reducer, initialState) {
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(reducer, initialState),
    _useReducer2 = (0,_Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useReducer, 2),
    state = _useReducer2[0],
    dispatch = _useReducer2[1];
  var actionRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  // const actionRef = useRef<IAccountAction | undefined>();
  var locale = useLocale();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!actionRef.current) {
      return;
    }
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().setStorageSync("cache_".concat(locale), state);
  }, [state, actionRef, locale]);
  var dispatchProxy = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (action) {
    actionRef.current = action;
    dispatch(action);
  }, [dispatch]);
  return [state, dispatchProxy];
}

/***/ }),

/***/ "./src/pages/xtaro-flightai/usercenter/login/account/index.tsx":
/*!*********************************************************************!*\
  !*** ./src/pages/xtaro-flightai/usercenter/login/account/index.tsx ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_xtaro_flightai_usercenter_login_account_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/xtaro-flightai/usercenter/login/account/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/xtaro-flightai/usercenter/login/account/index!./src/pages/xtaro-flightai/usercenter/login/account/index.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_xtaro_flightai_usercenter_login_account_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/xtaro-flightai/usercenter/login/account/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_xtaro_flightai_usercenter_login_account_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/pages/xtaro-flightai/usercenter/login/account/reducer/index.ts":
/*!****************************************************************************!*\
  !*** ./src/pages/xtaro-flightai/usercenter/login/account/reducer/index.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reducer: function() { return /* binding */ reducer; }
/* harmony export */ });
/* harmony import */ var _Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action */ "./src/pages/xtaro-flightai/usercenter/login/account/action/index.tsx");




var reducer = function reducer(prevState, action) {
  switch (action.type) {
    case _action__WEBPACK_IMPORTED_MODULE_1__.EAccountAction.changEye:
      {
        var showPassword = action.payload;
        return (0,_Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, prevState), {}, {
          showPassword: !showPassword
        });
      }
    case _action__WEBPACK_IMPORTED_MODULE_1__.EAccountAction.loadHistory:
      {
        var history = action.payload;
        return (0,_Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, prevState), history);
      }
    case _action__WEBPACK_IMPORTED_MODULE_1__.EAccountAction.updateOneWayDate:
      {
        var departDate = action.payload;
        var returnDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(departDate).add(1, 'day').format('YYYY-MM-DD');
        return (0,_Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, prevState), {}, {
          departDate: departDate,
          returnDate: returnDate,
          checkInDate: departDate,
          checkOutDate: returnDate,
          modifyHotelDate: false
        });
      }
    case _action__WEBPACK_IMPORTED_MODULE_1__.EAccountAction.updateRoundDate:
      {
        var _action$payload = (0,_Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(action.payload, 2),
          _departDate = _action$payload[0],
          _returnDate = _action$payload[1];
        return (0,_Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, prevState), {}, {
          departDate: _departDate,
          returnDate: _returnDate,
          checkInDate: _departDate,
          checkOutDate: _returnDate,
          modifyHotelDate: false
        });
      }
    case _action__WEBPACK_IMPORTED_MODULE_1__.EAccountAction.updateLuggageCheck:
      return (0,_Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, prevState), {}, {
        checkLuggage: action.payload
      });
    case _action__WEBPACK_IMPORTED_MODULE_1__.EAccountAction.updateHotelDate:
      {
        var _action$payload2 = (0,_Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(action.payload, 2),
          checkInDate = _action$payload2[0],
          checkOutDate = _action$payload2[1];
        return (0,_Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, prevState), {}, {
          modifyHotelDate: true,
          checkInDate: checkInDate,
          checkOutDate: checkOutDate
        });
      }
    case _action__WEBPACK_IMPORTED_MODULE_1__.EAccountAction.closeTips:
      {
        return (0,_Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, prevState), {}, {
          hideTips: true
        });
      }
    case _action__WEBPACK_IMPORTED_MODULE_1__.EAccountAction.removeHistory:
      return (0,_Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, prevState), {}, {
        historyList: []
      });
    default:
      return prevState;
  }
};

/***/ }),

/***/ "./src/pages/xtaro-flightai/usercenter/login/account/state/index.ts":
/*!**************************************************************************!*\
  !*** ./src/pages/xtaro-flightai/usercenter/login/account/state/index.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultState: function() { return /* binding */ defaultState; },
/* harmony export */   getInitState: function() { return /* binding */ getInitState; }
/* harmony export */ });
/* harmony import */ var _Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");

var defaultState = {
  formData: {
    account: ""
  },
  //15600000000/Qqun@1438
  showPassword: false,
  accountLogin: "账号登录",
  stepDisabled: true,
  readedPolicy: false,
  isChecked: false,
  navigatorProps: {
    url: "/pages/usercenter/register/account/index"
  }
};
function getInitState(params) {
  var _params$account;
  var state = (0,_Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_Users_zolad_work_app_ctrip_fly_archband_weixin_pages_taro_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultState), {}, {
    formData: {
      account: (_params$account = params === null || params === void 0 ? void 0 : params.account) !== null && _params$account !== void 0 ? _params$account : ""
    },
    sourceFrom: params === null || params === void 0 ? void 0 : params.sourceFrom
  });
  return state;
}

/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",f="quarter",h="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p="$isDayjsObject",S=function(t){return t instanceof _||!(!t||!t[p])},w=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},O=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},b=v;b.l=w,b.i=S,b.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return b},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=b.p(t),f="set"+(this.$u?"UTC":""),l=(n={},n[a]=f+"Date",n[d]=f+"Date",n[c]=f+"Month",n[h]=f+"FullYear",n[u]=f+"Hours",n[s]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=b.p(f),y=function(t){var e=O(l);return b.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return b.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,"0")},$=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(y,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return b.s(e.$y,4,"0");case"M":return a+1;case"MM":return b.s(a+1,2,"0");case"MMM":return h(n.monthsShort,a,c,3);case"MMMM":return h(c,a);case"D":return e.$D;case"DD":return b.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,o,2);case"ddd":return h(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return b.s(s,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(s,u,!0);case"A":return $(s,u,!1);case"m":return String(u);case"mm":return b.s(u,2,"0");case"s":return String(e.$s);case"ss":return b.s(e.$s,2,"0");case"SSS":return b.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=b.p(d),m=O(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return b.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g}return l?$:b.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),k=_.prototype;return O.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",h],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=!0),O},O.locale=w,O.isDayjs=S,O.unix=function(t){return O(1e3*t)},O.en=D[g],O.Ls=D,O.p={},O}));

/***/ }),

/***/ "./src/pages/xtaro-flightai/common/ScrollView/index.module.scss":
/*!**********************************************************************!*\
  !*** ./src/pages/xtaro-flightai/common/ScrollView/index.module.scss ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"container":"index-module__container___ORgoG","scrollHelper":"index-module__scrollHelper___KDbPt","scrollContainer":"index-module__scrollContainer___XBt2R","scrollContent":"index-module__scrollContent___oP_mH"});

/***/ }),

/***/ "./src/pages/xtaro-flightai/usercenter/login/account/component/AccountContent.module.scss":
/*!************************************************************************************************!*\
  !*** ./src/pages/xtaro-flightai/usercenter/login/account/component/AccountContent.module.scss ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"imageContainer":"AccountContent-module__imageContainer___OnzQD","advContainer":"AccountContent-module__advContainer___C5uAX","tripContainer":"AccountContent-module__tripContainer___ShOHn","tripAdContainer":"AccountContent-module__tripAdContainer___L0ZnK"});

/***/ }),

/***/ "./src/pages/xtaro-flightai/usercenter/login/account/component/index.module.scss":
/*!***************************************************************************************!*\
  !*** ./src/pages/xtaro-flightai/usercenter/login/account/component/index.module.scss ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"container":"index-module__container___zxZXB","scroll":"index-module__scroll___DIkiT","t1":"index-module__t1___sJ3aI","t2":"index-module__t2___OHhTj","box":"index-module__box___PT3Yr"});

/***/ }),

/***/ "./src/pages/xtaro-flightai/usercenter/login/account/index.module.scss":
/*!*****************************************************************************!*\
  !*** ./src/pages/xtaro-flightai/usercenter/login/account/index.module.scss ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"loginBox":"index-module__loginBox___oS7Wx","get-mobile-group":"index-module__get-mobile-group___J8L2d","login-button-area":"index-module__login-button-area___WRQXy","register-can":"index-module__register-can___ggAa4","user-policy-can":"index-module__user-policy-can___D45c8","agree-p":"index-module__agree-p___rU6Vc"});

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectDestructuringEmpty; }
/* harmony export */ });
function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure " + obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectSpread2; }
/* harmony export */ });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors"], function() { return __webpack_exec__("./src/pages/xtaro-flightai/usercenter/login/account/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map