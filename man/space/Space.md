# Space(Спейс) 

Хранит данные, в виде дерева связанных объектов.

Корневой объект спейса, `spaceRoot`, является системным и хранит следующие данные:

- объект `spaceApp`. Содержит все данные спейса, которые зависят от конкетной конфигурации
- список пользователей спейса. 
- системные настройки спейса

## Структура объектов спейса

```
└── spaceRoot
    └── spaceApp                                
        ├── spaceObject1
        ├── ...
        └── spaceObjectN
    └── usersList
        └── users[]
            └── userObject[0]
                ├── userName, lastConnected
                ├── userData                    
                ├── userDevices[]
                    ├── androidDevice1
                    └── iosDevice1
                └── userConnection
                    ├── userLogin
                    ├── lastConnected
                    └── authContactInfo

            └── userObject[1]
                ├── userName, lastConnected
                ├── userData                    
                ├── userDevices[]
                    └── linuxDevice
    ├── extensionsList
        └── extensions[]
            └── sipExtensionSettings
    └── spaceSettings


```
System - получение системной информации
режим работы - debug/testing/release


## Описание списка спейсов на сервере

Описание списка спейсов находится в файле `spacelist.yaml`


Структура файла:

### Список конфигураций:


```YAML
configurations:
  TestClever:
    version: 1.0.0
    location: "./dbodata/testSpace/configuration/"
    isdefault: true
  Clever:
    version: 1.0.0
    location: "./dbodata/cleverSpace/configuration/"
```

### Список баз данных:

```YAML

dbostorages:
  main:
    location: "./dbo"
    isdefault: true

```


```YAML

spaces:
  testSpace1:
    configuration: TestClever
    dbostorage: main
    rights: standart
    rootId: "0:0"
  testSpace2:
    configuration: TestClever
    dbostorage: main
    rights: standart
    rootId: "0:25"
```


> :do_not_litter: rootId здесь выглядит странно, или мне кажется? Мы уже нарывались на проблемы из-за прибитого ид рутдаты