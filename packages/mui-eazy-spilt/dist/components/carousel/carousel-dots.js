import{j as e}from"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js";import t from"../../node_modules/.pnpm/@mui_material@5.15.5_@emotion_react@11.5.0_@emotion_styled@11.6.0_@types_react@18.2.51_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/styled.js";import o from"../../node_modules/.pnpm/@mui_material@5.15.5_@emotion_react@11.5.0_@emotion_styled@11.6.0_@types_react@18.2.51_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Box/Box.js";import n from"../../node_modules/.pnpm/@mui_material@5.15.5_@emotion_react@11.5.0_@emotion_styled@11.6.0_@types_react@18.2.51_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Stack/Stack.js";const r=t(o,{shouldForwardProp:e=>"rounded"!==e})((({rounded:e,theme:t})=>({zIndex:9,margin:0,padding:0,display:"flex",alignItems:"center",justifyContent:"center",color:t.palette.primary.main,"& li":{width:18,height:18,opacity:.32,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer","&.slick-active":{opacity:1,...e&&{"& span":{width:16,borderRadius:6}}}}}))),i=t("span")((({theme:e})=>({width:8,height:8,borderRadius:"50%",transition:e.transitions.create(["width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.short})})));function a(t){const o=t?.rounded||!1,a=t?.sx;return{appendDots:n=>e.jsx(e.Fragment,{children:e.jsx(r,{component:"ul",rounded:o,sx:{...a},...t,children:n})}),customPaging:()=>e.jsx(n,{component:"div",alignItems:"center",justifyContent:"center",sx:{width:1,height:1},children:e.jsx(i,{sx:{bgcolor:"currentColor"}})})}}export{a as default};
