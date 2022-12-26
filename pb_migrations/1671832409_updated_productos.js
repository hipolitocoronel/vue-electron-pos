migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("llw4gqvgqfdiaow")

  collection.listRule = ""
  collection.updateRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("llw4gqvgqfdiaow")

  collection.listRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
