//taking the input and converting it into different temperatures using the convert function
function convert(){
    let input = parseFloat(document.getElementById("tempInput").value);
    let type = document.getElementById('unit').value;
    let result = document.getElementById('result');
                       
    if(isNaN(input)){
        alert('Enter a valid number!')
    }
    
    function fahrenheit(far){
        let fahrenheit = ((far*9/5)+32); 
        return fahrenheit;
    }

    function celsius(cel){
        let celsius = ((cel-32) * 5/9) ;
        return celsius;
    }

    function kelvin(kel){
        let kelvin = (kel + 273.15);
        return kelvin;
    }

    if (type == "far"){
        result.innerHTML = fahrenheit(input) + " °F"
    } else if(type === "cel"){
        result.innerHTML = celsius(input)  + " °C";
    } else if (type == "kel"){
        result.innerHTML = kelvin(input)  + " K";
    } else {
        result.innerHTML = "Enter a valid number"
    }

    
}