packet RtPacket;
@version 1.0.0
@author bc2098

class RtObjectClass {
    arrayVar: string = [];
    mapVar: object = {};

    constructor() {
        for(let i = 0; i < 50; i++) {
            this.arrayVar.push("Item "+i);

            this.mapVar[i.toString()] = "Item "+i;
        }
    }
}
