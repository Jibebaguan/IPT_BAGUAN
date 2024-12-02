
function calculate() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const num3 = parseFloat(document.getElementById('num3').value);
  const num4 = parseFloat(document.getElementById('num4').value);
  const num5 = parseFloat(document.getElementById('num5').value);

  const m = num1 * num2;
  const d = m / num3;
  const a = d + num4;
  const s = a - num5;

  document.getElementById('result').textContent = `The result is: ${s}`;
}
