migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("llw4gqvgqfdiaow")

  // update
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
      "thumbs": [
        "50x50"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("llw4gqvgqfdiaow")

  // update
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
})
