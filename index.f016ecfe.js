Array.from(document.querySelectorAll("input")).forEach(function(e){var t=e.parentElement,r=e.getAttribute("name"),l=e.getAttribute("id"),a=document.createElement("label");a.classList.add("field-label"),a.setAttribute("for",l),e.setAttribute("placeholder",r.charAt(0).toUpperCase()+r.slice(1)),t.insertBefore(a,e)});
//# sourceMappingURL=index.f016ecfe.js.map
