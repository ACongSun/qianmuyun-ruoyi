(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d230f7d"],{ef17:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",attrs:{model:e.queryParams,size:"small",inline:!0,"label-width":"68px"}},[n("el-form-item",{attrs:{label:"用户名",prop:"username"}},[n("el-input",{attrs:{placeholder:"请输入用户名",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.username,callback:function(t){e.$set(e.queryParams,"username",t)},expression:"queryParams.username"}})],1),n("el-form-item",{attrs:{label:"手机",prop:"phonenum"}},[n("el-input",{attrs:{placeholder:"请输入手机",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.phonenum,callback:function(t){e.$set(e.queryParams,"phonenum",t)},expression:"queryParams.phonenum"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),n("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),n("el-row",{staticClass:"mb8",attrs:{gutter:10}},[n("el-col",{attrs:{span:1.5}},[n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["test:test:add"],expression:"['test:test:add']"}],attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1),n("el-col",{attrs:{span:1.5}},[n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["test:test:edit"],expression:"['test:test:edit']"}],attrs:{type:"success",plain:"",icon:"el-icon-edit",size:"mini",disabled:e.single},on:{click:e.handleUpdate}},[e._v("修改")])],1),n("el-col",{attrs:{span:1.5}},[n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["test:test:remove"],expression:"['test:test:remove']"}],attrs:{type:"danger",plain:"",icon:"el-icon-delete",size:"mini",disabled:e.multiple},on:{click:e.handleDelete}},[e._v("删除")])],1),n("el-col",{attrs:{span:1.5}},[n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["test:test:export"],expression:"['test:test:export']"}],attrs:{type:"warning",plain:"",icon:"el-icon-download",size:"mini"},on:{click:e.handleExport}},[e._v("导出")])],1),n("right-toolbar",{attrs:{showSearch:e.showSearch},on:{"update:showSearch":function(t){e.showSearch=t},"update:show-search":function(t){e.showSearch=t},queryTable:e.getList}})],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.testList},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),n("el-table-column",{attrs:{label:"主键无意义",align:"center",prop:"id"}}),n("el-table-column",{attrs:{label:"用户名",align:"center",prop:"username"}}),n("el-table-column",{attrs:{label:"手机",align:"center",prop:"phonenum"}}),n("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["test:test:edit"],expression:"['test:test:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(n){return e.handleUpdate(t.row)}}},[e._v("修改")]),n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["test:test:remove"],expression:"['test:test:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(n){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),n("el-dialog",{attrs:{title:e.title,visible:e.open,width:"500px","append-to-body":""},on:{"update:visible":function(t){e.open=t}}},[n("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"用户名",prop:"username"}},[n("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),n("el-form-item",{attrs:{label:"手机",prop:"phonenum"}},[n("el-input",{attrs:{placeholder:"请输入手机"},model:{value:e.form.phonenum,callback:function(t){e.$set(e.form,"phonenum",t)},expression:"form.phonenum"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),n("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)},s=[],i=n("5530"),r=(n("d81d"),n("b775"));function l(e){return Object(r["a"])({url:"/test/test/list",method:"get",params:e})}function o(e){return Object(r["a"])({url:"/test/test/"+e,method:"get"})}function u(e){return Object(r["a"])({url:"/test/test",method:"post",data:e})}function c(e){return Object(r["a"])({url:"/test/test",method:"put",data:e})}function m(e){return Object(r["a"])({url:"/test/test/"+e,method:"delete"})}var d={name:"Test",data:function(){return{loading:!0,ids:[],single:!0,multiple:!0,showSearch:!0,total:0,testList:[],title:"",open:!1,queryParams:{pageNum:1,pageSize:10,username:null,phonenum:null},form:{},rules:{}}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.loading=!0,l(this.queryParams).then((function(t){e.testList=t.rows,e.total=t.total,e.loading=!1}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={id:null,username:null,phonenum:null},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.id})),this.single=1!==e.length,this.multiple=!e.length},handleAdd:function(){this.reset(),this.open=!0,this.title="添加黔牧云登录测试"},handleUpdate:function(e){var t=this;this.reset();var n=e.id||this.ids;o(n).then((function(e){t.form=e.data,t.open=!0,t.title="修改黔牧云登录测试"}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(null!=e.form.id?c(e.form).then((function(t){e.$modal.msgSuccess("修改成功"),e.open=!1,e.getList()})):u(e.form).then((function(t){e.$modal.msgSuccess("新增成功"),e.open=!1,e.getList()})))}))},handleDelete:function(e){var t=this,n=e.id||this.ids;this.$modal.confirm('是否确认删除黔牧云登录测试编号为"'+n+'"的数据项？').then((function(){return m(n)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))},handleExport:function(){this.download("test/test/export",Object(i["a"])({},this.queryParams),"test_".concat((new Date).getTime(),".xlsx"))}}},p=d,h=n("2877"),f=Object(h["a"])(p,a,s,!1,null,null,null);t["default"]=f.exports}}]);