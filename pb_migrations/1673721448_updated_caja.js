migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("iv1q2b38utqb20l")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o7izm7mf",
    "name": "user",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "j2mpc4a55rxtkci",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("iv1q2b38utqb20l")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
