let body=document.querySelector("body");
let newdiv=document.createElement("div");
newdiv.classList.add("card","text-center");
body.append(newdiv);
let div1= document.createElement("div");
div1.className="card-header";
newdiv.appendChild(div1);
let ul=document.createElement("ul");
ul.classList.add("nav","nav-pills","card-header-pills");
div1.appendChild(ul);
let li1=document.createElement("li");
let li2=document.createElement("li");
li1.className="nav-item";
ul.appendChild(li1);
ul.appendChild(li2);
let a1=document.createElement("a");
a1.classList.add("nav-link","active")
a1.textContent="active"
li1.appendChild(a1);
let a2=document.createElement("a")
a2.classList.add("nav-link")
a2.textContent="link"
li2.appendChild(a2)
let li3=document.createElement("li")
li3.className="nav-item"
ul.appendChild(li3)
let a4=document.createElement("a")
a4.className="nav-link disabled"
a4.textContent="Disabled"
li3.appendChild(a4)
let div2=document.createElement("div")
newdiv.appendChild(div2)
div2.className="card-body" 
let h5=document.createElement("h5")
h5.className="card-title"
h5.textContent="Special title treatment"
div2.appendChild(h5)
let p=document.createElement("p")
p.textContent="With supporting text below as a natural lead-in to additional content."
p.className="card-text"

div2.appendChild(p)
let a3=document.createElement("a");
a3.setAttribute("href",'#')
a3.className="btn btn-primary"
a3.textContent="Go somewhere"
div2.appendChild(a3)