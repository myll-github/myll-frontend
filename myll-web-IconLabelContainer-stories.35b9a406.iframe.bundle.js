"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[299],{"./.storybook/__mocks__/next/router.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>useRouter});var useRouter=function useRouter(){return{route:"/",pathname:"",query:"",asPath:"",prefetch:function prefetch(){},push:function push(){}}}},"../web/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>components_IconLabel_IconLabel,ZV:()=>IconLabel_IconLabelContainer,W_:()=>components_Navigation});var react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),dist=__webpack_require__("../../packages/shared/dist/index.mjs"),__jsx=react.createElement,IconComponentMap={CAMERA:__jsx(dist.ICON_CAMERA,null),HOUSE:__jsx(dist.ICON_HOUSE,null),BACKPACK:__jsx(dist.ICON_BACKPACK,null),OWL:__jsx(dist.ICON_OWL,null),WASTEBASKET:__jsx(dist.ICON_WASTEBASKET,null),SHUSHING_FACE:__jsx(dist.ICON_SHUSHING_FACE,null),BALANCE_SCALE:__jsx(dist.ICON_BALANCE_SCALE,null),CITYSCAPE:__jsx(dist.ICON_CITYSCAPE,null),SHOPPING_BAGS:__jsx(dist.ICON_SHOPPING_BAGS,null)},IconLabelMap={CAMERA:"사진촬영 금지구역이 있어요",HOUSE:"주거지역이에요",BACKPACK:"공공기물을 들고가면 안돼요",OWL:"야생동물 주의",WASTEBASKET:"쓰레기는 쓰레기통에",SHUSHING_FACE:"소근소근 대화해주세요",BALANCE_SCALE:"질서를 지켜주세요",CITYSCAPE:"뷰 맛집",SHOPPING_BAGS:"기념품 구매 가능"},IconLabel_jsx=react.createElement,IconLabel_IconLabel=function IconLabel(_ref){var label=_ref.label,isSelected=_ref.isSelected,handleToggleLabel=_ref.handleToggleLabel,disabled=_ref.disabled;return IconLabel_jsx("button",{onClick:function onClick(){return handleToggleLabel(label)},type:"button",className:"flex flex-row items-center rounded-md px-10pxr gap-4pxr h-32pxr BUTTON-SMALL ".concat(isSelected?"text-WHITE bg-SUB_BLUE_1":"text-GRAY_90 bg-WHITE"),disabled},IconComponentMap[label],IconLabel_jsx("span",null,IconLabelMap[label]))};IconLabel_IconLabel.displayName="IconLabel",IconLabel_IconLabel.__docgenInfo={description:"",methods:[],displayName:"IconLabel",props:{disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const components_IconLabel_IconLabel=IconLabel_IconLabel;IconLabel_IconLabel.defaultProps={disabled:!1};try{IconLabel_IconLabel.displayName="IconLabel",IconLabel_IconLabel.__docgenInfo={description:"",displayName:"IconLabel",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"enum",value:[{value:'"CAMERA"'},{value:'"HOUSE"'},{value:'"BACKPACK"'},{value:'"OWL"'},{value:'"WASTEBASKET"'},{value:'"SHUSHING_FACE"'},{value:'"BALANCE_SCALE"'},{value:'"CITYSCAPE"'},{value:'"SHOPPING_BAGS"'}]}},isSelected:{defaultValue:null,description:"",name:"isSelected",required:!0,type:{name:"boolean"}},handleToggleLabel:{defaultValue:null,description:"",name:"handleToggleLabel",required:!0,type:{name:"(label: any) => void"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../web/src/common/components/IconLabel/IconLabel.tsx#IconLabel"]={docgenInfo:IconLabel_IconLabel.__docgenInfo,name:"IconLabel",path:"../web/src/common/components/IconLabel/IconLabel.tsx#IconLabel"})}catch(__react_docgen_typescript_loader_error){}var defineProperty=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),IconLabelContainer_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var iconArray=["CAMERA","HOUSE","BACKPACK","OWL","WASTEBASKET","SHUSHING_FACE","BALANCE_SCALE","CITYSCAPE","SHOPPING_BAGS"],IconLabelContainer_IconLabelContainer=function IconLabelContainer(_ref){var className=_ref.className,initLabels=_ref.initLabels,onChange=_ref.onChange,_useState=(0,react.useState)(initLabels),labels=_useState[0],setLabels=_useState[1],handleToggleLabel=function handleToggleLabel(label){labels[label]?setLabels(_objectSpread(_objectSpread({},labels),{},(0,defineProperty.Z)({},label,!1))):setLabels(_objectSpread(_objectSpread({},labels),{},(0,defineProperty.Z)({},label,!0)))};return(0,react.useEffect)((function(){onChange(labels)}),[labels,onChange]),IconLabelContainer_jsx("div",{className:"flex flex-row flex-wrap gap-x-4pxr gap-y-10pxr ".concat(className)},iconArray.map((function(iconLabel){return IconLabelContainer_jsx(components_IconLabel_IconLabel,{key:iconLabel,label:iconLabel,isSelected:!!labels[iconLabel],handleToggleLabel})})))};IconLabelContainer_IconLabelContainer.displayName="IconLabelContainer",IconLabelContainer_IconLabelContainer.defaultProps={initLabels:{},className:""},IconLabelContainer_IconLabelContainer.__docgenInfo={description:"",methods:[],displayName:"IconLabelContainer",props:{initLabels:{defaultValue:{value:"{}",computed:!1},required:!1,tsType:{name:"IconLabelContainerType"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(newLabel: IconLabelContainerType) => void",signature:{arguments:[{name:"newLabel",type:{name:"IconLabelContainerType"}}],return:{name:"void"}}},description:""}}};const IconLabel_IconLabelContainer=IconLabelContainer_IconLabelContainer;try{IconLabelContainer_IconLabelContainer.displayName="IconLabelContainer",IconLabelContainer_IconLabelContainer.__docgenInfo={description:"",displayName:"IconLabelContainer",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},initLabels:{defaultValue:{value:"{}"},description:"",name:"initLabels",required:!1,type:{name:"IconLabelContainerType"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(newLabel: IconLabelContainerType) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../web/src/common/components/IconLabel/IconLabelContainer.tsx#IconLabelContainer"]={docgenInfo:IconLabelContainer_IconLabelContainer.__docgenInfo,name:"IconLabelContainer",path:"../web/src/common/components/IconLabel/IconLabelContainer.tsx#IconLabelContainer"})}catch(__react_docgen_typescript_loader_error){}try{IconLabel.displayName="IconLabel",IconLabel.__docgenInfo={description:"",displayName:"IconLabel",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"enum",value:[{value:'"CAMERA"'},{value:'"HOUSE"'},{value:'"BACKPACK"'},{value:'"OWL"'},{value:'"WASTEBASKET"'},{value:'"SHUSHING_FACE"'},{value:'"BALANCE_SCALE"'},{value:'"CITYSCAPE"'},{value:'"SHOPPING_BAGS"'}]}},isSelected:{defaultValue:null,description:"",name:"isSelected",required:!0,type:{name:"boolean"}},handleToggleLabel:{defaultValue:null,description:"",name:"handleToggleLabel",required:!0,type:{name:"(label: any) => void"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../web/src/common/components/IconLabel/index.tsx#IconLabel"]={docgenInfo:IconLabel.__docgenInfo,name:"IconLabel",path:"../web/src/common/components/IconLabel/index.tsx#IconLabel"})}catch(__react_docgen_typescript_loader_error){}try{IconLabelContainer.displayName="IconLabelContainer",IconLabelContainer.__docgenInfo={description:"",displayName:"IconLabelContainer",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},initLabels:{defaultValue:{value:"{}"},description:"",name:"initLabels",required:!1,type:{name:"IconLabelContainerType"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(newLabel: IconLabelContainerType) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../web/src/common/components/IconLabel/index.tsx#IconLabelContainer"]={docgenInfo:IconLabelContainer.__docgenInfo,name:"IconLabelContainer",path:"../web/src/common/components/IconLabel/index.tsx#IconLabelContainer"})}catch(__react_docgen_typescript_loader_error){}var link_jsx=react.createElement;function _uid(_ref){var children=_ref.children;return link_jsx("a",null,children)}_uid.displayName="link";try{link.displayName="link",link.__docgenInfo={description:"",displayName:"link",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/__mocks__/next/link.tsx#link"]={docgenInfo:link.__docgenInfo,name:"link",path:".storybook/__mocks__/next/link.tsx#link"})}catch(__react_docgen_typescript_loader_error){}var next_router=__webpack_require__("./.storybook/__mocks__/next/router.tsx"),FooterNav_jsx=react.createElement,ToggleIcon=function ToggleIcon(_ref){var isActive=_ref.isActive,IconActive=_ref.IconActive,IconInactive=_ref.IconInactive;return FooterNav_jsx(isActive?IconActive:IconInactive,{width:"30px",height:"30px",className:"mb-3pxr"})},FooterNav=function FooterNav(_ref2){var children=_ref2.children,className=_ref2.className;return FooterNav_jsx("nav",{className:"fixed left-1/2 -translate-x-1/2 bottom-0 bg-WHITE flex w-screen md:w-[768px] max-h-98px flex-row justify-around border-t border-solid border-GRAY_30 p-l-24pxr p-r-24pxr transform ".concat(className)},children)};FooterNav.displayName="FooterNav";var BaseIconStyle="w-full h-full flex flex-col justify-center leading-[14px] items-center pt-20pxr pb-30pxr GNB_ACTIVE";FooterNav.HomeIcon=function(_ref3){var _ref3$isActive=_ref3.isActive,isActive=void 0!==_ref3$isActive&&_ref3$isActive;return FooterNav_jsx("div",{className:"".concat(BaseIconStyle," ").concat(isActive?"text-GRAY_90":"text-GRAY_70")},FooterNav_jsx(ToggleIcon,{isActive,IconActive:dist.ICON_HOME_ACTIVE,IconInactive:dist.ICON_HOME_INACTIVE}),"HOME")},FooterNav.MapIcon=function(_ref4){var _ref4$isActive=_ref4.isActive,isActive=void 0!==_ref4$isActive&&_ref4$isActive;return FooterNav_jsx("div",{className:"".concat(BaseIconStyle," ").concat(isActive?"text-GRAY_90":"text-GRAY_70")},FooterNav_jsx(ToggleIcon,{isActive,IconActive:dist.ICON_MAP_ACTIVE,IconInactive:dist.ICON_MAP_INACTIVE}),"MAP")},FooterNav.BookIcon=function(_ref5){var _ref5$isActive=_ref5.isActive,isActive=void 0!==_ref5$isActive&&_ref5$isActive;return FooterNav_jsx("div",{className:"".concat(BaseIconStyle," ").concat(isActive?"text-GRAY_90":"text-GRAY_70")},FooterNav_jsx(ToggleIcon,{isActive,IconActive:dist.ICON_BOOK_ACTIVE,IconInactive:dist.ICON_BOOK_INACTIVE}),"BOOK")},FooterNav.LocalIcon=function(_ref6){var _ref6$isActive=_ref6.isActive,isActive=void 0!==_ref6$isActive&&_ref6$isActive;return FooterNav_jsx("div",{className:"".concat(BaseIconStyle," ").concat(isActive?"text-GRAY_90":"text-GRAY_70")},FooterNav_jsx(ToggleIcon,{isActive,IconActive:dist.ICON_MYLL_ACTIVE,IconInactive:dist.ICON_MYLL_INACTIVE}),"LOCAL")},FooterNav.MyllIcon=function(_ref7){var _ref7$isActive=_ref7.isActive,isActive=void 0!==_ref7$isActive&&_ref7$isActive;return FooterNav_jsx("div",{className:"".concat(BaseIconStyle," ").concat(isActive?"text-GRAY_90":"text-GRAY_70")},FooterNav_jsx(ToggleIcon,{isActive,IconActive:dist.ICON_LOCAL_ACTIVE,IconInactive:dist.ICON_LOCAL_INACTIVE}),"MYLL")},FooterNav.__docgenInfo={description:"",methods:[{name:"HomeIcon",docblock:null,modifiers:["static"],params:[{name:"{ isActive = false }: { isActive: boolean }",type:{name:"signature",type:"object",raw:"{ isActive: boolean }",signature:{properties:[{key:"isActive",value:{name:"boolean",required:!0}}]}}}],returns:null},{name:"MapIcon",docblock:null,modifiers:["static"],params:[{name:"{ isActive = false }: { isActive: boolean }",type:{name:"signature",type:"object",raw:"{ isActive: boolean }",signature:{properties:[{key:"isActive",value:{name:"boolean",required:!0}}]}}}],returns:null},{name:"BookIcon",docblock:null,modifiers:["static"],params:[{name:"{ isActive = false }: { isActive: boolean }",type:{name:"signature",type:"object",raw:"{ isActive: boolean }",signature:{properties:[{key:"isActive",value:{name:"boolean",required:!0}}]}}}],returns:null},{name:"LocalIcon",docblock:null,modifiers:["static"],params:[{name:"{ isActive = false }: { isActive: boolean }",type:{name:"signature",type:"object",raw:"{ isActive: boolean }",signature:{properties:[{key:"isActive",value:{name:"boolean",required:!0}}]}}}],returns:null},{name:"MyllIcon",docblock:null,modifiers:["static"],params:[{name:"{ isActive = false }: { isActive: boolean }",type:{name:"signature",type:"object",raw:"{ isActive: boolean }",signature:{properties:[{key:"isActive",value:{name:"boolean",required:!0}}]}}}],returns:null}],displayName:"FooterNav",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!0,tsType:{name:"string"},description:""}}};const Navigation_FooterNav=FooterNav;try{FooterNav.displayName="FooterNav",FooterNav.__docgenInfo={description:"",displayName:"FooterNav",props:{className:{defaultValue:null,description:"",name:"className",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../web/src/common/components/Navigation/FooterNav/index.tsx#FooterNav"]={docgenInfo:FooterNav.__docgenInfo,name:"FooterNav",path:"../web/src/common/components/Navigation/FooterNav/index.tsx#FooterNav"})}catch(__react_docgen_typescript_loader_error){}var Navigation_jsx=react.createElement,Navigation=function Navigation(_ref){var className=_ref.className,pathName=(0,next_router.t)().pathname;return Navigation_jsx(Navigation_FooterNav,{className},Navigation_jsx(_uid,{href:"/book",className:"flex-shrink-0"},Navigation_jsx(Navigation_FooterNav.BookIcon,{isActive:pathName.startsWith("/book")})),Navigation_jsx(_uid,{href:"/home",className:"flex-shrink-0"},Navigation_jsx(Navigation_FooterNav.HomeIcon,{isActive:pathName.startsWith("/home")})),Navigation_jsx(_uid,{href:"/local",className:"flex-shrink-0"},Navigation_jsx(Navigation_FooterNav.LocalIcon,{isActive:pathName.startsWith("/local")})),Navigation_jsx(_uid,{href:"/map",className:"flex-shrink-0"},Navigation_jsx(Navigation_FooterNav.MapIcon,{isActive:pathName.startsWith("/map")})),Navigation_jsx(_uid,{href:"/myll",className:"flex-shrink-0"},Navigation_jsx(Navigation_FooterNav.MyllIcon,{isActive:pathName.startsWith("/myll")})))};Navigation.displayName="Navigation",Navigation.defaultProps={className:""},Navigation.__docgenInfo={description:"",methods:[],displayName:"Navigation",props:{className:{defaultValue:{value:"''",computed:!1},required:!1,tsType:{name:"string"},description:""}}};const components_Navigation=Navigation;try{Navigation.displayName="Navigation",Navigation.__docgenInfo={description:"",displayName:"Navigation",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../web/src/common/components/Navigation/index.tsx#Navigation"]={docgenInfo:Navigation.__docgenInfo,name:"Navigation",path:"../web/src/common/components/Navigation/index.tsx#Navigation"})}catch(__react_docgen_typescript_loader_error){}},"./src/myll-web/IconLabelContainer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicIconLabelExample:()=>BasicIconLabelExample,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _BasicIconLabelExampl,_BasicIconLabelExampl2,_BasicIconLabelExampl3,_home_runner_work_myll_frontend_myll_frontend_node_modules_pnpm_babel_runtime_7_21_5_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_myll_frontend_myll_frontend_node_modules_pnpm_babel_runtime_7_21_5_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"Example/IconLabel/Container",component:__webpack_require__("../web/index.tsx").ZV,argTypes:{},args:{label:"CAMERA"}};var BasicIconLabelExample={args:{}};BasicIconLabelExample.parameters=_objectSpread(_objectSpread({},BasicIconLabelExample.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_BasicIconLabelExampl=BasicIconLabelExample.parameters)||void 0===_BasicIconLabelExampl?void 0:_BasicIconLabelExampl.docs),{},{source:_objectSpread({originalSource:"{\n  args: {}\n}"},null===(_BasicIconLabelExampl2=BasicIconLabelExample.parameters)||void 0===_BasicIconLabelExampl2||null===(_BasicIconLabelExampl3=_BasicIconLabelExampl2.docs)||void 0===_BasicIconLabelExampl3?void 0:_BasicIconLabelExampl3.source)})})}}]);