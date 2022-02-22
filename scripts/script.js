function CreateGrid(){
    let num1;
    // do {
    //     num1= prompt('enter number of cell between 1 and 100','')
    // } while (num1 < 1 || num1 > 100);

    
    // let num=Number(num1);
    let num =20;
    const boardWidth =500;
    const boardheight = 350; 

    const board= document.querySelector('.board');
    board.style.width= `${boardWidth}px`;
    board.style.height= `${boardheight}px`;

    const lineWidth = boardWidth;
    const lineHeight = `${boardheight}`;
    
    for (let index = 0; index < num; index++) {

        let container = document.createElement('div');
        container.classList.add('container');
        container.style.width=`${lineWidth}px`;
        container.style.height=`${lineHeight/num}px`;
        board.appendChild(container)

        for (let index = 0; index < num; index++) {

            let div = document.createElement('div');        
            //div.textContent = index+1;
            div.style.height=`${lineHeight/num}px`;
            div.style.width=`${lineWidth /num}px`;
            div.classList.add('rectangle');
            container.appendChild(div)
        }
    }
}

function PaintSelectedCells(item){
    item.target.classList.add('passed');
}
CreateGrid()

const divs = document.querySelectorAll('.rectangle');

divs.forEach( div => {
    div.addEventListener('mouseover',PaintSelectedCells)
});

function EraseBackground(){
    divs.forEach( div => {
        div.classList.remove('passed');
    })
    CreateGrid()
}

const erase= document.querySelector('.erase');
erase.addEventListener('click',EraseBackground);






    