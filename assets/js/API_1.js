var codePostale = document.querySelector('#cp');
console.log(codePostale.value);
var dataVille = "";

codePostale.addEventListener('input', function(){
    if(this.value.length==5){
        console.log(this.value);
        let url = `https://geo.api.gouv.fr/communes?codePostal=${this.value}&fields=nom,code,codePostaux,codeDepartement,codeRegion,population&format=json&geometry=centre`;
    
        fetch(url).then((reponse) => 
            reponse.json().then((data) => 
            {
                console.log(data);
                
                let affichage = "<div><ul>";
                for (let ville of data)
                {
                    affichage += `<li>${ville.nom} : <strong>${ville.population}</strong> habitants</li>`;
                    console.log(ville.nom);
                    dataVille = ville.nom;
                }
                affichage += "</ul></div>";
                document.querySelector("#message").innerHTML = affichage;
                
                return(dataVille);
            })
        )
    }
});
    



