# implementation notes

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

## formatting

According to cursory read of <https://github.com/prettier/prettier/issues/15141>
Prettier can't use global plugins for the second time in its history
and this bug is not fixed for months even after the “how” of the fix was “revealed”.

This makes it a clearly poor fit for `node_modules`-free project.
(While it's possible to contribute on this,
it's not cost-effective due to abundance of alternatives.)
