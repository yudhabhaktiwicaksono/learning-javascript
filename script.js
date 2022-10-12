function inputValue() {
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const list = document.getElementById("list");

  list.innerHTML += `<li>
  <p>  ${nama}</p>
  <p>  ${email}</p>
  </li>`;
  console.log(nama);
}
// Penulisan function dalam es6
const onSubmit = (event) => {
  event.preventDefault(); // untuk disable refresh otomatis pada browser
  document.getElementById("formUser");
  const { nama, nohp } = event.target;

  listUser.innerHTML += `<li>
  <p>${nama.value}<p/>
  <p>${nohp.value}<p/>
  </li>`;
  //menampilkan value dalam bentuk list dalam bentuk list di elemen html
};

addEventListener("submit", onSubmit); //addEventListener adalah method yang sangat penting yang digunakan untuk membuat event seperti klik,dbclick,hover,blur,focus dan lainnya untuk keperluan manipulasi didalam DOM javascript

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let buah = "apel, mangga, semangka";

let kalimat = "Halo Dunia";

document.getElementById("jumlah").innerHTML = buah.slice(-8);
//slice method
document.getElementById("kalimat").innerHTML = kalimat.toUpperCase();
//konvert ke huruf kapital
document.getElementById("kalimat2").innerHTML = kalimat.toLowerCase();
//convert ke huruf kecil
