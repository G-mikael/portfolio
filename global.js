/*console.log("IT’S ALIVE!");

function $$ (selector, context = document) {
    return Array.from(context.querySelectorAll(selector));
}

let navLinks = $$("nav a");

let currentLink = navLinks.find(
    a => a.host === location.host && a.pathname === location.pathname
);

if (currentLink) { // or if (currentLink !== undefined)
    currentLink.classList.add("current");
}

currentLink?.classList.add("current");*/

let pages = [
    {url: "", title: "Home"},
    {url: "/projects/", title: "Projects"},
    {url: "/contact/", title: "Contact"},
    {url: "/resume/", title: "Resume"},
    {url: "https://github.com/G-Mikael", title: "github"}
];

let nav = document.createElement("nav");
document.body.prepend(nav);

for (let p of pages) {
    let url = p.url;
    let title = p.title;
    // Create link and add it to nav
    nav.insertAdjacentHTML("beforeend", `<a href="${ url }">${ title }</a>` );
}

