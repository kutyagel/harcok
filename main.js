const array = [ // tomb letrehozasa
    { // tomb elso elemenek letrehozasa
        harc_nev: "Harc megnevezése", // elso elem harc_nev tulajdonsaganak erteke
        harcolo1: "Szembenálló felek", // elso elem harcolo1 tulajdonsaganak erteke
        hadero1: "Haderő" // elso elem hadero1 tulajdonsaganak erteke
    },
    { // tomb masodik elemenek letrehozasa
        harc_nev: 'Rákóczi szabadságharc', // masodik elem harc_nev tulajdonsaganak erteke
        harcolo1: 'Kuruc', // masodik elem harcolo1 tulajdonsaganak erteke
        hadero1: '70.000', // masodik elem hadero1 tulajdonsaganak erteke
        harcolo2: 'Labanc', // masodik elem harcolo2 tulajdonsaganak erteke
        hadero2: '60.000' // masodik elem hadero2 tulajdonsaganak erteke
    },
    { // tomb harmadik elemenek letrehozasa
        harc_nev: '48-as szabadságharc', // harmadik elem harc_nev tulajdonsaganak erteke
        harcolo1: 'Osztrák császárság (+ Orosz birodalom)', // harmadik elem harcolo1 tulajdonsaganak erteke
        hadero1: '170.000 (+ 200.000)', // harmadik elem hadero1 tulajdonsaganak erteke
        harcolo2: 'Magyar királyság', // masodik elem harcolo2 tulajdonsaganak erteke
        hadero2: '170.000' // masodik elem hadero2 tulajdonsaganak erteke
    },
    { // tomb negyedik elemenek letrehozasa
        harc_nev: 'I. világháború', // negyedik elem harc_nev tulajdonsaganak erteke
        harcolo1: 'Antant', // negyedik elem harcolo1 tulajdonsaganak erteke
        hadero1: '43 millió', // negyedik elem hadero1 tulajdonsaganak erteke
        harcolo2: 'Központi hatalmak', // negyedik elem harcolo2 tulajdonsaganak erteke
        hadero2: '25 millió' // negyedik elem hadero2 tulajdonsaganak erteke
    },
    { // tomb otodik elemenek letrehozasa
        harc_nev: 'Bosworthi csata', // otodik elem harc_nev tulajdonsaganak erteke
        harcolo1: 'Angolok (York + Lancester)', // otodik elem harcolo1 tulajdonsaganak erteke
        hadero1: '15.000', // otodik elem hadero1 tulajdonsaganak erteke
    }
];

const menuContainer = document.createElement('div'); // div elem letrehozasa ami a tartalmazza a tablazatot
document.body.appendChild(menuContainer); // hozzafuzes a bodyhoz

