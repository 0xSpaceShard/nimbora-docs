"use strict";(self.webpackChunknimbora_yield_dex=self.webpackChunknimbora_yield_dex||[]).push([[6917],{9094:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>d,metadata:()=>o,toc:()=>h});var r=s(4848),n=s(8453);const d={id:"factory",title:"Factory",sidebar_position:1},c=void 0,o={id:"contracts/reference/L2 Contracts/factory",title:"Factory",description:"Factory",source:"@site/docs/contracts/reference/L2 Contracts/Factory.md",sourceDirName:"contracts/reference/L2 Contracts",slug:"/contracts/reference/L2 Contracts/factory",permalink:"/docs/contracts/reference/L2 Contracts/factory",draft:!1,unlisted:!1,editUrl:"https://github.com/0xSpaceShard/nimbora_yields_l2/docs/contracts/reference/L2 Contracts/Factory.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"factory",title:"Factory",sidebar_position:1},sidebar:"contractsSidebar",previous:{title:"Strategy Base",permalink:"/docs/contracts/reference/L1 Contracts/strategy_base"},next:{title:"Pooling Manager",permalink:"/docs/contracts/reference/L2 Contracts/factpooling_managerory"}},a={},h=[{value:"Factory",id:"factory",level:3},{value:"Constructor",id:"constructor",level:4},{value:"Get methods",id:"get-methods",level:4},{value:"Operation methods",id:"operation-methods",level:4}];function i(e){const t={code:"code",h3:"h3",h4:"h4",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"factory",children:"Factory"}),"\n",(0,r.jsx)(t.h4,{id:"constructor",children:"Constructor"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Argument Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"pooling_manager"})}),(0,r.jsx)(t.td,{children:"The address of the pooling manager."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"token_class_hash"})}),(0,r.jsx)(t.td,{children:"The class hash of the token."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"token_manager_class_hash"})}),(0,r.jsx)(t.td,{children:"The class hash of the token manager."})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"get-methods",children:"Get methods"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method Name"}),(0,r.jsx)(t.th,{children:"Parameter(s)"}),(0,r.jsx)(t.th,{children:"Return Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"token_manager_class_hash"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"self: @TContractState"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"ClassHash"})}),(0,r.jsx)(t.td,{children:"Returns the class hash of the token manager."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"token_class_hash"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"self: @TContractState"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"ClassHash"})}),(0,r.jsx)(t.td,{children:"Returns the class hash of the token."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"pooling_manager_address"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"self: @TContractState"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"ContractAddress"})}),(0,r.jsx)(t.td,{children:"Returns the address of the pooling manager."})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"operation-methods",children:"Operation methods"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method Name"}),(0,r.jsx)(t.th,{children:"Parameter(s)"}),(0,r.jsx)(t.th,{children:"Return Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"deploy_strategy"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"ref self: TContractState"}),", ",(0,r.jsx)(t.code,{children:"l1_strategy: EthAddress"}),", ",(0,r.jsx)(t.code,{children:"underlying: ContractAddress"}),", ",(0,r.jsx)(t.code,{children:"token_name: felt252"}),", ",(0,r.jsx)(t.code,{children:"token_symbol: felt252"}),", ",(0,r.jsx)(t.code,{children:"performance_fees: u256"}),", ",(0,r.jsx)(t.code,{children:"min_deposit: u256"}),", ",(0,r.jsx)(t.code,{children:"max_deposit: u256"}),", ",(0,r.jsx)(t.code,{children:"min_withdrawal: u256"}),", ",(0,r.jsx)(t.code,{children:"max_withdrawal: u256"}),", ",(0,r.jsx)(t.code,{children:"withdrawal_epoch_delay: u256"}),", ",(0,r.jsx)(t.code,{children:"dust_limit: u256"})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"(ContractAddress, ContractAddress)"})}),(0,r.jsx)(t.td,{children:"Deploys a new strategy with the specified parameters and returns the addresses of the deployed token manager and token."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"set_token_manager_class_hash"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"ref self: TContractState"}),", ",(0,r.jsx)(t.code,{children:"new_token_manager_class_hash: ClassHash"})]}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"Sets a new class hash for the token manager."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"set_token_class_hash"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"ref self: TContractState"}),", ",(0,r.jsx)(t.code,{children:"new_token_class_hash: ClassHash"})]}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"Sets a new class hash for the token."})]})]})]})]})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>o});var r=s(6540);const n={},d=r.createContext(n);function c(e){const t=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(d.Provider,{value:t},e.children)}}}]);