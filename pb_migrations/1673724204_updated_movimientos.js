migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x7cf4lyiid88ivq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kl75ue1f",
    "name": "medioPago",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x7cf4lyiid88ivq")

  // remove
  collection.schema.removeField("kl75ue1f")

  return dao.saveCollection(collection)
})
