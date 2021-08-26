(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{63:function(t,e,a){},64:function(t,e,a){},97:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),s=a(9),r=a.n(s),o=(a(63),a(64),a(16)),h=a(17),c=a(21),p=a(20),l=a(39),d=a(40),u=a(57),M=a(6),f=a(38),g=a(25),j=a.n(g),m=a(35),y=a(41),b=a(26),v=a(58),w=a(3),x=a(31),O=a.n(x),L=a(1),S=function(t){Object(c.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).handleChange=function(t){n.setState({address:t})},n.handleSelect=function(t){Object(x.geocodeByAddress)(t).then((function(t){return Object(x.getLatLng)(t[0])})).then((function(t){n.props.changeCenter(t)})).catch((function(t){return console.error("Error",t)}))},n.state={address:"",mapRef:n.props.mapRef,center:n.center},n}return Object(h.a)(a,[{key:"render",value:function(){return Object(L.jsx)(L.Fragment,{children:Object(L.jsx)(O.a,{value:this.state.address,onChange:this.handleChange,onSelect:this.handleSelect,children:function(t){var e=t.getInputProps,a=t.suggestions,n=t.getSuggestionItemProps,i=t.loading;return Object(L.jsxs)("div",{children:[Object(L.jsx)("div",{className:"search",children:Object(L.jsx)("input",Object(w.a)({id:"search"},e({placeholder:"Search Places ...",className:"location-search-input"})))}),Object(L.jsxs)("div",{className:"autocomplete-dropdown-container",children:[i&&Object(L.jsx)("div",{children:"Loading..."}),a.map((function(t){var e=t.active?"suggestion-item--active":"suggestion-item",a=t.active?{backgroundColor:"#EAEAEA",cursor:"pointer"}:{backgroundColor:"#dddff6",cursor:"pointer"};return Object(L.jsx)("div",Object(w.a)(Object(w.a)({},n(t,{className:e,style:a})),{},{children:Object(L.jsx)("span",{children:t.description})}))}))]})]})}})})}}]),a}(i.a.Component),R=function(t){Object(c.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).displayLayer=function(t){n.props.getLayer(t),n.props.onCheckedChange()},n.state={layers:n.props.layers},n}return Object(h.a)(a,[{key:"render",value:function(){var t=this;this.state.layers;return Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)("ul",{style:{display:"inline-block"},children:[Object(L.jsx)("strong",{children:":\u05d1\u05d7\u05e8 \u05e9\u05db\u05d1\u05d4 \u05dc\u05d4\u05e6\u05d2\u05d4"}),Object.keys(this.state.layers).map((function(e,a){return Object(L.jsx)("div",{style:{marginTop:"5px"},children:Object(L.jsxs)("label",{className:"form-check-label",for:"flexCheckDefault",children:[Object(L.jsx)("input",{value:e,style:{margin:"3px"},onChange:t.displayLayer,className:"form-check-input",type:"checkbox",id:"flexCheckDefault"}),t.state.layers[e].name]})},a)}))]})})}},{key:"componentWillReceiveProps",value:function(t){this.setState({layers:t.layers})}},{key:"componentWillUnmount",value:function(){this.setState=function(t,e){}}}]),a}(n.Component),T=a(52),I={LatLng:function(t,e,a,n){this.lat=t,this.lng=e,this.alt=a||0,this.precision=n||5}};I.LatLng.prototype.toString=function(){function t(t,e){var a=Math.pow(10,e||0);return Math.round(t*a)/a}return t(this.lat,this.precision)+" "+t(this.lng,this.precision)},I.LatLng.prototype.convertGrid=function(t,e,a){var n=t.latLngToPoint(this,0),i=a.translate(n);return e.pointToLatLng(i)},I.latlngFromString=function(t){var e=new RegExp("^(-?\\d+(?:\\.\\d*)?)(?:(?:\\s*[:,]?\\s*)|\\s+)(-?\\d+(?:\\.\\d*)?)$","i"),a=t.match(e);if(a){var n=parseFloat(a[1],10),i=parseFloat(a[2],10);return new I.LatLng(n,i)}throw"could not parse latlng"},I.Point=function(t,e,a){this.y=e,this.x=t,this.z=a||0},I.Point.prototype.toString=function(){return Math.round(this.x)+" "+Math.round(this.y)},I.Translation=function(t,e,a){this.dx=t,this.dy=e,this.dz=a},I.Translation.prototype.translate=function(t){return new I.Point(t.x+this.dx,t.y+this.dy,t.z+this.dz)},I.Translation.prototype.inverse=function(){return new I.Translation(-this.dx,-this.dy,-this.dz)},I.Ellipsoid=function(t,e){this.a=t,this.b=e,this.e2=(Math.pow(t,2)-Math.pow(e,2))/Math.pow(t,2)},I.Ellipsoid.prototype.pointToLatLng=function(t){for(var e=Math.sqrt(Math.pow(t.x,2)+Math.pow(t.y,2)),a=Math.atan2(t.z,e*(1-this.e2));;){var n=this.a/Math.sqrt(1-this.e2*Math.pow(Math.sin(a),2)),i=Math.atan2(t.z+this.e2*n*Math.sin(a),e);if(!(Math.abs(a-i)>1e-9))break;a=i}var s=i*(180/Math.PI),r=Math.atan2(t.y,t.x)*(180/Math.PI);return new I.LatLng(s,r)},I.Ellipsoid.prototype.latLngToPoint=function(t){var e=t.lat*(Math.PI/180),a=t.lng*(Math.PI/180),n=this.a/Math.sqrt(1-this.e2*Math.pow(Math.sin(e),2)),i=(n+t.alt)*Math.cos(e)*Math.cos(a),s=(n+t.alt)*Math.cos(e)*Math.sin(a),r=(n*(1-this.e2)+t.alt)*Math.sin(e);return new I.Point(i,s,r)},I.TM=function(t,e,a,n,i,s){this.ellipsoid=t,this.e0=e,this.n0=a,this.f0=n,this.lat0=i,this.lng0=s,this.radlat0=i*(Math.PI/180),this.radlng0=s*(Math.PI/180),this.af0=t.a*n,this.bf0=t.b*n,this.e2=(Math.pow(this.af0,2)-Math.pow(this.bf0,2))/Math.pow(this.af0,2),this.n=(this.af0-this.bf0)/(this.af0+this.bf0),this.n2=this.n*this.n,this.n3=this.n2*this.n},I.TM.prototype.Marc=function(t){return this.bf0*((1+this.n+5/4*this.n2+5/4*this.n3)*(t-this.radlat0)-(3*this.n+3*this.n2+21/8*this.n3)*Math.sin(t-this.radlat0)*Math.cos(t+this.radlat0)+(15/8*this.n2+15/8*this.n3)*Math.sin(2*(t-this.radlat0))*Math.cos(2*(t+this.radlat0))-35/24*this.n3*Math.sin(3*(t-this.radlat0))*Math.cos(3*(t+this.radlat0)))},I.TM.prototype.InitialLat=function(t){for(var e=(t-this.n0)/this.af0+this.radlat0,a=this.Marc(e),n=(t-this.n0-a)/this.af0+e;Math.abs(t-this.n0-a)>1e-5;)n=(t-this.n0-a)/this.af0+e,a=this.Marc(n),e=n;return n},I.TM.prototype.unproject=function(t){var e=t.x-this.e0,a=this.InitialLat(t.y),n=this.af0/Math.sqrt(1-this.e2*Math.pow(Math.sin(a),2)),i=n*(1-this.e2)/(1-this.e2*Math.pow(Math.sin(a),2)),s=n/i-1,r=Math.tan(a)/(2*i*n),o=Math.tan(a)/(24*i*Math.pow(n,3))*(5+3*Math.pow(Math.tan(a),2)+s-9*s*Math.pow(Math.tan(a),2)),h=Math.tan(a)/(720*i*Math.pow(n,5))*(61+90*Math.pow(Math.tan(a),2)+45*Math.pow(Math.tan(a),4)),c=180/Math.PI*(a-Math.pow(e,2)*r+Math.pow(e,4)*o-Math.pow(e,6)*h),p=Math.pow(Math.cos(a),-1)/n,l=Math.pow(Math.cos(a),-1)/(6*Math.pow(n,3))*(n/i+2*Math.pow(Math.tan(a),2)),d=Math.pow(Math.cos(a),-1)/(120*Math.pow(n,5))*(5+28*Math.pow(Math.tan(a),2)+24*Math.pow(Math.tan(a),4)),u=Math.pow(Math.cos(a),-1)/(5040*Math.pow(n,7))*(61+662*Math.pow(Math.tan(a),2)+1320*Math.pow(Math.tan(a),4)+720*Math.pow(Math.tan(a),6)),M=180/Math.PI*(this.radlng0+e*p-Math.pow(e,3)*l+Math.pow(e,5)*d-Math.pow(e,7)*u);return new I.LatLng(c,M)},I.TM.prototype.project=function(t){var e=t.lat*(Math.PI/180),a=t.lng*(Math.PI/180),n=this.af0/Math.sqrt(1-this.e2*Math.pow(Math.sin(e),2)),i=n*(1-this.e2)/(1-this.e2*Math.pow(Math.sin(e),2)),s=n/i-1,r=a-this.radlng0,o=this.Marc(e)+this.n0,h=n/2*Math.sin(e)*Math.cos(e),c=n/24*Math.sin(e)*Math.pow(Math.cos(e),3)*(5-Math.pow(Math.tan(e),2)+9*s),p=n/720*Math.sin(e)*Math.pow(Math.cos(e),5)*(61-58*Math.pow(Math.tan(e),2)+Math.pow(Math.tan(e),4)),l=o+Math.pow(r,2)*h+Math.pow(r,4)*c+Math.pow(r,6)*p,d=n*Math.cos(e),u=n/6*Math.pow(Math.cos(e),3)*(n/i-Math.pow(Math.tan(e),2)),M=n/120*Math.pow(Math.cos(e),5)*(5-18*Math.pow(Math.tan(e),2)+Math.pow(Math.tan(e),4)+14*s-58*Math.pow(Math.tan(e),2)*s),f=this.e0+r*d+Math.pow(r,3)*u+Math.pow(r,5)*M;return new I.Point(f,l,0)},I.GRS80=new I.Ellipsoid(6378137,6356752.31414),I.WGS84=new I.Ellipsoid(6378137,6356752.314245),I.GRS80toWGS84=new I.Translation(-48,55,52),I.WGS84toGRS80=I.GRS80toWGS84.inverse(),I.ITM=new I.TM(I.GRS80,219529.584,626907.38999,1.0000067,31.734394,35.204517),I.point2ItmRef=function(t,e){function a(t,e){for(var a=new String(t);a.length<e;)a="0"+a;return a}var n=e||6;n<3&&(n=3),n>6&&(n=6);var i=Math.pow(10,6-n),s=Math.round(t.x/i),r=Math.round(t.y/i);return a(s,n)+" "+a(r,n)},I.itmRef2Point=function(t){var e;for(e=6;e>=3;e--){var a=new RegExp("^(\\d{"+e+"})\\s*:?\\s*(\\d{"+e+"})$","i"),n=t.match(a);if(n&&e>0){var i=Math.pow(10,6-e),s=parseInt(n[1],10)*i,r=parseInt(n[2],10)*i;return new I.Point(s,r)}}throw"Could not parse reference"},I.itm2gps=function(t){return this.ITM.unproject(t).convertGrid(this.GRS80,this.WGS84,this.GRS80toWGS84)},I.gps2itm=function(t){var e=t.convertGrid(this.WGS84,this.GRS80,this.WGS84toGRS80);return this.ITM.project(e)},I.itmRef2gps=function(t){var e=this.itmRef2Point(t);return this.itm2gps(e)},I.itmRef2gpsRef=function(t){return this.itmRef2gps(t).toString()},I.gpsRef2itm=function(t){var e=this.latlngFromString(t);return this.gps2itm(e)},I.gpsRef2itmRef=function(t,e){return this.point2ItmRef(this.gpsRef2itm(t),e||6)};var k=a(55),P=a.n(k),C=function(t){Object(c.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).handleCenterCallBack=function(t){n.state.map.setCenter(t)},n.handleApiLoaded=function(t,e){n.setState({map:t})},n.mapOverlay=function(){var t=Object(b.a)(n),e=new window.google.maps.ImageMapType({getTileUrl:function(e,a){if(a>=16&&Object.keys(t.state.dynamicLayers).length>0){var n=t.tileCoordsToBBox(t.state.map,e,a,512,512),i=I.gpsRef2itmRef("".concat(n[0]," ").concat(n[1])).split(" "),s=I.gpsRef2itmRef("".concat(n[2]," ").concat(n[3])).split(" ");if(85e4>i[1]&&i[1]>35e4&&85e4>s[1]&&s[1]>35e4&&35e4>i[0]&&i[0]>5e4&&35e4>s[0]&&s[1]>5e4)return"https://ags.govmap.gov.il/proxy/proxy.ashx?http://govmap/arcgis/rest/services/AdditionalData/MapServer/export?dynamicLayers="+t.convertObjectToString()+"&dpi=96&transparent=true&format=png32&layers=show:"+t.state.layersIds+"&bbox="+i[0]+","+i[1]+","+s[0]+","+s[1]+"&bboxSR=2039&imageSR=2039&size="+t.state.map.getDiv().offsetWidth+","+t.state.map.getDiv().offsetHeight+"&f=image"}},isPng:!0,tileSize:new window.google.maps.Size(512,512),opacity:.4});n.state.map.overlayMapTypes.clear(),n.state.map.overlayMapTypes.push(e)},n.convertObjectToString=function(){for(var t="[",e=[],a=0,i=Object.entries(n.state.dynamicLayers);a<i.length;a++){var s=Object(y.a)(i[a],2),r=(s[0],s[1]);e.push(r.id),t+="{'id':"+r.id+",'name':'"+r.name+"','source':{'type':'mapLayer','mapLayerId':"+r.id+"},'minScale':"+r.minScale+",'maxScale':"+r.maxScale+"},"}return t=t.slice(0,-1),t+="]",n.setState({layersIds:e}),t},n.getLayer=function(t){var e=t.target.value;if(!t.target.checked){var a=n.state.dynamicLayers;return delete a[e],void n.setState({dynamicLayers:a})}var i=n.state.dynamicLayers,s=n.state.layers[e];i[e]=s,n.setState({dynamicLayers:i})},n.state={center:{lat:31.771959,lng:35.217018},zoom:12,map:null,layers:[],dynamicLayers:{},layersIds:[]},n.mapRef=i.a.createRef((function(t){n.mapRef=t})),n}return Object(h.a)(a,[{key:"tileCoordsToBBox",value:function(t,e,a,n,i){var s=t.getProjection(),r=Math.pow(2,a),o=s.fromPointToLatLng(new window.google.maps.Point((e.x+1)*n/r,e.y*i/r)),h=s.fromPointToLatLng(new window.google.maps.Point(e.x*n/r,(e.y+1)*i/r));return[o.lat(),o.lng(),h.lat(),h.lng()]}},{key:"initLayers",value:function(){var t=Object(m.a)(j.a.mark((function t(){var e,a,n,i,s,r,o,h,c,p,l,d;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.a.post("https://cors.bridged.cc/https://ags.govmap.gov.il/Layers/GetTocLayers",{Headers:{origin:"127.0.0.1:3000"}});case 2:for(e=t.sent,a=e.data.data["\u05e9\u05db\u05d1\u05d5\u05ea \u05de\u05de\u05e9\u05dc\u05d4 \u05d5\u05de\u05d5\u05e1\u05d3\u05d5\u05ea \u05e6\u05d9\u05d1\u05d5\u05e8"].layers,n={},i=0,s=0,r=Object.entries(a);s<r.length;s++)o=Object(y.a)(r[s],2),o[0],h=o[1],c=h.layerID,p=h.caption,l=h.minScale,d=h.maxScale,n[i]={id:c,name:p,source:{type:"mapLayer",mapLayerId:c},minScale:l,maxScale:d},i+=1;this.setState({layers:n});case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("br",{}),Object(L.jsxs)("div",{className:"grid-container",children:[Object(L.jsxs)(T.a,{children:[Object(L.jsx)("script",{type:"text/javascript",src:"https://code.jquery.com/jquery-1.12.1.min.js"}),Object(L.jsx)("script",{type:"text/javascript",src:"https://www.govmap.gov.il/govmap/api/govmap.api.js"})]}),Object(L.jsx)("div",{className:"grid-child",children:Object(L.jsx)("div",{id:"map",style:{height:"100vh",width:"950px"},children:Object(L.jsx)(v.a,{ref:this.mapRef,bootstrapURLKeys:{key:"AIzaSyDReDgyRM1t9H2HncIec_v_zh2DeJGggT0",libraries:["geometry","drawing","places"]},defaultZoom:this.state.zoom,defaultCenter:this.state.center,yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(e){var a=e.map,n=e.maps;return t.handleApiLoaded(a,n)},onZoomAnimationEnd:this.mapOverlay.bind(this)})})}),Object(L.jsxs)("div",{className:"grid-child",style:{marginTop:"20px"},children:[Object(L.jsx)(S,{id:"searchBar",mapRef:this.mapRef,center:this.center,changeCenter:this.handleCenterCallBack}),Object(L.jsx)("br",{}),Object(L.jsx)(R,{layers:this.state.layers,getLayer:this.getLayer.bind(this),onCheckedChange:this.mapOverlay.bind(this)})]})]})]})}},{key:"componentWillMount",value:function(){var t=Object(m.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.initLayers();case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}]),a}(n.Component),G=function(t){Object(c.a)(a,t);var e=Object(p.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).switcher=function(){return Object(L.jsxs)(M.c,{children:[Object(L.jsx)(M.a,{path:"/map",children:Object(L.jsx)(C,{})}),Object(L.jsx)(M.a,{path:"/",children:Object(L.jsx)(C,{})})]})},t}return Object(h.a)(a,[{key:"render",value:function(){return Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)(f.a,{children:[Object(L.jsx)(l.a,{bg:"dark",variant:"dark",children:Object(L.jsxs)(u.a,{children:[Object(L.jsx)(l.a.Brand,{children:"Urbanico"}),Object(L.jsx)(d.a,{className:"me-auto",children:Object(L.jsx)(d.a.Link,{as:f.b,to:"/map",children:"Map"})})]})}),Object(L.jsx)("div",{children:this.switcher()})]})})}}]),a}(n.Component);var z=function(){return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(G,{}),Object(L.jsx)("div",{className:"App"})]})},F=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,99)).then((function(e){var a=e.getCLS,n=e.getFID,i=e.getFCP,s=e.getLCP,r=e.getTTFB;a(t),n(t),i(t),s(t),r(t)}))};a(96);r.a.render(Object(L.jsx)(i.a.Fragment,{children:Object(L.jsx)(z,{})}),document.getElementById("root")),F()}},[[97,1,2]]]);
//# sourceMappingURL=main.670d4aab.chunk.js.map