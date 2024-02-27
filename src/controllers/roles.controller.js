const { Rol } = require("../db/models/roles.model");
const RolesService = require("../services/roles.service");
const service = new RolesService();

const create = async (req, res) => {
  try {
    const body = req.body;
    body.permisos = JSON.stringify(body.permisos)
    const response = await Rol.create({
      nombre: body.nombre,
      permisos: body.permisos,
    })

    res.json({ success: true, data: response });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

const get = async (req, res) => {
  try {
    let response = await Rol.findAll();
    response = response.map(e => {
      return {
        ...e.dataValues, permisos: JSON.parse(e.dataValues.permisos)
      }
    })
    res.json({data: response});
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await service.findOne(id);
    res.json({data: {
      ...response.dataValues,
      permisos: JSON.parse(response.dataValues.permisos),
    }});
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const response = await service.update(id, body);
    res.json(response);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

const _delete = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await service.delete(id);
    res.json(response);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

module.exports = {
  create,
  get,
  getById,
  update,
  _delete,
};
