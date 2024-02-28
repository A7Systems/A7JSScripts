# Конфигурация

Конфигурация описывается в файле configuration.yaml
В нем необходимо описать:

## Название и версия конфигурации

```YAML
name: TestClever
version: 1.0.0
```

## Список пакетов и классов

Описывается список входящих в конфигурации пакетов, классов с указанием версий, и пути к исходникам.


```YAML
packets:
  CleverBase:
    CleverMarketItem:
        path: ./CleverBase/CleverMarketItem.js
        version: 1.0.0
    CleverBaseRT:
        path: ./CleverBase/CleverBaseRT.js
        version: 1.0.0
```

Если указана MD5 хэш-сумма файла, она будет проверяться при загрузке плагина сервером

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
    BasePacketType:
        path: ./ExPackets/BasePacketType.js
        version: 1.0.0

```

## Аддоны

Дополнительные модули, файлы которые используются для работы с данной конфигурацией. Которые не относятся к коду или плагинам

```YAML
addons: 
    reportTemplate1:
        path: ./reports/template1.xlsx


```

## Плагины

Список плагинов 

```YAML
plugins:
  libJooaClientPlugin:
    path: ./defplugins/libJooaClientPlugind.so
    hash: 2974100031197931cf398c1bee14ca48
  libCleverBaseRTPlugin:
    path: ./defplugins/libCleverBaseRTPlugind.so
    hash: 5ecc2fd1e520ff08fc5f5ede3c985f15
```




## Экстеншены

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


## Настройка системы прав

Система прав, которая может быть использована для space-ов для этой конфигурации. 

```YAML
rights:
  simple:
    path: ./defplugins/rightsPlugin.so
```

## Настройка системы логирования по умолчанию.

Настройка состоит из следующих блоков: [`consoleLog`](#consolelog), [`fileLog`](#filelog), [`tcpLog`](#tcplog) и [`scriptLog`](#scriptlog)

### `consoleLog`
Настройка вывода логов в *`stdout`*

Может быть включен или выключен, также могут быть [фильтры](#фильтрация-логов)

* `enabled` - **`[on/off]`** вывод включен или выключен.
* `filter` - Настраиваются [фильтры](#фильтрация-логов)
  
### `fileLog`
Настройка вывода логов в файлы на диске.

* `enabled` - **`[on/off]`** вывод включен или выключен.
* `path` - путь, по которому будут записаны файлы логов
* `filter` - Настраиваются [фильтры](#фильтрация-логов)  

### `tcpLog`
Настройка отправки логов на лог-сервер

* `enabled` - **[on/off]** вывод включен или выключен.
* `host` - адрес удаленного лог-сервера
* `port` - порт удаленного лог-сервера
* `filter` - Настраиваются [фильтры](#фильтрация-логов) 

### `scriptLog`
Настройка вывода логов из скриптовой части сервера (например `console.log('message');`)

* `enabled` - **[on/off]** вывод включен или выключен.
* Настраиваются [фильтры](#фильтрация-логов)

### Фильтрация логов

К каждому типу логов может быть настроен список фильтрации:
Cписок фильтрации сообщений разделенный пробелами, попадающих в лог
* `debug` - отладочные сообщения
* `info` - информационные сообщения
* `warning` - предупреждения
* `critical` - сообщения о критических ошибках

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


## Задание типов для корневых и специальных объектов 

`spaceRoot` - корневой элемент space-а. Содержит `rootData`, `spaceData`, `sharedData`, список пользователей с `userData`

`rootData` - корневой объект для рабочих данных space-а

`spaceData` - объект, содержащий настройки для данного space-а

`sharedData` - объект, содержащий общие данные, к нему имеет доступ все пользователи space-а

`userData` - объект создается для каждого пользователя, для хранения настроек данного пользователя 

```YAML
spaceRoot: CleverHomeSpaceRoot
rootData: CleverHomeSpace
spaceData: CleverHomeSpacedata
sharedData: CleverHomeShareddata
userData: CleverHomeUserdata
```