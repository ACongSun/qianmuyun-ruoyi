(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c551c"],{"3f1d":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",attrs:{model:e.queryParams,size:"small",inline:!0,"label-width":"68px"}},[a("el-form-item",{attrs:{label:"驱虫时间"}},[a("el-date-picker",{staticStyle:{width:"240px"},attrs:{"value-format":"yyyy-MM-dd",type:"daterange","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.daterangeInsecttime,callback:function(t){e.daterangeInsecttime=t},expression:"daterangeInsecttime"}})],1),a("el-form-item",{attrs:{label:"驱虫场区",prop:"region"}},[a("el-input",{attrs:{placeholder:"请输入驱虫场区",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.region,callback:function(t){e.$set(e.queryParams,"region",t)},expression:"queryParams.region"}})],1),a("el-form-item",{attrs:{label:"驱虫羊舍",prop:"buildingnum"}},[a("el-input",{attrs:{placeholder:"请输入驱虫羊舍",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.buildingnum,callback:function(t){e.$set(e.queryParams,"buildingnum",t)},expression:"queryParams.buildingnum"}})],1),a("el-form-item",{attrs:{label:"驱虫羊栏",prop:"columnnum"}},[a("el-input",{attrs:{placeholder:"请输入驱虫羊栏",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.columnnum,callback:function(t){e.$set(e.queryParams,"columnnum",t)},expression:"queryParams.columnnum"}})],1),a("el-form-item",{attrs:{label:"查询开始时间"}},[a("el-date-picker",{staticStyle:{width:"240px"},attrs:{"value-format":"yyyy-MM-dd",type:"daterange","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.daterangeStartdate,callback:function(t){e.daterangeStartdate=t},expression:"daterangeStartdate"}})],1),a("el-form-item",{attrs:{label:"查询结束时间"}},[a("el-date-picker",{staticStyle:{width:"240px"},attrs:{"value-format":"yyyy-MM-dd",type:"daterange","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.daterangeEnddate,callback:function(t){e.daterangeEnddate=t},expression:"daterangeEnddate"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),a("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),a("el-row",{staticClass:"mb8",attrs:{gutter:10}},[a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["productManagement:insecticide:add"],expression:"['productManagement:insecticide:add']"}],attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1),a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["productManagement:insecticide:edit"],expression:"['productManagement:insecticide:edit']"}],attrs:{type:"success",plain:"",icon:"el-icon-edit",size:"mini",disabled:e.single},on:{click:e.handleUpdate}},[e._v("修改")])],1),a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["productManagement:insecticide:remove"],expression:"['productManagement:insecticide:remove']"}],attrs:{type:"danger",plain:"",icon:"el-icon-delete",size:"mini",disabled:e.multiple},on:{click:e.handleDelete}},[e._v("删除")])],1),a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["productManagement:insecticide:export"],expression:"['productManagement:insecticide:export']"}],attrs:{type:"warning",plain:"",icon:"el-icon-download",size:"mini"},on:{click:e.handleExport}},[e._v("导出")])],1),a("right-toolbar",{attrs:{showSearch:e.showSearch},on:{"update:showSearch":function(t){e.showSearch=t},"update:show-search":function(t){e.showSearch=t},queryTable:e.getList}})],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.insecticideList},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),a("el-table-column",{attrs:{label:"驱虫时间",align:"center",prop:"insecttime",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.parseTime(t.row.insecttime,"{y}-{m}-{d}")))])]}}])}),a("el-table-column",{attrs:{label:"驱虫场区",align:"center",prop:"region"}}),a("el-table-column",{attrs:{label:"驱虫羊舍",align:"center",prop:"buildingnum"}}),a("el-table-column",{attrs:{label:"驱虫羊栏",align:"center",prop:"columnnum"}}),a("el-table-column",{attrs:{label:"驱虫耳编号",align:"center",prop:"eartagid"}}),a("el-table-column",{attrs:{label:"驱虫药名称",align:"center",prop:"pesticide"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("dict-tag",{attrs:{options:e.dict.type.insecticide,value:t.row.pesticide}})]}}])}),a("el-table-column",{attrs:{label:"使用方法",align:"center",prop:"method"}}),a("el-table-column",{attrs:{label:"剂量",align:"center",prop:"dose"}}),a("el-table-column",{attrs:{label:"未驱虫耳编号",align:"center",prop:"nonpesticideid"}}),a("el-table-column",{attrs:{label:"未驱虫原因",align:"center",prop:"reason"}}),a("el-table-column",{attrs:{label:"视频地址",align:"center",prop:"video"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-dialog",{attrs:{title:"视频",visible:e.dialogPlay,width:"30%"},on:{"update:visible":function(t){e.dialogPlay=t},close:e.closeDialog}},[a("video",{attrs:{src:e.videoUrl,controls:"",autoplay:"",width:"100%"}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:""!=t.row.video,expression:"scope.row.video==''?false:true"}],staticStyle:{color:"#00afff"},on:{click:function(a){return e.playVideo(t.row)}}},[e._v("查看视频")])]}}])}),a("el-table-column",{attrs:{label:"查询开始时间",align:"center",prop:"startdate",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.parseTime(t.row.startdate,"{y}-{m}-{d}")))])]}}])}),a("el-table-column",{attrs:{label:"查询结束时间",align:"center",prop:"enddate",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.parseTime(t.row.enddate,"{y}-{m}-{d}")))])]}}])}),a("el-table-column",{attrs:{label:"审核是否通过",align:"center",prop:"bak1"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("dict-tag",{attrs:{options:e.dict.type.sys_yes_no,value:t.row.bak1}})]}}])}),a("el-table-column",{attrs:{label:"未通过原因",align:"center",prop:"bak2"}}),a("el-table-column",{attrs:{label:"养殖场",align:"center",prop:"bak3"}}),a("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["productManagement:insecticide:edit"],expression:"['productManagement:insecticide:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.handleUpdate(t.row)}}},[e._v("修改")]),a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["productManagement:insecticide:remove"],expression:"['productManagement:insecticide:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),a("el-dialog",{attrs:{title:e.title,visible:e.open,width:"500px","append-to-body":""},on:{"update:visible":function(t){e.open=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"驱虫时间",prop:"insecttime"}},[a("el-date-picker",{attrs:{clearable:"",type:"date","value-format":"yyyy-MM-dd",placeholder:"请选择驱虫时间"},model:{value:e.form.insecttime,callback:function(t){e.$set(e.form,"insecttime",t)},expression:"form.insecttime"}})],1),a("el-form-item",{attrs:{label:"驱虫场区",prop:"region"}},[a("el-input",{attrs:{placeholder:"请输入驱虫场区"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}})],1),a("el-form-item",{attrs:{label:"驱虫羊舍",prop:"buildingnum"}},[a("el-input",{attrs:{placeholder:"请输入驱虫羊舍"},model:{value:e.form.buildingnum,callback:function(t){e.$set(e.form,"buildingnum",t)},expression:"form.buildingnum"}})],1),a("el-form-item",{attrs:{label:"驱虫羊栏",prop:"columnnum"}},[a("el-input",{attrs:{placeholder:"请输入驱虫羊栏"},model:{value:e.form.columnnum,callback:function(t){e.$set(e.form,"columnnum",t)},expression:"form.columnnum"}})],1),a("el-form-item",{attrs:{label:"驱虫耳编号",prop:"eartagid"}},[a("el-input",{attrs:{placeholder:"请输入驱虫耳编号"},model:{value:e.form.eartagid,callback:function(t){e.$set(e.form,"eartagid",t)},expression:"form.eartagid"}})],1),a("el-form-item",{attrs:{label:"驱虫药名称",prop:"pesticide"}},[a("el-select",{attrs:{placeholder:"请选择驱虫药名称"},model:{value:e.form.pesticide,callback:function(t){e.$set(e.form,"pesticide",t)},expression:"form.pesticide"}},e._l(e.dict.type.insecticide,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"使用方法",prop:"method"}},[a("el-input",{attrs:{placeholder:"请输入使用方法"},model:{value:e.form.method,callback:function(t){e.$set(e.form,"method",t)},expression:"form.method"}})],1),a("el-form-item",{attrs:{label:"剂量",prop:"dose"}},[a("el-input",{attrs:{placeholder:"请输入剂量"},model:{value:e.form.dose,callback:function(t){e.$set(e.form,"dose",t)},expression:"form.dose"}})],1),a("el-form-item",{attrs:{label:"未驱虫耳编号",prop:"nonpesticideid"}},[a("el-input",{attrs:{placeholder:"请输入未驱虫耳编号"},model:{value:e.form.nonpesticideid,callback:function(t){e.$set(e.form,"nonpesticideid",t)},expression:"form.nonpesticideid"}})],1),a("el-form-item",{attrs:{label:"未驱虫原因",prop:"reason"}},[a("el-input",{attrs:{placeholder:"请输入未驱虫原因"},model:{value:e.form.reason,callback:function(t){e.$set(e.form,"reason",t)},expression:"form.reason"}})],1),a("el-form-item",{attrs:{label:"视频",prop:"video"}},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入内容"},model:{value:e.form.video,callback:function(t){e.$set(e.form,"video",t)},expression:"form.video"}})],1),a("el-form-item",{attrs:{label:"查询开始时间",prop:"startdate"}},[a("el-date-picker",{attrs:{clearable:"",type:"date","value-format":"yyyy-MM-dd",placeholder:"请选择查询开始时间"},model:{value:e.form.startdate,callback:function(t){e.$set(e.form,"startdate",t)},expression:"form.startdate"}})],1),a("el-form-item",{attrs:{label:"查询结束时间",prop:"enddate"}},[a("el-date-picker",{attrs:{clearable:"",type:"date","value-format":"yyyy-MM-dd",placeholder:"请选择查询结束时间"},model:{value:e.form.enddate,callback:function(t){e.$set(e.form,"enddate",t)},expression:"form.enddate"}})],1),a("el-form-item",{attrs:{label:"审核是否通过"}},[a("el-radio-group",{model:{value:e.form.bak1,callback:function(t){e.$set(e.form,"bak1",t)},expression:"form.bak1"}},e._l(e.dict.type.sys_yes_no,(function(t){return a("el-radio",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.label))])})),1)],1),a("el-form-item",{attrs:{label:"未通过原因",prop:"bak2"}},[a("el-input",{attrs:{placeholder:"请输入未通过原因"},model:{value:e.form.bak2,callback:function(t){e.$set(e.form,"bak2",t)},expression:"form.bak2"}})],1),a("el-form-item",{attrs:{label:"养殖场",prop:"bak3"}},[a("el-input",{attrs:{placeholder:"请输入养殖场"},model:{value:e.form.bak3,callback:function(t){e.$set(e.form,"bak3",t)},expression:"form.bak3"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),a("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)},l=[],r=a("5530"),i=(a("d81d"),a("b775"));function o(e){return Object(i["a"])({url:"/productManagement/insecticide/list",method:"get",params:e})}function s(e){return Object(i["a"])({url:"/productManagement/insecticide/"+e,method:"get"})}function c(e){return Object(i["a"])({url:"/productManagement/insecticide",method:"post",data:e})}function d(e){return Object(i["a"])({url:"/productManagement/insecticide",method:"put",data:e})}function u(e){return Object(i["a"])({url:"/productManagement/insecticide/"+e,method:"delete"})}var m={name:"Insecticide",dicts:["sys_yes_no","insecticide"],data:function(){return{dialogPlay:!1,videoUrl:"",loading:!0,ids:[],single:!0,multiple:!0,showSearch:!1,total:0,insecticideList:[],title:"",open:!1,daterangeInsecttime:[],daterangeStartdate:[],daterangeEnddate:[],queryParams:{pageNum:1,pageSize:10,insecttime:null,region:null,buildingnum:null,columnnum:null,startdate:null,enddate:null},form:{},rules:{}}},created:function(){this.getList()},methods:{playVideo:function(e){this.dialogPlay=!0,this.videoUrl=e.video},closeDialog:function(){this.videoUrl=""},getList:function(){var e=this;this.loading=!0,this.queryParams.params={},null!=this.daterangeInsecttime&&""!=this.daterangeInsecttime&&(this.queryParams.params["beginInsecttime"]=this.daterangeInsecttime[0],this.queryParams.params["endInsecttime"]=this.daterangeInsecttime[1]),null!=this.daterangeStartdate&&""!=this.daterangeStartdate&&(this.queryParams.params["beginStartdate"]=this.daterangeStartdate[0],this.queryParams.params["endStartdate"]=this.daterangeStartdate[1]),null!=this.daterangeEnddate&&""!=this.daterangeEnddate&&(this.queryParams.params["beginEnddate"]=this.daterangeEnddate[0],this.queryParams.params["endEnddate"]=this.daterangeEnddate[1]),o(this.queryParams).then((function(t){e.insecticideList=t.rows,e.total=t.total,e.loading=!1}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={id:null,insecttime:null,region:null,buildingnum:null,columnnum:null,eartagid:null,pesticide:null,method:null,dose:null,nonpesticideid:null,reason:null,video:null,startdate:null,enddate:null,bak1:"0",bak2:null,bak3:null,createBy:null,updateBy:null,updateDate:null,remarks:null,delFlag:null,createDate:null},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.daterangeInsecttime=[],this.daterangeStartdate=[],this.daterangeEnddate=[],this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.id})),this.single=1!==e.length,this.multiple=!e.length},handleAdd:function(){this.reset(),this.open=!0,this.title="添加驱虫档案"},handleUpdate:function(e){var t=this;this.reset();var a=e.id||this.ids;s(a).then((function(e){t.form=e.data,t.open=!0,t.title="修改驱虫档案"}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(null!=e.form.id?d(e.form).then((function(t){e.$modal.msgSuccess("修改成功"),e.open=!1,e.getList()})):c(e.form).then((function(t){e.$modal.msgSuccess("新增成功"),e.open=!1,e.getList()})))}))},handleDelete:function(e){var t=this,a=e.id||this.ids;this.$modal.confirm('是否确认删除驱虫档案编号为"'+a+'"的数据项？').then((function(){return u(a)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))},handleExport:function(){this.download("productManagement/insecticide/export",Object(r["a"])({},this.queryParams),"insecticide_".concat((new Date).getTime(),".xlsx"))}}},p=m,f=a("2877"),h=Object(f["a"])(p,n,l,!1,null,null,null);t["default"]=h.exports}}]);