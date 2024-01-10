const app = require("./src/app");

const port = process.env.PORT || 3000;

/* app.listen(port); */

/* console.log("LISTO EN EL PUESTO ${port}"); */
/* app.listen(port, () => {
  console.log("Port ==> ", port);
}); */
app.listen(port);

console.log("LISTO EN EL PUESTO, ${port} ");
