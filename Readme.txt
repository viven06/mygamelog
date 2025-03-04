EJECUTAR PROYECTO

Los pasos a seguir son:
1.Conectese a la maquina virtual proporcionada estando dentro de la universidad escribiendo en el buscador de windows "rdp". 
    La IP es: 10.6.101.233
    Usuario: admin
    Contraseña: villabona 

2. Una vez en la maquina virtual, abrir XAMPP ejecutándolo como administrador y activar Apache y MySQL, se debería poder ver la BD en phpMyAdmin en el navegador llamada "proyecto"

3. Una vez ya esta funcionando la BD, abra el VS Code, ir a open folder y elegir la carpeta "03_My_Game_Log" y abrirla

4. En el VS Code ir al botón terminal en la parte superior de izquierda y buscar la opción de new terminal y abrir 2 terminales

5. En la primera terminal escribir el comando para dirigrise a la carpeta del BackEnd:
    cd backend-mygamelog

6. En la primera terminal ya ubicados en la carpeta de BackEnd ejectuar el comando -node server- para iniciar el servidor 

7. En la segunda terminal escribir el comando para dirigirse a la carpeta del FrontEnd:
    cd frontend-mygamelog

8. En la segunda terminal ya ubicados en la carpeta de FrontEnd ejecutar el comando -npm start- para iniciar el cliente

9. En el navegador ya debería verse la pagina y funcionar correctamente

10. Para ver el archivo PDF del proyecto alojado en una carpeta publica del servidor backend, acceder a la direccion url:
    http://localhost:8000/pdf
