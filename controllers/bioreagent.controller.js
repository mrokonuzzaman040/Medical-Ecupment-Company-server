const connection = require('../config/db');

exports.createBioreagent = (req, res) => {
  const bioreagent = req.body;
  connection.query('INSERT INTO bioreagent SET ?', [bioreagent], (err) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send('Bioreagent product added.');
  });
};

exports.deleteBioreagent = (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM bioreagent WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send('Bioreagent product deleted.');
  });
};

exports.updateBioreagent = (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  connection.query(
    'UPDATE bioreagent SET ? WHERE id = ?',
    [updatedData, id],
    (err) => {
      if (err) return res.status(500).send(err);
      return res.status(200).send('Bioreagent product updated.');
    }
  );
};

exports.getAllBioreagents = (req, res) => {
  connection.query('SELECT * FROM bioreagent', (err, results) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json(results);
  });
};
