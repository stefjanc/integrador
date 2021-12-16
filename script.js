function resumen(){
    var precio = 200
    var np = 0
    var cat = document.getElementById("category").value
    var docCant = document.getElementById("cant").value
    switch(cat){
      case '0': np = (precio * 0.2) * docCant
      break
      case '1': np = (precio * 0.5) * docCant
      break
      case '2': np = (precio * 0.85) * docCant
      break
      default: np = precio
    }
    var pr = document.getElementById("precio")
    pr.innerHTML = np
}    

function borrar(){
      var ids = ["cant", "nom", "ape", "cor"]
     for(var i=0; i < ids.length; i++){
        document.getElementById(ids[i]).value = ""
     }
     document.getElementById("precio").innerHTML = "" 

}