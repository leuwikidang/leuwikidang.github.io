import landingpageSumpiaEbi from "../assets/landingpage/sumpia_ebi.png";
import siti from "../assets/umkm/IbuSiti/cover.webp";
import sitiItem from "../assets/umkm/IbuSiti/item.webp";
import sitiItem2 from "../assets/umkm/IbuSiti/item2.webp";
import sitiItem3 from "../assets/umkm/IbuSiti/item3.webp";
import bapakEmongItem from "../assets/umkm/AbahEmong/Slebung.jpeg";


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
  },
  {
    owner:"Ibu Ira",
    image:[],
    description: "Menujal Aneka Sumpia Ebi",
    blok: 5,
    product: [
      {name: "Sumpia Ebi",
      pict: [landingpageSumpiaEbi]}
    ],
    whatsapp: "6282119343322",
    phone: "6282119343322",
    maps:"https://maps.app.goo.gl/ETJFx7irWRQNeH1H8",
    address:"Jl. Arjuna, Leuwikidang, Kec.Kasokandel, Majalengka"
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