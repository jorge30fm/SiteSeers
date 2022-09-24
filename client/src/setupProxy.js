import { createProxyMiddleware } from "http-proxy-middleware";

export default function (app) {
  app.use(
    "/graphql",
    createProxyMiddleware({
      target: "http://localhost:3001",
      changeOrigin: true,
    })
  );
};
