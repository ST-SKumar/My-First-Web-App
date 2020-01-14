dv='0',bv='0',hv='0',x=$('input'), d=x.eq(0),b=x.eq(1),h=x.eq(2);$('label').addClass('col-1 col-form-label');
x.addClass('form-control col-3');$('label').prev('label').addClass('offset-4');$('label').next('label').addClass('offset-1');$('div > div > div').addClass('col-6 offset-6');
function c(s,f,t){return parseInt(s, f).toString(t);} function b2h(s){return c(n,2,16);}function as(){d.val(dv);b.val(bv);h.val(hv);}as();
x.on("input",function(){n=$(this).val(); if(n==d.val()&&n.match(/^[0-9]+$/)){dv=n; bv=c(n,10,2); hv=c(n,10,16);}
if(n==b.val()&&n.match(/^[0-1]+$/)){bv=n; dv=c(n,2,10); hv=n.match(/.{1,32}/g).map(b2h).join('');} 
if(n==h.val()&&n.match(/^[A-Fa-f0-9]+$/)){hv=n; dv=c(n,16,10); bv=c(n,16,2);} as();});
