1.  The player can build a model using cubic voxels (similar to Minecraft) then name and save it. Unlimited number of such models can be created.
2.  But the “home” scene/world is not made from voxels (cubes) – unlike Minecraft. Instead, previously made models are added into it and can be positioned or rotated freely.

For example, the player can design a few building models, use only some of them, use the same building multiple times, rotate one building by 45° and another by 165°, etc.

It’s also possible to draw splines and run models along them; this is intended for making simple train/railroad animations.

Having millions of cubes in the same model (or scene) directly is too slow. Instead, completely obscured cubes (by the ones surrounding them) have to be detected and skipped, and the “exposed” remainder has to be combined into bigger models (usually called *chunks*). Today, the most practical approach is probably using a third-party solution and/or using instancing and/or computing shaders. But at the time neither of those was a viable choice in Unity (or maybe in any engine). Thus, we made our own cubic voxel system, consisting of the aforementioned chunking, shader tweaks, and custom raycasting.

In order to speed up tedious parts of cubic voxel modeling we implemented a couple of types of “power-user tools”:

- selection-based: for example, select an area in a single “motion” and extrude it – similarly to extruding tool in Blender
- convolution-based: same principle as convolution (kernel) tools in 2D image processing but in 3D – more specifically, mathematical morphology operators in 3D space: erosion and dilation, closing and opening.

We promoted this game (or rather entertainment app) through a demo version (which is just an older build), devlog-like channel on YouTube, and a bit of SMM. Despite these measures, we had very few (early-access) sales, so the project had to be canceled.
