
function SendMail(){
    var params={

        name:document.getElementById("name").value,
        phone:document.getElementById("phone").value,
        email:document.getElementById("email").value,
        city:document.getElementById("city").value,
        service:document.getElementById("service").value,
        budget:document.getElementById("budget").value,
        address:document.getElementById("address").value
    }

const serviceID="service_0blqgpe";
const templateID="template_jdc0ms9";
emailjs.send(serviceID,templateID,params)
.then(
    res=>{
        document.getElementById("name").value="";
        document.getElementById("phone").value="";
        document.getElementById("email").value="";
        document.getElementById("city").value="";
        document.getElementById("service").value="";
        document.getElementById("budget").value="";
        document.getElementById("address").value="";
        console.log(res)
        alert("email recieved");
    })
    .catch((err)=>console.log(err));
    console.log("hi")
}