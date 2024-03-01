packet TestBasePacket;

@version 1.0
@author bc2098

class TestDerived extends TestBaseType1 {
    name: string;
    enabled: boolean = true;

    @override
    nameField: string = "TestDerived";
}
