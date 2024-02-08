const c = (string) => {
  return console.log(string);
};
const p = {
  teclas: document.querySelectorAll("#calculadora ul li"),
  accion: "",
  digito: "",
  operaciones: document.getElementById("operaciones"),
  cantidadSignos: 0,
  cantidadDecimal: false,
  resultado: false,
  numeros: Array.from(document.getElementsByClassName("numero")),
  signos: Array.from(document.getElementsByClassName("signo")),
};

const m = {
  inicio: () => {
    p.teclas.forEach((e) => {
      e.addEventListener("click", m.oprimirTecla);
    });
    document.addEventListener("keydown", m.oprimirTeclado);
  },
  numero: (digito) => {
    p.cantidadSignos = 0;
    p.operaciones.innerHTML === "0" || p.resultado
      ? (p.operaciones.innerHTML = digito)
      : (p.operaciones.innerHTML += digito);
    p.resultado = false;
  },
  signo: (digito) => {
    ++p.cantidadSignos === 1
      ? (p.operaciones.innerHTML += digito)
      : c("mas de un signo");
    p.cantidadDecimal = false;
    p.resultado = false;
  },
  resultado: () => {
    p.resultado = true;
    p.cantidadDecimal = true;
    p.operaciones.innerHTML = eval(p.operaciones.innerHTML);
  },
  decimal: (digito) => {
    if (!p.cantidadDecimal && p.cantidadSignos === 0) {
      p.operaciones.innerHTML += digito;
      p.cantidadDecimal = true;
    }
    p.resultado = false;
  },
  oprimirTecla: (tecla) => {
    p.accion = tecla.target.getAttribute("class");
    p.digito = tecla.target.innerHTML;
    m.calculadora(p.accion, p.digito);
  },
  oprimirTeclado: (tecla) => {
    let numero = p.numeros.find((element) => {
      return element.innerHTML === tecla.key;
    });
    let signo = p.signos.find((element) => {
      return element.innerHTML === tecla.key;
    });
    tecla.key === "Enter"
      ? m.resultado()
      : tecla.key === "."
      ? m.decimal(tecla.key)
      : numero
      ? m.numero(numero.innerHTML)
      : signo
      ? m.signo(signo.innerHTML)
      : tecla.key === "Delete"
      ? m.borrar()
      : c("caracter no valido");
  },
  borrar: () => {
    p.operaciones.innerHTML = 0;
    p.cantidadSignos = 0;
    p.cantidadDecimal = false;
    p.resultado = false;
  },
  calculadora: (accion, digito) => {
    switch (accion) {
      case "numero":
        m.numero(digito);
        break;
      case "signo":
        m.signo(digito);
        break;
      case "igual":
        m.resultado();
        break;
      case "decimal":
        m.decimal(".");
        break;

      default:
        break;
    }
  },
};

m.inicio();

// Meme
const vecina = document.querySelector(".vecina");
const hazClick = document.querySelector(".haz-click");

vecina.addEventListener("click", hiddeVecina);
hazClick.addEventListener("click", hiddeVecina);

function hiddeVecina() {
  vecina.style.display = "none";
  hazClick.style.display = "none";
}
