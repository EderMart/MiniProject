
switch (opcion) {
  case 1:
    function boarraLetraR(palabra) {
      let resultado = "";
      let anterior = "";

      for (let letra of palabra) {
        if (letra != anterior) {
          resultado += letra;
        }
        anterior = letra;
      }
      return resultado;
    }
    let fraseOpalabra = prompt("Ingrese un frase o palabra...");
    let palabraSinR = boarraLetraR(fraseOpalabra);
    document.write(palabraSinR);

    break;
  case 2:
    let palabra = prompt(
      "Ingrese un frase o palabra para contar sus vocales..."
    );
    function contarVocales(frase) {
      contador = 0;
      for (i = 0; i < frase.length; i++) {
        caracter = frase[i].toLowerCase();
        if (
          caracter === "a" ||
          caracter === "e" ||
          caracter === "i" ||
          caracter === "o" ||
          caracter === "u"
        ) {
          contador++;
        }
      }
      return contador;
    }
    let totalVocales = contarVocales(palabra);
    document.write("Total de vocales encontradas ", totalVocales);
    break;

  case 3:
    let numero = prompt("Ingrese un numero...");
    if (numero) {
      document.write("<h3>Tabla de multiplicar del ", numero, "</h3>");
      i = 1;
      while (i <= 10) {
        resultado = numero * i;
        document.write(numero, "x", i, "=", resultado, "<br>");
        i++;
      }
    } else {
      alert("Valor ingresado no valido");
    }
    break;

    case 4:
        let pregunta = parseInt(prompt("¿Que codigo deseas ver? Elige 1, 2, 3"))

        if(pregunta === 1){
          document.write("<h3>Eliminar letra repetida</h3>")
          document.write("<br>")
            document.write("function borraLetraR(palabra) {", "<br>",
                "let resultado = ''", "<br>",
                "let anterior = ''", "<br>",
                "<br>",
                "for (let letra of palabra) {", "<br>",
                  "if (letra != anterior) {", "<br>", 
                    "resultado += letra;", "<br>", 
                  "}", "<br>", 
                  "anterior = letra;", "<br>",
                "}", "<br>",
                "return resultado;", "<br>",
              "}", "<br>",
              "let fraseOpalabra = prompt('Ingrese un frase o palabra...');", "<br>",
              "let palabraSinR = boarraLetraR(fraseOpalabra);", "<br>",
              "document.write(palabraSinR);")
        }else{
            if(pregunta === 2){
              document.write("<h3>Conteo de voales</h3>")
              document.write("<br>")
                document.write("let palabra = prompt(", "<br>",
                    "'Ingrese un frase o palabra para contar sus vocales...'", "<br>", 
                  ");", "<br>",
                  "function contarVocales(frase) {", "<br>",
                    "contador = 0;", "<br>",
                   " for (i = 0; i < frase.length; i++) {", "<br>",
                      "caracter = frase[i].toLowerCase();", "<br>",
                     " if (", "<br>",
                        "caracter === 'a' ||", "<br>",
                        "caracter === 'e' ||", "<br>",
                        "caracter === 'i' ||", "<br>",
                        "caracter === 'o' ||", "<br>",
                        "caracter === 'u'", "<br>",
                      ") ", "<br>",
                      "{", "<br>",
                        "contador++;", "<br>",
                      "}", "<br>",
                    "}", "<br>",
                    "return contador;", "<br>",
                  "}", "<br>",
                  "let totalVocales = contarVocales(palabra);", "<br>",
                  "document.write('Total de vocales encontradas' , totalVocales)")
            }
        }if( pregunta === 3){
          document.write("<h3>Tablas de multiplicar</h3>")
          document.write("<br>")
          document.write("'let numero = prompt(Ingrese un numero...)'", "<br>",
          'if (numero) {', "<br>",
            "document.write('<h3>Tabla de multiplicar del ', numero, </h3>');", "<br>",
            "i = 1;", "<br>",
            "while (i <= 10) {", "<br>",
              "resultado = numero * i;", "<br>",
              "document.write(numero, 'x', i, '=', resultado, '<br>');", "<br>",
              "i++;", "<br>",
            "}", "<br>",
          "} else {", "<br>",
            "alert('Valor ingresado no valido');", "<br>",
          "}")

        }
        break

  case 5:
    alert("Saliendo del programa");

  default:
    break;
}


