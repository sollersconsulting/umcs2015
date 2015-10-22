module.exports = function(grunt, options) {
  return {
    typescript: {
      files: ["<%= globalConfig.src %>/ts/**/*.ts"],
      tasks: ["ts"]
    },
    livereload: {
      options: {
        livereload: options.globalConfig.livereloadPort
      },
      files: [
        "<%= globalConfig.src %>/index.html",
        "<%= globalConfig.src %>/html/**/*.html",
        "<%= globalConfig.src %>/css/**/*.css",
        "<%= globalConfig.src %>/js/**/*.js",
        "<%= globalConfig.src %>/ts/**/*.ts",
        "<%= globalConfig.src %>/img/**/*.{png,jpg,jpeg,gif,webp,svg}"
      ]
    }
  }
};
