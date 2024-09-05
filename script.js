let tourist = prompt("Qual seu nome turista?");
let visited = prompt("Você visitou alguma cidade? (s/n)");
let citiesVisited = "";
let cityCount = 0;

while (visited === "s" || visited === "S") {
    let city = prompt("Qual é o nome da cidade visitada?");
    if (cityCount === 0) {
        citiesVisited = "- " + city;
    } else {
        citiesVisited += "\n- " + city;

    }

    cityCount++;

    visited = prompt("Você visitou alguma outra cidade? (s/n)");

}

console.log("Turista: " + tourist);
console.log("Quantidade de cidades visitadas: " + cityCount);

if (cityCount > 0) {
    console.log("Cidades visitadas:\n" + citiesVisited);
} else {
    console.log("Nenhuma cidade visitada.");
}