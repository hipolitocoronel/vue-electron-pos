migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j2mpc4a55rxtkci")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j2mpc4a55rxtkci")

  collection.listRule = null

  return dao.saveCollection(collection)
})
