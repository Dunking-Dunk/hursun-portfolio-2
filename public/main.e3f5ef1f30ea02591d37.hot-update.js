/*! For license information please see main.e3f5ef1f30ea02591d37.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateportfolio_hursun_2("main",{"./app/components/canvas/home/index.js":(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});var s=a("./node_modules/three/build/three.module.js"),i=a("./node_modules/gsap/index.js"),r=a("./app/classes/Detection.js"),l=a("./app/shaders/human/vertex.glsl"),o=a("./app/shaders/human/fragment.glsl"),h=a("./app/shaders/particle/vertex.glsl"),c=a("./app/shaders/particle/fragment.glsl");class n{constructor({scene:e,gltfLoader:t,camera:a,renderer:i}){this.scene=e,this.gltfLoader=t,this.camera=a,this.renderer=i,this.uniforms={time:{value:0},speed:{value:25},charSize:{value:{x:1,y:1}},charResolution:{value:10},color:{value:new s.Color("red")},resolution:{value:{x:2,y:2}}},this.scroll={target:0,current:0,limit:document.querySelector(".home__wrapper").clientHeight},this.y={start:0,distance:0,end:0},this.group=new s.Group,this.scene.add(this.group),this.createObject(),this.createParticle()}updateAllMaterial(){this.scene.traverse((e=>{e instanceof s.Mesh&&e.material instanceof s.MeshStandardMaterial&&(e.material.needsUpdate=!0)}))}createObject(){this.cube=new s.Mesh(new s.BoxGeometry(1,1,1),new s.MeshBasicMaterial),this.cube.position.set(0,-18,0),this.material=new s.RawShaderMaterial({vertexShader:l.default,fragmentShader:o.default,uniforms:this.uniforms}),this.gltfLoader.load("models/human/scene.gltf",(e=>{this.model=e.scene,this.model.children[0].children[0].children.forEach((e=>{e.material=this.material})),this.model.position.y=-16,this.group.add(this.model),this.updateAllMaterial()}))}createParticle(){const e=new Float32Array(3e4);for(let t=0;t<1e4;t++){const a=3*t;e[a]=100*(Math.random()-.5),e[a+1]=100*Math.random(),e[a+2]=100*(Math.random()-.5)}const t=new s.BufferGeometry;t.setAttribute("position",new s.BufferAttribute(e,3)),this.particleMaterial=new s.RawShaderMaterial({fragmentShader:c.default,vertexShader:h.default,depthWrite:!1,blending:s.AdditiveBlending,uniforms:{uTime:{value:0},uSize:{value:10*this.renderer.getPixelRatio()}}}),this.particle=new s.Points(t,this.particleMaterial),this.particle.position.y=-35,this.group.add(this.particle)}onScroll({pixelY:e}){this.scroll.target+=e}onTouchStart(e){this.y.start=e.touches[0].clientY}onTouchMove(e){this.y.start>e.touches[0].clientY?this.y.distance+=50:this.y.distance-=100}update(e){r.default.isDesktop()?this.scroll.target=i.default.utils.clamp(0,this.scroll.limit,this.scroll.target):this.scroll.target=i.default.utils.clamp(0,this.scroll.limit,this.y.distance),this.scroll.target<1&&(this.scroll.target=0),this.y.distance<.01&&(this.y.distance=0),this.scroll.current=i.default.utils.interpolate(this.scroll.current,this.scroll.target,.01),this.head&&(this.head.rotation.y=e),this.particleMaterial&&(this.particleMaterial.uniforms.uTime.value=e),this.scroll.current<4600?(this.camera.rotation.x=1e-4*this.scroll.current,this.camera.rotation.y=.001*this.scroll.current,this.camera.position.z=5*Math.cos(.001*this.scroll.current),this.camera.position.y=.003*-this.scroll.current,this.camera.position.x=5*Math.sin(.001*this.scroll.current),document.querySelector(".home__end").classList.remove("active")):(i.default.to(this.camera.position,{x:0,y:-6,z:15,duration:6,ease:"expo.out"}),i.default.to(this.camera.rotation,{x:0,y:0,z:0,duration:1}),document.querySelector(".home__end").classList.add("active")),this.uniforms.time.value=e}destroy(){this.scene.remove(this.group)}}}},(function(e){e.h=()=>"1d4f90abb1dc3063d7d1"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0UsUUFDckNkLEtBQUtGLE9BQU9rQyxTQUFTd0MsRUFBNEMsRUFBeEMxQixLQUFLMkIsSUFBMEIsS0FBdEJ6RSxLQUFLWSxPQUFPRSxTQUM5Q2QsS0FBS0YsT0FBT2tDLFNBQVN6QixFQUEyQixNQUF0QlAsS0FBS1ksT0FBT0UsUUFDdENkLEtBQUtGLE9BQU9rQyxTQUFTMUIsRUFBNEMsRUFBeEN3QyxLQUFLNEIsSUFBMEIsS0FBdEIxRSxLQUFLWSxPQUFPRSxTQUM5Q0UsU0FBU0MsY0FBYyxjQUFjMEQsVUFBVUMsT0FBTyxZQUV0RFAsRUFBQUEsUUFBQUEsR0FBUXJFLEtBQUtGLE9BQU9rQyxTQUFVLENBQzFCMUIsRUFBRyxFQUNIQyxHQUFJLEVBQ0ppRSxFQUFHLEdBQ0hLLFNBQVUsRUFDVkMsS0FBTSxhQUVWVCxFQUFBQSxRQUFBQSxHQUFRckUsS0FBS0YsT0FBT3lFLFNBQVUsQ0FDMUJqRSxFQUFHLEVBQ0hDLEVBQUcsRUFDSGlFLEVBQUcsRUFDSEssU0FBVSxJQUdkN0QsU0FBU0MsY0FBYyxjQUFjMEQsVUFBVXBELElBQUksV0FHdkR2QixLQUFLQyxTQUFTQyxLQUFLQyxNQUFRZ0UsQ0FDOUIsQ0FFRFksVUFDSS9FLEtBQUtKLE1BQU1nRixPQUFPNUUsS0FBS3NCLE1BQzFCLGtCQzFLTDBELEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8taHVyc3VuLTIvLi9hcHAvY29tcG9uZW50cy9jYW52YXMvaG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8taHVyc3VuLTIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xyXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xyXG5pbXBvcnQgRGV0ZWN0aW9uTWFuYWdlciBmcm9tICcuLi8uLi8uLi9jbGFzc2VzL0RldGVjdGlvbi5qcydcclxuXHJcbmltcG9ydCB2ZXJ0ZXhTaGFkZXIgZnJvbSAnLi4vLi4vLi4vc2hhZGVycy9odW1hbi92ZXJ0ZXguZ2xzbCdcclxuaW1wb3J0IGZyYWdtZW50U2hhZGVyIGZyb20gJy4uLy4uLy4uL3NoYWRlcnMvaHVtYW4vZnJhZ21lbnQuZ2xzbCdcclxuXHJcbmltcG9ydCB2ZXJ0ZXhTaGFkZXJQYXJ0aWNsZSBmcm9tICcuLi8uLi8uLi9zaGFkZXJzL3BhcnRpY2xlL3ZlcnRleC5nbHNsJ1xyXG5pbXBvcnQgZnJhZ21lbnRTaGFkZXJQYXJ0aWNsZSBmcm9tICcuLi8uLi8uLi9zaGFkZXJzL3BhcnRpY2xlL2ZyYWdtZW50Lmdsc2wnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgc2NlbmUsIGdsdGZMb2FkZXIsIGNhbWVyYSwgcmVuZGVyZXIgfSkge1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxyXG4gICAgICAgIHRoaXMuZ2x0ZkxvYWRlciA9IGdsdGZMb2FkZXJcclxuICAgICAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYVxyXG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlclxyXG5cclxuICAgICAgICB0aGlzLnVuaWZvcm1zID0ge1xyXG4gICAgICAgICAgICB0aW1lOiB7IHZhbHVlOiAwLjAgfSxcclxuICAgICAgICAgICAgc3BlZWQ6IHsgdmFsdWU6IDI1LjAgfSxcclxuICAgICAgICAgICAgY2hhclNpemU6IHsgdmFsdWU6IHsgeDogMS4wLCB5OiAxLjAgfSB9LFxyXG4gICAgICAgICAgICBjaGFyUmVzb2x1dGlvbjogeyB2YWx1ZTogMTAgfSxcclxuICAgICAgICAgICAgY29sb3I6IHsgdmFsdWU6IG5ldyBUSFJFRS5Db2xvcigncmVkJykgfSxcclxuICAgICAgICAgICAgcmVzb2x1dGlvbjogeyB2YWx1ZTogeyB4OiAyLjAsIHk6IDIuMCB9IH0sXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNjcm9sbCA9IHtcclxuICAgICAgICAgICAgdGFyZ2V0OiAwLFxyXG4gICAgICAgICAgICBjdXJyZW50OiAwLFxyXG4gICAgICAgICAgICBsaW1pdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVfX3dyYXBwZXInKS5jbGllbnRIZWlnaHQsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnkgPSB7XHJcbiAgICAgICAgICAgIHN0YXJ0OiAwLFxyXG4gICAgICAgICAgICBkaXN0YW5jZTogMCxcclxuICAgICAgICAgICAgZW5kOiAwLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5ncm91cCA9IG5ldyBUSFJFRS5Hcm91cCgpXHJcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5ncm91cClcclxuICAgICAgICB0aGlzLmNyZWF0ZU9iamVjdCgpXHJcbiAgICAgICAgdGhpcy5jcmVhdGVQYXJ0aWNsZSgpXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQWxsTWF0ZXJpYWwoKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZS50cmF2ZXJzZSgoY2hpbGQpID0+IHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgY2hpbGQgaW5zdGFuY2VvZiBUSFJFRS5NZXNoICYmXHJcbiAgICAgICAgICAgICAgICBjaGlsZC5tYXRlcmlhbCBpbnN0YW5jZW9mIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQubWF0ZXJpYWwubmVlZHNVcGRhdGUgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU9iamVjdCgpIHtcclxuICAgICAgICB0aGlzLmN1YmUgPSBuZXcgVEhSRUUuTWVzaChuZXcgVEhSRUUuQm94R2VvbWV0cnkoMSwgMSwgMSksIG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCgpKVxyXG4gICAgICAgIHRoaXMuY3ViZS5wb3NpdGlvbi5zZXQoMCwgLTE4LCAwKVxyXG4gICAgICAgIHRoaXMubWF0ZXJpYWwgPSBuZXcgVEhSRUUuUmF3U2hhZGVyTWF0ZXJpYWwoe1xyXG4gICAgICAgICAgICB2ZXJ0ZXhTaGFkZXIsXHJcbiAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyLFxyXG4gICAgICAgICAgICB1bmlmb3JtczogdGhpcy51bmlmb3JtcyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuZ2x0ZkxvYWRlci5sb2FkKCdtb2RlbHMvaHVtYW4vc2NlbmUuZ2x0ZicsIChnbHRmKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwgPSBnbHRmLnNjZW5lXHJcblxyXG4gICAgICAgICAgICB0aGlzLm1vZGVsLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5tYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC5wb3NpdGlvbi55ID0gLTE2XHJcbiAgICAgICAgICAgIHRoaXMuZ3JvdXAuYWRkKHRoaXMubW9kZWwpXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQWxsTWF0ZXJpYWwoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlUGFydGljbGUoKSB7XHJcbiAgICAgICAgY29uc3QgY291bnQgPSAxMDAwMFxyXG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IDEwMFxyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IG5ldyBGbG9hdDMyQXJyYXkoY291bnQgKiAzKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBpMyA9IGkgKiAzXHJcbiAgICAgICAgICAgIHBvc2l0aW9uc1tpM10gPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiByYWRpdXNcclxuICAgICAgICAgICAgcG9zaXRpb25zW2kzICsgMV0gPSBNYXRoLnJhbmRvbSgpICogcmFkaXVzXHJcbiAgICAgICAgICAgIHBvc2l0aW9uc1tpMyArIDJdID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogcmFkaXVzXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpXHJcbiAgICAgICAgZ2VvbWV0cnkuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUocG9zaXRpb25zLCAzKSlcclxuXHJcbiAgICAgICAgdGhpcy5wYXJ0aWNsZU1hdGVyaWFsID0gbmV3IFRIUkVFLlJhd1NoYWRlck1hdGVyaWFsKHtcclxuICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGZyYWdtZW50U2hhZGVyUGFydGljbGUsXHJcbiAgICAgICAgICAgIHZlcnRleFNoYWRlcjogdmVydGV4U2hhZGVyUGFydGljbGUsXHJcbiAgICAgICAgICAgIGRlcHRoV3JpdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBibGVuZGluZzogVEhSRUUuQWRkaXRpdmVCbGVuZGluZyxcclxuICAgICAgICAgICAgdW5pZm9ybXM6IHtcclxuICAgICAgICAgICAgICAgIHVUaW1lOiB7IHZhbHVlOiAwIH0sXHJcbiAgICAgICAgICAgICAgICB1U2l6ZTogeyB2YWx1ZTogMTAgKiB0aGlzLnJlbmRlcmVyLmdldFBpeGVsUmF0aW8oKSB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMucGFydGljbGUgPSBuZXcgVEhSRUUuUG9pbnRzKGdlb21ldHJ5LCB0aGlzLnBhcnRpY2xlTWF0ZXJpYWwpXHJcbiAgICAgICAgdGhpcy5wYXJ0aWNsZS5wb3NpdGlvbi55ID0gLTM1XHJcbiAgICAgICAgdGhpcy5ncm91cC5hZGQodGhpcy5wYXJ0aWNsZSlcclxuICAgIH1cclxuXHJcbiAgICBvblNjcm9sbCh7IHBpeGVsWSB9KSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0ICs9IHBpeGVsWVxyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hTdGFydChlKSB7XHJcbiAgICAgICAgdGhpcy55LnN0YXJ0ID0gZS50b3VjaGVzWzBdLmNsaWVudFlcclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoTW92ZShlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMueS5zdGFydCA+IGUudG91Y2hlc1swXS5jbGllbnRZKSB7XHJcbiAgICAgICAgICAgIHRoaXMueS5kaXN0YW5jZSArPSA1MFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMueS5kaXN0YW5jZSAtPSAxMDBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGVsYXBzZWRUaW1lKSB7XHJcbiAgICAgICAgaWYgKERldGVjdGlvbk1hbmFnZXIuaXNEZXNrdG9wKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gR1NBUC51dGlscy5jbGFtcCgwLCB0aGlzLnNjcm9sbC5saW1pdCwgdGhpcy5zY3JvbGwudGFyZ2V0KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IEdTQVAudXRpbHMuY2xhbXAoMCwgdGhpcy5zY3JvbGwubGltaXQsIHRoaXMueS5kaXN0YW5jZSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNjcm9sbC50YXJnZXQgPCAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IDBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMueS5kaXN0YW5jZSA8IDAuMDEpIHtcclxuICAgICAgICAgICAgdGhpcy55LmRpc3RhbmNlID0gMFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy5zY3JvbGwuY3VycmVudCwgdGhpcy5zY3JvbGwudGFyZ2V0LCAwLjAxKVxyXG5cclxuICAgICAgICBpZiAodGhpcy5oZWFkKSB0aGlzLmhlYWQucm90YXRpb24ueSA9IGVsYXBzZWRUaW1lXHJcbiAgICAgICAgaWYgKHRoaXMucGFydGljbGVNYXRlcmlhbCkgdGhpcy5wYXJ0aWNsZU1hdGVyaWFsLnVuaWZvcm1zLnVUaW1lLnZhbHVlID0gZWxhcHNlZFRpbWVcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsLmN1cnJlbnQgPCA0NjAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnJvdGF0aW9uLnggPSB0aGlzLnNjcm9sbC5jdXJyZW50ICogMC4wMDAxXHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnJvdGF0aW9uLnkgPSB0aGlzLnNjcm9sbC5jdXJyZW50ICogMC4wMDFcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IE1hdGguY29zKHRoaXMuc2Nyb2xsLmN1cnJlbnQgKiAwLjAwMSkgKiA1XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgPSAtdGhpcy5zY3JvbGwuY3VycmVudCAqIDAuMDAzXHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnggPSBNYXRoLnNpbih0aGlzLnNjcm9sbC5jdXJyZW50ICogMC4wMDEpICogNVxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9fZW5kJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBHU0FQLnRvKHRoaXMuY2FtZXJhLnBvc2l0aW9uLCB7XHJcbiAgICAgICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICAgICAgeTogLTYsXHJcbiAgICAgICAgICAgICAgICB6OiAxNSxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA2LFxyXG4gICAgICAgICAgICAgICAgZWFzZTogJ2V4cG8ub3V0JyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgR1NBUC50byh0aGlzLmNhbWVyYS5yb3RhdGlvbiwge1xyXG4gICAgICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgICAgICB6OiAwLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9fZW5kJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudW5pZm9ybXMudGltZS52YWx1ZSA9IGVsYXBzZWRUaW1lXHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnNjZW5lLnJlbW92ZSh0aGlzLmdyb3VwKVxyXG4gICAgfVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjFkNGY5MGFiYjFkYzMwNjNkN2QxXCIpIl0sIm5hbWVzIjpbIkhvbWUiLCJjb25zdHJ1Y3RvciIsInNjZW5lIiwiZ2x0ZkxvYWRlciIsImNhbWVyYSIsInJlbmRlcmVyIiwidGhpcyIsInVuaWZvcm1zIiwidGltZSIsInZhbHVlIiwic3BlZWQiLCJjaGFyU2l6ZSIsIngiLCJ5IiwiY2hhclJlc29sdXRpb24iLCJjb2xvciIsIlRIUkVFIiwicmVzb2x1dGlvbiIsInNjcm9sbCIsInRhcmdldCIsImN1cnJlbnQiLCJsaW1pdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsaWVudEhlaWdodCIsInN0YXJ0IiwiZGlzdGFuY2UiLCJlbmQiLCJncm91cCIsImFkZCIsImNyZWF0ZU9iamVjdCIsImNyZWF0ZVBhcnRpY2xlIiwidXBkYXRlQWxsTWF0ZXJpYWwiLCJ0cmF2ZXJzZSIsImNoaWxkIiwibWF0ZXJpYWwiLCJuZWVkc1VwZGF0ZSIsImN1YmUiLCJwb3NpdGlvbiIsInNldCIsInZlcnRleFNoYWRlciIsImZyYWdtZW50U2hhZGVyIiwibG9hZCIsImdsdGYiLCJtb2RlbCIsImNoaWxkcmVuIiwiZm9yRWFjaCIsInBvc2l0aW9ucyIsIkZsb2F0MzJBcnJheSIsImNvdW50IiwiaSIsImkzIiwiTWF0aCIsInJhbmRvbSIsImdlb21ldHJ5Iiwic2V0QXR0cmlidXRlIiwicGFydGljbGVNYXRlcmlhbCIsImZyYWdtZW50U2hhZGVyUGFydGljbGUiLCJ2ZXJ0ZXhTaGFkZXJQYXJ0aWNsZSIsImRlcHRoV3JpdGUiLCJibGVuZGluZyIsInVUaW1lIiwidVNpemUiLCJnZXRQaXhlbFJhdGlvIiwicGFydGljbGUiLCJvblNjcm9sbCIsInBpeGVsWSIsIm9uVG91Y2hTdGFydCIsImUiLCJ0b3VjaGVzIiwiY2xpZW50WSIsIm9uVG91Y2hNb3ZlIiwidXBkYXRlIiwiZWxhcHNlZFRpbWUiLCJEZXRlY3Rpb25NYW5hZ2VyIiwiR1NBUCIsImhlYWQiLCJyb3RhdGlvbiIsInoiLCJjb3MiLCJzaW4iLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJkdXJhdGlvbiIsImVhc2UiLCJkZXN0cm95IiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9