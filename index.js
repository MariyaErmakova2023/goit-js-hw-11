import"./assets/vendor-DJ7Tif3U.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function l(a){const s="https://pixabay.com/api/",o="12055450-aa2b09ec3f4cb93bdf0e9a2b1",t=new URLSearchParams({key:o,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:9}),e=`${s}?${t}`;return console.log(e),fetch(e).then(r=>r.json())}function i(a){const s=document.querySelector(".gallery");let o=a.hits.map(t=>`<div class="image-wrapper">
    <a href="${t.largeImageURL}">
    <img class="gallery-img" src="${t.webformatURL}" alt="${t.tags}"></img>
    </a>
    <div class="text-wrapper">
    <div class="text-item"><h5 class="text-header">Likes</h5><p class="text-paragraph">${t.likes}</p></div>
    <div class="text-item"><h5 class="text-header">Views</h5><p class="text-paragraph">${t.views}</p></div>
    <div class="text-item"><h5 class="text-header">Comments</h5><p class="text-paragraph">${t.comments}</p></div>
    <div class="text-item"><h5 class="text-header">Downloads</h5><p class="text-paragraph">${t.downloads}</p></div>
    </div>
    </div>`).join("");s.insertAdjacentHTML("beforeend",o),lightbox.refresh()}function d(){const a=document.querySelector(".gallery");a.innerHTML=""}const n={formEl:document.querySelector(".form"),inputEl:document.querySelector(".search")};n.formEl.addEventListener("submit",a=>{a.preventDefault(),d();const s=a.target.elements.search.value;console.log(s),l(s).then(o=>{const t=i(o);n.inputEl.insertAdjacentHTML("afterbegin",t)}).catch(o=>{})});
//# sourceMappingURL=index.js.map
