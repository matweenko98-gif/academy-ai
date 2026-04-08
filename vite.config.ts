import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const siteUrl = (env.VITE_SITE_URL || "").replace(/\/$/, "");

  return {
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),
      {
        name: "html-seo-site-url",
        transformIndexHtml(html) {
          const ogImage = siteUrl ? `${siteUrl}/favicon.png` : "/favicon.png";
          let out = html.replace(/__OG_IMAGE__/g, ogImage);
          if (siteUrl) {
            const canonical = `${siteUrl}/`;
            out = out.replace(
              "__SEO_CANONICAL__",
              `<link rel="canonical" href="${canonical}" />\n    <meta property="og:url" content="${canonical}" />`,
            );
            out = out.replace("__SCHEMA_URL_LINE__", `"url": "${siteUrl}",`);
          } else {
            out = out.replace("__SEO_CANONICAL__", "");
            out = out.replace("__SCHEMA_URL_LINE__", "");
          }
          return out;
        },
      },
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
      dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
    },
  };
});
