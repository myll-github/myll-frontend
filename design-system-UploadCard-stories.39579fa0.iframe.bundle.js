"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[373],{"./src/design-system/UploadCard.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicUploadCard:()=>BasicUploadCard,default:()=>UploadCard_stories});var defineProperty=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),asyncToGenerator=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),regenerator=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),PlusOutlined=__webpack_require__("../../node_modules/.pnpm/@ant-design+icons@5.1.4_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/PlusOutlined.js"),upload=__webpack_require__("../../node_modules/.pnpm/antd@5.6.2_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/upload/index.js"),modal=__webpack_require__("../../node_modules/.pnpm/antd@5.6.2_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/modal/index.js"),dist=__webpack_require__("../../packages/shared/dist/index.mjs"),Image=__webpack_require__("../../packages/myll-ui/src/Components/Image/index.tsx"),__jsx=react.createElement,getBase64=function getBase64(file){return new Promise((function(resolve,reject){var reader=new FileReader;reader.readAsDataURL(file),reader.onload=function(){return resolve(reader.result)},reader.onerror=function(error){return reject(error)}}))},uploadButton=__jsx("div",null,__jsx(PlusOutlined.Z,null),__jsx("div",{style:{marginTop:8}},"Upload")),UploadCard=function UploadCard(_ref){var itemList=_ref.itemList,_ref$onChange=_ref.onChange,onChange=void 0===_ref$onChange?dist.noop:_ref$onChange,_useState=(0,react.useState)(!1),previewOpen=_useState[0],setPreviewOpen=_useState[1],_useState2=(0,react.useState)(""),previewImage=_useState2[0],setPreviewImage=_useState2[1],_useState3=(0,react.useState)(""),previewTitle=_useState3[0],setPreviewTitle=_useState3[1],_useState4=(0,react.useState)(itemList),fileList=_useState4[0],setFileList=_useState4[1],handlePreview=function(){var _ref2=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee(file){return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(file.url||file.preview){_context.next=4;break}return _context.next=3,getBase64(file.originFileObj);case 3:file.preview=_context.sent;case 4:setPreviewImage(file.url||file.preview),setPreviewOpen(!0),setPreviewTitle(file.name||file.url.substring(file.url.lastIndexOf("/")+1));case 7:case"end":return _context.stop()}}),_callee)})));return function handlePreview(_x){return _ref2.apply(this,arguments)}}();return(0,react.useEffect)((function(){onChange(fileList)}),[fileList]),__jsx(react.Fragment,null,__jsx(upload.Z,{listType:"picture-card",fileList,onPreview:handlePreview,onChange:function handleChange(_ref3){var newFileList=_ref3.fileList;return setFileList(newFileList)}},fileList.length>=8?null:uploadButton),__jsx(modal.Z,{open:previewOpen,title:previewTitle,footer:null,onCancel:function handleCancel(){return setPreviewOpen(!1)}},__jsx(Image.Z,{alt:"example",src:previewImage})))};UploadCard.defaultProps={onChange:function onChange(newItemList){}},UploadCard.__docgenInfo={description:"",methods:[],displayName:"UploadCard",props:{onChange:{defaultValue:{value:"(newItemList: UploadFile[]) => {}",computed:!1},required:!1,tsType:{name:"signature",type:"function",raw:"(newItemList: UploadFile[]) => void",signature:{arguments:[{name:"newItemList",type:{name:"Array",elements:[{name:"UploadFile"}],raw:"UploadFile[]"}}],return:{name:"void"}}},description:""},itemList:{required:!0,tsType:{name:"Array",elements:[{name:"UploadFile"}],raw:"UploadFile[]"},description:""}}};const Components_UploadCard=UploadCard;try{UploadCard.displayName="UploadCard",UploadCard.__docgenInfo={description:"",displayName:"UploadCard",props:{itemList:{defaultValue:null,description:"",name:"itemList",required:!0,type:{name:"UploadFile<any>[]"}},onChange:{defaultValue:{value:"(newItemList: UploadFile[]) => {}"},description:"",name:"onChange",required:!1,type:{name:"(newItemList: UploadFile<any>[]) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/myll-ui/src/Components/UploadCard/index.tsx#UploadCard"]={docgenInfo:UploadCard.__docgenInfo,name:"UploadCard",path:"../../packages/myll-ui/src/Components/UploadCard/index.tsx#UploadCard"})}catch(__react_docgen_typescript_loader_error){}var _BasicUploadCard$para,_BasicUploadCard$para2,_BasicUploadCard$para3;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const UploadCard_stories={title:"Example/UploadCard",component:Components_UploadCard,tags:["autodocs"],argTypes:{},args:{itemList:[{uid:"-1",name:"image.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-2",name:"image.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-3",name:"image.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-4",name:"image.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}]}};var BasicUploadCard={args:{}};BasicUploadCard.parameters=_objectSpread(_objectSpread({},BasicUploadCard.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_BasicUploadCard$para=BasicUploadCard.parameters)||void 0===_BasicUploadCard$para?void 0:_BasicUploadCard$para.docs),{},{source:_objectSpread({originalSource:"{\n  args: {}\n}"},null===(_BasicUploadCard$para2=BasicUploadCard.parameters)||void 0===_BasicUploadCard$para2||null===(_BasicUploadCard$para3=_BasicUploadCard$para2.docs)||void 0===_BasicUploadCard$para3?void 0:_BasicUploadCard$para3.source)})})},"../../packages/myll-ui/src/Components/Image/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Components_Image});var esm_extends=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__jsx=react.createElement;function _uid(props){return __jsx("img",props)}_uid.displayName="image";try{image.displayName="image",image.__docgenInfo={description:"",displayName:"image",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/__mocks__/next/image.tsx#image"]={docgenInfo:image.__docgenInfo,name:"image",path:".storybook/__mocks__/next/image.tsx#image"})}catch(__react_docgen_typescript_loader_error){}var dist=__webpack_require__("../../packages/shared/dist/index.mjs"),_excluded=["src","alt","className"],Image_jsx=react.createElement,CustomImage=function CustomImage(_ref){var src=_ref.src,alt=_ref.alt,className=_ref.className,rest=(0,objectWithoutProperties.Z)(_ref,_excluded);return Image_jsx("div",{className:"".concat(className," relative overflow-hidden")},src?Image_jsx(_uid,(0,esm_extends.Z)({src,alt,fill:!0,style:{height:"100%",width:"100%"}},rest)):Image_jsx(dist.CardViewDefaultImg,(0,esm_extends.Z)({style:{height:"100%",width:"100%"}},rest)))};CustomImage.displayName="CustomImage",CustomImage.__docgenInfo={description:"",methods:[],displayName:"CustomImage"};const Components_Image=CustomImage;try{Image.displayName="Image",Image.__docgenInfo={description:"",displayName:"Image",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/myll-ui/src/Components/Image/index.tsx#Image"]={docgenInfo:Image.__docgenInfo,name:"Image",path:"../../packages/myll-ui/src/Components/Image/index.tsx#Image"})}catch(__react_docgen_typescript_loader_error){}}}]);