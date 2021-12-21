let allUsers = [];
let valfirstname = false;

function Submit() {

    let fname, lname, email, pass, dropdownMenuButton, flexRadioDefault
    let pass1 = document.getElementById("pass").value
    let pass2 = document.getElementById("cpass").value



    fname = document.getElementById("name1").innerHTML = document.getElementById("fname").value;
    lname = document.getElementById("name2").innerHTML = document.getElementById("lname").value;
    email = document.getElementById("email1").innerHTML = document.getElementById("email").value;
    pass = document.getElementById("pass1").innerHTML = document.getElementById("pass").value;
    document.getElementById("pass2").innerHTML = document.getElementById("cpass").value;
    // document.getElementById("gen").innerHTML = document.getElementById("flexRadioDefault1").value;
    dropdownMenuButton = document.getElementById("dropdwn").innerHTML = document.getElementById("dropdownMenuButton").value;
    flexRadioDefault = document.getElementsByName("flexRadioDefault")

    gen = document.getElementsByName("flexRadioDefault")
    if (gen[0].checked) {
        var gender = "Male";

    }
    if (gen[1].checked) {
        var gender = "Female";
    }
    document.getElementById("gen").innerHTML = gender

    if (fname == "") {
        // alert("error")

        $("#fnamelabel").removeClass("d-none");


    }
    else if (lname == "") {
        // alert("error")
        $("#lnamelabel").html("*Enter a name")
    }
    else if (email == "") {
        // alert("error")
        $("#email_label").html("*Enter a email")

    }
    else if (pass1 !== pass2) {
        // alert("error")
        $("#cnf_pass").html("*Password does not match")
    }
    else {
        $("#fnamelabel").addClass("d-none");

        allUsers.push({ "firstName": fname, "lastName": lname, "email": email, "password": pass, "gen": gender, "subjects": dropdownMenuButton });
        let str = '';
    }



    Showdata()
    Clear()




    // Document.getElementsByClassName("bottom1").visibility= "visible"
    // document.getElementById("name1").visibility= "visible";
    // document.getElementById("gen").innerHTML = gender;



    // document.getElementById("tbodys").innerHTML = str;
}

function fnameBlur() {

    const fname = $("#fname").val();

    if (fname === "") {
        $("#fnamelabel").removeClass("d-none");
    }
    else {
        $("#fnamelabel").addClass("d-none");
    }


}

function lnameBlur() {

    const lname = $("#lname").val();

    if (lname === "") {
        $("#lnamelabel").removeClass("d-none");
    }
    else {
        $("#lnamelabel").addClass("d-none");
    }


}

function Showdata() {
    console.log(allUsers)
    // alert("Record Inserted")
    for (let index = allUsers.length - 1; index < allUsers.length; index++) {
        fname = allUsers[index].firstName;
        lname = allUsers[index].lastName;
        email = allUsers[index].email;
        pass = allUsers[index].password;
        gender = allUsers[index].gen;
        dropdownMenuButton = allUsers[index].subjects;
        // num = num + 1;
        // html = '<tr><td>'+firstname+'</td></tr>';

        let str = "<tr><td>" + fname + "</td><td>" + lname + "</td><td>" + email + "</td><td> *******</td><td>" + gender + "</td><td>" + dropdownMenuButton + "<td><a href='#' onclick='deleterecord(" + index + ")'>Delete</a></td><td><a href='#' onclick='editrecord(" + index + ")'>Edit</a></td></tr>"
        $("#tbodys").append(str);
        str = '';

    }

}

function pass1blur() {
    let pass1 = document.getElementById("pass").value
    if (pass1 === "") {
        $("#pass1").removeClass("d-none");
    }
    else {
        $("#pass1").addClass("d-none");
    }
    if (pass1.length <= 8) {
        $("#pass1").removeClass("d-none");
    }
    else {
        $("#pass1").addClass("d-none");
    }




}

function pass2blur() {

    let pass1 = document.getElementById("pass").value
    let pass2 = document.getElementById("cpass").value


    if (pass1 !== pass2) {
        $("#cnf_pass").removeClass("d-none");
    }
    else {
        $("#cnf_pass").addClass("d-none");
    }


}




