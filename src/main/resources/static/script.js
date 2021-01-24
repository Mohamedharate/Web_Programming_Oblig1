let billettArray = [];
let teller = 0;

function visBilletter(){
    const form = document.getElementById("form");
    const vfilm = document.getElementById("film").value;
    const antall = document.getElementById("inpAntall").value;
    const fornavn = document.getElementById("inpFornavn").value;
    const etternavn = document.getElementById("inpEtternavn").value;
    const telefonnr = document.getElementById("inpTelefonnr").value;
    const epost = document.getElementById("inpEpost").value;

    const alleBillettene = document.getElementById("alleBillettene");
    const feilMedlingAntall = document.getElementById("feilMedlingAntall");
    const feilMedlingFornavn = document.getElementById("feilMedlingFornavn");
    const feilMedlingEtternavn = document.getElementById("feilMedlingEtternavn");
    const feilMedlingTlfnr = document.getElementById("feilMedlingTlfnr");
    const feilMedlingEpost = document.getElementById("feilMedlingEpost");

    let feil = false;
    if (antall.length === 0){
        feil = true;
        feilMedlingAntall.innerHTML = "Må skrive noe inn i antall"
    }
    if (fornavn.length === 0){
        feil = true;
        feilMedlingFornavn.innerHTML = "Må skrive noe inn i fornavnet"
    }
    if(etternavn.length === 0){
        feil = true;
        feilMedlingEtternavn.innerHTML = "Må skrive noe inn i ettnavnet"
    }
    if (telefonnr.length === 0){
        feil = true;
        feilMedlingTlfnr.innerHTML = "Må skrive noe inn i telefonnr"
    }
    if (epost.length === 0){
        feil = true;
        feilMedlingEpost.innerHTML = "Må skrive noe inn i epost"
    }

    if (!feil){
        let billett = {
            film: vfilm,
            fnavn : fornavn,
            enavn : etternavn,
            tlfnr : telefonnr,
            mail : epost,
            ant : antall
        }

        alleBillettene.style.display = "block";
        const row = alleBillettene.insertRow(teller+1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);
        const cell6 = row.insertCell(5);

        billettArray.push(billett);

        cell1.innerHTML = billettArray[teller].film;
        cell2.innerHTML = billettArray[teller].ant;
        cell3.innerHTML = billettArray[teller].fnavn;
        cell4.innerHTML = billettArray[teller].enavn;
        cell5.innerHTML = billettArray[teller].tlfnr;
        cell6.innerHTML = billettArray[teller].mail;

        form.reset();

        teller++;
    }
}

function slettBilletter(){
    billettArray = [];
    let alleBillettene = document.getElementById("alleBillettene");
    alleBillettene.innerHTML = "";

}