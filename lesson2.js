
// JAVASCRİPT DATA TYPE
ad="george"

str1= "merhaba dünya"
str2='merhaba dünya'
str3=`merhaba dünya ${ad}`
str= new String('merhaba dünya')
str4=new String('merhaba dünya')
console.log(str3)
console.log(str)
console.log(str4)
console.log(str1[3])

console.clear

let deger=0
console.log(Boolean(deger))

//let kontrol=(sifre="12x45")
//if (sifre=="12x45"){console.log("SİSTEMİNİZ AÇIK")}
//else{  console.log("SİSTEMİNİZ KAPALI")}

 console.clear ()

let telefonnummer;
let tc=undefined

console.log(telefonnummer)
console.log(tc)

let n;
let result=(n+15)
console.log(result)

//! ARİTMETİK OPERATÖRLER

let a=5
let b=15

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a**b)
console.log(a%5)

console.clear
let resultt=365/6
console.log(resultt)
console.log(Math.trunc(resultt))
console.log(Math.round(resultt))
console.log(resultt.toFixed(2))
console.log(typeof resultt.toFixed)



let x=5
console.log(x++)
console.log(x)
console.log(++x)


console.clear()

let t=10
let y=5

console.log(t=t+y)
console.log(t+=y)
console.log(t-=y)


let c=2
let d="2"

console.log(typeof c)
console.log(typeof d)
console.log(c==d)
console.log(c===d)
console.log(c!=d)
console.log(c!==d)

console.clear()

console.log(Boolean("merhaba"))
console.log(Boolean(0))
console.log(Boolean(2))
console.log(Boolean(null))
console.log(Boolean([]))
console.log(Boolean(undefined))
console.log(0 && [] && 2)
console.log([] && "m" && 5)

console.log(0 || null || undefined)
console.log(!0)
console.log(!null)
console.log(!2)



//Conditions



const num1=Number(prompt("bir sayı giriniz:"))
const num2= 5
console.log(num1, typeof num1)
console.log("Toplam:" , num1 + num2)
// girilen sayı negatif pozitif test ediniz

if(num1<0){
    console.log("girilen sayı negatiftir")

} else if (num1>0){
 console.log("Girilen sayı pozitiftir")   
}else {
    console.log("Girilen sayı 0'a eşittir")

}

console.clear

//örnek2: bir sayının en büyük en küçüğünü bulunuz


const sayi1= 2
const sayi2= 6
const sayi3= 3
 //const enBuyuk= Math.max(sayi1,sayi2,sayi3)
// console.log(enBuyuk)
 if(sayi1>sayi2&& sayi1>sayi3){
    console.log("Enbüyük:", sayi1)
 } else if (sayi2>sayi1 && sayi2>sayi3){
    console.log("Enbüyük:", sayi2)
 } else if (sayi3>sayi1 && sayi3>say2){
    console.log("Enbüyük:", sayi3)
 } else{
    console.log("yanlış işlem girildi ")
 }


 //örnek3:

 const sayı1=5
 const sayı2=15
 const sayı3=7

 let enBuyuk= sayı1
  
if (sayi2> enBuyuk) {
    enBuyuk = sayı2
}

if (sayı3>enBuyuk){
    enBuyuk= sayı3
}

console.log("enBuyuk:", enBuyuk)

//örnek

 const yaş= 25;
 const cinsiyet = "erkek"
 const sağlıklı= true;

 const koşul= yaş>=18  && cinsiyet.toLowerCase=== "erkek" && sağlıklı===true

 if(koşul===true) {
    console.log("Askerlik Yapmalı");
 } else{
    console.log(" Askerlik Yapması Gerekmez");
 }



 
console.clear
d=4
const tag=d

const bar=d*40

if(d>=7){
console.log(bar-50 )
} else if(d>=3){
    console.log(bar-20)
}else{
    console.log(bar)
}

const yas= 20
yas>= 18? console.log("Askerlik Yapmalı") : console.log("Askerlik Yapamaz")

if(yas>18) {
    console.log("Askerlik Yapmalı")

} else {
    console.log("Askerlik yapmaz")
}



//örnek4

const age= 12
const sonuc = age<=14 ? "cocuk" : age<= 18 ? "ergen": "yetişkin"
console.log(sonuc)

//SHORT-CIRCUIT

let salary= 4000
let year = 24
let marriage = true

year>= 10&& marriage===true&& (salary=salary*1.5)

console.log("SALARY:", salary )



