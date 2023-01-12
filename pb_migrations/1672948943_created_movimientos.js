migrate((db) => {
  const collection = new Collection({
    "id": "x7cf4lyiid88ivq",
    "created": "2023-01-05 20:02:23.757Z",
    "updated": "2023-01-05 20:02:23.757Z",
    "name": "movimientos",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wbqwn2un",
        "name": "idCaja",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "iv1q2b38utqb20l",
          "cascadeDelete": false
        }
      },
      {
        "system": false,
        "id": "mj3leimc",
        "name": "idUser",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false
        }
      },
      {
        "system": false,
        "id": "na0ttgdc",
        "name": "tipo",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "l0pu9zv7",
        "name": "fecha",
        "type": "date",
        "required": true,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "jncqzd08",
        "name": "importeTotal",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("x7cf4lyiid88ivq");

  return dao.deleteCollection(collection);
})
