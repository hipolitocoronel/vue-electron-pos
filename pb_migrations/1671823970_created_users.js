migrate((db) => {
  const collection = new Collection({
    "id": "j2mpc4a55rxtkci",
    "created": "2022-12-23 19:32:50.757Z",
    "updated": "2022-12-23 19:32:50.757Z",
    "name": "users",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nxeuybhu",
        "name": "username",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("j2mpc4a55rxtkci");

  return dao.deleteCollection(collection);
})
