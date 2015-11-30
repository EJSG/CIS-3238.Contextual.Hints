/*//// This module is activated by hotkey or context menu. It creates, styles, and populates 
//// This is ezra's job to complete
define(function (require, exports, module) {
//    "use strict";
//    
//    var extensionUtils = brackets.getModule("utils/ExtensionUtils"),
//        workspaceManager = brackets.getModule("view/WorkspaceManager"),
//        CommandManager = brackets.getModule("command/CommandManager");
//    
//    //extensionUtils.loadStyleSheet(module, "src/css/styles.css");
//    
//    var MY_COMMAND_ID = "cis3238-contextual-hints.testCommand";   // package-style naming to avoid collisions
//    CommandManager.register("Show panel", MY_COMMAND_ID, showTestPanel);
//    
//    var htmlString = "<div style=\"backgorund-color:green\" id=\"testID\">hi</div>";
//    var panel = workspaceManager.createBottomPanel("#testID", htmlString);
//    
//    var menu = Menus.getMenu(Menus.AppMenuBar.FILE_MENU);
//    menu.addMenuItem(MY_COMMAND_ID, "Ctrl-Alt-W");
//    
//    
//    function showTestPanel() {
//        panel.show();
//    }
//    
    
    
    var CommandManager = brackets.getModule("command/CommandManager"),
    Menus = brackets.getModule("command/Menus"),
    PanelManager = brackets.getModule("view/PanelManager"),
    AppInit = brackets.getModule("utils/AppInit");

    var HELLOWORLD_EXECUTE = "helloworld.execute";
    var panel;

    function handleHelloWorld() {
        if(panel.isVisible()) {
            panel.hide();
            CommandManager.get(HELLOWORLD_EXECUTE).setChecked(false);
        } else {
            panel.show();
            CommandManager.get(HELLOWORLD_EXECUTE).setChecked(true);
        }
    }

    AppInit.appReady(function () {

            log("Hello from HelloWorld4.");

            CommandManager.register("Run HelloWorld", HELLOWORLD_EXECUTE, handleHelloWorld);

            var menu = Menus.getMenu(Menus.AppMenuBar.VIEW_MENU);
            menu.addMenuItem(HELLOWORLD_EXECUTE);

            panel = PanelManager.createBottomPanel(HELLOWORLD_EXECUTE, $("<div class='bottom-panel'>HTML for my panel</div>"),200);

    });

});*/    
    
//////////////

define(function (require, exports, module) {
    var CommandManager      = brackets.getModule("command/CommandManager"),
        Menus               = brackets.getModule("command/Menus"),
        PanelManager        = brackets.getModule("view/PanelManager"),
        ExtensionUtils      = brackets.getModule("utils/ExtensionUtils"),        
        AppInit             = brackets.getModule("utils/AppInit"),
        KeyBindingManager   = brackets.getModule("command/KeyBindingManager");

    var panel;
    var panelHtml  = require("text!./html/bottom-panel.html");
    var CONTEXTUAL_HINTS_EXECUTE = "contextualHints.execute";
    
    function log(s) {
            console.log("[ContextualHints] "+s);
    }
    
    log("Entered createPanel.js");

    function togglePanel() {
        if(panel.isVisible()) {
            CommandManager.get(CONTEXTUAL_HINTS_EXECUTE).setChecked(false);
            panel.hide();
            
        } else {
            CommandManager.get(CONTEXTUAL_HINTS_EXECUTE).setChecked(true);
            panel.show();
            
        }
    }

    AppInit.appReady(function () {
        
        log("Creating panel");
        ExtensionUtils.loadStyleSheet(module, "./css/styles.less");
        CommandManager.register("Show Contextual Hint", CONTEXTUAL_HINTS_EXECUTE, togglePanel);

        var menu = Menus.getMenu(Menus.AppMenuBar.VIEW_MENU);
        menu.addMenuItem(CONTEXTUAL_HINTS_EXECUTE);

        panel = PanelManager.createBottomPanel(CONTEXTUAL_HINTS_EXECUTE, $(panelHtml),200);
        KeyBindingManager.addBinding(CONTEXTUAL_HINTS_EXECUTE, "ctrl-shift-p");
    });

});