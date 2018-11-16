---
title: 选择器设计
keywords: selector
description: 选择器设计
---


* 选择器是soul网关的核心概念，规则是针对具体选择器选择完成后的具体处理，他们的数据结构，可以参考前面的：[数据库设计](db.md)

 *  选择器列图：

       ![](https://yu199195.github.io/images/soul/selector.png)

  * 选择器详解：
     * 名称：为你的选择器起一个容易分辨的名字
     * 类型：custom flow 是自定义流量。full flow 是全流量。自定义流量就是请求会走你下面的匹配方式与条件。全流量则不走。
     * 匹配方式：and 或者or 是指下面多个条件是按照and 还是or。
     * 条件：
        * header：请求头，里面的module字段以match的值是什么。举个列子：你在header请求头加了个module字段值是order，那么就填写module字段match匹配order。
        * 可以添加多个条件，按照匹配类型这多个条件是and 还是or去匹配。
     * 是否开启：打开才会生效
     * 打印日志：打开的时候，当匹配上的时候，会打印匹配日志。
     * 执行顺序：当多个选择器的时候，执行顺序小的优先执行。 

 *   规则列图：
    
        ![](https://yu199195.github.io/images/soul/rule.png)

 * 规则详解：
     * 名称：为你的规则起一个容易分辨的名字
     * 匹配方式：and 或者or 是指下面多个条件是按照and 还是or。
     * 条件：
        * header：请求头，里面的method字段以match的值是什么。举个列子：你在header请求头加了个method字段值是findById，那么就填写method字段match匹配findById。
        * 可以添加多个条件，按照匹配类型这多个条件是and 还是or去匹配。
     * 是否开启：打开才会生效
     * 打印日志：打开的时候，当匹配上的时候，会打印匹配日志。
     * 执行顺序：当多个选择器的时候，执行顺序小的优先执行。 
     * 处理：每个插件的规则处理不一样，具体的差有具体的处理，具体请查看每个对应插件的处理。

*  选择器建议：选择器应该根据head头里面的module字段来匹配筛选流量。     
    