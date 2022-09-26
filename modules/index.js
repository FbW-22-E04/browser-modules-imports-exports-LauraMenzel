import * as aspectsFunctions from "./aspect-ratio.js";
import * as percentageFunctions from "./percentage.js";

const modulo1 = document.querySelector("#modulo_1");
const modulo2 = document.querySelector("#modulo_2");
const moduloResult = document.querySelector("#modulo_result");

const percentage1 = document.querySelector("#percentage_1");
const percentage2 = document.querySelector("#percentage_2");
const percentageResult = document.querySelector("#percentage_result");

const percentageOf1 = document.querySelector("#percentageOf_1");
const percentageOf2 = document.querySelector("#percentageOf_2");
const percentageOfResult = document.querySelector("#percentageOf_result");

const difference1 = document.querySelector("difference_1");
const difference2 = document.querySelector("difference_2");
const differenceResult = document.querySelector("difference_result");
//

modulo1.addEventListener("input", () => {
  const outputModulo = percentageFunctions.modulo(
    +modulo1.value,
    +modulo2.value
  );
  moduloResult.value = outputModulo;
});

modulo2.addEventListener("input", () => {
  const outputModulo = percentageFunctions.modulo(
    +modulo1.value,
    +modulo2.value
  );
  moduloResult.value = outputModulo;
});

//Percentage

percentage1.addEventListener("input", () => {
  const outputPercentage = percentageFunctions.percentageOf(+percentage1.value, +percentage2.value);
  percentageResult.value = outputPercentage;
});
percentage2.addEventListener("input", () => {
  const outputPercentage = percentageFunctions.percentageOf(+percentage1.value, +percentage2.value);
  percentageResult.value = outputPercentage;
});

//PercentageOf

percentageOf1.addEventListener("input", () => {
  const outputOfPercentage = percentageFunctions.percentageOf(
    +percentageOf1.value,
    +percentageOf2.value
  );
  percentageOfResult.value = outputOfPercentage;
});
percentageOf2.addEventListener("input", () => {
  const outputOfPercentage = percentageFunctions.percentageOf(
    +percentageOf1.value,
    +percentageOf2.value
  );
  percentageOfResult.value = outputOfPercentage;
});

difference1.addEventListener("input", () => {
  const outputDifference = percentageFunctions.difference(+difference1.value, +difference2.value);

  differenceResult.value = outputDifference;
});

difference2.addEventListener("input", () => {
  const outputDifference = percentageFunctions.difference(+difference1.value, +difference2.value);

  differenceResult.value = outputDifference;
});
