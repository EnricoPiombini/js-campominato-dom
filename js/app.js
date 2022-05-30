// @ts-nocheck
// Generare una griglia di gioco quadrata , in cui ogni cella contiene un numero incrementale tra quelli compresi tra 1 e 100
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

const gridContainer = document.querySelector(".gridContainer");
const gridNumbers = [];
// Creo una funzione per generare la griglia 10*10

function createGrid(Hcells, VCells) {
    const totalCells = Hcells * VCells;
    console.log(totalCells);


    //Uso un ciclo per creare le celle

    for (let i = 1; i <= totalCells; i++) {
        // Creo un div con create element per rappresentare una singola cella
        const cell = document.createElement('div');

        cell.classList.add("cell");

        gridContainer.style.width = `calc(var(--cell-size)* ${Hcells})`;

        cell.innerHTML = `<span>${i}</span>`;

        cell.addEventListener("click", function () {

            console.log("hai cliccato il numero", this.innerText);

            const numero = parseInt(this.innerText);
            if (numero >= i) {
                this.classList.add("backgroundBlue");

            }

        });

        gridContainer.append(cell);
    };
};

createGrid(10, 10); 