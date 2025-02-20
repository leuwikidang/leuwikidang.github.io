import { Package, Users } from "lucide-react"
import { Helmet } from "react-helmet"

export default function Dashboard() {
  const blocks = [
    { name: "Rahayu", products: 150, entrepreneurs: 30 },
    { name: "2", products: 200, entrepreneurs: 45 },
    { name: "3", products: 180, entrepreneurs: 35 },
    { name: "4", products: 120, entrepreneurs: 25 },
    { name: "5", products: 250, entrepreneurs: 50 },
  ]

  return (

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto ">
          <Helmet>
        <title>UMKM Desa Leuwikidang | Dashboard</title>
      </Helmet>
          {blocks.map((block) => (
            <BlockCard key={block.name} {...block} />
          ))}

        </div>
  )
}

function BlockCard({ name, products, entrepreneurs }) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
      <div className="border-b border-gray-200 bg-gray-50 p-3">
        <h2 className="text-xl font-semibold text-gray-700">Blok {name}</h2>
      </div>
      <div className="p-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <InfoCard title="Produk" value={products} icon={Package} />
          <InfoCard title="Pengusaha" value={entrepreneurs} icon={Users} />
        </div>
      </div>
    </div>
  )
}

function InfoCard({ title, value, icon: Icon }) {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-full bg-blue-100 p-2">
        <Icon className="h-5 w-5 text-blue-600" />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-lg font-semibold text-gray-800">{value}</p>
      </div>
    </div>
  )
}

