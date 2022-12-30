migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("llw4gqvgqfdiaow")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3ibvzc2c",
    "name": "stockMinimo",
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
    "id": "avki7ian",
    "name": "precioCompra",
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
  collection.schema.removeField("3ibvzc2c")

  // remove
  collection.schema.removeField("avki7ian")

  return dao.saveCollection(collection)
})
