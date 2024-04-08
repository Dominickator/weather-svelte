import{r as Ke,s as Qe,n as Ve}from"../chunks/scheduler.e108d1fd.js";import{d as Xe,S as Ye,i as Ze,e as Ne,a as J,f as u,g as E,h as b,y as je,k as B,m as y,s as O,j as V,n as g,c as R,l as oe,x as e,o as W}from"../chunks/index.a21d6cee.js";function He(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Te(n,i){n.d(1),i.delete(n.key)}function qe(n,i,t,l,h,d,H,D,F,L,A,z){let w=n.length,_=d.length,m=w;const P={};for(;m--;)P[n[m].key]=m;const k=[],c=new Map,I=new Map,v=[];for(m=_;m--;){const f=z(h,d,m),a=t(f);let M=H.get(a);M?l&&v.push(()=>M.p(f,i)):(M=L(a,f),M.c()),c.set(a,k[m]=M),a in P&&I.set(a,Math.abs(m-P[a]))}const S=new Set,o=new Set;function r(f){Xe(f,1),f.m(D,A),H.set(f.key,f),A=f.first,_--}for(;w&&_;){const f=k[_-1],a=n[w-1],M=f.key,j=a.key;f===a?(A=f.first,w--,_--):c.has(j)?!H.has(M)||S.has(M)?r(f):o.has(j)?w--:I.get(M)>I.get(j)?(o.add(M),r(f)):(S.add(j),w--):(F(a,H),w--)}for(;w--;){const f=n[w];c.has(f.key)||F(f,H)}for(;_;)r(k[_-1]);return Ke(v),k}function Ge(n,i,t){const l=n.slice();return l[8]=i[t],l}function Ue(n,i,t){const l=n.slice();return l[4]=i[t],l[12]=t,l}function $e(n){let i,t='<h1 style="font-size: 2rem;">N/A</h1> <h2 style="font-size: 1.5rem;">Enter a location or press current location button to get the weather.</h2>';return{c(){i=E("div"),i.innerHTML=t,this.h()},l(l){i=b(l,"DIV",{class:!0,"data-svelte-h":!0}),je(i)!=="svelte-jda3je"&&(i.innerHTML=t),this.h()},h(){B(i,"class","container")},m(l,h){J(l,i,h)},p:Ve,d(l){l&&u(i)}}}function xe(n){let i,t,l,h,d,H,D,F,L=n[4].temp+"",A,z,w,_,m=n[4].shortforecast+"",P,k,c,I,v,S=n[4].dewpoint+"",o,r,f,a,M,j=n[4].humidity+"",K,Z,$,N,se,re=n[4].windspeed+"",ce,Ee,ne=n[4].winddirection+"",pe,be,ie,le=n[4].precipitationpercent+"",he,ke,de,G,Q,Ce="Future Forecast",De,x,T=[],Pe=new Map,fe,U,X,Se="Hourly Forecast",Fe,ee,q=[],Le=new Map,ue=He(n[2]);const ze=s=>s[4].id;for(let s=0;s<ue.length;s+=1){let p=Ue(n,ue,s),C=ze(p);Pe.set(C,T[s]=Be(C,p))}let ve=He(n[3]);const Oe=s=>s[8].id;for(let s=0;s<ve.length;s+=1){let p=Ge(n,ve,s),C=Oe(p);Le.set(C,q[s]=Je(C,p))}return{c(){i=E("div"),t=E("div"),l=E("h2"),h=y(n[0]),d=y(", "),H=y(n[1]),D=O(),F=E("h1"),A=y(L),z=y("°F"),w=O(),_=E("h2"),P=y(m),k=O(),c=E("div"),I=E("h2"),v=y("Dewpoint: "),o=y(S),r=y("°F"),f=O(),a=E("h2"),M=y("Humidity: "),K=y(j),Z=y("%"),$=O(),N=E("h2"),se=y("Wind: "),ce=y(re),Ee=O(),pe=y(ne),be=O(),ie=E("h2"),he=y(le),ke=y("% chance of precipitation"),de=O(),G=E("div"),Q=E("h1"),Q.textContent=Ce,De=O(),x=E("div");for(let s=0;s<T.length;s+=1)T[s].c();fe=O(),U=E("div"),X=E("h1"),X.textContent=Se,Fe=O(),ee=E("div");for(let s=0;s<q.length;s+=1)q[s].c();this.h()},l(s){i=b(s,"DIV",{class:!0});var p=V(i);t=b(p,"DIV",{class:!0});var C=V(t);l=b(C,"H2",{});var _e=V(l);h=g(_e,n[0]),d=g(_e,", "),H=g(_e,n[1]),_e.forEach(u),D=R(C),F=b(C,"H1",{});var Ie=V(F);A=g(Ie,L),z=g(Ie,"°F"),Ie.forEach(u),w=R(C),_=b(C,"H2",{});var Re=V(_);P=g(Re,m),Re.forEach(u),C.forEach(u),k=R(p),c=b(p,"DIV",{class:!0});var Y=V(c);I=b(Y,"H2",{});var me=V(I);v=g(me,"Dewpoint: "),o=g(me,S),r=g(me,"°F"),me.forEach(u),f=R(Y),a=b(Y,"H2",{});var we=V(a);M=g(we,"Humidity: "),K=g(we,j),Z=g(we,"%"),we.forEach(u),$=R(Y),N=b(Y,"H2",{});var ae=V(N);se=g(ae,"Wind: "),ce=g(ae,re),Ee=R(ae),pe=g(ae,ne),ae.forEach(u),be=R(Y),ie=b(Y,"H2",{});var Me=V(ie);he=g(Me,le),ke=g(Me,"% chance of precipitation"),Me.forEach(u),Y.forEach(u),p.forEach(u),de=R(s),G=b(s,"DIV",{class:!0,style:!0});var ye=V(G);Q=b(ye,"H1",{style:!0,"data-svelte-h":!0}),je(Q)!=="svelte-1t4pujd"&&(Q.textContent=Ce),De=R(ye),x=b(ye,"DIV",{class:!0});var Ae=V(x);for(let te=0;te<T.length;te+=1)T[te].l(Ae);Ae.forEach(u),ye.forEach(u),fe=R(s),U=b(s,"DIV",{class:!0,style:!0});var ge=V(U);X=b(ge,"H1",{style:!0,"data-svelte-h":!0}),je(X)!=="svelte-198oozf"&&(X.textContent=Se),Fe=R(ge),ee=b(ge,"DIV",{class:!0});var We=V(ee);for(let te=0;te<q.length;te+=1)q[te].l(We);We.forEach(u),ge.forEach(u),this.h()},h(){B(t,"class","half-container"),B(c,"class","half-container"),B(i,"class","container"),oe(Q,"font-size","2.2rem"),oe(Q,"margin","1rem"),B(x,"class","carousel"),B(G,"class","container"),oe(G,"flex-direction","column"),oe(X,"font-size","2.2rem"),oe(X,"margin","1rem"),B(ee,"class","carousel"),B(U,"class","container"),oe(U,"flex-direction","column")},m(s,p){J(s,i,p),e(i,t),e(t,l),e(l,h),e(l,d),e(l,H),e(t,D),e(t,F),e(F,A),e(F,z),e(t,w),e(t,_),e(_,P),e(i,k),e(i,c),e(c,I),e(I,v),e(I,o),e(I,r),e(c,f),e(c,a),e(a,M),e(a,K),e(a,Z),e(c,$),e(c,N),e(N,se),e(N,ce),e(N,Ee),e(N,pe),e(c,be),e(c,ie),e(ie,he),e(ie,ke),J(s,de,p),J(s,G,p),e(G,Q),e(G,De),e(G,x);for(let C=0;C<T.length;C+=1)T[C]&&T[C].m(x,null);J(s,fe,p),J(s,U,p),e(U,X),e(U,Fe),e(U,ee);for(let C=0;C<q.length;C+=1)q[C]&&q[C].m(ee,null)},p(s,p){p&1&&W(h,s[0]),p&2&&W(H,s[1]),p&16&&L!==(L=s[4].temp+"")&&W(A,L),p&16&&m!==(m=s[4].shortforecast+"")&&W(P,m),p&16&&S!==(S=s[4].dewpoint+"")&&W(o,S),p&16&&j!==(j=s[4].humidity+"")&&W(K,j),p&16&&re!==(re=s[4].windspeed+"")&&W(ce,re),p&16&&ne!==(ne=s[4].winddirection+"")&&W(pe,ne),p&16&&le!==(le=s[4].precipitationpercent+"")&&W(he,le),p&4&&(ue=He(s[2]),T=qe(T,p,ze,1,s,ue,Pe,x,Te,Be,null,Ue)),p&8&&(ve=He(s[3]),q=qe(q,p,Oe,1,s,ve,Le,ee,Te,Je,null,Ge))},d(s){s&&(u(i),u(de),u(G),u(fe),u(U));for(let p=0;p<T.length;p+=1)T[p].d();for(let p=0;p<q.length;p+=1)q[p].d()}}}function Be(n,i){let t,l,h=i[4].time+"",d,H,D,F=i[4].temp+"",L,A,z,w,_=(i[4].shortforecast.split(" ")[0]==="Showers"?i[4].shortforecast.split(" ")[0]:i[4].shortforecast.split(" ").slice(0,2).join(" "))+"",m,P,k,c=i[4].precipitationpercent+"",I,v,S;return{key:n,first:null,c(){t=E("div"),l=E("h2"),d=y(h),H=O(),D=E("h2"),L=y(F),A=y("°F"),z=O(),w=E("h2"),m=y(_),P=O(),k=E("h3"),I=y(c),v=y("% chance of precipitation"),S=O(),this.h()},l(o){t=b(o,"DIV",{class:!0});var r=V(t);l=b(r,"H2",{});var f=V(l);d=g(f,h),f.forEach(u),H=R(r),D=b(r,"H2",{});var a=V(D);L=g(a,F),A=g(a,"°F"),a.forEach(u),z=R(r),w=b(r,"H2",{});var M=V(w);m=g(M,_),M.forEach(u),P=R(r),k=b(r,"H3",{});var j=V(k);I=g(j,c),v=g(j,"% chance of precipitation"),j.forEach(u),S=R(r),r.forEach(u),this.h()},h(){B(t,"class","box"),this.first=t},m(o,r){J(o,t,r),e(t,l),e(l,d),e(t,H),e(t,D),e(D,L),e(D,A),e(t,z),e(t,w),e(w,m),e(t,P),e(t,k),e(k,I),e(k,v),e(t,S)},p(o,r){i=o,r&4&&h!==(h=i[4].time+"")&&W(d,h),r&4&&F!==(F=i[4].temp+"")&&W(L,F),r&4&&_!==(_=(i[4].shortforecast.split(" ")[0]==="Showers"?i[4].shortforecast.split(" ")[0]:i[4].shortforecast.split(" ").slice(0,2).join(" "))+"")&&W(m,_),r&4&&c!==(c=i[4].precipitationpercent+"")&&W(I,c)},d(o){o&&u(t)}}}function Je(n,i){let t,l,h=i[8].time+"",d,H,D,F=i[8].temp+"",L,A,z,w,_=i[8].shortforecast+"",m,P,k,c=i[8].precipitationpercent+"",I,v,S;return{key:n,first:null,c(){t=E("div"),l=E("h2"),d=y(h),H=O(),D=E("h2"),L=y(F),A=y("°F"),z=O(),w=E("h2"),m=y(_),P=O(),k=E("h3"),I=y(c),v=y("% chance of precipitation"),S=O(),this.h()},l(o){t=b(o,"DIV",{class:!0});var r=V(t);l=b(r,"H2",{});var f=V(l);d=g(f,h),f.forEach(u),H=R(r),D=b(r,"H2",{});var a=V(D);L=g(a,F),A=g(a,"°F"),a.forEach(u),z=R(r),w=b(r,"H2",{});var M=V(w);m=g(M,_),M.forEach(u),P=R(r),k=b(r,"H3",{});var j=V(k);I=g(j,c),v=g(j,"% chance of precipitation"),j.forEach(u),S=R(r),r.forEach(u),this.h()},h(){B(t,"class","box"),this.first=t},m(o,r){J(o,t,r),e(t,l),e(l,d),e(t,H),e(t,D),e(D,L),e(D,A),e(t,z),e(t,w),e(w,m),e(t,P),e(t,k),e(k,I),e(k,v),e(t,S)},p(o,r){i=o,r&8&&h!==(h=i[8].time+"")&&W(d,h),r&8&&F!==(F=i[8].temp+"")&&W(L,F),r&8&&_!==(_=i[8].shortforecast+"")&&W(m,_),r&8&&c!==(c=i[8].precipitationpercent+"")&&W(I,c)},d(o){o&&u(t)}}}function et(n){let i;function t(d,H){return d[2].length>0?xe:$e}let l=t(n),h=l(n);return{c(){h.c(),i=Ne()},l(d){h.l(d),i=Ne()},m(d,H){h.m(d,H),J(d,i,H)},p(d,[H]){l===(l=t(d))&&h?h.p(d,H):(h.d(1),h=l(d),h&&(h.c(),h.m(i.parentNode,i)))},i:Ve,o:Ve,d(d){d&&u(i),h.d(d)}}}function tt(n,i,t){let l="",h="",d=[],H=[];class D{constructor(w,_,m,P,k,c,I,v,S){this.id=w,this.time=_,this.temp=m,this.humidity=P,this.windspeed=k,this.winddirection=c,this.dewpoint=I*9/5+32,this.shortforecast=v,this.precipitationpercent=S}}let F=new D(0,"","","","","","","","");async function L(){typeof window<"u"&&navigator.geolocation?navigator.geolocation.getCurrentPosition(function(z){A(z.coords.latitude,z.coords.longitude)}):console.log("Geolocation is not supported by this browser.")}async function A(z,w){try{const m=await(await fetch(`https://api.weather.gov/points/${z},${w}`)).json(),P=m.properties.forecast;t(0,l=m.properties.relativeLocation.properties.city),t(1,h=m.properties.relativeLocation.properties.state);const c=await(await fetch(P)).json();t(2,d=[]);for(let o=0;o<14;o++){const r=o,f=c.properties.periods[o].name,a=c.properties.periods[o].temperature,M=c.properties.periods[o].relativeHumidity.value,j=c.properties.periods[o].windSpeed,K=c.properties.periods[o].windDirection,Z=c.properties.periods[o].dewpoint.value,$=c.properties.periods[o].shortForecast,N=c.properties.periods[o].probabilityOfPrecipitation.value?c.properties.periods[o].probabilityOfPrecipitation.value:0;d.push(new D(r,f,a,M,j,K,Z,$,N))}const v=await(await fetch(`${P}/hourly`)).json();t(3,H=[]);let S=new D(0,"",v.properties.periods[0].temperature,v.properties.periods[0].relativeHumidity.value,v.properties.periods[0].windSpeed,v.properties.periods[0].windDirection,v.properties.periods[0].dewpoint.value,v.properties.periods[0].shortForecast,v.properties.periods[0].probabilityOfPrecipitation.value);t(4,F=S);for(let o=1;o<23;o++){const r=o,f=new Date;f.setHours(f.getHours()+o);let a=f.getHours();a>12?(a=a-12,a=a+" PM"):a==0?a="12 AM":a==12?a="12 PM":a=a+" AM";const M=v.properties.periods[o].temperature,j=v.properties.periods[o].relativeHumidity.value,K=v.properties.periods[o].windSpeed,Z=v.properties.periods[o].windDirection,$=v.properties.periods[o].dewpoint.value,N=v.properties.periods[o].shortForecast,se=v.properties.periods[o].probabilityOfPrecipitation.value?v.properties.periods[o].probabilityOfPrecipitation.value:0;H.push(new D(r,a,M,j,K,Z,$,N,se))}}catch(_){console.log(_)}}return L(),[l,h,d,H,F]}class st extends Ye{constructor(i){super(),Ze(this,i,tt,et,Qe,{})}}export{st as component};