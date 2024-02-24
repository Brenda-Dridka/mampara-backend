const { User, UserSchema } = require("./users.model");
const { Producto, ProductoSchema } = require("./productos.model");
const {
  ProductoExtruido,
  ProductoExtruidoSchema,
} = require("./productosExtruidos.model");
const { Etiqueta, EtiquetaSchema } = require("./etiquetas.model");
const { Extrusor, ExtrusorSchema } = require("./extrusores.model");

//implementacion de las etiquetas por extrusor
const {
  EtiquetaExt54_2,
  EtiquetaExt54_2Schema,
} = require("./etiquetasExt54_2.model");

const {
  EtiquetaBussl,
  EtiquetaBusslSchema,
} = require("./etiquetasBussl.model");
const {
  EtiquetaExt70_2,
  EtiquetaExt70_2Schema,
} = require("./etiquetasExt70_2.model");
const {
  EtiquetaExt54_6,
  EtiquetaExt54_6Schema,
} = require("./extrusor/etiquetasExt54_6.model");
const {
  EtiquetaExt54_4,
  EtiquetaExt54_4Schema,
} = require("./extrusor/etiquetasExt54_4.model");
const {
  EtiquetaExt54_5,
  EtiquetaExt54_5Schema,
} = require("./extrusor/etiquetasExt54_5.model");
const {
  EtiquetaExt54_1,
  EtiquetaExt54_1Schema,
} = require("./extrusor/etiquetasExt54_1.model");
const {
  EtiquetaExt58,
  EtiquetaExt58Schema,
} = require("./extrusor/etiquetasExt58.model");
const {
  EtiquetaExt40,
  EtiquetaExt40Schema,
} = require("./extrusor/etiquetasExt40.model");
const {
  EtiquetaExt54_3,
  EtiquetaExt54_3Schema,
} = require("./extrusor/etiquetasExt54_3.model");
const {
  EtiquetaExt54_7,
  EtiquetaExt54_7Schema,
} = require("./extrusor/etiquetasExt54_7.model");
const {
  EtiquetaExt70_1,
  EtiquetaExt70_1Schema,
} = require("./extrusor/etiquetasExt70_1.model");
const {
  EtiquetaBussll,
  EtiquetaBussllSchema,
} = require("./extrusor/etiquetasBussll.model");
const {
  EtiquetaExt26_1,
  EtiquetaExt26_1Schema,
} = require("./extrusor/etiquetasExt26_1.model");
const {
  EtiquetaExt26_2,
  EtiquetaExt26_2Schema,
} = require("./extrusor/etiquetasExt26_2.model");
const {
  EtiquetaExt70_3,
  EtiquetaExt70_3Schema,
} = require("./extrusor/etiquetaExt70_3.model");
const {
  EtiquetaExt54_8,
  EtiquetaExt54_8Schema,
} = require("./extrusor/etiquetasExt54_8.model");

const { Permiso, PermisoSchema } = require("./permisos.model");

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Producto.init(ProductoSchema, Producto.config(sequelize));
  ProductoExtruido.init(
    ProductoExtruidoSchema,
    ProductoExtruido.config(sequelize)
  );
  Etiqueta.init(EtiquetaSchema, Etiqueta.config(sequelize));
  Extrusor.init(ExtrusorSchema, Extrusor.config(sequelize));

  ///implementacion de etiquetas

  //Extrusor 54 2
  EtiquetaExt54_2.init(
    EtiquetaExt54_2Schema,
    EtiquetaExt54_2.config(sequelize)
  );
  //Extrusor buss 1
  EtiquetaBussl.init(EtiquetaBusslSchema, EtiquetaBussl.config(sequelize));
  //Extrusor 70 2
  EtiquetaExt70_2.init(
    EtiquetaExt70_2Schema,
    EtiquetaExt70_2.config(sequelize)
  );
  //extrusor 54 4
  EtiquetaExt54_4.init(
    EtiquetaExt54_4Schema,
    EtiquetaExt54_4.config(sequelize)
  );

  //Extrusor 54 5
  EtiquetaExt54_5.init(
    EtiquetaExt54_5Schema,
    EtiquetaExt54_5.config(sequelize)
  );
  // estrusor 54 1
  EtiquetaExt54_1.init(
    EtiquetaExt54_1Schema,
    EtiquetaExt54_1.config(sequelize)
  );
  //Extrusor 58
  EtiquetaExt58.init(EtiquetaExt58Schema, EtiquetaExt58.config(sequelize));
  //Extrusor 40
  EtiquetaExt40.init(EtiquetaExt40Schema, EtiquetaExt40.config(sequelize));
  //Extrusor 54 3
  EtiquetaExt54_3.init(
    EtiquetaExt54_3Schema,
    EtiquetaExt54_3.config(sequelize)
  );
  //Extrusor 54 7
  EtiquetaExt54_7.init(
    EtiquetaExt54_7Schema,
    EtiquetaExt54_7.config(sequelize)
  );
  //Extrusor 70 1
  EtiquetaExt70_1.init(
    EtiquetaExt70_1Schema,
    EtiquetaExt70_1.config(sequelize)
  );
  //Extrusor bus 2
  EtiquetaBussll.init(EtiquetaBussllSchema, EtiquetaBussll.config(sequelize));
  //Extrusor 26 1
  EtiquetaExt26_1.init(
    EtiquetaExt26_1Schema,
    EtiquetaExt26_1.config(sequelize)
  );
  //Extrusor 26 2
  EtiquetaExt26_2.init(
    EtiquetaExt26_2Schema,
    EtiquetaExt26_2.config(sequelize)
  );
  //Extrusor 54 6
  EtiquetaExt54_6.init(
    EtiquetaExt54_6Schema,
    EtiquetaExt54_6.config(sequelize)
  );
  //Extrusor 70 3
  EtiquetaExt70_3.init(
    EtiquetaExt70_3Schema,
    EtiquetaExt70_3.config(sequelize)
  );
  //Extrusor 54 8
  EtiquetaExt54_8.init(
    EtiquetaExt54_8Schema,
    EtiquetaExt54_8.config(sequelize)
  );

  Permiso.init(PermisoSchema, Permiso.config(sequelize));
}

module.exports = setupModels;
