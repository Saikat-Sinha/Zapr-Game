
function shuffle(num) {
  var array=[];
  for(i=1;i<=num; i++){
    array.push(i);
  }
    var i = array.length,
        j = 0,
        temp;
    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function populate(){
  var ranArr = shuffle(16);
  for(var i=1; i<=ranArr.length; i++){
    document.getElementById(ranArr[i-1]).innerHTML= i;
    if(document.getElementById(i).innerHTML == "16"){
      document.getElementById(i).innerHTML="";
    }
  }
}

function clickMove(numb){
  for(var i=1; i<=16; i++){
    if(document.getElementById(i).innerHTML == ""){
      var null_val = document.getElementById(i).innerHTML;
        if(numb == 38 && i != 1 && i != 2 && i != 3 && i != 4){
          //up
          var up_val = document.getElementById(i-4).innerHTML;
          document.getElementById(i).innerHTML = up_val;
          document.getElementById(i-4).innerHTML = "";
          sessionStorage.setItem('val', sessionStorage.getItem('val')+','+up_val);
          sessionStorage.setItem('pos', sessionStorage.getItem('pos')+','+(i-4));
          document.getElementById('comment').innerHTML = document.getElementById('comment').innerHTML +(up_val)+ " to "+(i-4) +" position " + "<br>";
          resultCheck();
          break;
          }
        else if(numb == 40 && i != 13 && i != 14 && i != 15 && i != 16){
          //down
          var down_val = document.getElementById(i+4).innerHTML;
          document.getElementById(i).innerHTML = down_val;
          document.getElementById(i+4).innerHTML = "";
          sessionStorage.setItem('val', sessionStorage.getItem('val')+','+down_val);
          sessionStorage.setItem('pos', sessionStorage.getItem('pos')+','+(i+4));
          document.getElementById('comment').innerHTML = document.getElementById('comment').innerHTML + (down_val)+ " to "+(i+4) +" position " + "<br>";
          resultCheck();
          break;
          }
        else if (numb == 37 && i != 1 && i != 5 && i != 13 && i != 9) {
          //left
          var left_val = document.getElementById(i-1).innerHTML;
          document.getElementById(i).innerHTML = left_val;
          document.getElementById(i-1).innerHTML = "";
          sessionStorage.setItem('val', sessionStorage.getItem('val')+','+left_val);
          sessionStorage.setItem('pos', sessionStorage.getItem('pos')+','+(i-1));
          document.getElementById('comment').innerHTML = document.getElementById('comment').innerHTML  + (left_val)+ " to "+(i-1) +" position "+ "<br>";

          resultCheck();
          break;
          }
        else if(numb == 39 && i != 4 && i != 8 && i != 12 && i != 16){
          //right
          var right_val = document.getElementById(i+1).innerHTML;
          document.getElementById(i).innerHTML = right_val;
          document.getElementById(i+1).innerHTML = "";
          sessionStorage.setItem('val', sessionStorage.getItem('val')+','+right_val);
          sessionStorage.setItem('pos', sessionStorage.getItem('pos')+','+(i+1));
          document.getElementById('comment').innerHTML = document.getElementById('comment').innerHTML +(right_val)+ " to "+(i+1) +" position "+ "<br>";
          resultCheck();
          break;
          }
        }
  }
}
function move(){
  document.onkeydown= function(event){
    var key = event.keyCode;
    for(var i=1; i<=16; i++){
      if(document.getElementById(i).innerHTML == ""){
        var null_val = document.getElementById(i).innerHTML;
          if(key == 38 && i != 1 && i != 2 && i != 3 && i != 4){
            //up
            var up_val = document.getElementById(i-4).innerHTML;
            document.getElementById(i).innerHTML = up_val;
            document.getElementById(i-4).innerHTML = "";
            sessionStorage.setItem('val', sessionStorage.getItem('val')+','+up_val);
            sessionStorage.setItem('pos', sessionStorage.getItem('pos')+','+(i-4));
            document.getElementById('comment').innerHTML = document.getElementById('comment').innerHTML +(up_val)+ " to "+(i-4) +" position " + "<br>";
            resultCheck();
            break;
            }
          else if(key == 40 && i != 13 && i != 14 && i != 15 && i != 16){
            //down
            var down_val = document.getElementById(i+4).innerHTML;
            document.getElementById(i).innerHTML = down_val;
            document.getElementById(i+4).innerHTML = "";
            sessionStorage.setItem('val', sessionStorage.getItem('val')+','+down_val);
            sessionStorage.setItem('pos', sessionStorage.getItem('pos')+','+(i+4));
            document.getElementById('comment').innerHTML = document.getElementById('comment').innerHTML + (down_val)+ " to "+(i+4) +" position " + "<br>";
            resultCheck();
            break;
            }
          else if (key == 37 && i != 1 && i != 5 && i != 13 && i != 9) {
            //left
            var left_val = document.getElementById(i-1).innerHTML;
            document.getElementById(i).innerHTML = left_val;
            document.getElementById(i-1).innerHTML = "";
            sessionStorage.setItem('val', sessionStorage.getItem('val')+','+left_val);
            sessionStorage.setItem('pos', sessionStorage.getItem('pos')+','+(i-1));
            document.getElementById('comment').innerHTML = document.getElementById('comment').innerHTML  + (left_val)+ " to "+(i-1) +" position "+ "<br>";
            resultCheck();
            break;
            }
          else if(key == 39 && i != 4 && i != 8 && i != 12 && i != 16){
            //right
            var right_val = document.getElementById(i+1).innerHTML;
            document.getElementById(i).innerHTML = right_val;
            document.getElementById(i+1).innerHTML = "";
            sessionStorage.setItem('val', sessionStorage.getItem('val')+','+right_val);
            sessionStorage.setItem('pos', sessionStorage.getItem('pos')+','+(i+1));
            document.getElementById('comment').innerHTML = document.getElementById('comment').innerHTML +(right_val)+ " to "+(i+1) +" position "+ "<br>";
            resultCheck();
            break;
            }
          }
    }
  }
}



function resultCheck() {
  var eleArr = document.querySelectorAll('.grid-element');
  var fullArr= [];
  for(var i= 1; i<eleArr.length; i++){
    fullArr.push(eleArr[i].innerHTML);
  }
  for (var j = 0; j < eleArr.length-1; j++) {
    if (fullArr[j] < fullArr[j+1]) {

    }

  }

}

function doUndo(){
    var val = sessionStorage.getItem('val').split(',') ;
    var pos = sessionStorage.getItem('pos').split(',') ;
    var lastVal = val[val.length-1];
    var lastPos = pos[pos.length-1];
    for(var i=1; i<=16; i++){
      if(document.getElementById(i).innerHTML== lastVal){
        document.getElementById(i).innerHTML = "";
      }
    }
    document.getElementById(lastPos).innerHTML= lastVal;
    document.getElementById('comment').innerHTML = document.getElementById('comment').innerHTML + "Undo"+"<br>";
}



function doAnswer() {
  for(var i=1; i<16; i++){
    document.getElementById(i).innerHTML = i;
    document.getElementById(16).innerHTML="";
  }
  setTimeout(function(){ resultCheck(); }, 3000);

}

document.addEventListener("DOMContentLoaded", function(event) {
  sessionStorage.setItem('val', null);
  sessionStorage.setItem('pos', null);
  populate();
  for(var i=1; i<=16; i++){
  if(document.getElementById(i).innerHTML == "16"){
    document.getElementById(i).innerHTML="";
  }
}
move();
});
