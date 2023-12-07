const { models, sequelize } = require("../libs/sequelize");
const {
  EtiquetaExt54_2Schema,
  EtiquetaExt54_2,
} = require("../db/models/etiquetasExt54_2.model");

class EtiquetasExt54_2Service {
  constructor() {}

  async find() {
    const res = await models.EtiquetaExt54_2.findAll();
    return res;
  }

  async findOne(id) {
    const res = await models.EtiquetaExt54_2.findByPk(id);
    return res;
  }

  async create(data) {
    const res = await models.EtiquetaExt54_2.create(data);
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
      if (!models.EtiquetaExt54_2) {
        throw new Error(
          "El modelo no está inicializado correctamente en el servicio."
        );
      }

      // Elimina todos los registros de la tabla
      await models.EtiquetaExt54_2.destroy({ where: {} });

      console.log("Eliminación masiva exitosa");
    } catch (error) {
      console.error("Error al realizar la eliminación masiva:", error);
      throw error;
    }
  }

  async createMany(etiquetaExt54_2) {
    try {
      // Inicia la transacción
      await sequelize.transaction(async (t) => {
        // Guarda cada etiqueta en la transacción
        await Promise.all(
          etiquetaExt54_2.map(async (etiquetaExt54_2) => {
            await models.EtiquetaExt54_2.create(etiquetaExt54_2, {
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

module.exports = EtiquetasExt54_2Service;
