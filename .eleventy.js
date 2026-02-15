module.exports = function (eleventyConfig) {
  // Copy everything from src/static to root of _site (not processed)
  eleventyConfig.addPassthroughCopy({"src/static": "."});

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
