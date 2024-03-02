@dbo
packet SysCplxPacket;
packet TestMyPacket;
packet RtPacket;

@version 1.0
@author bc2098

class CplxSpaceApp {
    nameField: string = "CplxSpaceApp"
    nameChangeCount: int = 0;

    objectField: TestDerived = TestDerived;

    rtStringField: string;
    rtObjectField: object;

    constructor() {
        this.rtObjectField = new RtObjectClass();
    }

    printName() {
        console.log(this.nameField);
        this.nameChangeCount++;
    }

    applySource() {
        if(!this.rtStringField) {
            console.log("RT source is empty!");
            return;
        }

        if(this.rtObjectField) {
            this.rtObjectField = null;
        }

        this.rtObjectField = eval(this.rtStringField);
    }

    getValueFromRt(idx) {
        if(!this.rtObjectField) {
            console.log("rtObjectFeld is empty");
            return null;
        }

        return this.rtObjectField.arrayVar[idx];
    }
}
