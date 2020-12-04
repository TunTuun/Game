import {Stone} from '../Classes/Stone'
export let initStones = function() {
    const cellList = Array.from(document.getElementsByClassName('play-field__cell')); 
    cellList.forEach(cell => {
        const stoneData = new Stone(cell.getAttribute('x'), cell.getAttribute('y'));
        const stone = document.createElement('div');
        stone.classList.add('stone');
        stone.classList.add('stone_color_' + stoneData.type)
        cell.append(stone)
    })
}