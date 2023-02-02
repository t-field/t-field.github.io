const TempInput = document.getElementById("tempInput");
const GetC = document.getElementById("cButton");
const GetF = document.getElementById("fButton");
const SubmitButton = document.getElementById("submit");

//clear results if user is doing stuff
TempInput.oninput= function(){
    clearResults();
}

GetC.onclick = function(){
    clearResults();
}

GetF.onclick = function(){
    clearResults();
}


SubmitButton.onclick = function(){
    let temp = TempInput.value.trim();
    let isNumber = false;
    console.log(temp);
    isNaN(temp) || temp === null || temp === "" ? TempInput.value="": isNumber = true;

    if(isNumber && GetC.checked){
        //convert C
        let cTemp = toCelsius(temp);
        //display cold font
        if(cTemp<=15){
        document.getElementById("resultCold").innerHTML = cTemp.toLocaleString(undefined, {style: "unit", unit: "celsius"});
        }
        //display nice font
        else if (cTemp>15 && cTemp<85){
        document.getElementById("resultNice").innerHTML = cTemp.toLocaleString(undefined, {style: "unit", unit: "celsius"});
        }
        //display hot font
        else{
        document.getElementById("resultHot").innerHTML = cTemp.toLocaleString(undefined, {style: "unit", unit: "celsius"});
        }
    }
    else if(isNumber && GetF.checked){
        //convert F
        let fTemp = toFahrenheit(temp);
        if(fTemp<=59){
        document.getElementById("resultCold").innerHTML = fTemp.toLocaleString(undefined, {style: "unit", unit: "fahrenheit"});
        }
        else if(fTemp>59 && fTemp <185.0008){
            document.getElementById("resultNice").innerHTML = fTemp.toLocaleString(undefined, {style: "unit", unit: "fahrenheit"});
        
        }
        else{
            document.getElementById("resultHot").innerHTML = fTemp.toLocaleString(undefined, {style: "unit", unit: "fahrenheit"});

        }
    }
    else{
        //don't accept NaN, empty, or null 
        clearResults();
    }
}

//C math
function toCelsius(temp){
    return ((temp-32) * (5/9));
    
}

//F math
function toFahrenheit(temp){
    return ((temp*9)/5 +32);
}

//clear results
function clearResults(){
    console.log("clearing result");
    document.getElementById("resultCold").innerHTML = "";
    document.getElementById("resultHot").innerHTML = "";
    document.getElementById("resultNice").innerHTML = "";
}
