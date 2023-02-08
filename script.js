const items =[
    {
    img:"assets/icon-animation.svg",
    para:"Learn the latest animation techniques to create stunning motion design and captivate your audience.",
    title:"Animation"
    },
    {
    img:"assets/icon-design.svg",
    para:"Create beautiful, usable interfaces to help shape the future of how the web looks.",
    title:"Design"
    },
    {
    img:"assets/icon-photography.svg",
    para:"Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.",
    title:"Photography"
    },
    {
    img:"assets/icon-crypto.svg",    
    para:"All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.",
    title:"Crypto"
    },
    {
    img:"assets/icon-business.svg", 
    para:"A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
    title:"Business"
    }
]

const grid = document.querySelector(".grid")

items.forEach((element,index) => {
    let newElement = document.createElement("li")
    newElement.classList.add("grid__element")

    newElement.innerHTML = `
    <figure class="grid__element_icon">
    <img src="${element.img}" alt="${element.title} icon">
    </figure>
    <header>${element.title}</header>
    <p>${element.para}</p>
    <a href="#">Get Started</a>
    `

    grid.appendChild(newElement)
})

