module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        extraFiles: ["database.db"],
      },
    },
  },
  transpileDependencies: ["vuetify"],
};
