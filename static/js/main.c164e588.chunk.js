(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(4),o=n.n(r),i=n(5),s=n(6),d=n(7),l=n(9),b=n(8),u=n(3),j=n.n(u),h=n(0),v=function(e){var t=e.title,n=e.children;return Object(h.jsxs)("section",{children:[Object(h.jsx)("h1",{children:t}),n,Object(h.jsx)("h2",{children:"Statistics"})]})};v.propType={title:j.a.string.isRequired,children:j.a.node};var O=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(h.jsx)(h.Fragment,{children:t.map((function(e){return Object(h.jsx)("button",{type:"button",onClick:n,children:e},e)}))})},g=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.positivePercentage;return Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:["Good: ",t]}),Object(h.jsxs)("li",{children:["Neutral: ",n]}),Object(h.jsxs)("li",{children:["Bad: ",c]}),Object(h.jsxs)("li",{children:["Total:",a]}),Object(h.jsxs)("li",{children:["Positive feedback:",r,"%"]})]})},f=function(e){var t=e.message;return Object(h.jsx)("h3",{children:t})},x=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){return Math.round(e.state.good/e.countTotalFeedback()*100)},e.onLeaveFeedback=function(t){var n=t.currentTarget.textContent;e.setState((function(e){return Object(i.a)({},n,e[n]+=1)}))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.bad,c=e.neutral,a=this.countTotalFeedback();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(v,{title:"Please leave feedback",children:Object(h.jsx)(O,{options:["good","neutral","bad"],onLeaveFeedback:this.onLeaveFeedback})}),0!==a?Object(h.jsx)(g,{good:t,neutral:c,bad:n,total:a,positivePercentage:this.countPositiveFeedbackPercentage()}):Object(h.jsx)(f,{message:"There is no feedback"})]})}}]),n}(c.Component);x.defaultProps={};var k=x;o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(k,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.c164e588.chunk.js.map