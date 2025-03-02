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

// a kert segedfuggvenyek

/**
 * label elem letrehozasa
 * @param {string} forAttributes input elem azonositoja amire mutat a label
 * @param {string} text a label szovege
 * @returns {HTMLLabelElement} kesz label elem
 */
function createLabel(forAttribute, text) { // label elem letrehozasa
    const label = document.createElement('label'); // label elem letrehozasa
    label.htmlFor = forAttribute; // for beallitasa
    label.textContent = text; // szoveg beallitasa
    return label; // visszaadja a letrehozott elemet
}

/**
 * input elem letrehozasa
 * @param {string} id input elem azonosit o
 * @param {string} name input elem name attributuma
 * @returns {HTMLInputElement} kesz input elem
 */
function createInput(id, name) { // input elem letrehozasa
    const input = document.createElement('input'); // input elem letrehozasa
    input.type = 'text'; // tipus beallitasa
    input.id = id; // id beallitasa
    input.name = name; // nev beallitasa
    return input; // visszaadja a letrehozott elemet
}

/**
 * hibauzenet div letrehozasa
 * @param {string} id hibauzenet div azonositoja
 * @returns {HTMLDivElement} kesz hibauzenet div
 */
function createErrorDiv(id) { // hibauzenet div letrehozasa
    const div = document.createElement('div'); // div elem letrehozasa
    div.id = id; // id beallitasa
    div.className = 'error'; // class beallitasa
    return div; // visszaadja a letrehozott elemet
}

/**
 * komplett form mezo letrehozasa
 * @param {string} id a mezo azonositoja
 * @param {string} labelText a cimke szovege
 * @returns {HTMLDivElement} kesz form mezo container elem
 */
function createFormMezo(id, labelText) {
    const container = document.createElement('div'); // div elem letrehozasa a mezonek
    
    // label
    const label = createLabel(id, labelText); // label letrehozasa a createLabelel
    container.appendChild(label); // label hozzaadasa a containerhez
    container.appendChild(document.createElement('br')); // sortores hozzaadasa
    
    // input
    const input = createInput(id); // input letrehozasa a createInputtal
    container.appendChild(input); // input hozzaadasa a containerhez
    container.appendChild(document.createElement('br')); // sortores hozzaadasa
    container.appendChild(document.createElement('br')); // masodik sortores hozzaadasa
    
    // errordiv
    const errorDiv = createErrorDiv(id + '-error'); // errorDiv letrehozasa a createErrorDivel
    container.appendChild(errorDiv); // errorDiv hozzaadasa a containerhez
    container.appendChild(document.createElement('br')); // sortores hozzaadasa
    
    return container; // visszaadja a letrehozott mezot
}

/**
 * gomb (szab)
 * gomb elem a form szamara
 * @param {string} text a gomb szoveg
 * @returns {HTMLButtonElement} kesz gomb elem
 */
function createFormGomb(text) {
    const gomb = document.createElement('button'); // button elem letrehozasa
    gomb.textContent = text; // szoveg beallitasa
    return gomb; // visszaadja a letrehozott elemet
}

/**
 * input mezo erteke kitoltott vagy nem
 * @param {string} inputElem ellenorizendo input mezo ertek
 * @param {string} errorId hibauzenet id
 * @param {string} errorMessage megjelenites esetere a hibauzenet
 * @returns {boolean} igaz ha kitoltott hamis hanem
 */
function validateField(inputElem, errorId, errorMessage) { // validacios fuggveny definialasa
    let valid = true; // lokalis valid valtozo igaz ertekre allitasa
    if (inputElem === '') { // ha az input mezo ures
        const errorElement = document.getElementById(errorId); // hibauzenet elem kivalasztasa id alapjan
        if (errorElement) { // ha van ilyen hibauzenet elem 
            errorElement.innerHTML = errorMessage; // hibauzenet beallitasa
        }
        valid = false; // valid valtozo hamisra allitasa
    }
    return valid; // valid valtozo ertekenek visszaadasa
}

/**
 * masodik harcos es hadero ellenorzese
 * @param {string} harcolo2Ertek masodik hacrolo mezoje
 * @param {string} hadero2Ertek masodik hadero mezoje
 * @returns {boolean} igaz ha mindketto kitoltott vagy mindketto ures de hamis egyebkent
 */
function validateHarcosok(harcolo2Ertek, hadero2Ertek) { // validacios fuggveny definialasa
    let valid = true; // valid valtozo igaz ertekre allitasa
    if (harcolo2Ertek !== '' && hadero2Ertek === '') { // ha a harcolo2 kitöltött de a hadero2 üres
        document.getElementById('hadero2-error').innerHTML = 'A 2. fél haderejének megadása kötelező'; // hibauzenet elem lekerese es maga a hibauzenet megadasa
        valid = false; // valid valtozo hamisra allitasa
    }

    if (harcolo2Ertek === '' && hadero2Ertek !== '') { // ha a harcolo2 üres de a hadero2 kitöltött
        document.getElementById('harcolo2-error').innerHTML = 'A 2. szembenálló fél megadása kötelező!'; // hibauzenet elem lekerese es maga a hibauzenet megadasa
        valid = false; // valid valtozo hamisra allitasa
    }
    return valid; // valid valtozo ertekenek visszaadasa
}

/**
 * tablazat fejlec generalas
 * @param {HTMLTableElement} table table a tablazat elem
 * @param {Array} adatok az adatokat tartalmazo tomb
 */
