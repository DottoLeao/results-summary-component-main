document.addEventListener("DOMContentLoaded", function () {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const mainDiv = document.querySelector("#items");
      data.forEach((item) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = `main-item ${item.category.toLowerCase()}`;

        const img = document.createElement("img");
        img.src = item.icon;
        img.alt = `${item.category} icon`;

        const categoryP = document.createElement("p");
        categoryP.className = `${item.category.toLowerCase()}-color`;
        categoryP.textContent = item.category;

        const scoreP = document.createElement("p");
        scoreP.innerHTML = `<strong>${item.score}</strong> <span>/ 100</span>`;

        itemDiv.appendChild(img);
        itemDiv.appendChild(categoryP);
        itemDiv.appendChild(scoreP);

        mainDiv.appendChild(itemDiv);
      });
    })
    .catch((error) => console.error("Erro ao carregar o JSON:", error));
});
