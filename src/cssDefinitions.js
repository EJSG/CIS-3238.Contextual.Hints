// This module is activated by hotkey or context menu. It creates, styles, and populates 
define(function (require, exports, module) {
    "use strict";
    
    // This file contains:
    //      1. List (array, actually) of all CSS3 keywords
    //      2. definitions of those keywords
    //      3. usage examples
    //      4. any other info for CSS keyword that we come up with
    
    // create array of objects, where each object is one of the CSS3 keywords.
    // object should follow CSS JaveScript syntax (you can find them all on w3schools.com),
    // such as: background-color ---> backgroundColor
    
    // e.g. create objects for keywords:
    
    // var backgroundColor = {
    //                          actualName:"background-color", 
    //                          definition:"The background-color property sets the background color of an element",
    //                          defaultValue:"transparent",
    //                          isInherited:false,
    //                          isAnimatable:true
    //                       };
    
    // Please follow the above guidelines when adding definitions--the attribute names and their types 
    // (i.e. isInherited is boolean, not a string) 
    
    var CSSAttributeObjects = {};
    
    // now, you can do CSSAttributeObjects.push(backgroundColor)
    // push all keyword objects into CSSAttributeObjects array
});