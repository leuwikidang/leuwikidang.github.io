import { Link, Navigate, useNavigate } from "react-router-dom"
import { Button } from "../components/ButtonDashboard"
import { AsyncImage } from "loadable-image";
import { landingPageData } from "./data";
import pelaku_umkm from "../assets/landingpage/pelaku_umkm.jpeg";
import knm from "../assets/logo/knm.png";
import uskm from "../assets/logo/uskm.png";
import majalengka from "../assets/logo/majalengka.png";
import { Helmet } from "react-helmet";
export default function LandingPage() {
    const navigate = useNavigate();
    return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>UMKM Desa Leuwikidang</title>
      </Helmet>
      <header className="bg-green-800 text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center">
              <img
                src={uskm}
                alt="uskm Logo"
                width={30}
                height={30}
                className="rounded-full"
              />
              <img
                src={majalengka}
                alt="Desa Logo"
                width={60}
                height={60}
                className="rounded-full"
              />
            <img
              src={knm}
              alt="KNM Logo"
              width={30}
              height={30}
              className="rounded-full"
            />
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="#about" className="hover:underline">
                  Tentang
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:underline">
                  Produk
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:underline">
                  Kontak
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-green-600 to-green-400 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">UMKM Desa Leuwikidang</h1>
            <p className="text-xl md:text-2xl mb-8">Mengembangkan Potensi Lokal, Membangun Ekonomi Desa</p>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-green-900" onClick={()=>{navigate('/dashboard/umkm')}}>Jelajahi Produk Kami</Button>
          </div>
        </section>
        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Tentang UMKM Leuwikidang</h2>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="">
                <p className="text-lg mb-4">
                  UMKM Desa Leuwikidang adalah kumpulan usaha mikro, kecil, dan menengah yang menjadi penggerak ekonomi
                  lokal di Majalengka. Kami menggabungkan kearifan lokal dengan inovasi modern untuk menghasilkan produk
                  berkualitas tinggi.
                </p>
                <p className="text-lg">
                  Dengan dukungan masyarakat dan pemerintah desa, kami terus berkembang dan memberikan manfaat bagi
                  seluruh warga Leuwikidang.
                </p>
              </div>
              <div className="flex h-64 md:h-auto">
                <img
                  src={pelaku_umkm}
                  alt="Desa Leuwikidang"
                  layout="fill"
                  objectFit="fill"
                  className="rounded-lg shadow-lg w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Produk Unggulan Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {landingPageData.map(({nama, deskripsi, image}, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <AsyncImage
                    src={image}
                    alt={nama}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-xl mb-2">{nama}</h3>
                    <p className="text-gray-600">
                      {deskripsi}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-green-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Apa Kata Mereka?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((testimonial) => (
                <div key={testimonial} className="bg-green-700 p-6 rounded-lg shadow-md">
                  <p className="mb-4">
                    "Produk UMKM Leuwikidang sangat berkualitas dan membanggakan. Saya selalu membeli oleh-oleh dari
                    sini."
                  </p>
                  <p className="font-bold">- Pelanggan {testimonial}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Hubungi Kami</h2>
            <p className="text-xl mb-8">
              Tertarik dengan produk UMKM Desa Leuwikidang? Jangan ragu untuk menghubungi kami!
            </p>
            <Button className="bg-green-600 hover:bg-green-700 text-white" onClick={()=>window.open('https://wa.me/6283172366463','_blank')}>Kirim Pesan</Button>
          </div>
        </section>
      </main>

      <footer className="bg-green-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2025 UMKM Desa Leuwikidang. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-4">
            <img
                src={uskm}
                alt="uskm Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <img
                src={majalengka}
                alt="Desa Logo"
                width={70}
                height={70}
                className="rounded-full"
              />
            <img
              src={knm}
              alt="KNM Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

