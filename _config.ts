import lume from 'lume/mod.ts'
import abbr from 'npm:markdown-it-abbr'
import multilanguage from 'lume/plugins/multilanguage.ts'
import nav from 'lume/plugins/nav.ts'
import pagefind from 'lume/plugins/pagefind.ts'

// Set the markdown plugins
const markdown = {
  plugins: [abbr],
}

const site = lume({}, { markdown })

handleLanguages()

site.use(nav())
site.use(pagefind())

// Copy the "img" directory to _site/images
site.copy('img', 'images')
// Copy the content of "assets" directory to the root
site.copy('assets', '.')

site.ignore('docs')

site.preprocess(['.md'], (pages) => {
  const startName = 'start'
  const endName = 'end'
  for (const page of pages) {
    // Use end date as date (which in turn may be used for sorting).
    let date = new Date(page.data[endName])
    // (Also, fallback to start.)
    if (!date.valueOf()) date = new Date(page.data[startName])
    if (date.valueOf()) page.data.date = date
  }
})

function handleLanguages() {
  // "Convert" lang suffix into lang in data.
  site.parseBasename((basename) => {
    const match = basename.match(/(.+)_ru/)

    if (match) {
      const [, basename] = match

      return {
        lang: 'ru',
        basename,
      }
    }
  })

  // Use the readied lang data.
  site.use(
    multilanguage({
      languages: ['en', 'ru'], // Available languages
      defaultLanguage: 'en', // The default language
    })
  )
}

export default site
