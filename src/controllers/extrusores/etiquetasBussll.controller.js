const EtiquetasBussllService = require("../../services/extrusores/etiquetasBussll.service");
const service = new EtiquetasBussllService();

const create = async (req, res) => {
  try {
    // Verifica que el cuerpo de la solicitud contenga un array de etiquetas
    if (!Array.isArray(req.body)) {
      return res.status(400).json({
        success: false,
        message: "Se esperaba un array de etiquetas.",
      });
    }

    // Elimina todos los datos existentes
    await service.deleteMany();

    // Realiza el guardado masivo de etiquetas
    const response = await service.createMany(req.body);
    res.json({ success: true, data: response });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};
const get = async (req, res) => {
  try {
    const response = await service.find();
    res.json(response);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await service.findOne(id);
    res.json(response);
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
