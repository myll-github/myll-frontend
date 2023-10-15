"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[374],{"./.storybook/__mocks__/next/router.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>useRouter});var useRouter=function useRouter(){return{route:"/",pathname:"",query:"",asPath:"",prefetch:function prefetch(){},push:function push(){}}}},"./src/design-system/AppBar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicAppBarExample:()=>BasicAppBarExample,default:()=>AppBar_stories});var defineProperty=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),next_router=__webpack_require__("./.storybook/__mocks__/next/router.tsx"),dist=__webpack_require__("../../packages/shared/dist/index.mjs"),__jsx=react.createElement,AppBar=function AppBar(_ref){var children=_ref.children;return __jsx(react.Fragment,null,__jsx("nav",{className:"fixed top-0 z-10 flex flex-row items-center justify-center w-full h-76pxr pt-30pxr bg-WHITE"},__jsx("div",{className:"relative flex flex-col justify-center w-full h-full md:w-[768px]"},children)),__jsx("div",{role:"none",className:"h-76pxr"}))},LeftSection=function LeftSection(_ref2){var className=_ref2.className,children=_ref2.children;return __jsx("div",{className:"absolute flex items-center justify-center left-20pxr ".concat(className)},children)};LeftSection.displayName="LeftSection",LeftSection.defaultProps={className:""};var MiddleSection=function MiddleSection(_ref3){var className=_ref3.className,children=_ref3.children;return __jsx("div",{className:"SUBTITLE-T3 absolute flex items-center justify-center  left-1/2 transform -translate-x-1/2 ".concat(className)},children)};MiddleSection.displayName="MiddleSection",MiddleSection.defaultProps={className:""};var RightSection=function RightSection(_ref4){var className=_ref4.className,children=_ref4.children;return __jsx("div",{className:"absolute items-center flex justify-center right-20pxr ".concat(className)},children)};RightSection.displayName="RightSection",RightSection.defaultProps={className:""};var FallbackButton=function FallbackButton(_ref5){var Icon=_ref5.Icon,router=(0,next_router.t)();return __jsx("button",{type:"button",onClick:function handleGoBack(){router.back()}},(0,react.cloneElement)(Icon,{className:"fill-GRAY_80"}))};FallbackButton.displayName="FallbackButton",FallbackButton.defaultProps={Icon:__jsx(dist.ICON_ARROW_LEFT,null)},AppBar.LeftSection=LeftSection,AppBar.MiddleSection=MiddleSection,AppBar.RightSection=RightSection,AppBar.FallbackButton=FallbackButton,AppBar.__docgenInfo={description:"",methods:[{name:"LeftSection",docblock:null,modifiers:["static"],params:[{name:"{ className, children }: SectionProps",type:{name:"SectionProps",alias:"SectionProps"}}],returns:null},{name:"MiddleSection",docblock:null,modifiers:["static"],params:[{name:"{ className, children }: SectionProps",type:{name:"SectionProps",alias:"SectionProps"}}],returns:null},{name:"RightSection",docblock:null,modifiers:["static"],params:[{name:"{ className, children }: SectionProps",type:{name:"SectionProps",alias:"SectionProps"}}],returns:null},{name:"FallbackButton",docblock:null,modifiers:["static"],params:[{name:"{ Icon }: { Icon?: ReactElement }",type:{name:"signature",type:"object",raw:"{ Icon?: ReactElement }",signature:{properties:[{key:"Icon",value:{name:"ReactElement",required:!1}}]}}}],returns:null}],displayName:"AppBar",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const Components_AppBar=AppBar;try{AppBar.displayName="AppBar",AppBar.__docgenInfo={description:"",displayName:"AppBar",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/myll-ui/src/Components/AppBar/index.tsx#AppBar"]={docgenInfo:AppBar.__docgenInfo,name:"AppBar",path:"../../packages/myll-ui/src/Components/AppBar/index.tsx#AppBar"})}catch(__react_docgen_typescript_loader_error){}var _BasicAppBarExample$p,_BasicAppBarExample$p2,_BasicAppBarExample$p3,AppBar_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const AppBar_stories={title:"Example/AppBar",component:Components_AppBar,argTypes:{},render:function render(args){return AppBar_stories_jsx("div",{className:"flex flex-row justify-center w-full"},AppBar_stories_jsx(Components_AppBar,args))}};var BasicAppBarExample={args:{children:AppBar_stories_jsx(react.Fragment,null,AppBar_stories_jsx(Components_AppBar.LeftSection,null,AppBar_stories_jsx(Components_AppBar.FallbackButton,null)),AppBar_stories_jsx(Components_AppBar.MiddleSection,null,"example"),AppBar_stories_jsx(Components_AppBar.RightSection,null,"example"))}};BasicAppBarExample.parameters=_objectSpread(_objectSpread({},BasicAppBarExample.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_BasicAppBarExample$p=BasicAppBarExample.parameters)||void 0===_BasicAppBarExample$p?void 0:_BasicAppBarExample$p.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    children: <>\n        <AppBar.LeftSection>\n          <AppBar.FallbackButton />\n        </AppBar.LeftSection>\n        <AppBar.MiddleSection>example</AppBar.MiddleSection>\n        <AppBar.RightSection>example</AppBar.RightSection>\n      </>\n  }\n}"},null===(_BasicAppBarExample$p2=BasicAppBarExample.parameters)||void 0===_BasicAppBarExample$p2||null===(_BasicAppBarExample$p3=_BasicAppBarExample$p2.docs)||void 0===_BasicAppBarExample$p3?void 0:_BasicAppBarExample$p3.source)})})}}]);