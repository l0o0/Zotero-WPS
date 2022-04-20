# Zotero-WPS

项目简介

大家好，该项目的主要目标是给wps创建一个zotero插件。Zotero是一个很好的文献管理软件，开源而且多平台：win/linux/mac，wps同样多平台：win/linux/mac。在linux平台下，wps是最好的办公文档编辑软件，zotero是最好的文献管理软件，但是一直缺乏wps的zotero插件，限制了两者在linux平台下的使用。项目的最主要目标就是解决linux/win平台下，wps和zotero协同使用的问题。

我们主要是生物医学背景的zotero用户，亟需一个wps的zotero插件，对编程并不熟悉，但是我们希望通过这个项目把大家的力量汇集起来，先弄一个最简单的可以使用的wps的zotero插件。zotero-wps插件开发的交流QQ群：1029775161，欢迎对linux-wps-zotero插件感兴趣的同学加入，会一点javascript就更好了。

项目背景

1，文献管理软件
zotero
开源，多平台win/linux/mac，非常好用，有libreoffice、ms-office插件
https://www.zotero.org/

noteexpress
国产文献管理软件，非常好用，有office和wps插件，但是只能在win下使用，没有linux和mac版本
http://www.inoteexpress.com/aegean/

2，不同平台的管理和撰写论文的软件组合
win平台：zotero+office，noteexpress+office/wps
linux平台：zotero+libreoffice，但是libreoffice非常难用，比wps差远了
mac平台：不熟悉

3，为啥zotero用户自己开发zotero-wps插件
不论是在win和linux平台，wps都非常好用，在linux下几乎是唯一选择，libreoffice太难用了；但是wps官方一直不愿意开发zotero-wps插件，已经通过各种方式联系wps官方，他们明确回答没有开发插件的计划；zotero愿意开发，但是看不懂wps的接口中文文档。。。

4，如何开发zotero-wps插件
wps支持vba和javascript，vba只能在win上使用，所以zotero-wps插件的唯一选择是javascript；特别幸运的是，wps-linux已经可以支持javascript；因此，项目的最主要目标就是让javascript开发的zotero-wps插件在linux/win-wps上运行。

相关的讨论

zotero插件说明
https://www.zotero.org/support/plugins#word_processor_and_writing_integration

Zotero translator关于wps插件的讨论
https://github.com/l0o0/translators_CN/issues/43

zotero论坛关于wps插件的讨论
https://forums.zotero.org/discussion/comment/405041
https://forums.zotero.org/discussion/comment/405024

可以参考的对象

google docs的zotero插件
https://github.com/zotero/zotero-google-docs-integration

libreoffice的zotero插件

office的zotero插件

wps-javascript宏相关

wps开放平台，linux-wps支持javascript
https://open.wps.cn/docs/client/wpsLoad

wps二次开发官方代码库
https://code.aliyun.com/zouyingfeng/wps/tree/master

wps-javascript宏教程
https://www.kancloud.cn/pwedu/wps-js-macros/2259283

wps二次开发官方知乎专栏-张孝明
https://zhuanlan.zhihu.com/c_1256350603921915904


