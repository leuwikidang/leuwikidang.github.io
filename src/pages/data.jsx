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
import bolu from "../assets/umkm/IbuIyah/bolu.jpeg";
import tahu from "../assets/umkm/tahu/tahu.jpeg";
import tahu2 from "../assets/umkm/tahu/tahu2.webp";
import IbuEndahCover from "../assets/umkm/IbuEndah/cover.jpeg";
import IbuEndahMenu1 from "../assets/umkm/IbuEndah/menu1.jpeg";
import IbuEndahMenu2 from "../assets/umkm/IbuEndah/menu2.jpeg";
import IbuIyahCover from "../assets/umkm/IbuIyah/cover.jpeg";
import IbuIyahCover1 from "../assets/umkm/IbuIyah/Cover1.jpeg";
import IbuIyahCover2 from "../assets/umkm/IbuIyah/Cover2.jpeg";
import IbuIyahCover3 from "../assets/umkm/IbuIyah/Cover3.jpeg";
import GulaCakar from "../assets/umkm/GulaCakar/gulacakar.jpg";
import GulaCakar1 from "../assets/umkm/GulaCakar/gulacakar1.jpeg";
import GulaCakar2 from "../assets/umkm/GulaCakar/gulacakar2.jpeg";
import BellaBiasa from "../assets/umkm/RotiBella/biasa.jpeg";
import BellaTawarKecil from "../assets/umkm/RotiBella/tawar_kecil.jpeg";
import BellaBomboloniToppingGulaSalju from "../assets/umkm/RotiBella/bomboloni_topping_gula_salju.jpeg";
import BellaBringasAsin from "../assets/umkm/RotiBella/bringas_asin.jpeg";
import BellaBringasManis from "../assets/umkm/RotiBella/bringas_manis.jpeg";
import BellaJabrigTepungManis from "../assets/umkm/RotiBella/jabrig_tepung_manis.jpeg";
import BellaKesetBantal from "../assets/umkm/RotiBella/keset_bantal.jpeg";
import BellaSobek from "../assets/umkm/RotiBella/sobek.jpeg";
import PaMamanCover from "../assets/umkm/PaMaman/cover.jpeg";
import PamamanGulaCakar from "../assets/umkm/PaMaman/gulacakar.jpeg";
import OpakCeuAnis from "../assets/umkm/CeuAnis/opak.jpeg";
import PadadiCover from "../assets/umkm/PaDadi/cover.jpeg";
import PadadiKonveksi from "../assets/umkm/PaDadi/etalase.jpeg";
import PadadiKonveksi2 from "../assets/umkm/PaDadi/cover2.jpeg";



