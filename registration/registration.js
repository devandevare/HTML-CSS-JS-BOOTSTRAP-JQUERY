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
    

    console.log(allUsers)
    for (let index = allUsers.length-1 ; index < allUsers.length; index++) {
        fname = allUsers[index].firstName;
        lname = allUsers[index].lastName;
        email = allUsers[index].email;
        pass = allUsers[index].password;
        gender = allUsers[index].gen;
        dropdownMenuButton = allUsers[index].subjects;
        // num = num + 1;
        // html = '<tr><td>'+firstname+'</td></tr>';
        let str = "<tr><td>" + fname + "</td><td>" + lname + "</td><td>" + email + "</td><td> *******</td><td>" + gender + "</td><td>" + dropdownMenuButton + "<td><a href='#' onclick='deleterecord(" + index + ")'>Delete</a></td></tr>"
        $("#tbodys").append(str);
        str = '';
        
    }

    



    // Document.getElementsByClassName("bottom1").visibility= "visible"
    // document.getElementById("name1").visibility= "visible";
    // document.getElementById("gen").innerHTML = gender;



    // document.getElementById("tbodys").innerHTML = str;
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
    allUsers.splice(deleteIndex, deleteIndex)
    for (let index = 0; index < allUsers.length; index++) {
        fname = allUsers[index].firstName;
        lname = allUsers[index].lastName;
        email = allUsers[index].email;
        pass = allUsers[index].password;
        gender = allUsers[index].gen;
        dropdownMenuButton = allUsers[index].subjects;
       
        let str = "<tr><td>" + fname + "</td><td>" + lname + "</td><td>" + email + "</td><td> *******</td><td>" + gender + "</td><td>" + dropdownMenuButton + "<td><a href='#' onclick='deleterecord(" + index + ")'>Delete</a></td></tr>"
        $("#tbodys").append(str);
        str = '';

    }

    
}