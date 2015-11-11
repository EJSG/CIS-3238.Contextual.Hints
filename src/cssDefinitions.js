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
    
    var fontKerning = {
                      actualName:"font-kerning", 
                      definition:"The font-kerning CSS property controls the usage of the kerning information; that is, it controls how letters are spaced.",
                      defaultValue:"auto",
                      isInherited:true,
                      isAnimatable:false
                    },
        fontLanguageOverride = {
                      actualName:"font-language-override", 
                      definition:"The font-language-override CSS property controls the usage of language-specific glyphs in a typeface.",
                      defaultValue:"normal",
                      isInherited:true,
                      isAnimatable:false
                    },
        fontSize = {
                      actualName:"font-size", 
                      definition:"The font-size property sets the size of a font.",
                      defaultValue:"medium",
                      isInherited:true,
                      isAnimatable:true
                    },
        fontSizeAdjust = {
                      actualName:"font-size-adjust", 
                      definition:"The font-size-adjust CSS property specifies that font size should be chosen based on the height of lowercase letters rather than the height of capital letters.",
                      defaultValue:"none",
                      isInherited:true,
                      isAnimatable:true
                    },
        fontStretch = {
                      actualName:"font-stretch", 
                      definition:"The font-stretch property selects a normal, condensed, or expanded face from a font.",
                      defaultValue:"normal",
                      isInherited:true,
                      isAnimatable:true
                    },
        fontStyle = {
                      actualName:"font-style", 
                      definition:"The font-style property specifies the font style for a text.",
                      defaultValue:"normal",
                      isInherited:true,
                      isAnimatable:false
                    },
        fontSynthesis = {
                      actualName:"font-synthesis", 
                      definition:"The font-synthesis CSS property controls which missing typefaces, bold or italic, may be synthesized by the browser.",
                      defaultValue:"weight style",
                      isInherited:true,
                      isAnimatable:false
                    },
        fontVariant = {
                      actualName:"font-variant", 
                      definition:"The font-variant property acts as a shorthand for the longhand properties: font-variant-caps, font-variant-numeric, font-variant-alternates, font-variant-ligatures, and font-variant-east-asian.",
                      defaultValue:"normal",
                      isInherited:true,
                      isAnimatable:false
                    },
        fontVariantAlternates = {
                      actualName:"font-variant-alternates", 
                      definition:"The font-variant-alternates CSS property controls the usage of alternate glyphs associated to alternative names defined in @font-feature-values",
                      defaultValue:"normal",
                      isInherited:true,
                      isAnimatable:false
                    },
        fontVariantCaps = {
                      actualName:"font-variant-caps", 
                      definition:"The font-variant-caps CSS property controls the usage of alternate glyphs for capital letters.",
                      defaultValue:"normal",
                      isInherited:true,
                      isAnimatable:false
                    },
        fontVariantEastAsian = {
                      actualName:"font-variant-east-asian", 
                      definition:"The font-variant-east-asian CSS property controls the usage of alternate glyphs for East Asian scripts, like Japanese and Chinese.",
                      defaultValue:"normal",
                      isInherited:true,
                      isAnimatable:false
                    },
        fontVariantLigatures = {
                      actualName:"font-variant-ligatures", 
                      definition:"The font-variant-ligatures CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.",
                      defaultValue:"normal",
                      isInherited:true,
                      isAnimatable:false
                    },
        fontVariantNumeric = {
                      actualName:"font-variant-numeric", 
                      definition:"The font-variant-numeric CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers.",
                      defaultValue:"normal",
                      isInherited:true,
                      isAnimatable:false
                    },
        fontVariantPosition = {
                      actualName:"font-variant-position", 
                      definition:"The font-variant-position CSS property controls the usage of alternate glyphs of smaller size positioned as superscript or subscript regarding the baseline of the font, which is set unchanged.",
                      defaultValue:"normal",
                      isInherited:true,
                      isAnimatable:false
                    },
        fontWeight = {
                      actualName:"font-weight", 
                      definition:"The font-weight CSS property specifies the weight or boldness of the font. Some fonts are only available in normal and bold.",
                      defaultValue:"normal",
                      isInherited:true,
                      isAnimatable:true
                    },
        direction = {
                      actualName:"direction", 
                      definition:"The direction property specifies the text direction/writing direction.",
                      defaultValue:"ltr",
                      isInherited:true,
                      isAnimatable:false
                    },
        textOrientation  = {
                      actualName:"text-orientation", 
                      definition:"The text-orientation CSS property defines the orientation of the text in a line.",
                      defaultValue:"mixed",
                      isInherited:true,
                      isAnimatable:false
                    },
        textCombineUpright = {
                      actualName:"text-combine-upright", 
                      definition:"The text-combine-upright CSS property specifies the combination of multiple characters into the space of a single character.",
                      defaultValue:"none",
                      isInherited:true,
                      isAnimatable:false
                    },
        unicodeBidi = {
                      actualName:"unicode-bidi", 
                      definition:"The unicode-bidi property is used together with the direction property to set or return whether the text should be overridden to support multiple languages in the same document.",
                      defaultValue:"normal",
                      isInherited:true,
                      isAnimatable:false
                    },
        writingMode = {
                      actualName:"writing-mode", 
                      definition:"The writing-mode property defines whether lines of text are laid out horizontally or vertically and the direction in which blocks progress.",
                      defaultValue:"horizontal-tb",
                      isInherited:true,
                      isAnimatable:false
                    },
        borderCollapse = {
                      actualName:"border-collapse", 
                      definition:"The border-collapse property sets whether the table borders are collapsed into a single border or detached as in standard HTML.",
                      defaultValue:"separate",
                      isInherited:true,
                      isAnimatable:false
                    },
        borderSpacing = {
                      actualName:"border-spacing", 
                      definition:"The border-spacing property sets the distance between the borders of adjacent cells (only for the \"separated borders\" model)",
                      defaultValue:"0",
                      isInherited:true,
                      isAnimatable:true
                    },
        captionSide = {
                      actualName:"", 
                      definition:"The caption-side property specifies the placement of a table caption.",
                      defaultValue:"top",
                      isInherited:true,
                      isAnimatable:false
                    },
        emptyCells = {
                      actualName:"empty-cells", 
                      definition:"The empty-cells CSS property specifies how user agents should render borders and backgrounds around cells that have no visible content.",
                      defaultValue:"show",
                      isInherited:true,
                      isAnimatable:false
                    },
        tableLayout = {
                      actualName:"table-layout", 
                      definition:"The table-layout property sets the table layout algorithm to be used for a table.",
                      defaultValue:"auto",
                      isInherited:false,
                      isAnimatable:false
                    },
        counterIncrement = {
                      actualName:"counter-incremen", 
                      definition:"The counter-increment property increments one or more counter values.",
                      defaultValue:"none",
                      isInherited:false,
                      isAnimatable:true
                    },
        counterReset = {
                      actualName:"counter-reset", 
                      definition:"The counter-reset property creates or resets one or more counters.",
                      defaultValue:"",
                      isInherited:false,
                      isAnimatable:false
                    },
        listStyle = {
                      actualName:"list-style", 
                      definition:"The list-style property is a shorthand property for setting list-style-type, list-style-image and list-style-position.",
                      defaultValue:"as each of the properties of the shorthand:\nlist-style-type: disc\nlist-style-position: outside\nlist-style-image: none",
                      isInherited:true,
                      isAnimatable:false
                    },
        listStyleImage = {
                      actualName:"list-style-image", 
                      definition:"The list-style-image property specifies an image to be used as the list item marker.",
                      defaultValue:"none",
                      isInherited:true,
                      isAnimatable:false
                    },
        listStylePosition = {
                      actualName:"list-style-position", 
                      definition:"The list-style-position property specifies the position of the marker box in the principal block box.",
                      defaultValue:"outside",
                      isInherited:true,
                      isAnimatable:false
                    },
        listStyleType = {
                      actualName:"list-style-type", 
                      definition:"The list-style-type property specifies the appearance of a list item element",
                      defaultValue:"disc",
                      isInherited:true,
                      isAnimatable:false
                    },
        keyframes = {
                      actualName:"@keyframes", 
                      definition:"The @keyframes CSS at-rule lets authors control the intermediate steps in a CSS animation sequence by establishing keyframes (or waypoints) along the animation sequence that must be reached by certain points during the animation",
                      defaultValue:null,
                      isInherited:null,
                      isAnimatable:null
                    },
        animation = {
                      actualName:"animation", 
                      definition:"The animation CSS property is a shorthand property for animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode and animation-play-state.",
                      defaultValue:"as each of the properties of the shorthand:\nanimation-name: none\nanimation-duration: 0s\nanimation-timing-function: ease\nanimation-delay: 0s\nanimation-iteration-count: 1\nanimation-direction: normal\nanimation-fill-mode: none\nanimation-play-state: running",
                      isInherited:false,
                      isAnimatable:false
                    },
        animationDelay = {
                      actualName:"animation-delay", 
                      definition:"The animation-delay CSS property specifies when the animation should start.",
                      defaultValue:"0s",
                      isInherited:false,
                      isAnimatable:false
                    },
        animationDirection = {
                      actualName:"animation-direction", 
                      definition:"The animation-direction CSS property indicates whether the animation should play in reverse on alternate cycles.",
                      defaultValue:"normal",
                      isInherited:false,
                      isAnimatable:false
                    },
        animationDuration = {
                      actualName:"animation-duration", 
                      definition:"The animation-duration CSS property specifies the length of time that an animation should take to complete one cycle.",
                      defaultValue:"0s",
                      isInherited:false,
                      isAnimatable:false
                    },
        animationFillMode = {
                      actualName:"animation-fill-mode", 
                      definition:"The animation-fill-mode CSS property specifies how a CSS animation should apply styles to its target before and after it is executing.",
                      defaultValue:"none",
                      isInherited:false,
                      isAnimatable:false
                    },
        animationIterationCount = {
                      actualName:"animation-iteration-count", 
                      definition:"The animation-iteration-count CSS property defines the number of times an animation cycle should be played before stopping.",
                      defaultValue:"1",
                      isInherited:false,
                      isAnimatable:false
                    },
        animationName = {
                      actualName:"animation-name", 
                      definition:"The animation-name CSS property specifies a list of animations that should be applied to the selected element. Each name indicates a @keyframes at-rule that defines the property values for the animation sequence.",
                      defaultValue:"none",
                      isInherited:false,
                      isAnimatable:false
                    },
        animationPlayState = {
                      actualName:"animation-play-state", 
                      definition:"The animation-play-state CSS property determines whether an animation is running or paused.",
                      defaultValue:"running",
                      isInherited:false,
                      isAnimatable:false
                    },
        animationTimingFunction = {
                      actualName:"animation-timing-function", 
                      definition:"The animation-timing-function CSS property specifies how a CSS animation should progress over the duration of each cycle.",
                      defaultValue:"ease",
                      isInherited:false,
                      isAnimatable:false
                    },
        backfaceVisibility = {
                      actualName:"backface-visibility", 
                      definition:"The CSS backface-visibility property determines whether or not the back face of the element is visible when facing the user.",
                      defaultValue:"visible",
                      isInherited:false,
                      isAnimatable:false
                    },
        perspective = {
                      actualName:"perspective", 
                      definition:"The perspective CSS property determines the distance between the z=0 plane and the user in order to give to the 3D-positioned element some perspective.",
                      defaultValue:"none",
                      isInherited:false,
                      isAnimatable:true
                    },
        perspectiveOrigin = {
                      actualName:"perspective-origin", 
                      definition:"The perspective-origin property defines where a 3D element is based in the x- and the y-axis. This property allows you to change the bottom position of 3D elements.",
                      defaultValue:"50% 50%",
                      isInherited:false,
                      isAnimatable:true
                    },
        transform = {
                      actualName:"transform", 
                      definition:"The CSS transform property lets you modify the coordinate space of the CSS visual formatting model. Using it, elements can be translated, rotated, scaled, and skewed.",
                      defaultValue:"none",
                      isInherited:false,
                      isAnimatable:true
                    },
        transformOrigin = {
                      actualName:"transform-origin", 
                      definition:"The transform-origin property lets you modify the origin for transformations of an element.",
                      defaultValue:"50% 50% 0",
                      isInherited:false,
                      isAnimatable:true
                    },
        transformStyle = {
                      actualName:"transform-style", 
                      definition:"The transform-style CSS property determines if the children of the element are positioned in the 3D-space or are flattened in the plane of the element.",
                      defaultValue:"flat",
                      isInherited:false,
                      isAnimatable:false
                    },
        transition = {
                      actualName:"transition", 
                      definition:"The transition CSS property is a shorthand property for transition-property, transition-duration, transition-timing-function, and transition-delay.",
                      defaultValue:"as each of the properties of the shorthand:\ntransition-delay: 0s\n\nansition-duration: 0s\ntransition-property: all\ntransition-timing-function: ease",
                      isInherited:false,
                      isAnimatable:false
                    },
        transitionProperty = {
                      actualName:"transition-property", 
                      definition:"The transition-property CSS property is used to specify the names of CSS properties to which a transition effect should be applied.",
                      defaultValue:"all",
                      isInherited:false,
                      isAnimatable:false
                    },
        transitionDuration = {
                      actualName:"transition-duration", 
                      definition:"The transition-duration CSS property specifies the number of seconds or milliseconds a transition animation should take to complete.",
                      defaultValue:"0s",
                      isInherited:false,
                      isAnimatable:false
                    },
        transitionTimingFunction = {
                      actualName:"transition-timing-function", 
                      definition:"The transition-timing-function CSS property is used to describe how the intermediate values of the CSS properties being affected by a transition effect are calculated",
                      defaultValue:"ease",
                      isInherited:false,
                      isAnimatable:false
                    },
        transitionDelay = {
                      actualName:"transition-delay", 
                      definition:"The transition-delay CSS property specifies the amount of time to wait between a change being requested to a property that is to be transitioned and the start of the transition effect.",
                      defaultValue:"0s",
                      isInherited:false,
                      isAnimatable:false
                    },
        boxSizing = {
                      actualName:"box-sizing", 
                      definition:"The box-sizing property is used to alter the default CSS box model used to calculate widths and heights of elements",
                      defaultValue:"content-box",
                      isInherited:false,
                      isAnimatable:false
                    },
        content = {
                      actualName:"content", 
                      definition:"The content CSS property is used with the ::before and ::after pseudo-elements to generate content in an element",
                      defaultValue:"normal",
                      isInherited:false,
                      isAnimatable:false
                    },
        cursor = {
                      actualName:"cursor", 
                      definition:"The cursor CSS property specifies the mouse cursor displayed when the mouse pointer is over an element.",
                      defaultValue:"auto",
                      isInherited:true,
                      isAnimatable:false
                    },
        imeMode = {
                      actualName:"ime-mode", 
                      definition:"The ime-mode CSS property controls the state of the input method editor for text fields.",
                      defaultValue:"auto",
                      isInherited:false,
                      isAnimatable:false
                    },
        outline = {
                      actualName:"outline", 
                      definition:"The CSS outline property is a shorthand property for setting one or more of the individual outline properties outline-style, outline-width and outline-color in a single declaration. ",
                      defaultValue:"",
                      isInherited:,
                      isAnimatable:
                    },
        outlineColor = {
                      actualName:"outline-color", 
                      definition:"The outline-color CSS property sets the color of the outline of an element.",
                      defaultValue:"invert, for browsers supporting it, currentColor for the other",
                      isInherited:false,
                      isAnimatable:true
                    },
        outlineOffset = {
                      actualName:"outline-offset", 
                      definition:"The outline-offset CSS property is used to set space between an outline and the edge or border of an element.",
                      defaultValue:"0",
                      isInherited:false,
                      isAnimatable:true
                    },
        outlineStyle = {
                      actualName:"outline-style", 
                      definition:"The outline-style CSS property is used to set the style of the outline of an element.",
                      defaultValue:"none",
                      isInherited:false,
                      isAnimatable:false
                    },
        outlineWidth = {
                      actualName:"outline-width", 
                      definition:"The outline-width CSS property is used to set the width of the outline of an element.",
                      defaultValue:"medium",
                      isInherited:false,
                      isAnimatable:true
                    },
        resize = {
                      actualName:"resize", 
                      definition:"The resize property specifies whether or not an element is resizable by the user.",
                      defaultValue:"none",
                      isInherited:false,
                      isAnimatable:false
                    },
        textOverflow = {
                      actualName:"text-overflow", 
                      definition:"The text-overflow property specifies how overflowed content that is not displayed should be signaled to the user.",
                      defaultValue:"clip",
                      isInherited:false,
                      isAnimatable:false
                    },
        breakAfter = {
                      actualName:"break-after", 
                      definition:"The break-after CSS property describes how the page, column or region break behavior after the generated box. If there is no generated box, the property is ignored.",
                      defaultValue:"auto",
                      isInherited:false,
                      isAnimatable:false
                    },
        breakBefore = {
                      actualName:"break-before", 
                      definition:"The break-before CSS property describes how the page, column or region break behavior before the generated box. If there is no generated box, the property is ignored.",
                      defaultValue:"auto",
                      isInherited:false,
                      isAnimatable:false
                    },
        breakInside = {
                      actualName:"break-inside", 
                      definition:"The break-inside CSS property describes how the page, column or region break inside the generated box. If there is no generated box, the property is ignored.",
                      defaultValue:"auto",
                      isInherited:false,
                      isAnimatable:false
                    },
        columnCount = {
                      actualName:"column-count", 
                      definition:"The column-count property specifies the number of columns an element should be divided into.",
                      defaultValue:"auto",
                      isInherited:false,
                      isAnimatable:true
                    },
        columnFill = {
                      actualName:"column-fill", 
                      definition:"The column-fill CSS property controls how contents are partitioned into columns. Contents are either balanced, which means that contents in all columns will have the same height or, when using auto, just take up the room the content needs.",
                      defaultValue:"balance",
                      isInherited:false,
                      isAnimatable:false
                    },
        columnGap = {
                      actualName:"column-gap", 
                      definition:"The column-gap CSS property sets the size of the gap between columns for elements which are specified to be displayed as multi-column elements.",
                      defaultValue:"normal",
                      isInherited:false,
                      isAnimatable:true
                    },
        columnRule = {
                      actualName:"column-rule", 
                      definition:"In multi-column layouts, the column-rule CSS property specifies a straight line, or \"rule\", to be drawn between each column. It is shorthand for: column-rule-width, column-rule-style and column-rule-color.",
                      defaultValue:"as each of the properties of the shorthand:\ncolumn-rule-width: medium\ncolumn-rule-style: none\ncolumn-rule-color: currentColor",
                      isInherited:false,
                      isAnimatable:true
                    },
        columnRuleColor = {
                      actualName:"column-rule-color", 
                      definition:"The column-rule-color CSS property lets you set the color of the \"rule\" or line drawn between columns in multi-column layouts.",
                      defaultValue:"currentColor",
                      isInherited:false,
                      isAnimatable:true
                    },
        columnRuleStyle = {
                      actualName:"column-rule-style", 
                      definition:"The column-rule-style CSS property lets you set the style of the rule drawn between columns in multi-column layouts.",
                      defaultValue:"none",
                      isInherited:false,
                      isAnimatable:false
                    },
        columnRuleWidth = {
                      actualName:"column-rule-width", 
                      definition:"The column-rule-width CSS property lets you set the width of the rule drawn between columns in multi-column layouts.",
                      defaultValue:"medium",
                      isInherited:false,
                      isAnimatable:true
                    },
        columnSpan = {
                      actualName:"column-span", 
                      definition:"The column-span CSS property makes it possible for an element to span across all columns when its value is set to all",
                      defaultValue:"none",
                      isInherited:false,
                      isAnimatable:false
                    },
        columnWidth = {
                      actualName:"column-width", 
                      definition:"The column-width CSS property suggests an optimal column width. This is not a absolute value, but a mere hint to the browser, which will adjust the width of the column around that suggested value, allowing to achieve scalable designs that fit different screen sizes.",
                      defaultValue:"auto",
                      isInherited:false,
                      isAnimatable:true
                    },
        columns = {
                      actualName:"columns", 
                      definition:"The columns CSS property is a shorthand property allowing to set both the column-width and the column-count properties at the same time.",
                      defaultValue:"as each of the properties of the shorthand:\ncolumn-width: auto\ncolumn-count: auto",
                      isInherited:false,
                      isAnimatable:true
                    },
        widows = {
                      actualName:"widows", 
                      definition:"When a paragraph is split over two pages in paged media, the widows CSS property defines the mimimum number of lines that must be left at the top of the second page.",
                      defaultValue:"2",
                      isInherited:true,
                      isAnimatable:false
                    },
        orphans = {
                      actualName:"orphans", 
                      definition:"The orphans CSS property refers to the minimum number of lines in a block container that must be left at the bottom of the page",
                      defaultValue:"2",
                      isInherited:true,
                      isAnimatable:false
                    },
        pageBreakAfter = {
                      actualName:"page-break-after", 
                      definition:"The page-break-after CSS property adjusts page breaks after the current element.",
                      defaultValue:"auto",
                      isInherited:false,
                      isAnimatable:false
                    },
        pageBreakBefore = {
                      actualName:"page-break-before", 
                      definition:"The page-break-before CSS property adjusts page breaks before the current element.",
                      defaultValue:"auto",
                      isInherited:false,
                      isAnimatable:false
                    },
        pageBreakInside = {
                      actualName:"page-break-inside", 
                      definition:"The page-break-inside CSS property adjusts page breaks inside the current element.",
                      defaultValue:"auto",
                      isInherited:false,
                      isAnimatable:false
                    },
        marks = {
                      actualName:"marks", 
                      definition:"The marks CSS at-rule descriptor adds crop and/or cross marks to the presentation of the document. Crop marks indicate where the page should be cut. Cross marks are used to align sheets.",
                      defaultValue:"none",
                      isInherited:null,
                      isAnimatable:null
                    },
        quotes = {
                      actualName:"quotes", 
                      definition:"The quotes CSS property indicates how user agents should render quotation marks.",
                      defaultValue:"user agent specific",
                      isInherited:true,
                      isAnimatable:false
                    },
        filter = {
                      actualName:"filter", 
                      definition:"The filter property provides for effects like blurring or color shifting on an element’s rendering before the element is displayed.",
                      defaultValue:"none",
                      isInherited:false,
                      isAnimatable:true
                    },
        imageOrientation = {
                      actualName:"image-orientation", 
                      definition:"The image-orientation CSS property describes how to correct the default orientation of an image.",
                      defaultValue:"0deg",
                      isInherited:true,
                      isAnimatable:false
                    },
        imageRendering = {
                      actualName:"image-rendering", 
                      definition:"The image-rendering CSS property provides a hint to the browser about the algorithm it should use to scale images. It applies to the element itself as well as any images supplied in other properties for the element. It has no effect on non-scaled images.",
                      defaultValue:"auto",
                      isInherited:true,
                      isAnimatable:false
                    },
        imageResolution = {
                      actualName:"image-resolution", 
                      definition:"The image-resolution property specifies the intrinsic resolution of all raster images used in or on the element.",
                      defaultValue:"normal",
                      isInherited:true,
                      isAnimatable:false
                    },
        objectFit = {
                      actualName:"object-fit", 
                      definition:"The object-fit CSS property specifies how the contents of a replaced element should be fitted to the box established by its used height and width.",
                      defaultValue:"fill",
                      isInherited:true,
                      isAnimatable:false
                    },
        objectPosition = {
                      actualName:"object-position", 
                      definition:"The object-position property determines the alignment of the replaced element inside its box.",
                      defaultValue:"50% 50%",
                      isInherited:true,
                      isAnimatable:true
                    },
        maskType = {
                      actualName:"mask-type", 
                      definition:"The CSS mask-type properties defines if a SVG <mask> element is a luminance or an alpha mask.",
                      defaultValue:"luminance",
                      isInherited:false,
                      isAnimatable:false
                    }
    
    // The following are all part of the CSS speech module, which is very poorly documented. I'm not gonna include them.
