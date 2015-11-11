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
    
    var color = {
                    actualName:"color",
                    definition:"Sets the color of text",
                    defaultValue:"not specified",
                    isInherited:true,
                    isAnimatable:true
                };
    var opacity = {
                    actualName:"opacity",
                    definition:"Sets the opacity level for an element",
                    defaultValue:"1",
                    isInherited:false,
                    isAnimatable:true
            };
    var background = {
                    actualName:"background",
                    definition:"A shorthand property for setting all the background properties in one declaration",
                    defaultValue:"see individual properties",
                    isInherited:false,
                    isAnimatable:true
            };
    var backgroundAttachment = {
                    actualName:"background-attachment",
                    definition:"Sets whether a background image is fixed or scrolls with the rest of the page",
                    defaultValue:"scroll",
                    isInherited:false,
                    isAnimatable:false
            };
    var backgroundBlendMode = {
                    actualName:"background-blend-mode",
                    definition:"Specifies the blending mode of each background layer (color/image)",
                    defaultValue:"normal",
                    isInherited:false,
                    isAnimatable:false
            };
    var backgroundColor = {
                    actualName:"background-color",
                    definition:"Specifies the background color of an element",
                    defaultValue:"transparent",
                    isInherited:false,
                    isAnimatable:true
            };
    var backgroundImage = {
                    actualName:"background-image",
                    definition:"Specifies one or more background images for an element",
                    defaultValue:"none",
                    isInherited:false,
                    isAnimatable:false
            };
    var backgroundPosition = {
                    actualName:"background-position",
                    definition:"Specifies the position of a background image",
                    defaultValue:"0% 0%",
                    isInherited:false,
                    isAnimatable:true
            };
    var backgroundRepeat = {
                    actualName:"background-repeat",
                    definition:"Sets how a background image will be repeated",
                    defaultValue:"repeat",
                    isInherited:false,
                    isAnimatable:false
            };
    var backgroundClip = {
                    actualName:"background-clip",
                    definition:"Specifies the painting area of the background",
                    defaultValue:"border-box",
                    isInherited:false,
                    isAnimatable:false
            };
    var backgroundOrigin = {
                    actualName:"background-origin",
                    definition:"Specifies where the background image(s) is/are positioned",
                    defaultValue:"padding-box",
                    isInherited:false,
                    isAnimatable:false
            };
    var backgroundSize = {
                    actualName:"background-size",
                    definition:"Specifies the size of the background image(s)",
                    defaultValue:"auto",
                    isInherited:false,
                    isAnimatable:true
            };
    var border = {
                    actualName:"border",
                    definition:"Sets all the border properties in one declaration",
                    defaultValue:"medium none color",
                    isInherited:false,
                    isAnimatable:true
            };
    var borderBottom = {
                    actualName:"border-bottom",
                    definition:"Sets all the bottom border properties in one declaration",
                    defaultValue:"medium none color",
                    isInherited:false,
                    isAnimatable:true
            };
    var borderBottomColor = {
                    actualName:"border-bottom-color",
                    definition:"Sets the color of the bottom border",
                    defaultValue:"The current color of the element",
                    isInherited:false,
                    isAnimatable:true
            };
    var borderBottomLeftRadius = {
                    actualName:"border-bottom-left-radius",
                    definition:"Defines the shape of the border of the bottom-left corner",
                    defaultValue:"0",
                    isInherited:false,
                    isAnimatable:true
            };
    var borderBottomRightRadius = {
                    actualName:"border-bottom-right-radius",
                    definition:"Defines the shape of the border of the bottom-right corner",
                    defaultValue:"0",
                    isInherited:false,
                    isAnimatable:true
            };
    var borderBottomStyle = {
                    actualName:"border-bottom-style",
                    definition:"Sets the style of the bottom border",
                    defaultValue:"none",
                    isInherited:false,
                    isAnimatable:false
            };
    var borderBottomWidth = {
                    actualName:"border-bottom-width",
                    definition:"Sets the width of the bottom border",
                    defaultValue:"medium",
                    isInherited:false,
                    isAnimatable:true
            };
    var borderColor = {
                    actualName:"border-color",
                    definition:"Sets the color of the four borders",
                    defaultValue:"The current color of the element",
                    isInherited:false,
                    isAnimatable:true
            };
    var borderImage = {
                    actualName:"border-image",
                    definition:"A shorthand property for setting all the border-image-* properties",
                    defaultValue:"none 100% 1 0 stretch",
                    isInherited:false,
                    isAnimatable:false
            };
    var borderImageOutset = {
                    actualName:"border-image-outset",
                    definition:"Specifies the amount by which the border image area extends beyond the border box",
                    defaultValue:"0",
                    isInherited:false,
                    isAnimatable:false
            };
    var borderImageRepeat = {
                    actualName:"border-image-repeat",
                    definition:"Specifies whether the border image should be repeated, rounded or stretched",
                    defaultValue:"stretch",
                    isInherited:false,
                    isAnimatable:false
            };
    var borderImageSlice = {
                    actualName:"border-image-slice",
                    definition:"Specifies how to slice the border image",
                    defaultValue:"100%",
                    isInherited:false,
                    isAnimatable:false
            };
    var borderImageSource = {
                    actualName:"border-image-source",
                    definition:"Specifies the path to the image to be used as a border",
                    defaultValue:"none",
                    isInherited:false,
                    isAnimatable:false
            };
    var borderImageWidth = {
                    actualName:"border-image-width",
                    definition:"Specifies the widths of the image-border",
                    defaultValue:"1",
                    isInherited:false,
                    isAnimatable:false
            };
    var borderLeft = {
                    actualName:"border-left",
                    definition:"Sets all the left border properties in one declaration",
                    defaultValue:"medium none color",
                    isInherited:false,
                    isAnimatable:true
            };
    var borderLeftColor = {
                    actualName:"border-left-color",
                    definition:"Sets the color of the left border",
                    defaultValue:"The current color of the element",
                    isInherited:false,
                    isAnimatable:true
            };
    var borderLeftStyle = {
                    actualName:"border-left-style",
                    definition:"Sets the style of the left border",
                    defaultValue:"none",
                    isInherited:false,
                    isAnimatable:false
            };
    var borderLeftWidth = {
                    actualName:"border-left-width",
                    definition:"Sets the width of the left border",
                    defaultValue:"medium",
                    isInherited:false,
                    isAnimatable:true
            };
    var borderRadius = {
                    actualName:"border-radius",
                    definition:"A shorthand property for setting all the four border-*-radius properties",
                    defaultValue:"0",
                    isInherited:false,
                    isAnimatable:true
            };
    var borderRight = {
                    actualName:"border-right",
                    definition:"Sets all the right border properties in one declaration",
                    defaultValue:"not specified",
                    isInherited:false,
                    isAnimatable:true
            };
    var borderRightColor = {
                    actualName:"border-right-color",
                    definition:"Sets the color of the right border",
                    defaultValue:"black",
                    isInherited:false,
                    isAnimatable:true
            };
    var borderRightStyle = {
                    actualName:"border-right-style",
                    definition:"Sets the style of the right border",
                    defaultValue:"none",
                    isInherited:false,
                    isAnimatable:false
            };
    var borderRightWidth = {
                    actualName:"border-right-width",
                    definition:"Sets the width of the right border",
                    defaultValue:"medium",
                    isInherited:false,
                    isAnimatable:true
            };
    var borderStyle = {
                    actualName:"border-style",
                    definition:"Sets the style of the four borders",
                    defaultValue:"none",
                    isInherited:false,
                    isAnimatable:false
            };
    var borderTop = {
                    actualName:"border-top",
                    definition:"Sets all the top border properties in one declaration",
                    defaultValue:"medium none color",
                    isInherited:false,
                    isAnimatable:true
            };
    var borderTopColor = {
                    actualName:"border-top-color",
                    definition:"Sets the color of the top border",
                    defaultValue:"The current color of the element",
                    isInherited:false,
                    isAnimatable:true
            };
    var borderTopLeftRadius = {
                    actualName:"border-top-left-radius",
                    definition:"Defines the shape of the border of the top-left corner",
                    defaultValue:"0",
                    isInherited:false,
                    isAnimatable:true
            };
    var borderTopStyle = {
                    actualName:"border-top-style",
                    definition:"Sets the style of the top border",
                    defaultValue:"none",
                    isInherited:false,
                    isAnimatable:false
            };
    var borderTopWidth = {
                    actualName:"border-top-width",
                    definition:"Sets the width of the top border",
                    defaultValue:"medium",
                    isInherited:false,
                    isAnimatable:true
            };
    var borderWidth = {
                    actualName:"border-width",
                    definition:"Sets the width of the four borders",
                    defaultValue:"medium",
                    isInherited:false,
                    isAnimatable:true
            };
    var boxDecorationBreak = {
                    actualName:"box-decoration-break",
                    definition:"Sets the behaviour of the background and border of an element at page-break, or, for in-line elements, at line-break",
                    defaultValue:"slice",
                    isInherited:false,
                    isAnimatable:false
            };
    var boxShadow = {
                    actualName:"box-shadow",
                    definition:"Attaches one or more drop-shadows to the box",
                    defaultValue:"none",
                    isInherited:false,
                    isAnimatable:true
            };
    var bottom = {
                    actualName:"bottom",
                    definition:"Specifies the bottom position of a positioned element",
                    defaultValue:"auto",
                    isInherited:false,
                    isAnimatable:true
            };
    var clear = {
                    actualName:"clear",
                    definition:"Specifies which sides of an element where other floating elements are not allowed",
                    defaultValue:"none",
                    isInherited:false,
                    isAnimatable:false
            };
    var clip = {
                    actualName:"clip",
                    definition:"Clips an absolutely positioned element",
                    defaultValue:"auto",
                    isInherited:false,
                    isAnimatable:true
            };
    var display = {
                    actualName:"display",
                    definition:"Specifies how a certain HTML element should be displayed",
                    defaultValue:"inline",
                    isInherited:false,
                    isAnimatable:false
            };
    var float = {
                    actualName:"float",
                    definition:"Specifies whether or not a box should float",
                    defaultValue:"none",
                    isInherited:false,
                    isAnimatable:false
            };
    var height = {
                    actualName:"height",
                    definition:"Sets the height of an element",
                    defaultValue:"auto",
                    isInherited:false,
                    isAnimatable:true
            };
    var left = {
                    actualName:"left",
                    definition:"Specifies the left position of a positioned element",
                    defaultValue:"auto",
                    isInherited:false,
                    isAnimatable:true
            };
    var margin = {
                    actualName:"margin",
                    definition:"Sets all the margin properties in one declaration",
                    defaultValue:"0",
                    isInherited:false,
                    isAnimatable:true
            };
    var marginBottom = {
                    actualName:"margin-bottom",
                    definition:"Sets the bottom margin of an element",
                    defaultValue:"0",
                    isInherited:false,
                    isAnimatable:true
            };
    var marginLeft = {
                    actualName:"margin-left",
                    definition:"Sets the left margin of an element",
                    defaultValue:"0",
                    isInherited:false,
                    isAnimatable:true
            };
    var marginRight = {
                    actualName:"margin-right",
                    definition:"Sets the right margin of an element",
                    defaultValue:"0",
                    isInherited:false,
                    isAnimatable:true
            };
    var marginTop = {
                    actualName:"margin-top",
                    definition:"Sets the top margin of an element",
                    defaultValue:"0",
                    isInherited:false,
                    isAnimatable:true
            };
    var maxHeight = {
                    actualName:"max-height",
                    definition:"Sets the maximum height of an element",
                    defaultValue:"none",
                    isInherited:false,
                    isAnimatable:true
            };
    var maxWidth = {
                    actualName:"max-width",
                    definition:"Sets the maximum width of an element",
                    defaultValue:"none",
                    isInherited:false,
                    isAnimatable:true
            };
    var minHeight = {
                    actualName:"min-height",
                    definition:"Sets the minimum height of an element",
                    defaultValue:"0",
                    isInherited:false,
                    isAnimatable:true
            };
    var minWidth = {
                    actualName:"min-width",
                    definition:"Sets the minimum width of an element",
                    defaultValue:"0",
                    isInherited:false,
                    isAnimatable:true
            };
    var overflow = {
                    actualName:"overflow",
                    definition:"Specifies what happens if content overflows an element's box",
                    defaultValue:"visible",
                    isInherited:false,
                    isAnimatable:false
            };
    var overflowX = {
                    actualName:"overflow-x",
                    definition:"Specifies whether or not to clip the left/right edges of the content, if it overflows the element's content area",
                    defaultValue:"visible",
                    isInherited:false,
                    isAnimatable:false
            };
    var overflowY = {
                    actualName:"overflow-y",
                    definition:"Specifies whether or not to clip the top/bottom edges of the content, if it overflows the element's content area",
                    defaultValue:"visible",
                    isInherited:false,
                    isAnimatable:false
            };
    var padding = {
                    actualName:"padding",
                    definition:"Sets all the padding properties in one declaration",
                    defaultValue:"0",
                    isInherited:false,
                    isAnimatable:true
            };
    var paddingBottom = {
                    actualName:"padding-bottom",
                    definition:"Sets the bottom padding of an element",
                    defaultValue:"0",
                    isInherited:false,
                    isAnimatable:true
            };
    var paddingLeft = {
                    actualName:"padding-left",
                    definition:"Sets the left padding of an element",
                    defaultValue:"0",
                    isInherited:false,
                    isAnimatable:true
            };
    var paddingRight = {
                    actualName:"padding-right",
                    definition:"Sets the right padding of an element",
                    defaultValue:"0",
                    isInherited:false,
                    isAnimatable:true
            };
    var paddingTop = {
                    actualName:"padding-top",
                    definition:"Sets the top padding of an element",
                    defaultValue:"0",
                    isInherited:false,
                    isAnimatable:true
            };
    var position = {
                    actualName:"position",
                    definition:"Specifies the type of positioning method used for an element (static, relative, absolute or fixed)",
                    defaultValue:"static",
                    isInherited:false,
                    isAnimatable:false
            };
    var right = {
                    actualName:"right",
                    definition:"Specifies the right position of a positioned element",
                    defaultValue:"auto",
                    isInherited:false,
                    isAnimatable:true
            };
    var top = {
                    actualName:"top",
                    definition:"Specifies the top position of a positioned element",
                    defaultValue:"auto",
                    isInherited:false,
                    isAnimatable:true
            };
    var visibility = {
                    actualName:"visibility",
                    definition:"Specifies whether or not an element is visible",
                    defaultValue:"visible",
                    isInherited:true,
                    isAnimatable:true
            };
    var width = {
                    actualName:"width",
                    definition:"Sets the width of an element",
                    defaultValue:"auto",
                    isInherited:false,
                    isAnimatable:true
            };
    var verticalAlign = {
                    actualName:"vertical-align",
                    definition:"Sets the vertical alignment of an element",
                    defaultValue:"baseline",
                    isInherited:false,
                    isAnimatable:true
            };
    var zIndex = {
                    actualName:"z-index",
                    definition:"Sets the stack order of a positioned element",
                    defaultValue:"auto",
                    isInherited:false,
                    isAnimatable:true
            };
    var alignContent = {
                    actualName:"align-content",
                    definition:"Specifies the alignment between the lines inside a flexible container when the items do not use all available space",
                    defaultValue:"stretch",
                    isInherited:false,
                    isAnimatable:false
            };
    var alignItems = {
                    actualName:"align-items",
                    definition:"Specifies the alignment for items inside a flexible container",
                    defaultValue:"stretch",
                    isInherited:false,
                    isAnimatable:false
            };
    var alignSelf = {
                    actualName:"align-self",
                    definition:"Specifies the alignment for selected items inside a flexible container",
                    defaultValue:"auto",
                    isInherited:false,
                    isAnimatable:false
            };
    var flex = {
                    actualName:"flex",
                    definition:"Specifies the length of the item, relative to the rest",
                    defaultValue:"0 1 auto",
                    isInherited:false,
                    isAnimatable:true
            };
    var flexBasis = {
                    actualName:"flex-basis",
                    definition:"Specifies the initial length of a flexible item",
                    defaultValue:"auto",
                    isInherited:false,
                    isAnimatable:true
            };
    var flexDirection = {
                    actualName:"flex-direction",
                    definition:"Specifies the direction of the flexible items",
                    defaultValue:"row",
                    isInherited:false,
                    isAnimatable:false
            };
    var flexFlow = {
                    actualName:"flex-flow",
                    definition:"A shorthand property for the flex-direction and the flex-wrap properties",
                    defaultValue:"row nowrap",
                    isInherited:false,
                    isAnimatable:false
            };
    var flexGrow = {
                    actualName:"flex-grow",
                    definition:"Specifies how much the item will grow relative to the rest",
                    defaultValue:"0",
                    isInherited:false,
                    isAnimatable:true
            };
    var flexShrink = {
                    actualName:"flex-shrink",
                    definition:"Specifies how the item will shrink relative to the rest",
                    defaultValue:"1",
                    isInherited:false,
                    isAnimatable:true
            };
    var flexWrap = {
                    actualName:"flex-wrap",
                    definition:"Specifies whether the flexible items should wrap or not",
                    defaultValue:"nowrap",
                    isInherited:false,
                    isAnimatable:false
            };
    var justifyContent = {
                    actualName:"justify-content",
                    definition:"Specifies the alignment between the items inside a flexible container when the items do not use all available space",
                    defaultValue:"flex-start",
                    isInherited:false,
                    isAnimatable:false
            };
    var order = {
                    actualName:"order",
                    definition:"Sets the order of the flexible item, relative to the rest",
                    defaultValue:"0",
                    isInherited:false,
                    isAnimatable:true
            };
    var hangingPunctuation = {
                    actualName:"hanging-punctuation",
                    definition:"Specifies whether a punctuation character may be placed outside the line box",
                    defaultValue:"none",
                    isInherited:true,
                    isAnimatable:false
            };
    var hyphens = {
                    actualName:"hyphens",
                    definition:"Sets how to split words to improve the layout of paragraphs",
                    defaultValue:"manual",
                    isInherited:true,
                    isAnimatable:false
            };
    var letterSpacing = {
                    actualName:"letter-spacing",
                    definition:"Increases or decreases the space between characters in a text",
                    defaultValue:"normal",
                    isInherited:true,
                    isAnimatable:true
            };
    var lineBreak = {
                    actualName:"line-break",
                    definition:"Specifies how/if to break lines",
                    defaultValue:"auto",
                    isInherited:false,
                    isAnimatable:false
            };
    var lineHeight = {
                    actualName:"line-height",
                    definition:"Sets the line height",
                    defaultValue:"normal",
                    isInherited:true,
                    isAnimatable:true
            };
    var overflowWrap = {
                    actualName:"overflow-wrap",
                    definition:"Specifies whether or not the browser may break lines within words in order to prevent overflow (when a string is too long to fit its containing box)",
                    defaultValue:"normal",
                    isInherited:true,
                    isAnimatable:false
            };
    var tabSize = {
                    actualName:"tab-size",
                    definition:"Specifies the length of the tab-character",
                    defaultValue:"8",
                    isInherited:true,
                    isAnimatable:false
            };
    var textAlign = {
                    actualName:"text-align",
                    definition:"Specifies the horizontal alignment of text",
                    defaultValue:"left if direction is ltr, and right if direction is rtl",
                    isInherited:true,
                    isAnimatable:false
            };
    var textAlignLast = {
                    actualName:"text-align-last",
                    definition:"Describes how the last line of a block or a line right before a forced line break is aligned when text-align is 'justify'",
                    defaultValue:"auto",
                    isInherited:true,
                    isAnimatable:false
            };
    var textCombineUpright = {
                    actualName:"text-combine-upright",
                    definition:"Specifies the combination of multiple characters into the space of a single character",
                    defaultValue:"none",
                    isInherited:true,
                    isAnimatable:false
            };
    var textIndent = {
                    actualName:"text-indent",
                    definition:"Specifies the indentation of the first line in a text-block",
                    defaultValue:"0",
                    isInherited:true,
                    isAnimatable:true
            };
    var textJustify = {
                    actualName:"text-justify",
                    definition:"Specifies the justification method used when text-align is 'justify'",
                    defaultValue:"auto",
                    isInherited:true,
                    isAnimatable:false
            };
    var textTransform = {
                    actualName:"text-transform",
                    definition:"Controls the capitalization of text",
                    defaultValue:"none",
                    isInherited:true,
                    isAnimatable:false
            };
    var whiteSpace = {
                    actualName:"white-space",
                    definition:"Specifies how white-space inside an element is handled",
                    defaultValue:"normal",
                    isInherited:true,
                    isAnimatable:false
            };
    var wordBreak = {
                    actualName:"word-break",
                    definition:"Specifies line breaking rules for non-CJK scripts",
                    defaultValue:"normal",
                    isInherited:true,
                    isAnimatable:false
            };
    var wordSpacing = {
                    actualName:"word-spacing",
                    definition:"Increases or decreases the space between words in a text",
                    defaultValue:"normal",
                    isInherited:true,
                    isAnimatable:true
            };
    var wordWrap = {
                    actualName:"word-wrap",
                    definition:"Allows long, unbreakable words to be broken and wrap to the next line",
                    defaultValue:"normal",
                    isInherited:true,
                    isAnimatable:false
            };
    var textDecoration = {
                    actualName:"text-decoration",
                    definition:"Specifies the decoration added to text",
                    defaultValue:"none",
                    isInherited:false,
                    isAnimatable:false
            };
    var textDecorationColor = {
                    actualName:"text-decoration-color",
                    definition:"Specifies the color of the text-decoration",
                    defaultValue:"currentColor",
                    isInherited:false,
                    isAnimatable:true
            };
    var textDecorationLine = {
                    actualName:"text-decoration-line",
                    definition:"Specifies the type of line in a text-decoration",
                    defaultValue:"none",
                    isInherited:false,
                    isAnimatable:false
            };
    var textDecorationStyle = {
                    actualName:"text-decoration-style",
                    definition:"Specifies the style of the line in a text decoration",
                    defaultValue:"solid",
                    isInherited:false,
                    isAnimatable:false
            };
    var textShadow = {
                    actualName:"text-shadow",
                    definition:"Adds shadow to text",
                    defaultValue:"none",
                    isInherited:true,
                    isAnimatable:true
            };
    var textUnderlinePosition = {
                    actualName:"text-underline-position",
                    definition:"Specifies the position of the underline which is set using the text-decoration property",
                    defaultValue:"auto",
                    isInherited:true,
                    isAnimatable:false
            };
    var fontFamily = {
                    actualName:"font-family",
                    definition:"Specifies the font family for text",
                    defaultValue:"depends on the browser",
                    isInherited:true,
                    isAnimatable:false
            };
    var fontFeatureSettings = {
                    actualName:"font-feature-settings",
                    definition:"Allows control over advanced typographic features in OpenType fonts",
                    defaultValue:"normal",
                    isInherited:true,
                    isAnimatable:false
            };
    
    
    
    //****************** weird guys here ******************//
    
    var fontFace = {
                    actualName:"@font-face",
                    definition:"A rule that allows websites to download and use fonts other than the 'web-safe' fonts",
                    defaultValue:"",
                    isInherited:,
                    isAnimatable:
            };
    var fontFeatureValues = {
                    actualName:"@font-feature-values",
                    definition:"Allows authors to use a common name in font-variant-alternate for feature activated differently in OpenType",
                    defaultValue:"",
                    isInherited:,
                    isAnimatable:
            };


    
    
    
    var CSSAttributeObjects = {};
    
    // now, you can do CSSAttributeObjects.push(backgroundColor)
    // push all keyword objects into CSSAttributeObjects array
});