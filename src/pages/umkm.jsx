import { useState } from "react";
import { UMKMCard } from "../components/UMKMCard"
import {umkmData} from "./data";
import { InputText } from "primereact/inputtext";
import {search_umkm} from "./data"
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { Search } from 'lucide-react';
import { X } from "lucide-react";
import { Helmet } from "react-helmet";



export default function UMKMPage(){
  const [value, setValue] = useState('');
    return (
        <div className="w-full flex flex-col gap-6">
          <Helmet>
        <title>UMKM Desa Leuwikidang | Usaha</title>
      </Helmet>
          <IconField>
          <InputIcon data-pr-position="left">
          <Search/>
          </InputIcon>
          <InputText className="w-full" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Cari"/>
          </IconField>
          {/* <h1 className="text-3xl font-bold mb-6 text-center">Daftar UMKM</h1> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {search_umkm(value).map((umkm, index) => (
              <UMKMCard key={index} umkm={umkm} />
            ))}
          </div>
        </div>
      )
}