function renderMenu() {
    const table = document.createElement('table'); // table elem letrehozasa
    menuContainer.appendChild(table); // hozzafuzes a menuContainer-hez

    const colgroup = document.createElement('colgroup'); // colgroup elem letrehozasa
    table.appendChild(colgroup); // hozzafuzes a tablazathoz

    const col1 = document.createElement('col'); // col1 elem letrehozasa
    col1.className = 'columns'; // osztaly beallitas
    colgroup.appendChild(col1); // hozzafuzes a colgrouphoz

    const col2 = document.createElement('col'); // col2 elem letrehozasa
    colgroup.appendChild(col2); // hozzafuzes a colgrouphoz

    const col3 = document.createElement('col'); // co3l elem letrehozasa
    col3.className = 'columns'; // osztaly beallitas
    colgroup.appendChild(col3); // hozzafuzes a colgrouphoz
    
    // fejlec letrehozasa
    const fejlec = document.createElement('thead'); // thead letrehozasa a tablazat fejlecehez
    table.appendChild(fejlec); // fejlec hozzafuzese a tablazathoz
    
    const fejlecSor = document.createElement('tr'); // tr elem letrehozasa a fejlec sorahoz
    fejlec.appendChild(fejlecSor); // sor hozzafuzese a fejlechez
    
    const fejlecCella1 = document.createElement('th'); // th elem letrehozasa az elso fejlec cellahoz
    fejlecCella1.innerHTML = array[0].harc_nev; // cella tartalma az elso elem harc_nev tulajdonsaga
    fejlecSor.appendChild(fejlecCella1); // cella hozzafuzese a fejlec sorhoz
    
    const fejlecCella2 = document.createElement('th'); // th elem letrehozasa a masodik fejlec cellahoz
    fejlecCella2.innerHTML = array[0].harcolo1; // cella tartalma az elso elem harcolo1 tulajdonsaga
    fejlecSor.appendChild(fejlecCella2); // cella hozzafuzese a fejlec sorhoz
    
    const fejlecCella3 = document.createElement('th'); // th elem letrehozasa a harmadik fejlec cellahoz
    fejlecCella3.innerHTML = array[0].hadero1; // cella tartalma az elso elem hadero1 tulajdonsaga
    fejlecSor.appendChild(fejlecCella3); // cella hozzafuzese a fejlec sorhoz
    
    // torzs
    const torzs = document.createElement('tbody'); // tbody elem letrehozasa a tablazat torzsehez
    table.appendChild(torzs); // torzs hozzafuzese a tablazathoz

    // sorok
    for (let i = 1; i < array.length; i++) { // vegigiteralok az arrayen, az elso elemet kihagyva
        const currentElement = array[i]; // az aktualis elem elmentese

        const sor1 = document.createElement('tr'); // tr elem letrehozasa az uj sorhoz
        torzs.appendChild(sor1); // sor hozzafuzese a torzshoz

        const harcnevCella = document.createElement('td'); // td elem letrehozasa a harc_nev cellahoz
        harcnevCella.innerHTML = currentElement.harc_nev; // cella tartalma az aktualis elem harc_nev tulajdonsaga
        if (currentElement.harcolo2) { // ha van masodik harcolo
            harcnevCella.rowSpan = 2; // a cella osszevonasa ket sorra
        }
        sor1.appendChild(harcnevCella); // cella hozzafuzese a sorhoz

        const harcolo1Cella = document.createElement('td'); // td elem letrehozasa a harcolo1 cellahoz
        harcolo1Cella.innerHTML = currentElement.harcolo1; // cella tartalma az aktualis elem harcolo1 tulajdonsaga
        sor1.appendChild(harcolo1Cella); // cella hozzafuzese a sorhoz

        const hadero1Cella = document.createElement('td'); // td elem letrehozasa a hadero1 cellahoz
        hadero1Cella.innerHTML = currentElement.hadero1; // cella tartalma az aktualis elem hadero1 tulajdonsaga
        sor1.appendChild(hadero1Cella); // cella hozzafuzese a sorhoz
        
        if (currentElement.harcolo2) { // ha van masodik harcolo
            const sor2 = document.createElement('tr'); // tr elem letrehozasa a masodik sorhoz
            torzs.appendChild(sor2); // sor hozzafuzese a torzshoz
            
            const harcolo2Cella = document.createElement('td'); // td elem letrehozasa a harcolo2 cellahoz
            harcolo2Cella.innerHTML = currentElement.harcolo2; // cella tartalma az aktualis elem harcolo2 tulajdonsaga
            sor2.appendChild(harcolo2Cella); // cella hozzafuzese a sorhoz
            
            const hadero2Cella = document.createElement('td'); // td elem letrehozasa a hadero2 cellahoz
            hadero2Cella.innerHTML = currentElement.hadero2; // cella tartalma az aktualis elem hadero2 tulajdonsaga
            sor2.appendChild(hadero2Cella); // cella hozzafuzese a sorhoz
        }
    }
}

renderMenu(); // kezdeti render

const form = document.getElementById('form'); // form elem lekerese ami a form idval van definialva

