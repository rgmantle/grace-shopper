const express = require('express');
const albumUnitsRouter = express.Router();
const { createAlbumUnit, deleteAlbumUnit } = require('../db/album_units.js');

// POST
albumUnitsRouter.post('/', async (req, res, next) => {
  try {
    const newAlbumUnit = await createAlbumUnit(req.body);

    res.send(newAlbumUnit);
  } catch (error) {
    next(error);
  }
});

// DELETE
albumUnitsRouter.delete('/', async (req, res, next) => {
  const { albumUnitId } = req.body;

  try {
    const deletedAlbumUnit = await deleteAlbumUnit(albumUnitId);

    res.send(deletedAlbumUnit);
  } catch (error) {
    next(error);
  }
});

module.exports = albumUnitsRouter;
