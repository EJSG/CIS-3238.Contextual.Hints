// This module is activated by hotkey or context menu. It creates, styles, and populates 
//define(function (require, exports, module) {
//    "use strict";
//    
//    // Rachel, this is your primary file (for the week 2 - 3 stuff)
//    // In here, you should register the hotkeys and/or create a context menu and/or add to the top menu bar (maybe under Find -> Context Hints ?)
//    // Search brackets API for "EditorManager.registerInlineDocsProvider()", which should show you how to register a hotkey. That's the exisiting
//    // version of what we are trying to do, QuickDocs. We want to be able to bring up the hints via hotkey, context menu, and dropdown entry. 
//    
//    // This should eventually also check the filetype of current file. If it is NOT .css, .less, .scss, or .sass, display error.
//    // In addition, this must have logic that looks at the cursor position/highlighted word, searches the list of CSS keywords,
//    // and if the selected word matches a word on the list, calls assUIElement.js to create the popup. If not on the list, display error.
//    
//    // call to createUIElement will be something like: createUIElement.openPanel(backgroundColor), where backgroundColor is an object
//    // containing the CSS element's name, definition, usage example, etc. 
//    
//
//    // After importing, you can now access the definitions list by: cssDefinitions.CSSAttributeObjects
//    
//    var panelManager = require("createPanel");
//    
//    
//});