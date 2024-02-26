<?php

// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$database = "registro";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $database);

// Verificar conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Procesar datos recibidos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $correo = $_POST['correo'];
    $contrasena = $_POST['contrasena'];
    $rol = $_POST['rol'];
    
    if ($rol === 'profesor') {
        $id_profesor = $_POST['id_usuario']; 
        $sql = "INSERT INTO Profesores (id_profesor, nombre, apellido, correo, contrasena) VALUES ('$id_profesor', '$nombre', '$apellido', '$correo', '$contrasena')";
    }
    // Insertar datos en la tabla de Estudiantes si el rol es "estudiante"
    elseif ($rol === 'estudiante') {
        $id_estudiante = $_POST['id_usuario']; // Suponiendo que el ID de usuario se envía desde el formulario
        $sql = "INSERT INTO Estudiantes (id_estudiante, nombre, apellido, correo, contrasena) VALUES ('$id_estudiante', '$nombre', '$apellido', '$correo', '$contrasena')";
    }

    // Ejecutar la consulta SQL
    if ($conn->query($sql) === TRUE) {
        echo "Datos insertados correctamente";
    } else {
        echo "Error al insertar datos: " . $conn->error;
    }
}

// Cerrar conexión
$conn->close();

