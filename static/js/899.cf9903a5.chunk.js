"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[899],{899:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(152),a=n(523),i=n(271),s=n(791),c=n(265),o=function(e){return fetch("".concat(c.J,"/movie/").concat(e,"?api_key=").concat(c.F,"&language=en-US")).then((function(e){return e.json()}))},l=function(e){return fetch("".concat(c.J,"/movie/").concat(e,"/credits?api_key=").concat(c.F,"&language=en-US")).then((function(e){return e.json()}))},u=n(184),h=function(){var e=(0,i.$B)().params,t=(0,s.useState)(""),n=(0,r.Z)(t,2),a=n[0],c=n[1];return(0,s.useEffect)((function(){l(e.movieId).then((function(e){c(e.cast)}))}),[]),a.length>=1?(0,u.jsx)("ul",{className:"cast-list",children:a.map((function(e){return(0,u.jsxs)("li",{className:"cast-item",children:[e.profile_path&&(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.profile_path),alt:e.name}),!e.profile_path&&(0,u.jsx)("div",{className:"notFound",children:(0,u.jsx)("p",{children:"Not Found"})}),(0,u.jsxs)("p",{children:[e.name,": ",e.character]})]},e.id)}))}):(0,u.jsx)("h1",{children:"Not Found"})},d=function(e){return fetch("".concat(c.J,"/movie/").concat(e,"/reviews?api_key=").concat(c.F,"&language=en-US&page=1")).then((function(e){return e.json()}))},m=function(){var e=(0,i.$B)().params,t=(0,s.useState)(""),n=(0,r.Z)(t,2),a=n[0],c=n[1];return(0,s.useEffect)((function(){d(e.movieId).then((function(e){c(e.results)}))}),[]),console.log(a),a.length>=1?(0,u.jsx)("ul",{className:"reviews-list",children:a.map((function(e,t){return(0,u.jsxs)("li",{className:"review-item",children:[(0,u.jsxs)("h2",{children:[e.author,":"]}),(0,u.jsx)("p",{children:e.content})]},t)}))}):(0,u.jsx)("h1",{children:"Not Found"})},f=function(){var e=(0,s.useState)(""),t=(0,r.Z)(e,2),n=t[0],c=t[1],l=(0,i.$B)(),d=l.params,f=l.url;return(0,s.useEffect)((function(){o(d.movieId).then((function(e){c(e)}))}),[]),n.id?(0,u.jsx)("div",{className:"movie-details",style:{backgroundImage:"url(https://image.tmdb.org/t/p/w500".concat(n.backdrop_path,")")},children:(0,u.jsxs)("div",{className:"blur",children:[(0,u.jsxs)("div",{className:"movie-details-left",children:[n.poster_path?(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n.poster_path),alt:n.original_title}):(0,u.jsx)("div",{style:{width:"550px",height:"740px",backgroundColor:"black"},children:"Poster not found"}),(0,u.jsx)("ul",{className:"genres-list",children:n.genres.map((function(e){return(0,u.jsx)("li",{className:"genre-item",children:e.name},e.id)}))})]}),(0,u.jsxs)("div",{className:"movie-details-right",children:[(0,u.jsx)("h1",{className:"title-name",children:n.original_title}),(0,u.jsx)("p",{children:n.tagline}),(0,u.jsxs)("h1",{className:"title-rating",children:["Movie rating: ",n.vote_average]}),(0,u.jsx)("h1",{className:"title-overview",children:"Overview:"}),(0,u.jsx)("p",{className:"overview",children:n.overview}),(0,u.jsxs)("div",{className:"cast",children:[(0,u.jsx)(a.OL,{className:"cast-link",activeClassName:"cast-link-active",to:"".concat(f,"/cast"),children:"Show cast"}),(0,u.jsx)(a.OL,{className:"cast-link",activeClassName:"cast-link-active",to:"".concat(f,"/reviews"),children:"Show reviews"}),(0,u.jsx)(i.AW,{path:"/movies/:movieId/cast",children:(0,u.jsx)(h,{film:n})}),(0,u.jsx)(i.AW,{path:"/movies/:movieId/reviews",children:(0,u.jsx)(m,{id:n})})]})]})]})}):(0,u.jsx)("h1",{children:n.status_message})}},152:function(e,t,n){function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i=[],s=!0,c=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);s=!0);}catch(o){c=!0,a=o}finally{try{s||null==n.return||n.return()}finally{if(c)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return a}})},265:function(e){e.exports=JSON.parse('{"J":"https://api.themoviedb.org/3","F":"5eedd9576ab43a008551d36a9f8b0c8a"}')}}]);
//# sourceMappingURL=899.cf9903a5.chunk.js.map