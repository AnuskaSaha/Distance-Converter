const convert = document.getElementById('convert');
let heading = document.querySelector('h1');
let p = document.querySelector('p');
let converted = 'miles';

document.addEventListener('keypress', (evt)=>{    
    if((evt.key==='m') || (evt.key==='M')){
        heading.innerText = 'Miles to Kilometers Converter';
        p.innerText = 'Type in a number of miles and click the button to convert the distance to kilometers.';
        converted = 'miles';
    }else if((evt.key==='k') || (evt.key==='K')){
        heading.innerText = 'Kilometers to Miles Converter';
        p.innerText = 'Type in a number of kilometer and click the button to convert the distance to miles.';
        converted = 'kilo';
    }
});

convert.addEventListener('submit',(e)=>{
    e.preventDefault();

    const distance = Number.parseFloat(document.getElementById('distance').value);
    let result = document.querySelector('.invisible');

    if(distance){
        if(converted === 'miles'){
            const km = (distance * 1.609344).toFixed(2);
            result.innerText = `${distance} Mile = ${km} Kilometer.`;
            result.style.color = 'black';
        }
        else if(converted === 'kilo'){
            const mile = (distance * 0.621371192).toFixed(2);
            result.innerText = `${distance} Kilometer = ${mile} Miles.`;
            result.style.color = 'black';
        }
    }else{
        result.innerText = 'ERROR: This is not a number.';
        result.style.color = 'red';
    }
});
