






const clickButton  = document.getElementById("click-button");

clickButton.addEventListener("click", 
    function() {
        
    const distance = document.getElementById('distance');

    const forDiscount = document.getElementById('forDiscount');



    let priceForDistance = distance.value  * 0.21;


    if(forDiscount.value < 18){
        priceForDistance = priceForDistance * 0.8;
        console.log(priceForDistance, typeof priceForDistance);
    } 
    else if (forDiscount.value >= 65){
        priceForDistance =(priceForDistance * 0.6);
        console.log(priceForDistance, typeof priceForDistance);
    } 

   
        document.getElementById("myid").innerHTML = priceForDistance.toFixed(2) + "€";


      
        const nominative = document.getElementById("name");
    
        document.getElementById("naming").innerHTML =  nominative.value;

        const carrozza = Math.random() * 10 + 1

        document.getElementById("ramdom1").innerHTML =  parseInt(carrozza);

        const codeCp = Math.random() * 100000 + 1

        document.getElementById("ramdom2").innerHTML =  parseInt(codeCp);


    }

    
    )



