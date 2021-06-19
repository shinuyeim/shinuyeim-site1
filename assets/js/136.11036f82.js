(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{569:function(s,a,t){"use strict";t.r(a);var n=t(21),r=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"题目描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[s._v("#")]),s._v(" 题目描述")]),s._v(" "),t("p",[s._v("给你一个整数数组 salary ，数组里每个数都是 唯一 的，其中 salary[i] 是第 i 个员工的工资。")]),s._v(" "),t("p",[s._v("请你返回去掉最低工资和最高工资以后，剩下员工工资的平均值。")]),s._v(" "),t("h2",{attrs:{id:"示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("输入：salary = [4000,3000,1000,2000]"),t("br"),s._v("\n输出：2500.00000"),t("br"),s._v("\n解释：最低工资和最高工资分别是 1000 和 4000 。"),t("br"),s._v("\n去掉最低工资和最高工资以后的平均工资是 (2000+3000)/2= 2500")]),s._v(" "),t("p",[s._v("输入：salary = [1000,2000,3000]"),t("br"),s._v("\n输出：2000.00000"),t("br"),s._v("\n解释：最低工资和最高工资分别是 1000 和 3000 。"),t("br"),s._v("\n去掉最低工资和最高工资以后的平均工资是 (2000)/1= 2000")]),s._v(" "),t("p",[s._v("输入：salary = [6000,5000,4000,3000,2000,1000]"),t("br"),s._v("\n输出：3500.00000")]),s._v(" "),t("p",[s._v("输入：salary = [8000,9000,2000,3000,6000,1000]"),t("br"),s._v("\n输出：4750.00000")]),s._v(" "),t("p",[s._v("输入：nums = [6]"),t("br"),s._v("\n输出：[6]")])]),s._v(" "),t("p",[s._v("Tips:")]),s._v(" "),t("ol",[t("li",[s._v("3 <= salary.length <= 100")]),s._v(" "),t("li",[s._v("10^3 <= salary[i] <= 10^6")]),s._v(" "),t("li",[s._v("salary[i] 是唯一的。")]),s._v(" "),t("li",[s._v("与真实值误差在 10^-5 以内的结果都将视为正确答案。")])]),s._v(" "),t("h2",{attrs:{id:"算法设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#算法设计"}},[s._v("#")]),s._v(" 算法设计")]),s._v(" "),t("p",[s._v("这个题目并不难，只需要注意一点细节就行。其实这个题并不用排序，只需要找到最大值和最小值就行。只需要遍历一遍整个数组就可以，然而排序一般都做不到时间复杂度为O(n)。")]),s._v(" "),t("h2",{attrs:{id:"代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[s._v("#")]),s._v(" 代码")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("average")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" salary"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" salarySize"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" max "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" salary"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("min "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" salary"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),s._v(" sum "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" salarySize"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("salary"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" max"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            max "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" salary"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("salary"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" min"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            min "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" salary"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        sum "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v("salary"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sum "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" min "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" max"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("salarySize "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h2",{attrs:{id:"复杂度分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复杂度分析"}},[s._v("#")]),s._v(" 复杂度分析")]),s._v(" "),t("p",[s._v("时间复杂度：O(n)。选取最大值、最小值和求和的过程的时间代价都是 O(n)，故渐进时间复杂度为 O(n)。")]),s._v(" "),t("p",[s._v("空间复杂度：O(1)。这里只用到了常量级别的辅助空间。")])])}),[],!1,null,null,null);a.default=r.exports}}]);