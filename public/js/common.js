'use strict';function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_unsupportedIterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _iterableToArray(a){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(a))return Array.from(a)}function _arrayWithoutHoles(a){if(Array.isArray(a))return _arrayLikeToArray(a)}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}var win=window,dom=document,template={gnb:function gnb(){return" <h1 class=\"brand\">\uC9C4\uC6B0\uC5D4\uC9C0\uB2C8\uC5B4\uB9C1</h1> <button type=\"button\" class=\"toggle-button\"> <span class=\"__bar\"></span> <span class=\"__bar\"></span> <span class=\"__bar\"></span> </button> <nav data-id=\"gnbNav\" class=\"nav\"> <ul class=\"nav-list\"> <li class=\"nav-item\"> <a href=\"../html/home.html\" class=\"__link\">HOME</a> </li> <li class=\"nav-item\"> <a href=\"../html/about.html\" class=\"__link\">\uD68C\uC0AC\uC18C\uAC1C</a> </li> <li class=\"nav-item\"> <a href=\"../html/status.html\" class=\"__link\">\uD68C\uC0AC\uD604\uD669</a> </li> <li class=\"nav-item\"> <a href=\"../html/business.html\" class=\"__link\">\uC0AC\uC5C5\uC18C\uAC1C</a> </li> <li class=\"nav-item\"> <a href=\"../html/sales.html\" class=\"__link\">\uB9E4\uCD9C\uACC4\uD68D</a> </li> </ul> </nav> "},footer:function footer(){return" <div class=\"cell1\"> <p class=\"address\">\uACBD\uAE30\uB3C4 \uB3D9\uB450\uCC9C\uC2DC \uC0BC\uC721\uC0AC\uB85C 548\uBC88\uAE38 84 (\uC0C1\uD328\uB3D9)</p> <p class=\"tel\">TEL : 031-858-2430</p> <p class=\"tel\">FAX : 031-858-2429</p> <p class=\"email\">EMAIL : <a href=\"mailto:jinwoo43705@naver.com\">jinwoo43705@naver.com</a></p> </div> <div class=\"cell2\">Copyright \xA9 JINWOO ENGINEERING. All rights reserved.</div>"},gnbFix:function gnbFix(){return template.gnb()}},className={gnb:"gnb",footer:"footer",gnbFix:"gnb gnbFix"};dom.querySelectorAll("[data-component]").forEach(function(a){var b=a.dataset.component;a.className=className[b],a.innerHTML=template[b](),("gnb"===b||"gnbFix"===b)&&a.setAttribute("data-expanded",!1)});var handleGnbFix=function(){var a=dom.getElementById("gnbFix"),b=dom.getElementById("header");a&&win.addEventListener("scroll",function(){var c=!0;win.scrollY>b.offsetHeight&&(c=!1),a.dataset.hidden=c})};handleGnbFix();var handeNavs=function(){_toConsumableArray(dom.getElementsByClassName("gnb")).forEach(function(a){a.getElementsByClassName("toggle-button")[0].addEventListener("click",function(){var b=a.getAttribute("data-expanded");a.setAttribute("data-expanded","false"===b)},!1)})};handeNavs();