!function(e,t,r,n,s){var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="function"==typeof o[n]&&o[n],a=i.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function u(t,r){if(!a[t]){if(!e[t]){var s="function"==typeof o[n]&&o[n];if(!r&&s)return s(t,!0);if(i)return i(t,!0);if(l&&"string"==typeof t)return l(t);var c=Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}d.resolve=function(r){var n=e[t][1][r];return null!=n?n:r},d.cache={};var h=a[t]=new u.Module(t);e[t][0].call(h.exports,d,h,h.exports,this)}return a[t].exports;function d(e){var t=d.resolve(e);return!1===t?{}:u(t)}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=a,u.parent=i,u.register=function(t,r){e[t]=[function(e,t){t.exports=r},{}]},Object.defineProperty(u,"root",{get:function(){return o[n]}}),o[n]=u;for(var c=0;c<t.length;c++)u(t[c])}({"9lokZ":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"getCreatorPage",()=>u);var s=e("../../components/element/element"),o=e("../../components/tagsLabel/tagsLabel"),i=e("../../main");e("./creator.css");var a=e("firebase/database"),l=e("firebase/storage");function u(){let e=[],t=[],r=[],n=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),u=(0,s.createElement)("section","creator","section-padding"),c=(0,s.createElement)("div","creator__chapter"),h=(0,s.createElement)("h3","section__title","creator__title");h.innerText="Создать мем";let d=(0,s.createElement)("p","creator__descr");d.innerText="Здесь можно создать свой мем!";let p=(0,s.createElement)("form","creator__form"),_=(0,s.createElement)("label","creator__label");_.innerText="Название мема";let f=(0,s.createElement)("input","creator__input","creator__input--name");f.required="required";let g=(0,s.createElement)("label","creator__label");g.innerText="Ник автора";let m=(0,s.createElement)("input","creator__input","creator__input--author");m.value=(0,i.getUserName)(),m.setAttribute("readonly","true");let b=(0,s.createElement)("label","creator__label");b.innerText="Текст";let T=(0,s.createElement)("textarea","creator__input","creator__input--text"),v=(0,s.createElement)("div","images__block"),E=(0,s.createElement)("div","images__div"),R=(0,s.createElement)("button","creator__choose","btn");R.type="button";let w=(0,s.createElement)("label","creator__loading"),k=(0,s.createElement)("div","images__progress"),y=(0,o.getTagsLabel)();function x(){k.innerText=`\u{414}\u{43E}\u{431}\u{430}\u{432}\u{43B}\u{435}\u{43D}\u{43E} \u{43A}\u{430}\u{440}\u{442}\u{438}\u{43D}\u{43E}\u{43A}: ${e.length}/10`}R.innerText="Добавить каринку";let U=(0,s.createElement)("button","creator__submit","btn");function O(){e=[],r=[],E.innerHTML="Картики",x()}U.type="submit",U.innerText="Создать",""===E.innerHTML&&(E.innerHTML="Картинки"),_.append(f),g.append(m),b.append(T),v.append(E,w,k,R),p.append(_,g,b,y.tagsLabel,v,U),c.append(h,d),R.addEventListener("click",function(r){let n;r.preventDefault(),(n=document.createElement("input")).type="file",n.onchange=r=>{(function(t){let r=e.length+t.length,n=r<=10?t.length:10-e.length;for(let r=0;r<n;r++)e.push(t[r]);r>10&&alert("!!!"),x()})(r.target.files),function(){E.innerHTML="";for(let r=0;r<e.length;r++)!function(r){t[r]=new FileReader,t[r].onload=function(){let e=document.createElement("img");e.id=`img-${r}`,e.classList.add("choose__img"),e.src=t[r].result,E.append(e)},t[r].readAsDataURL(e[r])}(r);let r=document.createElement("label");r.innerHTML="Очистить",r.style="cursor:pointer;display:block; color: navy; font-size: 12px;",r.addEventListener("click",O),E.append(r)}()},n.click()});let A=(0,a.getDatabase)(),C=new Date;function I(){U.disabled=!1,T.value="",f.value="",O()}function L(){let e=document.querySelector(".load");(0,a.set)((0,a.ref)(A,"MemItems/"+n),{id:n,title:f.value,text:T.value,userName:m.value,userToken:(0,i.getUserToken)(),date:C,likes:0,linksOfImagesArray:r,tags:y.targetTags}).then(()=>{y.targetTags=[],y.getCheckedTags(y.targetTags),e.classList.add("loaded"),e.style.display="none",I(),alert("Мем опубликован!")})}return C=C.toLocaleString(),p.addEventListener("submit",function(t){if(t.preventDefault(),(0,i.isAuth)()){let s=document.querySelector(".load");if(t.disabled=!0,s.classList.remove("loaded"),s.style.display="grid",0===e.length){L(),I();return}!function(){r=[];for(let t=0;t<e.length;t++)(function(t){let s=e.indexOf(t),o={contentType:t.type},i=(0,l.getStorage)(),a=(0,l.ref)(i,"TheImages/"+n+"/img#"+(s+1)),u=(0,l.uploadBytesResumable)(a,t,o);u.on("state_changed",t=>{w.innerHTML="Imgs upload "+r.length+" of "+e.length},e=>{alert("error")},()=>{(0,l.getDownloadURL)(u.snapshot.ref).then(t=>{r[s]=t,r.length==e.length&&(w.innerHTML="all loaded",L())})})})(e[t])}()}else(0,i.authModal).openAuthModal()}),""!==m.value&&m.classList.add("readonly"),u.append(c,p),u}},{"../../components/element/element":"glRxY","../../components/tagsLabel/tagsLabel":"bWv4N","../../main":"fclUP","./creator.css":"ckL8P","firebase/database":"gGruC","firebase/storage":"5lcfA","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],bWv4N:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"getTagsLabel",()=>i);var s=e("../../main"),o=e("../element/element");function i(){let e=(0,o.createElement)("label","tags__label"),t=(0,o.createElement)("div","select-btn"),r=(0,o.createElement)("span","btn-text"),n=(0,o.createElement)("ul","tags__checked","list-reset");r.innerText="Добавить тэги (не более 3):";let i=(0,o.createElement)("span","arrow-down");i.insertAdjacentHTML("beforeend",`<svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L7 7L13 1" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`);let a=[],l=(0,o.createElement)("div","tags__box"),u=(0,o.createElement)("ul","tags__items"),c=(0,o.createElement)("input","tags__search");c.type="text",c.placeholder="Поиск по названию";let h=(0,s.getTagList)(),d=0;function p(e){n.innerHTML="",e.forEach(e=>{let{id:t,value:r}=e,s=(0,o.createElement)("li","checked-tag"),i=(0,o.createElement)("span");i.innerText=r;let l=(0,o.createElement)("div","checked-tag__remove");l.insertAdjacentHTML("beforeend",`<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.63603 12.364L12.9497 1.05024" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 1L13.3137 12.3137" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            `),l.addEventListener("click",e=>(function(e){let t=e.target.closest("li").dataset.id;for(let e=0;e<a.length;e++)a[e].id===t&&(a.splice(e,1),p(a),function(e){let t=document.querySelectorAll(".tag");for(let r=0;r<t.length;r++)t[r].dataset.id===e&&t[r].classList.remove("checked")}(t))})(e)),s.append(i,l),s.setAttribute("data-value",r),s.setAttribute("data-id",t),n.append(s)})}return h.forEach(e=>{let t=(0,o.createElement)("li","tag");t.setAttribute("data-value",e),t.setAttribute("data-id",d);let r=(0,o.createElement)("span","tag__text");r.innerText=e,t.append(r),u.append(t),t.addEventListener("click",()=>{!t.classList.contains("checked")&&a.length<=2&&(a.push({id:t.dataset.id,value:t.dataset.value}),t.classList.add("checked"),p(a))}),d++}),t.append(r,i),l.append(c,u),e.append(t,l,n),c.addEventListener("input",()=>{let e=document.querySelectorAll(".tag"),{value:t}=c;for(let r=0;r<e.length;r++)e[r].dataset.value.includes(t)?e[r].classList.remove("hidden"):e[r].classList.add("hidden");!function(){if(""==u.innerHTML){let e=(0,o.createElement)("span");e.innerText="Такого тэга не найдено",u.append(e)}}()}),t.addEventListener("click",()=>{t.classList.toggle("open")}),document.addEventListener("click",e=>{let t=document.querySelector(".select-btn"),r=document.querySelector(".tags__label");!t||t.contains(e.target)||r.contains(e.target)||t.classList.remove("open")}),{tagsLabel:e,targetTags:a,getCurrentTags:function(){return a},getCheckedTags:p}}e("./tagsLabel.css")},{"../../main":"fclUP","../element/element":"glRxY","./tagsLabel.css":"iKn8a","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],iKn8a:[function(){},{}],ckL8P:[function(){},{}],"5lcfA":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r);var s=e("@firebase/storage");n.exportAll(s,r)},{"@firebase/storage":"9MEfQ","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"9MEfQ":[function(e,t,r){var n,s,o,i,a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(r),a.export(r,"StorageError",()=>p),a.export(r,"StorageErrorCode",()=>o),a.export(r,"StringFormat",()=>D),a.export(r,"_FbsBlob",()=>j),a.export(r,"_Location",()=>k),a.export(r,"_TaskEvent",()=>ec),a.export(r,"_TaskState",()=>eh),a.export(r,"_UploadTask",()=>eR),a.export(r,"_dataFromString",()=>B),a.export(r,"_getChild",()=>eG),a.export(r,"_invalidArgument",()=>T),a.export(r,"_invalidRootOperation",()=>E),a.export(r,"connectStorageEmulator",()=>eW),a.export(r,"deleteObject",()=>ej),a.export(r,"getBlob",()=>e$),a.export(r,"getBytes",()=>eS),a.export(r,"getDownloadURL",()=>eH),a.export(r,"getMetadata",()=>eM),a.export(r,"getStorage",()=>eV),a.export(r,"getStream",()=>eX),a.export(r,"list",()=>eq),a.export(r,"listAll",()=>eF),a.export(r,"ref",()=>ez),a.export(r,"updateMetadata",()=>eB),a.export(r,"uploadBytes",()=>eN),a.export(r,"uploadBytesResumable",()=>eD),a.export(r,"uploadString",()=>eP);var l=e("@firebase/app"),u=e("@firebase/util"),c=e("@firebase/component");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let h="firebasestorage.googleapis.com",d="storageBucket";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p extends u.FirebaseError{constructor(e,t,r=0){super(_(e),`Firebase Storage: ${t} (${_(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,p.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return _(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function _(e){return"storage/"+e}function f(){return new p(o.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function g(){return new p(o.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function m(){return new p(o.CANCELED,"User canceled the upload/download.")}function b(){return new p(o.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function T(e){return new p(o.INVALID_ARGUMENT,e)}function v(){return new p(o.APP_DELETED,"The Firebase app was deleted.")}function E(e){return new p(o.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function R(e,t){return new p(o.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function w(e){throw new p(o.INTERNAL_ERROR,"Internal error: "+e)}(n=o||(o={})).UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=k.makeFromUrl(e,t)}catch(t){return new k(e,"")}if(""===r.path)return r;throw new p(o.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let r=null,n="([A-Za-z0-9.\\-_]+)",s=RegExp("^gs://"+n+"(/(.*))?$","i");function i(e){e.path_=decodeURIComponent(e.path)}let a=t.replace(/[.]/g,"\\."),l=[{regex:s,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:RegExp(`^https?://${a}/v[A-Za-z0-9_]+/b/${n}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:i},{regex:RegExp(`^https?://${t===h?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${n}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:i}];for(let t=0;t<l.length;t++){let n=l[t],s=n.regex.exec(e);if(s){let e=s[n.indices.bucket],t=s[n.indices.path];t||(t=""),r=new k(e,t),n.postModify(r);break}}if(null==r)throw new p(o.INVALID_URL,"Invalid URL '"+e+"'.");return r}}class y{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}function x(e){return"string"==typeof e||e instanceof String}function U(e){return O()&&e instanceof Blob}function O(){return"undefined"!=typeof Blob}function A(e,t,r,n){if(n<t)throw T(`Invalid value for '${e}'. Expected ${t} or greater.`);if(n>r)throw T(`Invalid value for '${e}'. Expected ${r} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e,t,r){let n=t;return null==r&&(n=`https://${t}`),`${r}://${n}/v0${e}`}function I(e){let t=encodeURIComponent,r="?";for(let n in e)e.hasOwnProperty(n)&&(r=r+(t(n)+"=")+t(e[n])+"&");return r.slice(0,-1)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,t){let r=e>=500&&e<600,n=-1!==[408,429].indexOf(e),s=-1!==t.indexOf(e);return r||n||s}(s=i||(i={}))[s.NO_ERROR=0]="NO_ERROR",s[s.NETWORK_ERROR=1]="NETWORK_ERROR",s[s.ABORT=2]="ABORT";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e,t,r,n,s,o,i,a,l,u,c,h=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=n,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=i,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=c,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){let e=(e,t)=>{let r=this.resolve_,n=this.reject_,s=t.connection;if(t.wasSuccessCode)try{let e=this.callback_(s,s.getResponse());void 0!==e?r(e):r()}catch(e){n(e)}else if(null!==s){let e=f();e.serverResponse=s.getErrorText(),n(this.errorCallback_?this.errorCallback_(s,e):e)}else n(t.canceled?this.appDelete_?v():m():g())};this.canceled_?e(!1,new N(!1,null,!0)):this.backoffId_=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t,r){let n=1,s=null,o=null,i=!1,a=0,l=!1;function u(...e){l||(l=!0,t.apply(null,e))}function c(t){s=setTimeout(()=>{s=null,e(d,2===a)},t)}function h(){o&&clearTimeout(o)}function d(e,...t){let r;if(l){h();return}if(e||2===a||i){h(),u.call(null,e,...t);return}n<64&&(n*=2),1===a?(a=2,r=0):r=(n+Math.random())*1e3,c(r)}let p=!1;function _(e){!p&&(p=!0,h(),l||(null!==s?(e||(a=2),clearTimeout(s),c(0)):e||(a=1)))}return c(0),o=setTimeout(()=>{i=!0,_(!0)},r),_}((e,t)=>{if(t){e(!1,new N(!1,null,!0));return}let r=this.connectionFactory_();this.pendingConnection_=r;let n=e=>{let t=e.loaded,r=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,r)};null!==this.progressCallback_&&r.addUploadProgressListener(n),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&r.removeUploadProgressListener(n),this.pendingConnection_=null;let t=r.getErrorCode()===i.NO_ERROR,s=r.getStatus();if(!t||L(s,this.additionalRetryCodes_)&&this.retry){e(!1,new N(!1,null,r.getErrorCode()===i.ABORT));return}e(!0,new N(-1!==this.successCodes_.indexOf(s),r))})},e,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class N{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function P(...e){let t="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==t){let r=new t;for(let t=0;t<e.length;t++)r.append(e[t]);return r.getBlob()}if(O())return new Blob(e);throw new p(o.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let D={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class M{constructor(e,t){this.data=e,this.contentType=t||null}}function B(e,t){switch(e){case D.RAW:return new M(q(t));case D.BASE64:case D.BASE64URL:return new M(F(e,t));case D.DATA_URL:return new M(function(e){let t=new H(e);return t.base64?F(D.BASE64,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw R(D.DATA_URL,"Malformed data URL.")}return q(t)}(t.rest)}(t),new H(t).contentType)}throw f()}function q(e){let t=[];for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);n<=127?t.push(n):n<=2047?t.push(192|n>>6,128|63&n):(64512&n)==55296?r<e.length-1&&(64512&e.charCodeAt(r+1))==56320?(n=65536|(1023&n)<<10|1023&e.charCodeAt(++r),t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n)):t.push(239,191,189):(64512&n)==56320?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|63&n)}return new Uint8Array(t)}function F(e,t){let r;switch(e){case D.BASE64:{let r=-1!==t.indexOf("-"),n=-1!==t.indexOf("_");if(r||n)throw R(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case D.BASE64URL:{let r=-1!==t.indexOf("+"),n=-1!==t.indexOf("/");if(r||n)throw R(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/")}}try{r=/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if("undefined"==typeof atob)throw new p(o.UNSUPPORTED_ENVIRONMENT,"base-64 is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.");return atob(e)}(t)}catch(t){if(t.message.includes("polyfill"))throw t;throw R(e,"Invalid character found")}let n=new Uint8Array(r.length);for(let e=0;e<r.length;e++)n[e]=r.charCodeAt(e);return n}class H{constructor(e){var t;this.base64=!1,this.contentType=null;let r=e.match(/^data:([^,]+)?,/);if(null===r)throw R(D.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");let n=r[1]||null;null!=n&&(this.base64=(t=";base64",n.length>=t.length&&n.substring(n.length-t.length)===t),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,t){let r=0,n="";U(e)?(this.data_=e,r=e.size,n=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=n}size(){return this.size_}type(){return this.type_}slice(e,t){if(!U(this.data_))return new j(new Uint8Array(this.data_.buffer,e,t-e),!0);{var r;let n=(r=this.data_).webkitSlice?r.webkitSlice(e,t):r.mozSlice?r.mozSlice(e,t):r.slice?r.slice(e,t):null;return null===n?null:new j(n)}}static getBlob(...e){if(O()){let t=e.map(e=>e instanceof j?e.data_:e);return new j(P.apply(null,t))}{let t=e.map(e=>x(e)?B(D.RAW,e).data:e.data_),r=0;t.forEach(e=>{r+=e.byteLength});let n=new Uint8Array(r),s=0;return t.forEach(e=>{for(let t=0;t<e.length;t++)n[s++]=e[t]}),new j(n,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e){var t;let r;try{r=JSON.parse(e)}catch(e){return null}return"object"!=typeof(t=r)||Array.isArray(t)?null:r}function G(e){let t=e.lastIndexOf("/",e.length-2);return -1===t?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e,t){return t}class W{constructor(e,t,r,n){this.server=e,this.local=t||e,this.writable=!!r,this.xform=n||V}}let $=null;function X(){if($)return $;let e=[];e.push(new W("bucket")),e.push(new W("generation")),e.push(new W("metageneration")),e.push(new W("name","fullPath",!0));let t=new W("name");t.xform=function(e,t){return!x(t)||t.length<2?t:G(t)},e.push(t);let r=new W("size");return r.xform=function(e,t){return void 0!==t?Number(t):t},e.push(r),e.push(new W("timeCreated")),e.push(new W("updated")),e.push(new W("md5Hash",null,!0)),e.push(new W("cacheControl",null,!0)),e.push(new W("contentDisposition",null,!0)),e.push(new W("contentEncoding",null,!0)),e.push(new W("contentLanguage",null,!0)),e.push(new W("contentType",null,!0)),e.push(new W("metadata","customMetadata",!0)),$=e}function K(e,t,r){let n=z(t);return null===n?null:function(e,t,r){let n={};n.type="file";let s=r.length;for(let e=0;e<s;e++){let s=r[e];n[s.local]=s.xform(n,t[s.server])}return Object.defineProperty(n,"ref",{get:function(){let t=new k(n.bucket,n.fullPath);return e._makeStorageReference(t)}}),n}(e,n,r)}function Z(e,t){let r={},n=t.length;for(let s=0;s<n;s++){let n=t[s];n.writable&&(r[n.server]=e[n.local])}return JSON.stringify(r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let J="prefixes",Y="items";class Q{constructor(e,t,r,n){this.url=e,this.method=t,this.handler=r,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(e){if(!e)throw f()}function et(e,t){return function(r,n){let s=K(e,n,t);return ee(null!==s),s}}function er(e){return function(t,r){var n,s;let i;return 401===t.getStatus()?i=t.getErrorText().includes("Firebase App Check token is invalid")?new p(o.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project."):new p(o.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(n=e.bucket,i=new p(o.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(s=e.path,i=new p(o.UNAUTHORIZED,"User does not have permission to access '"+s+"'.")):i=r,i.status=t.getStatus(),i.serverResponse=r.serverResponse,i}}function en(e){let t=er(e);return function(r,n){let s=t(r,n);if(404===r.getStatus()){var i;i=e.path,s=new p(o.OBJECT_NOT_FOUND,"Object '"+i+"' does not exist.")}return s.serverResponse=n.serverResponse,s}}function es(e,t,r){let n=C(t.fullServerUrl(),e.host,e._protocol),s=e.maxOperationRetryTime,o=new Q(n,"GET",et(e,r),s);return o.errorHandler=en(t),o}function eo(e,t,r){let n=new Q(C(t.fullServerUrl(),e.host,e._protocol)+"?alt=media","GET",(e,t)=>t,e.maxOperationRetryTime);return n.errorHandler=en(t),void 0!==r&&(n.headers.Range=`bytes=0-${r}`,n.successCodes=[200,206]),n}function ei(e,t,r){let n=Object.assign({},r);return n.fullPath=e.path,n.size=t.size(),!n.contentType&&(n.contentType=t&&t.type()||"application/octet-stream"),n}function ea(e,t,r,n,s){let o=t.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"},a=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();i["Content-Type"]="multipart/related; boundary="+a;let l=ei(t,n,s),u="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+Z(l,r)+"\r\n--"+a+"\r\nContent-Type: "+l.contentType+"\r\n\r\n",c=j.getBlob(u,n,"\r\n--"+a+"--");if(null===c)throw b();let h={name:l.fullPath},d=C(o,e.host,e._protocol),p=e.maxUploadRetryTime,_=new Q(d,"POST",et(e,r),p);return _.urlParams=h,_.headers=i,_.body=c.uploadData(),_.errorHandler=er(t),_}class el{constructor(e,t,r,n){this.current=e,this.total=t,this.finalized=!!r,this.metadata=n||null}}function eu(e,t){let r=null;try{r=e.getResponseHeader("X-Goog-Upload-Status")}catch(e){ee(!1)}return ee(!!r&&-1!==(t||["active"]).indexOf(r)),r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ec={STATE_CHANGED:"state_changed"},eh={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ed(e){switch(e){case"running":case"pausing":case"canceling":return eh.RUNNING;case"paused":return eh.PAUSED;case"success":return eh.SUCCESS;case"canceled":return eh.CANCELED;default:return eh.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e,t,r){"function"==typeof e||null!=t||null!=r?(this.next=e,this.error=null!=t?t:void 0,this.complete=null!=r?r:void 0):(this.next=e.next,this.error=e.error,this.complete=e.complete)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(e){return(...t)=>{Promise.resolve().then(()=>e(...t))}}class ef{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=i.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=i.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=i.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,n){if(this.sent_)throw w("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==n)for(let e in n)n.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,n[e].toString());return void 0!==r?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw w("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw w("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return -1}}getResponse(){if(!this.sent_)throw w("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw w("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class eg extends ef{initXhr(){this.xhr_.responseType="text"}}function em(){return new eg}class eb extends ef{initXhr(){this.xhr_.responseType="arraybuffer"}}function eT(){return new eb}class ev extends ef{initXhr(){this.xhr_.responseType="blob"}}function eE(){return new ev}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e,t,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=r,this._mappings=X(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{if(this._request=void 0,this._chunkMultiplier=1,e._codeEquals(o.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{let t=this.isExponentialBackoffExpired();if(L(e.status,[])){if(t)e=g();else{this.sleepTime=Math.max(2*this.sleepTime,1e3),this._needToFetchStatus=!0,this.completeTransitions_();return}}this._error=e,this._transition("error")}},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals(o.CANCELED)?this.completeTransitions_():(this._error=e,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((e,t)=>{this._resolve=e,this._reject=t,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){let e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,r])=>{switch(this._state){case"running":e(t,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused")}})}_createResumable(){this._resolveToken((e,t)=>{let r=function(e,t,r,n,s){let o=t.bucketOnlyServerUrl(),i=ei(t,n,s),a={name:i.fullPath},l=C(o,e.host,e._protocol),u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${n.size()}`,"X-Goog-Upload-Header-Content-Type":i.contentType,"Content-Type":"application/json; charset=utf-8"},c=Z(i,r),h=new Q(l,"POST",function(e){let t;eu(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(e){ee(!1)}return ee(x(t)),t},e.maxUploadRetryTime);return h.urlParams=a,h.headers=u,h.body=c,h.errorHandler=er(t),h}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),n=this._ref.storage._makeRequest(r,em,e,t);this._request=n,n.getPromise().then(e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){let e=this._uploadUrl;this._resolveToken((t,r)=>{let n=function(e,t,r,n){let s=new Q(r,"POST",function(e){let t=eu(e,["active","final"]),r=null;try{r=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){ee(!1)}r||ee(!1);let s=Number(r);return ee(!isNaN(s)),new el(s,n.size(),"final"===t)},e.maxUploadRetryTime);return s.headers={"X-Goog-Upload-Command":"query"},s.errorHandler=er(t),s}(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(n,em,t,r);this._request=s,s.getPromise().then(e=>{this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){let e=262144*this._chunkMultiplier,t=new el(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((n,s)=>{let i;try{i=function(e,t,r,n,s,i,a,l){let u=new el(0,0);if(a?(u.current=a.current,u.total=a.total):(u.current=0,u.total=n.size()),n.size()!==u.total)throw new p(o.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.");let c=u.total-u.current,h=c;s>0&&(h=Math.min(h,s));let d=u.current,_=d+h,f={"X-Goog-Upload-Command":0===h?"finalize":c===h?"upload, finalize":"upload","X-Goog-Upload-Offset":`${u.current}`},g=n.slice(d,_);if(null===g)throw b();let m=new Q(r,"POST",function(e,r){let s;let o=eu(e,["active","final"]),a=u.current+h,l=n.size();return s="final"===o?et(t,i)(e,r):null,new el(a,l,"final"===o,s)},t.maxUploadRetryTime);return m.headers=f,m.body=g.uploadData(),m.progressCallback=l||null,m.errorHandler=er(e),m}(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(e){this._error=e,this._transition("error");return}let a=this._ref.storage._makeRequest(i,em,n,s,!1);this._request=a,a.getPromise().then(e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){262144*this._chunkMultiplier*2<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{let r=es(this._ref.storage,this._ref._location,this._mappings),n=this._ref.storage._makeRequest(r,em,e,t);this._request=n,n.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{let r=ea(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),n=this._ref.storage._makeRequest(r,em,e,t);this._request=n,n.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){let t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":let t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":case"error":case"success":this._state=e,this._notifyObservers();break;case"canceled":this._error=m(),this._state=e,this._notifyObservers()}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}}get snapshot(){let e=ed(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,r,n){let s=new ep(t||void 0,r||void 0,n||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){let t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(e=>{this._notifyObserver(e)})}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(ed(this._state)){case eh.SUCCESS:e_(this._resolve.bind(null,this.snapshot))();break;case eh.CANCELED:case eh.ERROR:e_(this._reject.bind(null,this._error))();break;default:e=!1}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(ed(this._state)){case eh.RUNNING:case eh.PAUSED:e.next&&e_(e.next.bind(e,this.snapshot))();break;case eh.SUCCESS:e.complete&&e_(e.complete.bind(e))();break;case eh.CANCELED:case eh.ERROR:default:e.error&&e_(e.error.bind(e,this._error))()}}resume(){let e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){let e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){let e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e,t){this._service=e,t instanceof k?this._location=t:this._location=k.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ew(e,t)}get root(){let e=new k(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return G(this._location.path)}get storage(){return this._service}get parent(){let e=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if(0===e.length)return null;let t=e.lastIndexOf("/");return -1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;let t=new k(this._location.bucket,e);return new ew(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw E(e)}}function ek(e,t,r){e._throwIfRoot("uploadBytes");let n=ea(e.storage,e._location,X(),new j(t,!0),r);return e.storage.makeRequestWithTokens(n,em).then(t=>({metadata:t,ref:e}))}async function ey(e,t,r){let n=await ex(e,{pageToken:r});t.prefixes.push(...n.prefixes),t.items.push(...n.items),null!=n.nextPageToken&&await ey(e,t,n.nextPageToken)}function ex(e,t){null!=t&&"number"==typeof t.maxResults&&A("options.maxResults",1,1e3,t.maxResults);let r=t||{},n=function(e,t,r,n,s){var o;let i={};t.isRoot?i.prefix="":i.prefix=t.path+"/",i.delimiter="/",n&&(i.pageToken=n),s&&(i.maxResults=s);let a=C(t.bucketOnlyServerUrl(),e.host,e._protocol),l=e.maxOperationRetryTime,u=new Q(a,"GET",(o=t.bucket,function(t,r){let n=function(e,t,r){let n=z(r);return null===n?null:function(e,t,r){let n={prefixes:[],items:[],nextPageToken:r.nextPageToken};if(r[J])for(let s of r[J]){let r=s.replace(/\/$/,""),o=e._makeStorageReference(new k(t,r));n.prefixes.push(o)}if(r[Y])for(let s of r[Y]){let r=e._makeStorageReference(new k(t,s.name));n.items.push(r)}return n}(e,t,n)}(e,o,r);return ee(null!==n),n}),l);return u.urlParams=i,u.errorHandler=er(t),u}(e.storage,e._location,"/",r.pageToken,r.maxResults);return e.storage.makeRequestWithTokens(n,em)}function eU(e,t){let r=function(e,t){let r=t.split("/").filter(e=>e.length>0).join("/");return 0===e.length?r:e+"/"+r}(e._location.path,t),n=new k(e._location.bucket,r);return new ew(e.storage,n)}function eO(e,t){let r=null==t?void 0:t[d];return null==r?null:k.makeFromBucketSpec(r,e)}class eA{constructor(e,t,r,n,s){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=n,this._firebaseVersion=s,this._bucket=null,this._host=h,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,null!=n?this._bucket=k.makeFromBucketSpec(n,this._host):this._bucket=eO(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=k.makeFromBucketSpec(this._url,e):this._bucket=eO(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){A("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){A("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;let e=this._authProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){let e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ew(this,e)}_makeRequest(e,t,r,n,s=!0){if(this._deleted)return new y(v());{let o=function(e,t,r,n,s,o,i=!0){let a=I(e.urlParams),l=e.url+a,u=Object.assign({},e.headers);return t&&(u["X-Firebase-GMPID"]=t),null!==r&&r.length>0&&(u.Authorization="Firebase "+r),u["X-Firebase-Storage-Version"]="webjs/"+(null!=o?o:"AppManager"),null!==n&&(u["X-Firebase-AppCheck"]=n),new S(l,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,s,i)}(e,this._appId,r,n,t,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){let[r,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,n).getPromise()}}let eC="@firebase/storage",eI="0.12.3",eL="storage";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eS(e,t){return function(e,t){e._throwIfRoot("getBytes");let r=eo(e.storage,e._location,t);return e.storage.makeRequestWithTokens(r,eT).then(e=>void 0!==t?e.slice(0,t):e)}(e=(0,u.getModularInstance)(e),t)}function eN(e,t,r){return ek(e=(0,u.getModularInstance)(e),t,r)}function eP(e,t,r,n){return function(e,t,r=D.RAW,n){e._throwIfRoot("uploadString");let s=B(r,t),o=Object.assign({},n);return null==o.contentType&&null!=s.contentType&&(o.contentType=s.contentType),ek(e,s.data,o)}(e=(0,u.getModularInstance)(e),t,r,n)}function eD(e,t,r){var n;return(n=e=(0,u.getModularInstance)(e))._throwIfRoot("uploadBytesResumable"),new eR(n,new j(t),r)}function eM(e){return function(e){e._throwIfRoot("getMetadata");let t=es(e.storage,e._location,X());return e.storage.makeRequestWithTokens(t,em)}(e=(0,u.getModularInstance)(e))}function eB(e,t){return function(e,t){e._throwIfRoot("updateMetadata");let r=function(e,t,r,n){let s=C(t.fullServerUrl(),e.host,e._protocol),o=Z(r,n),i=e.maxOperationRetryTime,a=new Q(s,"PATCH",et(e,n),i);return a.headers={"Content-Type":"application/json; charset=utf-8"},a.body=o,a.errorHandler=en(t),a}(e.storage,e._location,t,X());return e.storage.makeRequestWithTokens(r,em)}(e=(0,u.getModularInstance)(e),t)}function eq(e,t){return ex(e=(0,u.getModularInstance)(e),t)}function eF(e){return function(e){let t={prefixes:[],items:[]};return ey(e,t).then(()=>t)}(e=(0,u.getModularInstance)(e))}function eH(e){return function(e){e._throwIfRoot("getDownloadURL");let t=function(e,t,r){let n=new Q(C(t.fullServerUrl(),e.host,e._protocol),"GET",function(t,n){let s=K(e,n,r);return ee(null!==s),function(e,t,r,n){let s=z(t);if(null===s||!x(s.downloadTokens))return null;let o=s.downloadTokens;if(0===o.length)return null;let i=encodeURIComponent;return o.split(",").map(t=>{let s=e.bucket,o=e.fullPath;return C("/b/"+i(s)+"/o/"+i(o),r,n)+I({alt:"media",token:t})})[0]}(s,n,e.host,e._protocol)},e.maxOperationRetryTime);return n.errorHandler=en(t),n}(e.storage,e._location,X());return e.storage.makeRequestWithTokens(t,em).then(e=>{if(null===e)throw new p(o.NO_DOWNLOAD_URL,"The given file does not have any download URLs.");return e})}(e=(0,u.getModularInstance)(e))}function ej(e){return function(e){e._throwIfRoot("deleteObject");let t=function(e,t){let r=new Q(C(t.fullServerUrl(),e.host,e._protocol),"DELETE",function(e,t){},e.maxOperationRetryTime);return r.successCodes=[200,204],r.errorHandler=en(t),r}(e.storage,e._location);return e.storage.makeRequestWithTokens(t,em)}(e=(0,u.getModularInstance)(e))}function ez(e,t){return function(e,t){if(!(t&&/^[A-Za-z]+:\/\//.test(t)))return function e(t,r){if(t instanceof eA){if(null==t._bucket)throw new p(o.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+d+"' property when initializing the app?");let n=new ew(t,t._bucket);return null!=r?e(n,r):n}return void 0!==r?eU(t,r):t}(e,t);if(e instanceof eA)return new ew(e,t);throw T("To use ref(service, url), the first argument must be a Storage instance.")}(e=(0,u.getModularInstance)(e),t)}function eG(e,t){return eU(e,t)}function eV(e=(0,l.getApp)(),t){e=(0,u.getModularInstance)(e);let r=(0,l._getProvider)(e,eL).getImmediate({identifier:t}),n=(0,u.getDefaultEmulatorHostnameAndPort)("storage");return n&&eW(r,...n),r}function eW(e,t,r,n={}){!function(e,t,r,n={}){e.host=`${t}:${r}`,e._protocol="http";let{mockUserToken:s}=n;s&&(e._overrideAuthToken="string"==typeof s?s:(0,u.createMockUserToken)(s,e.app.options.projectId))}(e,t,r,n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e$(e,t){return function(e,t){e._throwIfRoot("getBlob");let r=eo(e.storage,e._location,t);return e.storage.makeRequestWithTokens(r,eE).then(e=>void 0!==t?e.slice(0,t):e)}(e=(0,u.getModularInstance)(e),t)}function eX(e,t){throw Error("getStream() is only supported by NodeJS builds")}(0,l._registerComponent)(new(0,c.Component)(eL,function(e,{instanceIdentifier:t}){return new eA(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t,l.SDK_VERSION)},"PUBLIC").setMultipleInstances(!0)),(0,l.registerVersion)(eC,eI,""),(0,l.registerVersion)(eC,eI,"esm2017")},{"@firebase/app":"3eFbF","@firebase/util":"hGlpW","@firebase/component":"7Ufrc","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}]},[],0,"parcelRequire4d19");
//# sourceMappingURL=creator.1d22ea61.js.map
