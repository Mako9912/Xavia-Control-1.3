const Conexion = () => {
  app.use(
    `${global.app.config.get("api:prefix")}/${
      global.app.config.get("aws:folder").split("/")[0]
    }`,
    async (req, res) => {
      try {
        const response = await readFile(
          `${global.app.config.get("aws:folder").split("/")[0]}${req.url}`
        );
        response.pipe(res);
      } catch (e) {
        return res.status(404);
      }
    }
  );
};
