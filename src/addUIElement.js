// This module is activated by hotkey or context menu. It creates, styles, and populates 
// This is ezra's job to complete
define(function (require, exports, module) {
    "use strict";
    
    var workspaceManager = brackets.getModule("view/WorkspaceManager");
    
    var htmlString = "<div style=\"backgorund-color:green\" id=\"testID\">hi</div>";
    var panel = workspaceManager.createBottomPanel("#testID", htmlString);
    panel.show();
});