form.addEventListener('submit', function(e) {
    e.preventDefault(); // alapertelmezett esemeny megakadalyozasa
    
    const harcnevElem = document.getElementById('harc_nev'); // harc_nev input elem lekerese
    const harcolo1Elem = document.getElementById('harcolo1'); // harcolo1 input elem lekerese
    const hadero1Elem = document.getElementById('hadero1'); // hadero1 input elem lekerese
    const harcolo2Elem = document.getElementById('harcolo2'); // harcolo2 input elem lekerese
    const hadero2Elem = document.getElementById('hadero2'); // hadero2 input elem lekerese
    
    const thisForm = e.currentTarget; // az aktualis form elmentese
    const errorHtmlElements = thisForm.getElementsByClassName('error'); // hibauzenetek elemek lekerese
    for (const errorElement of errorHtmlElements) { // vegigmegy az osszes error elemen
        errorElement.innerHTML = ''; // az errorElement tartalmat uresre allitja
    }

    const harcnevErtek = harcnevElem.value; // harc_nev input ertekenek kiolvasasa
    const harcolo1Ertek = harcolo1Elem.value; // harcolo1 input ertekenek kiolvasasa
    const hadero1Ertek = hadero1Elem.value; // hadero1 input ertekenek kiolvasasa
    const harcolo2Ertek = harcolo2Elem.value; // harcolo2 input ertekenek kiolvasasa
    const hadero2Ertek = hadero2Elem.value; // hadero2 input ertekenek kiolvasasa
    
    let valid = true; // validacios valtozo kezdeti ertekre allitasa
    
    if (harcnevErtek === '') { // ellenorzes, hogy a harc_nev ures-e
        const harcnevError = document.getElementById('harcnev-error'); // harc_nev hibauzenet elem lekerese
        harcnevError.innerHTML = 'A harc megnevezése kötelező!'; // hibauzenet beallitasa
        valid = false; // validacios valtozo hamisra allitasa
    }
    
    if (harcolo1Ertek === '') { // ellenorzes, hogy a harcolo1 ures-e
        const harcolo1Error = document.getElementById('harcolo1-error'); // harcolo1 hibauzenet elem lekerese
        harcolo1Error.innerHTML = 'Az 1. szembenálló fél megadása kötelező!'; // hibauzenet beallitasa
        valid = false; // validacios valtozo hamisra allitasa
    }
    
    if (hadero1Ertek === '') { // ellenorzes, hogy a hadero1 ures-e
        const hadero1Error = document.getElementById('hadero1-error'); // hadero1 hibauzenet elem lekerese
        hadero1Error.innerHTML = 'Az 1. fél haderejének megadása kötelező!'; // hibauzenet beallitasa
        valid = false; // validacios valtozo hamisra allitasa
    }
    
    if (harcolo2Ertek !== '' && hadero2Ertek === '') { // ellenorzes, hogy a harcolo2 kitoltott de a hadero2 ures
        const hadero2Error = document.getElementById('hadero2-error'); // hadero2 hibauzenet elem lekerese
        hadero2Error.innerHTML = 'Az 2. fél haderejének megadása kötelező'; // hibauzenet beallitasa
        valid = false; // validacios valtozo hamisra allitasa
    }
    
    if (harcolo2Ertek === '' && hadero2Ertek !== '') { // ellenorzes, hogy a harcolo2 ures de a hadero2 kitoltott
        const harcolo2Error = document.getElementById('harcolo2-error'); // harcolo2 hibauzenet elem lekerese
        harcolo2Error.innerHTML = 'Az 2. szembenálló fél megadása kötelező!'; // hibauzenet beallitasa
        valid = false; // validacios valtozo hamisra allitasa
    }
    
    if (valid) { // ha a valid valtozo meg mindig igaz
        const newElement = { // definialunk egy uj elemet
            harc_nev: harcnevErtek, // az uj objektum harc_nev erteke a harcnevErtek lesz
            harcolo1: harcolo1Ertek, // az uj objektum harcolo1 erteke a harcolo1Ertek lesz
            hadero1: hadero1Ertek, // az uj objektum hadero1 erteke a hadero1Ertek lesz
        };
        
        // ha van masodik harcolo
        if (harcolo2Ertek !== '' && hadero2Ertek !== '') { // ellenorzes, hogy mindket masodik harcolo mezo ki van toltve
            newElement.harcolo2 = harcolo2Ertek; // az uj objektum harcolo2 erteke a harcolo2Ertek lesz
            newElement.hadero2 = hadero2Ertek; // az uj objektum hadero2 erteke a hadero2Ertek lesz
        }
        
        array.push(newElement); // uj elem hozzaadasa a tombhoz
        menuContainer.innerHTML = ''; // tablazat tartalmanak torlese
        renderMenu(); // tablazat ujrarajzolasa
        thisForm.reset(); // form resetelese
    }
});