# hexo-theme-mdsuper
![1706268121039](README/1706268121039.png)

一个使用 [mdui-v2](https://mdui.org) 的 Material You (Material Design 3) 风格的 [hexo](https://hexo.io) 博客主题。
支持 [twikoo](https://twikoo.js.org) 评论系统和 [Prismjs](https://prismjs.com/) 高亮。

## 安装
```bash
cd your-hexo-site/
git clone https://github.com/tobylai-toby/hexo-theme-mdsuper.git themes/mdsuper
```
### 激活
去 `your-hexo-site/_config.yml` 把主题改成 `mdsuper`
```yaml
theme: mdsuper
language: zh-CN # 默认是 en(default.yml)
# 中文改成 zh-CN
```
## Prismjs
mdsuper 使用 [prismjs](https://prismjs.com/) 高亮代码.

`prism.js` 和 `prism.css` 已经包括在主题里了， 但是仍然建议你去使用一个自定义了的`prism`因为这样你可以选择要启用的语言或插件。

去 [prismjs download](https://prismjs.com/download.html) 下载一个自定义的版本
- 移动 `prism.js` 到 `your-hexo-site/themes/mdsuper/source/js/prism.js`
- 移动 `prism.css` 到 `your-hexo-site/themes/mdsuper/source/css/prism.css`

## 文章封面
```markdown
---
title: 
date: 
tags: 
categories: 
cover: 封面URL
---
```

## 配置
去 `your-hexo-site/themes/mdsuper/_config.yml` 进行配置
```yaml
theme:
  colorScheme: "#4fd8eb" # 修改主题颜色
  layout: dark # dark | light | auto 暗/亮/跟随系统

drawer: # 这里是抽屉导航
  menu: 
    Home: # 显示的文字
      icon: home # mdui图标名
      url: /
    ...

copyright: "" # 页面底部版权信息 例如 © <date> <name>

# 支持twikoo评论系统
# 配置详情： https://twikoo.js.org/frontend.html#%E9%80%9A%E8%BF%87-cdn-%E5%BC%95%E5%85%A5
twikoo: 
  enable: false
  cdn: js/twikoo.all.min.js 
  # twikoo settings:
  envId: ""
  region: '' 
  path: location.pathname # will eval this, be careful
  lang: 'zh-CN' 

# assets
mdui:
  css: https://unpkg.com/mdui@2.0.3/mdui.css
  js: https://unpkg.com/mdui@2.0.3/mdui.global.js
```