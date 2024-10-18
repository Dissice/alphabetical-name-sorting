let isimAdet = Number(prompt('Kaç adet isim girmek istiyorsunuz?'));
let isimler = [];
for (let i = 0; i < isimAdet; i++) {
  let isim = prompt('Bir isim giriniz:');
  isimler.push(isim); 
}

console.log("Girilen isimler: ", isimler);

// alfabetik sıralama için kullanılacak komut bu. 
//**sort() JavaScript’te dizilerdeki öğeleri alfabetik sıralamaya yarayan bir metottur. 

isimler.sort();
console.log("Alfabetik sıralanmış isimler: ", isimler);