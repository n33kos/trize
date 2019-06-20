<a name="Graph"></a>

## Graph
**Kind**: global class  
<a name="new_Graph_new"></a>

### new Graph(config)
A class to draw a graph


| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | configuration object |
| config.size | <code>int</code> | Size of each grid square in pixels |
| config.color | <code>string</code> | Color of the lines |
| config.originColor | <code>string</code> | Color of the origin lines |
| config.width | <code>int</code> | width of the lines |
| config.originLineWidth | <code>int</code> | width of the origin lines |

<a name="Function"></a>

## Function
**Kind**: global class  
<a name="new_Function_new"></a>

### new Function(config)
A class to draw a function on a graph


| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | configuration object |
| config.canvas | <code>element</code> | The canvas element |
| config.condition | <code>function</code> | A function for the iteration condition, returns a boolean |
| config.drawCurve | <code>boolean</code> | Should we draw smoothed curves through the points |
| config.drawLines | <code>boolean</code> | Should we draw straight lines between points |
| config.drawPoints | <code>boolean</code> | Should we draw the graph points |
| config.func | <code>function</code> | Function to graph. Takes argument of n and returns a Vector2 for a position |
| config.graph | <code>Graph</code> | The graph class the function eill be drawn on |
| config.incrementExpression | <code>function</code> | A function to for the iteration increment Takes argument of i and returns incremented value |
| config.initialValue | <code>int</code> | Inital value to start n at in the function |
| config.lineColor | <code>string</code> | Color of the lines |
| config.lineWidth | <code>int</code> | Width of the lines to draw |
| config.pointColor | <code>string</code> | Color of the points |
| config.pointWidth | <code>int</code> | Width of the points |

<a name="Curve"></a>

## Curve
**Kind**: global class  
<a name="new_Curve_new"></a>

### new Curve(config)
A class to draw a curve on a graph


| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | configuration object |
| config.color | <code>string</code> | Color of the curve |
| config.points | <code>Array.&lt;Vector2&gt;</code> | An array of Vector2 objects to draw a curve through |
| config.lineWidth | <code>int</code> | Width of the curve |
| config.canvas | <code>element</code> | The canvas element |
| config.tension | <code>int</code> | Spline tension, changes how straign the curves are |

