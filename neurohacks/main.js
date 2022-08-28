window.addEventListener('load', () => {


    
    const energy = sessionStorage.getItem('ENERGY');
    const score = sessionStorage.getItem('SCORE')
    
    document.getElementById('result-footprint').innerHTML = energy;
    document.getElementById('result-score').innerHTML = score;


})