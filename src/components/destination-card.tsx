import { MapPin } from "lucide-react"

interface DestinationCardProps {
  imageUrl: string
  location: string
  style?: React.CSSProperties
  className?: string
  sizes?: string
}

export default function DestinationCard({ 
  imageUrl, 
  location,
  style = {},
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw"
}: DestinationCardProps) {
  return (
    <div
      className={`relative overflow-hidden border-8 border-white hover:scale-105 hover:-rotate-2 hover:z-30 transition-all duration-300 ease-in-out ${className}`}
      style={{
        boxShadow: "8px 28px 44px 0px rgba(0, 0, 0, 0.17)",
        borderRadius: "32px",
        transformOrigin: "center center",
        ...style
      }}
    >
      <div className="relative h-full w-full">
        <img 
          src={imageUrl || "/placeholder.svg"} 
          alt={`Destination: ${location}`} 
          className="w-full h-full object-cover"
          loading="eager"
        />
        
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 55.01%),
              linear-gradient(180deg, rgba(0, 0, 0, 0) 58.24%, #000000 100%)
            `,
          }}
        />

        {/* Location label */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white">
          <MapPin className="h-4 w-4" />
          <span className="text-lg font-bold font-caveat">{location}</span>
        </div>
      </div>
    </div>
  )
}