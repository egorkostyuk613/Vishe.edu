import { defineConfig } from 'vite';
// plugins
import { vitePluginTypescriptTransform } from 'vite-plugin-typescript-transform';
import tsconfigPaths from 'vite-tsconfig-paths';
import reactPlugin from '@vitejs/plugin-react';
import SVGRPlugin from 'vite-plugin-svgr';
import watcher from 'vite-plugin-checker';
import mkcert from 'vite-plugin-mkcert';

const config = defineConfig(() => {
  return {
    base: '/',
    build: { outDir: './build', assetsDir: 'static' },
    plugins: [
      mkcert(),
      // todo: remove after esbuild (or vite itself or any plugin else) will support tc39 decorators proposal
      vitePluginTypescriptTransform({
        enforce: 'pre',
        filter: { files: { include: /\.ts?$/ } },
        tsconfig: { location: 'tsconfig.json' },
      }),

      tsconfigPaths(),

      reactPlugin({ babel: { plugins: ['macros'] } }),
      SVGRPlugin({
        svgrOptions: { exportType: 'named', svgo: false, titleProp: true, ref: true },
        include: '**/*.svg',
      }),

      watcher({
        typescript: true,
        overlay: {
          initialIsOpen: false,

          badgeStyle: 'opacity: .3; pointer-events: none;',
        },
        terminal: true,
        vueTsc: false,
      }),

    ],

    server: { open: true, host: true, port: 3000, https: false },
    preview: { open: true, host: true, port: 3000 },
  };
});

export { config as default };
