
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
        const cellFilm = row.insertCell(0);
        const cellAntall = row.insertCell(1);
        const cellFnavn = row.insertCell(2);
        const cellEnavn = row.insertCell(3);
        const cellTlfnr = row.insertCell(4);
        const cellMail = row.insertCell(5);

        billettArray.push(billett);

        cellFilm.innerHTML = billettArray[teller].film;
        cellAntall.innerHTML = billettArray[teller].ant;
        cellFnavn.innerHTML = billettArray[teller].fnavn;
        cellEnavn.innerHTML = billettArray[teller].enavn;
        cellTlfnr.innerHTML = billettArray[teller].tlfnr;
        cellMail.innerHTML = billettArray[teller].mail;

        form.reset();

        teller++;
    }
}

function slettBilletter(){
    billettArray = [];
    let alleBillettene = document.getElementById("alleBillettene");
    alleBillettene.innerHTML = "";

}