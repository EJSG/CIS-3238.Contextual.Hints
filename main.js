/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window */

/** Simple extension that adds a "File > Hello World" menu item */
define(function (require, exports, module) {
    "use strict";
    
    function log(s) {
            console.log("[ContextualHints] "+s);
    }
    log("Requiring createPanel.js... ");
    
    // Add modules
    var addUIElement = require("src/createPanel");
});