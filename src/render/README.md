<a name="Renderer"></a>

## Renderer
**Kind**: global class  
<a name="new_Renderer_new"></a>

### new Renderer(element, scene)
A class to construct a renderer for a canvas element


| Param | Type | Description |
| --- | --- | --- |
| element | <code>string</code> | ID of the canvas element |
| scene | <code>Scene</code> | Scene object containing all scene objects |

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

<a name="pixelsToClipSpace"></a>

## pixelsToClipSpace(canvas, pixelSpacePosition)
A function to convert a pixel space position to clip space

**Kind**: global function  

| Param | Type |
| --- | --- |
| canvas | <code>element</code> | 
| pixelSpacePosition | <code>Vector2</code> | 

<a name="clipSpaceToPixels"></a>

## clipSpaceToPixels(canvas, clipSpacePosition)
A function to convert a clip space position to pixel space

**Kind**: global function  

| Param | Type |
| --- | --- |
| canvas | <code>element</code> | 
| clipSpacePosition | <code>Vector2</code> | 

