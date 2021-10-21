(this["webpackJsonpmovie-database"]=this["webpackJsonpmovie-database"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),a=n(10),i=n.n(a),c=n(2),o=n(3),l=n(5),u=n(4),d=(n(15),n(0)),j=function(){return Object(d.jsxs)("header",{className:"app__header",children:[Object(d.jsx)("h1",{className:"app__title",children:Object(d.jsxs)("a",{href:"/",children:[Object(d.jsx)("span",{children:"Movies"})," information portal"]})}),Object(d.jsx)("nav",{className:"app__menu",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"/",children:"Documentation"})}),"/",Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"/",children:"Contact us"})})]})})]})},h=(n(17),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)("input",{type:"text",className:"search__input",placeholder:"Search movies",value:this.props.searchStr,onChange:this.props.onSearch})}}]),n}(r.Component)),p=h,b=n(9),m=n(6),f=n.n(m),v=n(7),O=function e(){var t=this;Object(c.a)(this,e),this._apiBase="http://api.themoviedb.org/3/movie/",this._posterBase="http://image.tmdb.org/t/p/w500",this._searchBase="http://api.themoviedb.org/3/search/movie",this._genresBase="http://api.themoviedb.org/3/genre/movie/list",this._apiKey="api_key=f1137cbdf4e49f5e77f6cd84d2971b53",this.getResource=function(){var e=Object(v.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t," status: ").concat(n.status));case 5:return e.abrupt("return",n.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getPopularMovies=Object(v.a)(f.a.mark((function e(){var n,r,s,a,i=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=i.length>0&&void 0!==i[0]?i[0]:1,r=!1,s=[];case 3:if(r){e.next=12;break}return e.next=6,t.getResource("".concat(t._apiBase,"popular/?").concat(t._apiKey,"&page=").concat(n));case 6:a=e.sent,n!==a.total_pages&&5!==n||(r=!0),s.push.apply(s,Object(b.a)(a.results.map(t._transformMovies))),n++,e.next=3;break;case 12:return e.abrupt("return",s);case 13:case"end":return e.stop()}}),e)}))),this.getMovie=function(){var e=Object(v.a)(f.a.mark((function e(n){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("".concat(t._apiBase).concat(n,"?").concat(t._apiKey));case 2:return r=e.sent,e.abrupt("return",t._transformMovie(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.searchMovie=function(){var e=Object(v.a)(f.a.mark((function e(n){var r,s,a,i,c=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=c.length>1&&void 0!==c[1]?c[1]:1,s=!1,a=[];case 3:if(s){e.next=12;break}return e.next=6,t.getResource("".concat(t._searchBase,"?").concat(t._apiKey,"&query=").concat(n,"&page=").concat(r));case 6:i=e.sent,r!==i.total_pages&&5!==r||(s=!0),a.push.apply(a,Object(b.a)(i.results.map(t._transformMovies))),r++,e.next=3;break;case 12:return e.abrupt("return",a);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getGenres=Object(v.a)(f.a.mark((function e(){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("".concat(t._genresBase,"?").concat(t._apiKey));case 2:return n=e.sent,e.abrupt("return",n.genres);case 4:case"end":return e.stop()}}),e)}))),this._transformMovies=function(e){return{id:e.id,title:e.title,poster:t._posterBase+e.poster_path,release:e.release_date,genres:e.genre_ids?e.genre_ids:null}},this._transformMovie=function(e){return{id:e.id,title:e.title,poster:t._posterBase+e.poster_path,overview:e.overview?"".concat(e.overview,"..."):"There is no available overview.",release:e.release_date,genres:e.genres?e.genres:null,homepage:e.homepage?e.homepage:null}}},x=(n(19),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={genres:[],error:!1},e.movieService=new O,e.onGenresLoaded=function(t){e.setState({genres:t})},e.onError=function(){e.setState({error:!0})},e.renderItems=function(e){return e.map((function(e){return Object(d.jsx)("option",{value:e.id,children:e.name},e.id)}))},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.movieService.getGenres().then(this.onGenresLoaded).catch(this.onError)}},{key:"render",value:function(){var e=this.state.genres,t=this.renderItems(e);return Object(d.jsxs)("div",{className:"appFilter",children:[Object(d.jsx)("span",{className:"appFilter__label",children:"Genres filter: "}),Object(d.jsxs)("select",{onChange:this.props.onGenreSelected,className:"appFilter__select",children:[Object(d.jsx)("option",{}),t]})]})}}]),n}(r.Component)),g=x,_=n.p+"static/media/error.42292aa1.gif",y=function(){return Object(d.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:_,alt:"Error"})},k=function(){return Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"0 auto",background:"none",display:"block"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(d.jsx)("g",{transform:"translate(80,50)",children:Object(d.jsx)("g",{transform:"rotate(0)",children:Object(d.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"1",children:[Object(d.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.875s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(d.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.875s"})]})})}),Object(d.jsx)("g",{transform:"translate(71.21320343559643,71.21320343559643)",children:Object(d.jsx)("g",{transform:"rotate(45)",children:Object(d.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.875",children:[Object(d.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.75s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(d.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.75s"})]})})}),Object(d.jsx)("g",{transform:"translate(50,80)",children:Object(d.jsx)("g",{transform:"rotate(90)",children:Object(d.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.75",children:[Object(d.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.625s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(d.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.625s"})]})})}),Object(d.jsx)("g",{transform:"translate(28.786796564403577,71.21320343559643)",children:Object(d.jsx)("g",{transform:"rotate(135)",children:Object(d.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.625",children:[Object(d.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.5s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(d.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.5s"})]})})}),Object(d.jsx)("g",{transform:"translate(20,50.00000000000001)",children:Object(d.jsx)("g",{transform:"rotate(180)",children:Object(d.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.5",children:[Object(d.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.375s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(d.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.375s"})]})})}),Object(d.jsx)("g",{transform:"translate(28.78679656440357,28.786796564403577)",children:Object(d.jsx)("g",{transform:"rotate(225)",children:Object(d.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.375",children:[Object(d.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.25s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(d.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.25s"})]})})}),Object(d.jsx)("g",{transform:"translate(49.99999999999999,20)",children:Object(d.jsx)("g",{transform:"rotate(270)",children:Object(d.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.25",children:[Object(d.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.125s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(d.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.125s"})]})})}),Object(d.jsx)("g",{transform:"translate(71.21320343559643,28.78679656440357)",children:Object(d.jsx)("g",{transform:"rotate(315)",children:Object(d.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.125",children:[Object(d.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"0s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(d.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"0s"})]})})})]})},N=(n(20),n.p+"static/media/movie-poster-coming-soon.7c02dcee.png"),M=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={movies:[],page:1,start:0,end:10,loading:!0,newItemLoading:!1,error:!1},e.movieService=new O,e.getMovies=function(){e.movieService.getPopularMovies().then(e.onMoviesLoaded).catch(e.onError)},e.onMoviesLoaded=function(t){e.setState({movies:t.sort((function(e,t){return e.release<t.release?-1:1})).reverse(),loading:!1,newItemLoading:!1})},e.onMoviesListLoading=function(){e.setState({newItemLoading:!0})},e.onPreviousPage=function(){e.setState({start:e.state.start-10,end:e.state.end-10})},e.onNextPage=function(){e.setState({start:e.state.start+10,end:e.state.end+10})},e.onSearchMovies=function(t){e.movieService.searchMovie(t).then(e.onMoviesLoaded).catch(e.onError)},e.onError=function(){e.setState({loading:!1,error:!0})},e.filterMovies=function(t){return e.props.selectedGenre?t.filter((function(t){return t.genres.includes(+e.props.selectedGenre)})):t},e.itemRefs=[],e.setRef=function(t){t?e.itemRefs.push(t):e.itemRefs=[]},e.selectedItem=function(t){e.itemRefs.forEach((function(e){return e.classList.remove("char__item_selected")})),e.itemRefs[t].classList.add("char__item_selected")},e.renderMovies=function(t,n,r){return t.slice(n,r).map((function(t,n){return"https://image.tmdb.org/t/p/w500null"===t.poster&&(t.poster=N),Object(d.jsxs)("li",{className:"char__item",ref:e.setRef,onClick:function(){e.props.onMovieSelected(t),e.selectedItem(n)},children:[Object(d.jsx)("img",{src:t.poster,alt:t.title}),Object(d.jsx)("div",{className:"char__name",children:t.title})]},t.id)}))},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"componentDidUpdate",value:function(e){this.props.searchStr!==e.searchStr&&(this.props.searchStr?(this.setState({start:0,end:10}),this.onMoviesListLoading(),this.onSearchMovies(this.props.searchStr)):this.getMovies())}},{key:"render",value:function(){var e=this,t=this.state,n=t.movies,r=t.start,s=t.end,a=t.loading,i=t.newItemLoading,c=t.error,o=this.renderMovies(this.filterMovies(n),r,s),l=c?Object(d.jsx)(y,{}):null,u=a||i?Object(d.jsx)(k,{}):null,j=a||i||c?null:o,h=this.filterMovies(n).length||0;return Object(d.jsxs)("div",{className:"char__list",children:[l,u,Object(d.jsx)("ul",{className:"char__grid",children:j}),Object(d.jsxs)("div",{className:"char__buttons",children:[Object(d.jsx)("button",{className:"button button__main button__long",disabled:r<=0,onClick:function(){return e.onPreviousPage()},children:Object(d.jsx)("div",{className:"inner",children:"previous page"})}),Object(d.jsx)("button",{className:"button button__main button__long",disabled:s>=h,onClick:function(){return e.onNextPage()},children:Object(d.jsx)("div",{className:"inner",children:"next page"})})]})]})}}]),n}(r.Component),S=M,w=(n(21),function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{className:"char__select",children:"Please select a movie to see information"}),Object(d.jsxs)("div",{className:"skeleton",children:[Object(d.jsxs)("div",{className:"pulse skeleton__header",children:[Object(d.jsx)("div",{className:"pulse skeleton__circle"}),Object(d.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(d.jsx)("div",{className:"pulse skeleton__block"}),Object(d.jsx)("div",{className:"pulse skeleton__block"}),Object(d.jsx)("div",{className:"pulse skeleton__block"})]})]})}),C=(n(22),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={movie:null,loading:!1,error:!1},e.movieService=new O,e.updateMovie=function(){var t=e.props.selectedMovie;t&&(e.onMovieLoading(),e.movieService.getMovie(t.id).then(e.onMovieLoaded).catch(e.onError))},e.onMovieLoaded=function(t){e.setState({movie:t,loading:!1})},e.onMovieLoading=function(){e.setState({loading:!0})},e.onError=function(){e.setState({loading:!1,error:!0})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.updateMovie()}},{key:"componentDidUpdate",value:function(e){this.props.selectedMovie!==e.selectedMovie&&this.updateMovie()}},{key:"render",value:function(){var e=this.state,t=e.movie,n=e.loading,r=e.error,s=t||n||r?null:Object(d.jsx)(w,{}),a=r?Object(d.jsx)(y,{}):null,i=n?Object(d.jsx)(k,{}):null,c=n||r||!t?null:Object(d.jsx)(T,{movie:t});return Object(d.jsxs)("div",{className:"char__info",children:[s,a,i,c]})}}]),n}(r.Component)),T=function(e){var t=e.movie,n=t.title,r=t.overview,s=t.release,a=t.genres,i=t.poster,c=t.homepage,o=a.map((function(e){return e.name})).join(", "),l="https://image.tmdb.org/t/p/w500null"===i?N:i;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"char__basics",children:[Object(d.jsx)("img",{src:l,alt:n}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"char__info-name",children:n}),Object(d.jsx)("div",{className:"char__btns",children:Object(d.jsx)("a",{href:c,className:"button button__main",target:"_blanc",children:Object(d.jsx)("div",{className:"inner",children:c?"Homepage":"There is no homepage"})})})]})]}),Object(d.jsxs)("div",{className:"char__descr",children:[Object(d.jsx)("b",{children:"Release:"})," ",s]}),Object(d.jsxs)("div",{className:"char__descr",children:[Object(d.jsx)("b",{children:"Genres:"})," ",o]}),Object(d.jsx)("div",{className:"char__descr",children:r})]})},L=C,G=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={error:!1},e}return Object(o.a)(n,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(d.jsx)(y,{}):this.props.children}}]),n}(r.Component),R=G,B=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={selectedMovie:null,selectedGenre:"",searchStr:""},e.onMovieSelected=function(t){e.setState({selectedMovie:t})},e.onGenreSelected=function(t){e.setState({selectedGenre:t.target.value})},e.onSearch=function(t){var n=t.target.value;e.setState({searchStr:n})},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(j,{}),Object(d.jsxs)("div",{className:"search__panel",children:[Object(d.jsx)(p,{onSearch:this.onSearch,searchStr:this.state.searchStr}),Object(d.jsx)(g,{onGenreSelected:this.onGenreSelected})]}),Object(d.jsx)("main",{children:Object(d.jsxs)("div",{className:"char__content",children:[Object(d.jsx)(R,{children:Object(d.jsx)(S,{onMovieSelected:this.onMovieSelected,searchStr:this.state.searchStr,selectedGenre:this.state.selectedGenre})}),Object(d.jsx)(R,{children:Object(d.jsx)(L,{selectedMovie:this.state.selectedMovie})})]})})]})}}]),n}(r.Component),E=B;n(23);i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(E,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.374da432.chunk.js.map