//        mark = {
//                      actualName:"mark", 
//                      definition:"The 'mark' property is a shorthand for setting 'mark-before' and 'mark-after'",
//                      defaultValue:"none",
//                      isInherited:false,
//                      isAnimatable:false
//                    },
//        markAfter = {
//                      actualName:"mark-after", 
//                      definition:"The mark properties allow named markers to be attached to the audio stream. ",
//                      defaultValue:"none",
//                      isInherited:false,
//                      isAnimatable:false
//                    },
//        markBefore = {
//                      actualName:"mark-before", 
//                      definition:"The mark properties allow named markers to be attached to the audio stream. ",
//                      defaultValue:"",
//                      isInherited:false,
//                      isAnimatable:false
//                    },
//        phonemes = {
//                      actualName:"", 
//                      definition:"",
//                      defaultValue:"",
//                      isInherited:,
//                      isAnimatable:
//                    },
//        rest = {
//                      actualName:"", 
//                      definition:"",
//                      defaultValue:"",
//                      isInherited:,
//                      isAnimatable:
//                    },
//        restAfter = {
//                      actualName:"", 
//                      definition:"",
//                      defaultValue:"",
//                      isInherited:,
//                      isAnimatable:
//                    },
//        restBefore = {
//                      actualName:"", 
//                      definition:"",
//                      defaultValue:"",
//                      isInherited:,
//                      isAnimatable:
//                    },
//        voiceBalance = {
//                      actualName:"", 
//                      definition:"",
//                      defaultValue:"",
//                      isInherited:,
//                      isAnimatable:
//                    },
//        voiceDuration = {
//                      actualName:"", 
//                      definition:"",
//                      defaultValue:"",
//                      isInherited:,
//                      isAnimatable:
//                    },
//        voicePitch = {
//                      actualName:"", 
//                      definition:"",
//                      defaultValue:"",
//                      isInherited:,
//                      isAnimatable:
//                    },
//        voicePitchRange = {
//                      actualName:"", 
//                      definition:"",
//                      defaultValue:"",
//                      isInherited:,
//                      isAnimatable:
//                    },
//        voiceRate = {
//                      actualName:"", 
//                      definition:"",
//                      defaultValue:"",
//                      isInherited:,
//                      isAnimatable:
//                    },
//        voiceStress = {
//                      actualName:"", 
//                      definition:"",
//                      defaultValue:"",
//                      isInherited:,
//                      isAnimatable:
//                    },
//        voiceVolume = {
//                      actualName:"", 
//                      definition:"",
//                      defaultValue:"",
//                      isInherited:,
//                      isAnimatable:
//                    },
//        marqueeDirection = {
//                      actualName:"", 
//                      definition:"",
//                      defaultValue:"",
//                      isInherited:,
//                      isAnimatable:
//                    },
//        marqueePlayCount = {
//                      actualName:"", 
//                      definition:"",
//                      defaultValue:"",
//                      isInherited:,
//                      isAnimatable:
//                    },
//        marqueeSpeed = {
//                      actualName:"", 
//                      definition:"",
//                      defaultValue:"",
//                      isInherited:,
//                      isAnimatable:
//                    },
//        marqueeStyle = {
//                      actualName:"", 
//                      definition:"",
//                      defaultValue:"",
//                      isInherited:,
//                      isAnimatable:
//                    };
    
    // Please follow the above guidelines when adding definitions--the attribute names and their types 
    // (i.e. isInherited is boolean, not a string) 
    
    var CSSAttributeObjects = {};
    
    CSSAttributeObjects.push( 
        fontKerning,
        fontLanguageOverride,
        fontSize 
        fontSizeAdjust,
        fontStretch,
        fontStyle,
        fontSynthesis,
        fontVariant,
        fontVariantAlternates,
        fontVariantCaps,
        fontVariantEastAsian,
        fontVariantLigatures,
        fontVariantNumeric,
        fontVariantPosition,
        direction,
        textOrientation, 
        textCombineUpright,
        unicodeBidi,
        writingMode,
        borderCollapse,
        borderSpacing,
        captionSide,
        emptyCells,
        tableLayout,
        counterIncrement,
        counterReset,
        listStyle,
        listStyleImage,
        listStylePosition,
        listStyleType,
        keyframes,
        animation,
        animationDelay,
        animationDirection,
        animationDuration,
        animationFillMode,
        animationIterationCount,
        animationName,
        animationPlayState,
        animationTimingFunction,
        backfaceVisibility,
        perspective,
        perspectiveOrigin,
        transform,
        transformOrigin,
        transformStyle,
        transition,
        transitionProperty,
        transitionDuration,
        transitionTimingFunction,
        transitionDelay,
        boxSizing,
        content,
        cursor,
        imeMode,
        navDown,
        navIndex,
        navLeft,
        navRight,
        navUp,
        outline,
        outlineColor,
        outlineOffset,
        outlineStyle,
        outlineWidth,
        resize,
        textOverflow,
        breakAfter,
        breakBefore,
        breakInside,
        columnCount,
        columnFill,
        columnGap,
        columnRule,
        columnRuleColor,
        columnRuleStyle,
        columnRuleWidth,
        columnSpan,
        columnWidth,
        columns,
        widows,
        orphans,
        pageBreakAfter,
        pageBreakBefore,
        pageBreakInside,
        marks,
        quotes,
        filter,
        imageOrientation,
        imageRendering,
        imageResolution,
        objectFit,
        objectPosition,
        mask,
        maskType
        );
    // now, you can do CSSAttributeObjects.push(backgroundColor)
    // push all keyword objects into CSSAttributeObjects array
});