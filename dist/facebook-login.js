!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.FacebookLogin=t(require("react")):e.FacebookLogin=t(e.react)}(this,function(e){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(2)},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),s=o(6),l=n(s),p=o(4),u=n(p),f=o(3),d=n(f),b=function(e){function t(e){r(this,t);var o=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.responseApi=function(e){window.FB.api("/me",{fields:o.props.fields},function(t){Object.assign(t,e),o.props.callback(t)})},o.checkLoginState=function(e){e.authResponse?o.responseApi(e.authResponse):o.props.callback&&o.props.callback({status:e.status})},o.checkLoginAfterRefresh=function(e){"unknown"===e.status?window.FB.login(function(e){return o.checkLoginState(e)},!0):o.checkLoginState(e)},o.click=function(){var e=o.props,t=e.scope,n=e.appId,r=e.onClick,i=e.reAuthenticate;"function"==typeof r&&r();var a=!1;try{a=window.navigator&&window.navigator.standalone||navigator.userAgent.match("CriOS")||navigator.userAgent.match(/mobile/i)}catch(c){}var s={client_id:n,redirect_uri:window.location.href,state:"facebookdirect",scope:t};i&&(s.auth_type="reauthenticate"),a?window.location.href="https://www.facebook.com/dialog/oauth?"+(0,d["default"])(s):window.FB.login(o.checkLoginState,{scope:t,auth_type:s.auth_type})},o.state={inited:!1},o}return a(t,e),c(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,o=t.appId,n=t.xfbml,r=t.cookie,i=t.version,a=t.autoLoad,c=t.language,s=document.getElementById("fb-root");s||(s=document.createElement("div"),s.id="fb-root",document.body.appendChild(s)),window.fbAsyncInit=function(){window.FB.init({version:"v"+i,appId:o,xfbml:n,cookie:r}),e.setState({inited:!0}),(a||window.location.search.includes("facebookdirect"))&&window.FB.getLoginStatus(e.checkLoginAfterRefresh)},function(e,t,o){var n=e.getElementsByTagName(t)[0],r=n,i=n;e.getElementById(o)||(i=e.createElement(t),i.id=o,i.src="//connect.facebook.net/"+c+"/all.js",r.parentNode.insertBefore(i,r))}(document,"script","facebook-jssdk")}},{key:"render",value:function(){var e=this.props,t=e.cssClass,o=e.size,n=e.icon,r=e.textButton,i="string"==typeof n,a=this.state.inited;return a?l["default"].createElement("span",null,i&&l["default"].createElement("link",{rel:"stylesheet",href:"//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"}),l["default"].createElement("button",{className:t+" "+o,onClick:this.click},n&&i&&l["default"].createElement("i",{className:"fa "+n}),n&&!i&&n,r),l["default"].createElement("style",{dangerouslySetInnerHTML:{__html:u["default"]}})):null}}]),t}(l["default"].Component);b.propTypes={callback:s.PropTypes.func.isRequired,appId:s.PropTypes.string.isRequired,xfbml:s.PropTypes.bool,cookie:s.PropTypes.bool,reAuthenticate:s.PropTypes.bool,scope:s.PropTypes.string,textButton:s.PropTypes.string,typeButton:s.PropTypes.string,autoLoad:s.PropTypes.bool,size:s.PropTypes.string,fields:s.PropTypes.string,cssClass:s.PropTypes.string,version:s.PropTypes.string,icon:s.PropTypes.any,language:s.PropTypes.string,onClick:s.PropTypes.func},b.defaultProps={textButton:"Login with Facebook",typeButton:"button",scope:"public_profile,email",xfbml:!1,cookie:!1,reAuthenticate:!1,size:"metro",fields:"name",cssClass:"kep-login-facebook",version:"2.3",language:"en_US"},t["default"]=b},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(1),i=n(r);t["default"]=i["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){var t="";for(var o in e)""!==t&&(t+="&"),t+=o+"="+encodeURIComponent(e[o]);return t}},function(e,t,o){t=e.exports=o(5)(),t.push([e.id,".kep-login-facebook{font-family:Helvetica,sans-serif;font-weight:700;-webkit-font-smoothing:antialiased;color:#fff;cursor:pointer;display:inline-block;font-size:calc(.27548vw + 12.71074px);text-decoration:none;text-transform:uppercase;transition:background-color .3s,border-color .3s;background-color:#4c69ba;border:calc(.06887vw + .67769px) solid #4c69ba;padding:calc(.34435vw + 13.38843px) calc(.34435vw + 18.38843px)}.kep-login-facebook.small{padding:calc(.34435vw + 3.38843px) calc(.34435vw + 8.38843px)}.kep-login-facebook.medium{padding:calc(.34435vw + 8.38843px) calc(.34435vw + 13.38843px)}.kep-login-facebook.metro{border-radius:0}.kep-login-facebook .fa{margin-right:calc(.34435vw + 3.38843px)}",""]),t.locals={"kep-login-facebook":"kep-login-facebook",small:"small",medium:"medium",metro:"metro",fa:"fa"}},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var o=this[t];o[2]?e.push("@media "+o[2]+"{"+o[1]+"}"):e.push(o[1])}return e.join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(n[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&n[a[0]]||(o&&!a[2]?a[2]=o:o&&(a[2]="("+a[2]+") and ("+o+")"),e.push(a))}},e}},function(t,o){t.exports=e}])});