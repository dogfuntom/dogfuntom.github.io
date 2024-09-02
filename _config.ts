import lume from 'lume/mod.ts'
import abbr from 'npm:markdown-it-abbr'

// Set the markdown plugins
const markdown = {
  plugins: [abbr],
}

const site = lume({}, { markdown })

// Copy the "img" directory to _site/images
site.copy('img', 'images')
// Copy the content of "assets" directory to the root
site.copy('assets', '.')

site.ignore('/docs/')
site.ignore('README.md')

export default site
