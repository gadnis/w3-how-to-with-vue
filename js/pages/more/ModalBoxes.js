webpackJsonp([6],{"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/more/ModalBox.vue":function(e,o,l){"use strict";o.a={name:"modal-box",props:{isClosable:Boolean,isActive:Boolean},methods:{close:function(){this.$emit("close"),this.$emit("update:isActive",!1)},closeDim:function(){this.isClosable&&this.close()}}}},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/more/ModalBoxes.vue":function(e,o,l){"use strict";var a=l("./src/components/more/ModalBox.vue");o.a={name:"modal-boxes-page",data:function(){return{modal:{isActive:!1},examples:[["``` html","\x3c!-- Trigger/Open The Modal --\x3e",'<button id="myBtn">Open Modal</button>',"","\x3c!-- The Modal --\x3e",'<div id="myModal" class="modal">',"","  \x3c!-- Modal content --\x3e",'  <div class="modal-content">','    <span class="close">&times;</span>',"    <p>Some text in the Modal..</p>","  </div>","","</div>","```"],["``` css","/* The Modal (background) */",".modal {","  display: none; /* Hidden by default */","  position: fixed; /* Stay in place */","  z-index: 1; /* Sit on top */","  left: 0;","  top: 0;","  width: 100%; /* Full width */","  height: 100%; /* Full height */","  overflow: auto; /* Enable scroll if needed */","  background-color: rgb(0,0,0); /* Fallback color */","  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */","}","","/* Modal Content/Box */",".modal-content {","  background-color: #fefefe;","  margin: 15% auto; /* 15% from the top and centered */","  padding: 20px;","  border: 1px solid #888;","  width: 80%; /* Could be more or less, depending on screen size */","}","","/* The Close Button */",".close {","  color: #aaa;","  float: right;","  font-size: 28px;","  font-weight: bold;","}","",".close:hover,",".close:focus {","  color: black;","  text-decoration: none;","  cursor: pointer;","}","```"],["``` js","// Get the modal",'var modal = document.getElementById("myModal");',"","// Get the button that opens the modal",'var btn = document.getElementById("myBtn");',"","// Get the <span> element that closes the modal",'var span = document.getElementsByClassName("close")[0];',"","// When the user clicks on the button, open the modal ","btn.onclick = function() {",'  modal.style.display = "block";',"}","","// When the user clicks on <span> (x), close the modal","span.onclick = function() {",'  modal.style.display = "none";',"}","","// When the user clicks anywhere outside of the modal, close it","window.onclick = function(event) {","  if (event.target == modal) {",'    modal.style.display = "none";',"  }","}","```"],["``` html","\x3c!-- Modal content --\x3e",'<div class="modal-content">','  <div class="modal-header">','    <span class="close">&times;</span>',"    <h2>Modal Header</h2>","  </div>",'  <div class="modal-body">',"    <p>Some text in the Modal Body</p>","    <p>Some other text...</p>","  </div>",'  <div class="modal-footer">',"    <h3>Modal Footer</h3>","  </div>","</div>","```"],["``` css","/* Modal Header */",".modal-header {","  padding: 2px 16px;","  background-color: #5cb85c;","  color: white;","}","","/* Modal Body */",".modal-body {padding: 2px 16px;}","","/* Modal Footer */",".modal-footer {","  padding: 2px 16px;","  background-color: #5cb85c;","  color: white;","}","","/* Modal Content */",".modal-content {","  position: relative;","  background-color: #fefefe;","  margin: auto;","  padding: 0;","  border: 1px solid #888;","  width: 80%;","  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);","  animation-name: animatetop;","  animation-duration: 0.4s;","}","","/* Add Animation */","@keyframes animatetop {","  from {top: -300px; opacity: 0}","  to {top: 0; opacity: 1}","}","```"]]}},components:{ModalBox:a.a}}},'./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-20c13e74","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/more/ModalBoxes.vue':function(e,o,l){o=e.exports=l("./node_modules/css-loader/lib/css-base.js")(!1),o.push([e.i,".modal-boxes-page .btn-modal{color:#fff;background-color:#616161;font-size:17px;padding:12px 35px;text-decoration:none;border:none;cursor:pointer}.modal-boxes-page .btn-modal:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}.modal-boxes-page .modal-box{padding-top:100px}.modal-boxes-page .modal-box .modal-content{animation-name:animatetop;animation-duration:.4s}@keyframes animatetop{0%{top:-300px;opacity:0}to{top:0;opacity:1}}",""])},'./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-608b6cee","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/more/ModalBox.vue':function(e,o,l){o=e.exports=l("./node_modules/css-loader/lib/css-base.js")(!1),o.push([e.i,".modal-box{display:none;position:fixed;z-index:90;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#000;background-color:rgba(0,0,0,.4);animation-name:fadeIn;animation-duration:.4s}.modal-box.is-active{display:block}.modal-box .modal-content{position:relative;background-color:#fefefe;margin:auto;padding:0;border:1px solid #888;width:80%;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}.modal-box .modal-content .modal-header{padding:2px 16px;background-color:#5cb85c;color:#fff}.modal-box .modal-content .modal-body{padding:2px 16px}.modal-box .modal-content .modal-footer{padding:2px 16px;background-color:#5cb85c;color:#fff}.modal-box .modal-content .close{color:#fff;float:right;font-size:28px;font-weight:700}.modal-box .modal-content .close:focus,.modal-box .modal-content .close:hover{color:#000;text-decoration:none;cursor:pointer}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}",""])},'./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-20c13e74","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/more/ModalBoxes.vue':function(e,o,l){"use strict";var a=function(){var e=this,o=e.$createElement,l=e._self._c||o;return l("page",{staticClass:"modal-boxes-page",attrs:{title:"CSS/JS Modal",intro:"a Modal Box with CSS and JavaScript"}},[l("template",{slot:"header"},[l("h2",{staticClass:"title"},[e._v("How To Create a Modal Box")]),e._v(" "),l("p",[e._v("A modal is a dialog box/popup window that is displayed on top of the current page:")])]),e._v(" "),l("sample",[l("button",{staticClass:"btn-modal",on:{click:function(o){e.modal.isActive=!0}}},[e._v("Open Modal")]),e._v(" "),l("modal-box",{attrs:{"is-active":e.modal.isActive,"is-closable":""},on:{"update:isActive":function(o){e.$set(e.modal,"isActive",o)}}},[l("div",{staticClass:"modal-header"},[l("span",{staticClass:"close",on:{click:function(o){e.modal.isActive=!1}}},[e._v("×")]),e._v(" "),l("h2",[e._v("Modal Header")])]),e._v(" "),l("div",{staticClass:"modal-body"},[l("p",[e._v("Some text in the Modal Body")]),e._v(" "),l("p",[e._v("Some other text...")])]),e._v(" "),l("div",{staticClass:"modal-footer"},[l("h3",[e._v("Modal Footer")])])])],1),e._v(" "),l("template",{slot:"examples"},[l("hr"),e._v(" "),l("step",{attrs:{no:"1",html:""}}),e._v(" "),l("example-code",{attrs:{code:e.examples[0]}}),e._v(" "),l("step",{attrs:{no:"2",css:""}}),e._v(" "),l("example-code",{attrs:{code:e.examples[1]}}),e._v(" "),l("step",{attrs:{no:"3",js:""}}),e._v(" "),l("example-code",{attrs:{code:e.examples[2]}}),e._v(" "),l("h2",{staticClass:"title"},[e._v("Add Header and Footer")]),e._v(" "),l("p",[e._v("Add a class for modal-header, modal-body, and modal-footer:")]),e._v(" "),l("example-code",{attrs:{code:e.examples[3]}}),e._v(" "),l("p",[e._v("Style the modal header, body and footer, and add animation (slide in the modal):")]),e._v(" "),l("example-code",{attrs:{code:e.examples[4]}}),e._v(" "),l("h2",{staticClass:"title"},[e._v('Bottom Modal ("Bottom sheets")')]),e._v(" "),l("p",[e._v("An example on how to create a full-with modal that slides in from the bottom:")]),e._v(" "),l("example-code",[l("sample",[l("iframe",{attrs:{src:"#examples/more/bottom-modal",frameborder:"0",width:"100%",height:"500px"}})])],1)],1)],2)},d=[],s={render:a,staticRenderFns:d};o.a=s},'./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-608b6cee","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/more/ModalBox.vue':function(e,o,l){"use strict";var a=function(){var e=this,o=e.$createElement,l=e._self._c||o;return l("div",{staticClass:"modal-box",class:{"is-active":e.isActive},on:{click:function(o){if(o.target!==o.currentTarget)return null;e.closeDim()}}},[l("div",{staticClass:"modal-content"},[e._t("default")],2)])},d=[],s={render:a,staticRenderFns:d};o.a=s},'./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-20c13e74","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/more/ModalBoxes.vue':function(e,o,l){var a=l('./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-20c13e74","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/more/ModalBoxes.vue');"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);l("./node_modules/vue-style-loader/lib/addStylesClient.js")("19a018de",a,!0,{})},'./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-608b6cee","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/more/ModalBox.vue':function(e,o,l){var a=l('./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-608b6cee","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/more/ModalBox.vue');"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);l("./node_modules/vue-style-loader/lib/addStylesClient.js")("216d5064",a,!0,{})},"./src/components/more/ModalBox.vue":function(e,o,l){"use strict";function a(e){l('./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-608b6cee","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/more/ModalBox.vue')}var d=l("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/more/ModalBox.vue"),s=l('./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-608b6cee","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/more/ModalBox.vue'),t=l("./node_modules/vue-loader/lib/component-normalizer.js"),n=a,i=t(d.a,s.a,!1,n,null,null);o.a=i.exports},"./src/pages/more/ModalBoxes.vue":function(e,o,l){"use strict";function a(e){l('./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-20c13e74","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/more/ModalBoxes.vue')}Object.defineProperty(o,"__esModule",{value:!0});var d=l("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/more/ModalBoxes.vue"),s=l('./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-20c13e74","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/more/ModalBoxes.vue'),t=l("./node_modules/vue-loader/lib/component-normalizer.js"),n=a,i=t(d.a,s.a,!1,n,null,null);o.default=i.exports}});
//# sourceMappingURL=ModalBoxes.js.map?id=3e7edd7a1922c8fb8997