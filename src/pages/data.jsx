import landingpageSumpiaEbi from "../assets/landingpage/sumpia_ebi.png";
import siti from "../assets/umkm/IbuSiti/cover.webp";
import sitiItem from "../assets/umkm/IbuSiti/item.webp";
import sitiItem2 from "../assets/umkm/IbuSiti/item2.webp";
import sitiItem3 from "../assets/umkm/IbuSiti/item3.webp";
import bapakEmongItem from "../assets/umkm/AbahEmong/Slebung.jpeg";
import lontong from "../assets/umkm/lontong/lontong.jpeg";
import kue_ulang_tahun from "../assets/umkm/IbuIyah/kue_ulang_tahun.jpeg";
import kue_ulang_tahun2 from "../assets/umkm/IbuIyah/kue_ulang_tahun2.jpeg";
import pastel from "../assets/umkm/IbuIyah/pastel.jpeg";
import bolu from "../assets/umkm/IbuIyah/bolu.jpeg"
import tahu from "../assets/umkm/tahu/tahu.jpeg";
import tahu2 from "../assets/umkm/tahu/tahu2.jpg";

const umkmData = [
  {
    owner: "Bapak Emong",
    image: [],
    description:"Menjual Kerupuk Slebung",
    blok: 1,
    product: [
      {
        name: "Slebung",
        pict: bapakEmongItem
      }
    ],
    whatsapp:"",
    phone:"+6285795537776",
    email: "",
    maps: "https://maps.app.goo.gl/HB6auvFuSnTjuXGS7",
    address: "Leuwikidang, Kasokandel, Majalengka"
  },{
    owner: "Ibu Iyah",
    image: [],
    description: "Menjual aneka kue dan kue basah",
    blok: 1,
    product: [
      {
        name: "pastel",
        pict: pastel
      },
      {
        name:"kue ulang tahun",
        pict: kue_ulang_tahun
      },
      {
        name: "kue ulang tahun",
        pict: kue_ulang_tahun2
      },
      {
        name: "bolu",
        pict: bolu
      }
    ],
    whatsapp: "+62895807964242",
    phone: "+62895807964242",
    maps: "",
    address: ""
  },
  {
    owner: "Pa Nana",
    image: [],
    description: "Menjual lontong",
    blok: 1,
    product:[
      {
        name: "Lontong",
        pict: lontong
      }
    ],
    whatsapp: "",
    phone: "",
    maps: "https://maps.app.goo.gl/7xK2fBb5NM5aU7t8A",
    address: "Leuwikidang, Kec.Kasokandel"
  },
  {
    owner:"Ibu Ira",
    image:[],
    description: "Menjual Aneka Sumpia Ebi",
    blok: 5,
    product: [
      {name: "Sumpia Ebi",
      pict: [landingpageSumpiaEbi]}
    ],
    whatsapp: "6282119343322",
    phone: "6282119343322",
    maps:"https://maps.app.goo.gl/ETJFx7irWRQNeH1H8",
    address:"Jl. Arjuna, Leuwikidang, Kec.Kasokandel, Majalengka"
  },
  {
    owner: "Bapak Otong",
    image: [tahu],
    description: "Menjual Tahu",
    blok: 2,
    product: [
      {
        name: "Tahu",
        pic: tahu2
      }
    ],
    whatsapp: "+6285324300449",
    phone: "+6285324300449",
    maps: "https://maps.app.goo.gl/3iotr7ibEYHWA6s28",
    address:" Leuwikidan, kec.Kasokandel"
  }
];

const landingPageData = [
  {
    nama: "Sumpia Ebi",
    deskripsi:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit.",
    image: landingpageSumpiaEbi,
  },
];
function search_umkm(q){
  const query = q.toLowerCase();
  if (query){
    return umkmData.filter(data => {
      return data.owner.toLowerCase().includes(query) || data.description.toLowerCase().includes(query) || data.whatsapp.toLowerCase().includes(query) || data.phone.toLowerCase().includes(query) || data.address.toLowerCase().includes(query) || Boolean(data.product.filter(x=> x.name.toLowerCase().includes(query)).length)
    })
  }else{
    return umkmData
  }
}
function resume_umkm(){
  let blok = {}
  umkmData.forEach(umkm=>{
    if(blok[umkm.blok]){
      blok[umkm.blok].owners += 1
      blok[umkm.blok].products += umkm.product.length
    }else{
      blok[umkm.blok] = {}
      blok[umkm.blok].owners = 1
      blok[umkm.blok].products = umkm.product.length
    }
  })
  return blok
}
export {landingPageData, umkmData, search_umkm, resume_umkm};