### Space(Спейс) 

Хранит данные, в виде дерева связанных объектов.

Корневой объект спейса, `spaceRoot`, является системным и хранит следующие данные:

- объект `spaceApp`. Содержит все данные спейса, которые зависят от конкетной конфигурации

- список пользователей спейса. 

- системные настройки спейса

### Структура объектов спейса

```
└── spaceRoot
    └── spaceApp                            # Defined in configuration
        ├── SpaceAppData
        ├── ...
        └── SpaceAppData
    └── users[]
        └── user[0]
            ├── userName, lastConnectred
            ├── userData                    # Defined in configuration
            ├── userDevices[]
                ├── androidDevice1
                └── iosDevice1
            └── userContacts[]
        └── user[1]
            ├── userName, lastConnectred
            ├── userData    # Defined in configuration
            ├── userDevices[]
                └── linuxDevice
            └── userContacts[]
    └── systemData
        ├── extensions[]
            └── sipExtensionSettings
        └── systemSettings
            └── jooaConnection

```

### Описание списка спейсов на сервере



