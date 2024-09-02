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
