The user enters the text (news) and chooses an announcer: a photorealistic girl (modelled in MetaHuman) or a Pepe frog (3D model). The background is a typical TV studio. The application generates the video of this text being spoken aloud. Rendering to video enables usage of higher graphics settings than what the user’s computer can do in real time.

A video with the results from about the middle of the development: <https://www.youtube.com/@avatarasoftware4509>

Seemingly the *Movie Render Queue in Runtime* provided everything needed for non-real-time video rendering. Unfortunately, in practice, it had bugs and limitations that are incompatible with our project. For instance, there was no runtime way of setting the length of the resultant video. This is why we had to bugfix and complete the source code of *Unreal Engine* (more accurately, the source of the *Movie Render Queue* subsystem, even if in practice this distinction barely there in IDE or when building).

The text is converted into speech using built-in *Windows TTS* (text-to-speech) capabilities. This audio is then analyzed using *Oculus Lipsync* technology to generate data on the facial motions of a person speaking. From this data, a lip-sync animation for a 3D model is created. Random movements, blinking, and other nonverbal motions are also blended into the animation to create a more realistic look.

We published our early builds on itch.io and samples of generated video on YouTube. However, the response from prospective users was not particularly encouraging. Consequently, we were forced to stop the project.
