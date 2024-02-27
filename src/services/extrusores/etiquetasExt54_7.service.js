const { models, sequelize } = require("../../libs/sequelize");
const {
  EtiquetaExt54_7Schema,
  EtiquetaExt54_7,
} = require("../../db/models/extrusor/etiquetasExt54_7.model");

class EtiquetasExt54_7Service {
  constructor() {}

  async find() {
    const res = await models.EtiquetaExt54_7.findAll();
    return res;
  }

  async findOne(id) {
    const res = await models.EtiquetaExt54_7.findByPk(id);
    return res;
  }

  async create(data) {
    const res = await models.EtiquetaExt54_7.create(data);
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
      if (!models.EtiquetaExt54_7) {
        throw new Error(
          "El modelo no está inicializado correctamente en el servicio."
        );
      }

      // Elimina todos los registros de la tabla
      await models.EtiquetaExt54_7.destroy({ where: {} });

      console.log("Eliminación masiva exitosa");
    } catch (error) {
      console.error("Error al realizar la eliminación masiva:", error);
      throw error;
    }
  }

  async createMany(etiquetaExt54_7) {
    try {
      // Inicia la transacción
      await sequelize.transaction(async (t) => {
        // Guarda cada etiqueta en la transacción
        await Promise.all(
          etiquetaExt54_7.map(async (etiquetaExt54_7) => {
            await models.EtiquetaExt54_7.create(etiquetaExt54_7, {
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

module.exports = EtiquetasExt54_7Service;
