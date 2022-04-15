function createHome(){
    const home = document.createElement("div");
    home.classList.add("home");


    const chefImage = document.createElement("img");
    chefImage.src = "https://images.unsplash.com/photo-1611657365907-1ca5d9799f59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
    chefImage.alt = "Chef";

    home.appendChild(createParagraph( "Best pizza in town. No doubt!"));
    home.appendChild(createParagraph( "Made with our secret sauce since 1899!"));
    home.appendChild(chefImage);
    home.appendChild(createParagraph( "Exclusively open between 6pm-11pm! "));
    
    return home;

}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;

