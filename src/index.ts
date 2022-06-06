let promedioA: number = obtenerPromedio(comisionA);
let promedioB: number = obtenerPromedio(comisionB);
let promedioC: number = obtenerPromedio(comisionC);

let texto1: string = "El Mayor Promedio es: ";
let texto2: string = " correspondiente a la comisión ";

if (promedioA === promedioB) {
  if (promedioA > promedioC) {
    console.log(texto1 + promedioA + texto2 + "A y a la comisión B");
  } else if (promedioA === promedioC) {
    console.log("Las 3 comisiones tienen el mismo promedio: " + promedioA);
  } else {
    console.log(texto1 + promedioA + texto2 + "C");
  }
} else if (promedioA > promedioB) {
  if (promedioA > promedioC) {
    console.log(texto1 + promedioA + texto2 + "A");
  } else if (promedioA === promedioC) {
    console.log(texto1 + promedioA + texto2 + "A y a la comisión C");
  } else {
    console.log(texto1 + promedioC + texto2 + "C");
  }
} else {
  if (promedioB > promedioC) {
    console.log(texto1 + promedioB + texto2 + "B");
  } else if (promedioB === promedioC) {
    console.log(texto1 + promedioB + texto2 + "B y a la comisión C");
  } else {
    console.log(texto1 + promedioC + texto2 + "C");
  }
}
