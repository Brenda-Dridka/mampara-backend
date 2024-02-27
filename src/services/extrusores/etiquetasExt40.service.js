const { models, sequelize } = require("../../libs/sequelize");
const {
  EtiquetaExt40Schema,
  EtiquetaExt40,
} = require("../../db/models/extrusor/etiquetasExt40.model");

class EtiquetasExt40Service {
  constructor() {}

  async find() {
    const res = await models.EtiquetaExt40.findAll();
    return res;
  }

  async findOne(id) {
    const res = await models.EtiquetaExt40.findByPk(id);
    return res;
  }

  async create(data) {
    const res = await models.EtiquetaExt40.create(data);
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
      if (!models.EtiquetaExt40) {
        throw new Error(
          "El modelo no está inicializado correctamente en el servicio."
        );
      }

      // Elimina todos los registros de la tabla
      await models.EtiquetaExt40.destroy({ where: {} });

      console.log("Eliminación masiva exitosa");
    } catch (error) {
      console.error("Error al realizar la eliminación masiva:", error);
      throw error;
    }
  }

  async createMany(etiquetaExt40) {
    try {
      // Inicia la transacción
      await sequelize.transaction(async (t) => {
        // Guarda cada etiqueta en la transacción
        await Promise.all(
          etiquetaExt40.map(async (etiquetaExt40) => {
            await models.EtiquetaExt40.create(etiquetaExt40, {
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

module.exports = EtiquetasExt40Service;
