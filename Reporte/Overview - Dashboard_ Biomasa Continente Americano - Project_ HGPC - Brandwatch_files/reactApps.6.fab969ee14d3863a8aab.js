(window.webpackJsonpReactApps=window.webpackJsonpReactApps||[]).push([[6],{156:function(e,t,n){"use strict";var r=n(157),o=(n(228),n(3),n(1)),i=n.n(o),a=n(497),l=n(631),c=n(34);function u(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return new RegExp(function(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(e).trim(),t?"gi":"i")}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,y(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,o["Component"]),n=t,(r=[{key:"render",value:function(){var e,t=this.props,n=t.value,r=t.filter,o=u(r,!0);if(!r||!o.test(n))return n;var a=n.split(o),l=n.match(o),s=a.map(function(e,t){return""===e&&t===a.length-1?"":""===e?[i.a.createElement(c.Strong,{key:t},l[t])]:t!==a.length-1?[e,i.a.createElement(c.Strong,{key:t},l[t])]:[e]});return(e=[]).concat.apply(e,f(s))}}])&&p(n.prototype,r),a&&p(n,a),t}();n(390);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var C=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),w(this,S(t).apply(this,arguments))}var n,r,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,o["Component"]),n=t,(r=[{key:"handleClick",value:function(e){var t=this.props,n=t.selection;(0,t.onSelectionChanged)(n.includes(e)?n.filter(function(t){return t!==e}):v(n).concat([e]))}},{key:"getData",value:function(){var e=this.props,t=e.filter,n=e.data,r=u(t);return t&&n?n.filter(function(e){var t=e.name;return r.test(t)}):n}},{key:"getDropdownHeight",value:function(e,t){return e?t?"10.85rem":"12.25rem":"16.25rem"}},{key:"render",value:function(){var e=this,t=this.props,n=t.selection,r=t.filter,o=t.identifierPropertyName,u=t.addUncategorisedCheckbox,s=t.allowSelectAll,f=this.getData();if(0===f.length)return i.a.createElement(c.DropdownMenu,{hasFullSeparator:!0,height:this.getDropdownHeight(u,s)},i.a.createElement(c.ContextContent,{paddingHorizontal:"large",paddingVertical:"small",height:"13.25rem"},i.a.createElement(c.Paragraph,null,'No match found for "',i.a.createElement(c.Strong,null,r),'"')));var p=function(t){var a=t.index,l=t.style,u=f[a][o],s=f[a].name;return i.a.createElement(c.DropdownMenuItem,{multiSelect:!0,onClick:function(){return e.handleClick(u)},key:u,selected:n.includes(u),style:l},i.a.createElement(c.EllipsisTooltip,null,i.a.createElement(h,{value:s,filter:r})))},d=this.getDropdownHeight(u,s);return i.a.createElement(c.DropdownMenu,{hasFullSeparator:!0,height:d,paddingVertical:"none"},i.a.createElement(a.a,null,function(e){var t=e.height,n=e.width;return i.a.createElement(l.a,{className:"ns-nested-select__list",width:n,height:t,itemCount:f.length,itemSize:44},p)}))}}])&&g(n.prototype,r),s&&g(n,s),t}();C.defaultProps={selection:[],filter:"",identifierPropertyName:"id"};var E=C;n(194);function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){U(e,t,n[t])})}return e}function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(e){return e.map(function(e){return M({},e,{totalChildCount:e.children.length})})}var T=44;function N(e,t){return(1+e[t].children.length)*T}var D=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),x(this,A(t).apply(this,arguments))}var n,r,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,o["Component"]),n=t,(r=[{key:"handleParentClick",value:function(e){var t=this.props,n=t.onSelectionChanged,r=t.selection;n(r.includes(e)?_(r.filter(function(e){return-1===e})):[e].concat(_(r.filter(function(e){return-1===e}))))}},{key:"handleChildClick",value:function(e,t){var n,r=this.props,o=r.onSelectionChanged,i=r.selection;if(i.includes(t))n=i.filter(function(e){return e!==t});else if(i.includes(e))n=this.getAllChildCategoryIds(e).filter(function(e){return e!==t});else{var a=this.getAllChildCategoryIds(e);n=_(i.filter(function(e){return a.includes(e)})).concat([t]),a.every(function(e){return n.includes(e)})&&(n=[e])}var l=i.find(function(e){return-1===e});l&&n&&!n.includes(-1)&&n.push(l),o(n)}},{key:"getAllChildCategoryIds",value:function(e){var t=this.props.data.find(function(t){return t.id===e});return t?t.children.map(function(e){return e.id}):[]}},{key:"hasChildSelected",value:function(e){var t=this.getAllChildCategoryIds(e),n=this.props.selection;return t.some(function(e){return n.includes(e)})}},{key:"getData",value:function(){var e=this.props,t=e.filter,n=e.data,r=u(t);return t&&n?I(n).map(function(e){return M({},e,{totalChildCount:e.children.length,children:e.children.filter(function(e){var t=e.name;return r.test(t)})})}).filter(function(e){var t=e.children,n=e.name;return 0!==t.length||r.test(n)}):I(n)}},{key:"render",value:function(){var e=this,t=this.props,n=t.selection,r=t.filter,o=this.getData();if(0===o.length)return i.a.createElement(c.DropdownMenu,{hasFullSeparator:!0,height:"12.25rem"},i.a.createElement(c.ContextContent,{paddingHorizontal:"large",paddingVertical:"small",height:"13.25rem"},i.a.createElement(c.Paragraph,null,'No match found for "',i.a.createElement(c.Strong,null,r),'"')));var u=function(t){var a=t.index,l=t.style,u=o[a],s=u.name,f=u.id,p=u.children,d=u.totalChildCount;return i.a.createElement("div",{style:l},i.a.createElement(c.DropdownMenuItem,{multiSelect:!0,indeterminate:e.hasChildSelected(f),onClick:function(){return e.handleParentClick(f)},key:f,selected:n.includes(f)},i.a.createElement(c.EllipsisTooltip,null,i.a.createElement(h,{value:s,filter:r})," (",d,")")),i.a.createElement(c.DropdownMenu,null,p.map(function(t){var o=t.name,a=t.id;return i.a.createElement(c.DropdownMenuItem,{multiSelect:!0,onClick:function(){return e.handleChildClick(f,a)},key:a,selected:n.includes(f)||n.includes(a)},i.a.createElement(c.EllipsisTooltip,null,i.a.createElement(h,{value:o,filter:r})))})))};return i.a.createElement(c.DropdownMenu,{hasFullSeparator:!0,height:"12.25rem",paddingVertical:"none"},i.a.createElement(a.a,null,function(e){var t=e.height,n=e.width;return i.a.createElement(l.b,{key:r,className:"ns-nested-select__list",width:n,height:t,itemCount:o.length,itemSize:N.bind(null,o),overscanCount:3,estimatedItemSize:6*T},u)}))}}])&&j(n.prototype,r),s&&j(n,s),t}();D.defaultProps={selection:[],filter:""};var B=D;n.d(t,"c",function(){return r.a}),n.d(t,"d",function(){return r.b}),n.d(t,"b",function(){return E}),n.d(t,"a",function(){return B})},157:function(e,t,n){"use strict";var r=n(1),o=n.n(r),i=(n(3),n(34));function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,u(t).apply(this,arguments))}var n,a,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.options,n=e.onItemSelect,r=e.settings;return o.a.createElement(i.DropdownMenu,{hasFullSeparator:!0,maxHeight:"27rem"},Object.keys(t).map(function(e){var a=t[e],l=a.name,c=a.pluralName,u=a.children,s=a.subMenuComponent,f=a.subMenuData,p=void 0===f?[]:f,d=a.disabled,y=!(!u&&!s),b=u&&u.some(function(e){return e.value===r.value}),h=c||l;return o.a.createElement(i.DropdownMenuItem,{disabled:d||s&&!p.length,icon:y?"chevron-right":void 0,keepOpen:y,key:e,onClick:function(){return n(e)},selected:r.value===e},o.a.createElement(i.Text,{textStrong:b||void 0},h))}))}}])&&l(n.prototype,a),f&&l(n,f),t}(),p=n(228),d=n(235),y=n.n(d);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e,t){var n=Object.entries(t);return(n=n.filter(function(t){return t[1].children&&t[1].children.find(function(t){return t.value===e})})||[])[0]&&n[0][0]}function O(e,t){var n=function(e,t){return Object.values(t).find(function(t){return t.children&&t.children.map(function(e){return e.value}).includes(e)})}(e,t);return n&&n.children.find(function(t){return t.value===e})}n.d(t,"b",function(){return O});var C=function(e){function t(e){var n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,n=!(o=v(t).call(this,e))||"object"!==b(o)&&"function"!=typeof o?w(r):o;var i=e.settings,a=i.value,l=i.args,c=void 0===l?[]:l;return n.state={activeIndex:0,activeItem:void 0,value:a,previousValue:a,selection:h(c),filter:"",addUncategorised:!1},n.onApply=n.onApply.bind(w(w(n))),n.onCancel=n.onCancel.bind(w(w(n))),n.onFilter=n.onFilter.bind(w(w(n))),n.onItemSelect=n.onItemSelect.bind(w(w(n))),n.onNavigateBack=n.onNavigateBack.bind(w(w(n))),n.onRequestClose=n.onRequestClose.bind(w(w(n))),n.onSelectionChanged=n.onSelectionChanged.bind(w(w(n))),n.onSubMenuAddButtonClick=n.onSubMenuAddButtonClick.bind(w(w(n))),n.onAddUncategorised=n.onAddUncategorised.bind(w(w(n))),n}var n,a,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,r["Component"]),n=t,(a=[{key:"onItemSelect",value:function(e){var t=this.props.options,n=this.state.selection,r=void 0===n?[]:n,o=t[e];if(!o||o.children||o.subMenuComponent)if(o&&(o.children||o.subMenuComponent))this.openSubMenu(e);else{var i=O(e,t);i&&(this.setState({previousValue:this.state.value,value:i.value,showSubMenuFooter:"emotions"===i.value}),"emotions"!==i.value&&(this.setSettings({value:i.value,args:h(r).filter(function(e){return-1!==e})}),this.closeDropdown()))}else this.setSettings({value:o.value,args:void 0})}},{key:"onAddUncategorised",value:function(){var e=this.state.selection||[];e.includes(-1)?e.splice(e.indexOf(-1),1):e.push(-1),this.setState({addUncategorised:!this.state.addUncategorised,selection:e})}},{key:"onSelectionChanged",value:function(e){this.setState(function(t){return 1===e.length&&e.includes(-1)?{addUncategorised:!1,selection:[]}:{addUncategorised:t.addUncategorised,selection:e}})}},{key:"closeDropdown",value:function(){}},{key:"openSubMenu",value:function(e){var t=this.props.options,n=this.props.settings,r=n.value,o=n.args,i=void 0===o?[]:o,a=t[e],l=(S(r,t)===e?O(r,t):void 0)||a,c=l.value!==r?[]:h(i);this.setState({activeIndex:1,activeItem:e,selection:c,addUncategorised:!!l&&l.value===r&&!!c&&c.includes(-1),showSubMenuFooter:"emotions"===this.props.settings.value,value:this.props.settings.value,previousValue:this.props.settings.value})}},{key:"closeSubMenu",value:function(){var e=this.props.settings,t=e.value,n=e.args,r=void 0===n?[]:n;this.setState({activeIndex:0,activeItem:void 0,value:t,selection:h(r),filter:""})}},{key:"onNavigateBack",value:function(){this.closeSubMenu()}},{key:"onRequestClose",value:function(){this.closeSubMenu()}},{key:"onCancel",value:function(){this.closeSubMenu(),this.closeDropdown()}},{key:"onSubMenuAddButtonClick",value:function(e){this.props.actions.onSubMenuCreateNewClicked(e),this.onCancel()}},{key:"onApply",value:function(){var e=this.state,t=e.selection,n=void 0===t?[]:t,r=e.value,o=this.state.activeItem;o===S(r,this.props.options)&&(o=r),this.setSettings({value:o,args:h(n)}),this.closeDropdown()}},{key:"onFilter",value:function(e){this.setState({filter:e})}},{key:"setSettings",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.props.actions.setSettings(e)}},{key:"hasSelectionChanged",value:function(){var e=this.props.settings,t=this.state.selection;return!y()((e.args||[]).sort(),(t||[]).sort())||this.state.value!==this.state.previousValue}},{key:"render",value:function(){var e=this,t=this.state,n=t.activeIndex,r=t.activeItem,a=t.selection,l=t.filter,c=t.value,u=this.props,s=u.options,d=u.settings,y=u.label,b=s[r],h=this.hasSelectionChanged(),m=!b||!b.value,v=b&&d.value!==(b.value||c),g=!(m||a&&a.length)||!(h||v),w=!0;return"sentimentEmotion"!==r&&a.length>0&&(w=!1),"sentimentEmotion"===r&&"emotions"===c&&(w=!1),o.a.createElement(i.Dropdown,{flip:"mirror",offset:"start",onRequestClose:this.onRequestClose,showArrow:!1,ref:function(t){t&&(e.closeDropdown=t.close.bind(t))}},o.a.createElement(i.DropdownTarget,null,o.a.createElement(i.TextInput,{isTarget:!0,readOnly:!0,value:d.name,label:y},o.a.createElement(i.TextInputIcon,{name:"chevron-down"}))),o.a.createElement(i.DropdownSource,null,o.a.createElement(i.DropdownContext,null,o.a.createElement(i.Transition,{activeIndex:n,height:"27rem",width:"14.5rem"},o.a.createElement(f,{onItemSelect:this.onItemSelect,options:s,settings:d}),o.a.createElement(p.a,{activeOption:b,disableApply:g,filter:l,onApply:this.onApply,onCancel:this.onCancel,onSubMenuAddButtonClick:this.onSubMenuAddButtonClick,onFilter:this.onFilter,onItemSelect:this.onItemSelect,onNavigateBack:this.onNavigateBack,onSelectionChanged:this.onSelectionChanged,onAddUncategorised:this.onAddUncategorised,addUncategorised:this.state.addUncategorised,selection:a,selectedValue:this.state.value,settings:d,showSubMenuFooter:this.state.showSubMenuFooter,disableAddUncategorised:w})))))}}])&&m(n.prototype,a),l&&m(n,l),t}();t.a=C},171:function(e,t){e.exports={"--analytics-color-grey":"#8d8d8d","--analytics-color-darkgrey":"#4b4949","--analytics-color-lightgrey":"#b2b2b2","--analytics-color-bordergrey":"#e7e7e7","--analytics-color-actionblue":"#4c9ef5","--analytics-color-actionborderblue":"#4892e0","--analytics-color-darkblue":"#1b688d","--analytics-color-highlightblue":"#5fa9ea","--analytics-color-hoverblue":"#f1f9fc","--analytics-color-icon-facebook":"#4680ca","--analytics-color-errorlight":"#dc6d6d","--analytics-color-marian-blue":"#edf8fb","--analytics-color-marian-blue--dark":"#e0f4f8","--analytics-color-status-green":"#86be45","--analytics-color-status-grey":"#cecece","--analytics-color-status-red":"#dc6d6d","--analytics-spacing-tiny":"3px","--analytics-spacing-small":"6px","--analytics-spacing-single":"12px","--analytics-spacing-intermediate":"18px","--analytics-spacing-double":"24px","--analytics-spacing-page":"36px"}},194:function(e,t,n){"use strict";var r=n(1),o=n.n(r),i=(n(3),n(34)),a=n(388),l=n(389);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,f(t).apply(this,arguments))}var n,c,d;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,r["Component"]),n=t,(c=[{key:"render",value:function(){var e=this.props,t=e.title,n=e.onApply,r=e.onCancel,c=e.disableApply,u=e.children,s=e.onItemSelect,f=e.onNavigateBack,p=e.addUncategorised,d=e.addUncategorisedCheckbox,y=e.onAddUncategorised,b=e.showSubMenuFooter,h=e.selectedValue,m=e.disableAddUncategorised;if(!u||!u.length)return null;return o.a.createElement("div",null,o.a.createElement(a.a,{onBack:f,title:t}),o.a.createElement(i.DropdownMenu,{hasFullSeparator:!0,height:d&&b?"16.25rem":"23rem",maxHeight:"23rem"},u.map(function(e){var t=e.value,n=e.name,r=e.pluralName,a=e.disabled;return o.a.createElement(i.DropdownMenuItem,{onClick:function(){return s(t)},keepOpen:!0,key:t,selected:h===t,disabled:a},r||n)})),d&&b&&o.a.createElement(l.a,{disabledApply:c,disableAddUncategorised:m,onApply:n,onCancel:r,addUncategorisedCheckbox:d,onAddUncategorised:y,addUncategorised:p,subMenuButton:{text:"Cancel"}}))}}])&&u(n.prototype,c),d&&u(n,d),t}();t.a=d},227:function(e,t,n){"use strict";var r=n(1),o=n.n(r),i=(n(3),n(42)),a=n.n(i);n(391);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=function(e){var t=e.active,n=e.children,r=c(e,["active","children"]),i=a()({"title-bar-tab":!0,"title-bar-tab--active":t,"title-bar-tab--clickable":r.onClick});return o.a.createElement("li",l({className:i},r),n)};n(393);var s=function(e){return o.a.createElement("ul",{className:"title-bar-tabs"},e.children)};n(395);var f=function(e){var t=e.children,n=e.title;return o.a.createElement("div",{className:"title-bar","data-at":"react-title-bar"},o.a.createElement("div",{className:"title-bar__heading","data-at":"react-title-bar-heading"},o.a.createElement("h1",{className:"title-bar__heading-text"},n)),o.a.createElement("div",{className:"title-bar__children"},t))};n.d(t,"a",function(){return u}),n.d(t,"b",function(){return s});t.c=f},228:function(e,t,n){"use strict";var r=n(1),o=n.n(r),i=(n(3),n(194)),a=n(388),l=n(34);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,f(t).apply(this,arguments))}var n,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,r["Component"]),n=t,(i=[{key:"render",value:function(){var e=this.props,t=e.title,n=e.onFilter;return o.a.createElement(l.DropdownHeader,null,o.a.createElement(l.Grid,{gutters:"tiny",responsive:!1,verticalAlign:"middle"},o.a.createElement(l.GridCell,null,o.a.createElement(l.TextInput,{onInput:function(e){return n(e.target.value)},placeholder:"Search ".concat(t)},o.a.createElement(l.TextInputIcon,{align:"left",name:"magnify-glass"})))))}}])&&u(n.prototype,i),a&&u(n,a),t}();function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,m(t).apply(this,arguments))}var n,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,r["Component"]),n=t,(i=[{key:"render",value:function(){var e=this.props,t=e.title,n=e.allSelected,r=e.onToggleAllClick;return o.a.createElement(l.Grid,{verticalGutters:!1,horizontalAlign:"middle",space:"x0"},o.a.createElement(l.GridCell,{width:80},o.a.createElement(l.Grid,{horizontalAlign:"end"},o.a.createElement(l.GridCell,{verticalAlign:"middle"},o.a.createElement(l.Heading,{textSize:"label"},o.a.createElement(l.Strong,{textCase:"upper"}," select ",t))),o.a.createElement(l.GridCell,{shrink:!0},o.a.createElement(l.Link,{onClick:r},o.a.createElement(l.Strong,null,n?"Unselect":"Select"," all"))))),o.a.createElement(l.GridCell,{full:!0},o.a.createElement(l.Grid,{horizontalAlign:"middle"},o.a.createElement(l.GridCell,{width:80},o.a.createElement(l.Separator,null)))))}}])&&b(n.prototype,i),a&&b(n,a),t}(),w=n(389);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var _=function(e){function t(){var e,n,r,o,i,a,l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var c=arguments.length,u=new Array(c),s=0;s<c;s++)u[s]=arguments[s];return r=this,o=(e=C(t)).call.apply(e,[this].concat(u)),n=!o||"object"!==S(o)&&"function"!=typeof o?k(r):o,i=k(k(n)),l=function(){var e=n.props,t=e.data,r=e.filter,o=e.selection,i=e.onSelectionChanged,a=e.identifierPropertyName,l=void 0===a?"id":a,c=t.filter(function(e){return e.name.toLowerCase().includes(r.toLowerCase())}),u=o.includes(-1),s=c.length&&c.every(function(e){var t=e[l];return o.includes(t)}),f=c.map(function(e){return e[l]||e.id}),p=[];p=s?o.filter(function(e){return!f.includes(e)}):p.concat(o,f.filter(function(e){return!o.includes(e)})),u&&!p.includes(-1)&&p.push(-1),i(p)},(a="handleToggleAll")in i?Object.defineProperty(i,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):i[a]=l,n}var n,i,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,r["Component"]),n=t,(i=[{key:"render",value:function(){var e=this.props,t=e.data,n=e.disableApply,r=e.allowSelectAll,i=e.filter,l=e.identifierPropertyName,c=e.onApply,u=e.onCancel,s=e.onSubMenuAddButtonClick,f=e.onFilter,p=e.subMenuCreateNew,y=e.onNavigateBack,b=e.onSelectionChanged,h=e.selection,m=e.subMenuComponent,v=e.title,S=e.value,O=e.addUncategorisedCheckbox,C=e.addUncategorised,E=e.onAddUncategorised,k=e.disableAddUncategorised,_=p?{text:"New List",icon:"plus"}:{text:"Cancel"},j=t.filter(function(e){return e.name.includes(i)}).every(function(e){var t=e.name;return h.includes(t)});return o.a.createElement("div",null,o.a.createElement(a.a,{onBack:y,title:v}),o.a.createElement(d,{title:v,onFilter:f}),r&&o.a.createElement(g,{title:S,allSelected:j,onToggleAllClick:this.handleToggleAll}),o.a.createElement(m,{data:t,title:S,filter:i,identifierPropertyName:l,allowSelectAll:r,onSelectionChanged:b,selection:h,addUncategorisedCheckbox:O}),o.a.createElement(w.a,{disabledApply:n,disableAddUncategorised:k,onApply:c,addUncategorisedCheckbox:O,onAddUncategorised:E,addUncategorised:C,subMenuButton:_,onSubMenuButtonClick:p?function(){return s(S)}:u}))}}])&&O(n.prototype,i),l&&O(n,l),t}();function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var U=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),A(this,P(t).apply(this,arguments))}var n,a,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.activeOption,n=e.disableApply,r=e.filter,a=e.selection,l=e.onItemSelect,c=e.onNavigateBack,u=e.onApply,s=e.onCancel,f=e.onSubMenuAddButtonClick,p=e.onFilter,d=e.onSelectionChanged,y=e.selectedValue,b=e.onAddUncategorised,h=e.addUncategorised,m=e.showSubMenuFooter,v=e.disableAddUncategorised;if(!t)return null;var g=t.children,w=t.name,S=t.pluralName,O=t.value,C=t.subMenuComponent,E=t.identifierPropertyName,k=t.subMenuData,j=t.subMenuCreateNew,x=t.allowSelectAll,A=t.addUncategorisedCheckbox;return g?o.a.createElement(i.a,{children:g,disableApply:n,onItemSelect:l,onNavigateBack:c,onApply:u,onCancel:s,title:S||w,selectedValue:y,addUncategorisedCheckbox:A,onAddUncategorised:b,addUncategorised:h,disableAddUncategorised:v,showSubMenuFooter:m}):C?o.a.createElement(_,{subMenuComponent:C,title:S||w,value:O,data:k,disableApply:n,allowSelectAll:x,filter:r,identifierPropertyName:E,onApply:u,onCancel:s,subMenuCreateNew:j,onSubMenuAddButtonClick:f,onFilter:p,onNavigateBack:c,onSelectionChanged:d,onAddUncategorised:b,addUncategorised:h,addUncategorisedCheckbox:A,disableAddUncategorised:v,selection:a}):null}}])&&x(n.prototype,a),l&&x(n,l),t}();t.a=U},388:function(e,t,n){"use strict";var r=n(1),o=n.n(r),i=(n(3),n(34));function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,u(t).apply(this,arguments))}var n,a,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.onBack,n=e.title;return o.a.createElement(i.DropdownHeader,null,o.a.createElement(i.Grid,{gutters:"tiny",responsive:!1,verticalAlign:"middle"},o.a.createElement(i.GridCell,{none:!0},o.a.createElement(i.Link,{style:"body",onClick:t},o.a.createElement(i.Icon,{name:"chevron-left"}))),o.a.createElement(i.GridCell,null,o.a.createElement(i.Paragraph,{textCase:"upper",textCenter:!0,textColor:"subtle",textEllipsis:!0,textSize:"small"},n)),o.a.createElement(i.GridCell,{cloak:!0,none:!0},o.a.createElement(i.Icon,{name:"chevron-left"}))))}}])&&l(n.prototype,a),f&&l(n,f),t}();t.a=f},389:function(e,t,n){"use strict";var r=n(1),o=n.n(r),i=(n(3),n(34)),a=n(482),l=n.n(a);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,f(t).apply(this,arguments))}var n,a,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.onApply,n=e.disabledApply,r=e.addUncategorisedCheckbox,a=e.addUncategorised,c=e.onAddUncategorised,u=e.onSubMenuButtonClick,s=e.subMenuButton,f=e.disableAddUncategorised,p=void 0!==f&&f;return o.a.createElement(i.DropdownFooter,null,r&&o.a.createElement(i.Grid,{responsive:!1,verticalAlign:"middle"},o.a.createElement(i.GridCell,{width:20},o.a.createElement(l.a,{disabled:p,checked:a,onClick:function(){return c()}})),o.a.createElement(i.GridCell,null,o.a.createElement(i.Base,{Component:"span",textColor:p?"disabled":"body"},r.label))),o.a.createElement(i.ButtonGroup,{space:"x2",textBreak:"none",textLeft:!0},o.a.createElement(i.Button,{size:"small",onClick:t,disabled:n},"Apply"),o.a.createElement(i.Button,{size:"small",onClick:u,style:"secondary"},s&&s.icon&&o.a.createElement(i.ButtonIcon,{name:"plus"}),s&&s.text)))}}])&&u(n.prototype,a),c&&u(n,c),t}();t.a=d},390:function(e,t,n){var r=n(705);"string"==typeof r&&(r=[[e.i,r,""]]);var o={transform:void 0};n(32)(r,o);r.locals&&(e.exports=r.locals)},391:function(e,t,n){var r=n(392);"string"==typeof r&&(r=[[e.i,r,""]]);var o={transform:void 0};n(32)(r,o);r.locals&&(e.exports=r.locals)},392:function(e,t,n){(e.exports=n(31)(!1)).push([e.i,".ax-wrapper .title-bar-tab{display:flex;align-items:center;justify-items:center;padding:8px 12.5px;border:none;border-bottom:1px solid #e0f4f8;border-left:1px solid #fff}.ax-wrapper .title-bar-tab:hover{background:#e0f4f8}.ax-wrapper .title-bar-tab--active{background:#e0f4f8;margin-bottom:-1px}.ax-wrapper .title-bar-tab--clickable{cursor:pointer}.ax-wrapper .title-bar-tab .icon-cog{display:flex;justify-content:center}",""])},393:function(e,t,n){var r=n(394);"string"==typeof r&&(r=[[e.i,r,""]]);var o={transform:void 0};n(32)(r,o);r.locals&&(e.exports=r.locals)},394:function(e,t,n){(e.exports=n(31)(!1)).push([e.i,".ax-wrapper .title-bar-tabs{list-style-type:none;margin:0;display:flex;justify-content:space-around;height:100%}",""])},395:function(e,t,n){var r=n(396);"string"==typeof r&&(r=[[e.i,r,""]]);var o={transform:void 0};n(32)(r,o);r.locals&&(e.exports=r.locals)},396:function(e,t,n){(e.exports=n(31)(!1)).push([e.i,".ax-wrapper .title-bar{background-color:#edf8fb;display:flex;justify-content:space-between;color:#494b4b;font-family:Arial;font-size:13px}.ax-wrapper .title-bar__children,.ax-wrapper .title-bar__heading{display:flex;flex-direction:column;justify-content:space-around;margin-left:11px}.ax-wrapper .title-bar__children{margin-left:0}.ax-wrapper .title-bar__heading{min-width:0;padding:9px 12.5px}.ax-wrapper .title-bar__heading-text{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;font-size:inherit;font-weight:inherit;margin:0}",""])},65:function(e,t,n){"use strict";var r=n(1),o=n.n(r),i=(n(3),n(171)),a=n.n(i),l=function(e){return a.a[e]};function c(e,t){var n={},r=l(e);return r&&(n.color=r),t&&(n.fontSize="".concat(t,"rem")),n}var u=function(e){var t=e.type,n=e.color,r=e.size;return o.a.createElement("span",{className:"icon-".concat(t),style:c(n,r)})};n.d(t,"a",function(){return u})},705:function(e,t,n){(e.exports=n(31)(!1)).push([e.i,".ax-wrapper .ns-nested-select__list:focus{outline:none}",""])}}]);