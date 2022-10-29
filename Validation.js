 // Elaborado por Jorge Alberto Diaz Paniagua y Joel Garcia Gil
function myFunction() {
    
 
    let x1 = document.getElementById("nombre").value;

  // NUMERO DE CONTROL
  
    let x3 = document.getElementById("numeroctl").value;
    const regex3 = /^(m|l)+[0-9]{8}$/i;
  
    if (regex3.test(x3)) {
      text="Numero de control valido";
    }
    else {
      text="Numero de control no valido";
    }
  
    document.getElementById("numero_control").innerHTML = text;

    // RFC

    let x4 = document.getElementById("RFC").value;
    const regex4 = /^[A-Z]{4}([0-9]{6})\w{3}$/i;
    const FechaNac = regex4.exec(x4);
    if (regex4.test(x4)) {
      text="Numero de RFC valido";
    }
    else {
      text="Numero de RFC no valido";
    }
  
    document.getElementById("numero_RFC").innerHTML = text;

    // Número telefónico de Morelia (443)

    let x5 = document.getElementById("numerotel").value;
    const regex5 = /^[443].+[0-9]{7}$/i;
  
    if (regex5.test(x5)) {
      text="Numero telefonico valido";
    }
    else {
      text="Numero telefonico no valido";
    }
  
    document.getElementById("numero_tel").innerHTML = text;

    // Correo institucional del Tec de Morelia

    let x6 = document.getElementById("correoinst").value;
    const regex6 = /^(m|l|d)+[0-9]{8}(@)(morelia)(.)(tecnm)(.)(mx)$/i;
     const validadornuncontrolycorreo= regex6.exec(x6);
    if (regex6.test(x6)) {
      text="correo valido";
    }
    else {
      text="correo no valido";
    }
  
    document.getElementById("correo_inst").innerHTML = text;


  let x7 = document.getElementById("nombre").value;
  const regex7 = /[A-Z a-z]*[a-z]*/i;
  const nombre = regex7.exec(x7); 
  console.log("nombre: "+nombre);
  const Concatenados = "Usuario verificado: "+nombre+" nacido el "+FechaNac[1];
  document.getElementById("Datos_Generados").innerHTML = Concatenados;

}