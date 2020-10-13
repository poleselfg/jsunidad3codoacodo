function validacion() {
  if (document.getElementById("User").value == "") {
    alert("[ERROR] Complete campo usuario");
    return false;
  } else if (document.getElementById("password").value == "") {
    alert("[ERROR] Complete campo Password");
    return false;
  } else if (document.getElementById("User").value.indexOf("@") == -1) {
    alert("[ERROR] El campo usuario debe contener un @");
    return false;
  }
  // Si el script ha llegado a este punto, todas las condiciones
  // se han cumplido, por lo que se devuelve el valor true
  return true;
}
