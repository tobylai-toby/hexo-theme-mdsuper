# hexo-theme-mdsuper
![1706268121039](README/1706268121039.png)

[简体中文](https://github.com/tobylai-toby/hexo-theme-mdsuper/blob/main/README.zh-CN.md)

A [hexo](https://hexo.io) blog theme using [mdui-v2](https://mdui.org) with Material You (Material Design 3). 
Supports [twikoo](https://twikoo.js.org) comment system and [Prismjs](https://prismjs.com/) highlight.

## Install
```bash
cd your-hexo-site/
git clone https://github.com/tobylai-toby/hexo-theme-mdsuper.git themes/mdsuper
```
### Activation
go to `your-hexo-site/_config.yml` and change theme to mdsuper.
```yaml
theme: mdsuper
language: zh-CN # default is en
# set language to zh-CN if you are using Chinese
```
## Prismjs
mdsuper uses [prismjs](https://prismjs.com/) to highlight code.

`prism.js` and `prism.css` are included in the theme, but it's recommended to use a customized version because you can choose what languages and plugins to include.

Go to [prismjs download](https://prismjs.com/download.html) to download a customized download.
- Move `prism.js` to `your-hexo-site/themes/mdsuper/source/js/prism.js`.
- Move `prism.css` to `your-hexo-site/themes/mdsuper/source/css/prism.css`.

## Cover
```markdown
---
title: 
date: 
tags: 
categories: 
cover: cover image url
---
```

## Configuration
go to `your-hexo-site/themes/mdsuper/_config.yml` and configure it.
```yaml
theme:
  colorScheme: "#4fd8eb" # change color theme
  layout: dark # dark | light | auto

favicon: "" # path( or url) of avatar such as /favicon.png

drawer:
  menu: 
    Home: 
      icon: home 
      url: /
    ...

copyright: "" # text appear at the bottom of the page

# supports twikoo comment system
# see: https://twikoo.js.org/frontend.html
twikoo: 
  enable: false
  cdn: js/twikoo.all.min.js 
  # twikoo settings:
  envId: ""
  region: '' 
  path: location.pathname # will eval this, be careful
  lang: 'zh-CN' 

# display in the card at the top of the page under the subtitle
display_index_top:
  text: "dev-mdsuper"
  avatar: "" # path( or url) of avatar such as /avatar.png

# assets
mdui:
  css: https://unpkg.com/mdui@2.0.3/mdui.css
  js: https://unpkg.com/mdui@2.0.3/mdui.global.js
```

## Preview Site
[Tobylai.fun](https://tobylai.fun)