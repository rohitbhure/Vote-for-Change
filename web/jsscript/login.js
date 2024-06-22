/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var adhar_no,password;
function connectUser()
{
    adhar_no=$("#username").val();
    password=$("#password").val();
    if(validate())
    {
        var data={adhar_no:adhar_no,password:password};
        var xhr=$.post("LoginControllerServlet",data,proccessResponse);
        xhr.fail(errorhandler);
    }
}
function validate()
{
    if(adhar_no==="" || password==="")
    {
        swal("Error!","All feild should be filled!","error");
        return false;
    }
    return true;
}
function proccessResponse(responseText,textStatus,xhr)
{
    if(responseText.trim()==="error")
    {
        swal("Access Denied!","Invalid userid/password!","error");
    }
    else if(responseText.indexOf("jsessionid")!==-1) 
    {
        swal("Success!","Successfully Logged!","success").then(function(value){
            console.log(responseText.trim());
            window.location=responseText.trim();});
    }
    else{
         swal("Error!","Some problem occurred"+responseText.trim(),"error");
    }
}
function errorhandler(xhr)
{   
    swal("Error!","Something went wrong Try Again!","error");
}