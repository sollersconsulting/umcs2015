module.exports = function(grunt) {
  // global configuration
  var globalConfig = {
    src: "src",
    livereloadPort: 35730
  };

  // measures the time each task takes
  require("time-grunt")(grunt);

  // load grunt config
  require("load-grunt-config")(grunt, {
    config: {
      globalConfig: globalConfig
    }
  });

};
