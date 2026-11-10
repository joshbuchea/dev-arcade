module.exports = async function (eleventyConfig) {
  const { HtmlBasePlugin } = await import("@11ty/eleventy");

  // Copy everything from src/static to root of _site (not processed)
  eleventyConfig.addPassthroughCopy({"src/static": "."});

  // Prefix absolute URLs with pathPrefix (e.g. /dev-arcade/ on GitHub Pages)
  eleventyConfig.addPlugin(HtmlBasePlugin);

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    pathPrefix: process.env.PATH_PREFIX || "/",
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
