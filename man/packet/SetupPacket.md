# Описание пакета для установки


Описание находится в файле `initPacket.yaml`, который должен находится в корневой папке пакета.


## Файл initPacket.yaml

В файле initPacket.yaml необходимо описать:

### Название и версию пакета

Содержит основные параметры пакета. 
`name` и `version` являются обязательными.

```YAML
name: TestPacket
version: 1.0.0
author: A7System
description: Simple test packet 
```

### Список подпакетов и классов

В секции `source` описываются входящие в пакет файлы исходных кодов. 
Может содержать подпапки с подпакетами.

```YAML
source:
  mainP1Class:
    path: mainClass.js
  SubPacket1:
    P1Class1:
        path: SubPacket1/P1Class1.js
    P1Class2:
        path: SubPacket1/P1Class2.js
  SubPacket2:
    P2Class1:
        path: SubPacket2/P2Class1.js
    P2Class2:
        path: SubPacket2/P2Class2.js
```


### Плагины

Список плагинов, скомпиллированных под конкретную платформу.
Необязательные параметры - MD5 хэш-сумма.

```YAML
plugins:
  timerPlugin:
    path: linux/x86/libTimerPlugind.so
    hash: 2974100031197931cf398c1bee14ca48

```



### Экстеншены

Список экстеншенов.
Для каждого экстеншена описывается путь к исполняемому файлу, список аргументов командной строки разделенный пробелами и тип объектов, которые обслуживает этот экстеншен. Необязательные параметры - MD5 хэш-сумма

```YAML
extensions:
  sipExtension:
    path: sipExtension
    args: 5060 
    objectType: A7SipDevice
```





### Зависимости

Здесь описываются зависимости пакета от других пакетов.
При установки пакета проверяются эти зависимости и докачиваются недостающие. 
Если другие пакеты входят в ту же конфигурацию и данный пакет может быть использован только внутри этой конфигурации, то эту завиимость можно явно не указывать.



```YAML
dependencies: 
    BasePacket:
        path: github.com/A7Systems/ProjectX/packets/packet1@latest
```

### Аддоны

Дополнительные модули, файлы которые используются для работы с данной конфигурацией. Которые не относятся к коду или плагинам

```YAML
addons: 
    reportTemplate1:
        path: github.com/A7Systems/Project1/reportsAddon/templates/template1@latest


```
