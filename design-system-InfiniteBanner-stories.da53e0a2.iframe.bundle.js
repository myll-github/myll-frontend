"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[962],{"./src/design-system/InfiniteBanner.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicFooterNavExample:()=>BasicFooterNavExample,default:()=>InfiniteBanner_stories});var defineProperty=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),Image=__webpack_require__("../../packages/myll-ui/src/Components/Image/index.tsx"),__jsx=react.createElement,InfiniteBanner=function InfiniteBanner(_ref){var data=_ref.data;return __jsx("div",{className:"inline-flex w-full overflow-hidden flex-nowrap"},__jsx("ul",{className:"flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none  animate-infinite-scroll"},data.map((function(ele){return __jsx("li",{key:ele.id,className:"relative z-10 cursor-pointer transition-transform duration-300 transform \n  w-60pxr h-60pxr hover:scale-98 hover:after:bg-black/20"},__jsx(Image.Z,{key:ele.id,className:"object-cover w-full h-full shrink-0",alt:ele.img,src:ele.img}))}))),__jsx("ul",{className:"flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll","aria-hidden":"true"},data.map((function(ele){return __jsx("li",{key:ele.id,className:"relative z-10 cursor-pointer transition-transform duration-300 transform \n  w-60pxr h-60pxr hover:scale-98 hover:after:bg-black/20"},__jsx(Image.Z,{key:ele.id,className:"object-cover w-full h-full rounded-full shrink-0",alt:ele.img,src:ele.img}))}))))};InfiniteBanner.displayName="InfiniteBanner",InfiniteBanner.__docgenInfo={description:"",methods:[],displayName:"InfiniteBanner",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"InfiniteBannerData"}],raw:"InfiniteBannerData[]"},description:""}}};const Components_InfiniteBanner=InfiniteBanner;try{InfiniteBanner.displayName="InfiniteBanner",InfiniteBanner.__docgenInfo={description:"",displayName:"InfiniteBanner",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"InfiniteBannerData[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/myll-ui/src/Components/InfiniteBanner/index.tsx#InfiniteBanner"]={docgenInfo:InfiniteBanner.__docgenInfo,name:"InfiniteBanner",path:"../../packages/myll-ui/src/Components/InfiniteBanner/index.tsx#InfiniteBanner"})}catch(__react_docgen_typescript_loader_error){}var _BasicFooterNavExampl,_BasicFooterNavExampl2,_BasicFooterNavExampl3;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const InfiniteBanner_stories={title:"Example/InfiniteBanner",component:Components_InfiniteBanner,argTypes:{},args:{data:Array.from({length:8}).map((function(_,i){return{id:i,img:"https://xsgames.co/randomusers/avatar.php?g=pixel&key=".concat(i)}}))}};var BasicFooterNavExample={args:{}};BasicFooterNavExample.parameters=_objectSpread(_objectSpread({},BasicFooterNavExample.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_BasicFooterNavExampl=BasicFooterNavExample.parameters)||void 0===_BasicFooterNavExampl?void 0:_BasicFooterNavExampl.docs),{},{source:_objectSpread({originalSource:"{\n  args: {}\n}"},null===(_BasicFooterNavExampl2=BasicFooterNavExample.parameters)||void 0===_BasicFooterNavExampl2||null===(_BasicFooterNavExampl3=_BasicFooterNavExampl2.docs)||void 0===_BasicFooterNavExampl3?void 0:_BasicFooterNavExampl3.source)})})},"../../packages/myll-ui/src/Components/Image/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Components_Image});var react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__jsx=react.createElement;function _uid(props){return __jsx("img",props)}_uid.displayName="image";try{image.displayName="image",image.__docgenInfo={description:"",displayName:"image",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/__mocks__/next/image.tsx#image"]={docgenInfo:image.__docgenInfo,name:"image",path:".storybook/__mocks__/next/image.tsx#image"})}catch(__react_docgen_typescript_loader_error){}var dist=__webpack_require__("../../packages/shared/dist/index.mjs"),Image_jsx=react.createElement,CustomImage=function CustomImage(_ref){var src=_ref.src,alt=_ref.alt,className=_ref.className;return Image_jsx("div",{className:"".concat(className," relative overflow-hidden")},src?Image_jsx(_uid,{src,alt,fill:!0,style:{height:"100%",width:"100%"}}):Image_jsx(dist.CardViewDefaultImg,{style:{height:"100%",width:"100%"}}))};CustomImage.displayName="CustomImage",CustomImage.__docgenInfo={description:"",methods:[],displayName:"CustomImage"};const Components_Image=CustomImage;try{Image.displayName="Image",Image.__docgenInfo={description:"",displayName:"Image",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/myll-ui/src/Components/Image/index.tsx#Image"]={docgenInfo:Image.__docgenInfo,name:"Image",path:"../../packages/myll-ui/src/Components/Image/index.tsx#Image"})}catch(__react_docgen_typescript_loader_error){}}}]);