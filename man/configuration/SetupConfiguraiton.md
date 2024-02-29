# Описание конфигурации для установки
 
Описание конфигурации содержится в файле configuration.yaml.
Пример конфигурации доступен [тут](404)

В нем необходимо описать:

## Название и версия конфигурации

```YAML
name: TestCleverConfiguration
version: 1.0.0
author: A7System
description: test configuration 
```

## Список пакетов 

Описывается список входящих в конфигурации пакетов, и источников, откуда можно скачать эти пакеты.
Ссылка должна вести на пакет определенной версии.


```YAML
packets:
  Packet1:
      source: /.../Downloads/CleverBase_v1_1  # absolute path 
      transport: local
  Packet2:
      source: github.com/A7Systems/Project1/packets/packet2@master
      transport: github
  Packet3:
      source: a7systems.org/downloads/Project1/packets/packet3/v1
      transport: https

```

Настройки доступа:

```YAML
transport:
  https:
    user: <user for basic auth, optional>
	  pass: <password for basic auth>
  github:
	  githubuser: <user name>
	  githubtoken: <user token>

```

Для `github` для указания конкретной версии можно использовать следующие спецификаторы в конце ссылки:

|Описание|Спецификатор|
|:-|:-|
|Определенная версия|@v1.2.8|
|Определенный коммит (его хэш-сумма)|@c783230|
|Определенная ветка, псоледний коммит в ней|@master|
|Префикс версии|@v2|
|Условие для версии|@>=2.1.5|
|Последний коммит в текущей ветке|@latest|


## Ссылка на базовую конфигурацию

Указывается конфигурация, от которой наследуется текущая конфигурация

```YAML
baseConfiguration: BaseConfigName 1.0.0
```

## Зависимости

Здесь описываются ссылки на внешние пакеты, их версии, которые не входят в данную конфигурации. К этим пакетам можно будет обращаться из кода в данной конфигурации

```YAML
dependencies: 
    SystemPacket:
        path: github.com/A7Systems/System/system@v2
    PacketX:
        path: github.com/A7Systems/ProjectX/packets/packetx@latest

```


## Настройка системы прав

Предпочитаемая система прав, которая может быть использована для space-ов этой конфигурации. 

```YAML
rights:
  simple:
      linux: 
         x86x64: /.../Downloads/CleverBase_v1_1/linuxgcc/plugins/righs.so 
         arm: /.../Downloads/CleverBase_v1_1/linuxarm/plugins/righs.so 
```


## Типы для корневых и специальных объектов 

`spaceApp` - корневой объект для space-а

`userData` - объект создается для каждого пользователя, для хранения настроек данного пользователя 

```YAML
spaceApp: CleverHomeSpace
userData: CleverHomeUserdata
```

## Инициализирующий скрипт

Скрипт,который выполняется на сервере после загрузки конфигурации:


```YAML
installScript:
      source: /.../Downloads/installScript.js 
      transport: local
```

