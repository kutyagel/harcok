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
const formElem = createForm(); // formelem letrehozasa a createForm-al
document.body.insertBefore(formElem, menuContainer); // hozzafuzess a bodyhoz
renderMenu(array); // kezdeti render de persze atadva az arrayt