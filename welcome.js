
let userName = prompt("Kullanıcı Bilginizi Yaziniz.")


let info= document.querySelector('#myName')
info.innerHTML = `${userName}`
let gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]


function showTime(){
    var tarih=new Date();
	var gun=gunler[tarih.getDay()];
	var saat=tarih.getHours();
	var dakika=tarih.getMinutes();
	var saniye=tarih.getSeconds();	
    let iceaktarma = document.querySelector("#myClock") 
    // burda oluşturduğumuz değerleri ekrana yazdırıyoruz
    iceaktarma.innerHTML= saat + ":" + dakika +":" + saniye + " " + gun; 
}

const time = setInterval(showTime,1000);

	document.getElementById("myClock").innerHTML = time

