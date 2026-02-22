let modoActual = "decimal";

const app = document.getElementById("app");
const tituloModo = document.getElementById("tituloModo");
const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const salida = document.getElementById("salida");

const btnModo = document.getElementById("btnModo");
const btnConvertir = document.getElementById("btnConvertir");
const btnSuma = document.getElementById("btnSuma");
const btnResta = document.getElementById("btnResta");
const btnMulti = document.getElementById("btnMulti");
const btnDiv = document.getElementById("btnDiv");

const decimalABinario = (num) => parseInt(num, 10).toString(2);
const binarioADecimal = (bin) => parseInt(bin, 2);

function escribirSalida(texto) {
    salida.textContent = texto;
}

function aplicarModo() {
    const modoCss = modoActual === "decimal" ? "modo-decimal" : "modo-binario";
    const modoContrario = modoActual === "decimal" ? "modo-binario" : "modo-decimal";

    document.body.classList.remove(modoContrario);
    document.body.classList.add(modoCss);
    app.classList.remove(modoContrario);
    app.classList.add(modoCss);

    tituloModo.textContent = modoActual === "decimal" ? "Modo decimal" : "Modo binario";
    btnModo.textContent = modoActual === "decimal"
        ? "Cambiar a modo binario"
        : "Cambiar a modo decimal";
}

function cambiarModo() {
    modoActual = modoActual === "decimal" ? "binario" : "decimal";
    aplicarModo();
    escribirSalida("Resultado:");
}

function ejecutarConversion() {
    const valor = n1.value.trim();

    if (modoActual === "decimal") {
        if (valor === "" || !Number.isInteger(Number(valor))) {
            escribirSalida("Error: introduce un número decimal entero válido");
            return;
        }
        escribirSalida(`Binario: ${decimalABinario(valor)}`);
        return;
    }

    if (!/^[01]+$/.test(valor)) {
        escribirSalida("Error: el valor no es binario");
        return;
    }

    escribirSalida(`Decimal: ${binarioADecimal(valor)}`);
}

function calcular(operacion) {
    if (modoActual === "binario") {
        escribirSalida("Error: en modo binario solo se permite convertir");
        return;
    }

    const valor1 = parseFloat(n1.value);
    const valor2 = parseFloat(n2.value);

    if (Number.isNaN(valor1) || Number.isNaN(valor2)) {
        escribirSalida("Error: introduce números válidos");
        return;
    }

    let resultado;

    switch (operacion) {
        case "sumar":
            resultado = valor1 + valor2;
            break;
        case "restar":
            resultado = valor1 - valor2;
            break;
        case "multiplicar":
            resultado = valor1 * valor2;
            break;
        case "dividir":
            resultado = valor2 !== 0 ? valor1 / valor2 : "Error: división por cero";
            break;
        default:
            resultado = "Operación no válida";
    }

    escribirSalida(`Resultado: ${resultado}`);
}

btnModo.addEventListener("click", cambiarModo);
btnConvertir.addEventListener("click", ejecutarConversion);
btnSuma.addEventListener("click", () => calcular("sumar"));
btnResta.addEventListener("click", () => calcular("restar"));
btnMulti.addEventListener("click", () => calcular("multiplicar"));
btnDiv.addEventListener("click", () => calcular("dividir"));

aplicarModo();