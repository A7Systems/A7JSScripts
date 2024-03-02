@version 1.0.0
@author bc2098

class RtObjectClass {
    arrayVar: string = [];

    constructor() {
        for(let i = 0; i < 50; i++) {
            this.arrayVar.push("Item "+i);
        }
    }
}
