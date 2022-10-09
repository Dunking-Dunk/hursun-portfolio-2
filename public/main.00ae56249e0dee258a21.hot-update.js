/*! For license information please see main.00ae56249e0dee258a21.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateportfolio_hursun_2("main",{"./app/index.js":(e,t,s)=>{s.r(t);var n=s("./node_modules/lodash/each.js"),a=s("./node_modules/normalize-wheel/index.js"),i=s("./app/components/canvas/index.js"),o=s("./app/components/Header.js"),h=s("./app/components/Preloader.js"),r=s("./app/pages/home/index.js"),d=s("./app/pages/works/index.js"),c=s("./app/pages/skills/index.js"),l=s("./app/pages/gallery/index.js"),p=s("./app/pages/spotify/index.js");new class{constructor(){this.prevUrl=window.location.href,this.createContent(),this.createCanvas(),this.createPreloader(),this.createHeader(),this.createPages(),this.addLinkListeners(),this.addEventListener(),this.update()}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createCanvas(){this.canvas=new i.default,this.canvas.onChange(this.template)}createPreloader(){this.preloader=new h.default({loadingManger:this.canvas.manager}),this.preloader.once("completed",this.onPreloaded.bind(this))}onPreloaded(){this.content.style.display="block",this.header.createAudio(),this.onResize(),this.page.show()}createHeader(){this.header=new o.default}createPages(){this.pages={home:new r.default,works:new d.default,skills:new c.default,gallery:new l.default,spotify:new p.default},this.page=this.pages[this.template],this.page.create()}async onChange(e){if(e!==this.prevUrl){"http://localhost:3000/gallery"!==this.prevUrl&&null!==this.prevUrl||(console.log("lol"),this.content.style.height="100%"),this.page.hide();const t=await window.fetch(e);if(200===t.status){const s=await t.text(),n=document.createElement("div");n.innerHTML=s,window.history.pushState({},"",e);const a=n.querySelector(".content");this.template=a.getAttribute("data-template"),this.content.setAttribute("data-template",this.template),this.content.innerHTML=a.innerHTML,this.page=this.pages[this.template],this.page.create(),this.canvas.onChange(this.template),this.onResize(),this.addLinkListeners(),this.page.show()}else console.log("Something went wrong")}this.prevUrl=e}addLinkListeners(){const e=document.querySelectorAll("a");n(e,(e=>{e.onclick=t=>{if(-1==="mailto:sshursun@gmail.com, https://www.instagram.com/__hursun_ss__/, https://twitter.com/hursun2004, https://www.linkedin.com/in/hursun-ss-377659233/".indexOf(e.href)){t.preventDefault();const{href:s}=e;this.onChange(s)}}}))}addEventListener(){window.addEventListener("resize",this.onResize.bind(this)),window.addEventListener("mousewheel",this.onScroll.bind(this)),window.addEventListener("mousemove",this.onMousemove.bind(this)),window.addEventListener("touchmove",this.onTouchMove.bind(this)),window.addEventListener("touchstart",this.onTouchStart.bind(this)),window.addEventListener("touchend",this.onTouchEnd.bind(this))}onResize(){window.requestAnimationFrame((()=>{this.page&&this.page.onResize&&this.page.onResize(),this.canvas&&this.canvas.onResize()&&this.canvas.onResize()}))}onScroll(e){const t=a(e);this.page&&this.page.onScroll&&this.page.onScroll(t),this.canvas&&this.canvas.onScroll&&this.canvas.onScroll(t)}onMousemove(e){this.canvas&&this.canvas.onMousemove&&this.canvas.onMousemove(e),this.page&&this.page.onMousemove&&this.page.onMousemove(e)}onTouchMove(e){}onTouchEnd(){}onTouchStart(){}update(){this.page&&this.page.update&&this.page.update(),this.canvas&&this.canvas.update&&this.canvas.update(),window.requestAnimationFrame(this.update.bind(this))}}}},(function(e){e.h=()=>"efe223c322cdd053e139"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLWh1cnN1bi0yLy4vYXBwL2luZGV4LmpzIiwid2VicGFjazovL3BvcnRmb2xpby1odXJzdW4tMi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2guanMnXHJcbmltcG9ydCBOb3JtYWxpemVXaGVlbCBmcm9tICdub3JtYWxpemUtd2hlZWwnXHJcblxyXG5pbXBvcnQgQ2FudmFzIGZyb20gJy4vY29tcG9uZW50cy9jYW52YXMvaW5kZXguanMnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlci5qcydcclxuaW1wb3J0IFByZWxvYWRlciBmcm9tICcuL2NvbXBvbmVudHMvUHJlbG9hZGVyLmpzJ1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL3BhZ2VzL2hvbWUvaW5kZXguanMnXHJcbmltcG9ydCBXb3JrcyBmcm9tICcuL3BhZ2VzL3dvcmtzL2luZGV4LmpzJ1xyXG5pbXBvcnQgU2tpbGxzIGZyb20gJy4vcGFnZXMvc2tpbGxzL2luZGV4LmpzJ1xyXG5pbXBvcnQgR2FsbGVyeSBmcm9tICcuL3BhZ2VzL2dhbGxlcnkvaW5kZXguanMnXHJcbmltcG9ydCBTcG90aWZ5IGZyb20gJy4vcGFnZXMvc3BvdGlmeS9pbmRleC5qcydcclxuXHJcbmNsYXNzIGFwcCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnByZXZVcmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZlxyXG5cclxuICAgICAgICB0aGlzLmNyZWF0ZUNvbnRlbnQoKVxyXG4gICAgICAgIHRoaXMuY3JlYXRlQ2FudmFzKClcclxuICAgICAgICB0aGlzLmNyZWF0ZVByZWxvYWRlcigpXHJcbiAgICAgICAgdGhpcy5jcmVhdGVIZWFkZXIoKVxyXG4gICAgICAgIHRoaXMuY3JlYXRlUGFnZXMoKVxyXG4gICAgICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpXHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKClcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQ29udGVudCgpIHtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRoaXMuY29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUNhbnZhcygpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IG5ldyBDYW52YXMoKVxyXG4gICAgICAgIHRoaXMuY2FudmFzLm9uQ2hhbmdlKHRoaXMudGVtcGxhdGUpXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlUHJlbG9hZGVyKCkge1xyXG4gICAgICAgIHRoaXMucHJlbG9hZGVyID0gbmV3IFByZWxvYWRlcih7IGxvYWRpbmdNYW5nZXI6IHRoaXMuY2FudmFzLm1hbmFnZXIgfSlcclxuICAgICAgICB0aGlzLnByZWxvYWRlci5vbmNlKCdjb21wbGV0ZWQnLCB0aGlzLm9uUHJlbG9hZGVkLmJpbmQodGhpcykpXHJcbiAgICB9XHJcblxyXG4gICAgb25QcmVsb2FkZWQoKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICAgICAgdGhpcy5oZWFkZXIuY3JlYXRlQXVkaW8oKVxyXG4gICAgICAgIHRoaXMub25SZXNpemUoKVxyXG4gICAgICAgIHRoaXMucGFnZS5zaG93KClcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVIZWFkZXIoKSB7XHJcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKClcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVQYWdlcygpIHtcclxuICAgICAgICB0aGlzLnBhZ2VzID0ge1xyXG4gICAgICAgICAgICBob21lOiBuZXcgSG9tZSgpLFxyXG4gICAgICAgICAgICB3b3JrczogbmV3IFdvcmtzKCksXHJcbiAgICAgICAgICAgIHNraWxsczogbmV3IFNraWxscygpLFxyXG4gICAgICAgICAgICBnYWxsZXJ5OiBuZXcgR2FsbGVyeSgpLFxyXG4gICAgICAgICAgICBzcG90aWZ5OiBuZXcgU3BvdGlmeSgpLFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdXHJcbiAgICAgICAgdGhpcy5wYWdlLmNyZWF0ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25DaGFuZ2UodXJsKSB7XHJcbiAgICAgICAgaWYgKHVybCAhPT0gdGhpcy5wcmV2VXJsKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXZVcmwgPT09ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvZ2FsbGVyeScgfHwgdGhpcy5wcmV2VXJsID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9sJylcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC5zdHlsZS5oZWlnaHQgPSAnMTAwJSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnBhZ2UuaGlkZSgpXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCB3aW5kb3cuZmV0Y2godXJsKVxyXG5cclxuICAgICAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGh0bWwgPSBhd2FpdCByZXF1ZXN0LnRleHQoKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBodG1sXHJcblxyXG4gICAgICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgdXJsKVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpdkNvbnRlbnQgPSBkaXYucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxyXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGRpdkNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJylcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJywgdGhpcy50ZW1wbGF0ZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC5pbm5lckhUTUwgPSBkaXZDb250ZW50LmlubmVySFRNTFxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZS5jcmVhdGUoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMub25DaGFuZ2UodGhpcy50ZW1wbGF0ZSlcclxuICAgICAgICAgICAgICAgIHRoaXMub25SZXNpemUoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRMaW5rTGlzdGVuZXJzKClcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZS5zaG93KClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTb21ldGhpbmcgd2VudCB3cm9uZycpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucHJldlVybCA9IHVybFxyXG4gICAgfVxyXG5cclxuICAgIGFkZExpbmtMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJylcclxuICAgICAgICBlYWNoKGxpbmtzLCAobGluaykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzdHJpY3RlZCA9XHJcbiAgICAgICAgICAgICAgICAnbWFpbHRvOnNzaHVyc3VuQGdtYWlsLmNvbSwgaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9fX2h1cnN1bl9zc19fLywgaHR0cHM6Ly90d2l0dGVyLmNvbS9odXJzdW4yMDA0LCBodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vaHVyc3VuLXNzLTM3NzY1OTIzMy8nXHJcblxyXG4gICAgICAgICAgICBsaW5rLm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3RyaWN0ZWQuaW5kZXhPZihsaW5rLmhyZWYpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgaHJlZiB9ID0gbGlua1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2UoaHJlZilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcigpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgdGhpcy5vblNjcm9sbC5iaW5kKHRoaXMpKVxyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlbW92ZS5iaW5kKHRoaXMpKVxyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5vblRvdWNoTW92ZS5iaW5kKHRoaXMpKVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoU3RhcnQuYmluZCh0aGlzKSlcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uVG91Y2hFbmQuYmluZCh0aGlzKSlcclxuICAgIH1cclxuXHJcbiAgICBvblJlc2l6ZSgpIHtcclxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2Uub25SZXNpemUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZS5vblJlc2l6ZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLm9uUmVzaXplKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLm9uUmVzaXplKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25TY3JvbGwoZSkge1xyXG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZSA9IE5vcm1hbGl6ZVdoZWVsKGUpXHJcbiAgICAgICAgaWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2Uub25TY3JvbGwpIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdlLm9uU2Nyb2xsKG5vcm1hbGl6ZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLm9uU2Nyb2xsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLm9uU2Nyb2xsKG5vcm1hbGl6ZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZW1vdmUoZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vbk1vdXNlbW92ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5vbk1vdXNlbW92ZShlKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2Uub25Nb3VzZW1vdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdlLm9uTW91c2Vtb3ZlKGUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hNb3ZlKGUpIHt9XHJcbiAgICBvblRvdWNoRW5kKCkge31cclxuXHJcbiAgICBvblRvdWNoU3RhcnQoKSB7fVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS51cGRhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdlLnVwZGF0ZSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy51cGRhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMudXBkYXRlKClcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG59XHJcblxyXG5uZXcgYXBwKClcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZWZlMjIzYzMyMmNkZDA1M2UxMzlcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJ0aGlzIiwicHJldlVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImNyZWF0ZUNvbnRlbnQiLCJjcmVhdGVDYW52YXMiLCJjcmVhdGVQcmVsb2FkZXIiLCJjcmVhdGVIZWFkZXIiLCJjcmVhdGVQYWdlcyIsImFkZExpbmtMaXN0ZW5lcnMiLCJhZGRFdmVudExpc3RlbmVyIiwidXBkYXRlIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRlbXBsYXRlIiwiZ2V0QXR0cmlidXRlIiwiY2FudmFzIiwiQ2FudmFzIiwib25DaGFuZ2UiLCJwcmVsb2FkZXIiLCJQcmVsb2FkZXIiLCJsb2FkaW5nTWFuZ2VyIiwibWFuYWdlciIsIm9uY2UiLCJvblByZWxvYWRlZCIsImJpbmQiLCJzdHlsZSIsImRpc3BsYXkiLCJoZWFkZXIiLCJjcmVhdGVBdWRpbyIsIm9uUmVzaXplIiwicGFnZSIsInNob3ciLCJIZWFkZXIiLCJwYWdlcyIsImhvbWUiLCJIb21lIiwid29ya3MiLCJXb3JrcyIsInNraWxscyIsIlNraWxscyIsImdhbGxlcnkiLCJHYWxsZXJ5Iiwic3BvdGlmeSIsIlNwb3RpZnkiLCJjcmVhdGUiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwiaGVpZ2h0IiwiaGlkZSIsInJlcXVlc3QiLCJmZXRjaCIsInN0YXR1cyIsImh0bWwiLCJ0ZXh0IiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJkaXZDb250ZW50Iiwic2V0QXR0cmlidXRlIiwibGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWFjaCIsImxpbmsiLCJvbmNsaWNrIiwiZSIsImluZGV4T2YiLCJwcmV2ZW50RGVmYXVsdCIsIm9uU2Nyb2xsIiwib25Nb3VzZW1vdmUiLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hTdGFydCIsIm9uVG91Y2hFbmQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJub3JtYWxpemUiLCJOb3JtYWxpemVXaGVlbCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==