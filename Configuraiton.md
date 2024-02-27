# Конфигурация

Конфигурация описывается в файле configuration.yaml
В нем необходимо описать:

### Название и версия конфигурации

```YAML
name: TestClever
version: 1.0.0
```

### Список пакетов и классов

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

Если указана хэш-сумма файла, она будет проверяться при загрузке плагина сервером

### Ссылка на базовую конфигурацию

Указывается конфигурация, от которой наследуется текущая конфигурация

```YAML
baseConfiguration: BaseConfigName 1.0.0

```


### Зависимости

Здесь описываются ссылки на внешние пакеты, их версии, которые не входят в данную конфигурации. К этим пакетам можно будет обращаться из кода в данной конфигурации

```YAML
dependencies: 
    BasePacket:
    BasePacketType:
        path: ./ExPackets/BasePacketType.js
        version: 1.0.0

```

### Аддоны

Дополнительные модули, файлы которые используются для работы с данной конфигурацией. Которые не относятся к коду или плагинам

```YAML
addons: 
    reportTemplate1:
        path: ./reports/template1.xlsx


```

### Плагины

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




### Экстеншены

Список экстеншенов

```YAML
extensions:
  sipExtension:
    path: ./bin/sipExtension
    args: 5060 
    hash: 2974100031197931cf398c1bee14ca48
    objectType: A7SipDevice
```


### Настройка системы прав

Система прав, которая может быть использована для space-ов для этой конфигурации. 

```YAML
rights:
  simple:
    path: ./defplugins/rightsPlugin.so
```

### Настройка системы логирования

```YAML
logs:
  consoleLog: off
  fileLog:
    path: ./Logs/
    filter: -debug -info
```


### Задание типов для корневых и специальных объектов 

spaceRoot - корневой элемент space-а. Содержит rootData, spaceData, sharedData, список пользователей с userData

rootData - коренвой объект для рабочих данных space-а

spaceData - объект, содержащий настройки для данного space-а

sharedData - объект, содержащий общие данные, к нему имеет доступ все пользователи space-а

userData - объект создается для каждого пользователя, для хранения настроек данного пользователя 

```YAML
spaceRoot: CleverHomeSpaceRoot
rootData: CleverHomeSpace
spaceData: CleverHomeSpacedata
sharedData: CleverHomeShareddata
userData: CleverHomeUserdata
```