migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j2mpc4a55rxtkci")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "s7kaiavv",
    "name": "state",
    "type": "bool",
    "required": true,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j2mpc4a55rxtkci")

  // remove
  collection.schema.removeField("s7kaiavv")

  return dao.saveCollection(collection)
})
