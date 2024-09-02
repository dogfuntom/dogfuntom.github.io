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
