function sendmail() {
    var params = {
        Firstname: document.getElementById("Firstname").ariaValue,
        Lastname: document.getElementById("Lastname").ariaValue,
        Uploadphoto: document.getElementById("Uploadphoto").ariaValue,
        Phonenumber: document.getElementById("Phonenumber").ariaValue,
        Email: document.getElementById("Email").ariaValue,
        Address: document.getElementById("Address").ariaValue,
        Country: document.getElementById("Country").ariaValue,
        State: document.getElementById("State").ariaValue,
        Birthdate: document.getElementById("Birthdate").ariaValue,
        Gender: document.getElementById("Gender").ariaValue,
        Myexperience: document.getElementById("Myexperience").ariaValue,
        Selecttemplate: document.getElementById("Selecttemplate").ariaValue,
    };

const serviceID ="service_x6zm9mo";
const templateID ="template_pg6chhr";

emailjs
.send(serviceID,templateID,params)
.then(res =>{
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
     document.getElementById("Uploadphoto").value = "";
     document.getElementById("Phonenumber").value = "";
      document.getElementById("Email").value = "";
       document.getElementById("Address").value = "";
        document.getElementById("Country").value = "";
         document.getElementById("State").value = "";
          document.getElementById("Birthdate").value = "";
           document.getElementById("Gender").value = "";
     document.getElementById("Myexperience").value = "";
    Seledocument.getElementById("Selecttemplate").value = "";
    console.log(res);
    alert("your message sent successfully");
 } )
.catch((err) => console.log(err));
}