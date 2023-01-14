migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x7cf4lyiid88ivq")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mj3leimc",
    "name": "idUser",
    "type": "relation",
    "required": true,
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
  const collection = dao.findCollectionByNameOrId("x7cf4lyiid88ivq")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
