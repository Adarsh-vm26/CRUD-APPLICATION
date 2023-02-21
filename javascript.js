let adduserbutton=document.getElementById('adduser');
let usernametext=document.getElementById('username');
let recordsDisplay=document.getElementById('records')
let userarray=[];
let edit=null;


 let objstr=localStorage.getItem('users');  
if(objstr!=null){

userarray=JSON.parse(objstr);
}

displayinformation();
adduserbutton.onclick=()=>{
    const name=usernametext.value;
    if(edit!=null){
        userarray.splice(edit,1,{'name':name});
        edit=null;
    }else{
    
          userarray.push({"name":name});
           }
    
   
saveinformation(userarray);
usernametext.value="";
displayinformation();
    
    

    
}


// function adduser(){
//     let nam =usernametext.value
//     alert(nam);
// }

// adduserbutton.addEventListener("click",adduser)







function saveinformation(userarray){
    let str=JSON.stringify(userarray);
    localStorage.setItem("users",str);
    

}



function displayinformation(){

    let statement="";
    userarray.forEach((user,i)=>{
        statement+= `<tr>
        <th scope="row">${i+1}</th>
        <td>${user.name}</td>
        <td>
            <button onclick='editinformation(${i})' type="button" class="btn btn-success m-3"><i  class="fa fa-edit"> Edit</i></button>|
            <button onclick='deleteinformation(${i})' type="button" class="btn btn-danger"><i class="fa fa-trash-o"> Delete</i></button>

        </td>

      </tr>`;
      recordsDisplay.innerHTML=statement;

    });


}

function editinformation(id){
    edit=id;
    usernametext.value=userarray[id].name;
    }



function deleteinformation(id){

    userarray.splice(id,1);
    saveinformation(userarray);

    displayinformation();


}


