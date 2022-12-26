migrate((db) => {
  const collection = new Collection({
    "id": "iv1q2b38utqb20l",
    "created": "2022-12-23 20:49:57.117Z",
    "updated": "2022-12-23 20:49:57.117Z",
    "name": "caja",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "o7izm7mf",
        "name": "idUser",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "j2mpc4a55rxtkci",
          "cascadeDelete": false
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
  const collection = dao.findCollectionByNameOrId("iv1q2b38utqb20l");

  return dao.deleteCollection(collection);
})
