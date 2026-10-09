const form = document.querySelector("form");
form.addEventListener('submit', function(e) {
    e.preventDefault()
    const heigth = parseInt(document.querySelector("#height").value);
    const width = parseInt(document.querySelector("#Width").value);
    const results = document.querySelector(".result");
    const contains = document.querySelector(".contains");
    if (heigth === '' || heigth < 0 || isNaN(heigth)) {
        results.innerHTML = `"Please give a valid height" ${heigth}`
    } else if(width === '' || width < 0 || isNaN(width)) {
        results.innerHTML = `"Please give a valid Weigth" ${width}`
    }
    else{
        const BMI = (width / ((heigth * heigth)/10000)).toFixed(2);
        // show the result
        results.innerHTML = `<span>${BMI}</span>`;
        if (BMI < 18.5 ) {
                contains.innerHTML = ` Underweight`;
            }
            else if (BMI > 18.5 && BMI < 24.9) {
                contains.innerHTML = ` Healthy weigh`;
            }
            else{
                contains.innerHTML = ` Overweight`;
            }
    }
})