(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{232:function(t,s,a){t.exports=a.p+"assets/img/github-pages.02f87e38.png"},233:function(t,s,a){t.exports=a.p+"assets/img/pages-setting.3b587d17.png"},234:function(t,s,a){t.exports=a.p+"assets/img/blog-catalog.a25708b3.png"},235:function(t,s,a){t.exports=a.p+"assets/img/aliyun-cname.9991fce4.png"},236:function(t,s,a){t.exports=a.p+"assets/img/cname-catalog.6477c7a3.png"},290:function(t,s,a){"use strict";a.r(s);var e=a(1),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("原 wordpress 博客已经停止更新了一年多，鉴于继续购买服务器仅仅用于承载一个静态博客，并且也无心维护服务器，显得有点浪费，github pages 是一个不错的选择。早在一年前就想用 vuepress 来发布博客内容，工作上事情太多，并且平常发布在 "),e("a",{attrs:{href:"http://www.alloyteam.com/",title:"alloyteam",target:"_blank",rel:"noopener noreferrer"}},[t._v("alloyteam"),e("OutboundLink")],1),t._v("  平台上，闲暇休息片刻，又一拖再拖，直到最近，终于算是重新恢复了。")]),t._v(" "),e("p",[t._v("有一个自己的小站，感觉有属于自己的一片天空，不管更新的频率高低，它是闲暇片刻之际，可以来到的一个园子。")]),t._v(" "),e("h3",{attrs:{id:"github-pages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#github-pages"}},[t._v("#")]),t._v(" github pages")]),t._v(" "),e("p",[t._v("github pages 是一个依赖于 github 平台可以承载个人静态页面的功能，具体参考 "),e("a",{attrs:{href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("pages.github.com"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[t._v("新建和 clone 到本地")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/username/username.github.io\n")])])]),e("p",[t._v("写入内容")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('cd username.github.io\n\necho "Hello World" > index.html\n')])])]),e("p",[t._v("提交")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('git add --all\n\ngit commit -m "Initial commit"\n\ngit push -u origin master\n')])])]),e("p",[t._v("访问 https://username.github.io 就能看到页面。")]),t._v(" "),e("h3",{attrs:{id:"github-pages-设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#github-pages-设置"}},[t._v("#")]),t._v(" github pages 设置")]),t._v(" "),e("p",[t._v("github pages 设置页面，对于不常使用的人，藏得有点深，点击设置后，默认 Options 选项可以继续拉动到底部（一开始看到页面无滚动条，差点以为无法下拉，还寻思了半天 ~尴尬~），可以看到其他选项。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(232),alt:"github-pages"}})]),t._v(" "),e("h4",{attrs:{id:"入口页面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#入口页面"}},[t._v("#")]),t._v(" 入口页面")]),t._v(" "),e("p",[t._v("github pages 分两种类型，个人/组织站点，项目名只能用 username.github.io 这种格式。访问 https://username.github.io 默认会以 master 分支下 根目录 index.html 作为静态页面，无法更改其分支和渲染路径。")]),t._v(" "),e("p",[t._v("还有一种是应用类，项目名任意取，可以设置静态页面路径为 master分支的 docs 目录，及 gh-pages 分支的根目录两种形式。对于拥有个人独立域名的用户，建议用后一种更灵活的方式。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(233),alt:"pages-setting"}})]),t._v(" "),e("h3",{attrs:{id:"vuepress"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuepress"}},[t._v("#")]),t._v(" vuepress")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.vuepress.cn/guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress"),e("OutboundLink")],1),t._v("是一个极简单的静态网站生成器，具体参考"),e("a",{attrs:{href:"https://www.vuepress.cn/guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("指引"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("我们参照文档，最终搭建的简单目录结构如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(234),alt:"目录结构"}})]),t._v(" "),e("h4",{attrs:{id:"主题和渲染内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主题和渲染内容"}},[t._v("#")]),t._v(" 主题和渲染内容")]),t._v(" "),e("p",[t._v("vuepress 会把 README.md 内容当作 vue 文件渲染，我们需要将其他 markdown 内容导出到这个入口文件，这一点需要借助 vue 模板语法。在.vuepress/components 定义的组件，可以在 README.md 中全局引入。")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("BlogPostList")]),t._v(" \n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":pages")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$site.pages"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" \n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":page-size")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$site.themeConfig.pageSize"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" \n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":start-page")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$site.themeConfig.startPage"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n")])])]),e("p",[t._v("其中 BlogPostList 既在 components 下定义的组件，$site.pages 可以获取到全部文章，然后在组件内遍历。具体主题用法参考 "),e("a",{attrs:{href:"https://www.vuepress.cn/theme/writing-a-theme.html#%E4%BD%BF%E7%94%A8%E6%8F%92%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress 主题"),e("OutboundLink")],1),t._v("。此主题是在此基础上 "),e("a",{attrs:{href:"https://github.com/bencodezen/vuepress-blog-boilerplate",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/bencodezen/vuepress-blog-boilerplate"),e("OutboundLink")],1),t._v(" 进行改造的。")]),t._v(" "),e("h4",{attrs:{id:"自定义域名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义域名"}},[t._v("#")]),t._v(" 自定义域名")]),t._v(" "),e("p",[t._v(".vuepress public 目录下的文件会直接打包到根目录最外层作为静态文件，我们可以新建一个 "),e("code",[t._v("CNAME")]),t._v(" 文件到 public 目录，然后添加上需要映射的自定义域名，打包上传。最后在域名服务商控制台将CNAME 指向  https://username.github.io。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(235),alt:"cnam"}}),t._v(" "),e("img",{attrs:{src:a(236),alt:"cnam"}})]),t._v(" "),e("h3",{attrs:{id:"发布部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发布部署"}},[t._v("#")]),t._v(" 发布部署")]),t._v(" "),e("h4",{attrs:{id:"构建发布"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构建发布"}},[t._v("#")]),t._v(" 构建发布")]),t._v(" "),e("p",[t._v("前面已经提到，基于 username.github.io 形式的 github pages 站点 默认只能部署在 master 根目录下。我们通常会采用另一种自定义应用的形式，基于 master 分支开发，然后把构建的内容部署推送到 gh-pages 分支中，这样便于将开发分支和部署分支隔离开来。")]),t._v(" "),e("h4",{attrs:{id:"husky集成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#husky集成"}},[t._v("#")]),t._v(" husky集成")]),t._v(" "),e("p",[t._v("通过 husky 设置在每次 push 代码时自动运行部署脚本。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/usr/bin/env sh")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 确保脚本抛出遇到的错误")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" -e\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成静态文件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dist\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入生成的文件夹")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" docs/.vuepress/dist\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果是发布到自定义域名")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# echo 'www.example.com' > CNAME")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -A\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deploy'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'文章推送到 github pages中...'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -f git@github.com:wang-fu/wang-fu.github.iocc.git master:gh-pages\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" -\n")])])]),e("h3",{attrs:{id:"多语言和时区问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多语言和时区问题"}},[t._v("#")]),t._v(" 多语言和时区问题")]),t._v(" "),e("p",[t._v("在修改其中一篇文章的时间，然后发布测试后，发展首页并没有渲染出刚刚部署的文章。通过 debug 发现博客列表渲染会过滤掉文章发布时间大于当前系统时间的文章。")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" isReadyToPublish "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("frontmatter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("date"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isReadyToPublish"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 显示文章")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("理论上，这样设计是符合逻辑的，但发现 item.frontmatter.date 和实际写的时间不一致，定位到 vuepress 解析配置文件逻辑，发现 vuepress 对 FrontMatter "),e("code",[t._v("YYYY-MM-DDTHH:mm:ss.sssZ")]),t._v("时间格式转 UTC 时间处理，比北京时间会早 8 小时，造成最后对比的时候出现异常。所以文章头部的YAML front matter 时间最好加上时区"),e("code",[t._v("YYYY-MM-DDTHH:mm:ss+0800")]),t._v("。或者用"),e("a",{attrs:{href:"https://tools.ietf.org/html/rfc2822#page-14",target:"_blank",rel:"noopener noreferrer"}},[t._v("rfc"),e("OutboundLink")],1),t._v("格式表示时间"),e("code",[t._v("YYYY/MM/DDTHH:mm:ss")]),t._v("，就不会被FrontMatter 解析成UTC 时间。")]),t._v(" "),e("p",[t._v("在定位问题的过程中，还有一个小插曲。最开以为时间显示不对是本地语言配置导致，然后进行本地语言配置发现语言设置无效。最后通过 debug vuepress源码才发现 站点多语言配置"),e("a",{attrs:{href:"https://www.vuepress.cn/guide/i18n.html#%E7%AB%99%E7%82%B9%E5%A4%9A%E8%AF%AD%E8%A8%80%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"}},[t._v("locales"),e("OutboundLink")],1),t._v(" 和 主题"),e("a",{attrs:{href:"https://www.vuepress.cn/guide/i18n.html#%E7%AB%99%E7%82%B9%E5%A4%9A%E8%AF%AD%E8%A8%80%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"}},[t._v("多语言设置"),e("OutboundLink")],1),t._v("是有不同的作用。全局计算属性 "),e("code",[t._v("this.$lang")]),t._v(" 不会读取到主题的语言设置。")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("$lang")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$page"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("frontmatter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$localeConfig"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'en-US'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"评论"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#评论"}},[t._v("#")]),t._v(" 评论")]),t._v(" "),e("p",[t._v("评论暂时接入 "),e("a",{attrs:{href:"https://github.com/gitalk/gitalk",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitalk"),e("OutboundLink")],1),t._v("，具体参考文档。需要注意的地方是使用 GitHub Apps 记得开启 issuse 权限，同时配置的时候 repo 不用填写站点全称，仅仅项目名即可，owner 填写个人 GitHub Apps 配置过的账户，这些填写不正确，都会返回 404。")]),t._v(" "),e("h3",{attrs:{id:"结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#结"}},[t._v("#")]),t._v(" 结")]),t._v(" "),e("p",[t._v("总之而言，vuepress 搭配 github pages 是一个非常不错的选择，各种文档记得看仔细，不然容易白费时间去定位些不必要的问题。")])])}),[],!1,null,null,null);s.default=n.exports}}]);