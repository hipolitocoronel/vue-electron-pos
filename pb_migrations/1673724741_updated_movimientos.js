migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x7cf4lyiid88ivq")

  // remove
  collection.schema.removeField("l0pu9zv7")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x7cf4lyiid88ivq")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
