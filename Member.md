# Поле класса
При описании класса задаются поля, которые подразделяются на:


- [Поля данных](#поля-данных)
- [Поле содежит вложенный подобъект](#поля-данных)
- [Поле содержит список объектов]


Общий формат описания поля:

*@tags*

[*название_поля**] : [*тип_поля*] = [*значение_по_умолчанию*];

Название поля является обязательным.

Если не задано значение по-умолчанию, поле будет содержать значение null после создания

Если не задан тип поля - используется тип var

Пример:

```jsx
field0: string;
field1: var;
field2;
field3: MyTestObject;

```

### Поля данных

Поля могут быть следющих типов:

* boolean, bool 
- int, integer, int32
- int8, int16, int32, int64 
- uint8, uint16, uint32, uint64
- float
- double

- string
- bytearray
- date
- time
- datetime
- timeperiod
- file
- json
- script
- idobject
- var

Примеры задания значений по-умолчанию для полей разных типов:

```javaScript
class MyObjectType  {

    enabled: boolean = true; // false
    name: string = "MyObject";  
    counter: int = 1; 
    value: double = 0.145;
    mask: int64 = 0xFFAA000000;
  

}
```

### Поля, содержащие вложенные объекты




### Поля, содержащие списки объектов