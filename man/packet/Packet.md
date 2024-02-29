# Описание пакета 

Описание пакета после установки. Описание пакета для установки находится в [SetupPacket](./SetupPacket.md)

Описание находится в файле initPacket.yaml, который должен находится в корневой папке пакета.

## Структура каталогов пакета



```
└── src
    └── SubPacket1
        ├── p1class1.js
        ├── p1class2.js
        └── p1class3.js
    └── SubPacket2
        ├── p2class1.js
        ├── p2class2.js
    └── pmainclass.js
└── plugin
    └── timerPlugin
        └── linux
            └── x68x64
                └── a7TimerPlugin.so
└── lib
    └── specialLib
        └── linux
            ├── x68x64
                └── specialLib.so            
└── extensions
    └── extensionName
        └── linux
            └── x68x64
                └── extensionNameBin
├── initPacket.yaml
├── README.md
```

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
  CleverBase:
    CleverMarketItem:
        path: CleverBase/CleverMarketItem.js
    CleverBaseRT:
        path: CleverBase/CleverBaseRT.js
```


### Плагины

Список плагинов, скомпиллированных под конкретную платформу.
Необязательные параметры - MD5 хэш-сумма.

```YAML
plugins:
  libJooaClientPlugin:
    path: linux/x86/libJooaClientPlugind.so
    hash: 2974100031197931cf398c1bee14ca48
  libCleverBaseRTPlugin:
    path: linux/x86/libCleverBaseRTPlugind.so
    hash: 5ecc2fd1e520ff08fc5f5ede3c985f15
```



### Экстеншены

Список экстеншенов.
Для каждого экстеншена описывается путь к исполняемому файлу, список аргументов командной строки разделенный пробелами и тип объектов, которые обслуживает этот экстеншен. Необязательные параметры - MD5 хэш-сумма

```YAML
extensions:
  sipExtension:
    path: ./bin/sipExtension
    args: 5060 
    hash: 2974100031197931cf398c1bee14ca48
    objectType: A7SipDevice
```
