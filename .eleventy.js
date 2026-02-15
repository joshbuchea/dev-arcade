module.exports = function (eleventyConfig) {
  // Copy images to output (now in src/images)
  eleventyConfig.addPassthroughCopy("src/images");

  // Copy static files to output (now in src/static)
  eleventyConfig.addPassthroughCopy("src/static");

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
