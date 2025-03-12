/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2773080466")

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "select1431010090",
    "maxSelect": 1,
    "name": "type_film",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "longs_metrage",
      "courts_metrages",
      "documentaires",
      "animation"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2773080466")

  // remove field
  collection.fields.removeById("select1431010090")

  return app.save(collection)
})
