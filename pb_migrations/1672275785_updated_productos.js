migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("llw4gqvgqfdiaow")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vrn5ozam",
    "name": "categoria",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "wpf5lw6foyvyldx",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("llw4gqvgqfdiaow")

  // remove
  collection.schema.removeField("vrn5ozam")

  return dao.saveCollection(collection)
})
