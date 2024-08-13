Further development of an existing mobile game prototype. My work consisted mostly in refactoring this prototype into a “proper” project with high maintainability and low bus factor.

Most of the refactoring work also “coincided” with the optimization. (This is a common occurrence with mobile game development: when fancy but hastily done UI is hard to maintain, it’s also too much for a mobile system to process without lags, and after refactoring, the fast execution also arises naturally.)

Similarly, initially the coloring itself was implemented as a “mosaic“ of individual pictures (picture per fragment), which added work for the graphic designer, and some manual work inside the Unity and enough work for the mobile systems to cause noticeable heating and battery drain. Rather than optimizing these consequences it’s more cost-effecting to optimize the root cause. Namely, a proper [flood fill](https://en.wikipedia.org/wiki/Flood_fill) algorithm dealt with this situation decisively.<!--  (Fill tools like bucket in Paint are implemented in this way typically.) -->

The app is no longer at the store but it can be seen in these “archival”, so to speak, websites (*warning*: they may be very dubious 3rd-party websites):

- <https://descargarapps.club/educativos/blob-friends-libro-de-colorear.html>
- <https://apkpure.com/de/blob-friends-coloring-book/com.blobandfriends.colorbook>
