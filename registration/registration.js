let allUsers = [];

function Submit() {
    let fname, lname, email, pass, dropdownMenuButton, flexRadioDefault

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

    allUsers.push({ "firstName": fname, "lastName": lname, "email": email, "password": pass, "gen": gender, "subjects": dropdownMenuButton });
    let str = '';


    Showdata()
    Clear()




    // Document.getElementsByClassName("bottom1").visibility= "visible"
    // document.getElementById("name1").visibility= "visible";
    // document.getElementById("gen").innerHTML = gender;



    // document.getElementById("tbodys").innerHTML = str;
}
function Showdata() {
    console.log(allUsers)
    alert("Record Inserted")
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
    document.getElementById("flexRadioDefault").value = ""
    document.getElementById("dropdownMenuButton").value = ""
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


}

function editrecord(row) {

    document.getElementById("fname").value = allUsers[row].firstName
    document.getElementById("lname").value = lname = allUsers[row].lastName;
    document.getElementById("email").value = email = allUsers[row].email;
    document.getElementById("pass").value = pass = allUsers[row].password;
    // document.getElementById("flexRadioDefault").value = gender = allUsers[row].gen;
    // document.getElementById("dropdownMenuButton").value = allUsers[row].subjects;

    document.getElementById("register_div").innerHTML = ""
    let updaterg = "<button type='button' onclick='register(" + row + ")' class='btn btn-success btn-lg btn-block'>Update Now</button>"
    document.getElementById("register_div").innerHTML = updaterg
}


function register(Row_index) {
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