const umkmData = [
  {
    owner: "Roti Bella",
    description: "Menjual Aneka Kue",
    image: [],
    blok:5,
    product: [
      {
        name: "Biasa",
        pict: BellaBiasa,
      },
      {
        name: "Tawar Kecil",
        pict: BellaTawarKecil,
      },
      {
        name: "Bomboloni Topping Gula Salju",
        pict: BellaBomboloniToppingGulaSalju,
      },
      {
        name: "Bringas Asin",
        pict: BellaBringasAsin,
      },
      {
        name: "Bringas Manis",
        pict: BellaBringasManis,
      },
      {
        name: "Jabrig Tepung Manis",
        pict: BellaJabrigTepungManis,
      },
      {
        name: "Keset Bantal",
        pict: BellaKesetBantal,
      },
      {
        name: "Roti Sobek",
        pict: BellaSobek,
      },
    ],
    whatsapp:"+628981617711",
    phone:"+628981617711",
    maps:"https://maps.app.goo.gl/ztNkxBWuBEVqQ8du5",
    address:"Leuwikidang, Kec.Kasokandel"
  },
  {
    owner: "Ibu Ira",
    image: [],
    description: "Menjual Aneka Sumpia Ebi",
    blok: 5,
    product: [{ name: "Sumpia Ebi", pict: [landingpageSumpiaEbi] }],
    whatsapp: "6282119343322",
    phone: "6282119343322",
    maps: "https://maps.app.goo.gl/ETJFx7irWRQNeH1H8",
    address: "Jl. Arjuna, Leuwikidang, Kec.Kasokandel, Majalengka",
  },{
    owner:"Pa Maman",
    image: [PaMamanCover],
    description:"Menjual Gula Cakar",
    blok: 1,
    product:[
      {
        name: "Gula Cakar",
        pict: PamamanGulaCakar
      }
    ],
    whatsapp: "+6285772217196",
    phone:"+6285772217196",
    address:"Leuwikidang, Kec. Kasokandel",
    maps:"https://maps.app.goo.gl/gWcGUkgJr4YMmyTb6"
  },
  {
    owner: "Ibu Endah",
    image: [IbuEndahCover],
    description: "Menjual Aneka Jajanan Cobek",
    blok: 5,
    product: [
      {
        name: "Menu 1",
        pict: IbuEndahMenu1,
      },
      {
        name: "Menu 2",
        pict: IbuEndahMenu2,
      },
    ],
    whatsapp: "+6285220644446",
    phone: "+6285220644446",
    maps: "https://maps.app.goo.gl/yoWeZwUgs1ScVNkp8",
    address: "Leuwikidang, Kasokandel,Majalengka",
  },
  {
    owner: "Ibu Iyah",
    image: [IbuIyahCover2, IbuIyahCover, IbuIyahCover1, IbuIyahCover3],
    description: "Menjual aneka kue dan kue basah",
    blok: 1,
    product: [
      {
        name: "pastel",
        pict: pastel,
      },
      {
        name: "kue ulang tahun",
        pict: kue_ulang_tahun,
      },
      {
        name: "kue ulang tahun",
        pict: kue_ulang_tahun2,
      },
      {
        name: "bolu",
        pict: bolu,
      },
    ],
    whatsapp: "+62895807964242",
    phone: "+62895807964242",
    maps: "Leuwikidang, Kasokandel, Majalengka",
    address: "Leuwikidang, Kasokandel, Majalengka",
  },
  {
    owner: "Bapak Emong",
    image: [],
    description: "Menjual Kerupuk Slebung",
    blok: 1,
    product: [
      {
        name: "Slebung",
        pict: bapakEmongItem,
      },
    ],
    whatsapp: "",
    phone: "+6285795537776",
    email: "",
    maps: "https://maps.app.goo.gl/HB6auvFuSnTjuXGS7",
    address: "Leuwikidang, Kasokandel, Majalengka",
  },
  {
    owner: "Pa Nana",
    image: [],
    description: "Menjual lontong",
    blok: 3,
    product: [
      {
        name: "Lontong",
        pict: lontong,
      },
    ],
    whatsapp: "",
    phone: "",
    maps: "https://maps.app.goo.gl/7xK2fBb5NM5aU7t8A",
    address: "Leuwikidang, Kec.Kasokandel",
  },
  {
    owner: "Bapak Otong",
    image: [tahu],
    description: "Menjual Tahu",
    blok: 2,
    product: [
      {
        name: "Tahu",
        pic: tahu2,
      },
    ],
    whatsapp: "+6285324300449",
    phone: "+6285324300449",
    maps: "https://maps.app.goo.gl/3iotr7ibEYHWA6s28",
    address: " Leuwikidan, kec.Kasokandel, Majalengka",
  },
  {
    owner: "Ibu Warfi'",
    image: [GulaCakar, GulaCakar1],
    description: "Menjual Gula Cakar",
    blok: 1,
    product: [
      {
        name: "Gula Cakar",
        pict: GulaCakar2,
      },
    ],
    phone: "+6285798308285",
    whatsapp: "+6285798308285",
    maps: "https://maps.app.goo.gl/wQzf7dX26Ab4ZQ8R6",
    address: "Leuwikidang, Kec. Kasokandal, Majalengka",
  },{
    owner: "Ceu Anis",
    description: "Menjual Aneka Kue",
    blok:4,
    image: [],
    blok: 4,
    product:[{
      name: "Opak",
      pic: OpakCeuAnis
    }],
    whatsapp:"",
    phone:"",
    mpas:"https://maps.app.goo.gl/DcUxkQBsLg7YgFPn9",
    address:"Leuwikidang, Kec.Kaoskandel, Majalengka"
  },{
    owner:"Pa Dadi",
    description: "Usaha Konveksi",
    blok: 1,
    image:[PadadiCover],
    product:[{
      name: "Konveksi",
      pic: PadadiKonveksi2
    }],
    whatsapp:"+6289661225705",
    phone:"+6289661225705",
    maps:"https://maps.app.goo.gl/AChrzipURio8ZApq6"
  }
];

const landingPageData = [
  {
    nama: "Sumpia Ebi",
    deskripsi:
      "Camilan renyah dengan isian ebi gurih, tanpa pengawet, dan bercita rasa khas. Cocok untuk camilan santai atau oleh-oleh lezat! ",
    image: landingpageSumpiaEbi,
  },
  {
    nama: "Gula Cakar",
    deskripsi:
      "Gula merah khas dengan tekstur renyah dan rasa manis legit. Cocok untuk campuran minuman, jajanan tradisional, atau dinikmati langsung!",
    image: GulaCakar,
  },{
    nama: "Aneka Kue Basah",
    deskripsi: " Kue tradisional dengan tekstur lembut dan rasa autentik. Dibuat dari bahan berkualitas, cocok untuk acara spesial atau camilan sehari-hari! ",
    image: IbuIyahCover2
  }
];
const reviewer = [
  {
    name: "Asep",
    text: "Rasanya enak dan autentik! Sumpia ebinya renyah, gula cakarnya legit, dan kue basahnya lembut. Pasti beli lagi!"
  },{
    name: "Nunu",
    text:"Produk UMKM Leuwikidang benar-benar berkualitas. Cocok untuk oleh-oleh dan camilan keluarga"
  },{
    name:"Iyah",
    text:"Kue basahnya fresh, sumpia ebinya gurih, dan gula cakarnya manis pas. Recomended banget!"
  }
]
function search_umkm(q) {
  const query = q.toLowerCase();
  if (query) {
    return umkmData.filter((data) => {
      return (
        data.owner.toLowerCase().includes(query) ||
        data.description.toLowerCase().includes(query) ||
        data.whatsapp.toLowerCase().includes(query) ||
        data.phone.toLowerCase().includes(query) ||
        data.address.toLowerCase().includes(query) ||
        Boolean(
          data.product.filter((x) => x.name.toLowerCase().includes(query))
            .length
        )
      );
    });
  } else {
    return umkmData;
  }
}
function resume_umkm() {
  let blok = {};
  umkmData.forEach((umkm) => {
    if (blok[umkm.blok]) {
      blok[umkm.blok].owners += 1;
      blok[umkm.blok].products += umkm.product.length;
    } else {
      blok[umkm.blok] = {};
      blok[umkm.blok].owners = 1;
      blok[umkm.blok].products = umkm.product.length;
    }
  });
  return blok;
}
export { landingPageData, umkmData, search_umkm, resume_umkm, reviewer };
