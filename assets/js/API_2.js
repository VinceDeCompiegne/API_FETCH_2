var codePostale = document.querySelector('#cp');
var codeMeteo = document.querySelector('Meteo');
console.log(codePostale.value);

codePostale.addEventListener('input', function(){
    if(this.value.length==5){
        console.log(this.value);
        let url = `https://geo.api.gouv.fr/communes?codePostal=${this.value}&fields=nom,population,centre&format=json`;
    
        fetch(url).then((reponse) => 
            reponse.json().then((data) => 
            {
                let villeNom ;
                console.log(data);
                
                return(data);
            }).then((data) =>
            { 
                let affichage = '<div><ul>';
        
                for (let ville of data)
                {
      
                console.log(ville.nom);
                let url2 = `https://api.openweathermap.org/data/2.5/weather?q=${ville.nom}&units=metric&lang=fr&appid=32675697c33bcdce0b0e1930ba463748`

                fetch(url2).then((reponse) =>
                    reponse.json().then((data) =>   
                    {
                        console.log(data);
                       
                        let weather = data
                        {   
                            affichage += `<li><strong>${ville.nom} : ${ville.population}</strong> habitants</li>`;
                            affichage += `<li></li>`;
                            affichage += `<li>Temp.   : <strong>${weather.main.temp}</strong> Degres Celcius</li>`;
                            affichage += `<li>Humidite : <strong>${weather.main.humidity}</strong> %</li>`;
                            affichage += `<li>Pression : <strong>${weather.main.pressure}</strong> hPa</li>`;
                            affichage += `<li>Vent : <strong>${weather.wind.speed}</strong> km/h</li>`;
                            affichage += `<li></li>`;
                        }
                        
                        document.querySelector("#message").innerHTML = affichage;
                    })

                )
                affichage += "</ul></div>";
                }
            })
        )
    }
});
    
        


