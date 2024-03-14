let selectedIngredientId = null;
let dishes = ["Sushi", "Japanese Curry", "Fried Rice", "Risotto", "Bibimbap", "Ochazuke", "Donburi", "Paella", "Rice Pudding", "Mango Sticky Rice"];

function onLoad() {
    const dishCard = document.getElementById("dish-card");
    const choicePanel = document.getElementById("choice-panel");
    const choicePanelChildren = choicePanel.children;
    for (var i = 0; i < choicePanelChildren.length; i++) {
        const choicePanelChild = choicePanelChildren[i];
        const index = i;
        choicePanelChild.onclick = () => {
            if (selectedIngredientId !== null) {
                const selectedChoicePanelChild = document.getElementById(selectedIngredientId);
                selectedChoicePanelChild.style.backgroundColor = "transparent";
                selectedChoicePanelChild.style.backgroundImage = null;
                dishCard.style.visibility = "hidden";
                dishCard.onclick = null;
            }
            if (selectedIngredientId === choicePanelChild.id) {
                selectedIngredientId = null;
                document.getElementById("dish-img").src = "asset/Rice.png";
            } else {
                selectedIngredientId = choicePanelChild.id;
                choicePanelChild.style.backgroundColor = "#ffbcb3";
                choicePanelChild.style.backgroundImage = "url(asset/choice-bg-pattern.png)";
                dishCard.style.visibility = "visible";
                const dishName = dishes[index];
                dishCard.innerText = dishName;
                const dishNameWithoutSpaces = dishName.replaceAll(" ", "");
                document.getElementById("dish-img").src = `asset/${dishNameWithoutSpaces}.png`;
                dishCard.onclick = () => {
                    location.href=`text-pages/${dishNameWithoutSpaces}.html`;
                    event.stopPropagation();
                };
            }
            event.stopPropagation();
        };
    }
    document.getElementById("background").onclick = () => {
        document.getElementById(selectedIngredientId).style.backgroundColor = "transparent";
        dishCard.style.visibility = "hidden";
        dishCard.onclick = null;
        document.getElementById("dish-img").src = "asset/Rice.png";
    };
}

window.onload = onLoad;