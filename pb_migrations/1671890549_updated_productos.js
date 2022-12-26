migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("llw4gqvgqfdiaow")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xi0takmd",
    "name": "imagen",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/jpg",
        "image/jpeg",
        "image/png",
        "image/svg+xml",
        "image/gif"
      ],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("llw4gqvgqfdiaow")

  // remove
  collection.schema.removeField("xi0takmd")

  return dao.saveCollection(collection)
})
