const Panino = document.querySelector(".Panino")
Panino.addEventListener("click", function (){
    this.classList.toggle("is-active")
})
const NomeProdotto = document.getElementById("product-name");
const caratteriRimanenti = document.getElementById("CaratteriRimanenti");
const CaratteriMassimi = NomeProdotto.maxLength;
                                                                  
function CaratteriRimanentiColori(event){
    const TestoInserito = event.target.value;
    const LunghezzaTesto = TestoInserito.length;
    const caratteriRimanenti2 = CaratteriMassimi - LunghezzaTesto;
    caratteriRimanenti.textContent = caratteriRimanenti2;

    if(caratteriRimanenti2 === 0){
        caratteriRimanenti.classList.add("error");
        NomeProdotto.classList.add("error")
        caratteriRimanenti.classList.remove("warning");
        NomeProdotto.classList.remove("warning")
    } else if(caratteriRimanenti2 <= 10){
        caratteriRimanenti.classList.add("warning");
        NomeProdotto.classList.add("warning")
        caratteriRimanenti.classList.remove("error");
        NomeProdotto.classList.remove("error")
    
    
    }
    else{
        caratteriRimanenti.classList.remove("warning");
        NomeProdotto.classList.remove("warning")
        caratteriRimanenti.classList.remove("error");
        NomeProdotto.classList.remove("error")
    
    }
    
}

NomeProdotto.addEventListener("input", CaratteriRimanentiColori)

function buttonClick(){
    alert("Hai cliccato il bottone")
}
