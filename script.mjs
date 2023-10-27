function areaConvert(event) {
    event.preventDefault();

    let marla = document.querySelector("#marlaInput").value;
    
    console.log(marla);
    
    let squareFeet = marla * 272.25;
    
    console.log(squareFeet);
    
    let resultMessage =
        `${marla} Marla is equivalent to ${squareFeet.toFixed(2)} square feet`;
    
    document.querySelector("#resultWindow").innerHTML = resultMessage;
}