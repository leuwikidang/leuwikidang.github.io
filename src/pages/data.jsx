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
    owner: "Ibu Wati",
    image: [siti, sitiItem3],
    description: "Menjual berbagai macam kue tradisional Indonesia",
    product: [
      {
        name: "Sumpia Ebi",
        pict: sitiItem,
      },
      {
        name: "Sumpia Pebi",
        pict: sitiItem2,
      },
    ],
    whatsapp: "+6281234567890",
    phone: "+6281234567890",
    email: "siti@example.com",
    maps: "https://goo.gl/maps/example",
    address: "Jl. Contoh No. 123, Kota Contoh",
  },{
    owner: "ibu Siti",
    image: [siti, sitiItem3],
    description: "Menjual berbagai macam kue tradisional Indonesia",
    product: [
      {
        name: "Sumpia Ebi",
        pict: sitiItem,
      },
      {
        name: "Sumpia ebi",
        pict: sitiItem2,
      },
    ],
    whatsapp: "+6281234567890",
    phone: "+6281234567890",
    email: "siti@example.com",
    maps: "https://goo.gl/maps/example",
    address: "Jl. Contoh No. 123, Kota Contoh",
  },{
    owner: "Ibu Siti",
    image: [siti, sitiItem3],
    description: "Menjual berbagai macam kue tradisional Indonesia",
    product: [
      {
        name: "Sumpia Ebi",
        pict: sitiItem,
      },
      {
        name: "Sumpia ebi",
        pict: sitiItem2,
      },
    ],
    whatsapp: "+6281234567890",
    phone: "+6281234567890",
    email: "siti@example.com",
    maps: "https://goo.gl/maps/example",
    address: "Jl. Contoh No. 123, Kota Contoh",
  },{
    owner: "Ibu Siti",
    image: [siti, sitiItem3],
    description: "Menjual berbagai macam kue tradisional Indonesia",
    product: [
      {
        name: "Sumpia Ebi",
        pict: sitiItem,
      },
      {
        name: "Sumpia ebi",
        pict: sitiItem2,
      },
    ],
    whatsapp: "+6281234567890",
    phone: "+6281234567890",
    email: "siti@example.com",
    maps: "https://goo.gl/maps/example",
    address: "Jl. Contoh No. 123, Kota Contoh",
  },
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
export {landingPageData, umkmData, search_umkm};