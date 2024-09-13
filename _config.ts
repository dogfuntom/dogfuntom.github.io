import lume from 'lume/mod.ts'
import abbr from 'npm:markdown-it-abbr'
import multilanguage from 'lume/plugins/multilanguage.ts'

// Set the markdown plugins
const markdown = {
  plugins: [abbr],
}

const site = lume({}, { markdown })

handleLanguages()

// Copy the "img" directory to _site/images
site.copy('img', 'images')
// Copy the content of "assets" directory to the root
site.copy('assets', '.')

site.ignore('docs')

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
