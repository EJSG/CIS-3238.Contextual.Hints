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
    
    var CSSAttributeObjects = {};
    
    var fontKerning = {
                      actualName:"font-kerning", 
                      definition:"The font-kerning CSS property controls the usage of the kerning information; that is, it controls how letters are spaced.",
                      defaultValue:"auto",
                      isInherited:true,
                      isAnimatable:false,
                      usageExample:"p {font-kerning: none;}"
                    },
        fontLanguageOverride = {
                      actualName:"font-language-override", 
                      definition:"The font-language-override CSS property controls the usage of language-specific glyphs in a typeface.",
                      defaultValue:"normal",
                      isInherited:true,
                      isAnimatable:false,
                      usageExample:"p {font-language-override: none;}"
                    },
        fontSize = {
                      actualName:"font-size", 
                      definition:"The font-size property sets the size of a font.",
                      defaultValue:"medium",
                      isInherited:true,
                      isAnimatable:true,
                      usageExample:"h1 {font-size:30px;}"
                    },
        fontSizeAdjust = {
                      actualName:"font-size-adjust", 
                      definition:"The font-size-adjust CSS property specifies that font size should be chosen based on the height of lowercase letters rather than the height of capital letters.",
                      defaultValue:"none",
                      isInherited:true,
                      isAnimatable:true,
                      usageExample:"font-size-adjust: 0.5;"
                    },
        fontStretch = {
                      actualName:"font-stretch", 
                      definition:"The font-stretch property selects a normal, condensed, or expanded face from a font.",
                      defaultValue:"normal",
                      isInherited:true,
                      isAnimatable:true,
                      usageExample:"h1 {font-stretch: extra-expanded;}"
                    },
        fontStyle = {
                      actualName:"font-style", 
                      definition:"The font-style property specifies the font style for a text.",
                      defaultValue:"normal",
                      isInherited:true,
                      isAnimatable:false,
                      usageExample:"p.normal {font-style:normal;}"
                    },
        fontSynthesis = {
                      actualName:"font-synthesis", 
                      definition:"The font-synthesis CSS property controls which missing typefaces, bold or italic, may be synthesized by the browser.",
                      defaultValue:"weight style",
                      isInherited:true,
                      isAnimatable:false,
                      usageExample:"p {font-synthesis: none;}"
                    },
        fontVariant = {
                      actualName:"font-variant", 
                      definition:"The font-variant property acts as a shorthand for the longhand properties: font-variant-caps, font-variant-numeric, font-variant-alternates, font-variant-ligatures, and font-variant-east-asian.",
                      defaultValue:"normal",
                      isInherited:true,
                      isAnimatable:false,
                      usageExample:"p {font-variant: small-caps;}"
                    },
        fontVariantAlternates = {
                      actualName:"font-variant-alternates", 
                      definition:"The font-variant-alternates CSS property controls the usage of alternate glyphs associated to alternative names defined in @font-feature-values",
                      defaultValue:"normal",
                      isInherited:true,
                      isAnimatable:false,
                      usageExample:"p {font-family: Example Script;  font-variant-alternates: swash(another_ident); /* use swash alternate #2 */}"
                    },
        fontVariantCaps = {
                      actualName:"font-variant-caps", 
                      definition:"The font-variant-caps CSS property controls the usage of alternate glyphs for capital letters.",
                      defaultValue:"normal",
                      isInherited:true,
                      isAnimatable:false,
                      usageExample:"p {font-variant-caps: small-caps;}"
                    },
        fontVariantEastAsian = {
                      actualName:"font-variant-east-asian", 
                      definition:"The font-variant-east-asian CSS property controls the usage of alternate glyphs for East Asian scripts, like Japanese and Chinese.",
                      defaultValue:"normal",
                      isInherited:true,
                      isAnimatable:false,
                      usageExample:"p {font-variant-east-asian: ruby;}"
                    },
        fontVariantLigatures = {
                      actualName:"font-variant-ligatures", 
                      definition:"The font-variant-ligatures CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.",
                      defaultValue:"normal",
                      isInherited:true,
                      isAnimatable:false,
                      usageExample:"p {font-variant-ligatures: none;}"
                    },
        fontVariantNumeric = {
                      actualName:"font-variant-numeric", 
                      definition:"The font-variant-numeric CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers.",
                      defaultValue:"normal",
                      isInherited:true,
                      isAnimatable:false,
                      usageExample:"p {font-variant-numeric: ordinal;}"
                    },
        fontVariantPosition = {
                      actualName:"font-variant-position", 
                      definition:"The font-variant-position CSS property controls the usage of alternate glyphs of smaller size positioned as superscript or subscript regarding the baseline of the font, which is set unchanged.",
                      defaultValue:"normal",
                      isInherited:true,
                      isAnimatable:false,
                      usageExample:"p {font-variant-position: super;}"
                    },
        fontWeight = {
                      actualName:"font-weight", 
                      definition:"The font-weight CSS property specifies the weight or boldness of the font. Some fonts are only available in normal and bold.",
                      defaultValue:"normal",
                      isInherited:true,
                      isAnimatable:true,
                      usageExample:"p.normal {font-weight:normal;}"
                    },
        direction = {
                      actualName:"direction", 
                      definition:"The direction property specifies the text direction/writing direction.",
                      defaultValue:"ltr",
                      isInherited:true,
                      isAnimatable:false,
                      usageExample:"blockquote {direction: rtl;}"
                    },
        textOrientation  = {
                      actualName:"text-orientation", 
                      definition:"The text-orientation CSS property defines the orientation of the text in a line.",
                      defaultValue:"mixed",
                      isInherited:true,
                      isAnimatable:false,
                      usageExample:".myText {writing-mode: vertical-rl;  text-orientation: sideways-right;}"
                    },
        textCombineUpright = {
                      actualName:"text-combine-upright", 
                      definition:"The text-combine-upright CSS property specifies the combination of multiple characters into the space of a single character.",
                      defaultValue:"none",
                      isInherited:true,
                      isAnimatable:false,
                      usageExample:".exampleText {writing-mode: vertical-lr; text-combine-upright: digits 2;}"
                    },
        unicodeBidi = {
                      actualName:"unicode-bidi", 
                      definition:"The unicode-bidi property is used together with the direction property to set or return whether the text should be overridden to support multiple languages in the same document.",
                      defaultValue:"normal",
                      isInherited:true,
                      isAnimatable:false,
                      usageExample:".bible-quote {direction: rtl; unicode-bidi: embed;}"
                    },
        writingMode = {
                      actualName:"writing-mode", 
                      definition:"The writing-mode property defines whether lines of text are laid out horizontally or vertically and the direction in which blocks progress.",
                      defaultValue:"horizontal-tb",
                      isInherited:true,
                      isAnimatable:false,
                      usageExample:"writing-mode: horizontal-tb;"
                    },
        borderCollapse = {
                      actualName:"border-collapse", 
                      definition:"The border-collapse property sets whether the table borders are collapsed into a single border or detached as in standard HTML.",
                      defaultValue:"separate",
                      isInherited:true,
                      isAnimatable:false,
                      usageExample:".collapse {border-collapse: collapse;}"
                    },
        borderSpacing = {
                      actualName:"border-spacing", 
                      definition:"The border-spacing property sets the distance between the borders of adjacent cells (only for the \"separated borders\" model)",
                      defaultValue:"0",
                      isInherited:true,
                      isAnimatable:true,
                      usageExample:"table { border-spacing: 10px 5px;}"
                    },
        captionSide = {
                      actualName:"", 
                      definition:"The caption-side property specifies the placement of a table caption.",
                      defaultValue:"top",
                      isInherited:true,
                      isAnimatable:false,
                      usageExample:".contentbox table-caption {caption-side: bottom;}"
                    },
        emptyCells = {
                      actualName:"empty-cells", 
                      definition:"The empty-cells CSS property specifies how user agents should render borders and backgrounds around cells that have no visible content.",
                      defaultValue:"show",
                      isInherited:true,
                      isAnimatable:false,
                      usageExample:".contentbox td {empty-cells: show;}"
                    },
        tableLayout = {
                      actualName:"table-layout", 
                      definition:"The table-layout property sets the table layout algorithm to be used for a table.",
                      defaultValue:"auto",
                      isInherited:false,
                      isAnimatable:false,
                      usageExample:".contentbox {table-layout: fixed;}"
                    },
        counterIncrement = {
                      actualName:"counter-increment", 
                      definition:"The counter-increment property increments one or more counter values.",
                      defaultValue:"none",
                      isInherited:false,
                      isAnimatable:true,
                      usageExample:"h1 {counter-increment: chapter section 2 page;  /* Increases the value of the chapter and page counters by 1 and the section counter by 2. */}"
                    },
        counterReset = {
                      actualName:"counter-reset", 
                      definition:"The counter-reset property creates or resets one or more counters.",
                      defaultValue:"",
                      isInherited:false,
                      isAnimatable:false,
                      usageExample:"h1 {counter-reset: chapter section 1 page;  /* Sets the chapter and page counters to 0 and the section counter to 1. */}"
                    },
        listStyle = {
                      actualName:"list-style", 
                      definition:"The list-style property is a shorthand property for setting list-style-type, list-style-image and list-style-position.",
                      defaultValue:"as each of the properties of the shorthand:\nlist-style-type: disc\nlist-style-position: outside\nlist-style-image: none",
                      isInherited:true,
                      isAnimatable:false,
                      usageExample:".one { list-style: circle; }"
                    },
        listStyleImage = {
                      actualName:"list-style-image", 
                      definition:"The list-style-image property specifies an image to be used as the list item marker.",
                      defaultValue:"none",
                      isInherited:true,
                      isAnimatable:false,
                      usageExample:"ul { list-style-image: url(\"https://developer.mozilla.org/samples/cssref/list-style/starsolid.gif\") }"
                    },
        listStylePosition = {
                      actualName:"list-style-position", 
                      definition:"The list-style-position property specifies the position of the marker box in the principal block box.",
                      defaultValue:"outside",
                      isInherited:true,
                      isAnimatable:false,
                      usageExample:".one {list-style:url(starsolid.gif) inside;}"
                    },
        listStyleType = {
                      actualName:"list-style-type", 
                      definition:"The list-style-type property specifies the appearance of a list item element",
                      defaultValue:"disc",
                      isInherited:true,
                      isAnimatable:false,
                      usageExample:"ol { list-style-type: upper-alpha; }"
                    },
        keyframes = {
                      actualName:"@keyframes", 
                      definition:"The @keyframes CSS at-rule lets authors control the intermediate steps in a CSS animation sequence by establishing keyframes (or waypoints) along the animation sequence that must be reached by certain points during the animation",
                      defaultValue:null,
                      isInherited:null,
                      isAnimatable:null,
                      usageExample:"@keyframes identifier {  0% { top: 0; left: 0; }  30% { top: 50px; }  68%, 72% { left: 50px; }  100% { top: 100px; left: 100%; }}"
                    },
        animation = {
                      actualName:"animation", 
                      definition:"The animation CSS property is a shorthand property for animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode and animation-play-state.",
                      defaultValue:"as each of the properties of the shorthand:\nanimation-name: none\nanimation-duration: 0s\nanimation-timing-function: ease\nanimation-delay: 0s\nanimation-iteration-count: 1\nanimation-direction: normal\nanimation-fill-mode: none\nanimation-play-state: running",
                      isInherited:false,
                      isAnimatable:false,
                      usageExample:"/* @keyframes duration | name */  animation: 3s slidein;"
                    },
        animationDelay = {
                      actualName:"animation-delay", 
                      definition:"The animation-delay CSS property specifies when the animation should start.",
                      defaultValue:"0s",
                      isInherited:false,
                      isAnimatable:false,
                      usageExample:"animation-delay: 3s;"
                    },
        animationDirection = {
                      actualName:"animation-direction", 
                      definition:"The animation-direction CSS property indicates whether the animation should play in reverse on alternate cycles.",
                      defaultValue:"normal",
                      isInherited:false,
                      isAnimatable:false,
                      usageExample:"/* Multiple animations */ animation-direction: normal, reverse;"
                    },
        animationDuration = {
                      actualName:"animation-duration", 
                      definition:"The animation-duration CSS property specifies the length of time that an animation should take to complete one cycle.",
                      defaultValue:"0s",
                      isInherited:false,
                      isAnimatable:false,
                      usageExample:"animation-duration: 6s;"
                    },
        animationFillMode = {
                      actualName:"animation-fill-mode", 
                      definition:"The animation-fill-mode CSS property specifies how a CSS animation should apply styles to its target before and after it is executing.",
                      defaultValue:"none",
                      isInherited:false,
                      isAnimatable:false,
                      usageExample:"/* Several values may be given, separated by commas. */ /* Each applies for each animation in animation-name. */ animation-fill-mode: none, backwards;"
                    },
        animationIterationCount = {
                      actualName:"animation-iteration-count", 
                      definition:"The animation-iteration-count CSS property defines the number of times an animation cycle should be played before stopping.",
                      defaultValue:"1",
                      isInherited:false,
                      isAnimatable:false,
                      usageExample:"animation-iteration-count: 2, 0, infinite;"
                    },
        animationName = {
                      actualName:"animation-name", 
                      definition:"The animation-name CSS property specifies a list of animations that should be applied to the selected element. Each name indicates a @keyframes at-rule that defines the property values for the animation sequence.",
                      defaultValue:"none",
                      isInherited:false,
                      isAnimatable:false,
                      usageExample:"animation-name: sliding-vertically;"
                    },
        animationPlayState = {
                      actualName:"animation-play-state", 
                      definition:"The animation-play-state CSS property determines whether an animation is running or paused.",
                      defaultValue:"running",
                      isInherited:false,
                      isAnimatable:false,
                      usageExample:"/* Multiple animations */ animation-play-state: paused, running, running;"
                    },
        animationTimingFunction = {
                      actualName:"animation-timing-function", 
                      definition:"The animation-timing-function CSS property specifies how a CSS animation should progress over the duration of each cycle.",
                      defaultValue:"ease",
                      isInherited:false,
                      isAnimatable:false,
                      usageExample:"animation-timing-function: steps(4, end);"
                    },
        backfaceVisibility = {
                      actualName:"backface-visibility", 
                      definition:"The CSS backface-visibility property determines whether or not the back face of the element is visible when facing the user.",
                      defaultValue:"visible",
                      isInherited:false,
                      isAnimatable:false,
                      usageExample:".hidebf div {  backface-visibility: hidden;  -webkit-backface-visibility: hidden;}"
                    },
        perspective = {
                      actualName:"perspective", 
                      definition:"The perspective CSS property determines the distance between the z=0 plane and the user in order to give to the 3D-positioned element some perspective.",
                      defaultValue:"none",
                      isInherited:false,
                      isAnimatable:true,
                      usageExample:".pers250 {    perspective: 250px;     -webkit-perspective: 250px;}"
                    },
        perspectiveOrigin = {
                      actualName:"perspective-origin", 
                      definition:"The perspective-origin property defines where a 3D element is based in the x- and the y-axis. This property allows you to change the bottom position of 3D elements.",
                      defaultValue:"50% 50%",
                      isInherited:false,
                      isAnimatable:true,
                      usageExample:".potl {    perspective-origin: top left;    -webkit-perspective-origin: top left;}"
                    },
        transform = {
                      actualName:"transform", 
                      definition:"The CSS transform property lets you modify the coordinate space of the CSS visual formatting model. Using it, elements can be translated, rotated, scaled, and skewed.",
                      defaultValue:"none",
                      isInherited:false,
                      isAnimatable:true,
                      usageExample:"transform: translate(12px, 50%);"
                    },
        transformOrigin = {
                      actualName:"transform-origin", 
                      definition:"The transform-origin property lets you modify the origin for transformations of an element.",
                      defaultValue:"50% 50% 0",
                      isInherited:false,
                      isAnimatable:true,
                      usageExample:"transform-origin: 2px;"
                    },
        transformStyle = {
                      actualName:"transform-style", 
                      definition:"The transform-style CSS property determines if the children of the element are positioned in the 3D-space or are flattened in the plane of the element.",
                      defaultValue:"flat",
                      isInherited:false,
                      isAnimatable:false,
                      usageExample:"transform-style: preserve-3d;"
                    },
        transition = {
                      actualName:"transition", 
                      definition:"The transition CSS property is a shorthand property for transition-property, transition-duration, transition-timing-function, and transition-delay.",
                      defaultValue:"as each of the properties of the shorthand:\ntransition-delay: 0s\n\nansition-duration: 0s\ntransition-property: all\ntransition-timing-function: ease",
                      isInherited:false,
                      isAnimatable:false,
                      usageExample:"transition: margin-left 4s, color 1s;"
                    },
        transitionProperty = {
                      actualName:"transition-property", 
                      definition:"The transition-property CSS property is used to specify the names of CSS properties to which a transition effect should be applied.",
                      defaultValue:"all",
                      isInherited:false,
                      isAnimatable:false,
                      usageExample:"transition-property: -specific;"
                    },
        transitionDuration = {
                      actualName:"transition-duration", 
                      definition:"The transition-duration CSS property specifies the number of seconds or milliseconds a transition animation should take to complete.",
                      defaultValue:"0s",
                      isInherited:false,
                      isAnimatable:false,
                      usageExample:"transition-duration: 6s;"
                    },
        transitionTimingFunction = {
                      actualName:"transition-timing-function", 
                      definition:"The transition-timing-function CSS property is used to describe how the intermediate values of the CSS properties being affected by a transition effect are calculated",
                      defaultValue:"ease",
                      isInherited:false,
                      isAnimatable:false,
                      usageExample:"transition-timing-function: ease-in;"
                    },
        transitionDelay = {
                      actualName:"transition-delay", 
                      definition:"The transition-delay CSS property specifies the amount of time to wait between a change being requested to a property that is to be transitioned and the start of the transition effect.",
                      defaultValue:"0s",
                      isInherited:false,
                      isAnimatable:false,
                      usageExample:"transition-delay: 2s, 4ms;"
                    },
        boxSizing = {
                      actualName:"box-sizing", 
                      definition:"The box-sizing property is used to alter the default CSS box model used to calculate widths and heights of elements",
                      defaultValue:"content-box",
                      isInherited:false,
                      isAnimatable:false,
                      usageExample:"box-sizing: border-box;"
                    },
        content = {
                      actualName:"content", 
                      definition:"The content CSS property is used with the ::before and ::after pseudo-elements to generate content in an element",
                      defaultValue:"normal",
                      isInherited:false,
                      isAnimatable:false,
                      usageExample:"content: normal;"
                    },
        cursor = {
                      actualName:"cursor", 
                      definition:"The cursor CSS property specifies the mouse cursor displayed when the mouse pointer is over an element.",
                      defaultValue:"auto",
                      isInherited:true,
                      isAnimatable:false,
                      usageExample:".foo {  cursor: crosshair; }"
                    },
        imeMode = {
                      actualName:"ime-mode", 
                      definition:"The ime-mode CSS property controls the state of the input method editor for text fields.",
                      defaultValue:"auto",
                      isInherited:false,
                      isAnimatable:false,
                      usageExample:"<input type=\"text\" name=\"name\" value=\"initial value\" style=\"ime-mode: disabled\">"
                    },
        outline = {
                      actualName:"outline", 
                      definition:"The CSS outline property is a shorthand property for setting one or more of the individual outline properties outline-style, outline-width and outline-color in a single declaration. ",
                      defaultValue:"",
                      isInherited:,
                      isAnimatable:,
                      usageExample:":link:hover { outline: 1px solid #000; }"
                    },
        outlineColor = {
                      actualName:"outline-color", 
                      definition:"The outline-color CSS property sets the color of the outline of an element.",
                      defaultValue:"invert, for browsers supporting it, currentColor for the other",
                      isInherited:false,
                      isAnimatable:true,
                      usageExample:".example {  /* first need to set "outline" */  outline: 2px solid;  /* make the outline blue */  outline-color: #0000FF; }"
                    },
        outlineOffset = {
                      actualName:"outline-offset", 
                      definition:"The outline-offset CSS property is used to set space between an outline and the edge or border of an element.",
                      defaultValue:"0",
                      isInherited:false,
                      isAnimatable:true,
                      usageExample:"p {  outline: dashed thin;  /* Move the outline 10px away from the border */  outline-offset: 10px;   border:1px solid black; }"
                    },
        outlineStyle = {
                      actualName:"outline-style", 
                      definition:"The outline-style CSS property is used to set the style of the outline of an element.",
                      defaultValue:"none",
                      isInherited:false,
                      isAnimatable:false,
                      usageExample:".example {  /* make the outline a 3D groove style */   outline-style: groove;        /* same result as \"outline: groove\" */ }"
                    },
        outlineWidth = {
                      actualName:"outline-width", 
                      definition:"The outline-width CSS property is used to set the width of the outline of an element.",
                      defaultValue:"medium",
                      isInherited:false,
                      isAnimatable:true,
                      usageExample:"#thin {  outline-width: thin; }"
                    },
        resize = {
                      actualName:"resize", 
                      definition:"The resize property specifies whether or not an element is resizable by the user.",
                      defaultValue:"none",
                      isInherited:false,
                      isAnimatable:false,
                      usageExample:"textarea.example {  resize: none; /* disables resizability */ }"
                    },
        textOverflow = {
                      actualName:"text-overflow", 
                      definition:"The text-overflow property specifies how overflowed content that is not displayed should be signaled to the user.",
                      defaultValue:"clip",
                      isInherited:false,
                      isAnimatable:false,
                      usageExample:"p {  white-space: nowrap;  width: 100%; overflow: hidden; /* \"overflow\" value must be different from \"visible\" */ text-overflow: ellipsis; }"
                    },
        breakAfter = {
                      actualName:"break-after", 
                      definition:"The break-after CSS property describes how the page, column or region break behavior after the generated box. If there is no generated box, the property is ignored.",
                      defaultValue:"auto",
                      isInherited:false,
                      isAnimatable:false,
                      usageExample:"break-after: always;"
                    },
        breakBefore = {
                      actualName:"break-before", 
                      definition:"The break-before CSS property describes how the page, column or region break behavior before the generated box. If there is no generated box, the property is ignored.",
                      defaultValue:"auto",
                      isInherited:false,
                      isAnimatable:false,
                      usageExample:"break-before: left;"
                    },
        breakInside = {
                      actualName:"break-inside", 
                      definition:"The break-inside CSS property describes how the page, column or region break inside the generated box. If there is no generated box, the property is ignored.",
                      defaultValue:"auto",
                      isInherited:false,
                      isAnimatable:false,
                      usageExample:"break-inside: avoid;"
                    },
        columnCount = {
                      actualName:"column-count", 
                      definition:"The column-count property specifies the number of columns an element should be divided into.",
                      defaultValue:"auto",
                      isInherited:false,
                      isAnimatable:true,
                      usageExample:".content-box {  border: 10px solid #000000;  column-count: 3; }"
                    },
        columnFill = {
                      actualName:"column-fill", 
                      definition:"The column-fill CSS property controls how contents are partitioned into columns. Contents are either balanced, which means that contents in all columns will have the same height or, when using auto, just take up the room the content needs.",
                      defaultValue:"balance",
                      isInherited:false,
                      isAnimatable:false,
                      usageExample:".content-box {  column-count: 4;   column-rule: 1px solid black;  column-fill: balance;  height: 200px; }"
                    },
        columnGap = {
                      actualName:"column-gap", 
                      definition:"The column-gap CSS property sets the size of the gap between columns for elements which are specified to be displayed as multi-column elements.",
                      defaultValue:"normal",
                      isInherited:false,
                      isAnimatable:true,
                      usageExample:".content-box {  border: 10px solid #000000;  column-count: 3;  column-gap: 20px; }"
                    },
        columnRule = {
                      actualName:"column-rule", 
                      definition:"In multi-column layouts, the column-rule CSS property specifies a straight line, or \"rule\", to be drawn between each column. It is shorthand for: column-rule-width, column-rule-style and column-rule-color.",
                      defaultValue:"as each of the properties of the shorthand:\ncolumn-rule-width: medium\ncolumn-rule-style: none\ncolumn-rule-color: currentColor",
                      isInherited:false,
                      isAnimatable:true,
                      usageExample:"p.foo { column-rule: dotted; }"
                    },
        columnRuleColor = {
                      actualName:"column-rule-color", 
                      definition:"The column-rule-color CSS property lets you set the color of the \"rule\" or line drawn between columns in multi-column layouts.",
                      defaultValue:"currentColor",
                      isInherited:false,
                      isAnimatable:true,
                      usageExample:"#header {  column-rule-color: blue; }"
                    },
        columnRuleStyle = {
                      actualName:"column-rule-style", 
                      definition:"The column-rule-style CSS property lets you set the style of the rule drawn between columns in multi-column layouts.",
                      defaultValue:"none",
                      isInherited:false,
                      isAnimatable:false,
                      usageExample:"#header {  -moz-column-count: 3;   -moz-column-gap: 40px;  -moz-column-rule-style: solid; }"
                    },
        columnRuleWidth = {
                      actualName:"column-rule-width", 
                      definition:"The column-rule-width CSS property lets you set the width of the rule drawn between columns in multi-column layouts.",
                      defaultValue:"medium",
                      isInherited:false,
                      isAnimatable:true,
                      usageExample:"#header {  column-rule-width: thick; }"
                    },
        columnSpan = {
                      actualName:"column-span", 
                      definition:"The column-span CSS property makes it possible for an element to span across all columns when its value is set to all",
                      defaultValue:"none",
                      isInherited:false,
                      isAnimatable:false,
                      usageExample:"h1, h2 {  column-span: all; }"
                    },
        columnWidth = {
                      actualName:"column-width", 
                      definition:"The column-width CSS property suggests an optimal column width. This is not a absolute value, but a mere hint to the browser, which will adjust the width of the column around that suggested value, allowing to achieve scalable designs that fit different screen sizes.",
                      defaultValue:"auto",
                      isInherited:false,
                      isAnimatable:true,
                      usageExample:".content-box {  border: 10px solid #0ff;  /* Chrome, Safari, Opera prefix */  -webkit-column-width: 100px;   /* Mozilla Firefox prefix */  -moz-column-width: 100px;  column-width: 100px; }"
                    },
        columns = {
                      actualName:"columns", 
                      definition:"The columns CSS property is a shorthand property allowing to set both the column-width and the column-count properties at the same time.",
                      defaultValue:"as each of the properties of the shorthand:\ncolumn-width: auto\ncolumn-count: auto",
                      isInherited:false,
                      isAnimatable:true,
                      usageExample:".content-box {  border: 10px solid #000000;  columns:3; }"
                    },
        widows = {
                      actualName:"widows", 
                      definition:"When a paragraph is split over two pages in paged media, the widows CSS property defines the mimimum number of lines that must be left at the top of the second page.",
                      defaultValue:"2",
                      isInherited:true,
                      isAnimatable:false,
                      usageExample:"p {  widows: 3; }"
                    },
        orphans = {
                      actualName:"orphans", 
                      definition:"The orphans CSS property refers to the minimum number of lines in a block container that must be left at the bottom of the page",
                      defaultValue:"2",
                      isInherited:true,
                      isAnimatable:false,
                      usageExample:"orphans: 3;"
                    },
        pageBreakAfter = {
                      actualName:"page-break-after", 
                      definition:"The page-break-after CSS property adjusts page breaks after the current element.",
                      defaultValue:"auto",
                      isInherited:false,
                      isAnimatable:false,
                      usageExample:"div.footnotes {   page-break-after:always; }"
                    },
        pageBreakBefore = {
                      actualName:"page-break-before", 
                      definition:"The page-break-before CSS property adjusts page breaks before the current element.",
                      defaultValue:"auto",
                      isInherited:false,
                      isAnimatable:false,
                      usageExample:"div.note { page-break-before: avoid; }"
                    },
        pageBreakInside = {
                      actualName:"page-break-inside", 
                      definition:"The page-break-inside CSS property adjusts page breaks inside the current element.",
                      defaultValue:"auto",
                      isInherited:false,
                      isAnimatable:false,
                      usageExample:"p { page-break-inside: avoid;  }"
                    },
        marks = {
                      actualName:"marks", 
                      definition:"The marks CSS at-rule descriptor adds crop and/or cross marks to the presentation of the document. Crop marks indicate where the page should be cut. Cross marks are used to align sheets.",
                      defaultValue:"none",
                      isInherited:null,
                      isAnimatable:null,
                      usageExample:"@page {  marks: crop cross; }"
                    },
        quotes = {
                      actualName:"quotes", 
                      definition:"The quotes CSS property indicates how user agents should render quotation marks.",
                      defaultValue:"user agent specific",
                      isInherited:true,
                      isAnimatable:false,
                      usageExample:"q:before { content: open-quote }"
                    },
        filter = {
                      actualName:"filter", 
                      definition:"The filter property provides for effects like blurring or color shifting on an element’s rendering before the element is displayed.",
                      defaultValue:"none",
                      isInherited:false,
                      isAnimatable:true,
                      usageExample:".mydiv { filter: grayscale(50%) }"
                    },
        imageOrientation = {
                      actualName:"image-orientation", 
                      definition:"The image-orientation CSS property describes how to correct the default orientation of an image.",
                      defaultValue:"0deg",
                      isInherited:true,
                      isAnimatable:false,
                      usageExample:"image-orientation: 6.4deg;"
                    },
        imageRendering = {
                      actualName:"image-rendering", 
                      definition:"The image-rendering CSS property provides a hint to the browser about the algorithm it should use to scale images. It applies to the element itself as well as any images supplied in other properties for the element. It has no effect on non-scaled images.",
                      defaultValue:"auto",
                      isInherited:true,
                      isAnimatable:false,
                      usageExample:"image-rendering: pixelated;"
                    },
        imageResolution = {
                      actualName:"image-resolution", 
                      definition:"The image-resolution property specifies the intrinsic resolution of all raster images used in or on the element.",
                      defaultValue:"normal",
                      isInherited:true,
                      isAnimatable:false,
                      usageExample:"image-resolution: [value];"
                    },
        objectFit = {
                      actualName:"object-fit", 
                      definition:"The object-fit CSS property specifies how the contents of a replaced element should be fitted to the box established by its used height and width.",
                      defaultValue:"fill",
                      isInherited:true,
                      isAnimatable:false,
                      usageExample:".fill {  object-fit: fill; }"
                    },
        objectPosition = {
                      actualName:"object-position", 
                      definition:"The object-position property determines the alignment of the replaced element inside its box.",
                      defaultValue:"50% 50%",
                      isInherited:true,
                      isAnimatable:true,
                      usageExample:"#object-position-1 {  object-position: 10px; }"
                    },
        maskType = {
                      actualName:"mask-type", 
                      definition:"The CSS mask-type properties defines if a SVG <mask> element is a luminance or an alpha mask.",
                      defaultValue:"luminance",
                      isInherited:false,
                      isAnimatable:false,
                      usageExample:"mask-type: luminance;"
                    };
    var color = {
                    actualName:"color",
                    definition:"Sets the color of text",
                    defaultValue:"not specified",
                    isInherited:true,
                    isAnimatable:true,
                    usageExample:"element { color: red; }"
                };
    var opacity = {
                    actualName:"opacity",
                    definition:"Sets the opacity level for an element",
                    defaultValue:"1",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:".light {  opacity: 0.2; /* Barely see the text over the background */ }"
            };
    var background = {
                    actualName:"background",
                    definition:"A shorthand property for setting all the background properties in one declaration",
                    defaultValue:"see individual properties",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"background: green;"
            };
    var backgroundAttachment = {
                    actualName:"background-attachment",
                    definition:"Sets whether a background image is fixed or scrolls with the rest of the page",
                    defaultValue:"scroll",
                    isInherited:false,
                    isAnimatable:false,
                    usageExample:"body {  background-image: url(\"images/cartooncat.png\");  background-attachment: fixed; }"
            };
    var backgroundBlendMode = {
                    actualName:"background-blend-mode",
                    definition:"Specifies the blending mode of each background layer (color/image)",
                    defaultValue:"normal",
                    isInherited:false,
                    isAnimatable:false,
                    usageExample:"background-blend-mode: darken, luminosity;"
            };
    var backgroundColor = {
                    actualName:"background-color",
                    definition:"Specifies the background color of an element",
                    defaultValue:"transparent",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:".exampleOne {  background-color: teal;  color: white; }"
            };
    var backgroundImage = {
                    actualName:"background-image",
                    definition:"Specifies one or more background images for an element",
                    defaultValue:"none",
                    isInherited:false,
                    isAnimatable:false,
                    usageExample:"background-image: none;"
            };
    var backgroundPosition = {
                    actualName:"background-position",
                    definition:"Specifies the position of a background image",
                    defaultValue:"0% 0%",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"background-position: bottom;"
            };
    var backgroundRepeat = {
                    actualName:"background-repeat",
                    definition:"Sets how a background image will be repeated",
                    defaultValue:"repeat",
                    isInherited:false,
                    isAnimatable:false,
                    usageExample:".one {    background-repeat: no-repeat; }"
            };
    var backgroundClip = {
                    actualName:"background-clip",
                    definition:"Specifies the painting area of the background",
                    defaultValue:"border-box",
                    isInherited:false,
                    isAnimatable:false,
                    usageExample:".border-box { background-clip: border-box; }"
            };
    var backgroundOrigin = {
                    actualName:"background-origin",
                    definition:"Specifies where the background image(s) is/are positioned",
                    defaultValue:"padding-box",
                    isInherited:false,
                    isAnimatable:false,
                    usageExample:"background-origin: content-box;"
            };
    var backgroundSize = {
                    actualName:"background-size",
                    definition:"Specifies the size of the background image(s)",
                    defaultValue:"auto",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"background-size: 50% 50%;"
            };
    var border = {
                    actualName:"border",
                    definition:"Sets all the border properties in one declaration",
                    defaultValue:"medium none color",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"border: medium dashed green;"
            };
    var borderBottom = {
                    actualName:"border-bottom",
                    definition:"Sets all the bottom border properties in one declaration",
                    defaultValue:"medium none color",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"border-bottom: medium dashed blue;"
            };
    var borderBottomColor = {
                    actualName:"border-bottom-color",
                    definition:"Sets the color of the bottom border",
                    defaultValue:"The current color of the element",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"border-bottom-color: #F5F6F7;"
            };
    var borderBottomLeftRadius = {
                    actualName:"border-bottom-left-radius",
                    definition:"Defines the shape of the border of the bottom-left corner",
                    defaultValue:"0",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"div {  border-bottom-left-radius: 40px 20px; }"
            };
    var borderBottomRightRadius = {
                    actualName:"border-bottom-right-radius",
                    definition:"Defines the shape of the border of the bottom-right corner",
                    defaultValue:"0",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"div {  border-bottom-right-radius: 40px 40px; }"
            };
    var borderBottomStyle = {
                    actualName:"border-bottom-style",
                    definition:"Sets the style of the bottom border",
                    defaultValue:"none",
                    isInherited:false,
                    isAnimatable:false,
                    usageExample:".b1 {border-bottom-style:none;}"
            };
    var borderBottomWidth = {
                    actualName:"border-bottom-width",
                    definition:"Sets the width of the bottom border",
                    defaultValue:"medium",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"element {     border-bottom-width: thin;    border-bottom-style: solid;    border-bottom-color: #000; }"
            };
    var borderColor = {
                    actualName:"border-color",
                    definition:"Sets the color of the four borders",
                    defaultValue:"The current color of the element",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"#justone {    border-color: red; }"
            };
    var borderImage = {
                    actualName:"border-image",
                    definition:"A shorthand property for setting all the border-image-* properties",
                    defaultValue:"none 100% 1 0 stretch",
                    isInherited:false,
                    isAnimatable:false,
                    usageExample:"border-image: url(\"/images/border.png\") 30 30 stretch;"
            };
    var borderImageOutset = {
                    actualName:"border-image-outset",
                    definition:"Specifies the amount by which the border image area extends beyond the border box",
                    defaultValue:"0",
                    isInherited:false,
                    isAnimatable:false,
                    usageExample:"border-image-outset: 1.5;"
            };
    var borderImageRepeat = {
                    actualName:"border-image-repeat",
                    definition:"Specifies whether the border image should be repeated, rounded or stretched",
                    defaultValue:"stretch",
                    isInherited:false,
                    isAnimatable:false,
                    usageExample:"border-image-repeat: inherit;"
            };
    var borderImageSlice = {
                    actualName:"border-image-slice",
                    definition:"Specifies how to slice the border image",
                    defaultValue:"100%",
                    isInherited:false,
                    isAnimatable:false,
                    usageExample:"border-image-slice: 7 12 14 5; "
            };
    var borderImageSource = {
                    actualName:"border-image-source",
                    definition:"Specifies the path to the image to be used as a border",
                    defaultValue:"none",
                    isInherited:false,
                    isAnimatable:false,
                    usageExample:"border-image-source: url(image.jpg);"
            };
    var borderImageWidth = {
                    actualName:"border-image-width",
                    definition:"Specifies the widths of the image-border",
                    defaultValue:"1",
                    isInherited:false,
                    isAnimatable:false,
                    usageExample:"border-image-width: 2em 3em;"
            };
    var borderLeft = {
                    actualName:"border-left",
                    definition:"Sets all the left border properties in one declaration",
                    defaultValue:"medium none color",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"border-left: 2px dotted;"
            };
    var borderLeftColor = {
                    actualName:"border-left-color",
                    definition:"Sets the color of the left border",
                    defaultValue:"The current color of the element",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:".mybox {    border: solid 0.3em gold;     border-left-color: red;    width: auto; }"
            };
    var borderLeftStyle = {
                    actualName:"border-left-style",
                    definition:"Sets the style of the left border",
                    defaultValue:"none",
                    isInherited:false,
                    isAnimatable:false,
                    usageExample:".b1 {border-left-style:none;}"
            };
    var borderLeftWidth = {
                    actualName:"border-left-width",
                    definition:"Sets the width of the left border",
                    defaultValue:"medium",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"border-left-width: thick;"
            };
    var borderRadius = {
                    actualName:"border-radius",
                    definition:"A shorthand property for setting all the four border-*-radius properties",
                    defaultValue:"0",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"border-radius: 1em/5em;"
            };
    var borderRight = {
                    actualName:"border-right",
                    definition:"Sets all the right border properties in one declaration",
                    defaultValue:"not specified",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"border-right: 2px dotted;"
            };
    var borderRightColor = {
                    actualName:"border-right-color",
                    definition:"Sets the color of the right border",
                    defaultValue:"black",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"border-right-color: transparent;"
            };
    var borderRightStyle = {
                    actualName:"border-right-style",
                    definition:"Sets the style of the right border",
                    defaultValue:"none",
                    isInherited:false,
                    isAnimatable:false,
                    usageExample:"border-right-style: outset;"
            };
    var borderRightWidth = {
                    actualName:"border-right-width",
                    definition:"Sets the width of the right border",
                    defaultValue:"medium",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"border-right-width: 6px"
            };
    var borderStyle = {
                    actualName:"border-style",
                    definition:"Sets the style of the four borders",
                    defaultValue:"none",
                    isInherited:false,
                    isAnimatable:false,
                    usageExample:"border-style: unset;"
            };
    var borderTop = {
                    actualName:"border-top",
                    definition:"Sets all the top border properties in one declaration",
                    defaultValue:"medium none color",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"border-top: medium dashed green;"
            };
    var borderTopColor = {
                    actualName:"border-top-color",
                    definition:"Sets the color of the top border",
                    defaultValue:"The current color of the element",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"border-top-color: rgb(255, 128, 0);"
            };
    var borderTopLeftRadius = {
                    actualName:"border-top-left-radius",
                    definition:"Defines the shape of the border of the top-left corner",
                    defaultValue:"0",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"border-top-left-radius: 3px;"
            };
    var borderTopRightRadius = {
                    actualName:"border-top-right-radius",
                    definition:"Defines the shape of the border of the top-right corner",
                    defaultValue:"0",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"border-top-right-radius: 3px;"
            };
    var borderTopStyle = {
                    actualName:"border-top-style",
                    definition:"Sets the style of the top border",
                    defaultValue:"none",
                    isInherited:false,
                    isAnimatable:false,
                    usageExample:"border-top-style: ridge;"
            };
    var borderTopWidth = {
                    actualName:"border-top-width",
                    definition:"Sets the width of the top border",
                    defaultValue:"medium",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"border-top-width: 6px;"
            };
    var borderWidth = {
                    actualName:"border-width",
                    definition:"Sets the width of the four borders",
                    defaultValue:"medium",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"border-width: inherit;"
            };
    var boxDecorationBreak = {
                    actualName:"box-decoration-break",
                    definition:"Sets the behaviour of the background and border of an element at page-break, or, for in-line elements, at line-break",
                    defaultValue:"slice",
                    isInherited:false,
                    isAnimatable:false,
                    usageExample:"box-decoration-break: slice;"
            };
    var boxShadow = {
                    actualName:"box-shadow",
                    definition:"Attaches one or more drop-shadows to the box",
                    defaultValue:"none",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"box-shadow: 60px -16px teal;"
            };
    var bottom = {
                    actualName:"bottom",
                    definition:"Specifies the bottom position of a positioned element",
                    defaultValue:"auto",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"bottom: 2.4em;"
            };
    var clear = {
                    actualName:"clear",
                    definition:"Specifies which sides of an element where other floating elements are not allowed",
                    defaultValue:"none",
                    isInherited:false,
                    isAnimatable:false,
                    usageExample:".left {    border: 1px solid black;     clear: left; }"
            };
    var display = {
                    actualName:"display",
                    definition:"Specifies how a certain HTML element should be displayed",
                    defaultValue:"inline",
                    isInherited:false,
                    isAnimatable:false,
                    usageExample:"display: list-item;"
            };
    var float = {
                    actualName:"float",
                    definition:"Specifies whether or not a box should float",
                    defaultValue:"none",
                    isInherited:false,
                    isAnimatable:false,
                    usageExample:"float: inline-end;"
            };
    var height = {
                    actualName:"height",
                    definition:"Sets the height of an element",
                    defaultValue:"auto",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"height: 120px;"
            };
    var left = {
                    actualName:"left",
                    definition:"Specifies the left position of a positioned element",
                    defaultValue:"auto",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"left: 2.4em;"
            };
    var margin = {
                    actualName:"margin",
                    definition:"Sets all the margin properties in one declaration",
                    defaultValue:"0",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"margin: 5% auto;"
            };
    var marginBottom = {
                    actualName:"margin-bottom",
                    definition:"Sets the bottom margin of an element",
                    defaultValue:"0",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"margin-bottom: 10px;"
            };
    var marginLeft = {
                    actualName:"margin-left",
                    definition:"Sets the left margin of an element",
                    defaultValue:"0",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"margin-left: auto;"
            };
    var marginRight = {
                    actualName:"margin-right",
                    definition:"Sets the right margin of an element",
                    defaultValue:"0",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"margin-right: 5%; "
            };
    var marginTop = {
                    actualName:"margin-top",
                    definition:"Sets the top margin of an element",
                    defaultValue:"0",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"margin-top: inherit;"
            };
    var maxHeight = {
                    actualName:"max-height",
                    definition:"Sets the maximum height of an element",
                    defaultValue:"none",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"max-height: 3.5em;"
            };
    var maxWidth = {
                    actualName:"max-width",
                    definition:"Sets the maximum width of an element",
                    defaultValue:"none",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"max-width: max-content;"
            };
    var minHeight = {
                    actualName:"min-height",
                    definition:"Sets the minimum height of an element",
                    defaultValue:"0",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"min-height: initial;"
            };
    var minWidth = {
                    actualName:"min-width",
                    definition:"Sets the minimum width of an element",
                    defaultValue:"0",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"min-width: max-content;"
            };
    var overflow = {
                    actualName:"overflow",
                    definition:"Specifies what happens if content overflows an element's box",
                    defaultValue:"visible",
                    isInherited:false,
                    isAnimatable:false,
                    usageExample:"overflow: visible;"
            };
    var overflowX = {
                    actualName:"overflow-x",
                    definition:"Specifies whether or not to clip the left/right edges of the content, if it overflows the element's content area",
                    defaultValue:"visible",
                    isInherited:false,
                    isAnimatable:false,
                    usageExample:"overflow-x: hidden;"
            };
    var overflowY = {
                    actualName:"overflow-y",
                    definition:"Specifies whether or not to clip the top/bottom edges of the content, if it overflows the element's content area",
                    defaultValue:"visible",
                    isInherited:false,
                    isAnimatable:false,
                    usageExample:"overflow-y: scroll;"
            };
    var padding = {
                    actualName:"padding",
                    definition:"Sets all the padding properties in one declaration",
                    defaultValue:"0",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"padding: 5% 10%;"
            };
    var paddingBottom = {
                    actualName:"padding-bottom",
                    definition:"Sets the bottom padding of an element",
                    defaultValue:"0",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"padding-bottom: 0.5em;"
            };
    var paddingLeft = {
                    actualName:"padding-left",
                    definition:"Sets the left padding of an element",
                    defaultValue:"0",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"padding-left: 10%;"
            };
    var paddingRight = {
                    actualName:"padding-right",
                    definition:"Sets the right padding of an element",
                    defaultValue:"0",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"padding-right: 2cm;"
            };
    var paddingTop = {
                    actualName:"padding-top",
                    definition:"Sets the top padding of an element",
                    defaultValue:"0",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"padding-top: inherit;"
            };
    var position = {
                    actualName:"position",
                    definition:"Specifies the type of positioning method used for an element (static, relative, absolute or fixed)",
                    defaultValue:"static",
                    isInherited:false,
                    isAnimatable:false,
                    usageExample:"position: sticky;"
            };
    var right = {
                    actualName:"right",
                    definition:"Specifies the right position of a positioned element",
                    defaultValue:"auto",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"right: initial;"
            };
    var top = {
                    actualName:"top",
                    definition:"Specifies the top position of a positioned element",
                    defaultValue:"auto",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"top: 3px;"
            };
    var visibility = {
                    actualName:"visibility",
                    definition:"Specifies whether or not an element is visible",
                    defaultValue:"visible",
                    isInherited:true,
                    isAnimatable:true,
                    usageExample:"visibility: collapse;"
            };
    var width = {
                    actualName:"width",
                    definition:"Sets the width of an element",
                    defaultValue:"auto",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"width: fit-content;"
            };
    var verticalAlign = {
                    actualName:"vertical-align",
                    definition:"Sets the vertical alignment of an element",
                    defaultValue:"baseline",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"vertical-align: text-bottom;"
            };
    var zIndex = {
                    actualName:"z-index",
                    definition:"Sets the stack order of a positioned element",
                    defaultValue:"auto",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"z-index: 289;"
            };
    var alignContent = {
                    actualName:"align-content",
                    definition:"Specifies the alignment between the lines inside a flexible container when the items do not use all available space",
                    defaultValue:"stretch",
                    isInherited:false,
                    isAnimatable:false,
                    usageExample:"align-content: flex-start;"
            };
    var alignItems = {
                    actualName:"align-items",
                    definition:"Specifies the alignment for items inside a flexible container",
                    defaultValue:"stretch",
                    isInherited:false,
                    isAnimatable:false,
                    usageExample:"align-items: flex-start;"
            };
    var alignSelf = {
                    actualName:"align-self",
                    definition:"Specifies the alignment for selected items inside a flexible container",
                    defaultValue:"auto",
                    isInherited:false,
                    isAnimatable:false,
                    usageExample:"align-self: flex-end;"
            };
    var flex = {
                    actualName:"flex",
                    definition:"Specifies the length of the item, relative to the rest",
                    defaultValue:"0 1 auto",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"flex: auto;"
            };
    var flexBasis = {
                    actualName:"flex-basis",
                    definition:"Specifies the initial length of a flexible item",
                    defaultValue:"auto",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"flex-basis: fit-content;"
            };
    var flexDirection = {
                    actualName:"flex-direction",
                    definition:"Specifies the direction of the flexible items",
                    defaultValue:"row",
                    isInherited:false,
                    isAnimatable:false,
                    usageExample:"flex-direction: column-reverse;"
            };
    var flexFlow = {
                    actualName:"flex-flow",
                    definition:"A shorthand property for the flex-direction and the flex-wrap properties",
                    defaultValue:"row nowrap",
                    isInherited:false,
                    isAnimatable:false,
                    usageExample:"flex-flow: wrap-reverse;"
            };
    var flexGrow = {
                    actualName:"flex-grow",
                    definition:"Specifies how much the item will grow relative to the rest",
                    defaultValue:"0",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"flex-grow: initial;"
            };
    var flexShrink = {
                    actualName:"flex-shrink",
                    definition:"Specifies how the item will shrink relative to the rest",
                    defaultValue:"1",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"flex-shrink: inherit;"
            };
    var flexWrap = {
                    actualName:"flex-wrap",
                    definition:"Specifies whether the flexible items should wrap or not",
                    defaultValue:"nowrap",
                    isInherited:false,
                    isAnimatable:false,
                    usageExample:"flex-wrap: wrap-reverse;"
            };
    var justifyContent = {
                    actualName:"justify-content",
                    definition:"Specifies the alignment between the items inside a flexible container when the items do not use all available space",
                    defaultValue:"flex-start",
                    isInherited:false,
                    isAnimatable:false,
                    usageExample:"justify-content: center;"
            };
    var order = {
                    actualName:"order",
                    definition:"Sets the order of the flexible item, relative to the rest",
                    defaultValue:"0",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"order: unset;"
            };
    var hangingPunctuation = {
                    actualName:"hanging-punctuation",
                    definition:"Specifies whether a punctuation character may be placed outside the line box",
                    defaultValue:"none",
                    isInherited:true,
                    isAnimatable:false,
                    usageExample:"p {    hanging-punctuation: first; }"
            };
    var hyphens = {
                    actualName:"hyphens",
                    definition:"Sets how to split words to improve the layout of paragraphs",
                    defaultValue:"manual",
                    isInherited:true,
                    isAnimatable:false,
                    usageExample:"hyphens: auto;"
            };
    var letterSpacing = {
                    actualName:"letter-spacing",
                    definition:"Increases or decreases the space between characters in a text",
                    defaultValue:"normal",
                    isInherited:true,
                    isAnimatable:true,
                    usageExample:"letter-spacing: 0.3em;"
            };
    var lineBreak = {
                    actualName:"line-break",
                    definition:"Specifies how/if to break lines",
                    defaultValue:"auto",
                    isInherited:false,
                    isAnimatable:false,
                    usageExample:"line-break: auto;"
            };
    var lineHeight = {
                    actualName:"line-height",
                    definition:"Sets the line height",
                    defaultValue:"normal",
                    isInherited:true,
                    isAnimatable:true,
                    usageExample:"line-height: 34%;"
            };
    var overflowWrap = {
                    actualName:"overflow-wrap",
                    definition:"Specifies whether or not the browser may break lines within words in order to prevent overflow (when a string is too long to fit its containing box)",
                    defaultValue:"normal",
                    isInherited:true,
                    isAnimatable:false,
                    usageExample:"p:nth-child(1) {	overflow-wrap: normal; }"
            };
    var tabSize = {
                    actualName:"tab-size",
                    definition:"Specifies the length of the tab-character",
                    defaultValue:"8",
                    isInherited:true,
                    isAnimatable:false,
                    usageExample:"tab-size: initial;"
            };
    var textAlign = {
                    actualName:"text-align",
                    definition:"Specifies the horizontal alignment of text",
                    defaultValue:"left if direction is ltr, and right if direction is rtl",
                    isInherited:true,
                    isAnimatable:false,
                    usageExample:"text-align: center;"
            };
    var textAlignLast = {
                    actualName:"text-align-last",
                    definition:"Describes how the last line of a block or a line right before a forced line break is aligned when text-align is 'justify'",
                    defaultValue:"auto",
                    isInherited:true,
                    isAnimatable:false,
                    usageExample:"text-align-last: end;"
            };
    var textCombineUpright = {
                    actualName:"text-combine-upright",
                    definition:"Specifies the combination of multiple characters into the space of a single character",
                    defaultValue:"none",
                    isInherited:true,
                    isAnimatable:false,
                    usageExample:"text-combine-upright: digits 4;"
            };
    var textIndent = {
                    actualName:"text-indent",
                    definition:"Specifies the indentation of the first line in a text-block",
                    defaultValue:"0",
                    isInherited:true,
                    isAnimatable:true,
                    usageExample:"text-indent: 40px;"
            };
    var textJustify = {
                    actualName:"text-justify",
                    definition:"Specifies the justification method used when text-align is 'justify'",
                    defaultValue:"auto",
                    isInherited:true,
                    isAnimatable:false,
                    usageExample:"div {    text-align: justify;     text-justify: inter-word; }"
            };
    var textTransform = {
                    actualName:"text-transform",
                    definition:"Controls the capitalization of text",
                    defaultValue:"none",
                    isInherited:true,
                    isAnimatable:false,
                    usageExample:"text-transform: lowercase;"
            };
    var whiteSpace = {
                    actualName:"white-space",
                    definition:"Specifies how white-space inside an element is handled",
                    defaultValue:"normal",
                    isInherited:true,
                    isAnimatable:false,
                    usageExample:"white-space: unset;"
            };
    var wordBreak = {
                    actualName:"word-break",
                    definition:"Specifies line breaking rules for non-CJK scripts",
                    defaultValue:"normal",
                    isInherited:true,
                    isAnimatable:false,
                    usageExample:"word-break: break-all;"
            };
    var wordSpacing = {
                    actualName:"word-spacing",
                    definition:"Increases or decreases the space between words in a text",
                    defaultValue:"normal",
                    isInherited:true,
                    isAnimatable:true,
                    usageExample:"word-spacing: 0.3em;"
            };
    var wordWrap = {
                    actualName:"word-wrap",
                    definition:"Allows long, unbreakable words to be broken and wrap to the next line",
                    defaultValue:"normal",
                    isInherited:true,
                    isAnimatable:false,
                    usageExample:"word-wrap: initial;"
            };
    var textDecoration = {
                    actualName:"text-decoration",
                    definition:"Specifies the decoration added to text",
                    defaultValue:"none",
                    isInherited:false,
                    isAnimatable:false,
                    usageExample:"text-decoration: underline wavy red;"
            };
    var textDecorationColor = {
                    actualName:"text-decoration-color",
                    definition:"Specifies the color of the text-decoration",
                    defaultValue:"currentColor",
                    isInherited:false,
                    isAnimatable:true,
                    usageExample:"text-decoration-color: #00ff00;"
            };
    var textDecorationLine = {
                    actualName:"text-decoration-line",
                    definition:"Specifies the type of line in a text-decoration",
                    defaultValue:"none",
                    isInherited:false,
                    isAnimatable:false,
                    usageExample:"text-decoration-line: line-through;"
            };
    var textDecorationStyle = {
                    actualName:"text-decoration-style",
                    definition:"Specifies the style of the line in a text decoration",
                    defaultValue:"solid",
                    isInherited:false,
                    isAnimatable:false,
                    usageExample:"text-decoration-style: dotted;"
            };
    var textShadow = {
                    actualName:"text-shadow",
                    definition:"Adds shadow to text",
                    defaultValue:"none",
                    isInherited:true,
                    isAnimatable:true,
                    usageExample:"text-shadow: 1px 1px 2px black;"
            };
    var textUnderlinePosition = {
                    actualName:"text-underline-position",
                    definition:"Specifies the position of the underline which is set using the text-decoration property",
                    defaultValue:"auto",
                    isInherited:true,
                    isAnimatable:false,
                    usageExample:"text-underline-position: under;"
            };
    var fontFamily = {
                    actualName:"font-family",
                    definition:"Specifies the font family for text",
                    defaultValue:"depends on the browser",
                    isInherited:true,
                    isAnimatable:false,
                    usageExample:"font-family: \"Goudy Bookletter 1911\", sans-serif;"
            };
    var fontFeatureSettings = {
                    actualName:"font-feature-settings",
                    definition:"Allows control over advanced typographic features in OpenType fonts",
                    defaultValue:"normal",
                    isInherited:true,
                    isAnimatable:false,
                    usageExample:"font-feature-settings: \"smcp\", \"swsh\" 2;"
            };
    
    //****************** weird guys here ******************//
    
    var fontFace = {
                    actualName:"@font-face",
                    definition:"A rule that allows websites to download and use fonts other than the 'web-safe' fonts",
                    defaultValue:"",
                    isInherited:,
                    isAnimatable:,
                    usageExample:"@font-face { font-family: \"Bitstream Vera Serif Bold\"; src: url(\"https://mdn.mozillademos.org/files/2468/VeraSeBd.ttf\"); }"
            };
    var fontFeatureValues = {
                    actualName:"@font-feature-values",
                    definition:"Allows authors to use a common name in font-variant-alternate for feature activated differently in OpenType",
                    defaultValue:"",
                    isInherited:,
                    isAnimatable:,
                    usageExample:"@font-feature-values Font One { /* How to activate nice-style in Font One */ @styleset { nice-style: 12;   } }"
            };

    
    // now, you can do CSSAttributeObjects.push(backgroundColor)
    // push all keyword objects into CSSAttributeObjects array
    
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
        maskType,
        color,
         opacity,
         background,
         backgroundAttachment,
         backgroundBlendMode,
         backgroundColor,
         backgroundImage,
         backgroundPosition,
         backgroundRepeat,
         backgroundClip,
         backgroundOrigin,
         backgroundSize,
         border,
         borderBottom,
         borderBottomColor,
         borderBottomLeftRadius,
         borderBottomRightRadius,
         borderBottomStyle,
         borderBottomWidth,
         borderColor,
         borderImage,
         borderImageOutset,
         borderImageRepeat,
         borderImageSlice,
         borderImageSource,
         borderImageWidth,
         borderLeft,
         borderLeftColor,
         borderLeftStyle,
         borderLeftWidth,
         borderRadius,
         borderRight,
         borderRightColor,
         borderRightStyle,
         borderRightWidth,
         borderStyle,
         borderTop,
         borderTopColor,
         borderTopLeftRadius,
         borderTopRightRadius,
         borderTopStyle,
         borderTopWidth,
         borderWidth,
         boxDecorationBreak,
         boxShadow,
         bottom,
         clear,
         clip,
         display,
         float,
         height,
         left,
         margin,
         marginBottom,
         marginLeft,
         marginTop,
         maxHeight,
         maxWidth,
         minHeight,
         minWidth,
         overflow,
         overflowX,
         overflowY,
         padding,
         paddingBottom,
         paddingLeft,
         paddingRight,
         paddingTop,
         position,
         right,
         top,
         visibility,
         width,
         verticalAlign,
         zIndex,
         alignContent,
         alignItems,
         alignSelf,
         flex,
         flexBasis,
         flexDirection,
         flexFlow,
         flexGrow,
         flexShrink,
         flexWrap,
         justifyContent,
         order,
         hangingPunctuation,
         hyphens,
         letterSpacing,
         lineBreak,
         lineHeight,
         overflowWrap,
         tabSize,
         textAlign,
         textAlignLast,
         textCombineUpright,
         textIndent,
         textJustify,
         textTransform,
         whiteSpace,
         wordBreak,
         wordSpacing,
         wordWrap,
         textDecoration,
         textDecorationColor,
         textDecorationLine,
         textDecorationStyle,
         textShadow,
         textUnderlinePosition,
         fontFace,
         fontFeatureValues,
         fontFamily,
         fontFeatureSettings
        );
    

        
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
});