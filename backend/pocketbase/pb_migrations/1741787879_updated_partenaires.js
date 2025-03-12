/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_583086938")

  // remove field
  collection.fields.removeById("select855614323")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_583086938")

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "select855614323",
    "maxSelect": 1,
    "name": "partenaire",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "partenaire"
    ]
  }))

  return app.save(collection)
})
