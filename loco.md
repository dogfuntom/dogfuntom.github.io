---
title: Railroad simulator
---

Solo programming and technical artistry paid by hour.
(Not sure how many hours because we did projects in parallel, and tracked multiple projects in a single “pile” of hours.
A lack of personal analytics that I regret now.
This project probably took about 200­­­-300 hours.)

Programming and technical artistry: Unity, HDRP, custom physics (from scratch), basic PCG.
Additional technical artistry: “polishing” bought 3rd-party Daz3D models in Blender (and their textures in GIMP) in order to
implement LOD, fix compatibility issues, rendering bugs (discolored mipmaps), animation bugs (misplaced pivots/origins).

Simulator of railroad as entertainment for model railroad enthusiasts who can't afford building a physical model railroad.

How did we distinguish ourselves from competition:

- Take the best parts from both worlds: beauty and heavy physics of real railroad and convenience and freedom of model railroad.
- More modern rendering in comparison to most famous simulators of real railroad.
  More realistic style (i.e. less stylization) in comparison to most simulators of model railroad.

Initially a user is presented with a large square of slightly rough terrain
that can be reshaped by brush-like tools.
Then a railroad is created by placing straight, circular, turnout or other track pieces
and connecting them with dynamic (auto-sized) C-shaped and S-shaped tracks.
(Other track pieces are turntables, sheds, stops (dead ends), road crossings, cattle docks.)
The terrain is automatically leveled under tracks.

At the same time, the user is placing purely cosmetic “scenery” pieces: buildings, trucks, footbridges, signals, trees, bushes, junk.

Then all these “static” parts are saved and the application switches to simulation mode.
The user places locomotives and cars (wagons) onto tracks. They can be coupled and uncoupled by clicking on their chains.
Any locomotive can be driven by GUI consisting of throttle slider and brake button.
The simulation includes custom physics that I wrote from scratch.

In both modes the user can configure time of day (including night), sun direction, fog, cloudiness.

## Custom physics from scratch

Why we had to resort to creating our own physics:

- We tried to use built-in physics but it's infamously inherently unstable.
  (BTW, [later I learned that there's a mathematical reason for that.](https://en.wikipedia.org/wiki/Euler_method#Numerical_stability))
- We tried to buy a third-party solution.
  It had convincing store page and high review rating but in practice it's of low quality.
  After this disappointment we didn't want to trust third-party solutions anymore.

The gist of features and implementation details:

- Every locomotive/car is rigidly attached by two points to a single line in the middle of railroad.
  (Basically, there's an invisible monorail between the cosmetic visible rails.)
- Impulse (and delta-impulse) is the “king” of physical state of every locomotive/car.
  All the forces, velocities and accelerations are converted into impulse (or delta-impulse) or deduced from impulse (or delta-impulse).
- Position and rotation is rigidly determined by the two attachment points. (Basically, position and rotation of a car is an average between its two attachment points.)
- Collision detection, chain pull, impulse and the rest of simulation “happens” at car body level.
- At every simulation tick impulse is propagated from locomotive to the opposite end, while the counter impulse is remembered. The remembered impulse is applied at the start of the next tick.
- In the end, this is still an Euler method with chains as the not-truly-rigid constraint.
  However, we use linear nature of trains to our advantage.
  Propagation in linear order allows full rigidity of position/rotation led by “monorail” and of collision response.
  The fact that only chains are “numerically unstable” and that they are also processed in linear order,
  with combination of the slow nature of trains, makes it's impossible to destabilize a simulation of single train.
- Collisions with obstacles or other trains is the “weak side” of our custom physics.
  It's possible to overcome this but we decided that it's better for project's budget to apply a “fix by game design”
  (i.e. by limiting user freedom slightly to force “edge cases” to be unreachable).

## Graphics

Achieving better graphics than the top few most popular railroad simulators was the goal from the start.
And with the opposite goal of relatively low requirements necessitated by the target audience.

As typical for game engines, Unity is focused on games with static levels
(meaning that ground, sky, time of day, buildings, grass, trees, etc. are chosen and placed by developer beforehand
and remain mostly unchanged in runtime).
Our almost completely user-authored levels, user-configured time of day,
and the goal of good-looking and almost non-stylized graphics,
is why we gambled on switching to HDRP even before it's full release.

When it comes to rendering performance, our own content (namely, mostly trains and buildings) was the primary bottleneck.
We intentionally bought highly detailed assets: they should be no less detail that typical physical models used in real model railroads.
As usual, the solution for level of details being too high is lowering it for objects farther from the camera.
However, the “standard” approach of having multiple versions (for different LODs) of the same model wasn't cost-effective for us.
Instead, we separated models into sub-meshes in order to hide them by distance threshold.
For instance, each locomotive/car has sub-mesh with rivets that is visible only when very close to the camera.
At middle distance we can hide interior details (of both rolling stock and buildings).
And at very far distance on weak PCs we have to sacrifice glass (leaving just holes) and even all non-moving parts of chassis.

## Other major challenges

One half of other major challenges was the technical debt.
First, we didn't know if it makes sense to create a public prototype at all.
So we had to begin by making an internal prototype with maximum cheapness “at any cost”.
Then paying this technical debt consumed a lot of effort in the form of refactoring and maintenance.

Later, we didn't know if I'm capable of implementing our own physics or if the result will be pretty and stable enough to justify the effort.
Thus, again, it was “cheapness at any cost”. And again the later payment of the technical debt wasn't pleasant.

The other half of other major challenges was the dead-end experiments.
They are the other side of the coin:
the conclusion from “cheap at any cost” prototype was that further development is not worth it.
For example, one such experiment was procedural generation of towns in runtime.
