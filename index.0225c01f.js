!function(){let e="live_Ko6wZTeYmlx0ffigih2h1Z9ovtTKpVD4jIxy8RCsg0DzCnOULymC5Yb71xvzx8Tr",t="https://api.thecatapi.com/v1";function n(n){return fetch(`${t}/images/search?breed_ids=${n}`,{headers:{"x-api-key":e}}).then(e=>{if(!e.ok)throw Error(e.status);return e.json()})}let o=document.querySelector(".cat-info"),r=document.querySelector(".breed-select"),c=document.querySelector(".loader"),a=document.querySelector(".error");function i(e){o.innerHTML=`
        <img src="${e[0].url}" alt="${e[0].breeds[0].name}"></img>
        <h2>${e[0].breeds[0].name}</h2>
        <p>${e[0].breeds[0].description}</p>
        <p><b>Temperament: ${e[0].breeds[0].temperament}</b></p>
    `}function l(){c.style.display="none"}function s(){a.style.display="block"}a.style.display="none",r.addEventListener("change",function(e){c.style.display="block",o.innerHTML="",n(e.target.value).then(i).catch(e=>{console.log(e),s()}).finally(()=>{l()})}),fetch(`${t}/breeds`,{headers:{"x-api-key":e}}).then(e=>{if(!e.ok)throw Error(e.status);return e.json()}).then(function(e){e.forEach(e=>{let t=document.createElement("option");t.value=e.id,t.textContent=e.name,r.appendChild(t),l()}),n(e[0].id).then(i).catch(e=>{console.log(e),s()})}).catch(e=>{console.log(e),s()})}();
//# sourceMappingURL=index.0225c01f.js.map
