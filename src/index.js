const ampOptimizer = require('@ampproject/toolbox-optimizer').create();
const fs = require('fs');
const glob = require('glob');

module.exports = {
  onPostBuild: async ({ constants, utils }) => {
    const pattern = constants.PUBLISH_DIR + '/**/*.html';

    const files = await new Promise((resolve, reject) => {
      glob(pattern, (err, files) => {
        (err) ? reject(err) : resolve(files);
      });
    });

    await Promise.all(
      files.map(async (file) => {
        const html = await fs.promises.readFile(file, 'utf-8');
        console.log(`Transforming ${file}`);
        const optimizedHtml = await ampOptimizer.transformHtml(html);
        console.log(`Transformed ${file}`);
        await fs.promises.writeFile(file, optimizedHtml);
      })
    );

    utils.status.show({
      title: 'AMP Server-Side Rendering',
      summary: `Successfully rendered ${files.length} file(s).`
    });
  }
};
