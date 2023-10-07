
let clickElement = document.querySelector("#click");


let kelvin = document.querySelector("#resultk");
let celcius = document.querySelector("#resultc");
let fahrenheit = document.querySelector("#resultf");
let rankine = document.querySelector("#resultr");

let containerResult = document.querySelector("#container-resul");


function clickFunction(){
    
    let valorElement = parseFloat(document.querySelector("#valor").value);
    let lista = document.getElementById("lista").value;    
    let fahrenheit, kelvin, celcius, rankine;

    switch(lista){

        case 'c':
            fahrenheit = (valorElement * 9/5) + 32;
            kelvin = valorElement + 273;
            rankine = (valorElement + 273.15) * 1.8;
            celcius = valorElement;

            document.querySelector(".resultf").innerHTML = 'Fahrenheit(F):<br>' + fahrenheit.toFixed(2);
            document.querySelector(".resultk").innerHTML = 'Kelvin(K):<br>' + kelvin.toFixed(2);
            document.querySelector(".resultr").innerHTML = 'Rankine(R):<br>' + rankine.toFixed(2);
            document.querySelector(".resultc").innerHTML = 'celcius(C):<br>' + celcius.toFixed(2);
                    
        break;

        case 'k':
            celcius = valorElement - 273;
            fahrenheit = ((valorElement - 273.15) * 9/5 + 32) 
            rankine = valorElement * 9/5;
            kelvin = valorElement;

            document.querySelector(".resultc").innerHTML = 'celcius(C):<br>' + celcius.toFixed(2);
            document.querySelector(".resultf").innerHTML = 'Fahrenheit(F):<br>' + fahrenheit.toFixed(2);
            document.querySelector(".resultr").innerHTML = 'Rankine(R):<br>' + rankine.toFixed(2);
            document.querySelector(".resultk").innerHTML = 'Kelvin(K):<br>' + kelvin.toFixed(2);

        break;

        case 'f':
            celsius = (valorElement - 32) * 5/9;
            kelvin = (valorElement - 32) * (5/9) + 273.15;
            rankine = valorElement + 459.67;
            fahrenheit = valorElement;

            document.querySelector(".resultc").innerHTML = 'Celsius(C):<br>' + celsius.toFixed(2);
            document.querySelector(".resultk").innerHTML = 'Kelvin(K):<br>' + kelvin.toFixed(2);
            document.querySelector(".resultr").innerHTML = 'Rankine(R):<br>' + rankine.toFixed(2);
            document.querySelector(".resultf").innerHTML = 'Fahrenheit(F):<br>' + fahrenheit.toFixed(2);

        break;

        case 'r':
            celsius = (valorElement / 1.8) - 273.15;
            fahrenheit = valorElement -459.67;
            kelvin = valorElement * 5/9;
            rankine =  valorElement;

            document.querySelector(".resultc").innerHTML = 'Celsius(C):<br>' + celsius.toFixed(2);
            document.querySelector(".resultf").innerHTML = 'Fahrenheit(F):<br>' + fahrenheit.toFixed(2);
            document.querySelector(".resultk").innerHTML = 'Kelvin(K):<br>' + kelvin.toFixed(2);
            document.querySelector(".resultr").innerHTML = 'Rankine(R):<br>' + rankine.toFixed(2);      
        
        break;
        default:
            console.log(Erro);
    
    }
    
}

