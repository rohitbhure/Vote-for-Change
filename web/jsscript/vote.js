/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function addVote()
{
    var cid=$('input[type=radio][name=flat]:checked').attr('id')
    var data={
        candidateid:cid
    };
    console.log(cid);
    $.post("AddVoteControllerServlet",data,processResponse);
}

function processResponse(responseText)
{
    console.log(responseText+"hiii");
    if(responseText.trim()==='success')
    {
          swal("Success!","Voted!","success").then(function(value){
            console.log(responseText.trim());
            window.location='votingresponse.jsp';
        });
    }
    else{
        swal("Error!","You Have Allready casted your vote!","error").then(function(value){
            console.log(responseText.trim());
            window.location='votedenied.jsp';
        });
    }
}