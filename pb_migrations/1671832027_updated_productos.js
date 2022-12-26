migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("llw4gqvgqfdiaow")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fresg7dm",
    "name": "codigo",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "erftdmjx",
    "name": "stock",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "majmxl0x",
    "name": "precio",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("llw4gqvgqfdiaow")

  // remove
  collection.schema.removeField("fresg7dm")

  // remove
  collection.schema.removeField("erftdmjx")

  // remove
  collection.schema.removeField("majmxl0x")

  return dao.saveCollection(collection)
})
