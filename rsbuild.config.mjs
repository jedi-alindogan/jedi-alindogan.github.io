import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    entry: {
      index: './src/index.js',
    },
  },
  html: {
    template: './public/index.html',
  },
  server: {
    port: 3000,
  },
  output: {
    // Keep the existing GitHub Pages deployment directory.
    distPath: {
      root: 'build',
    },
    assetPrefix: '/',
  },
  tools: {
    rspack: {
      module: {
        rules: [
          {
            test: /\.pdf$/i,
            type: 'asset/resource',
          },
        ],
      },
    },
  },
});
