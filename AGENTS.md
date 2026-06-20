# VanBlog — Agent Guide

## Architecture

pnpm monorepo (pnpm@8.11.0) with five packages:

| Package | Tech | Port | Entry |
|---------|------|------|-------|
| `packages/server` | NestJS 9, Mongoose, MongoDB, JWT | 3000 | `src/main.ts` |
| `packages/admin` | Umi.js 3, React 17, Ant Design Pro | 3002 | `src/` (umi routes) |
| `packages/website` | Next.js 13 (standalone output), React 18 | 3001 | `pages/` (file-based) |
| `packages/cli` | Node utility scripts | — | `index.js` |
| `packages/waline` | Waline comment server | 8360 | `node_modules/@waline/vercel/vanilla.js` |

Server depends on MongoDB (default: `mongodb://mongo:27017/vanBlog?authSource=admin`). Config loaded from `config.yaml` in `packages/server/` or env vars.

Docker all-in-one image (`mereith/van-blog`) bundles all packages + Caddy. Only Docker deployment is supported.

## Dev commands (root, via pnpm)

```sh
pnpm dev              # server + admin in parallel
pnpm dev:server       # server only (disables website subprocess)
pnpm dev:admin        # admin only (port 3002, HTTPS)
pnpm dev:website      # Next.js dev (port 3001, proxies /api to localhost:3000)
pnpm build            # server + website + admin in parallel
pnpm build:server     # @vanblog/server only
pnpm build:admin      # @vanblog/admin only
pnpm build:website    # @vanblog/theme-default only
```

## Test commands

```sh
pnpm --filter @vanblog/server test             # Jest (1 spec exists)
pnpm --filter @vanblog/theme-default test       # Vitest (1 spec exists)
pnpm --filter @vanblog/admin test               # Umi/Jest
```

## Notable quirks

- **Admin build requires `--openssl-legacy-provider`** — set via `NODE_OPTIONS` in its scripts.
- **website has `strict: false`** in tsconfig (server uses `strict: true`).
- **website `output: "standalone"`** — required for Docker; `.next/standalone/` is the runtime artifact.
- **Server uses `@nestjs/swagger` plugin** (`nest-cli.json`: `introspectComments: true`); API docs at `/swagger`.
- **No root-level lint/typecheck/format scripts** — run per-package. Prettier config extends `@umijs/fabric`.
- **Versioning** via `standard-version` (`pnpm release`, `release-major`, `release-minor`, `release-patch`).
- **No pre-commit hooks, no CI test runner** — CI only builds Docker images on tag pushes.
- **Admin dev server requires HTTPS** (Umi config).
- **Server uses `VANBLOG_DISABLE_WEBSITE=true`** to skip spawning the Next.js subprocess during local dev.
- **Static files** served by server at `/static/`. Swagger at `/swagger`.
