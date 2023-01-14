migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x7cf4lyiid88ivq")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wbqwn2un",
    "name": "caja",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "iv1q2b38utqb20l",
      "cascadeDelete": false
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mj3leimc",
    "name": "user",
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
  }))

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
})
