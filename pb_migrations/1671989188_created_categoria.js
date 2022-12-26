migrate((db) => {
  const collection = new Collection({
    "id": "wpf5lw6foyvyldx",
    "created": "2022-12-25 17:26:28.740Z",
    "updated": "2022-12-25 17:26:28.740Z",
    "name": "categoria",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vp4cmpzc",
        "name": "descripcion",
        "type": "text",
        "required": false,
        "unique": false,
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
  const collection = dao.findCollectionByNameOrId("wpf5lw6foyvyldx");

  return dao.deleteCollection(collection);
})
