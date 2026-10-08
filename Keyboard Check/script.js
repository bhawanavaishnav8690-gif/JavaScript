const contaier = document.querySelector(".container");
window.addEventListener("keydown", function (e) {
  console.log(e.key);
  contaier.innerHTML = `
<h2>HTML Table</h2>
<table border="2">
  <tr>
    <th>Key</th>
    <th>Key code</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "Space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
</div>
`;
});
