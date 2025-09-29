
function openDemo(demoName) {
    window.location = demoName + '.html';
  }
  function reset() {
    window.location = 'index.html';
  }

let myMap = L.map("map").setView([-6.3618648, 106.8240266], 18);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <za href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    maxZoom: 20
}).addTo(myMap);

const kolamFTContent = document.createElement("div")
kolamFTContent.innerHTML = "<img src='" + "assets/images/kolam_ftui.png" + "'>"
                       + "<a target='_blank' href='" + "http://127.0.0.1:8080/kolam_ftui.html" + "'>Lihat 3D</a>"
const gedungKLiftContent = document.createElement("div")
gedungKLiftContent.innerHTML = "<img src='" + "assets/images/kolam_ftui.png" + "'>"
                       + "<a target='_blank' href='" + "http://127.0.0.1:8080/kolam_ftui.html" + "'>Lihat 3D</a>"

let gedung_k = L.marker([-6.3625, 106.82405]).bindPopup("<b>Gedung K <b>").addTo(myMap);
let gedung_k_lift = L.marker([-6.3621, 106.82405]).bindPopup(gedungKLiftContent,{ maxWidth: "auto" }).addTo(myMap);
let rotunda_ftui = L.marker([-6.3614, 106.8237]).bindPopup("<b>Rotunda FT <b>").addTo(myMap);
let dekanat_ftui = L.marker([-6.3616, 106.8239]).bindPopup("<b>Dekanat FT <b>").addTo(myMap);
let DTE = L.marker([-6.3619, 106.8235]).bindPopup("<b>Departemen teknik elektro <b>").addTo(myMap);
let MRPQ = L.marker([-6.3622, 106.8235]).bindPopup("<b>Mochtar Riadi Plaza Quantum <b>").addTo(myMap);
let DTM = L.marker([-6.3626, 106.8235]).bindPopup("<b>Departemen teknik mesin <b>").addTo(myMap);
let MRC = L.marker([-6.3629, 106.8235]).bindPopup("<b>Manufacturing Reasearch Center <b>").addTo(myMap);
let DTMM = L.marker([-6.3632, 106.8235]).bindPopup("<b>Departemen teknik metalurgi dan material <b>").addTo(myMap);
let gedung_s = L.marker([-6.3616, 106.8246]).bindPopup("<b>Gedung S <b>").addTo(myMap);
let DTS = L.marker([-6.3619, 106.8246]).bindPopup("<b>Departemen Teknik Sipil <b>").addTo(myMap);
let DA = L.marker([-6.3625, 106.8246]).bindPopup("<b>Departemen Arsitektur <b>").addTo(myMap);
let kantek = L.marker([-6.3632, 106.8246]).bindPopup("<b>Kantin Teknik <b>").addTo(myMap);
let plaza_tekkim = L.marker([-6.3633, 106.8241]).bindPopup("<b>Plaza Tekkim <b>").addTo(myMap);
let DTK = L.marker([-6.3635, 106.8241]).bindPopup("<b>Departemen Teknik Kimia <b>").addTo(myMap);
let DTI = L.marker([-6.3636, 106.8235]).bindPopup("<b>Departemen Teknik Industri <b>").addTo(myMap);
let mustek = L.marker([-6.3633, 106.8249]).bindPopup("<b>Musholla Teknik <b>").addTo(myMap);
let EC = L.marker([-6.3625, 106.8250]).bindPopup("<b>Engineering Center <b>").addTo(myMap);
let Jembatan_Teksas = L.marker([-6.3625, 106.8259]).bindPopup("<b>Jembatan Teknik-Sastra <b>").addTo(myMap);
let paf_ftui = L.marker([-6.3613, 106.8246]).bindPopup("<b>PAF FTUI <b>").addTo(myMap);
let lap_voli = L.marker([-6.3611, 106.8242]).bindPopup("<b>Lapangan Voli <b>").addTo(myMap);
let kolam_ftui = L.marker([-6.3630, 106.8240]).bindPopup(kolamFTContent,{ maxWidth: "auto" }).addTo(myMap);


