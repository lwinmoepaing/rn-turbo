import fs from "fs";
import path from "path";
import { FastifyInstance } from "fastify/types/instance";

// schema.

const routes = async (server: FastifyInstance) => {
  const versionDirs = path.join(__dirname);
  const versions = fs.readdirSync(versionDirs);

  versions.forEach((version) => {
    const isVersionPath = /^v\d$/.test(version);
    if (isVersionPath) {
      const apiPath = path.join(__dirname, version);
      const files = fs.readdirSync(apiPath);

      files.forEach((file) => {
        try {
          const fileName = `${file.replace(/(.ts)|(.js)/, "")}`;
          const apiName = `api/${version}/${fileName}`;
          server.register(require(`./${version}/${fileName}`), {
            prefix: apiName,
          });

          const checkDir = path.join(
            __dirname,
            `../src/${version}/${fileName}/${fileName}.schema`
          );

          const isExist =
            fs.existsSync(`${checkDir}.js`) || fs.existsSync(`${checkDir}.ts`);

          if (isExist) {
            const { schemas } = require(
              `../src/v1/${fileName}/${fileName}.schema`
            );

            for (const schema of schemas) {
              server.addSchema(schema);
            }
          }
        } catch (e) {
          console.log("Showing specific file-error:", file);
          console.log(e);
        }
      });
    }
  });
};

export default routes;
