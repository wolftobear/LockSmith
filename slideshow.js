document.getElementById('download').onclick=function download() {
    000
}

function height(){
    var table=document.getElementById("mytable");
    var blue=document.getElementById("blue");
    for(i=0;i<blue.style.height;i+13+'px');
        if(table.style.height>blue.style.height){
            blue.style.height=i;
        }
}


document.getElementById('loginbutton').onclick=function clicking() {
   var users="guest5509";

    var username=document.getElementById('Username').value;

        if (username=users){
            document.getElementById('sub1').style.display="none";
            document.getElementById('sub2').style.display="none";
            document.getElementById('mytable').style.opacity="1";
            document.getElementById('add').style.opacity="1";
        }else{
            return;
        }

    
}





document.getElementById('add').onclick=function adding(){
var modal=document.getElementById("modal");
var content=document.getElementById('modal-content');

modal.style.display="block"

content.style.display="block"

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  var table=document.getElementById("mytable");
  var blue=document.getElementById("blue");
  for(i=0;i<blue.style.height;i+13+'px');
      if(table.style.height>blue.style.height){
          blue.style.height=i;
      }

}

document.getElementById('apply').onclick=function plus(){
    var row=document.createElement('tr');
        row.style.width="100%";
        row.style.height="15px"
        row.style.border="orange solid";
            var data=[data1,data2,data3];
                var data1=document.createElement('td');
                var data2=document.createElement('td');
                var data3=document.createElement('td');

                    
                    data1.style.width="33%";
                    data1.style.height="15px";
                    data1.style.color="white";
                    data1.style.textAlign="center";

                    data2.style.width="33%";
                    data2.style.height="15px";
                    data2.style.color="white";
                    data2.style.textAlign="center";

                    
                    data3.style.width="33%";
                    data3.style.height="15px";
                    data3.style.color="white";
                    data3.style.textAlign="center";

                    
                    data1.setAttribute("id","date");
                    data2.setAttribute("id","file");
                    data3.setAttribute("id","type");
                        
                        data1.innerHTML=document.getElementById('datetext').value;
                        data2.innerHTML=document.getElementById('filetext').value;
                        data3.innerHTML=document.getElementById('typetext').value;
                    
                    document.getElementById('mytable').appendChild(row);
                    row.appendChild(data1);
                    row.appendChild(data2);
                    row.appendChild(data3);

                return(0);
}