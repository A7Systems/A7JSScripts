packet SysPacket;
packet TestMyPacket;

@version 1.0
@author bc2098

class TestSpaceApp {
    nameField: string = "TestSpaceApp"
    nameChangeCount: int = 0;

    objectField: TestDerived = TestDerived;

    printName() {
        console.log(this.nameField);
        this.nameChangeCount++;
    }
}
