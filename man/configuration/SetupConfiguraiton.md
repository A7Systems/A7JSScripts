# Описание конфигурации для установки
 
Описание конфигурации содержится в файле configuration.yaml.
Пример конфигурации доступен [тут](404)

В нем необходимо описать:

## Название и версия конфигурации

```YAML
name: TestClever
version: 1.0.0
```

## Список пакетов 

Описывается список входящих в конфигурации пакетов, и источников, откуда можно скачать эти пакеты.
Ссылка должна вести на пакет определенной версии.


```YAML
packets:
  Packet1:
      path: /.../Downloads/CleverBase_v1_1  # absolute path 
  Packet2:
      path: github.com/A7Systems/Project1/packets/packet2@master
  Packet3:
      path: a7systems.org/downloads/Project1/packets/packet2/v1
      transport: https

```

Тип источника указывается в `transport` и может быть:
- local
- http/https
- ftp
- github
- mercurial
- s3 (?)
- webdav(?)

Для github для указания конкретной версии можно использовать следующие спецификаторы в конце ссылки:

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
    BasePacket:
        path: github.com/A7Systems/ProjectX/packets/packet1@latest

```

## Аддоны

Дополнительные модули, файлы которые используются для работы с данной конфигурацией. Которые не относятся к коду или плагинам

```YAML
addons: 
    reportTemplate1:
        path: github.com/A7Systems/Project1/reportsAddon/templates/template1@latest


```

## Плагины

Список плагинов 

```YAML
plugins:
  libJooaClientPlugin:
    linux:
      x86x64: /.../Downloads/CleverBase_v1_1/linuxgcc/JooaClientPlugin.so 
      arm: /.../Downloads/CleverBase_v1_1/linuxarm/JooaClientPlugin.so 
    android:
      x86:  /.../Downloads/CleverBase_v1_1/androidx86/JooaClientPlugin.so 
      x64:  /.../Downloads/CleverBase_v1_1/androidx64/JooaClientPlugin.so 
  libCleverBaseRTPlugin:
    linux:
      ...
```

Т.к. бинарные файлы зависят от конкретной платформы, указывается операционная система и платформа.

## Экстеншены

Список экстеншенов.
Для каждого экстеншена описывается путь к исполняемому файлу, список аргументов командной строки разделенный пробелами и тип объектов, которые обслуживает этот экстеншен. Необязательные параметры - MD5 хэш-сумма

```YAML
extensions:
  sipExtension:
    path:
      linux: 
         x86x64: /.../Downloads/CleverBase_v1_1/linuxgcc/bin/sipExtension 
         arm: /.../Downloads/CleverBase_v1_1/linuxarm/bin/sipExtension 
    args: 5060 
    objectType: A7SipDevice
```


## Настройка системы прав

Система прав, которая может быть использована для space-ов для этой конфигурации. 

```YAML
rights:
  simple:
      linux: 
         x86x64: /.../Downloads/CleverBase_v1_1/linuxgcc/plugins/righs.so 
         arm: /.../Downloads/CleverBase_v1_1/linuxarm/plugins/righs.so 
```

## Настройка системы логирования по умолчанию.

Настройка состоит из следующих блоков:
- `consoleLog` - настройка вывода логов в **stdout**
  - `enabled` - **`[on/off]`** вывод включен или выключен.
- `fileLog` - настройка вывода логов в файл.
  - `enabled` - **[on/off]** вывод включен или выключен.
  - `path` - путь, по которому будут записаны логи

- tcpLog - настойки удаленного лог-сервера
  - `enabled` - **[on/off]** вывод включен или выключен.
  - `host` - адрес удаленного лог-сервера
  - `port` - порт удаленного лог-сервера
- `scriptLog` - настройки вывода логов из скриптовой части сервера (например `console.log('message');`)

К каждому типу логов может быть настроен список фильтрации:
  - `filter` - список фильтрации сообщений разделенный пробелами, попадающих в лог
    - `debug` - отладочные сообщения
    - `info` - информационные сообщения
    - `warning` - предупреждения
    - `critical` - сообщения о критических ошибках

```YAML
logs:
  consoleLog:
    enabled: off
  fileLog:
    enabled: on
    path: ./Logs/
    filter: -debug -info
  tcpLog:
    enabled: off
    host: 127.0.0.1
    port: 10255
  scriptLog:
    enabled: on
```


## Типы для корневых и специальных объектов 

`rootData` - корневой объект для рабочих данных space-а

`userData` - объект создается для каждого пользователя, для хранения настроек данного пользователя 

```YAML
spaceData: CleverHomeSpace
userData: CleverHomeUserdata
```