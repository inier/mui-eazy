import{j as e}from"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js";import{Box as i,Stack as t}from"@mui/material";import{varBounce as r}from"../animate/variants/bounce.js";import{MotionContainer as o}from"../animate/motion-container.js";import{Iconify as m}from"../iconify/iconify.js";import{TreeItemStyledItem as n,TreeItemStyledIcon as s,TreeItemStyledDotIcon as a}from"./styles.js";import{m as d}from"../../node_modules/.pnpm/framer-motion@10.16.4_react-dom@18.2.0_react@18.2.0/node_modules/framer-motion/dist/es/render/dom/motion-minimal.js";const l=l=>{const{active:c,depth:p,isError:x,label:h,children:j,formCreater:u,sx:f={},...g}=l;let b=[{ml:0},{ml:1},{ml:2},{ml:3},{ml:4},{ml:5}][p];return e.jsx(i,{children:e.jsxs(t,{alignItems:"center",direction:"row",children:[e.jsxs(n,{sx:{...b,...f},...g,active:c,depth:p,config:{itemGap:v?.itemGap||4,iconSize:v?.iconSize||24,currentRole:v?.currentRole,itemRootHeight:v?.itemRootHeight||44,itemSubHeight:v?.itemSubHeight||36,itemPadding:v?.itemPadding||"4px 8px 4px 12px",itemRadius:v?.itemRadius||8,hiddenLabel:v?.hiddenLabel||!1},children:[e.jsx(s,{sx:{mr:1.5},children:e.jsx(a,{active:c})}),e.jsx(i,{component:"span",sx:{ml:1,lineHeight:0},children:`${h}`}),j]}),e.jsx(i,{sx:{width:"28px"},children:x&&e.jsx(o,{action:!0,animate:x,children:e.jsx(d.div,{variants:r().in,children:e.jsx(m,{color:"red",icon:"material-symbols:error",width:20})})})})]})});var v};export{l as TreeItem};
