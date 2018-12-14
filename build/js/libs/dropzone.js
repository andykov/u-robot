(function(){var o,t,i,e,d,c,n,s,l=[].slice,r={}.hasOwnProperty;n=function(){},t=function(){function e(){}return e.prototype.addEventListener=e.prototype.on,e.prototype.on=function(e,t){return this._callbacks=this._callbacks||{},this._callbacks[e]||(this._callbacks[e]=[]),this._callbacks[e].push(t),this},e.prototype.emit=function(){var e,t,i,n,s;if(i=arguments[0],e=2<=arguments.length?l.call(arguments,1):[],this._callbacks=this._callbacks||{},t=this._callbacks[i])for(n=0,s=t.length;n<s;n++)t[n].apply(this,e);return this},e.prototype.removeListener=e.prototype.off,e.prototype.removeAllListeners=e.prototype.off,e.prototype.removeEventListener=e.prototype.off,e.prototype.off=function(e,t){var i,n,s,r;if(!this._callbacks||0===arguments.length)return this._callbacks={},this;if(!(i=this._callbacks[e]))return this;if(1===arguments.length)return delete this._callbacks[e],this;for(n=s=0,r=i.length;s<r;n=++s)if(i[n]===t){i.splice(n,1);break}return this},e}(),(o=function(e){var R,P;function H(e,t){var i,n,s;if(this.element=e,this.version=H.version,this.defaultOptions.previewTemplate=this.defaultOptions.previewTemplate.replace(/\n*/g,""),this.clickableElements=[],this.listeners=[],this.files=[],"string"==typeof this.element&&(this.element=document.querySelector(this.element)),!this.element||null==this.element.nodeType)throw new Error("Invalid dropzone element.");if(this.element.dropzone)throw new Error("Dropzone already attached.");if(H.instances.push(this),this.element.dropzone=this,i=null!=(s=H.optionsForElement(this.element))?s:{},this.options=R({},this.defaultOptions,i,null!=t?t:{}),this.options.forceFallback||!H.isBrowserSupported())return this.options.fallback.call(this);if(null==this.options.url&&(this.options.url=this.element.getAttribute("action")),!this.options.url)throw new Error("No URL provided.");if(this.options.acceptedFiles&&this.options.acceptedMimeTypes)throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");this.options.acceptedMimeTypes&&(this.options.acceptedFiles=this.options.acceptedMimeTypes,delete this.options.acceptedMimeTypes),this.options.method=this.options.method.toUpperCase(),(n=this.getExistingFallback())&&n.parentNode&&n.parentNode.removeChild(n),!1!==this.options.previewsContainer&&(this.options.previewsContainer?this.previewsContainer=H.getElement(this.options.previewsContainer,"previewsContainer"):this.previewsContainer=this.element),this.options.clickable&&(!0===this.options.clickable?this.clickableElements=[this.element]:this.clickableElements=H.getElements(this.options.clickable,"clickable")),this.init()}return function(e,t){for(var i in t)r.call(t,i)&&(e[i]=t[i]);function n(){this.constructor=e}n.prototype=t.prototype,e.prototype=new n,e.__super__=t.prototype}(H,t),H.prototype.Emitter=t,H.prototype.events=["drop","dragstart","dragend","dragenter","dragover","dragleave","addedfile","addedfiles","removedfile","thumbnail","error","errormultiple","processing","processingmultiple","uploadprogress","totaluploadprogress","sending","sendingmultiple","success","successmultiple","canceled","canceledmultiple","complete","completemultiple","reset","maxfilesexceeded","maxfilesreached","queuecomplete"],H.prototype.defaultOptions={url:null,method:"post",withCredentials:!1,parallelUploads:2,uploadMultiple:!1,maxFilesize:256,paramName:"file",createImageThumbnails:!0,maxThumbnailFilesize:10,thumbnailWidth:120,thumbnailHeight:120,filesizeBase:1e3,maxFiles:null,params:{},clickable:!0,ignoreHiddenFiles:!0,acceptedFiles:null,acceptedMimeTypes:null,autoProcessQueue:!0,autoQueue:!0,addRemoveLinks:!1,previewsContainer:null,hiddenInputContainer:"body",capture:null,renameFilename:null,dictDefaultMessage:"Drop files here to upload",dictFallbackMessage:"Your browser does not support drag'n'drop file uploads.",dictFallbackText:"Please use the fallback form below to upload your files like in the olden days.",dictFileTooBig:"File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",dictInvalidFileType:"You can't upload files of this type.",dictResponseError:"Server responded with {{statusCode}} code.",dictCancelUpload:"Cancel upload",dictCancelUploadConfirmation:"Are you sure you want to cancel this upload?",dictRemoveFile:"Remove file",dictRemoveFileConfirmation:null,dictMaxFilesExceeded:"You can not upload any more files.",accept:function(e,t){return t()},init:function(){return n},forceFallback:!1,fallback:function(){var e,t,i,n,s,r;for(this.element.className=this.element.className+" dz-browser-not-supported",n=0,s=(r=this.element.getElementsByTagName("div")).length;n<s;n++)e=r[n],/(^| )dz-message($| )/.test(e.className)&&((t=e).className="dz-message");return t||(t=H.createElement('<div class="dz-message"><span></span></div>'),this.element.appendChild(t)),(i=t.getElementsByTagName("span")[0])&&(null!=i.textContent?i.textContent=this.options.dictFallbackMessage:null!=i.innerText&&(i.innerText=this.options.dictFallbackMessage)),this.element.appendChild(this.getFallbackForm())},resize:function(e){var t,i,n;return t={srcX:0,srcY:0,srcWidth:e.width,srcHeight:e.height},i=e.width/e.height,t.optWidth=this.options.thumbnailWidth,t.optHeight=this.options.thumbnailHeight,null==t.optWidth&&null==t.optHeight?(t.optWidth=t.srcWidth,t.optHeight=t.srcHeight):null==t.optWidth?t.optWidth=i*t.optHeight:null==t.optHeight&&(t.optHeight=1/i*t.optWidth),n=t.optWidth/t.optHeight,e.height<t.optHeight||e.width<t.optWidth?(t.trgHeight=t.srcHeight,t.trgWidth=t.srcWidth):n<i?(t.srcHeight=e.height,t.srcWidth=t.srcHeight*n):(t.srcWidth=e.width,t.srcHeight=t.srcWidth/n),t.srcX=(e.width-t.srcWidth)/2,t.srcY=(e.height-t.srcHeight)/2,t},drop:function(e){return this.element.classList.remove("dz-drag-hover")},dragstart:n,dragend:function(e){return this.element.classList.remove("dz-drag-hover")},dragenter:function(e){return this.element.classList.add("dz-drag-hover")},dragover:function(e){return this.element.classList.add("dz-drag-hover")},dragleave:function(e){return this.element.classList.remove("dz-drag-hover")},paste:n,reset:function(){return this.element.classList.remove("dz-started")},addedfile:function(t){var e,i,n,s,r,o,l,a,p,u,d,c,h;if(this.element===this.previewsContainer&&this.element.classList.add("dz-started"),this.previewsContainer){for(t.previewElement=H.createElement(this.options.previewTemplate.trim()),t.previewTemplate=t.previewElement,this.previewsContainer.appendChild(t.previewElement),n=0,o=(p=t.previewElement.querySelectorAll("[data-dz-name]")).length;n<o;n++)p[n].textContent=this._renameFilename(t.name);for(s=0,l=(u=t.previewElement.querySelectorAll("[data-dz-size]")).length;s<l;s++)u[s].innerHTML=this.filesize(t.size);for(this.options.addRemoveLinks&&(t._removeLink=H.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'+this.options.dictRemoveFile+"</a>"),t.previewElement.appendChild(t._removeLink)),h=this,e=function(e){return e.preventDefault(),e.stopPropagation(),t.status===H.UPLOADING?H.confirm(h.options.dictCancelUploadConfirmation,function(){return h.removeFile(t)}):h.options.dictRemoveFileConfirmation?H.confirm(h.options.dictRemoveFileConfirmation,function(){return h.removeFile(t)}):h.removeFile(t)},c=[],r=0,a=(d=t.previewElement.querySelectorAll("[data-dz-remove]")).length;r<a;r++)i=d[r],c.push(i.addEventListener("click",e));return c}},removedfile:function(e){var t;return e.previewElement&&null!=(t=e.previewElement)&&t.parentNode.removeChild(e.previewElement),this._updateMaxFilesReachedClass()},thumbnail:function(e,t){var i,n,s,r;if(e.previewElement){for(e.previewElement.classList.remove("dz-file-preview"),n=0,s=(r=e.previewElement.querySelectorAll("[data-dz-thumbnail]")).length;n<s;n++)(i=r[n]).alt=e.name,i.src=t;return setTimeout(function(){return e.previewElement.classList.add("dz-image-preview")},1)}},error:function(e,t){var i,n,s,r,o;if(e.previewElement){for(e.previewElement.classList.add("dz-error"),"String"!=typeof t&&t.error&&(t=t.error),o=[],n=0,s=(r=e.previewElement.querySelectorAll("[data-dz-errormessage]")).length;n<s;n++)i=r[n],o.push(i.textContent=t);return o}},errormultiple:n,processing:function(e){if(e.previewElement&&(e.previewElement.classList.add("dz-processing"),e._removeLink))return e._removeLink.textContent=this.options.dictCancelUpload},processingmultiple:n,uploadprogress:function(e,t,i){var n,s,r,o,l;if(e.previewElement){for(l=[],s=0,r=(o=e.previewElement.querySelectorAll("[data-dz-uploadprogress]")).length;s<r;s++)"PROGRESS"===(n=o[s]).nodeName?l.push(n.value=t):l.push(n.style.width=t+"%");return l}},totaluploadprogress:n,sending:n,sendingmultiple:n,success:function(e){if(e.previewElement)return e.previewElement.classList.add("dz-success")},successmultiple:n,canceled:function(e){return this.emit("error",e,"Upload canceled.")},canceledmultiple:n,complete:function(e){if(e._removeLink&&(e._removeLink.textContent=this.options.dictRemoveFile),e.previewElement)return e.previewElement.classList.add("dz-complete")},completemultiple:n,maxfilesexceeded:n,maxfilesreached:n,queuecomplete:n,addedfiles:n,previewTemplate:'<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>'},R=function(){var e,t,i,n,s,r,o;for(n=arguments[0],r=0,o=(i=2<=arguments.length?l.call(arguments,1):[]).length;r<o;r++)for(e in t=i[r])s=t[e],n[e]=s;return n},H.prototype.getAcceptedFiles=function(){var e,t,i,n,s;for(s=[],t=0,i=(n=this.files).length;t<i;t++)(e=n[t]).accepted&&s.push(e);return s},H.prototype.getRejectedFiles=function(){var e,t,i,n,s;for(s=[],t=0,i=(n=this.files).length;t<i;t++)(e=n[t]).accepted||s.push(e);return s},H.prototype.getFilesWithStatus=function(e){var t,i,n,s,r;for(r=[],i=0,n=(s=this.files).length;i<n;i++)(t=s[i]).status===e&&r.push(t);return r},H.prototype.getQueuedFiles=function(){return this.getFilesWithStatus(H.QUEUED)},H.prototype.getUploadingFiles=function(){return this.getFilesWithStatus(H.UPLOADING)},H.prototype.getAddedFiles=function(){return this.getFilesWithStatus(H.ADDED)},H.prototype.getActiveFiles=function(){var e,t,i,n,s;for(s=[],t=0,i=(n=this.files).length;t<i;t++)(e=n[t]).status!==H.UPLOADING&&e.status!==H.QUEUED||s.push(e);return s},H.prototype.init=function(){var e,i,s,t,n,r,o,l,a,p,u,d,c,h,m,f,g,v,y;for("form"===this.element.tagName&&this.element.setAttribute("enctype","multipart/form-data"),this.element.classList.contains("dropzone")&&!this.element.querySelector(".dz-message")&&this.element.appendChild(H.createElement('<div class="dz-default dz-message"><span>'+this.options.dictDefaultMessage+"</span></div>")),this.clickableElements.length&&(l=this,(s=function(){return l.hiddenFileInput&&l.hiddenFileInput.parentNode.removeChild(l.hiddenFileInput),l.hiddenFileInput=document.createElement("input"),l.hiddenFileInput.setAttribute("type","file"),(null==l.options.maxFiles||1<l.options.maxFiles)&&l.hiddenFileInput.setAttribute("multiple","multiple"),l.hiddenFileInput.className="dz-hidden-input",null!=l.options.acceptedFiles&&l.hiddenFileInput.setAttribute("accept",l.options.acceptedFiles),null!=l.options.capture&&l.hiddenFileInput.setAttribute("capture",l.options.capture),l.hiddenFileInput.style.visibility="hidden",l.hiddenFileInput.style.position="absolute",l.hiddenFileInput.style.top="0",l.hiddenFileInput.style.left="0",l.hiddenFileInput.style.height="0",l.hiddenFileInput.style.width="0",document.querySelector(l.options.hiddenInputContainer).appendChild(l.hiddenFileInput),l.hiddenFileInput.addEventListener("change",function(){var e,t,i,n;if((t=l.hiddenFileInput.files).length)for(i=0,n=t.length;i<n;i++)e=t[i],l.addFile(e);return l.emit("addedfiles",t),s()})})()),this.URL=null!=(r=window.URL)?r:window.webkitURL,t=0,n=(o=this.events).length;t<n;t++)e=o[t],this.on(e,this.options[e]);return this.on("uploadprogress",(a=this,function(){return a.updateTotalUploadProgress()})),this.on("removedfile",(p=this,function(){return p.updateTotalUploadProgress()})),this.on("canceled",(u=this,function(e){return u.emit("complete",e)})),this.on("complete",(d=this,function(e){if(0===d.getAddedFiles().length&&0===d.getUploadingFiles().length&&0===d.getQueuedFiles().length)return setTimeout(function(){return d.emit("queuecomplete")},0)})),i=function(e){return e.stopPropagation(),e.preventDefault?e.preventDefault():e.returnValue=!1},this.listeners=[{element:this.element,events:{dragstart:(v=this,function(e){return v.emit("dragstart",e)}),dragenter:(g=this,function(e){return i(e),g.emit("dragenter",e)}),dragover:(f=this,function(e){var t;try{t=e.dataTransfer.effectAllowed}catch(e){}return e.dataTransfer.dropEffect="move"===t||"linkMove"===t?"move":"copy",i(e),f.emit("dragover",e)}),dragleave:(m=this,function(e){return m.emit("dragleave",e)}),drop:(h=this,function(e){return i(e),h.drop(e)}),dragend:(c=this,function(e){return c.emit("dragend",e)})}}],this.clickableElements.forEach((y=this,function(t){return y.listeners.push({element:t,events:{click:function(e){return(t!==y.element||e.target===y.element||H.elementInside(e.target,y.element.querySelector(".dz-message")))&&y.hiddenFileInput.click(),!0}}})})),this.enable(),this.options.init.call(this)},H.prototype.destroy=function(){var e;return this.disable(),this.removeAllFiles(!0),(null!=(e=this.hiddenFileInput)?e.parentNode:void 0)&&(this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput),this.hiddenFileInput=null),delete this.element.dropzone,H.instances.splice(H.instances.indexOf(this),1)},H.prototype.updateTotalUploadProgress=function(){var e,t,i,n,s,r,o;if(t=i=0,this.getActiveFiles().length){for(s=0,r=(o=this.getActiveFiles()).length;s<r;s++)i+=(e=o[s]).upload.bytesSent,t+=e.upload.total;n=100*i/t}else n=100;return this.emit("totaluploadprogress",n,t,i)},H.prototype._getParamName=function(e){return"function"==typeof this.options.paramName?this.options.paramName(e):this.options.paramName+(this.options.uploadMultiple?"["+e+"]":"")},H.prototype._renameFilename=function(e){return"function"!=typeof this.options.renameFilename?e:this.options.renameFilename(e)},H.prototype.getFallbackForm=function(){var e,t,i,n;return(e=this.getExistingFallback())?e:(i='<div class="dz-fallback">',this.options.dictFallbackText&&(i+="<p>"+this.options.dictFallbackText+"</p>"),i+='<input type="file" name="'+this._getParamName(0)+'" '+(this.options.uploadMultiple?'multiple="multiple"':void 0)+' /><input type="submit" value="Upload!"></div>',t=H.createElement(i),"FORM"!==this.element.tagName?(n=H.createElement('<form action="'+this.options.url+'" enctype="multipart/form-data" method="'+this.options.method+'"></form>')).appendChild(t):(this.element.setAttribute("enctype","multipart/form-data"),this.element.setAttribute("method",this.options.method)),null!=n?n:t)},H.prototype.getExistingFallback=function(){var e,t,i,n,s,r;for(t=function(e){var t,i,n;for(i=0,n=e.length;i<n;i++)if(t=e[i],/(^| )fallback($| )/.test(t.className))return t},n=0,s=(r=["div","form"]).length;n<s;n++)if(i=r[n],e=t(this.element.getElementsByTagName(i)))return e},H.prototype.setupEventListeners=function(){var i,n,s,e,t,r,o;for(o=[],e=0,t=(r=this.listeners).length;e<t;e++)i=r[e],o.push(function(){var e,t;for(n in t=[],e=i.events)s=e[n],t.push(i.element.addEventListener(n,s,!1));return t}());return o},H.prototype.removeEventListeners=function(){var i,n,s,e,t,r,o;for(o=[],e=0,t=(r=this.listeners).length;e<t;e++)i=r[e],o.push(function(){var e,t;for(n in t=[],e=i.events)s=e[n],t.push(i.element.removeEventListener(n,s,!1));return t}());return o},H.prototype.disable=function(){var e,t,i,n,s;for(this.clickableElements.forEach(function(e){return e.classList.remove("dz-clickable")}),this.removeEventListeners(),s=[],t=0,i=(n=this.files).length;t<i;t++)e=n[t],s.push(this.cancelUpload(e));return s},H.prototype.enable=function(){return this.clickableElements.forEach(function(e){return e.classList.add("dz-clickable")}),this.setupEventListeners()},H.prototype.filesize=function(e){var t,i,n,s,r,o,l;if(n="b",(i=0)<e){for(t=o=0,l=(r=["TB","GB","MB","KB","b"]).length;o<l;t=++o)if(s=r[t],Math.pow(this.options.filesizeBase,4-t)/10<=e){i=e/Math.pow(this.options.filesizeBase,4-t),n=s;break}i=Math.round(10*i)/10}return"<strong>"+i+"</strong> "+n},H.prototype._updateMaxFilesReachedClass=function(){return null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(this.getAcceptedFiles().length===this.options.maxFiles&&this.emit("maxfilesreached",this.files),this.element.classList.add("dz-max-files-reached")):this.element.classList.remove("dz-max-files-reached")},H.prototype.drop=function(e){var t,i;e.dataTransfer&&(this.emit("drop",e),t=e.dataTransfer.files,this.emit("addedfiles",t),t.length&&((i=e.dataTransfer.items)&&i.length&&null!=i[0].webkitGetAsEntry?this._addFilesFromItems(i):this.handleFiles(t)))},H.prototype.paste=function(e){var t,i;if(null!=(null!=e&&null!=(i=e.clipboardData)?i.items:void 0))return this.emit("paste",e),(t=e.clipboardData.items).length?this._addFilesFromItems(t):void 0},H.prototype.handleFiles=function(e){var t,i,n,s;for(s=[],i=0,n=e.length;i<n;i++)t=e[i],s.push(this.addFile(t));return s},H.prototype._addFilesFromItems=function(e){var t,i,n,s,r;for(r=[],n=0,s=e.length;n<s;n++)null!=(i=e[n]).webkitGetAsEntry&&(t=i.webkitGetAsEntry())?t.isFile?r.push(this.addFile(i.getAsFile())):t.isDirectory?r.push(this._addFilesFromDirectory(t,t.name)):r.push(void 0):null!=i.getAsFile&&(null==i.kind||"file"===i.kind)?r.push(this.addFile(i.getAsFile())):r.push(void 0);return r},H.prototype._addFilesFromDirectory=function(e,s){var t,i,r,o;return t=e.createReader(),i=function(e){return"undefined"!=typeof console&&null!==console&&"function"==typeof console.log?console.log(e):void 0},o=this,(r=function(){return t.readEntries(function(e){var t,i,n;if(0<e.length){for(i=0,n=e.length;i<n;i++)(t=e[i]).isFile?t.file(function(e){if(!o.options.ignoreHiddenFiles||"."!==e.name.substring(0,1))return e.fullPath=s+"/"+e.name,o.addFile(e)}):t.isDirectory&&o._addFilesFromDirectory(t,s+"/"+t.name);r()}return null},i)})()},H.prototype.accept=function(e,t){return e.size>1024*this.options.maxFilesize*1024?t(this.options.dictFileTooBig.replace("{{filesize}}",Math.round(e.size/1024/10.24)/100).replace("{{maxFilesize}}",this.options.maxFilesize)):H.isValidFile(e,this.options.acceptedFiles)?null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(t(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}",this.options.maxFiles)),this.emit("maxfilesexceeded",e)):this.options.accept.call(this,e,t):t(this.options.dictInvalidFileType)},H.prototype.addFile=function(t){return t.upload={progress:0,total:t.size,bytesSent:0},this.files.push(t),t.status=H.ADDED,this.emit("addedfile",t),this._enqueueThumbnail(t),this.accept(t,(i=this,function(e){return e?(t.accepted=!1,i._errorProcessing([t],e)):(t.accepted=!0,i.options.autoQueue&&i.enqueueFile(t)),i._updateMaxFilesReachedClass()}));var i},H.prototype.enqueueFiles=function(e){var t,i,n;for(i=0,n=e.length;i<n;i++)t=e[i],this.enqueueFile(t);return null},H.prototype.enqueueFile=function(e){if(e.status!==H.ADDED||!0!==e.accepted)throw new Error("This file can't be queued because it has already been processed or was rejected.");if(e.status=H.QUEUED,this.options.autoProcessQueue)return setTimeout((t=this,function(){return t.processQueue()}),0);var t},H.prototype._thumbnailQueue=[],H.prototype._processingThumbnail=!1,H.prototype._enqueueThumbnail=function(e){if(this.options.createImageThumbnails&&e.type.match(/image.*/)&&e.size<=1024*this.options.maxThumbnailFilesize*1024)return this._thumbnailQueue.push(e),setTimeout((t=this,function(){return t._processThumbnailQueue()}),0);var t},H.prototype._processThumbnailQueue=function(){var e;if(!this._processingThumbnail&&0!==this._thumbnailQueue.length)return this._processingThumbnail=!0,this.createThumbnail(this._thumbnailQueue.shift(),(e=this,function(){return e._processingThumbnail=!1,e._processThumbnailQueue()}))},H.prototype.removeFile=function(e){if(e.status===H.UPLOADING&&this.cancelUpload(e),this.files=s(this.files,e),this.emit("removedfile",e),0===this.files.length)return this.emit("reset")},H.prototype.removeAllFiles=function(e){var t,i,n,s;for(null==e&&(e=!1),i=0,n=(s=this.files.slice()).length;i<n;i++)((t=s[i]).status!==H.UPLOADING||e)&&this.removeFile(t);return null},H.prototype.createThumbnail=function(e,t){var i,n;return(i=new FileReader).onload=(n=this,function(){return"image/svg+xml"===e.type?(n.emit("thumbnail",e,i.result),void(null!=t&&t())):n.createThumbnailFromUrl(e,i.result,t)}),i.readAsDataURL(e)},H.prototype.createThumbnailFromUrl=function(a,e,p,t){var u,d;return u=document.createElement("img"),t&&(u.crossOrigin=t),u.onload=(d=this,function(){var e,t,i,n,s,r,o,l;if(a.width=u.width,a.height=u.height,null==(i=d.options.resize.call(d,a)).trgWidth&&(i.trgWidth=i.optWidth),null==i.trgHeight&&(i.trgHeight=i.optHeight),t=(e=document.createElement("canvas")).getContext("2d"),e.width=i.trgWidth,e.height=i.trgHeight,c(t,u,null!=(s=i.srcX)?s:0,null!=(r=i.srcY)?r:0,i.srcWidth,i.srcHeight,null!=(o=i.trgX)?o:0,null!=(l=i.trgY)?l:0,i.trgWidth,i.trgHeight),n=e.toDataURL("image/png"),d.emit("thumbnail",a,n),null!=p)return p()}),null!=p&&(u.onerror=p),u.src=e},H.prototype.processQueue=function(){var e,t,i,n;if(!((t=this.options.parallelUploads)<=(e=i=this.getUploadingFiles().length))&&0<(n=this.getQueuedFiles()).length){if(this.options.uploadMultiple)return this.processFiles(n.slice(0,t-i));for(;e<t;){if(!n.length)return;this.processFile(n.shift()),e++}}},H.prototype.processFile=function(e){return this.processFiles([e])},H.prototype.processFiles=function(e){var t,i,n;for(i=0,n=e.length;i<n;i++)(t=e[i]).processing=!0,t.status=H.UPLOADING,this.emit("processing",t);return this.options.uploadMultiple&&this.emit("processingmultiple",e),this.uploadFiles(e)},H.prototype._getFilesWithXhr=function(s){var r;return function(){var e,t,i,n;for(n=[],e=0,t=(i=this.files).length;e<t;e++)(r=i[e]).xhr===s&&n.push(r);return n}.call(this)},H.prototype.cancelUpload=function(e){var t,i,n,s,r,o,l;if(e.status===H.UPLOADING){for(n=0,r=(i=this._getFilesWithXhr(e.xhr)).length;n<r;n++)(t=i[n]).status=H.CANCELED;for(e.xhr.abort(),s=0,o=i.length;s<o;s++)t=i[s],this.emit("canceled",t);this.options.uploadMultiple&&this.emit("canceledmultiple",i)}else(l=e.status)!==H.ADDED&&l!==H.QUEUED||(e.status=H.CANCELED,this.emit("canceled",e),this.options.uploadMultiple&&this.emit("canceledmultiple",[e]));if(this.options.autoProcessQueue)return this.processQueue()},P=function(){var e,t;return t=arguments[0],e=2<=arguments.length?l.call(arguments,1):[],"function"==typeof t?t.apply(this,e):t},H.prototype.uploadFile=function(e){return this.uploadFiles([e])},H.prototype.uploadFiles=function(u){var d,e,i,t,n,s,r,o,l,a,p,c,h,m,f,g,v,y,F,w,E,b,C,k,z,L,x,A,T,D,S,_,M,I,N,U;for(y=new XMLHttpRequest,F=0,C=u.length;F<C;F++)(d=u[F]).xhr=y;for(t in c=P(this.options.method,u),g=P(this.options.url,u),y.open(c,g,!0),y.withCredentials=!!this.options.withCredentials,m=null,i=function(){var e,t,i;for(i=[],e=0,t=u.length;e<t;e++)d=u[e],i.push(I._errorProcessing(u,m||I.options.dictResponseError.replace("{{statusCode}}",y.status),y));return i},N=I=this,f=function(e){var t,i,n,s,r,o,l,a,p;if(null!=e)for(i=100*e.loaded/e.total,n=0,o=u.length;n<o;n++)(d=u[n]).upload={progress:i,total:e.total,bytesSent:e.loaded};else{for(t=!0,i=100,s=0,l=u.length;s<l;s++)100===(d=u[s]).upload.progress&&d.upload.bytesSent===d.upload.total||(t=!1),d.upload.progress=i,d.upload.bytesSent=d.upload.total;if(t)return}for(p=[],r=0,a=u.length;r<a;r++)d=u[r],p.push(N.emit("uploadprogress",d,i,d.upload.bytesSent));return p},y.onload=(U=this,function(t){var e;if(u[0].status!==H.CANCELED&&4===y.readyState){if(m=y.responseText,y.getResponseHeader("content-type")&&~y.getResponseHeader("content-type").indexOf("application/json"))try{m=JSON.parse(m)}catch(e){t=e,m="Invalid JSON response from server."}return f(),200<=(e=y.status)&&e<300?U._finished(u,m,t):i()}}),y.onerror=function(){if(u[0].status!==H.CANCELED)return i()},(null!=(A=y.upload)?A:y).onprogress=f,s={Accept:"application/json","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest"},this.options.headers&&R(s,this.options.headers),s)(n=s[t])&&y.setRequestHeader(t,n);if(e=new FormData,this.options.params)for(p in T=this.options.params)v=T[p],e.append(p,v);for(w=0,k=u.length;w<k;w++)d=u[w],this.emit("sending",d,y,e);if(this.options.uploadMultiple&&this.emit("sendingmultiple",u,y,e),"FORM"===this.element.tagName)for(E=0,z=(D=this.element.querySelectorAll("input, textarea, select, button")).length;E<z;E++)if(l=(o=D[E]).getAttribute("name"),a=o.getAttribute("type"),"SELECT"===o.tagName&&o.hasAttribute("multiple"))for(b=0,L=(S=o.options).length;b<L;b++)(h=S[b]).selected&&e.append(l,h.value);else(!a||"checkbox"!==(_=a.toLowerCase())&&"radio"!==_||o.checked)&&e.append(l,o.value);for(r=x=0,M=u.length-1;0<=M?x<=M:M<=x;r=0<=M?++x:--x)e.append(this._getParamName(r),u[r],this._renameFilename(u[r].name));return this.submitRequest(y,e,u)},H.prototype.submitRequest=function(e,t,i){return e.send(t)},H.prototype._finished=function(e,t,i){var n,s,r;for(s=0,r=e.length;s<r;s++)(n=e[s]).status=H.SUCCESS,this.emit("success",n,t,i),this.emit("complete",n);if(this.options.uploadMultiple&&(this.emit("successmultiple",e,t,i),this.emit("completemultiple",e)),this.options.autoProcessQueue)return this.processQueue()},H.prototype._errorProcessing=function(e,t,i){var n,s,r;for(s=0,r=e.length;s<r;s++)(n=e[s]).status=H.ERROR,this.emit("error",n,t,i),this.emit("complete",n);if(this.options.uploadMultiple&&(this.emit("errormultiple",e,t,i),this.emit("completemultiple",e)),this.options.autoProcessQueue)return this.processQueue()},H}()).version="4.3.0",o.options={},o.optionsForElement=function(e){return e.getAttribute("id")?o.options[i(e.getAttribute("id"))]:void 0},o.instances=[],o.forElement=function(e){if("string"==typeof e&&(e=document.querySelector(e)),null==(null!=e?e.dropzone:void 0))throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");return e.dropzone},o.autoDiscover=!0,o.discover=function(){var e,t,r,i,n,s;for(document.querySelectorAll?r=document.querySelectorAll(".dropzone"):(r=[],(e=function(e){var t,i,n,s;for(s=[],i=0,n=e.length;i<n;i++)t=e[i],/(^| )dropzone($| )/.test(t.className)?s.push(r.push(t)):s.push(void 0);return s})(document.getElementsByTagName("div")),e(document.getElementsByTagName("form"))),s=[],i=0,n=r.length;i<n;i++)t=r[i],!1!==o.optionsForElement(t)?s.push(new o(t)):s.push(void 0);return s},o.blacklistedBrowsers=[/opera.*Macintosh.*version\/12/i],o.isBrowserSupported=function(){var e,t,i,n;if(e=!0,window.File&&window.FileReader&&window.FileList&&window.Blob&&window.FormData&&document.querySelector)if("classList"in document.createElement("a"))for(t=0,i=(n=o.blacklistedBrowsers).length;t<i;t++)n[t].test(navigator.userAgent)&&(e=!1);else e=!1;else e=!1;return e},s=function(e,t){var i,n,s,r;for(r=[],n=0,s=e.length;n<s;n++)(i=e[n])!==t&&r.push(i);return r},i=function(e){return e.replace(/[\-_](\w)/g,function(e){return e.charAt(1).toUpperCase()})},o.createElement=function(e){var t;return(t=document.createElement("div")).innerHTML=e,t.childNodes[0]},o.elementInside=function(e,t){if(e===t)return!0;for(;e=e.parentNode;)if(e===t)return!0;return!1},o.getElement=function(e,t){var i;if("string"==typeof e?i=document.querySelector(e):null!=e.nodeType&&(i=e),null==i)throw new Error("Invalid `"+t+"` option provided. Please provide a CSS selector or a plain HTML element.");return i},o.getElements=function(e,t){var i,n,s,r,o,l,a;if(e instanceof Array){n=[];try{for(s=0,o=e.length;s<o;s++)i=e[s],n.push(this.getElement(i,t))}catch(e){e,n=null}}else if("string"==typeof e)for(n=[],r=0,l=(a=document.querySelectorAll(e)).length;r<l;r++)i=a[r],n.push(i);else null!=e.nodeType&&(n=[e]);if(null==n||!n.length)throw new Error("Invalid `"+t+"` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");return n},o.confirm=function(e,t,i){return window.confirm(e)?t():null!=i?i():void 0},o.isValidFile=function(e,t){var i,n,s,r,o;if(!t)return!0;for(t=t.split(","),i=(n=e.type).replace(/\/.*$/,""),r=0,o=t.length;r<o;r++)if("."===(s=(s=t[r]).trim()).charAt(0)){if(-1!==e.name.toLowerCase().indexOf(s.toLowerCase(),e.name.length-s.length))return!0}else if(/\/\*$/.test(s)){if(i===s.replace(/\/.*$/,""))return!0}else if(n===s)return!0;return!1},"undefined"!=typeof jQuery&&null!==jQuery&&(jQuery.fn.dropzone=function(e){return this.each(function(){return new o(this,e)})}),"undefined"!=typeof module&&null!==module?module.exports=o:window.Dropzone=o,o.ADDED="added",o.QUEUED="queued",o.ACCEPTED=o.QUEUED,o.UPLOADING="uploading",o.PROCESSING=o.UPLOADING,o.CANCELED="canceled",o.ERROR="error",o.SUCCESS="success",d=function(e){var t,i,n,s,r,o,l,a;for(e.naturalWidth,r=e.naturalHeight,(t=document.createElement("canvas")).width=1,t.height=r,(i=t.getContext("2d")).drawImage(e,0,0),n=i.getImageData(0,0,1,r).data,a=0,o=s=r;a<o;)0===n[4*(o-1)+3]?s=o:a=o,o=s+a>>1;return 0===(l=o/r)?1:l},c=function(e,t,i,n,s,r,o,l,a,p){var u;return u=d(t),e.drawImage(t,i,n,s,r,o,l,a,p/u)},e=function(t,i){var e,n,s,r,o,l,a,p,u;if(u=!(s=!1),n=t.document,p=n.documentElement,e=n.addEventListener?"addEventListener":"attachEvent",a=n.addEventListener?"removeEventListener":"detachEvent",l=n.addEventListener?"":"on",r=function(e){if("readystatechange"!==e.type||"complete"===n.readyState)return("load"===e.type?t:n)[a](l+e.type,r,!1),!s&&(s=!0)?i.call(t,e.type||e):void 0},o=function(){try{p.doScroll("left")}catch(e){return e,void setTimeout(o,50)}return r("poll")},"complete"!==n.readyState){if(n.createEventObject&&p.doScroll){try{u=!t.frameElement}catch(e){}u&&o()}return n[e](l+"DOMContentLoaded",r,!1),n[e](l+"readystatechange",r,!1),t[e](l+"load",r,!1)}},o._autoDiscoverFunction=function(){if(o.autoDiscover)return o.discover()},e(window,o._autoDiscoverFunction)}).call(this);