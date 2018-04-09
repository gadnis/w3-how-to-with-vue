webpackJsonp([8],{"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/more/ModalBox.vue":function(e,o,s){"use strict";o.a={name:"modal-box",props:{isClosable:Boolean,isActive:Boolean},methods:{close:function(){this.$emit("close"),this.$emit("update:isActive",!1)},closeDim:function(){this.isClosable&&this.close()}}}},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/examples/more/BottomModal.vue":function(e,o,s){"use strict";var l=s("./src/components/more/ModalBox.vue");o.a={name:"bottom-modal-example",data:function(){return{modal:{isActive:!1}}},components:{ModalBox:l.a}}},'./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-608b6cee","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/more/ModalBox.vue':function(e,o,s){o=e.exports=s("./node_modules/css-loader/lib/css-base.js")(!1),o.push([e.i,".modal-box{display:none;position:fixed;z-index:90;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#000;background-color:rgba(0,0,0,.4);animation-name:fadeIn;animation-duration:.4s}.modal-box.is-active{display:block}.modal-box .modal-content{position:relative;background-color:#fefefe;margin:auto;padding:0;border:1px solid #888;width:80%;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}.modal-box .modal-content .modal-header{padding:2px 16px;background-color:#5cb85c;color:#fff}.modal-box .modal-content .modal-body{padding:2px 16px}.modal-box .modal-content .modal-footer{padding:2px 16px;background-color:#5cb85c;color:#fff}.modal-box .modal-content .close{color:#fff;float:right;font-size:28px;font-weight:700}.modal-box .modal-content .close:focus,.modal-box .modal-content .close:hover{color:#000;text-decoration:none;cursor:pointer}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}",""])},'./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-e1183e4a","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/examples/more/BottomModal.vue':function(e,o,s){o=e.exports=s("./node_modules/css-loader/lib/css-base.js")(!1),o.push([e.i,".bottom-modal-example .modal-box .modal-content{width:100%;position:fixed;bottom:0;border:none;animation-name:slideIn;animation-duration:.4s}@keyframes slideIn{0%{bottom:-100%;opacity:0}to{bottom:0;opacity:1}}",""])},'./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-608b6cee","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/more/ModalBox.vue':function(e,o,s){"use strict";var l=function(){var e=this,o=e.$createElement,s=e._self._c||o;return s("div",{staticClass:"modal-box",class:{"is-active":e.isActive},on:{click:function(o){if(o.target!==o.currentTarget)return null;e.closeDim()}}},[s("div",{staticClass:"modal-content"},[e._t("default")],2)])},d=[],a={render:l,staticRenderFns:d};o.a=a},'./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-e1183e4a","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/examples/more/BottomModal.vue':function(e,o,s){"use strict";var l=function(){var e=this,o=e.$createElement,s=e._self._c||o;return s("div",{staticClass:"bottom-modal-example"},[s("h2",[e._v("Bottom Modal")]),e._v(" "),s("button",{staticClass:"btn-modal",on:{click:function(o){e.modal.isActive=!0}}},[e._v("Open Modal")]),e._v(" "),s("modal-box",{attrs:{"is-active":e.modal.isActive,"is-closable":""},on:{"update:isActive":function(o){e.$set(e.modal,"isActive",o)}}},[s("div",{staticClass:"modal-header"},[s("span",{staticClass:"close",on:{click:function(o){e.modal.isActive=!1}}},[e._v("×")]),e._v(" "),s("h2",[e._v("Modal Header")])]),e._v(" "),s("div",{staticClass:"modal-body"},[s("p",[e._v("Some text in the Modal Body")]),e._v(" "),s("p",[e._v("Some other text...")])]),e._v(" "),s("div",{staticClass:"modal-footer"},[s("h3",[e._v("Modal Footer")])])])],1)},d=[],a={render:l,staticRenderFns:d};o.a=a},'./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-608b6cee","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/more/ModalBox.vue':function(e,o,s){var l=s('./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-608b6cee","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/more/ModalBox.vue');"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);s("./node_modules/vue-style-loader/lib/addStylesClient.js")("216d5064",l,!0,{})},'./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-e1183e4a","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/examples/more/BottomModal.vue':function(e,o,s){var l=s('./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-e1183e4a","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/examples/more/BottomModal.vue');"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);s("./node_modules/vue-style-loader/lib/addStylesClient.js")("68df1eee",l,!0,{})},"./src/components/more/ModalBox.vue":function(e,o,s){"use strict";function l(e){s('./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-608b6cee","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/more/ModalBox.vue')}var d=s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/more/ModalBox.vue"),a=s('./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-608b6cee","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/more/ModalBox.vue'),t=s("./node_modules/vue-loader/lib/component-normalizer.js"),n=l,i=t(d.a,a.a,!1,n,null,null);o.a=i.exports},"./src/examples/more/BottomModal.vue":function(e,o,s){"use strict";function l(e){s('./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-e1183e4a","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/examples/more/BottomModal.vue')}Object.defineProperty(o,"__esModule",{value:!0});var d=s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/examples/more/BottomModal.vue"),a=s('./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-e1183e4a","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/examples/more/BottomModal.vue'),t=s("./node_modules/vue-loader/lib/component-normalizer.js"),n=l,i=t(d.a,a.a,!1,n,null,null);o.default=i.exports}});
//# sourceMappingURL=BottomModal.js.map?id=d368ce5dabf6b3b4e216