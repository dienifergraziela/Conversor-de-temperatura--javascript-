
let celsius = document.getElementById("celsius");
let fahrenreit = document.getElementById("fahrenreit");
let kelvin = document.getElementById("kelvin");
let rankine = document.getElementById("rankine");
 
celsius.oninput = () => {
 
    let conversao = (parseFloat(celsius.value) * 9 / 5 + 32);
    fahrenreit.value = parseFloat(conversao.toFixed (3));
 
    let conversao2 = (parseFloat(celsius.value) + 273);
    kelvin.value = parseFloat(conversao2.toFixed (3));
 
    let conversao3 = (parseFloat(celsius.value) + 273.15) * 9 / 5;
    rankine.value = parseFloat(conversao3.toFixed(3));
 
};
 
fahrenreit.oninput = () => {

    let conversao = (parseFloat(fahrenreit.value) - 32) * 5 / 9;
    celsius.value = parseFloat(conversao.toFixed(3));

    let conversao2 = (parseFloat(fahrenreit.value) + 459.67) * 5 / 9;
    kelvin.value = parseFloat(conversao2.toFixed(3));

    let conversao3 = (parseFloat(fahrenreit.value)) + 459.67;
    rankine.value = parseFloat(conversao3.toFixed(3));
};
 
kelvin.oninput = () => {
 
    let conversao = (parseFloat(kelvin.value) - 273);
    celsius.value = parseFloat(conversao.toFixed (3) );
 
    let conversao2 = (parseFloat(kelvin.value) - 273) * 1.8 + 32;
    fahrenreit.value = parseFloat(conversao2.toFixed (3));
 
    let conversao3 = (parseFloat (kelvin.value)) * 9 / 5;
    rankine.value = parseFloat(conversao3.toFixed(3));
};
 
rankine.oninput = () => {
 
    let conversao = (parseFloat (rankine.value) * 5 / 9 - 273.15);
    celsius.value = parseFloat(conversao.toFixed (3) );
 
    let conversao2 = (parseFloat(rankine.value) - 459.67);
    fahrenreit.value = parseFloat(conversao2.toFixed (3));
 
    let conversao3 = (parseFloat (rankine.value) * 5 / 9);
    kelvin.value = parseFloat(conversao3.toFixed (3));
};
