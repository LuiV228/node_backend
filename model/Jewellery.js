import { connection as db } from "../config/index.js";
class Jewellery {
  fetchJewellery(req, res) {
    const qry = `
        SELECT jewelID, jewelName, jewelQuantity,
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
        SELECT jewelID, jewelName, jewelQuantity,
        jewelAmount, userID
        FROM Jewellery
        WHERE jewelID = ${req.params.id};
        `;
    db.query(qry, (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result,
      });
    });
  }
  addJewel(req, res) {
    const qry = `
        INSERT INTO Jewellery
        SET ?;
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
        DELETE Jewellery
        SET ?;
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
        UPDATE Jewellery,
        WHERE 
        SET ?;
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
