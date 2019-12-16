d_id="dec",b_id="bin",h_id="hex";
vd='0',vb='0',vh='0';
function con(s,f,t){return parseInt(s, f).toString(t);}
function d2b(s){return con(s,10,2);}
function d2h(s){return con(s,10,16);}
function b2d(s){return con(s,2,10);}
function b2h(s){return con(s,2,16);}
function h2d(s){return con(s,16,10);}
function h2b(s){return con(s,16,2);}
function set(id,num){document.getElementById(id).value =num;}
function get(id){return document.getElementById(id).value;}
function dec(num){if(num.match(/^[0-9]+$/)){set(d_id,vd=num); vb=d2b(num); set(b_id,vb); vh=d2h(num); set(h_id,vh); } else dec(vd); }
function bin(num){if(num.match(/^[0-1]+$/)){set(b_id,vb=num); vd=b2d(num); set(d_id,vd); vh=num.match(/.{1,32}/g).map(b2h).join(''); set(h_id,vh); } else bin(vb); }
function hex(num){if(num.match(/^[A-Fa-f0-9]+$/)){set(h_id,vh=num); vd=h2d(num); set(d_id,vd); vb=h2b(num); set(b_id,vb); } else hex(vh); }