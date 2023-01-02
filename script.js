import data from './MOCK_DATA.json'assert {type: 'json'};

let searchInput =document.getElementById("search-Input");
let searchbtn=document.getElementById("searchbtn");
let sortByAZ=document.getElementById("az");
let sortByZA=document.getElementById("za");
let sortBymarks=document.getElementById("bymarks");
let sortpassing=document.getElementById("bypassMarks");
let sortByclass=document.getElementById("byclass");
let sortbygender=document.getElementById("bygender");
let table=document.getElementById("table");

//eventlistener
searchbtn.addEventListener("click",search);
 sortBymarks.addEventListener("click",sortByMark);
 sortByclass.addEventListener("click",sortbyclass);
 sortpassing.addEventListener("click",sortByPassing);
 sortByAZ.addEventListener("click",sorta2z);
 sortByZA.addEventListener("click",sortz2a);
 sortbygender.addEventListener("click",sortGender1)
 

////Loading page
function loadResult(data){
   data.map((item)=>{
     let student =document.createElement("tr");
     student.innerHTML=`
    <td>${item.id}</td>
    
    <td><img src="${item.img_src}" height="40">${item.first_name+"  "+item.last_name}</td>
    <td>${item.gender}</td>
    <td>${item.class}</td>
    <td>${item.marks}</td>
    <td>${item.passing? "passing" :"Fails"}</td>
    <td>${item.email}</td>
   `
   table.append(student)
 })
}
loadResult(data);
//sortbymarks----accendingorder/                 ok
function sortByMark(){
    table.innerHTML="";
      let IncMarks=data.sort(function(a, b){return a.marks-b.marks}); 
      loadResult(IncMarks)
 }
 //sortbyclass----accendingorder/                ok
function sortbyclass(){
    table.innerHTML="";
      let IncClass=data.sort(function(a, b){return a.class-b.class});
      loadResult(IncClass);
}
//sortbypassing/                                 ok
 function sortByPassing(){
    table.innerHTML="";
    let passResult=data.filter((item)=>{
        if(item.passing===true)
        return item;
    })
    loadResult(passResult)
 }

//a-----z/                                       ok
function sorta2z(){
   table.innerHTML="";
   let az=data.sort((a,b)=>{
      if(a.first_name.toLowerCase()<b.first_name.toLowerCase())
      return -1;
   })
   loadResult(az);
} 

//z------a/                                      ok
function sortz2a(){
   table.innerHTML="";
   let za=data.sort((a,b)=>{
      if(a.first_name.toLowerCase()>b.first_name.toLowerCase())
      return -1;
   })
   loadResult(za);
} 






//gender                                     
function sortGender1(){
   table.innerHTML="";
  let sfemale=data.filter((item)=>{
   return item.gender=="Female";       
   })
     
}
function search () {
   table.innerHTML="";
    let s=searchInput.value;
    let matchedItems=data.filter((item)=>{
        return item.first_name.toLowerCase().includes(s.toLowerCase());
        return item.last_name.toLowerCase().includes(s.toLowerCase());
        
    })
    loadResult(matchedItems);
}