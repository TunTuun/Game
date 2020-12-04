import { typeAmmount } from '../Const/const'
export class Stone {
    constructor(cordX, cordY) {
        this.cordX = cordX;
        this.cordY = cordY;
        this.type = this.randomiseType();
    }
    randomiseType() {
        const type = Math.floor(1 + Math.random() * (typeAmmount));
        switch (type) {
            case 1:
                return "crimson";
            case 2:
                return "limegreen";
            case 3:
                return "orange";
            case 4:
                return "turquoise";
            case 5:
                return "blue";
            case 6:
                return "violet";
            case 7:
                return "sienna";
            default:
                console.log("Неверное количество типов камней!")
                return "Undefined type of stone"
        }
    }
}