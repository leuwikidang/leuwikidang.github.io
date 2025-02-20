import { Suspense, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  MapPinned,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { Button } from "./button";
import React from "react";
import ContentLoader from "react-content-loader";
import { AsyncImage } from "loadable-image";
import { AutoComplete } from "primereact/autocomplete";
const ImageLoader = (props) => {
  return (
    <ContentLoader
      viewBox="0 0 500 500"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <path d="M484.52,64.61H15.65C7.1,64.61.17,71.2.17,79.31V299.82c0,8.12,6.93,14.7,15.48,14.7H484.52c8.55,0,15.48-6.58,15.48-14.7V79.31C500,71.2,493.07,64.61,484.52,64.61Zm-9,204.34c0,11.84-7.14,21.44-15.94,21.44H436.39L359.16,171.52c-7.1-10.92-19.67-11.16-27-.51L258.64,277.94C253.78,285,245.73,286,240,280.2l-79.75-80.62c-6-6.06-14.33-5.7-20,.88L62.34,290.39H40.63c-8.8,0-15.94-9.6-15.94-21.44V110.19c0-11.84,7.14-21.44,15.94-21.44H459.54c8.8,0,15.94,9.6,15.94,21.44Z" />
      <ellipse cx="120" cy="140" rx="28" ry="28" />
    </ContentLoader>
  );
};

ImageLoader.metadata = {
  name: "Agustin Ramos Peruzzo",
  github: "agustinramos",
  description: "Loader used in upload image process",
  filename: "ImageUpload",
};

export default ImageLoader;
export function UMKMCard({ umkm }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [...umkm.image, ...umkm.product.map((data) => data.pict)];
  console.log(images);
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <Card className="overflow-x-hidden overflow-y-auto border-gray-200">
      <div className="relative">
        <Suspense fallback={<ImageLoader className="mx-2" />}>
          <AsyncImage
            src={images[currentImageIndex]}
            alt={`UMKM ${umkm.owner}`}
            layout="fill"
            objectFit="cover"
            className="aspect-video"
            loader={<ImageLoader className="mx-2" />}
          />
        </Suspense>
        <Button
          variant="secondary"
          size="icon"
          className=" opacity-60 absolute left-2 top-1/2 transform -translate-y-1/2"
          onClick={prevImage}
        >
          <ChevronLeft className="h-5 w-5 bg-white  p-1 rounded-md" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          className="opacity-60  absolute right-2 top-1/2 transform -translate-y-1/2"
          onClick={nextImage}
        >
          <ChevronRight className="h-5 w-5 bg-white p-1 rounded-md" />
        </Button>
              {/* Indicator dots */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex  space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2.5 h-2.5 rounded-full bg-white ${index == currentImageIndex?"opacity-100":"opacity-50"}`}
          />
        ))}
      </div>
      </div>
      
      <CardHeader>
        <CardTitle>{umkm.owner}</CardTitle>
        <CardDescription>{umkm.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold mb-2">Produk:</h3>
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {umkm.product.map((product, index) => (
            <div
              key={index}
              className="w-10 flex-shrink-0 cursor-pointer"
              onClick={() => {
                setCurrentImageIndex(umkm.image.length + index);
              }}
            >
              <AsyncImage
                src={product.pict}
                alt={product.name}
                className="rounded-md aspect-square h-10"
                loader={<ImageLoader />}
              />
              <p className="text-xs text-center mt-1">{product.name}</p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <p className="flex items-center text-sm cursor-pointer hover:text-green-400" onClick={()=>window.open(umkm.maps,'_blank')}>
            <MapPin className="h-4 w-4 mr-2" /> {umkm.address}
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between ">
        <Button size="sm" asChild className="hover:text-green-400" disbaled={Boolean(umkm.phone)}>
          <a href={`tel:${umkm.phone}`}>
            <Phone className="h-4 w-4 mr-2" />
            Telepon
          </a>
        </Button>
        <Button className="hover:text-green-400" size="sm" asChild disbaled={Boolean(umkm.whatsapp)}>
          <a
            href={umkm.maps}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPinned className="h-4 w-4 mr-2"/>
            Maps
          </a>
        </Button>
        <Button className="hover:text-green-400" size="sm" asChild disbaled={Boolean(umkm.whatsapp)}>
          <a
            href={`https://wa.me/${umkm.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            WhatsApp
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
