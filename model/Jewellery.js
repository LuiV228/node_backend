import { connection as db } from "../config/index.js";
class Jewellery {
  fetchJewellery(req, res) {
    const qry = `
        SELECT jewelID, jewelCategory, jewelDescription, jewelImage, jewelName, jewelQuantity,
        jewelAmount, userID
        FROM Jewellery;
        `;
    db.query(qry, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  fetchJewel(req, res) {
    const qry = `
        select jewelID, jewelCategory, jewelDescription, jewelImage, jewelName, jewelQuantity,
        jewelAmount, userID
        FROM Jewellery
        WHERE jewelID = ${req.params.id};
        `;
    db.query(qry, (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result
      });
    });
  }
  addJewel(req, res) {
    const qry = `
        insert into Jewellery
        set ?;
        `;
    db.query(qry, [req.body], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "New Jewellery has been added.",
      });
    });
  }
  deleteJewel(req, res) {
    const qry = `
        delete from Jewellery
        where jewelID = ${req.params.id}
        `;
    db.query(qry, [req.body], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "Jewellery item has been removed.",
      });
    });
  }
  updateJewel(req, res) {
    const qry = `
        update Jewellery
        SET ?
        WHERE jewelID = ${req.params.id}
        `;
    db.query(qry, [req.body], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "Jewellery has been updated.",
      });
    });
  }
}

export { Jewellery };
