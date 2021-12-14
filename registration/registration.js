function Submit() {
    document.getElementById("name1").innerHTML = document.getElementById("fname").value;
    document.getElementById("name2").innerHTML = document.getElementById("lname").value;
    document.getElementById("email1").innerHTML = document.getElementById("email").value;
    document.getElementById("pass1").innerHTML = document.getElementById("pass").value;
    document.getElementById("pass2").innerHTML = document.getElementById("cpass").value;
    //document.getElementById("gen").innerHTML = document.getElementById("flexRadioDefault1").value;
    document.getElementById("dropdwn").innerHTML = document.getElementById("dropdownMenuButton").value;

    if (document.getElementById("flexRadioDefault1").chec) {
        document.getElementById("gen").innerHTML="Male"

    } else {
        document.getElementById("gen").innerHTML="Female"
    }

}