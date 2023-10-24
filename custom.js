function convertToCelsius() {

    const celsiusInput = document.getElementById("celsius").value;

    const fahrenheitResult = (celsiusInput * 9/5) + 32;

    document.getElementById("result").textContent = fahrenheitResult.toFixed(2);

}
