module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");

    return {
        dir: {
            includes: "assets/layouts",
            output: "_site"
        }
    };
};