function calcularPromedio() {
    var c1 = parseInt(document.getElementById("c1").value);
    var c2 = parseInt(document.getElementById("c2").value);
    var c3 = parseInt(document.getElementById("c3").value);
    var c4 = parseInt(document.getElementById("c4").value);
    var c5 = parseInt(document.getElementById("c5").value);

    var promedio = (c1 + c2 + c3 + c4 + c5) / 5;

    document.getElementById("resultado").textContent = promedio.toFixed(2);
    
    document.getElementById("tabla-calificaciones").style.display = "table";

    mostrarDatos();
}

function mostrarDatos() {
    var matricula = document.getElementById("matricula").value;
    var nombre = document.getElementById("nombre").value;

    for (var i = 1; i <= 5; i++) {
        var materia = document.getElementById("m" + i).value;
        var calificacion = document.getElementById("c" + i).value;

        var newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${matricula}</td>
            <td>${nombre}</td>
            <td>${materia}</td>
            <td>${calificacion}</td>
        `;
        document.getElementById("tabla-body").appendChild(newRow);
    }
}
