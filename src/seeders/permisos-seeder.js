"use strict";

const { Permiso } = require("../db/models/permisos.model");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const permisos = [
      //Extrusores
      {
        group: "Extrusores",
        permisos: "extrusores.mostrar",
        text_font: "Mostrar todos las Etiquetas",
        descripcion: "",
      },
      {
        group: "Extrusores",
        permisos: "extrusores.crear",
        text_font: "Crear las Etiquetas",
        descripcion: "",
      },
      {
        group: "Extrusores",
        permisos: "extrusores.editar",
        text_font: "Editar las Etiquetas",
        descripcion: "",
      },
      {
        group: "Extrusores",
        permisos: "extrusores.pendiente",
        text_font: "Pendientes las Etiquetas",
        descripcion: "",
      },
      {
        group: "Extrusores",
        permisos: "extrusores.extruir",
        text_font: "Extruir las Etiquetas",
        descripcion: "",
      },
      {
        group: "Extrusores",
        permisos: "extrusores.eliminar",
        text_font: "Eliminar las Etiquetas",
        descripcion: "",
      },
      {
        group: "Extrusores",
        permisos: "extrusores.exportacion",
        text_font: "Importar excel",
        descripcion: "",
      },
      {
        group: "Extrusores",
        permisos: "extrusores.mover",
        text_font: "Mover las Etiquetas",
        descripcion: "",
      },

      //Productos
      {
        group: "Productos",
        permisos: "productos.mostrar",
        text_font: "Mostrar todos las Productos",
        descripcion: "",
      },
      {
        group: "Productos",
        permisos: "productos.crear",
        text_font: "Crear las Productos",
        descripcion: "",
      },
      {
        group: "Productos",
        permisos: "productos.editar",
        text_font: "Editar las Productos",
        descripcion: "",
      },
      {
        group: "Productos",
        permisos: "productos.eliminar",
        text_font: "Eliminar las Productos",
        descripcion: "",
      },
      {
        group: "Productos",
        permisos: "productos.exportacion",
        text_font: "Importar excel",
        descripcion: "",
      },

      //productos extruidos
      {
        group: "Productos_estruidos",
        permisos: "productos_estruidos.mostrar",
        text_font: "Mostrar todos las Etiquetas",
        descripcion: "",
      },
    ];

    // Sincroniza el modelo con la base de datos
    await Permiso.sync();

    // Inserta los datos en la tabla de permisos
    await Permiso.bulkCreate(permisos);

    console.log("Datos de permisos insertados correctamente.");
  },

  down: async (queryInterface, Sequelize) => {
    // Elimina los datos insertados en la función up
    await Permiso.destroy({ where: {} });

    console.log("Datos de permisos eliminados correctamente.");
  },
};
