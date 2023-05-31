const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    var XGren = "X".green;
    // var baseYellow = colors.yellow(base);

    let salida,
      consola = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} X  ${i} '=' ${base * i}\n`;
      consola += `${colors.grey(base)} ${XGren}  ${i} ${
        "=".rainbow
      }  ${colors.blue(base * i)}\n`;
    }
    if (listar) {
      console.log("========================".rainbow);
      console.log(`       TABLA DEL: ${base}    `);
      console.log("========================".rainbow);
      console.log(consola);
      fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
      console.log(`tabla-${base}.txt creada`);
    } else {
      return `listar no tiene valor`;
    }
    // descarga de archivo
    fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
      if (err) throw err;
      console.log(`tabla-${base}.txt`);
    });
    console.log(" Se terminala ejecucion");
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
