---
unlisted: true
title: side projects
---

(These lists are not ordered by date.)

<!-- The list is ordered not by date but by how much did each project helped me with skills or with confidence: -->
The tinkering:

-   an [extension for *Visual Studio* that surrounds a currently open editor with a color-coded border](https://github.com/dogfuntom/ProjectColoredFrame) (since *VS 2019* it is no longer useful because it introduced a similar feature)
-   the [portfolio website](https://github.com/dogfuntom/dogfuntom.github.io) itself
-   automation of home chores:
    - PowerShell scripts that handle backing up via restic to a cloud storage provider
    - <https://dogfuntom.github.io/fit-few-copies-of-picture-on-printed-page/>
    - [Extract first page from multiple PDFs](https://gist.github.com/dogfuntom/ce06b4d60fe97d79e01d9564c1f5857b)
    - one-liners: scheduled toggle between Windows dark and light modes; LanguageTool local server autostart; one-button winnat restart
-   some small pull requests:
    -   <https://github.com/pulls?q=is%3Apr+author%3Adogfuntom+archived%3Afalse+is%3Aclosed+-user%3Adogfuntom>
    -   <https://stackoverflow.com/questions/32751040/store-array-in-options-using-dialogpage>
        (not a pull request but this is somewhat similar in my opinion)
-   a web page prototype with a first-person Unity scene that acts as a
    [gallery of p5.js generative artworks](https://github.com/dogfuntom/GenCExpo) for a Telegram group
-   a minor generative art experiment [about growing hairs from letters](https://dogfuntom.github.io/Hairy/)
    (TBH, I was interested in learning Svelte and Sapper (later succeeded by SvelteKit), not in achieving anything in the area of genart itself)
-   a prototype of an [Opera extension that adds `rel="prerender"` links to web-comics](https://github.com/dogfuntom/ComicPrerender)
-   small Unity plugin that defines names of entities defined in editor as constants in C# code;
    the feedback was using it is more hassle than it worths;
    however, [somebody still continued developing it](https://github.com/starikcetin/unity-constants-generator),
    until yet another group of people made it redundant [by](https://github.com/starikcetin/unity-constants-generator/issues/1) implementing the same idea more fully
-   came up with an [idea of an L-system that directly transforms AST-systems](https://github.com/dogfuntom/Ast-system) instead of strings
    but only barely began implementing it (had to focus on work and the pause made me lose the enthusiasm)
-   a Wiki.js [website for a Telegram group](https://genwiki.fly.dev/) hosted on Fly.io – and on DigitalOcean before that, also tried Heroku (did administration only, not development)
-   a [website for an electronics repair shop](http://service-vps.ru/) – did development only, not administration

R&D as (a part of) a job:

-   a bare-bones build of a match-based shooter with fancy realistic graphics:
    we combined Unity, [multiplayer shooter sample](https://github.com/dogfuntom/FPSSample), free character models –
    but the impression we got is it’s not cost-effective
    - and similar experiments with *Unreal Engine* and Nanite (same client but neither multiplayer nor FPS)
-   a C# library for Unity (or any .NET) projects with [collections that are between List and LinkedList](https://github.com/dogfuntom/MiserCollections);
    byproduct of [railroad simulator](./LOCO);
    not all interface members are implemented – only those that we needed and a couple more
-   the [amusement park clicker](./amusement-park-builder) project (if not my whole career so far) turned out to be this
    even if at the very beginning we were somewhat confident in the idea
-   a prototype of a MonoGame mobile puzzle with triangular pieces – with the gameplay that visually resembles an equidissection (this puzzle type was popular in that year)
-   a build of Ungoogled Chromium – we wanted to add a custom browser to the REEE project – but after a successful compilation and some hello-world modifications we had to conclude that not a single of related ideas of ours is cost-effective to try
-   a prototype of a minimal FPS game made in XNA from scratch (no libraries or templates or other shortcuts was the requirement)

Lists and cheat sheets:

- [about registers and marks in vim emulators](https://gist.github.com/dogfuntom/a6a6c220b5baa0d5e59574edb2178454)
- <https://github.com/dogfuntom/Awesome-VS-Extensibility>
- list of [Typefaces for software developers](https://gist.github.com/dogfuntom/61e8adad036e6767b12828cdc145f091)
- list of [IoC containers for Unity](https://gist.github.com/dogfuntom/6aa1e7cb6e9bf3e482b6a6e790e28776)
- an idea of [code analyzer for Unity programmers](https://github.com/dogfuntom/ErrorProne.Unity)

Non-programming side-projects:

-   <https://github.com/dogfuntom/Awesome-Palette-Choice>
-   I gave the idea of a Smalltalk-inspired C# project to a programming podcaster (via e-mail) and he liked it so much that he quickly began [prototyping](https://github.com/nesteruk/CallSharp/) it
    (I attempted to help him but didn't manage to do even a single commit because, at the time, I lacked both relevant skills and time/motivation to rapidly "acquire" them)
-   a fun-fact blog in Telegram, in hiatus after a couple of posts
-   <https://alternativeto.net/user/dog_funtom/lists/>
