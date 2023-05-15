// document.body.style.margin = "0"
export function header() {
    let head = document.getElementById("head")
    let header = document.createElement("div")
    head.appendChild(header)
    // header.style.height = "80px"
    // header.style.background = "grey"
    header.style.padding = "20px"
    header.className = "header"

    let row = document.createElement("div")
    header.appendChild(row)
    row.style.display = "flex"
    row.style.justifyContent = "space-between"
    row.style.alignItems = "center"
    // row.style.height = "60px"
    row.style.background = "wheat"
    row.style.padding = "10px"
    row.className = "row"


    let navbar = ["nav-img", "nav-links", "search", "quick-links"]
    for (let i = 0; i < 4; i++) {
        let nav = document.createElement("div")
        row.appendChild(nav)
        // nav.style.width = "25%"
        // nav.style.height = "50px"
        // nav.style.background = "lightblue"
        nav.style.margin = "5px"
        nav.id = navbar[i]




        if (nav.id == "nav-img") {
            let logo = document.createElement("img")
            nav.appendChild(logo)
            logo.src = "images/logo.jpg"
            logo.style.width = "70px"
            logo.style.mixBlendMode = "color-burn"

        }

        if (nav.id == "nav-links") {
            nav.style.display = "flex"
            for (let j = 0; j < 6; j++) {
                let links = ["MEN", "WOMEN", "KIDS", "HOME & LIVING", "BEAUTY", "STUDIO"]
                let a = document.createElement("a")
                nav.appendChild(a)
                a.textContent = links[j]
                a.href = "#"
                // a.style.listStyleType = "none"
                a.style.margin = "10px"
                a.style.textDecoration = "none"
                a.style.color = "black"
                a.style.fontWeight = "bold"


            }
        }

        if (nav.id == "search") {
            let search = document.createElement("input")
            nav.appendChild(search)
            search.type = "search"
            search.style.width = "400px"
            search.style.height = "40px"
            search.placeholder = "Search for Products, Brands & More"
        }

        if (nav.id == "quick-links") {
            let btnLinks = ["Profile", "Wishlist", "Bag"];
            for (let j = 0; j < 3; j++) {
                let btn = document.createElement("button")
                nav.appendChild(btn)
                btn.style.padding = "5px"
                btn.textContent = btnLinks[j]
                btn.style.margin = "5px"
            }
        }
    }
}

export function footer(){
    let foot = document.getElementById("foot")
    let footer = document.createElement("div")
    foot.appendChild(footer)
    footer.style.background = "grey"
    footer.style.height = "100px"
    footer.style.width ="95%"
    footer.style.margin = "0 auto"
    footer.style.textAlign = "center"

    let p = document.createElement("p")
    footer.appendChild(p)
    p.textContent = "This is your footer"
    p.style.padding = "30px"
    p.style.fontSize = "20px"
    p.style.color = "white"
    p.style.letterSpacing = "2px"
}


let css = document.createElement("link")
document.head.appendChild(css)
css.rel = "stylesheet"
css.href = "relatables/style.css"