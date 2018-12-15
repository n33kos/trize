## Modules

<dl>
<dt><a href="#module_trize">trize</a></dt>
<dd><p>A library for drawing and manipulating Canvas2D triangles</p>
</dd>
</dl>

## Classes

<dl>
<dt><a href="#Renderer">Renderer</a></dt>
<dd></dd>
<dt><a href="#Scene">Scene</a></dt>
<dd></dd>
<dt><a href="#Vector2">Vector2</a></dt>
<dd></dd>
<dt><a href="#Line">Line</a></dt>
<dd></dd>
<dt><a href="#Circle">Circle</a></dt>
<dd></dd>
<dt><a href="#Vertex">Vertex</a></dt>
<dd></dd>
<dt><a href="#Point">Point</a></dt>
<dd></dd>
<dt><a href="#Triangle">Triangle</a></dt>
<dd></dd>
<dt><a href="#Label">Label</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#pixelsToClipSpace">pixelsToClipSpace(canvas, pixelSpacePosition)</a></dt>
<dd><p>A function to convert a pixel space position to clip space</p>
</dd>
<dt><a href="#clipSpaceToPixels">clipSpaceToPixels(canvas, clipSpacePosition)</a></dt>
<dd><p>A function to convert a clip space position to pixel space</p>
</dd>
<dt><a href="#degToRad">degToRad(degrees)</a></dt>
<dd><p>A function to convert degrees to radians</p>
</dd>
<dt><a href="#distance">distance(distance)</a></dt>
<dd><p>A function to return the distance between two points</p>
</dd>
<dt><a href="#pointOnCircle">pointOnCircle(position)</a></dt>
<dd><p>A function to return a point on a circle given an angle, center, and radius.</p>
</dd>
<dt><a href="#radToDeg">radToDeg(radians)</a></dt>
<dd><p>A function to convert radians to degrees</p>
</dd>
<dt><a href="#sideCenterPoint">sideCenterPoint(position)</a></dt>
<dd><p>A function to return the center point between two points</p>
</dd>
<dt><a href="#lawOfCosines">lawOfCosines(angle)</a></dt>
<dd><p>A function to return the angle of a point given all three side lengths</p>
</dd>
<dt><a href="#round">round(rounded)</a></dt>
<dd><p>A function to return a number rounded to a desired count of digits</p>
</dd>
</dl>

<a name="module_trize"></a>

## trize
A library for drawing and manipulating Canvas2D triangles

<a name="Renderer"></a>

## Renderer
**Kind**: global class  
<a name="new_Renderer_new"></a>

### new Renderer(element, scene)
A class to construct a renderer for a canvas element


