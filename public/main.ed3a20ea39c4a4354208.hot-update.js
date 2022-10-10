/*! For license information please see main.ed3a20ea39c4a4354208.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateportfolio_hursun_2("main",{"./app/components/canvas/home/index.js":(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});var a=r("./node_modules/three/build/three.module.js"),s=r("./node_modules/gsap/index.js"),i=r("./app/shaders/human/vertex.glsl"),l=r("./app/shaders/human/fragment.glsl"),o=r("./app/shaders/particle/vertex.glsl"),h=r("./app/shaders/particle/fragment.glsl");class n{constructor({scene:e,gltfLoader:t,camera:r,renderer:s}){this.scene=e,this.gltfLoader=t,this.camera=r,this.renderer=s,this.uniforms={time:{value:0},speed:{value:18},charSize:{value:{x:1,y:1}},charResolution:{value:5.5},color:{value:new a.Color("red")},resolution:{value:{x:1,y:1}}},this.scroll={target:0,current:0,limit:document.querySelector(".home__wrapper").clientHeight},this.y={start:0,distance:0,end:0},this.group=new a.Group,this.scene.add(this.group),this.createObject(),this.createParticle()}updateAllMaterial(){this.scene.traverse((e=>{e instanceof a.Mesh&&e.material instanceof a.MeshStandardMaterial&&(e.material.needsUpdate=!0)}))}createObject(){this.cube=new a.Mesh(new a.BoxGeometry(1,1,1),new a.MeshBasicMaterial),this.cube.position.set(0,-18,0),this.material=new a.RawShaderMaterial({vertexShader:i.default,fragmentShader:l.default,uniforms:this.uniforms}),this.gltfLoader.load("models/human/scene.gltf",(e=>{this.model=e.scene,this.model.children[0].children[0].children.forEach((e=>{e.material=this.material})),this.model.position.y=-16,this.group.add(this.model),this.updateAllMaterial()}))}createParticle(){const e=new Float32Array(3e4);for(let t=0;t<1e4;t++){const r=3*t;e[r]=100*(Math.random()-.5),e[r+1]=100*Math.random(),e[r+2]=100*(Math.random()-.5)}const t=new a.BufferGeometry;t.setAttribute("position",new a.BufferAttribute(e,3)),this.particleMaterial=new a.RawShaderMaterial({fragmentShader:h.default,vertexShader:o.default,depthWrite:!1,blending:a.AdditiveBlending,uniforms:{uTime:{value:0}}}),this.particle=new a.Points(t,this.particleMaterial),this.particle.position.y=-35,this.group.add(this.particle)}onScroll({pixelY:e}){this.scroll.target+=e}onTouchStart(e){this.y.start=e.touches[0].clientY}onTouchMove(e){this.y.start>e.touches[0].clientY?this.y.distance+=10:this.y.distance-=10}update(e){this.scroll.target=this.y.distance,this.scroll.target=s.default.utils.clamp(0,this.scroll.limit,this.scroll.target),this.scroll.target<1&&(this.scroll.target=0),this.scroll.current=s.default.utils.interpolate(this.scroll.current,this.scroll.target,.01),this.head&&(this.head.rotation.y=e),this.particleMaterial&&(this.particleMaterial.uniforms.uTime.value=e),this.scroll.current<4600?(this.camera.rotation.x=3e-4*this.scroll.current,this.camera.rotation.y=.01*this.scroll.current,this.camera.position.z=5*Math.cos(.01*this.scroll.current),this.camera.position.y=.002*-this.scroll.current,this.camera.position.x=5*Math.sin(.01*this.scroll.current),document.querySelector(".home__end").classList.remove("active")):(s.default.to(this.camera.position,{x:0,y:-6,z:15,duration:6,ease:"expo.out"}),s.default.to(this.camera.rotation,{x:0,y:0,z:0,duration:1}),document.querySelector(".home__end").classList.add("active")),this.uniforms.time.value=e}destroy(){this.scene.remove(this.group)}}}},(function(e){e.h=()=>"e631d3eb627abfb18d26"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXZDd0MsS0FBS3lCLElBQTBCLElBQXRCdkUsS0FBS1ksT0FBT0UsU0FDOUNFLFNBQVNDLGNBQWMsY0FBY3VELFVBQVVDLE9BQU8sWUFFdERQLEVBQUFBLFFBQUFBLEdBQVFsRSxLQUFLRixPQUFPa0MsU0FBVSxDQUMxQjFCLEVBQUcsRUFDSEMsR0FBSSxFQUNKOEQsRUFBRyxHQUNISyxTQUFVLEVBQ1ZDLEtBQU0sYUFFVlQsRUFBQUEsUUFBQUEsR0FBUWxFLEtBQUtGLE9BQU9zRSxTQUFVLENBQzFCOUQsRUFBRyxFQUNIQyxFQUFHLEVBQ0g4RCxFQUFHLEVBQ0hLLFNBQVUsSUFHZDFELFNBQVNDLGNBQWMsY0FBY3VELFVBQVVqRCxJQUFJLFdBR3ZEdkIsS0FBS0MsU0FBU0MsS0FBS0MsTUFBUThELENBQzlCLENBRURXLFVBQ0k1RSxLQUFLSixNQUFNNkUsT0FBT3pFLEtBQUtzQixNQUMxQixrQkNoS0x1RCxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLWh1cnN1bi0yLy4vYXBwL2NvbXBvbmVudHMvY2FudmFzL2hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLWh1cnN1bi0yL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSdcclxuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcclxuXHJcbmltcG9ydCB2ZXJ0ZXhTaGFkZXIgZnJvbSAnLi4vLi4vLi4vc2hhZGVycy9odW1hbi92ZXJ0ZXguZ2xzbCdcclxuaW1wb3J0IGZyYWdtZW50U2hhZGVyIGZyb20gJy4uLy4uLy4uL3NoYWRlcnMvaHVtYW4vZnJhZ21lbnQuZ2xzbCdcclxuXHJcbmltcG9ydCB2ZXJ0ZXhTaGFkZXJQYXJ0aWNsZSBmcm9tICcuLi8uLi8uLi9zaGFkZXJzL3BhcnRpY2xlL3ZlcnRleC5nbHNsJ1xyXG5pbXBvcnQgZnJhZ21lbnRTaGFkZXJQYXJ0aWNsZSBmcm9tICcuLi8uLi8uLi9zaGFkZXJzL3BhcnRpY2xlL2ZyYWdtZW50Lmdsc2wnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgc2NlbmUsIGdsdGZMb2FkZXIsIGNhbWVyYSwgcmVuZGVyZXIgfSkge1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxyXG4gICAgICAgIHRoaXMuZ2x0ZkxvYWRlciA9IGdsdGZMb2FkZXJcclxuICAgICAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYVxyXG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlclxyXG5cclxuICAgICAgICB0aGlzLnVuaWZvcm1zID0ge1xyXG4gICAgICAgICAgICB0aW1lOiB7IHZhbHVlOiAwLjAgfSxcclxuICAgICAgICAgICAgc3BlZWQ6IHsgdmFsdWU6IDE4LjAgfSxcclxuICAgICAgICAgICAgY2hhclNpemU6IHsgdmFsdWU6IHsgeDogMS4wLCB5OiAxLjAgfSB9LFxyXG4gICAgICAgICAgICBjaGFyUmVzb2x1dGlvbjogeyB2YWx1ZTogNS41IH0sXHJcbiAgICAgICAgICAgIGNvbG9yOiB7IHZhbHVlOiBuZXcgVEhSRUUuQ29sb3IoJ3JlZCcpIH0sXHJcbiAgICAgICAgICAgIHJlc29sdXRpb246IHsgdmFsdWU6IHsgeDogMS4wLCB5OiAxLjAgfSB9LFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zY3JvbGwgPSB7XHJcbiAgICAgICAgICAgIHRhcmdldDogMCxcclxuICAgICAgICAgICAgY3VycmVudDogMCxcclxuICAgICAgICAgICAgbGltaXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lX193cmFwcGVyJykuY2xpZW50SGVpZ2h0LFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy55ID0ge1xyXG4gICAgICAgICAgICBzdGFydDogMCxcclxuICAgICAgICAgICAgZGlzdGFuY2U6IDAsXHJcbiAgICAgICAgICAgIGVuZDogMCxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZ3JvdXAgPSBuZXcgVEhSRUUuR3JvdXAoKVxyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuZ3JvdXApXHJcbiAgICAgICAgdGhpcy5jcmVhdGVPYmplY3QoKVxyXG4gICAgICAgIHRoaXMuY3JlYXRlUGFydGljbGUoKVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUFsbE1hdGVyaWFsKCkge1xyXG4gICAgICAgIHRoaXMuc2NlbmUudHJhdmVyc2UoKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGNoaWxkIGluc3RhbmNlb2YgVEhSRUUuTWVzaCAmJlxyXG4gICAgICAgICAgICAgICAgY2hpbGQubWF0ZXJpYWwgaW5zdGFuY2VvZiBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbFxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLm1hdGVyaWFsLm5lZWRzVXBkYXRlID0gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVPYmplY3QoKSB7XHJcbiAgICAgICAgdGhpcy5jdWJlID0gbmV3IFRIUkVFLk1lc2gobmV3IFRIUkVFLkJveEdlb21ldHJ5KDEsIDEsIDEpLCBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoKSlcclxuICAgICAgICB0aGlzLmN1YmUucG9zaXRpb24uc2V0KDAsIC0xOCwgMClcclxuICAgICAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFRIUkVFLlJhd1NoYWRlck1hdGVyaWFsKHtcclxuICAgICAgICAgICAgdmVydGV4U2hhZGVyLFxyXG4gICAgICAgICAgICBmcmFnbWVudFNoYWRlcixcclxuICAgICAgICAgICAgdW5pZm9ybXM6IHRoaXMudW5pZm9ybXMsXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmdsdGZMb2FkZXIubG9hZCgnbW9kZWxzL2h1bWFuL3NjZW5lLmdsdGYnLCAoZ2x0ZikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsID0gZ2x0Zi5zY2VuZVxyXG5cclxuICAgICAgICAgICAgdGhpcy5tb2RlbC5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQubWF0ZXJpYWwgPSB0aGlzLm1hdGVyaWFsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwucG9zaXRpb24ueSA9IC0xNlxyXG4gICAgICAgICAgICB0aGlzLmdyb3VwLmFkZCh0aGlzLm1vZGVsKVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUFsbE1hdGVyaWFsKClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVBhcnRpY2xlKCkge1xyXG4gICAgICAgIGNvbnN0IGNvdW50ID0gMTAwMDBcclxuICAgICAgICBjb25zdCByYWRpdXMgPSAxMDBcclxuICAgICAgICBjb25zdCBwb3NpdGlvbnMgPSBuZXcgRmxvYXQzMkFycmF5KGNvdW50ICogMylcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgaTMgPSBpICogM1xyXG4gICAgICAgICAgICBwb3NpdGlvbnNbaTNdID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogcmFkaXVzXHJcbiAgICAgICAgICAgIHBvc2l0aW9uc1tpMyArIDFdID0gTWF0aC5yYW5kb20oKSAqIHJhZGl1c1xyXG4gICAgICAgICAgICBwb3NpdGlvbnNbaTMgKyAyXSA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIHJhZGl1c1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKVxyXG4gICAgICAgIGdlb21ldHJ5LnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9ucywgMykpXHJcblxyXG4gICAgICAgIHRoaXMucGFydGljbGVNYXRlcmlhbCA9IG5ldyBUSFJFRS5SYXdTaGFkZXJNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiBmcmFnbWVudFNoYWRlclBhcnRpY2xlLFxyXG4gICAgICAgICAgICB2ZXJ0ZXhTaGFkZXI6IHZlcnRleFNoYWRlclBhcnRpY2xlLFxyXG4gICAgICAgICAgICBkZXB0aFdyaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgYmxlbmRpbmc6IFRIUkVFLkFkZGl0aXZlQmxlbmRpbmcsXHJcbiAgICAgICAgICAgIHVuaWZvcm1zOiB7XHJcbiAgICAgICAgICAgICAgICB1VGltZTogeyB2YWx1ZTogMCB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMucGFydGljbGUgPSBuZXcgVEhSRUUuUG9pbnRzKGdlb21ldHJ5LCB0aGlzLnBhcnRpY2xlTWF0ZXJpYWwpXHJcbiAgICAgICAgdGhpcy5wYXJ0aWNsZS5wb3NpdGlvbi55ID0gLTM1XHJcbiAgICAgICAgdGhpcy5ncm91cC5hZGQodGhpcy5wYXJ0aWNsZSlcclxuICAgIH1cclxuXHJcbiAgICBvblNjcm9sbCh7IHBpeGVsWSB9KSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0ICs9IHBpeGVsWVxyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hTdGFydChlKSB7XHJcbiAgICAgICAgdGhpcy55LnN0YXJ0ID0gZS50b3VjaGVzWzBdLmNsaWVudFlcclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoTW92ZShlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMueS5zdGFydCA+IGUudG91Y2hlc1swXS5jbGllbnRZKSB7XHJcbiAgICAgICAgICAgIHRoaXMueS5kaXN0YW5jZSArPSAxMFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMueS5kaXN0YW5jZSAtPSAxMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZWxhcHNlZFRpbWUpIHtcclxuICAgICAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnkuZGlzdGFuY2VcclxuICAgICAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSBHU0FQLnV0aWxzLmNsYW1wKDAsIHRoaXMuc2Nyb2xsLmxpbWl0LCB0aGlzLnNjcm9sbC50YXJnZXQpXHJcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsLnRhcmdldCA8IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gMFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50LCB0aGlzLnNjcm9sbC50YXJnZXQsIDAuMDEpXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmhlYWQpIHRoaXMuaGVhZC5yb3RhdGlvbi55ID0gZWxhcHNlZFRpbWVcclxuICAgICAgICBpZiAodGhpcy5wYXJ0aWNsZU1hdGVyaWFsKSB0aGlzLnBhcnRpY2xlTWF0ZXJpYWwudW5pZm9ybXMudVRpbWUudmFsdWUgPSBlbGFwc2VkVGltZVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zY3JvbGwuY3VycmVudCA8IDQ2MDApIHtcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEucm90YXRpb24ueCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnQgKiAwLjAwMDNcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEucm90YXRpb24ueSA9IHRoaXMuc2Nyb2xsLmN1cnJlbnQgKiAwLjAxXHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSBNYXRoLmNvcyh0aGlzLnNjcm9sbC5jdXJyZW50ICogMC4wMSkgKiA1XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgPSAtdGhpcy5zY3JvbGwuY3VycmVudCAqIDAuMDAyXHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnggPSBNYXRoLnNpbih0aGlzLnNjcm9sbC5jdXJyZW50ICogMC4wMSkgKiA1XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lX19lbmQnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIEdTQVAudG8odGhpcy5jYW1lcmEucG9zaXRpb24sIHtcclxuICAgICAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgICAgICB5OiAtNixcclxuICAgICAgICAgICAgICAgIHo6IDE1LFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDYsXHJcbiAgICAgICAgICAgICAgICBlYXNlOiAnZXhwby5vdXQnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBHU0FQLnRvKHRoaXMuY2FtZXJhLnJvdGF0aW9uLCB7XHJcbiAgICAgICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgICAgIHo6IDAsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMSxcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lX19lbmQnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51bmlmb3Jtcy50aW1lLnZhbHVlID0gZWxhcHNlZFRpbWVcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuc2NlbmUucmVtb3ZlKHRoaXMuZ3JvdXApXHJcbiAgICB9XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZTYzMWQzZWI2MjdhYmZiMThkMjZcIikiXSwibmFtZXMiOlsiSG9tZSIsImNvbnN0cnVjdG9yIiwic2NlbmUiLCJnbHRmTG9hZGVyIiwiY2FtZXJhIiwicmVuZGVyZXIiLCJ0aGlzIiwidW5pZm9ybXMiLCJ0aW1lIiwidmFsdWUiLCJzcGVlZCIsImNoYXJTaXplIiwieCIsInkiLCJjaGFyUmVzb2x1dGlvbiIsImNvbG9yIiwiVEhSRUUiLCJyZXNvbHV0aW9uIiwic2Nyb2xsIiwidGFyZ2V0IiwiY3VycmVudCIsImxpbWl0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xpZW50SGVpZ2h0Iiwic3RhcnQiLCJkaXN0YW5jZSIsImVuZCIsImdyb3VwIiwiYWRkIiwiY3JlYXRlT2JqZWN0IiwiY3JlYXRlUGFydGljbGUiLCJ1cGRhdGVBbGxNYXRlcmlhbCIsInRyYXZlcnNlIiwiY2hpbGQiLCJtYXRlcmlhbCIsIm5lZWRzVXBkYXRlIiwiY3ViZSIsInBvc2l0aW9uIiwic2V0IiwidmVydGV4U2hhZGVyIiwiZnJhZ21lbnRTaGFkZXIiLCJsb2FkIiwiZ2x0ZiIsIm1vZGVsIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwicG9zaXRpb25zIiwiRmxvYXQzMkFycmF5IiwiY291bnQiLCJpIiwiaTMiLCJNYXRoIiwicmFuZG9tIiwiZ2VvbWV0cnkiLCJzZXRBdHRyaWJ1dGUiLCJwYXJ0aWNsZU1hdGVyaWFsIiwiZnJhZ21lbnRTaGFkZXJQYXJ0aWNsZSIsInZlcnRleFNoYWRlclBhcnRpY2xlIiwiZGVwdGhXcml0ZSIsImJsZW5kaW5nIiwidVRpbWUiLCJwYXJ0aWNsZSIsIm9uU2Nyb2xsIiwicGl4ZWxZIiwib25Ub3VjaFN0YXJ0IiwiZSIsInRvdWNoZXMiLCJjbGllbnRZIiwib25Ub3VjaE1vdmUiLCJ1cGRhdGUiLCJlbGFwc2VkVGltZSIsIkdTQVAiLCJoZWFkIiwicm90YXRpb24iLCJ6IiwiY29zIiwic2luIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiZHVyYXRpb24iLCJlYXNlIiwiZGVzdHJveSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==