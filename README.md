# AMP Server-Side Rendering Netlify Plugin
This [Netlify Build Plugin](https://docs.netlify.com/configure-builds/build-plugins/) does server-side rendering of your [AMP][1]-powered website.

## Usage
You can install this plugin in the Netlify UI from this [direct in-app installation link](https://app.netlify.com/plugins/netlify-plugin-amp-server-side-rendering/install) or from the [Plugins directory](https://app.netlify.com/plugins).

For file-based installation, add the following lines to your **netlify.toml** file:

```toml
[[plugins]]
package = "netlify-plugin-amp-server-side-rendering"
```

To complete file-based installation, from your project's base directory, use npm, yarn, or any other Node.js package manager to add the plugin to `devDependencies` in `package.json`.

```
npm install -D netlify-plugin-amp-server-side-rendering
```

[1]: https://amp.dev/
