# RssTabs

基于Figma设计的RSS阅读器应用，使用Next.js和Tailwind CSS构建。

## 功能

- 现代化UI设计
- 响应式布局
- RSS订阅管理
- 文章阅读和收藏

## 技术栈

- Next.js
- React
- TypeScript
- Tailwind CSS
- Heroicons

## 开始使用

1. 克隆仓库
```bash
git clone https://github.com/yourusername/rsstabs.git
cd rsstabs
```

2. 安装依赖
```bash
npm install
```

3. 运行开发服务器
```bash
npm run dev
```

4. 在浏览器中打开 [http://localhost:3000](http://localhost:3000)

## 构建生产版本

```bash
npm run build
```

## 许可证

MIT

# Figma 项目

这是一个使用 Next.js 构建并部署到 Cloudflare Workers 的项目。

## 部署流程

本项目采用 GitHub Actions 自动化部署流程，无需本地构建和提交。

### 部署步骤

1. 将代码推送到 GitHub 仓库的 `main` 分支
2. GitHub Actions 会自动触发构建和部署流程
3. 构建后的应用会自动部署到 Cloudflare Workers

### 环境变量设置

在 GitHub 仓库中需要设置以下 Secrets：

- `CF_API_TOKEN`: Cloudflare API 令牌
- `CF_ACCOUNT_ID`: Cloudflare 账户 ID
- `D1_DATABASE_ID`: D1 数据库 ID
- `KV_ASSETS_ID`: KV 命名空间 ID

## 项目配置

项目使用 `wrangler.toml` 配置 Cloudflare Workers 部署：

```toml
name = "rss-doc"
main = "worker.js"
compatibility_date = "2023-12-01"

[site]
bucket = ".next"

[[d1_databases]]
binding = "DB"
database_name = "figma_app_db"
database_id = ""

[[kv_namespaces]]
binding = "ASSETS"
id = ""

[env.production]
name = "figma-app-prod"
```

实际部署时，GitHub Actions 会自动填充数据库和 KV 命名空间的 ID。
