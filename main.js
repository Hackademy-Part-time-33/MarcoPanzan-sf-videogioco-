/* let num = 2
for (let i = 2; i <= 10; i++) {
    let tot = num * i;
    console.log(`${num} x ${i} = ${tot}`);
}

*/
// Stampa i numeri pari e calcola la media dei numeri dispari
/* let sommaDispari = 0;
let conteggioDispari = 0;

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
    else {
        sommaDispari = sommaDispari + i;
        conteggioDispari++;
    }
}
console.log(`la somma dispari è ${sommaDispari}`)
console.log(`il conteggio dispari è ${conteggioDispari}`)
var mediaDispari = sommaDispari / conteggioDispari;
console.log(`\nMedia dei numeri dispari: ${mediaDispari}`);
*/

/* Traccia 3:
Scrivi un programma che simuli un distributore di bevande e che rispetti i seguenti passaggi:
l’utente deve poter inserire un numero
in console dev’essere stampato il messaggio del distributore
se inserisce 1, seleziona acqua e quindi stampare in console: “E’ stata selezionata l’acqua”
se inserisce 2, seleziona coca cola e quindi stampare in console: “E’ stata selezionata coca cola”
se inserisce 3, seleziona birra e quindi stampare in console: “E’ stata selezionata birra”
se inserisce qualcosa di diverso, il programma dovra’ riproporre automaticamente la domanda di partenza */

/* let sel = prompt(`Selona la Bevanda \n (1) acqua \n (2) coca cola \n (3) Birra`);
while (sel != 1 && sel != 2 && sel != 3) {
    sel = prompt(`Selona la Bevanda \n (1) acqua \n (2) coca cola \n (3) Birra`);
}

if (sel == 1) {
    console.log(`é stata selezionata l' acqua`)
}
else if (sel == 2) {
    console.log(`è stata selezionata Coca Cola`);
}
else if (sel == 3) {
    console.log(`è stata selezionata la birra`);
} */





/* Sviluppare un programma che simuli il gioco di Mario Bros! Usate un po' di immaginazione! 😎 */
let startGame = prompt(`Sei pronto? \n (1) Inizia la partita \n (2) Esci dal gioco`);
let life = 3;

while (startGame != '1' && startGame != '2') {
    startGame = prompt(`Sei pronto ?\n(1) Inizia la partita \n(2) Esci dal gioco`);
}

// Preme tasto 1
if (startGame == '1') {
    alert(`Buona partita`);
    let enemy = prompt(`Attento c'e' un nemico! Premi: \n(1) Salta e corri \n(2) Salta sopra al nemico ed eliminalo`);
    switch (enemy) {
        case '1':
            alert(`C'e' mancato poco! Sei riuscito a schivare il primo nemico.`);
            break;
        case '2':
            alert(`WOW! Bravissimo! L'hai fatto fuori! Continua cosi'`);
            break;
        default:
            alert(`Peccato sei troppo lento...GAME OVER! Hai perso, rigioca`)
            life = 0
            break;
    }
    if (life == 0) {
        alert(`Sei morto`)
    }
    let scelta2 = prompt(`Una tartaruga minacciosa ti corre contro ! \n(1)saltale in testa  \n(2imbocca il tubo sotto di te ) \n(3)ti ti paralizzi dalla paura `)
    switch (scelta2) {
        case '1':
            alert(`Tartaruga sconfitta!`)
            break;
        case '2':
            alert(`Hai trovato una caverna piena di monete\ alla fine della caverna trovi un tubo per la risalita e la tartaruga perde le tue tracce`);
            break;
        case '3':
            alert(`La tartaruga ti ha colpito! (hai perso una vita)`);
            life = life - 1
            break;
        default:
            break;
    }
    alert(`tutorial completato, hai ancora ${life} vite `)

    if (life == 0) {
        alert(`GAME OVER`)
    }
    else {
        let scelta3 = prompt(`Broswer sta rapendo peach che vuoi fare ?\ \n(1)affronta subito broswer  \n(2)aspetta e seguilo `)
        switch (scelta3) {
            case '1': alert(`broswer e troppo forte per te ora ! (pippa al sugo)`)
                life = 0
                break;
            case '2': let scelta4 = prompt(`browser si è accorto che lo sta seguendo e gli ti manda i suoi scagnozzi! \n(1) li affronti \n(2)scappi `)
                switch (scelta4) {
                    case '1': alert(`a colpi di salti in testa sconfiggi tutti e sei PIU GRANDE!`)
                        let scelta5 = prompt(`LA BATTAGLIA FINALE \ ora ti sei potenziato riuscirai a sconfiggere broswer?\ \n(1)Prova a saltagli in testa \n(2)saltando rompi un mattoncino`)
                        switch (scelta5) {
                            case '1':
                                alert(`Browser è troppo forte per essere sconfitto in questo modo`)
                                break;
                            case '2': alert(`trovi il potenziamento stella e finalmente riesci a sconfiggere broswer`)
                                alert(`COMPLIMENTI PEACH e' TUA`)
                                break;
                            default:
                                break;
                        }

                        break;
                    case '2': alert(`sono troppo veloci per fuggire, ti massacrano`)
                        life = 0
                        break;

                    default:
                        break;
                }
            default:
                break;
        }

    }

} else { // Preme 2
    alert(`Sei uscito dal gioco! Mi spiace che tu non voglia giocare oggi!`);
}

