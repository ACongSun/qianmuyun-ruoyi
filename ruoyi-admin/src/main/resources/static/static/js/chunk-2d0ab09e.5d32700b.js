(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab09e"],{1427:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",attrs:{model:e.queryParams,size:"small",inline:!0,"label-width":"68px"}},[a("el-form-item",{attrs:{label:"星期",prop:"week"}},[a("el-input",{attrs:{placeholder:"请输入星期",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.week,callback:function(t){e.$set(e.queryParams,"week",t)},expression:"queryParams.week"}})],1),a("el-form-item",{attrs:{label:"总存栏",prop:"total"}},[a("el-input",{attrs:{placeholder:"请输入总存栏",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.total,callback:function(t){e.$set(e.queryParams,"total",t)},expression:"queryParams.total"}})],1),a("el-form-item",{attrs:{label:"可售出",prop:"sale"}},[a("el-input",{attrs:{placeholder:"请输入可售出",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.sale,callback:function(t){e.$set(e.queryParams,"sale",t)},expression:"queryParams.sale"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),a("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),a("el-row",{staticClass:"mb8",attrs:{gutter:10}},[a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["deal:deal_left_1:add"],expression:"['deal:deal_left_1:add']"}],attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1),a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["deal:deal_left_1:edit"],expression:"['deal:deal_left_1:edit']"}],attrs:{type:"success",plain:"",icon:"el-icon-edit",size:"mini",disabled:e.single},on:{click:e.handleUpdate}},[e._v("修改")])],1),a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["deal:deal_left_1:remove"],expression:"['deal:deal_left_1:remove']"}],attrs:{type:"danger",plain:"",icon:"el-icon-delete",size:"mini",disabled:e.multiple},on:{click:e.handleDelete}},[e._v("删除")])],1),a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["deal:deal_left_1:export"],expression:"['deal:deal_left_1:export']"}],attrs:{type:"warning",plain:"",icon:"el-icon-download",size:"mini"},on:{click:e.handleExport}},[e._v("导出")])],1),a("right-toolbar",{attrs:{showSearch:e.showSearch},on:{"update:showSearch":function(t){e.showSearch=t},"update:show-search":function(t){e.showSearch=t},queryTable:e.getList}})],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.deal_left_1List},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),a("el-table-column",{attrs:{label:"主键ID 无意义",align:"center",prop:"id"}}),a("el-table-column",{attrs:{label:"星期",align:"center",prop:"week"}}),a("el-table-column",{attrs:{label:"总存栏",align:"center",prop:"total"}}),a("el-table-column",{attrs:{label:"可售出",align:"center",prop:"sale"}}),a("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["deal:deal_left_1:edit"],expression:"['deal:deal_left_1:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.handleUpdate(t.row)}}},[e._v("修改")]),a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["deal:deal_left_1:remove"],expression:"['deal:deal_left_1:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),a("el-dialog",{attrs:{title:e.title,visible:e.open,width:"500px","append-to-body":""},on:{"update:visible":function(t){e.open=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"星期",prop:"week"}},[a("el-input",{attrs:{placeholder:"请输入星期"},model:{value:e.form.week,callback:function(t){e.$set(e.form,"week",t)},expression:"form.week"}})],1),a("el-form-item",{attrs:{label:"总存栏",prop:"total"}},[a("el-input",{attrs:{placeholder:"请输入总存栏"},model:{value:e.form.total,callback:function(t){e.$set(e.form,"total",t)},expression:"form.total"}})],1),a("el-form-item",{attrs:{label:"可售出",prop:"sale"}},[a("el-input",{attrs:{placeholder:"请输入可售出"},model:{value:e.form.sale,callback:function(t){e.$set(e.form,"sale",t)},expression:"form.sale"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),a("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)},n=[],r=a("5530"),i=(a("d81d"),a("b775"));function o(e){return Object(i["a"])({url:"/deal/deal_left_1/list",method:"get",params:e})}function s(e){return Object(i["a"])({url:"/deal/deal_left_1/"+e,method:"get"})}function u(e){return Object(i["a"])({url:"/deal/deal_left_1",method:"post",data:e})}function c(e){return Object(i["a"])({url:"/deal/deal_left_1",method:"put",data:e})}function d(e){return Object(i["a"])({url:"/deal/deal_left_1/"+e,method:"delete"})}var m={name:"Deal_left_1",data:function(){return{loading:!0,ids:[],single:!0,multiple:!0,showSearch:!0,total:0,deal_left_1List:[],title:"",open:!1,queryParams:{pageNum:1,pageSize:10,week:null,total:null,sale:null},form:{},rules:{}}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.loading=!0,o(this.queryParams).then((function(t){e.deal_left_1List=t.rows,e.total=t.total,e.loading=!1}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={id:null,week:null,total:null,sale:null},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.id})),this.single=1!==e.length,this.multiple=!e.length},handleAdd:function(){this.reset(),this.open=!0,this.title="添加左 1"},handleUpdate:function(e){var t=this;this.reset();var a=e.id||this.ids;s(a).then((function(e){t.form=e.data,t.open=!0,t.title="修改左 1"}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(null!=e.form.id?c(e.form).then((function(t){e.$modal.msgSuccess("修改成功"),e.open=!1,e.getList()})):u(e.form).then((function(t){e.$modal.msgSuccess("新增成功"),e.open=!1,e.getList()})))}))},handleDelete:function(e){var t=this,a=e.id||this.ids;this.$modal.confirm('是否确认删除左 1编号为"'+a+'"的数据项？').then((function(){return d(a)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))},handleExport:function(){this.download("deal/deal_left_1/export",Object(r["a"])({},this.queryParams),"deal_left_1_".concat((new Date).getTime(),".xlsx"))}}},p=m,h=a("2877"),f=Object(h["a"])(p,l,n,!1,null,null,null);t["default"]=f.exports}}]);