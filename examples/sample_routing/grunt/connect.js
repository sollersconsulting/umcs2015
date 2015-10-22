module.exports = function(grunt, options) {

  return {
    options: {
      port: 8888
    },
    default: {
      options: {
        base: ["<%= globalConfig.src %>"],
        livereload: options.globalConfig.livereloadPort,
        open: "http://localhost:<%= connect.options.port %>"
      }
    }
  }
};
