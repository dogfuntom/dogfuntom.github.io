import lume from "lume/mod.ts";
import abbr from "npm:markdown-it-abbr";

// Set the markdown plugins
const markdown = {
  plugins: [abbr],
};

const site = lume({}, { markdown });

site.copy("assets", ".");

site.ignore("README.md");

export default site;
