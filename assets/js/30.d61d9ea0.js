(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{310:function(e,a,t){"use strict";t.r(a);var s=t(14),v=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"严格模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#严格模式"}},[e._v("#")]),e._v(" 严格模式")]),e._v(" "),t("h3",{attrs:{id:"with-语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#with-语句"}},[e._v("#")]),e._v(" with 语句")]),e._v(" "),t("p",[e._v('在严格模式（"use strict"） 下不能使用with ，在非严格模式下可以使用with')]),e._v(" "),t("p",[e._v("with语句：可以形成自己的作用域，可以修改上下文中的变量\n不建议使用with，因为容易导致混淆错误和兼容性问题的根源")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var obj = {\n    name: '张三',\n    age: 20\n}\n\nwith(obj) {\n    console.log(name)\n    console.log(age)\n    name = '李四'\n    age = 25\n    console.log(name)\n    console.log(age)\n}\n")])])]),t("h3",{attrs:{id:"eval-语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eval-语句"}},[e._v("#")]),e._v(" eval 语句")]),e._v(" "),t("p",[e._v("在严格模式下不能使用eval，在非严格模式下可以使用eval\neval语句：可以接收一个字符串，然后将该字符串作为代码执行")]),e._v(" "),t("p",[e._v("不建议在开发中使用eval：")]),e._v(" "),t("ol",[t("li",[e._v("eval代码的可读性非常差（代码的可读性是高质量代码的重要原则）")]),e._v(" "),t("li",[e._v("eval是一个字符串，那么有可能在执行的过程中被可以篡改，那么可能会造成被攻击的风险")]),e._v(" "),t("li",[e._v("eval的执行必须经过js解释器，不能被js引擎优化")]),e._v(" "),t("li",[e._v("eval的执行会阻塞js引擎的执行，导致页面卡顿")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var evalStr = 'var message=\"hello\";console.log(message)'\neval(evalStr)\n\nconsole.log(message);// 非严格模式下不报错\n")])])]),t("p",[e._v("不加严格模式下面的代码就是静默错误")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('true.foo="abc"\n')])])]),t("h3",{attrs:{id:"开启严格模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开启严格模式"}},[e._v("#")]),e._v(" 开启严格模式")]),e._v(" "),t("p",[e._v('打包工具都会帮我们在每个js上加上严格模式（"use strict"）\n严格模式可以给文件加，也可以给函数加')]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// 给文件加严格模式\n"use strict"\n\n// 给函数加严格模式\nfunction fn() {\n    "use strict"\n}\n')])])]),t("h3",{attrs:{id:"严格模式限制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#严格模式限制"}},[e._v("#")]),e._v(" 严格模式限制")]),e._v(" "),t("ol",[t("li",[e._v("无法意外的创建全局变量")]),e._v(" "),t("li",[e._v("严格模式会使引起静默失败(silently fail,注：不报错也没有任何效果)的赋值操作抛出异常")]),e._v(" "),t("li",[e._v("严格模式下视图删除不可删除的属性，会抛出异常")]),e._v(" "),t("li",[e._v("严格模式下不允许函数参数有相同的名称")]),e._v(" "),t("li",[e._v("严格模式下，不能使用前缀 0 表示八进制 如：0123")]),e._v(" "),t("li",[e._v("在严格模式下，不允许使用 with")]),e._v(" "),t("li",[e._v("在严格模式下，eval函数不会向上引用变量")]),e._v(" "),t("li",[e._v("严格模式下，this绑定不会默认转成对象，严格模式下自执行函数（默认绑定）会指向 undefined")])]),e._v(" "),t("p",[e._v("不管是不是在严格模式下  setTimeout 如果传入的普通函数 this都是指向window,如果传入的是箭头函数 this指向上层作用域")]),e._v(" "),t("h2",{attrs:{id:"defineproperty属性描述符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#defineproperty属性描述符"}},[e._v("#")]),e._v(" defineProperty属性描述符")]),e._v(" "),t("p",[e._v("Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回此对象。")]),e._v(" "),t("p",[e._v("Object.defineProperty(obj, prop, descriptor)\n可接收三个参数：")]),e._v(" "),t("ol",[t("li",[e._v("obj：要在其上定义属性的对象")]),e._v(" "),t("li",[e._v("prop：要定义或修改的属性的名称或 Symbol")]),e._v(" "),t("li",[e._v("descriptor：要定义或修改的属性描述符")])]),e._v(" "),t("p",[e._v("返回值：被传递给函数的对象。")]),e._v(" "),t("h3",{attrs:{id:"属性描述符分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#属性描述符分类"}},[e._v("#")]),e._v(" 属性描述符分类")]),e._v(" "),t("p",[e._v("数据描述符：value, writable, enumerable, configurable\n存取描述符：get, set, enumerable, configurable")])])}),[],!1,null,null,null);a.default=v.exports}}]);