| Param | Type | Description |
| --- | --- | --- |
| element | <code>string</code> | ID of the canvas element |
| scene | [<code>Scene</code>](#Scene) | Scene object containing all scene objects |

<a name="Scene"></a>

## Scene
**Kind**: global class  
<a name="new_Scene_new"></a>

### new Scene(element, scene)
A class to contain all scene objects


| Param | Type | Description |
| --- | --- | --- |
| element | <code>string</code> | ID of the canvas element |
| scene | [<code>Scene</code>](#Scene) | Scene object containing all scene |

<a name="Vector2"></a>

## Vector2
**Kind**: global class  
<a name="new_Vector2_new"></a>

### new Vector2(x, y)
A class to represent a vertex in 2D space


| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | position in the x axis |
| y | <code>number</code> | position in the y axis |

<a name="Line"></a>

## Line
**Kind**: global class  
<a name="new_Line_new"></a>

### new Line(config)
A class to draw a Line


| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | configuration object |
| config.color | <code>string</code> | Color of the line |
| config.end | [<code>Vector2</code>](#Vector2) | End position of the line |
| config.start | [<code>Vector2</code>](#Vector2) | Start position of the line |
| config.width | <code>number</code> | Width of the line |

<a name="Circle"></a>

## Circle
**Kind**: global class  
<a name="new_Circle_new"></a>

### new Circle(config)
A class to draw a circle


| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | configuration object |
| config.arcEnd | <code>number</code> | End angle of the arc |
| config.arcStart | <code>number</code> | Start angle of the arc |
| config.clipRadius | <code>number</code> | Clip space radius (use one or the other) |
| config.fillStyle | <code>string</code> | Fill style for the circle |
| config.position | [<code>Vector2</code>](#Vector2) | Position of the circle's center point |
| config.radius | <code>number</code> | Radius of the circle in pixels (use one or the other) |
| config.shouldFill | <code>boolean</code> | Should the circle be filled |
| config.shouldStroke | <code>boolean</code> | Should the circle be have a stroke |
| config.strokeStyle | <code>string</code> | Stroke style of the circle |
| config.strokeWidth | <code>number</code> | Stroke width of the circle |

<a name="Vertex"></a>

## Vertex
**Kind**: global class  
<a name="new_Vertex_new"></a>

### new Vertex(config)
A class to draw a vertex


| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | configuration object |
| config.color | <code>string</code> | Color of the vertex |
| config.position | [<code>Vector2</code>](#Vector2) | Position of the vertex |
| config.width | <code>number</code> | Width of the vertex |

<a name="Point"></a>

## Point
**Kind**: global class  
<a name="new_Point_new"></a>

### new Point(config)
A class to contain defaults for a point on a triangle


| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | configuration object |
| config.arc | <code>Object</code> | Configuration object for an arc on this point of the triangle |
| config.side | <code>Object</code> | Configuration object for the side starting with this point of the triangle |
| config.vertex | <code>Object</code> | Configuration object for the vertex of this point |
| config.position | [<code>Vector2</code>](#Vector2) | Position of the point |

<a name="Triangle"></a>

## Triangle
**Kind**: global class  
<a name="new_Triangle_new"></a>

### new Triangle([Point, Point, Point])
A class to draw a triangle


| Param | Type | Description |
| --- | --- | --- |
| [Point, Point, Point] | <code>Array</code> | Array of Point objects which make up the triangle. |
| geometry[0].position | [<code>Vector2</code>](#Vector2) | Position of the triangle's point |
| geometry[0].arc | <code>Object</code> | Configuration object for an arc on this point of the triangle |
| geometry[0].arc.color | <code>string</code> | Color of the arc |
| geometry[0].arc.label | [<code>Label</code>](#Label) | Label for the arc |
| geometry[0].arc.radius | <code>number</code> | Radius or arc in pixels from point |
| geometry[0].arc.width | <code>number</code> | Width of the arc |
| geometry[0].side | <code>Object</code> | Configuration object for the side starting with this point of the triangle |
| geometry[0].side.label | [<code>Label</code>](#Label) | Label for the side |
| geometry[0].side.color | <code>string</code> | Color of the side |
| geometry[0].side.width | <code>number</code> | Width of the side |
| geometry[0].vertex | <code>Object</code> | Configuration object for the vertex of this point |
| geometry[0].vertex.label | [<code>Label</code>](#Label) | Label for the vertex |
| geometry[0].vertex.color | <code>string</code> | Color of the vertex |
| geometry[0].vertex.width | <code>number</code> | Width of the vertex |

<a name="Label"></a>

## Label
**Kind**: global class  
<a name="new_Label_new"></a>

### new Label(fillStyle, font, offset, position, rotation, strokeStyle, text, textAlign, shouldStroke, shouldFill)
A class to represent a label in the scene


| Param | Type | Description |
| --- | --- | --- |
| fillStyle | <code>string</code> | Fill style for the label text |
| font | <code>string</code> | Font for the label |
| offset | [<code>Vector2</code>](#Vector2) | Offset from the label's position (in pixels) |
| position | [<code>Vector2</code>](#Vector2) | Position of the label |
| rotation | <code>number</code> | Rotation of the label |
| strokeStyle | <code>string</code> | Stroke style for the label text |
| text | <code>string</code> | Content of the label to display |
| textAlign | <code>string</code> | Text alignment for the label |
| shouldStroke | <code>boolean</code> | Should the label draw a stroke |
| shouldFill | <code>boolean</code> | Should the label draw a fill |

<a name="pixelsToClipSpace"></a>

## pixelsToClipSpace(canvas, pixelSpacePosition)
A function to convert a pixel space position to clip space

**Kind**: global function  

| Param | Type |
| --- | --- |
| canvas | <code>element</code> | 
| pixelSpacePosition | [<code>Vector2</code>](#Vector2) | 

<a name="clipSpaceToPixels"></a>

## clipSpaceToPixels(canvas, clipSpacePosition)
A function to convert a clip space position to pixel space

**Kind**: global function  

| Param | Type |
| --- | --- |
| canvas | <code>element</code> | 
| clipSpacePosition | [<code>Vector2</code>](#Vector2) | 

<a name="degToRad"></a>

## degToRad(degrees)
A function to convert degrees to radians

**Kind**: global function  

| Param | Type |
| --- | --- |
| degrees | <code>number</code> | 

<a name="distance"></a>

## distance(distance)
A function to return the distance between two points

**Kind**: global function  

| Param | Type |
| --- | --- |
| distance | <code>number</code> | 

<a name="pointOnCircle"></a>

## pointOnCircle(position)
A function to return a point on a circle given an angle, center, and radius.

**Kind**: global function  

| Param | Type |
| --- | --- |
| position | [<code>Vector2</code>](#Vector2) | 

<a name="radToDeg"></a>

## radToDeg(radians)
A function to convert radians to degrees

**Kind**: global function  

| Param | Type |
| --- | --- |
| radians | <code>number</code> | 

<a name="sideCenterPoint"></a>

## sideCenterPoint(position)
A function to return the center point between two points

**Kind**: global function  

| Param | Type |
| --- | --- |
| position | <code>number</code> | 

<a name="lawOfCosines"></a>

## lawOfCosines(angle)
A function to return the angle of a point given all three side lengths

**Kind**: global function  

| Param | Type |
| --- | --- |
| angle | <code>number</code> | 

<a name="round"></a>

## round(rounded)
A function to return a number rounded to a desired count of digits

**Kind**: global function  

| Param | Type |
| --- | --- |
| rounded | <code>number</code> | 

