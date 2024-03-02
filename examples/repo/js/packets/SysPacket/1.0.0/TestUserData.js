@dbo
packet SysPacket;
import TestBasePacket;

@version 1.0.0
@author bc2098 

class TestUserData {
    firstName: string;
    latName: string;

    objectField: TestBaseType2 = TestBaseType2;
}