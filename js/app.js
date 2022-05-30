// @ts-nocheck
// Generare una griglia di gioco quadrata , in cui ogni cella contiene un numero incrementale tra quelli compresi tra 1 e 100
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
//------------------------------------------------------------------------------------------------------------------------------
// JS-CAMPOMINATO-DOM
//Il computer deve generare 16 numeri casuali compresi nel range della griglia: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l’utente clicca su una cella:
// se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina,
// altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

const gridContainer = document.querySelector(".gridContainer");
const gridNumbers = [];
let gameOver = false;
score = 0;

// Creo una funzione con cui andrò a generare la lista delle bombe
function generaListaBombe(number) {
    const listaBombe = [];

    do {
        const numeroRandom = Math.floor(Math.random() * number) + 1;

        if (!listaBombe.includes(numeroRandom)) {
            listaBombe.push(numeroRandom);
        }

    } while (listaBombe.length < 16);

    return listaBombe;
};

function stopGame (){
    alert (`Hai ottenuto ${score} punti`);
    
}

// Creo una funzione per generare la griglia 8*8
function createGrid(Hcells, VCells) {
    const totalCells = Hcells * VCells;


    const listaBombe = generaListaBombe(totalCells)
    console.log(listaBombe);

    stampaGriglia(totalCells, listaBombe);

    console.log(totalCells);


    //Uso un ciclo per creare le celle

    for (let i = 1; i <= totalCells; i++) {

        // Creo un div con create element per rappresentare una singola cella
        const cell = document.createElement('div');

        // Aggiungo la classe cell ai div 
        cell.classList.add("cell");

        // Appendo la cella al container per quante volte lo indicherà il ciclo
        gridContainer.append(cell);

        // Creo lo stile per la griglia
        gridContainer.style.width = `calc(var(--cell-size)* ${Hcells})`;

        // Stampo il numero incrementale per ogni cella
        cell.innerHTML = `<span>${i}</span>`;

        //Con Dataset creo un attributo che conterrà il numero della cella
        cell.dataset.index = i;

        // Creo l'evento click all'interno di ogni cella
        cell.addEventListener("click", function () {

           if(this.classList.contains("bomba")|| 
           this.classList.contains("backgroundBlue") ||
           gameOver
           
           ) {
               return;
           }
           
           
           
            const cellIndex = +this.dataset.index

            //Controllo che il nuemro della cella cliccata sia nell'array lista bombe
            if (!listaBombe.includes(cellIndex)) {
                cell.classList.add("backgroundBlue");
                score++
                console.log("cella", cellIndex);
                ;
            } else {
                cell.classList.add("bomba")
                gameOver = true;

                stopGame()
               
              
            }
            console.log("cella", cellIndex)

        });



    };


    function stampaGriglia(cells, listaBombe) {

    }

};
createGrid(8, 8); 