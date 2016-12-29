define("ace/theme/solarized_dark",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-solarized-dark";
exports.cssText = "";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
