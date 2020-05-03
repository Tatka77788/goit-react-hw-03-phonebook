(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{1:function(e,t,a){e.exports={label:"ContactForm_label__1FjmH",input:"ContactForm_input__1FYiQ",submit:"ContactForm_submit__1KN2F"}},11:function(e,t,a){e.exports={h2:"Section_h2__2xJzR"}},13:function(e,t,a){e.exports={paragraph:"Filter_paragraph__AvA8K"}},15:function(e,t,a){e.exports=a(28)},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),c=a.n(l),o=a(14),i=a(4),u=a(5),m=a(7),s=a(6),h=a(2),d=a.n(h),p=a(11),b=a.n(p),f=function(e){var t=e.title,a=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:b.a.h2},t),a)},g=a(8),v=a.n(g),_=function(e){var t=e.contactListItem,a=e.handleRemove,n=t.id,l=t.name,c=t.number;return r.a.createElement("li",{className:v.a.list},r.a.createElement("p",{className:v.a.paragraph},l,":",r.a.createElement("span",null,c)),r.a.createElement("button",{className:v.a.button,type:"button",id:n,onClick:a},"Delete"))},C=function(e){var t=e.contactList,a=e.handleRemove;return r.a.createElement("ul",null,t.map((function(e){return r.a.createElement(_,{key:e.id,contactListItem:e,handleRemove:a})})))},E=a(12),F=a(1),S=a.n(F),y={name:d.a.generate(),number:d.a.generate(),filter:d.a.generate()},N=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(E.a)({},n,r))},e.handleSet=function(t){t.preventDefault(),e.props.handleSubmit(t),e.setState({name:"",number:""})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.number;return r.a.createElement("form",{className:S.a.form,onSubmit:this.handleSet},r.a.createElement("label",{className:S.a.label,htmlFor:y.name},"Name"," ",r.a.createElement("input",{type:"text",value:t,placeholder:"name",onChange:this.handleChange,id:y.name,name:"name",className:S.a.input})),r.a.createElement("label",{className:S.a.label,htmlFor:y.number},"Number",r.a.createElement("input",{type:"tel",placeholder:"999-99-99",pattern:"[0-9]{3}-[0-9]{2}-[0-9]{2}",required:!0,value:a,onChange:this.handleChange,id:y.number,name:"number",className:S.a.input})),r.a.createElement("button",{type:"submit",className:S.a.submit},"Add contact"))}}]),a}(n.Component),O=a(13),j=a.n(O),k=function(e){var t=e.filter,a=e.handleChangeFilter;return r.a.createElement("label",{className:j.a.paragraph,htmlFor:y.filter},"Find contact by name",r.a.createElement("input",{type:"text",onChange:a,value:t,name:"filter"}))},w=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.componentDidMount=function(){var t=localStorage.getItem("contacts");t&&e.setState({contacts:JSON.parse(t)})},e.componentDidUpdate=function(t){t.contacts!==e.state.contacts&&localStorage.setItem("contacts",JSON.stringify(e.state.contacts))},e.handleFormSubmit=function(t){t.preventDefault();var a=t.target.elements,n=a.name,r=a.number,l=e.state.contacts,c={id:d.a.generate(),name:n.defaultValue,number:r.defaultValue};l.find((function(e){return e.name===n.defaultValue}))?alert("".concat(n.defaultValue," is already in contacts.")):e.setState((function(e){return{contacts:[].concat(Object(o.a)(e.contacts),[c]),name:"",number:""}}))},e.handleDelete=function(t){return e.setState({contacts:e.state.contacts.filter((function(e){return e.id!==t.target.id}))})},e.changeFilterValue=function(t){return e.setState({filter:t.target.value})},e.getFilteredContacts=function(){var t=e.state,a=t.contacts,n=t.filter;return a.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.contacts,a=e.filter,n=this.getFilteredContacts(a,t);return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{title:"Phonebook"},r.a.createElement(N,{handleSubmit:this.handleFormSubmit})),t.length>0&&r.a.createElement(f,{title:"Contacts"},t.length>1&&r.a.createElement(k,{filter:a,handleChangeFilter:this.changeFilterValue}),r.a.createElement(C,{contactList:n,handleRemove:this.handleDelete})))}}]),a}(n.Component);c.a.render(r.a.createElement(w,null),document.querySelector("#root"))},8:function(e,t,a){e.exports={list:"ContactList_list__3USRx",paragraph:"ContactList_paragraph__3Iw9t",button:"ContactList_button__16gu_"}}},[[15,1,2]]]);
//# sourceMappingURL=main.0c264fa7.chunk.js.map