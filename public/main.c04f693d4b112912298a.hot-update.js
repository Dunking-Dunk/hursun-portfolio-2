/*! For license information please see main.c04f693d4b112912298a.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateportfolio_hursun_2("main",{"./app/index.js":(e,t,s)=>{s.r(t);var n=s("./node_modules/lodash/each.js"),a=s("./node_modules/normalize-wheel/index.js"),i=s("./app/components/canvas/index.js"),o=s("./app/components/Header.js"),h=s("./app/components/Preloader.js"),r=s("./app/pages/home/index.js"),d=s("./app/pages/works/index.js"),c=s("./app/pages/skills/index.js"),l=s("./app/pages/gallery/index.js"),p=s("./app/pages/spotify/index.js");new class{constructor(){this.prevUrl=window.location.href,this.createContent(),this.createCanvas(),this.createPreloader(),this.createHeader(),this.createPages(),this.addLinkListeners(),this.addEventListener(),this.update()}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createCanvas(){this.canvas=new i.default,this.canvas.onChange(this.template)}createPreloader(){this.preloader=new h.default({loadingManger:this.canvas.manager}),this.preloader.once("completed",this.onPreloaded.bind(this))}onPreloaded(){this.header.createAudio(),this.onResize(),this.page.show()}createHeader(){this.header=new o.default}createPages(){this.pages={home:new r.default,works:new d.default,skills:new c.default,gallery:new l.default,spotify:new p.default},this.page=this.pages[this.template],this.page.create()}async onChange(e){if(e!==this.prevUrl){"http://localhost:3000/gallery"===this.prevUrl&&(this.content.style.height="100%",console.log("lol")),this.page.hide();const t=await window.fetch(e);if(200===t.status){const s=await t.text(),n=document.createElement("div");n.innerHTML=s,window.history.pushState({},"",e);const a=n.querySelector(".content");this.template=a.getAttribute("data-template"),this.content.setAttribute("data-template",this.template),this.content.innerHTML=a.innerHTML,this.page=this.pages[this.template],this.page.create(),this.canvas.onChange(this.template),this.onResize(),this.addLinkListeners(),this.page.show()}else console.log("Something went wrong")}this.prevUrl=e}addLinkListeners(){const e=document.querySelectorAll("a");n(e,(e=>{e.onclick=t=>{if(-1==="mailto:sshursun@gmail.com, https://www.instagram.com/__hursun_ss__/, https://twitter.com/hursun2004, https://www.linkedin.com/in/hursun-ss-377659233/".indexOf(e.href)){t.preventDefault();const{href:s}=e;this.onChange(s)}}}))}addEventListener(){window.addEventListener("resize",this.onResize.bind(this)),window.addEventListener("wheel",this.onScroll.bind(this)),window.addEventListener("mousemove",this.onMousemove.bind(this)),window.addEventListener("touchmove",this.onTouchMove.bind(this)),window.addEventListener("touchstart",this.onTouchStart.bind(this)),window.addEventListener("touchend",this.onTouchEnd.bind(this))}onResize(){window.requestAnimationFrame((()=>{this.page&&this.page.onResize&&this.page.onResize(),this.canvas&&this.canvas.onResize()&&this.canvas.onResize()}))}onScroll(e){const t=a(e);this.page&&this.page.onScroll&&this.page.onScroll(t),this.canvas&&this.canvas.onScroll&&this.canvas.onScroll(t)}onMousemove(e){this.canvas&&this.canvas.onMousemove&&this.canvas.onMousemove(e),this.page&&this.page.onMousemove&&this.page.onMousemove(e)}onTouchMove(e){}onTouchEnd(){}onTouchStart(){}update(){this.page&&this.page.update&&this.page.update(),this.canvas&&this.canvas.update&&this.canvas.update(),window.requestAnimationFrame(this.update.bind(this))}}}},(function(e){e.h=()=>"430188298011f27df19c"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dW4tMi8uL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8taHVyc3VuLTIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoLmpzJ1xyXG5pbXBvcnQgTm9ybWFsaXplV2hlZWwgZnJvbSAnbm9ybWFsaXplLXdoZWVsJ1xyXG5cclxuaW1wb3J0IENhbnZhcyBmcm9tICcuL2NvbXBvbmVudHMvY2FudmFzL2luZGV4LmpzJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXIuanMnXHJcbmltcG9ydCBQcmVsb2FkZXIgZnJvbSAnLi9jb21wb25lbnRzL1ByZWxvYWRlci5qcydcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9wYWdlcy9ob21lL2luZGV4LmpzJ1xyXG5pbXBvcnQgV29ya3MgZnJvbSAnLi9wYWdlcy93b3Jrcy9pbmRleC5qcydcclxuaW1wb3J0IFNraWxscyBmcm9tICcuL3BhZ2VzL3NraWxscy9pbmRleC5qcydcclxuaW1wb3J0IEdhbGxlcnkgZnJvbSAnLi9wYWdlcy9nYWxsZXJ5L2luZGV4LmpzJ1xyXG5pbXBvcnQgU3BvdGlmeSBmcm9tICcuL3BhZ2VzL3Nwb3RpZnkvaW5kZXguanMnXHJcblxyXG5jbGFzcyBhcHAge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5wcmV2VXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWZcclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGVDb250ZW50KClcclxuICAgICAgICB0aGlzLmNyZWF0ZUNhbnZhcygpXHJcbiAgICAgICAgdGhpcy5jcmVhdGVQcmVsb2FkZXIoKVxyXG4gICAgICAgIHRoaXMuY3JlYXRlSGVhZGVyKClcclxuICAgICAgICB0aGlzLmNyZWF0ZVBhZ2VzKClcclxuICAgICAgICB0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKVxyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigpXHJcbiAgICAgICAgdGhpcy51cGRhdGUoKVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUNvbnRlbnQoKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSB0aGlzLmNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJylcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVDYW52YXMoKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBuZXcgQ2FudmFzKClcclxuICAgICAgICB0aGlzLmNhbnZhcy5vbkNoYW5nZSh0aGlzLnRlbXBsYXRlKVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVByZWxvYWRlcigpIHtcclxuICAgICAgICB0aGlzLnByZWxvYWRlciA9IG5ldyBQcmVsb2FkZXIoeyBsb2FkaW5nTWFuZ2VyOiB0aGlzLmNhbnZhcy5tYW5hZ2VyIH0pXHJcbiAgICAgICAgdGhpcy5wcmVsb2FkZXIub25jZSgnY29tcGxldGVkJywgdGhpcy5vblByZWxvYWRlZC5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG5cclxuICAgIG9uUHJlbG9hZGVkKCkge1xyXG4gICAgICAgIHRoaXMuaGVhZGVyLmNyZWF0ZUF1ZGlvKClcclxuICAgICAgICB0aGlzLm9uUmVzaXplKClcclxuICAgICAgICB0aGlzLnBhZ2Uuc2hvdygpXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlSGVhZGVyKCkge1xyXG4gICAgICAgIHRoaXMuaGVhZGVyID0gbmV3IEhlYWRlcigpXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlUGFnZXMoKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlcyA9IHtcclxuICAgICAgICAgICAgaG9tZTogbmV3IEhvbWUoKSxcclxuICAgICAgICAgICAgd29ya3M6IG5ldyBXb3JrcygpLFxyXG4gICAgICAgICAgICBza2lsbHM6IG5ldyBTa2lsbHMoKSxcclxuICAgICAgICAgICAgZ2FsbGVyeTogbmV3IEdhbGxlcnkoKSxcclxuICAgICAgICAgICAgc3BvdGlmeTogbmV3IFNwb3RpZnkoKSxcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXVxyXG4gICAgICAgIHRoaXMucGFnZS5jcmVhdGUoKVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uQ2hhbmdlKHVybCkge1xyXG4gICAgICAgIGlmICh1cmwgIT09IHRoaXMucHJldlVybCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2VXJsID09PSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2dhbGxlcnknKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9sJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnBhZ2UuaGlkZSgpXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCB3aW5kb3cuZmV0Y2godXJsKVxyXG5cclxuICAgICAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGh0bWwgPSBhd2FpdCByZXF1ZXN0LnRleHQoKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBodG1sXHJcblxyXG4gICAgICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgdXJsKVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpdkNvbnRlbnQgPSBkaXYucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxyXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGRpdkNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJylcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJywgdGhpcy50ZW1wbGF0ZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC5pbm5lckhUTUwgPSBkaXZDb250ZW50LmlubmVySFRNTFxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZS5jcmVhdGUoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMub25DaGFuZ2UodGhpcy50ZW1wbGF0ZSlcclxuICAgICAgICAgICAgICAgIHRoaXMub25SZXNpemUoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRMaW5rTGlzdGVuZXJzKClcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZS5zaG93KClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTb21ldGhpbmcgd2VudCB3cm9uZycpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucHJldlVybCA9IHVybFxyXG4gICAgfVxyXG5cclxuICAgIGFkZExpbmtMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJylcclxuICAgICAgICBlYWNoKGxpbmtzLCAobGluaykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzdHJpY3RlZCA9XHJcbiAgICAgICAgICAgICAgICAnbWFpbHRvOnNzaHVyc3VuQGdtYWlsLmNvbSwgaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9fX2h1cnN1bl9zc19fLywgaHR0cHM6Ly90d2l0dGVyLmNvbS9odXJzdW4yMDA0LCBodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vaHVyc3VuLXNzLTM3NzY1OTIzMy8nXHJcblxyXG4gICAgICAgICAgICBsaW5rLm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3RyaWN0ZWQuaW5kZXhPZihsaW5rLmhyZWYpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgaHJlZiB9ID0gbGlua1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2UoaHJlZilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcigpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKVxyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLm9uU2Nyb2xsLmJpbmQodGhpcykpXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZW1vdmUuYmluZCh0aGlzKSlcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUuYmluZCh0aGlzKSlcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25Ub3VjaFN0YXJ0LmJpbmQodGhpcykpXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vblRvdWNoRW5kLmJpbmQodGhpcykpXHJcbiAgICB9XHJcblxyXG4gICAgb25SZXNpemUoKSB7XHJcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLm9uUmVzaXplKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2Uub25SZXNpemUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vblJlc2l6ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5vblJlc2l6ZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2Nyb2xsKGUpIHtcclxuICAgICAgICBjb25zdCBub3JtYWxpemUgPSBOb3JtYWxpemVXaGVlbChlKVxyXG4gICAgICAgIGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLm9uU2Nyb2xsKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZS5vblNjcm9sbChub3JtYWxpemUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vblNjcm9sbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5vblNjcm9sbChub3JtYWxpemUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2Vtb3ZlKGUpIHtcclxuICAgICAgICBpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMub25Nb3VzZW1vdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMub25Nb3VzZW1vdmUoZSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLm9uTW91c2Vtb3ZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZS5vbk1vdXNlbW92ZShlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoTW92ZShlKSB7fVxyXG4gICAgb25Ub3VjaEVuZCgpIHt9XHJcblxyXG4gICAgb25Ub3VjaFN0YXJ0KCkge31cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2UudXBkYXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZS51cGRhdGUoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMudXBkYXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnVwZGF0ZSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSlcclxuICAgIH1cclxufVxyXG5cclxubmV3IGFwcCgpXHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjQzMDE4ODI5ODAxMWYyN2RmMTljXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwidGhpcyIsInByZXZVcmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJjcmVhdGVDb250ZW50IiwiY3JlYXRlQ2FudmFzIiwiY3JlYXRlUHJlbG9hZGVyIiwiY3JlYXRlSGVhZGVyIiwiY3JlYXRlUGFnZXMiLCJhZGRMaW5rTGlzdGVuZXJzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInVwZGF0ZSIsImNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZW1wbGF0ZSIsImdldEF0dHJpYnV0ZSIsImNhbnZhcyIsIkNhbnZhcyIsIm9uQ2hhbmdlIiwicHJlbG9hZGVyIiwiUHJlbG9hZGVyIiwibG9hZGluZ01hbmdlciIsIm1hbmFnZXIiLCJvbmNlIiwib25QcmVsb2FkZWQiLCJiaW5kIiwiaGVhZGVyIiwiY3JlYXRlQXVkaW8iLCJvblJlc2l6ZSIsInBhZ2UiLCJzaG93IiwiSGVhZGVyIiwicGFnZXMiLCJob21lIiwiSG9tZSIsIndvcmtzIiwiV29ya3MiLCJza2lsbHMiLCJTa2lsbHMiLCJnYWxsZXJ5IiwiR2FsbGVyeSIsInNwb3RpZnkiLCJTcG90aWZ5IiwiY3JlYXRlIiwidXJsIiwic3R5bGUiLCJoZWlnaHQiLCJjb25zb2xlIiwibG9nIiwiaGlkZSIsInJlcXVlc3QiLCJmZXRjaCIsInN0YXR1cyIsImh0bWwiLCJ0ZXh0IiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJkaXZDb250ZW50Iiwic2V0QXR0cmlidXRlIiwibGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWFjaCIsImxpbmsiLCJvbmNsaWNrIiwiZSIsImluZGV4T2YiLCJwcmV2ZW50RGVmYXVsdCIsIm9uU2Nyb2xsIiwib25Nb3VzZW1vdmUiLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hTdGFydCIsIm9uVG91Y2hFbmQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJub3JtYWxpemUiLCJOb3JtYWxpemVXaGVlbCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==