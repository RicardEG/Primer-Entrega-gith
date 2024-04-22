
alert("Bienvenido a la app de Calculos multiples on line")



function Interaccion(){
    const bienvenida = ["Gracias ", "por " , "tu " , "tiempo ", "calificanos en redes! "]
    for( i=0;i<bienvenida.length;i++)
    alert(bienvenida[i])
    console.log(bienvenida[i])
}



let resultado = 0

function calculovolumencilindro() { 
    alert("Por favor recuerda ingresar el valor en centimetros (cms) ")
   let primernro = parseInt(prompt("Ingrese la medida de la altura del cilindro "))
   let  segundonro = parseInt(prompt("Ingrese la medida del radio del cilindro"))
   let   pi = 3.1416
   resultado = (primernro*Math.pow(segundonro,2)*pi)
   alert("El volumen de tu cilindro es aproximadamente de : " + parseInt(resultado) + " Cm3 " + " Centimetros cubicos")
   
}




function calculoarea2 (){
      valortotal = parseInt (prompt("Ingrese el largo en mts"))* parseInt(prompt("ingrese el ancho o fondo en mts"))
      alert("El Valor en Mts cuadrados de tu area es " + valortotal)

}


function iniciosesion() {
    console.log("Ingresar usuario y contraseña ")
    
    let usrname = prompt("Ingresa tu nombre de usuario")
    let password = prompt("Ingresa la contaseña")

    if ((usrname === "Ricardo")&&(password === "Ricardo11")) 
        alert("Bienvenido " + usrname)

        else if
        ((usrname === "Javi")&&(password === "JavierG22")){
            alert("Bienvenido " + usrname)
        } 
        else if
            ((usrname === "Alesio")&&(password === "AlesioA33")) {
                alert("Bienvenido " + usrname)
        }else if
            ((usrname === "Alumno")&&(password === "Alumno1")) {
                    alert("Bienvenido " + usrname)
    }else{
        alert("Ingrese el usuario o la contraseña correcta")
    }


}

