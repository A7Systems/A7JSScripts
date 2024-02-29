# Метод класса
Внутри класса можно определять функции(методы), которые используются с объектом данного класса.


```javaScript
class MyObjectType  {

    name: string = "MyObject";  
    counter: int = 1; 
    static MaxCounter: int = 100; 

    print(){
        console.log('name: ', this.name);
    }

    incCounter() {
        counter++;
        if (counter > MyObjectType.MaxCounter) {
            counter=0;
        }
        return counter;
    }
}
```

Для обращения внутри методов к полям и другим методам класса может применяеться ключевое слово **`this`**, которое указывает на текущий объект этого класса. 

К статическим полям можно обращаться через название типа, например **`MyObjectType.MaxCounter`** 

## Параметры и возвращаемое значение

В функцию могут передаваться параметры, как обычные значения, так и объекты и ссылки на списки, ссылки на поля объекта:


```javaScript
class MyObjectType  {

    func1(value1, obj, list){
        // check args
        // ...
        console.log('args: ', value1, obj.id, list.count());
    }

}
```

Функция может вернуть значение и передать его в вызывающую функцию:


```javaScript
class MyObjectType  {

    func1(){
        return 41;
    }

    func2(){
        console.log( func1() + 1 );
    }

}
```

## Конструкторы

Классы имеют специальные функции - конструкторы, которые определяются с помощью ключевого слова **`constructor`** . 
Конструкторы выполняют начальную инициализацию объекта. 


```javaScript
class MyObjectType  {

    name: string;  

    constructor(strValue){
        this.name = strValue;
    }

}

var obj = new MyObjectType("name");

```

## Методы - триггеры

Триггеры - методы, которые вызываются автоматически при определенных событиях. 
События могут быть:

- изменение определенного поля объекта. Можно задать триггер,который сработает до изменения и/или после изменения (**`@after`**, **`@before`**)
- при создании и удалении объекта (constructor, **`@remove`**)
- при запуске и остановке сервера (**`@afterstart`**, **`@beforeshutdown`**)
- при наличии или отсутствии подписки на объект (**`@subscribe`**)



## Таймеры

> :warning: ***Устарели. К использованию не рекомендуются***

Функции могут вызываться автоматически через равные промежутки времени по таймеру.
Функция вызывается для всех существующих объектов данного типа.
Для настройки таймерной функции необходимо указать тэг **`@timer`**, **`@period`** и дополнительный **`@pulse`**


> Существуют также runTime-объекты [A7Timer](), с помощью которых вызвать срабатывание функции через определенный интервал времени. 

## Тэги и спецификаторы методов

**`@after <имя-поля>`**  - тэг для функции-триггера, который срабатывает после изменения поля объекта

```javaScript
    @after name
    afterFunc() {
        console.log('Inside after trigger: ', name);
    }
```

**`@before <имя-поля>`** - тэг для функции-триггера,который вызывается перед изменением поля *[имя-поля]* объекта. В этом триггере можно запретить это изменение. 
В триггер передается специальный скрытый параметр value, который равен новому значению. Функция должна вернуть **false**, если изменение запрещено и **true**, если разрешено.


```javaScript
    @before fieldnumber
    beforeFunc() {
        console.log('Inside before trigger, value: ', 
            value, 'fieldnumber: ', fieldnumber);

        if (value >100 || value <0) {
            console.log('Value is forbidden', value);

            return false;
        }
        console.log('Value is enabled', value);
        return true;
    }
```

**`@afterstart`** - тэг для функции-триггера,которая автоматически вызывается для всех объектов после запуска сервера

**`@beforeshutdown`** - тэг для функции-триггера,которая автоматически вызывается для всех объектов перед остановкой сервера

**`@timer`** - тэг для таймерной функции

**`@period <количество мс>`** - период срабатывания таймера, в миллисекундах или в виде объекта

```javaScript
// timer period:  5.5 seconds
@period:'{ms:500, s: 5}'  

```
- ms - количество миллисекунд
- s - секунды
- m - минуты
- h - часы
- d - дни
- M - месяцы


**`@pulse [параметр]`** - задает выравнивание срабатывания таймера по определнной миллисекунде (ms), секунде(s) и часу (h)

```javaScript
    @timer
    @period 10000
    @pulse:'{ms:0}'
    testTimerFunction() {
        console.log('inside timer function', this.id, this.typename );
    }
    
```

В примере таймер будет срабатывать через каждые 10 секунд, в нулевую миллисекунду.

**`@remove`** - функция срабатывает при удалении объекта

```javaScript
    @remove
    removeTrigger() {
        parent.removeChildHandler(this);
    }
```

**`@subscribe`** - функция срабатывает, если клиент подписывается на объект, а до этого подписок не было, или, наоборот, при удалении последней подписки на объект
