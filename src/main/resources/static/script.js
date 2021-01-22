




var billettArray = [];
let teller = 0;
function visBilletter(){

    const vfilm = document.getElementById("film").value;
    const antall = document.getElementById("inpAntall").value;
    const fornavn = document.getElementById("inpFornavn").value;
    const etternavn = document.getElementById("inpEtternavn").value;
    const telefonnr = document.getElementById("inpTelefonnr").value;
    const epost = document.getElementById("inpEpost").value;
    const alleBillettene = document.getElementById("alleBillettene");

    let billett = {
        film: vfilm,
        fnavn : fornavn,
        enavn : etternavn,
        tlfnr : telefonnr,
        mail : epost,
        ant : antall
    }

    billettArray.push(billett);

        alleBillettene.innerHTML += "Navn:" +  billettArray[teller].fnavn + " " +
            billettArray[teller].enavn + "<br>Film: " + billettArray[teller].film  +
            "<br>Antall: " + billettArray[teller].ant + "<br>Telefonnummer: " + billettArray[teller].tlfnr +
        "<br>Mail: " + billettArray[teller].mail + "<br><br>";

        teller++;

}

function slettBilletter(){
    billettArray = [];
    alleBillettene.innerHTML = "";

    console.log(billettArray)

}