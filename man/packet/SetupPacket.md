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

Список плагинов, скомпилированных под конкретную платформу.
Необязательные параметры - MD5 хэш-сумма.

```YAML
plugins:
  TimerPlugin:
    version: 3.1.2
    MD5: DEADBEEFDEADFOOD
    source: https://github.com/myCoolGitHubRepo@revision
    transport: github
    
  DatePlugin:
    version: 0.5.3
    MD5: DEADFOODDEADBEEF
    source: https://path.to/cool/repo
    transport: https

  StringPlugin:
    version: 2.3.6
    MD5: 8BADFOODFEE1DEAD
    source: /path/to/my/local/disk
    transport: local
```

### Экстеншены

Список экстеншенов.
Для каждого экстеншена описывается версия, тип объектов, которые обслуживает этот экстеншен, источник из которого этот экстеншен можно скачать и тип транспорта. А также настройки экстеншена по умолчанию. Необязательные параметры - MD5 хэш-сумма

```YAML
extensions:
  sipExtension:
    version: 1.3.5
    MD5: 8BADFOODFEE1DEAD
    source: https://github.com/MyCoolName/MyCoolSipExtension.git@latest
    transport: github
    objectType: A7SipDevice
    defaultSettings:
      port: 5060
      maxSipClients: 100

  rtspExtension:
    version: 2.3.6
    MD5: 8BADFOODFEE1DEAD
    source: /path/to/my/local/disk
    transport: local

    objectType: A7RTSPDevice
    defaultSettings:
      rtpPort: 10500
      rtcpPort: 10501
```

### Зависимости

Здесь описываются зависимости пакета от других пакетов.
При установке пакета проверяются эти зависимости и докачиваются недостающие. 
Если другие пакеты входят в ту же конфигурацию и данный пакет может быть использован только внутри этой конфигурации, то эту зависимость можно явно не указывать. Но так лучше не делать.



```YAML
dependencies: 
  BasePacket:
    source: https://github.com/MyCoolName/MyPacket1Repo.git@latest
    transport: github
  AnotherPacket:
    version: 5.8.1
    source: http://path.to/myCoolHttprepo
    transport: https
```

### Аддоны

Дополнительные модули, файлы которые используются для работы с данным пакетом. Которые не относятся к коду или плагинам

```YAML
addons: 
  reportTemplate1:
    source: https://github.com/A7Systems/reportsAddonRepo.git@latest
    transport: github
  reportTemplate2:
    version: 5.5.5
    source: /path/to/my/hard/disk
    transport: local


```
