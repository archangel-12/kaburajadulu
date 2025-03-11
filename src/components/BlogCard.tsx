import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface BlogCardProps {
  category: string
  date: string
  title: string
  imageUrl: string
  imageAlt: string
}

export default function BlogCard({
  category = "Berita",
  date = "3 April 2025",
  title = "Puisi berjudul 'Aku' karya Chairil Anwar ditampilkan di stasiun kereta bawah tanah kota Seoul",
  imageUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/berlin-PEHhMiR6sBW5xN4akD8hCyXocv9MnC.webp",
  imageAlt = "National Art Museum of Catalonia in Barcelona",
}: BlogCardProps) {
  return (
    <Card className="overflow-hidden max-w-md shadow-[4px_4px_20px_0px_#00000014] rounded-[16px] border-0 pt-2">
      <CardHeader className="flex flex-row items-center justify-between p-4 pb-0">
        <Badge variant="outline" className="bg-[#0055FF1A] text-primary border-0">
          {category}
        </Badge>
        <span className="text-sm text-black/70">{date}</span>
      </CardHeader>
      <CardContent className="p-0 px-4">
        <div className="relative w-full h-64 rounded-lg overflow-hidden">
          <Image src={imageUrl || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" />
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <h3 className="text-lg font-semibold leading-tight">{title}</h3>
      </CardFooter>
    </Card>
  )
}