function renderTableHeader(table, adatok) { // fejlec fuggveny definialasa
    const colgroup = document.createElement('colgroup'); // colgroup elem letrehozasa
    table.appendChild(colgroup); // hozzafuzes a tablazathoz

    const col1 = document.createElement('col'); // col1 elem letrehozasa
    col1.className = 'columns'; // osztaly beallitas
    colgroup.appendChild(col1); // hozzafuzes a colgrouphoz

    const col2 = document.createElement('col'); // col2 elem letrehozasa
    colgroup.appendChild(col2); // hozzafuzes a colgrouphoz

    const col3 = document.createElement('col'); // col3 elem letrehozasa (hupsz)
    col3.className = 'columns'; // osztaly beallitas
    colgroup.appendChild(col3); // hozzafuzes a colgrouphoz
    
    // fejlec letrehozasa
    const fejlec = document.createElement('thead'); // thead letrehozasa a tablazat fejlecehez
    table.appendChild(fejlec); // fejlec hozzafuzese a tablazathoz
    
    const fejlecSor = document.createElement('tr'); // tr elem letrehozasa a fejlec sorahoz
    fejlec.appendChild(fejlecSor); // sor hozzafuzese a fejlechez

    const fejlecOszlopok = [ // fejlec oszlopok definialasa
        { nev: 'harc_nev', szoveg: adatok[0].harc_nev}, // elso oszlop definialasa
        { nev: 'harcolo1', szoveg: adatok[0].harcolo1}, // masodik oszlop definialasa
        { nev: 'hadero1', szoveg: adatok[0].hadero1} // harmadik oszlop definialasa
    ];
    for (const oszlop of fejlecOszlopok) { // vegigiteralas az oszlopokon
        const fejlecCella = document.createElement('th'); // th elem letrehozasa a fejlec cellahoz
        fejlecCella.innerHTML = oszlop.szoveg; // cella tartalmanak beallitasa
        fejlecSor.appendChild(fejlecCella); // cella hozzafuzese a fejlec sorhoz
    }
}

/**
 * teljes tablazat
 * @param {Array} adatok adatokat tombje
 */
function renderMenu(adatok) {
    const table = document.createElement('table'); // table elem letrehozasa
    menuContainer.appendChild(table); // hozzafuzes a menuContainer-hez
    
    renderTableHeader(table, adatok); // fejlec fuggveny hivas adatokkal

    // torzs
    const torzs = document.createElement('tbody'); // tbody elem letrehozasa a tablazat torzsehez
    table.appendChild(torzs); // torzs hozzafuzese a tablazathoz

    // sorok
    for (let i = 1; i < adatok.length; i++) { // vegigiteralok az adatokon, az elso elemet kihagyva
        const currentElement = adatok[i]; // az aktualis elem elmentese

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

/**
 * teljes form letrehozasa
 * @returns {HTMLFormElement} kesz form elem
 */
function createForm() { // form letrehozasa
    const form = document.createElement('form'); // form elem letrehozasa
    form.id = 'form'; // id beallitasa
    form.action = '#'; // action beallitasa
    
    const mezok = [ // mezok definialasa egy tombben
        { id: 'harc_nev', label: ' Harc megnevezése:' }, // elso mezo
        { id: 'harcolo1', label: ' 1. Harcoló fél:' }, // masodik mezo
        { id: 'hadero1', label: ' 1. Haderő:' }, // harmadik mezo
        { id: 'harcolo2', label: ' 2. Harcoló fél:' }, // negyedik mezo
        { id: 'hadero2', label: ' 2. Haderő:' } // otodik mezo
    ];
    
    for (const mezo of mezok) { // vegigiteralas a mezokon
        const formMezo = createFormMezo(mezo.id, mezo.label); // mezo letrehozasa
        form.appendChild(formMezo); // mezo hozzaadasa a formhoz
    }
    
    // submit gomb(szab)
    const button = createFormGomb('Hozzáadás'); // gomb letrehozasa
    form.appendChild(button); // gomb hozzaadasa a formhoz
    
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
    
        if (!validateField(harcnevErtek, 'harc_nev-error', 'A harc megnevezése kötelező!')) { // hivatkozok a validacios fuggvenyre
            valid = false; // validacios valtozo hamisra allitasa
        }

        if (!validateField(harcolo1Ertek, 'harcolo1-error', 'Az 1. szembenálló fél megadása kötelező!')) { // hivatkozok a validacios fuggvenyre
            valid = false; // validacios valtozo hamisra allitasa
        }
    
        if (!validateField(hadero1Ertek, 'hadero1-error', 'Az 1. fél haderejének megadása kötelező!')) { // hivatkozok a validacios fuggvenyre
            valid = false; // validacios valtozo hamisra allitasa
        }

        if (!validateHarcosok(harcolo2Ertek, hadero2Ertek)) { // hivatkozok a validacios fuggvenyre
            valid = false; // validacios valtozo hamisra all
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
            menuContainer.innerHTML = ''; // menuContainer tartalmanak torlese
            renderMenu(array); // tablazat ujrarajzolasa
            thisForm.reset(); // form resetelese
        }
    });

    return form; // visszaadja a letrehozott formot
}
const formElem = createForm(); // formelem letrehozasa a createForm-al
document.body.insertBefore(formElem, menuContainer); // hozzafuzess a bodyhoz
renderMenu(array); // kezdeti render de persze atadva az arrayt