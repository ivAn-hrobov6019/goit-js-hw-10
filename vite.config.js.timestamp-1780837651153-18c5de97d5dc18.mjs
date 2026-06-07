// vite.config.js
import { defineConfig } from "file:///C:/Users/vangr/Desktop/projects/%D0%94%D0%B6%D0%B0%D0%B2%D0%B0%20%D1%81%D0%BA%D1%80%D0%B8%D0%BF%D1%82/goit-js-hw-10/node_modules/vite/dist/node/index.js";
import { glob } from "file:///C:/Users/vangr/Desktop/projects/%D0%94%D0%B6%D0%B0%D0%B2%D0%B0%20%D1%81%D0%BA%D1%80%D0%B8%D0%BF%D1%82/goit-js-hw-10/node_modules/glob/dist/esm/index.js";
import injectHTML from "file:///C:/Users/vangr/Desktop/projects/%D0%94%D0%B6%D0%B0%D0%B2%D0%B0%20%D1%81%D0%BA%D1%80%D0%B8%D0%BF%D1%82/goit-js-hw-10/node_modules/vite-plugin-html-inject/dist/index.mjs";
import FullReload from "file:///C:/Users/vangr/Desktop/projects/%D0%94%D0%B6%D0%B0%D0%B2%D0%B0%20%D1%81%D0%BA%D1%80%D0%B8%D0%BF%D1%82/goit-js-hw-10/node_modules/vite-plugin-full-reload/dist/index.js";
import SortCss from "file:///C:/Users/vangr/Desktop/projects/%D0%94%D0%B6%D0%B0%D0%B2%D0%B0%20%D1%81%D0%BA%D1%80%D0%B8%D0%BF%D1%82/goit-js-hw-10/node_modules/postcss-sort-media-queries/index.js";
var vite_config_default = defineConfig(({ command }) => {
  return {
    define: {
      [command === "serve" ? "global" : "_global"]: {}
    },
    root: "src",
    build: {
      sourcemap: true,
      rollupOptions: {
        input: glob.sync("./src/*.html"),
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return "vendor";
            }
          },
          entryFileNames: (chunkInfo) => {
            if (chunkInfo.name === "commonHelpers") {
              return "commonHelpers.js";
            }
            return "[name].js";
          },
          assetFileNames: (assetInfo) => {
            if (assetInfo.name && assetInfo.name.endsWith(".html")) {
              return "[name].[ext]";
            }
            return "assets/[name]-[hash][extname]";
          }
        }
      },
      outDir: "../dist",
      emptyOutDir: true
    },
    plugins: [
      injectHTML(),
      FullReload(["./src/**/**.html"]),
      SortCss({
        sort: "mobile-first"
      })
    ]
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx2YW5nclxcXFxEZXNrdG9wXFxcXHByb2plY3RzXFxcXFx1MDQxNFx1MDQzNlx1MDQzMFx1MDQzMlx1MDQzMCBcdTA0NDFcdTA0M0FcdTA0NDBcdTA0MzhcdTA0M0ZcdTA0NDJcXFxcZ29pdC1qcy1ody0xMFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcdmFuZ3JcXFxcRGVza3RvcFxcXFxwcm9qZWN0c1xcXFxcdTA0MTRcdTA0MzZcdTA0MzBcdTA0MzJcdTA0MzAgXHUwNDQxXHUwNDNBXHUwNDQwXHUwNDM4XHUwNDNGXHUwNDQyXFxcXGdvaXQtanMtaHctMTBcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3ZhbmdyL0Rlc2t0b3AvcHJvamVjdHMvJUQwJTk0JUQwJUI2JUQwJUIwJUQwJUIyJUQwJUIwJTIwJUQxJTgxJUQwJUJBJUQxJTgwJUQwJUI4JUQwJUJGJUQxJTgyL2dvaXQtanMtaHctMTAvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IHsgZ2xvYiB9IGZyb20gJ2dsb2InO1xyXG5pbXBvcnQgaW5qZWN0SFRNTCBmcm9tICd2aXRlLXBsdWdpbi1odG1sLWluamVjdCc7XHJcbmltcG9ydCBGdWxsUmVsb2FkIGZyb20gJ3ZpdGUtcGx1Z2luLWZ1bGwtcmVsb2FkJztcclxuaW1wb3J0IFNvcnRDc3MgZnJvbSAncG9zdGNzcy1zb3J0LW1lZGlhLXF1ZXJpZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IGNvbW1hbmQgfSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBkZWZpbmU6IHtcclxuICAgICAgW2NvbW1hbmQgPT09ICdzZXJ2ZScgPyAnZ2xvYmFsJyA6ICdfZ2xvYmFsJ106IHt9LFxyXG4gICAgfSxcclxuICAgIHJvb3Q6ICdzcmMnLFxyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgc291cmNlbWFwOiB0cnVlLFxyXG4gICAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgICAgaW5wdXQ6IGdsb2Iuc3luYygnLi9zcmMvKi5odG1sJyksXHJcbiAgICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgICBtYW51YWxDaHVua3MoaWQpIHtcclxuICAgICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCdub2RlX21vZHVsZXMnKSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiAndmVuZG9yJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiBjaHVua0luZm8gPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2h1bmtJbmZvLm5hbWUgPT09ICdjb21tb25IZWxwZXJzJykge1xyXG4gICAgICAgICAgICAgIHJldHVybiAnY29tbW9uSGVscGVycy5qcyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuICdbbmFtZV0uanMnO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGFzc2V0RmlsZU5hbWVzOiBhc3NldEluZm8gPT4ge1xyXG4gICAgICAgICAgICBpZiAoYXNzZXRJbmZvLm5hbWUgJiYgYXNzZXRJbmZvLm5hbWUuZW5kc1dpdGgoJy5odG1sJykpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gJ1tuYW1lXS5bZXh0XSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuICdhc3NldHMvW25hbWVdLVtoYXNoXVtleHRuYW1lXSc7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIG91dERpcjogJy4uL2Rpc3QnLFxyXG4gICAgICBlbXB0eU91dERpcjogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBwbHVnaW5zOiBbXHJcbiAgICAgIGluamVjdEhUTUwoKSxcclxuICAgICAgRnVsbFJlbG9hZChbJy4vc3JjLyoqLyoqLmh0bWwnXSksXHJcbiAgICAgIFNvcnRDc3Moe1xyXG4gICAgICAgIHNvcnQ6ICdtb2JpbGUtZmlyc3QnLFxyXG4gICAgICB9KSxcclxuICAgIF0sXHJcbiAgfTtcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBdWEsU0FBUyxvQkFBb0I7QUFDcGMsU0FBUyxZQUFZO0FBQ3JCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sYUFBYTtBQUVwQixJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLFFBQVEsTUFBTTtBQUMzQyxTQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsTUFDTixDQUFDLFlBQVksVUFBVSxXQUFXLFNBQVMsR0FBRyxDQUFDO0FBQUEsSUFDakQ7QUFBQSxJQUNBLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLFdBQVc7QUFBQSxNQUNYLGVBQWU7QUFBQSxRQUNiLE9BQU8sS0FBSyxLQUFLLGNBQWM7QUFBQSxRQUMvQixRQUFRO0FBQUEsVUFDTixhQUFhLElBQUk7QUFDZixnQkFBSSxHQUFHLFNBQVMsY0FBYyxHQUFHO0FBQy9CLHFCQUFPO0FBQUEsWUFDVDtBQUFBLFVBQ0Y7QUFBQSxVQUNBLGdCQUFnQixlQUFhO0FBQzNCLGdCQUFJLFVBQVUsU0FBUyxpQkFBaUI7QUFDdEMscUJBQU87QUFBQSxZQUNUO0FBQ0EsbUJBQU87QUFBQSxVQUNUO0FBQUEsVUFDQSxnQkFBZ0IsZUFBYTtBQUMzQixnQkFBSSxVQUFVLFFBQVEsVUFBVSxLQUFLLFNBQVMsT0FBTyxHQUFHO0FBQ3RELHFCQUFPO0FBQUEsWUFDVDtBQUNBLG1CQUFPO0FBQUEsVUFDVDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUEsTUFDUixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsV0FBVztBQUFBLE1BQ1gsV0FBVyxDQUFDLGtCQUFrQixDQUFDO0FBQUEsTUFDL0IsUUFBUTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1IsQ0FBQztBQUFBLElBQ0g7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
