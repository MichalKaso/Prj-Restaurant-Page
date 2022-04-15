function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");


    menu.appendChild(
        createMenuItem(
            "Sauce",
            "Tomato sauce, Mozarella, Tomato, Sausage, Garlic, Basil"
        )
    );

    menu.appendChild(
        createMenuItem(
            "Gambino",
            "Tomato sauce, Mozarella, Shrimp, Garlic, Olives, Basil"
        )
    );

    menu.appendChild(
        createMenuItem(
            "Sonny",
            "Tomato sauce, Mozarella, Chilli Flakes, Olives, Basil"
        )
    );

    menu.appendChild(
        createMenuItem(
            "Donnie",
            "Tomato sauce, Mozarella, Salami, Onion, Pepper, Basil"
        )
    );

    menu.appendChild(
        createMenuItem(
            "Mulberry ",
            "Tomato sauce, Mozarella, Tomato, Onion, Feta Cheese, Olives, Basil"
        )
    );

    menu.appendChild(
        createMenuItem(
            "Lizz",
            "White Sauce, Mozarella, Salmon, Pineapple, Olives, Basil"
        )
    );

    menu.appendChild(
        createMenuItem(
            "One",
            "Tomato sauce, Mozarella, Tomato, Salami, Basil"
        )
    );

    menu.appendChild(
        createMenuItem(
            "AnotherOne",
            "Tomato sauce, Mozarella, Bacon, Peppers, Basil"
        )
    );

    return menu;

}

function createMenuItem(name, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const foodName = document.createElement("h2");
    foodName.textContent = name;

    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;

    const foodImage = document.createElement("img");
    foodImage.src = `images/pizzas/${name.toLowerCase()}.png`;
    foodImage.alt = `${name}`;


    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;

}

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;