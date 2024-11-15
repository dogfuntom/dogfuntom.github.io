# implementation notes

## favicon

### no root

There’s intentionally no favicon.ico at root –
precisely to prevent the associated fallback mechanism.
This is because of the nature of user website and project websites at GitHub Pages.
Since the latter end up in subdirectory,
if something is ever misconfigured with their favicons,
the fallback to former’s favicon will happen.
But surely irrelevant favicon is worse than no favicon at all.

### size

A small ICO is enough – vector or large icons are needed for pinning
to Home Screen or Start or something analogous –
and it doesn't make much sense to pin a portfolio website in such a way.

## HTML, Vento

> A header element is intended to usually contain a heading
> (an h1–h6 element or an hgroup element), but this is not required.
>
> — <https://html.spec.whatwg.org/multipage/sections.html#the-header-element>

-   Vento fails to parse template inclusion
    if there’s a line-break between the keyword and the path string –
    `{{ include ␤ "foo/bar.vto" }}`
-   Vento can't call function before it’s defined –
    a.k.a. forward reference –
    i.e. there’s no hoisting

## Lume

Lume won't accept year-month dates (day of the month is required)
when done as prefix of filename, so either need to fake the day
or introduce a special field like in the [Sort pages example](https://lume.land/plugins/search/#sort-pages)

### data model cheat sheet

- naming in path (name of folder/file): defines `url`
- `url`: defined by the naming of the path (but can be overridden)
- `id`: only some plugins (`multilanguage`, etc.) require it
- `title`: not directly required, just a convention
- `basename`: <https://lume.land/docs/advanced/the-data-model/>

## Deno

-   `deno task` in `launch.json` results in a run
    but no debugger attachment happens –
    only the “bare” `deno run` should be used
-   `deno … --allow-run` permission is needed for Nav plugin <https://github.com/lumeland/lume.land/issues/133>

## formatting

According to cursory read of <https://github.com/prettier/prettier/issues/15141>
Prettier can't use global plugins for the second time in its history
and this bug is not fixed for months even after the “how” of the fix was “revealed”.

This makes it a clearly poor fit for `node_modules`-free project.
(While it’s possible to contribute on this,
it’s not cost-effective due to abundance of alternatives.)

## CSS

-   LinkText and VisitedText don’t work in Edge (are the same color)
-   `max-width`: `83ch` (the initial commit value) –
    this was my inattentive reading of
    [Popular sites with limited width](https://www.mediawiki.org/wiki/Reading/Web/Desktop_Improvements/Features/Limiting_content_width#Popular_sites_with_limited_width):
    this is the middle between WHO Cyrillic and someone else’s Latin
    but this fails to take into account that
    WHO itself actually has bigger number for Latin than for Cyrillic

## Markdown

### render PlantUML

`markdown-it-plantuml-ex2` doesn’t work:

-   nothing rendered but also there are no traces in resultant HTML either;
    i.e. it successfully “eats up” the input but fails to output
-   there’s a message “No diagram found” but:
    - its of information type, not an exception, so no stack trace
    - this very string is not in the repo/project (according to GitHub’s search)

`markdown-it-plantuml` works.

### include/inline/inject/insert text from another file

`@nicco.io/markdown-it-import` works but:

- no relative paths: even `.` is treated as the root of a project

`markdown-it-import` doesn’t work:
“The "path" argument must be of type string. Received undefined”
(one possibility is it fails to get the current path).

`MDX` would be overkill for this in an ideal world.
In practice, it seems it would be more cost effective to use it
instead of researching the plugins above.
(Though maybe it would have a similar quantity of its own pitfalls.)
