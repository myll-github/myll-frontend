"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[982],{"./src/design-system/MenuList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AdvancedMenuList:()=>AdvancedMenuList,BasicMenuList:()=>BasicMenuList,SelectedMenuList:()=>SelectedMenuList,default:()=>MenuList_stories});var defineProperty=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),list=__webpack_require__("../../node_modules/.pnpm/antd@5.6.2_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/list/index.js"),dist=__webpack_require__("../../packages/shared/dist/index.mjs"),Button=__webpack_require__("../../packages/myll-ui/src/Components/Button/Button.tsx"),Image=__webpack_require__("../../packages/myll-ui/src/Components/Image/index.tsx"),__jsx=react.createElement,ButtonCondition=(0,react.memo)((function(_ref){switch(_ref.isSelected){case!0:return __jsx(Button.Z,{type:"button",variant:"mini"},"선택");case!1:return __jsx(Button.Z,{type:"button",variant:"mini",color:"outlined"},"선택");default:return __jsx(react.Fragment,null)}})),MenuList=function MenuList(_ref2){var data=_ref2.data,onChange=_ref2.onChange,isSelectedButtonNeeded=_ref2.isSelectedButtonNeeded,size=_ref2.size,_useCheckList=(0,dist.useCheckList)({onChange}),checkMap=_useCheckList.checkMap,ToggleCardStatusByClick=_useCheckList.ToggleCardStatusByClick,isAdvanced="advanced"===size;return __jsx(list.Z,{itemLayout:"horizontal",dataSource:data,renderItem:function renderItem(item){return __jsx("li",{key:item.id,className:"flex flex-row border-none w-full h-".concat(isAdvanced?"110pxr":"70pxr"," px-20pxr py-10pxr"),onClick:function onClick(){return isSelectedButtonNeeded&&ToggleCardStatusByClick(item)}},__jsx(Image.Z,{className:"".concat(isAdvanced?"w-90pxr h-90pxr":"w-50pxr h-50pxr"," mr-14pxr rounded-md bg-GRAY_30"),src:item.img,alt:item.mainTitle}),__jsx("div",{className:"relative flex w-full flex-col justify-center py-4pxr"},__jsx("span",{className:"SUBTITLE-T2 text-GRAY_80"},item.mainTitle),__jsx("span",{className:"SUBTITLE-T8 text-GRAY_70"},item.subTitle),isSelectedButtonNeeded&&__jsx("div",{className:"absolute top-1/2 transform -translate-y-1/2 right-0"},__jsx(ButtonCondition,{isSelected:checkMap.has(item.id)}))))}})};MenuList.displayName="MenuList",MenuList.defaultProps={isSelectedButtonNeeded:!1,onChange:dist.noop,size:"default"},MenuList.__docgenInfo={description:"",methods:[],displayName:"MenuList",props:{isSelectedButtonNeeded:{defaultValue:{value:"false",computed:!1},required:!1,tsType:{name:"boolean"},description:"Whether the list need button or not"},onChange:{defaultValue:{value:"noop",computed:!0},required:!1,tsType:{name:"OnToggleStatusType",elements:[{name:"ItemType"}],raw:"OnToggleStatusType<ItemType>"},description:"Callback function that is fired when an item's selection status changes"},size:{defaultValue:{value:"'default'",computed:!1},required:!1,tsType:{name:"union",raw:"'advanced' | 'default'",elements:[{name:"literal",value:"'advanced'"},{name:"literal",value:"'default'"}]},description:"Size of the list, either 'advanced' or 'default'"},data:{required:!0,tsType:{name:"Array",elements:[{name:"ItemType"}],raw:"ItemType[]"},description:"Array of items to be rendered in the list"}}};const Components_MenuList=MenuList;try{MenuList.displayName="MenuList",MenuList.__docgenInfo={description:"",displayName:"MenuList",props:{data:{defaultValue:null,description:"Array of items to be rendered in the list",name:"data",required:!0,type:{name:"ItemType[]"}},onChange:{defaultValue:null,description:"Callback function that is fired when an item's selection status changes",name:"onChange",required:!1,type:{name:"OnToggleStatusType<ItemType>"}},isSelectedButtonNeeded:{defaultValue:{value:"false"},description:"Whether the list need button or not",name:"isSelectedButtonNeeded",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"'default' as 'advanced' | 'default'"},description:"Size of the list, either 'advanced' or 'default'",name:"size",required:!1,type:{name:"enum",value:[{value:'"advanced"'},{value:'"default"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/myll-ui/src/Components/MenuList/index.tsx#MenuList"]={docgenInfo:MenuList.__docgenInfo,name:"MenuList",path:"../../packages/myll-ui/src/Components/MenuList/index.tsx#MenuList"})}catch(__react_docgen_typescript_loader_error){}var _BasicMenuList$parame,_BasicMenuList$parame2,_BasicMenuList$parame3,_SelectedMenuList$par,_SelectedMenuList$par2,_SelectedMenuList$par3,_AdvancedMenuList$par,_AdvancedMenuList$par2,_AdvancedMenuList$par3;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const MenuList_stories={title:"Example/MenuList",component:Components_MenuList,tags:["autodocs"],argTypes:{size:["advanced","default"]},args:{data:Array.from({length:23}).map((function(_,i){return{id:i,href:"https://ant.design",img:"https://xsgames.co/randomusers/avatar.php?g=pixel&key=".concat(i),mainTitle:"ant design part ".concat(i),subTitle:"Ant Design"}}))}};var BasicMenuList={args:{}},SelectedMenuList={args:{isSelectedButtonNeeded:!0}},AdvancedMenuList={args:{size:"advanced"}};BasicMenuList.parameters=_objectSpread(_objectSpread({},BasicMenuList.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_BasicMenuList$parame=BasicMenuList.parameters)||void 0===_BasicMenuList$parame?void 0:_BasicMenuList$parame.docs),{},{source:_objectSpread({originalSource:"{\n  args: {}\n}"},null===(_BasicMenuList$parame2=BasicMenuList.parameters)||void 0===_BasicMenuList$parame2||null===(_BasicMenuList$parame3=_BasicMenuList$parame2.docs)||void 0===_BasicMenuList$parame3?void 0:_BasicMenuList$parame3.source)})}),SelectedMenuList.parameters=_objectSpread(_objectSpread({},SelectedMenuList.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_SelectedMenuList$par=SelectedMenuList.parameters)||void 0===_SelectedMenuList$par?void 0:_SelectedMenuList$par.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    isSelectedButtonNeeded: true\n  }\n}"},null===(_SelectedMenuList$par2=SelectedMenuList.parameters)||void 0===_SelectedMenuList$par2||null===(_SelectedMenuList$par3=_SelectedMenuList$par2.docs)||void 0===_SelectedMenuList$par3?void 0:_SelectedMenuList$par3.source)})}),AdvancedMenuList.parameters=_objectSpread(_objectSpread({},AdvancedMenuList.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_AdvancedMenuList$par=AdvancedMenuList.parameters)||void 0===_AdvancedMenuList$par?void 0:_AdvancedMenuList$par.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    size: 'advanced'\n  }\n}"},null===(_AdvancedMenuList$par2=AdvancedMenuList.parameters)||void 0===_AdvancedMenuList$par2||null===(_AdvancedMenuList$par3=_AdvancedMenuList$par2.docs)||void 0===_AdvancedMenuList$par3?void 0:_AdvancedMenuList$par3.source)})})},"../../packages/myll-ui/src/Components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Button_Button});var esm_extends=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),es_button=__webpack_require__("../../node_modules/.pnpm/antd@5.6.2_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/button/index.js"),buttonColorMap={gradient:{backgroundColor:"bg-gradient-to-l from-PRIMARY_BLUE to-cyan-500 enabled:active:from-PRIMARY_BLUE enabled:active:to-PRIMARY_BLUE disabled:opacity-40 ",color:"text-WHITE enabled:hover:text-WHITE focus-within:text-WHITE enabled:active:text-WHITE",border:"border-0",transition:"transition-all duration-500"},primary:{backgroundColor:"bg-PRIMARY_BLUE disabled:bg-PRIMARY_BLUE disabled:opacity-40",color:"text-WHITE disabled:text-WHITE"},secondary:{backgroundColor:"bg-SUB_BLUE_2 enabled:hover:bg-[#BCD9FF] enabled:active:bg-[#D1DCEB] disabled:opacity-40",color:"text-PRIMARY_BLUE disabled:text-PRIMARY_BLUE"},outlined:{backgroundColor:"bg-WHITE disabled:opacity-40 enabled:active:bg-GRAY_20",color:"text-GRAY_90",border:"border border-GRAY_30"},warning:{backgroundColor:"bg-[#FFEFF1] enabled:active:bg-WARNING_2 disabled:opacity-40",color:"text-WARNING_1 enabled:hover:text-WARNING_1 disabled:text-WARNING_1 disabled:bg-[#FFEFF1]",border:"border-0"},text:{backgroundColor:"disabled:text-GRAY_30 enabled:active:bg-GRAY_20 disabled:opacity-40",color:"text-PRIMARY_BLUE disabled:text-PRIMARY_BLUE disabled:bg-WHITE",border:"border-0"}},applyClassName=function applyClassName(obj){return Object.values(obj).reduce((function(total,value){return"".concat(total," ").concat(value)}),"")};const util={block:{width:"w-full max-w-[360px]",height:"h-54pxr",padding:"px-20pxr",font:"BUTTON-LARGE",borderRadius:"rounded-[8px]"},large:{width:"min-w-120pxr",height:"h-54pxr",padding:"px-20pxr",font:"BUTTON-LARGE",borderRadius:"rounded-[10px]"},medium:{width:"min-w-80pxr",height:"h-40pxr",padding:"px-20pxr",font:"BUTTON-MEDIUM",borderRadius:"rounded-[8px]"},small:{width:"min-w-60pxr",height:"h-32pxr",padding:"px-10pxr",font:"BUTTON-SMALL",borderRadius:"rounded-[6px]"},mini:{width:"min-w-50pxr",height:"h-24pxr",padding:"px-10pxr",font:"BUTTON-MEDIUM",borderRadius:"rounded-[6px]"}};var _excluded=["variant","type","color"],__jsx=react.createElement,Button=function Button(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"medium":_ref$variant,_ref$type=_ref.type,type=void 0===_ref$type?"button":_ref$type,_ref$color=_ref.color,color=void 0===_ref$color?"primary":_ref$color,rest=(0,objectWithoutProperties.Z)(_ref,_excluded),variantJSON=util[variant],colorJSON=buttonColorMap[color];return __jsx(es_button.ZP,(0,esm_extends.Z)({},function getAntdButtonType(varinant,color){return"primary"===color?{type:"primary",danger:!1}:{type:"",danger:!1}}(0,color),{htmlType:type,className:"flex justify-center items-center disabled:cursor-not-allowed ".concat(applyClassName(colorJSON)," ").concat(applyClassName(variantJSON))},rest))};Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:"'medium'",computed:!1},required:!1},type:{defaultValue:{value:"'button'",computed:!1},required:!1},color:{defaultValue:{value:"'primary'",computed:!1},required:!1}}};const Button_Button=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{type:{defaultValue:{value:"button"},description:"Defines the type of the button.",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},variant:{defaultValue:{value:"medium"},description:"Determines the size of the button.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"block"'},{value:'"medium"'},{value:'"mini"'}]}},children:{defaultValue:null,description:"Determines the text displayed on the button.",name:"children",required:!0,type:{name:"string"}},color:{defaultValue:{value:"primary"},description:"Determines the color of the button. default is 'primary'",name:"color",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"warning"'},{value:'"primary"'},{value:'"secondary"'},{value:'"outlined"'},{value:'"gradient"'}]}},disabled:{defaultValue:null,description:"Determines the enable/disable state of the button. default is 'false'",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement> & MouseEventHandler<HTMLButtonElement>"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"string"}},htmlType:{defaultValue:null,description:"",name:"htmlType",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/myll-ui/src/Components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"../../packages/myll-ui/src/Components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/myll-ui/src/Components/Image/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Components_Image});var react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__jsx=react.createElement;function _uid(props){return __jsx("img",props)}_uid.displayName="image";try{image.displayName="image",image.__docgenInfo={description:"",displayName:"image",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/__mocks__/next/image.tsx#image"]={docgenInfo:image.__docgenInfo,name:"image",path:".storybook/__mocks__/next/image.tsx#image"})}catch(__react_docgen_typescript_loader_error){}var Image_jsx=react.createElement,CustomImage=function CustomImage(_ref){var src=_ref.src,alt=_ref.alt,className=_ref.className;return Image_jsx("div",{className:"".concat(className," overflow-hidden")},Image_jsx(_uid,{src,alt,fill:!0,style:{height:"100%",width:"100%"}}))};CustomImage.displayName="CustomImage",CustomImage.__docgenInfo={description:"",methods:[],displayName:"CustomImage"};const Components_Image=CustomImage;try{Image.displayName="Image",Image.__docgenInfo={description:"",displayName:"Image",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/myll-ui/src/Components/Image/index.tsx#Image"]={docgenInfo:Image.__docgenInfo,name:"Image",path:"../../packages/myll-ui/src/Components/Image/index.tsx#Image"})}catch(__react_docgen_typescript_loader_error){}}}]);