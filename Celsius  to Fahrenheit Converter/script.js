window.onload = function() {
    let f = document.getElementById("farenheit");
    let c = document.getElementById("celsius");
    c.oninput = function() {
        f.value = (c.value * 9/5) + 32;
    };
    f.oninput = function() {
        c.value = (f.value-32) * 5/9;
    }
    
};