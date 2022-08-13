(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aa8f9"],{1213:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",attrs:{model:e.queryParams,size:"small",inline:!0,"label-width":"68px"}},[a("el-form-item",{attrs:{label:"配种时间",prop:"matingdate"}},[a("el-date-picker",{attrs:{clearable:"",type:"date","value-format":"yyyy-MM-dd",placeholder:"请选择配种时间"},model:{value:e.queryParams.matingdate,callback:function(t){e.$set(e.queryParams,"matingdate",t)},expression:"queryParams.matingdate"}})],1),a("el-form-item",{attrs:{label:"母羊编号",prop:"femaleid"}},[a("el-input",{attrs:{placeholder:"请输入母羊编号",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.femaleid,callback:function(t){e.$set(e.queryParams,"femaleid",t)},expression:"queryParams.femaleid"}})],1),a("el-form-item",{attrs:{label:"公羊编号",prop:"maleid"}},[a("el-input",{attrs:{placeholder:"请输入公羊编号",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.maleid,callback:function(t){e.$set(e.queryParams,"maleid",t)},expression:"queryParams.maleid"}})],1),a("el-form-item",{attrs:{label:"生产时间"}},[a("el-date-picker",{staticStyle:{width:"240px"},attrs:{"value-format":"yyyy-MM-dd",type:"daterange","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.daterangeBirthdate,callback:function(t){e.daterangeBirthdate=t},expression:"daterangeBirthdate"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),a("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),a("el-row",{staticClass:"mb8",attrs:{gutter:10}},[a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["productManagement:mating:add"],expression:"['productManagement:mating:add']"}],attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1),a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["productManagement:mating:edit"],expression:"['productManagement:mating:edit']"}],attrs:{type:"success",plain:"",icon:"el-icon-edit",size:"mini",disabled:e.single},on:{click:e.handleUpdate}},[e._v("修改")])],1),a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["productManagement:mating:remove"],expression:"['productManagement:mating:remove']"}],attrs:{type:"danger",plain:"",icon:"el-icon-delete",size:"mini",disabled:e.multiple},on:{click:e.handleDelete}},[e._v("删除")])],1),a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["productManagement:mating:export"],expression:"['productManagement:mating:export']"}],attrs:{type:"warning",plain:"",icon:"el-icon-download",size:"mini"},on:{click:e.handleExport}},[e._v("导出")])],1),a("right-toolbar",{attrs:{showSearch:e.showSearch},on:{"update:showSearch":function(t){e.showSearch=t},"update:show-search":function(t){e.showSearch=t},queryTable:e.getList}})],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.matingList},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),a("el-table-column",{attrs:{label:"配种时间",align:"center",prop:"matingdate",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.parseTime(t.row.matingdate,"{y}-{m}-{d}")))])]}}])}),a("el-table-column",{attrs:{label:"母羊编号",align:"center",prop:"femaleid"}}),a("el-table-column",{attrs:{label:"公羊编号",align:"center",prop:"maleid"}}),a("el-table-column",{attrs:{label:"近亲测定",align:"center",prop:"nrelation"}}),a("el-table-column",{attrs:{label:"母羊场区",align:"center",prop:"region"}}),a("el-table-column",{attrs:{label:"母羊栋号",align:"center",prop:"buildingnum"}}),a("el-table-column",{attrs:{label:"母羊栏号",align:"center",prop:"columnnum"}}),a("el-table-column",{attrs:{label:"孕检情况",align:"center",prop:"matingmode"}}),a("el-table-column",{attrs:{label:"检查结果",align:"center",prop:"birthmode"}}),a("el-table-column",{attrs:{label:"流产原因",align:"center",prop:"abortionreason"}}),a("el-table-column",{attrs:{label:"羔羊场区",align:"center",prop:"newregion"}}),a("el-table-column",{attrs:{label:"羔羊栋号",align:"center",prop:"newbuilding"}}),a("el-table-column",{attrs:{label:"羔羊栏号",align:"center",prop:"newcolumn"}}),a("el-table-column",{attrs:{label:"配种方式",align:"center",prop:"method"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("dict-tag",{attrs:{options:e.dict.type.mating_way,value:t.row.method}})]}}])}),a("el-table-column",{attrs:{label:"生产时间",align:"center",prop:"birthdate",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.parseTime(t.row.birthdate,"{y}-{m}-{d}")))])]}}])}),a("el-table-column",{attrs:{label:"产子数",align:"center",prop:"birthnum"}}),a("el-table-column",{attrs:{label:"公羔数",align:"center",prop:"birthmale"}}),a("el-table-column",{attrs:{label:"母羔数",align:"center",prop:"birthfemale"}}),a("el-table-column",{attrs:{label:"胎次",align:"center",prop:"parity"}}),a("el-table-column",{attrs:{label:"审核是否通过",align:"center",prop:"bak1"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("dict-tag",{attrs:{options:e.dict.type.sys_yes_no,value:t.row.bak1}})]}}])}),a("el-table-column",{attrs:{label:"未通过原因",align:"center",prop:"bak2"}}),a("el-table-column",{attrs:{label:"养殖场",align:"center",prop:"bak3"}}),a("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["productManagement:mating:edit"],expression:"['productManagement:mating:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.handleUpdate(t.row)}}},[e._v("修改")]),a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["productManagement:mating:remove"],expression:"['productManagement:mating:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),a("el-dialog",{attrs:{title:e.title,visible:e.open,width:"500px","append-to-body":""},on:{"update:visible":function(t){e.open=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"配种时间",prop:"matingdate"}},[a("el-date-picker",{attrs:{clearable:"",type:"date","value-format":"yyyy-MM-dd",placeholder:"请选择配种时间"},model:{value:e.form.matingdate,callback:function(t){e.$set(e.form,"matingdate",t)},expression:"form.matingdate"}})],1),a("el-form-item",{attrs:{label:"母羊编号",prop:"femaleid"}},[a("el-input",{attrs:{placeholder:"请输入母羊编号"},model:{value:e.form.femaleid,callback:function(t){e.$set(e.form,"femaleid",t)},expression:"form.femaleid"}})],1),a("el-form-item",{attrs:{label:"公羊编号",prop:"maleid"}},[a("el-input",{attrs:{placeholder:"请输入公羊编号"},model:{value:e.form.maleid,callback:function(t){e.$set(e.form,"maleid",t)},expression:"form.maleid"}})],1),a("el-form-item",{attrs:{label:"近亲测定",prop:"nrelation"}},[a("el-input",{attrs:{placeholder:"请输入近亲测定"},model:{value:e.form.nrelation,callback:function(t){e.$set(e.form,"nrelation",t)},expression:"form.nrelation"}})],1),a("el-form-item",{attrs:{label:"母羊场区",prop:"region"}},[a("el-input",{attrs:{placeholder:"请输入母羊场区"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}})],1),a("el-form-item",{attrs:{label:"母羊栋号",prop:"buildingnum"}},[a("el-input",{attrs:{placeholder:"请输入母羊栋号"},model:{value:e.form.buildingnum,callback:function(t){e.$set(e.form,"buildingnum",t)},expression:"form.buildingnum"}})],1),a("el-form-item",{attrs:{label:"母羊栏号",prop:"columnnum"}},[a("el-input",{attrs:{placeholder:"请输入母羊栏号"},model:{value:e.form.columnnum,callback:function(t){e.$set(e.form,"columnnum",t)},expression:"form.columnnum"}})],1),a("el-form-item",{attrs:{label:"孕检情况",prop:"matingmode"}},[a("el-input",{attrs:{placeholder:"请输入孕检情况"},model:{value:e.form.matingmode,callback:function(t){e.$set(e.form,"matingmode",t)},expression:"form.matingmode"}})],1),a("el-form-item",{attrs:{label:"检查结果",prop:"birthmode"}},[a("el-input",{attrs:{placeholder:"请输入检查结果"},model:{value:e.form.birthmode,callback:function(t){e.$set(e.form,"birthmode",t)},expression:"form.birthmode"}})],1),a("el-form-item",{attrs:{label:"流产原因",prop:"abortionreason"}},[a("el-input",{attrs:{placeholder:"请输入流产原因"},model:{value:e.form.abortionreason,callback:function(t){e.$set(e.form,"abortionreason",t)},expression:"form.abortionreason"}})],1),a("el-form-item",{attrs:{label:"羔羊场区",prop:"newregion"}},[a("el-input",{attrs:{placeholder:"请输入羔羊场区"},model:{value:e.form.newregion,callback:function(t){e.$set(e.form,"newregion",t)},expression:"form.newregion"}})],1),a("el-form-item",{attrs:{label:"羔羊栋号",prop:"newbuilding"}},[a("el-input",{attrs:{placeholder:"请输入羔羊栋号"},model:{value:e.form.newbuilding,callback:function(t){e.$set(e.form,"newbuilding",t)},expression:"form.newbuilding"}})],1),a("el-form-item",{attrs:{label:"羔羊栏号",prop:"newcolumn"}},[a("el-input",{attrs:{placeholder:"请输入羔羊栏号"},model:{value:e.form.newcolumn,callback:function(t){e.$set(e.form,"newcolumn",t)},expression:"form.newcolumn"}})],1),a("el-form-item",{attrs:{label:"配种方式",prop:"method"}},[a("el-select",{attrs:{placeholder:"请选择配种方式"},model:{value:e.form.method,callback:function(t){e.$set(e.form,"method",t)},expression:"form.method"}},e._l(e.dict.type.mating_way,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"生产时间",prop:"birthdate"}},[a("el-date-picker",{attrs:{clearable:"",type:"date","value-format":"yyyy-MM-dd",placeholder:"请选择生产时间"},model:{value:e.form.birthdate,callback:function(t){e.$set(e.form,"birthdate",t)},expression:"form.birthdate"}})],1),a("el-form-item",{attrs:{label:"产子数",prop:"birthnum"}},[a("el-input",{attrs:{placeholder:"请输入产子数"},model:{value:e.form.birthnum,callback:function(t){e.$set(e.form,"birthnum",t)},expression:"form.birthnum"}})],1),a("el-form-item",{attrs:{label:"公羔数",prop:"birthmale"}},[a("el-input",{attrs:{placeholder:"请输入公羔数"},model:{value:e.form.birthmale,callback:function(t){e.$set(e.form,"birthmale",t)},expression:"form.birthmale"}})],1),a("el-form-item",{attrs:{label:"母羔数",prop:"birthfemale"}},[a("el-input",{attrs:{placeholder:"请输入母羔数"},model:{value:e.form.birthfemale,callback:function(t){e.$set(e.form,"birthfemale",t)},expression:"form.birthfemale"}})],1),a("el-form-item",{attrs:{label:"胎次",prop:"parity"}},[a("el-input",{attrs:{placeholder:"请输入胎次"},model:{value:e.form.parity,callback:function(t){e.$set(e.form,"parity",t)},expression:"form.parity"}})],1),a("el-form-item",{attrs:{label:"审核是否通过"}},[a("el-radio-group",{model:{value:e.form.bak1,callback:function(t){e.$set(e.form,"bak1",t)},expression:"form.bak1"}},e._l(e.dict.type.sys_yes_no,(function(t){return a("el-radio",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.label))])})),1)],1),a("el-form-item",{attrs:{label:"未通过原因",prop:"bak2"}},[a("el-input",{attrs:{placeholder:"请输入未通过原因"},model:{value:e.form.bak2,callback:function(t){e.$set(e.form,"bak2",t)},expression:"form.bak2"}})],1),a("el-form-item",{attrs:{label:"养殖场",prop:"bak3"}},[a("el-input",{attrs:{placeholder:"请输入养殖场"},model:{value:e.form.bak3,callback:function(t){e.$set(e.form,"bak3",t)},expression:"form.bak3"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),a("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)},n=[],r=a("5530"),o=(a("d81d"),a("b775"));function i(e){return Object(o["a"])({url:"/productManagement/mating/list",method:"get",params:e})}function m(e){return Object(o["a"])({url:"/productManagement/mating/"+e,method:"get"})}function s(e){return Object(o["a"])({url:"/productManagement/mating",method:"post",data:e})}function u(e){return Object(o["a"])({url:"/productManagement/mating",method:"put",data:e})}function c(e){return Object(o["a"])({url:"/productManagement/mating/"+e,method:"delete"})}var d={name:"Mating",dicts:["sys_yes_no","mating_way"],data:function(){return{loading:!0,ids:[],single:!0,multiple:!0,showSearch:!1,total:0,matingList:[],title:"",open:!1,daterangeBirthdate:[],queryParams:{pageNum:1,pageSize:10,matingdate:null,femaleid:null,maleid:null,birthdate:null},form:{},rules:{}}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.loading=!0,this.queryParams.params={},null!=this.daterangeBirthdate&&""!=this.daterangeBirthdate&&(this.queryParams.params["beginBirthdate"]=this.daterangeBirthdate[0],this.queryParams.params["endBirthdate"]=this.daterangeBirthdate[1]),i(this.queryParams).then((function(t){e.matingList=t.rows,e.total=t.total,e.loading=!1}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={id:null,matingdate:null,femaleid:null,maleid:null,nrelation:null,region:null,buildingnum:null,columnnum:null,matingmode:null,birthmode:null,abortionreason:null,newregion:null,newbuilding:null,newcolumn:null,method:null,birthdate:null,birthnum:null,birthmale:null,birthfemale:null,parity:null,bak1:"0",bak2:null,bak3:null,createBy:null,createDate:null,remarks:null,updateBy:null,updateDate:null,delFlag:null},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.daterangeBirthdate=[],this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.id})),this.single=1!==e.length,this.multiple=!e.length},handleAdd:function(){this.reset(),this.open=!0,this.title="添加配种档案"},handleUpdate:function(e){var t=this;this.reset();var a=e.id||this.ids;m(a).then((function(e){t.form=e.data,t.open=!0,t.title="修改配种档案"}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(null!=e.form.id?u(e.form).then((function(t){e.$modal.msgSuccess("修改成功"),e.open=!1,e.getList()})):s(e.form).then((function(t){e.$modal.msgSuccess("新增成功"),e.open=!1,e.getList()})))}))},handleDelete:function(e){var t=this,a=e.id||this.ids;this.$modal.confirm('是否确认删除配种档案编号为"'+a+'"的数据项？').then((function(){return c(a)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))},handleExport:function(){this.download("productManagement/mating/export",Object(r["a"])({},this.queryParams),"mating_".concat((new Date).getTime(),".xlsx"))}}},p=d,f=a("2877"),b=Object(f["a"])(p,l,n,!1,null,null,null);t["default"]=b.exports}}]);