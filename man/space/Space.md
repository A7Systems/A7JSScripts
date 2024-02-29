### Space(Спейс) 

Хранит данные, в виде дерева связанных объектов.

Корневой объект спейса, `spaceRoot`, является системным и хранит следующие данные:

- объект `spaceApp`. Содержит все данные спейса, которые зависят от конкетной конфигурации

- список пользователей спейса. 

- системные настройки спейса

### Структура объектов спейса

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
    └── System       
    └── systemSettings


```
System - получение системной информации
режим работы - debug/testing/release



### Описание списка спейсов на сервере



