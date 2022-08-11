
 
 let menu = document.querySelector('#menu-bars');
 let header = document.querySelector('header');
 
 menu.onclick = () =>{
     menu.classList.toggle('fa-times');
     header.classList.toggle('active');
 }
 
 window.onscroll = () =>{
     menu.classList.remove('fa-times');
     header.classList.remove('active');
 }
 

 document.querySelector("#button").addEventListener("click",() =>
{
    const xhr=new XMLHttpRequest()
   //  const value=document.querySelector("#search").value
   //        https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-11
    let url=`https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-11&maxResults=100`;
    xhr.open('GET',url)
console.log(`ReadyState - ${xhr.readyState}`)


//execute the function when ready state change
xhr.onreadystatechange=()=>{
	console.log(`readystate - ${xhr.readyState}`)
	if(xhr.readyState==4 && xhr.status==200){
	var objectResponse = JSON.parse(xhr.responseText)
	console.log(objectResponse)
	var output=''
	for(i=0;i<50;i++)
	{
	output+=`
    
    <div class="card" ;">
  <div class="card-body">
  <h6 class="card-subtitle mb-2 text-muted" style="color: #777;
  font-size: 25px;
  text-decoration: underline;">${objectResponse[i].id}</h6>
    <h5 class="card-title" id="title" >${objectResponse[i].title}</h5>
    <p class="card-text">${objectResponse[i].body}</p>
   
  </div>
</div>
    `
    }

   
    var x = document.getElementById("content");
    if (x.style.display === "none") {
      x.style.display = "block",
      x.style.display= "flex",
      x.style.flexWrap= "wrap",
      x.style.gap="2%";
    } else {
      x.style.display = "none";
    }
    
    
	document.querySelector("#content").innerHTML=output;

  
    }
}
	
//send the request
xhr.send();

})
 


