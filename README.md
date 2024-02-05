# hexo-theme-mdsuper
![1706268121039](README/1706268121039.png)

[简体中文](https://github.com/tobylai-toby/hexo-theme-mdsuper/blob/main/README.zh-CN.md)

A [hexo](https://hexo.io) blog theme using [mdui-v2](https://mdui.org) with Material You (Material Design 3). 
Supports some comment system and [Prismjs](https://prismjs.com/) highlight.

## Feature
- front-matter `photos` gallery (using fancybox & carousel)
- prismjs highlight
- comment systems support
  - [twikoo](https://twikoo.js.org)
  - [gitalk](https://github.com/gitalk/gitalk)
  - [waline](https://waline.js.org)

- mdui v2
- fancybox for images
- local search for posts (requires [wzpan/hexo-generator-search](https://github.com/wzpan/hexo-generator-search))

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

## Builtin Layouts
- `post`: post layout
- `onlycontent`: only content layout (comments are still enabled, disable it by using frontmatter `comments: false`)

## Configuration
go to `your-hexo-site/themes/mdsuper/_config.yml` and configure it.
```yaml
theme:
  colorScheme: "#4fd8eb" # change color theme
  layout: dark # dark | light | auto

favicon: "" # path( or url) of avatar such as /favicon.png

drawer:
  always_open: false
  menu: 
    Home: 
      icon: home 
      url: /
    ...

copyright: "" # text appear at the bottom of the page

comment:
  system: none # none | twikoo | gitalk
  twikoo:  # see: https://twikoo.js.org/frontend.html
    cdn: 
      js: /js/twikoo.all.min.js # or use cdn such as https://cdn.bootcdn.net/ajax/libs/twikoo/1.6.31/twikoo.all.min.js
    
    # twikoo settings:
    envId: ""
    region: '' # region, see twikoo documentation
    path: location.pathname # will eval this, be careful
    lang: 'zh-CN' 
  gitalk: # see https://github.com/gitalk/gitalk
    cdn:
      css: /css/gitalk.css
      js: /js/gitalk.min.js

    # gitalk settings:
    clientID: '' # GitHub Application Client ID
    clientSecret: '' # GitHub Application Client Secret
    repo: '' # GitHub repo
    owner: '' # GitHub repo owner
    admin: [] # GitHub repo owner and collaborators, only these guys can initialize github issues
    id: decodeURIComponent(location.pathname)# will eval this, be careful
    # this is like /2024/01/24/xxxxxxxxxx ,make sure the length < 50
    # Ensure uniqueness and length less than 50
    distractionFreeMode: false  # Facebook-like distraction free mode
    #proxy: 
    # you may need a reverse proxy to support cors, default url may not work in some places(such as cn)
  waline:
    #...

# supports twikoo comment system
# this way only supports v0.2.0-beta, move to "comment" instead
# see: https://twikoo.js.org/frontend.html
# twikoo: 
#   enable: false
#   cdn: js/twikoo.all.min.js 
#   # twikoo settings:
#   envId: ""
#   region: '' 
#   path: location.pathname # will eval this, be careful
#   lang: 'zh-CN' 

# display in the card at the top of the page under the subtitle
display_index_top:
  text: "dev-mdsuper"
  avatar: "" # path( or url) of avatar such as /avatar.png

# assets
mdui:
  css: https://unpkg.com/mdui@2.0.3/mdui.css
  js: https://unpkg.com/mdui@2.0.3/mdui.global.js

# install https://github.com/wzpan/hexo-generator-search and configure it following the readme
search:
  enable: true
  xml: /search.xml # only supports xml
```

## Preview Site
[Tobylai.fun](https://tobylai.fun)