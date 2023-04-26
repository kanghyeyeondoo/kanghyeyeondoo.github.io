//초기설정
document.getElementById("hide02-2").style.display ='none';	
document.getElementById("hide01-1").style.display ='none';	
document.getElementById("hide02-1").style.display ='none';


//시간 입력받아서 

function printtime() {
    const time = document.getElementById('time').value;
    document.getElementById("practice").innerText = 10000/time;
  }

//버튼을 클릭하면 시계 이미지 3초간 보이기 
document.getElementById("btn1").addEventListener("click", img_show);


// 시계 이미지 보이는 함수 
//시계 이미지 3초 후 사라지기 
//시계 이미지가 사라지면 hide01 클래스 보이기

function img_show(){
    document.getElementById("hide02-2").style.display ='block';	
    setTimeout(function() {
        document.getElementById("hide02-2").style.display ='none';
        document.getElementById("hide01-1").style.display ='block';	
        printtime();
      }, 2000);
}

// hide 02 보이는 함수
// hide01 클래스에 포함된 버튼을 누르면 hide 02 보이기
function two_show(){
    document.getElementById("hide02-1").style.display ='block';
}

function three_show(){
    document.getElementById("hide02-1").style.display ='none';
}

document.getElementById("btn2").addEventListener("click", two_show);
document.getElementById("btn3").addEventListener("click",three_show );

//공유버튼 누르면 링크 복사하고 , 팝업창 띄워서 알리기
//공유버튼 누르면 링크 복사

let nowUrl = window.location.href;

function copyUrl(){ 
  	navigator.clipboard.writeText(nowUrl).then(res=>{
	  alert("url이 복사되었습니다!");
	})
}