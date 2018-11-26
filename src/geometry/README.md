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
| config.end | <code>Vector2</code> | End position of the line |
| config.start | <code>Vector2</code> | Start position of the line |
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
| config.position | <code>Vector2</code> | Position of the circle's center point |
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
| config.position | <code>Vector2</code> | Position of the vertex |
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
| config.position | <code>Vector2</code> | Position of the point |

<a name="Triangle"></a>

## Triangle
**Kind**: global class  
<a name="new_Triangle_new"></a>

### new Triangle(geometry)
A class to draw a triangle


| Param | Type | Description |
| --- | --- | --- |
| geometry | <code>Array</code> | configuration object containing all of the triangle's point information |

