// worker.js - Cloudflare Worker入口点
export default {
  async fetch(request, env, ctx) {
    // 基本URL
    const url = new URL(request.url);

    try {
      // 处理静态资源请求
      if (url.pathname.startsWith('/_next/') ||
        url.pathname.startsWith('/images/') ||
        url.pathname.match(/\.(js|css|svg|png|jpg|jpeg|gif|ico)$/)) {
        // 从KV存储或R2获取静态资源
        const asset = await env.ASSETS.fetch(request);
        if (asset) return asset;
      }

      // 处理API请求
      if (url.pathname.startsWith('/api/')) {
        // 可以在这里实现API路由的特殊处理
        return new Response(JSON.stringify({ message: "API Works!" }), {
          headers: { "Content-Type": "application/json" }
        });
      }

      // 获取HTML页面
      // 这里假设你已经有了预构建的HTML页面
      let response = await env.ASSETS.fetch(request);

      // 如果找不到请求的路径，尝试提供index.html
      if (!response || response.status === 404) {
        response = await env.ASSETS.fetch(new Request(`${url.origin}/index.html`, request));
      }

      return response || new Response("Not Found", { status: 404 });
    } catch (e) {
      return new Response(`Error: ${e.message}`, { status: 500 });
    }
  }
}; 