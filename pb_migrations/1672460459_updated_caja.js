migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("iv1q2b38utqb20l")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cu9umebg",
    "name": "fechaApertura",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qttkk0wv",
    "name": "fechaCierre",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qs1hf8rz",
    "name": "saldoInicial",
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
    "id": "kdkm7hr4",
    "name": "saldoFinal",
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
  const collection = dao.findCollectionByNameOrId("iv1q2b38utqb20l")

  // remove
  collection.schema.removeField("cu9umebg")

  // remove
  collection.schema.removeField("qttkk0wv")

  // remove
  collection.schema.removeField("qs1hf8rz")

  // remove
  collection.schema.removeField("kdkm7hr4")

  return dao.saveCollection(collection)
})
