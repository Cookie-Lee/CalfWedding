(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c380afa"],{"269a":function(t,e){t.exports=function(t,e){var s="function"===typeof t.exports?t.exports.extendOptions:t.options;for(var n in"function"===typeof t.exports&&(s.directives=t.exports.options.directives),s.directives=s.directives||{},e)s.directives[n]=s.directives[n]||e[n]}},a32b:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("base-section",{attrs:{id:"servicessection",space:"36"}},[s("div",{staticClass:"heading mb-4"},[s("div",{staticClass:"chtitle"},[t._v(t._s(t.title))]),s("div",{staticClass:"engtitle"},[t._v(t._s(t.engTitle))])]),s("v-row",{attrs:{"no-gutters":""}},t._l(t.services,(function(e,n){return s("v-col",{key:n,staticClass:"servicesBlock",attrs:{cols:"12"}},[s("div",{directives:[{name:"intersect",rawName:"v-intersect",value:t.onIntersect,expression:"onIntersect"}],attrs:{"data-idx":n}},[s("transition",{attrs:{name:n%2===0?"my-fade-slide-left":"my-fade-slide-right"}},[s("v-row",{directives:[{name:"show",rawName:"v-show",value:t.show[n],expression:"show[i]"}],class:{"flex-row-reverse":n%2===1,".flex-row":n%2===0},attrs:{"no-gutters":"",align:"center"}},[s("v-col",{attrs:{cols:"12",md:"6"}},[s("div",{staticClass:"imgBlock"},[s("v-img",{staticClass:"img",attrs:{src:e.src,"aspect-ratio":"1.5"}}),s("span",{staticClass:"comment",domProps:{innerHTML:t._s(e.comment)}})],1)]),s("v-col",{attrs:{cols:"12",md:"6"}},[s("div",{staticClass:"textBlock px-8 py-8"},[s("div",{staticClass:"engTitle"},[t._v(t._s(e.engtitle))]),s("div",{staticClass:"chtTitle"},[t._v(t._s(e.chtitle))]),s("div",{staticClass:"content mt-2"},[t._v(t._s(e.content))])])])],1)],1)],1)])})),1)],1)},a=[],o=(s("a434"),s("8e5b")),r=s.n(o),i=s("4c44"),c=s.n(i),l=s("6c01"),m=s.n(l),u=s("3a9b"),h=s.n(u),d={name:"SectionServices",data:function(){return{show:[],engTitle:"SERVICES",title:"專業服務",services:[{src:r.a,chtitle:"婚禮攝影",engtitle:"WEDDING",content:"婚紗攝影、婚紗照是一種個人或是工作室所進行的商業活動，而現今的婚紗攝影受到了數位化的影響，除了拍照本身之外，通常需要與其他產業結合。拍攝婚禮進行中的新人與其親友、訪客。除了一般面對鏡頭擺出姿態的拍照形式之外，也包括報導式的攝影（例如跳舞中的新娘或是正在唱歌的親友）。",comment:'Photo by <a href="https://unsplash.com/@thomasw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Thomas William</a> on <a href="https://unsplash.com/s/photos/wedding?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'},{src:c.a,chtitle:"自助婚紗",engtitle:"PRE WEDDING",content:"自助婚紗是指新人自由選擇攝影師、造型師、禮服等等，不受婚紗攝影包套內容限制的一種攝影新消費形式，有別於制式大型的婚紗店，專門為想要有自己想法或概念的人所設計的婚紗照方式。相信很多新人拍婚紗照都有這樣一個煩惱，在婚紗包套裡面的林林總總產品，有些不想要的，想推卻推不掉，想要的還要在套系之外二次消費。",comment:'Photo by <a href="https://unsplash.com/@eugenivy_now?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Євгенія Височина</a> on <a href="https://unsplash.com/s/photos/wedding?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'},{src:m.a,chtitle:"孕婦寫真",engtitle:"PREGNANCY",content:"「孕婦裸體寫真」是指孕婦在懷孕期間所拍攝的寫真照片，亦在珍藏人生美好的回憶。日本專家稱，拍攝孕婦裸體寫真為即將成為人母的女性帶來奇妙的感受，也有助緩解對赤裸的恐懼。",comment:'Photo by <a href="https://unsplash.com/@jonathanborba?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jonathan Borba</a> on <a href="https://unsplash.com/s/photos/pregnancy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'},{src:h.a,chtitle:"家庭寫真",engtitle:"FAMALIES",content:"是一個家庭團聚的紀念，是一個組織團結築夢的表現，是每一個家庭成員發自內心對家團結和諧的凝聚力。一張全家福，定格了家的團聚時刻，凝聚親情、凝聚夢想，是人們追尋幸福的影像記錄。一張全家福，像族譜一樣記載家庭、企業、組織的成員變化和重要時刻，傳遞出不同家的情感和夢想。",comment:'Photo by <a href="https://unsplash.com/@nate_dumlao?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nathan Dumlao</a> on <a href="https://unsplash.com/s/photos/families?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'}]}},methods:{onIntersect:function(t,e){var s=t[0].target.dataset.idx;t[0].isIntersecting&&this.show.splice(s,1,!0)}}},p=d,f=(s("e673"),s("2877")),v=s("6544"),_=s.n(v),g=s("62ad"),x=s("adda"),w=s("0fd9"),y=s("269a"),C=s.n(y),b=s("90a2"),T=Object(f["a"])(p,n,a,!1,null,"6527fe51",null);e["default"]=T.exports;_()(T,{VCol:g["a"],VImg:x["a"],VRow:w["a"]}),C()(T,{Intersect:b["a"]})},a434:function(t,e,s){"use strict";var n=s("23e7"),a=s("23cb"),o=s("a691"),r=s("50c4"),i=s("7b0b"),c=s("65f0"),l=s("8418"),m=s("1dde"),u=m("splice"),h=Math.max,d=Math.min,p=9007199254740991,f="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!u},{splice:function(t,e){var s,n,m,u,v,_,g=i(this),x=r(g.length),w=a(t,x),y=arguments.length;if(0===y?s=n=0:1===y?(s=0,n=x-w):(s=y-2,n=d(h(o(e),0),x-w)),x+s-n>p)throw TypeError(f);for(m=c(g,n),u=0;u<n;u++)v=w+u,v in g&&l(m,u,g[v]);if(m.length=n,s<n){for(u=w;u<x-n;u++)v=u+n,_=u+s,v in g?g[_]=g[v]:delete g[_];for(u=x;u>x-n+s;u--)delete g[u-1]}else if(s>n)for(u=x-n;u>w;u--)v=u+n-1,_=u+s-1,v in g?g[_]=g[v]:delete g[_];for(u=0;u<s;u++)g[u+w]=arguments[u+2];return g.length=x-n+s,m}})},e673:function(t,e,s){"use strict";s("e908")},e908:function(t,e,s){}}]);
//# sourceMappingURL=chunk-2c380afa.8b33be4d.js.map