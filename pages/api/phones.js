import db from '../../db.json'

export default function (req, res) {
  const { query } = req

  if (query.id) {
    let i = db.findIndex(({ id }) => id == query.id)

    if (i > -1) {
      res.status(200).json(db[i])
    } else {
      res.status(404).end()
    }
  } else {
    res.status(200).json(db)
  }
}
