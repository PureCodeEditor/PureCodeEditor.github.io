define("ace/theme/purecode",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "purecode";
exports.cssText = "";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