function ValidateEmail() {
    let mail_text = document.getElementById("email").value
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email === "") {
        $("#email_label").removeClass("d-none");
    }
    else {
        $("#email_label").addClass("d-none");
    }

    if (mail_text.match(mailformat)) {
        // alert("Valid email address!");
        $("#email_label").html("")
        document.getElementById("register").disabled = false;
        $("#email_label").removeClass("d-none");
        // document.form1.text1.focus();
        // return true;
    }
    else {
        // alert("You have entered an invalid email address!");
        $("#email_label").html("*Enter a valid Email")
        document.getElementById("register").disabled = true;
        $("#email_label").removeClass("d-none");
        // document.form1.text1.focus();
        // return false;
    }
}



function Clear() {


    document.getElementById("name1").innerHTML = ""
    document.getElementById("name2").innerHTML = ""
    document.getElementById("email1").innerHTML = ""
    document.getElementById("pass1").innerHTML = ""
    document.getElementById("pass2").innerHTML = ""
    document.getElementById("gen").innerHTML = ""
    document.getElementById("dropdwn").innerHTML = ""
    document.getElementById("fname").value = ""
    document.getElementById("lname").value = ""
    document.getElementById("email").value = ""
    document.getElementById("pass").value = ""
    document.getElementById("cpass").value = ""
    document.getElementById("flexRadioDefault").checked = false;
    document.getElementById("dropdownMenuButton").value = ""
    $("#tbodys").html("");
}

function deleterecord(deleteIndex) {
    $("#tbodys").html("");
    allUsers.splice(deleteIndex, 1)
    for (let index = 0; index < allUsers.length; index++) {
        fname = allUsers[index].firstName;
        lname = allUsers[index].lastName;
        email = allUsers[index].email;
        pass = allUsers[index].password;
        gender = allUsers[index].gen;
        dropdownMenuButton = allUsers[index].subjects;

        let str = "<tr><td>" + fname + "</td><td>" + lname + "</td><td>" + email + "</td><td> *******</td><td>" + gender + "</td><td>" + dropdownMenuButton + "<td><a href='#' onclick='deleterecord(" + index + ")'>Delete</a></td><td><a href='#' onclick='editrecord(" + index + ")'>Edit</a></td></tr>"
        $("#tbodys").append(str);
        str = '';

    }

    alert("Row deleted")

}

function editrecord(row) {

    document.getElementById("fname").value = allUsers[row].firstName
    document.getElementById("lname").value = lname = allUsers[row].lastName;
    document.getElementById("email").value = email = allUsers[row].email;
    document.getElementById("pass").value = pass = allUsers[row].password;
    // document.getElementById("flexRadioDefault").value = gender = allUsers[row].gen;
    // document.getElementById("dropdownMenuButton").value = allUsers[row].subjects;

    document.getElementById("register_div").innerHTML = ""
    let updaterg = "<button type='button' onclick='update(" + row + ")' class='btn btn-success btn-lg btn-block'>Update Now</button>"
    document.getElementById("register_div").innerHTML = updaterg
}


function update(Row_index) {
    // Submit();

    allUsers[Row_index].firstName = document.getElementById("fname").value;;
    allUsers[Row_index].lastName = document.getElementById("lname").value;
    allUsers[Row_index].email = document.getElementById("email").value;
    allUsers[Row_index].password = document.getElementById("pass").value;
    // allUsers[row].gen = document.getElementById("flexRadioDefault").value;
    // allUsers[row].subjects = document.getElementById("dropdownMenuButton").value;


    console.log("After Update", allUsers)
    document.getElementById("register_div").innerHTML = ""
    let register = "<button type='button' onclick='Submit()' class='btn btn-success btn-lg btn-block'>Register Now</button>"
    document.getElementById("register_div").innerHTML = register
    alert("Row Updated")
    display_records()
}

function display_records() {

    $("#tbodys").html("");
    for (let index = 0; index < allUsers.length; index++) {
        fname = allUsers[index].firstName;
        lname = allUsers[index].lastName;
        email = allUsers[index].email;
        pass = allUsers[index].password;
        gender = allUsers[index].gen;
        dropdownMenuButton = allUsers[index].subjects;

        let str = "<tr><td>" + fname + "</td><td>" + lname + "</td><td>" + email + "</td><td> *******</td><td>" + gender + "</td><td>" + dropdownMenuButton + "<td><a href='#' onclick='deleterecord(" + index + ")'>Delete</a></td><td><a href='#' onclick='editrecord(" + index + ")'>Edit</a></td></tr>"
        $("#tbodys").append(str);
        str = '';

    }
    Clear()

}







