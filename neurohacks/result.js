function handleSubmit () {
    const energy = document.getElementById('energy').value;
    const flights1 = document.getElementById('flights1').value;
    const flights2 = document.getElementById('flights2').value;
    const car = document.getElementById('car').value;
    energy = car * 0.79 + flights1 * 1100 + flights2 * 4400 + energy * 0.85;
    const score = (energy % 10) + 1;


    // to set into local storage
    /* localStorage.setItem("NAME", name);
    localStorage.setItem("SURNAME", surname); */
    
    sessionStorage.setItem("ENERGY", energy);
    sessionStorage.setItem("SCORE", score);

    return;
}