migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("llw4gqvgqfdiaow")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ly1bzaa0",
    "name": "categoria",
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
  const collection = dao.findCollectionByNameOrId("llw4gqvgqfdiaow")

  // remove
  collection.schema.removeField("ly1bzaa0")

  return dao.saveCollection(collection)
})
