migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j2mpc4a55rxtkci")

  collection.updateRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j2mpc4a55rxtkci")

  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
