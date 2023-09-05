"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[639],{"./src/design-system/Dropdown.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicDropdownExample:()=>BasicDropdownExample,default:()=>Dropdown_stories});var defineProperty=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),menu=__webpack_require__("../../node_modules/.pnpm/antd@5.6.2_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/menu/index.js"),dropdown=__webpack_require__("../../node_modules/.pnpm/antd@5.6.2_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/dropdown/index.js"),dist=__webpack_require__("../../packages/shared/dist/index.mjs"),__jsx=react.createElement,Overlay=function Overlay(_ref){var items=_ref.items;return __jsx(menu.Z,{mode:"inline",className:"relative"},items.map((function(_ref2){var key=_ref2.key,children=_ref2.children,onClick=_ref2.onClick;return __jsx("li",{key,className:"inline-flex items-center justify-start w-full gap-2 px-3 py-1 rounded h-26pxr",onClick:null!=onClick?onClick:dist.noop},__jsx("span",{className:"SUBTITLE-T8"},children))})))};Overlay.displayName="Overlay";var Dropdown=function Dropdown(_ref3){var items=_ref3.items,DropdownTrigger=_ref3.DropdownTrigger;return __jsx(dropdown.Z,{overlay:function overlay(){return Overlay({items})},trigger:["click"]},DropdownTrigger)};Dropdown.displayName="Dropdown",Dropdown.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"MenuProps"}],raw:"MenuProps[]"},description:""},DropdownTrigger:{required:!0,tsType:{name:"ReactNode"},description:""}}};const Components_Dropdown=Dropdown;try{Dropdown.displayName="Dropdown",Dropdown.__docgenInfo={description:"",displayName:"Dropdown",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"MenuProps[]"}},DropdownTrigger:{defaultValue:null,description:"",name:"DropdownTrigger",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/myll-ui/src/Components/Dropdown/index.tsx#Dropdown"]={docgenInfo:Dropdown.__docgenInfo,name:"Dropdown",path:"../../packages/myll-ui/src/Components/Dropdown/index.tsx#Dropdown"})}catch(__react_docgen_typescript_loader_error){}var _BasicDropdownExample,_BasicDropdownExample2,_BasicDropdownExample3,Dropdown_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const Dropdown_stories={title:"Example/Dropdown",component:Components_Dropdown,tags:["autodocs"],args:{DropdownTrigger:Dropdown_stories_jsx("button",{type:"button",className:"ant-dropdown-link",onClick:function onClick(e){return e.preventDefault()}},"click me")}};var BasicDropdownExample={args:{items:[{children:Dropdown_stories_jsx("div",null,"1"),onClick:dist.noop,key:"1"},{key:"2",children:Dropdown_stories_jsx("div",null,"2"),onClick:dist.noop},{key:"3",children:Dropdown_stories_jsx("div",null,"3"),onClick:dist.noop}]}};BasicDropdownExample.parameters=_objectSpread(_objectSpread({},BasicDropdownExample.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_BasicDropdownExample=BasicDropdownExample.parameters)||void 0===_BasicDropdownExample?void 0:_BasicDropdownExample.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    items: [{\n      children: <div>1</div>,\n      onClick: noop,\n      key: '1'\n    }, {\n      key: '2',\n      children: <div>2</div>,\n      onClick: noop\n    }, {\n      key: '3',\n      children: <div>3</div>,\n      onClick: noop\n    }]\n  }\n}"},null===(_BasicDropdownExample2=BasicDropdownExample.parameters)||void 0===_BasicDropdownExample2||null===(_BasicDropdownExample3=_BasicDropdownExample2.docs)||void 0===_BasicDropdownExample3?void 0:_BasicDropdownExample3.source)})})}}]);