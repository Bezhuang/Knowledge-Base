## 知识库

中心思想：所见即所得
基于[VitePress](https://vitepress.dev/zh)

### 项目结构

```
├─ docs                    # 项目根目录
│  ├─ .vitepress           # 配置目录
│  |  ├─ config.mts        # 配置文件
│  |  └─ dist              # 生产目录
│  ├─ 算法
|  |  ├─ ...
│  ├─ ...
│  └─ index.md             # 主页编辑
├─ package.json
└─ package-lock.json
```

### 启动/部署

```
npx vitepress dev --port 1234

npx vitepress build
```