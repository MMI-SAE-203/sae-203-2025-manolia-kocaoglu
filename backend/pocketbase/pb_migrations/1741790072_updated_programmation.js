/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3081485714")

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "date2863642648",
    "max": "",
    "min": "",
    "name": "date2",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3081485714")

  // remove field
  collection.fields.removeById("date2863642648")

  return app.save(collection)
})
