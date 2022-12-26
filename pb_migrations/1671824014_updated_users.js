migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j2mpc4a55rxtkci")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "simnyzt1",
    "name": "name",
    "type": "text",
    "required": true,
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
  const collection = dao.findCollectionByNameOrId("j2mpc4a55rxtkci")

  // remove
  collection.schema.removeField("simnyzt1")

  return dao.saveCollection(collection)
})
