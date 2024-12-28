const tempBox=document.getElementById('tempBox');
    const toFahrenheit=document.getElementById('toFahrenheit');
    const toCelsius=document.getElementById('toCelsius');
    const results=document.getElementById('results');
    const subBtn =document.getElementById('subBtn');
    let temp;
    subBtn.onclick= function (){
        
        if(toFahrenheit.checked){
            temp=Number(tempBox.value);
            temp= temp *9/5 + 32;
            results.textContent= temp.toFixed(1) +'°F';
        }
        else if(toCelsius.checked){
            temp=Number(tempBox.value);
            temp= (temp -32) * (5/9);
            results.textContent= temp.toFixed(1) +'°C';
        }
        else if(CtoKelvin.checked){
            temp=Number(tempBox.value);
            temp= (temp + 273.15);
            results.textContent= temp.toFixed(1) +'K';
        }
        else if(FtoKelvin.checked){
            temp=Number(tempBox.value);
            temp= (temp -32) * (5/9)+ 273.15;
            results.textContent= temp.toFixed(1) +'K';
        }
        else{
results.textContent='Select a unit';
        }
    }