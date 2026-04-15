import { defineConfig, loadEnv, type PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

function escapeHtmlAttribute(value: string) {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, import.meta.dirname, "");
  const googleSiteVerification = env.VITE_GOOGLE_SITE_VERIFICATION?.trim();

  const plugins: PluginOption[] = [react(), runtimeErrorOverlay()];

  if (process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined) {
    const { cartographer } = await import("@replit/vite-plugin-cartographer");
    const { devBanner } = await import("@replit/vite-plugin-dev-banner");
    plugins.push(cartographer(), devBanner());
  }

  if (googleSiteVerification) {
    plugins.push({
      name: "inject-google-site-verification",
      transformIndexHtml(html) {
        const verificationMetaTag = `    <meta name="google-site-verification" content="${escapeHtmlAttribute(googleSiteVerification)}" />`;
        return html.replace("</head>", `${verificationMetaTag}\n  </head>`);
      },
    });
  }

  return {
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "client", "src"),
        "@shared": path.resolve(import.meta.dirname, "shared"),
        "@assets": path.resolve(import.meta.dirname, "attached_assets"),
      },
    },
    root: path.resolve(import.meta.dirname, "client"),
    build: {
      outDir: path.resolve(import.meta.dirname, "dist/public"),
      emptyOutDir: true,
    },
    server: {
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  };
});
