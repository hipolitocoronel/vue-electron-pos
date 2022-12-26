migrate((db) => {
  const collection = new Collection({
    "id": "llw4gqvgqfdiaow",
    "created": "2022-12-23 20:49:20.703Z",
    "updated": "2022-12-23 20:49:20.703Z",
    "name": "productos",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "a0ocqdwc",
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
  const collection = dao.findCollectionByNameOrId("llw4gqvgqfdiaow");

  return dao.deleteCollection(collection);
})
