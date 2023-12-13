const { models, sequelize } = require("../libs/sequelize");
const {
  EtiquetaBussl,
  EtiquetaBusslSchema,
} = require("../db/models/etiquetasBussl.model");

class EtiquetasBusslService {
  constructor() {}

  async find() {
    const res = await models.EtiquetaBussl.findAll();
    return res;
  }

  async findOne(id) {
    const res = await models.EtiquetaBussl.findByPk(id);
    return res;
  }

  async create(data) {
    const res = await models.EtiquetaBussl.create(data);
    return res;
  }

  async update(id, data) {
    const model = await this.findOne(id);
    const res = await model.update(data);
    return res;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { deleted: true };
  }

  async deleteMany() {
    try {
      // Asegúrate de tener el modelo definido correctamente en el servicio
      if (!models.EtiquetaBussl) {
        throw new Error(
          "El modelo no está inicializado correctamente en el servicio."
        );
      }

      // Elimina todos los registros de la tabla
      await models.EtiquetaBussl.destroy({ where: {} });

      console.log("Eliminación masiva exitosa");
    } catch (error) {
      console.error("Error al realizar la eliminación masiva:", error);
      throw error;
    }
  }
  async createMany(etiquetaBussl) {
    try {
      // Inicia la transacción
      await sequelize.transaction(async (t) => {
        // Guarda cada etiqueta en la transacción
        await Promise.all(
          etiquetaBussl.map(async (etiquetaBussl) => {
            await models.EtiquetaBussl.create(etiquetaBussl, {
              transaction: t,
            });
          })
        );
      });

      console.log("Guardado masivo exitoso");
    } catch (error) {
      console.error("Error al realizar el guardado masivo:", error);
      throw error;
    }
  }
}

module.exports = EtiquetasBusslService;
