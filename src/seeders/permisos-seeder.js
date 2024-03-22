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
      },
      {
        group: "Extrusores",
        permisos: "extrusores.crear",
        text_font: "Crear las Etiquetas",
      },
      {
        group: "Extrusores",
        permisos: "extrusores.editar",
        text_font: "Editar las Etiquetas",
      },
      {
        group: "Extrusores",
        permisos: "extrusores.pendiente",
        text_font: "Pendientes las Etiquetas",
      },
      {
        group: "Extrusores",
        permisos: "extrusores.extruir",
        text_font: "Extruir las Etiquetas",
      },
      {
        group: "Extrusores",
        permisos: "extrusores.eliminar",
        text_font: "Eliminar las Etiquetas",
      },
      {
        group: "Extrusores",
        permisos: "extrusores.exportacion",
        text_font: "Importar excel",
      },

      //Productos
      {
        group: "Productos",
        permisos: "productos.mostrar",
        text_font: "Mostrar todos las Productos",
      },
      {
        group: "Productos",
        permisos: "productos.crear",
        text_font: "Crear las Productos",
      },
      {
        group: "Productos",
        permisos: "productos.editar",
        text_font: "Editar las Productos",
      },
      {
        group: "Productos",
        permisos: "productos.eliminar",
        text_font: "Eliminar las Productos",
      },
      {
        group: "Productos",
        permisos: "productos.exportacion",
        text_font: "Importar excel",
      },

      //productos extruidos
      {
        group: "Productos_estruidos",
        permisos: "productos_estruidos.mostrar",
        text_font: "Mostrar todos las Etiquetas",
      },

      //User
      {
        group: "usuarios",
        permisos: "usuarios.mostrar",
        text_font: "Mostrar todos los Usuarios",
      },
      {
        group: "Extrusores",
        permisos: "extrusores.mostrarOpciones",
        text_font: "Mover las Etiquetas",
      },
    ];

    const permisosInDB = await Permiso.findAll();
    console.log({
      permisosInDB: permisosInDB.length,
      permisos: permisos.length,
    });

    if (permisosInDB.length < permisos.length) {
      for (const per of permisos) {
        const perInDB = permisosInDB.map((e) => e.dataValues.permisos);
        if (!perInDB.includes(per.permisos)) {
          const created = await Permiso.create({
            group: per.group,
            permisos: per.permisos,
            text_font: per.text_font,
          });
        }
      }
    }

    console.log("Datos de permisos insertados correctamente.");
  },

  down: async (queryInterface, Sequelize) => {
    // Elimina los datos insertados en la función up
    await Permiso.destroy({ where: {} });

    console.log("Datos de permisos eliminados correctamente.");
  },
};
