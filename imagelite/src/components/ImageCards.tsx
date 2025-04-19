'use cliente'

interface ImageCardProps {
  name?: string;
  size?: string;
  uploadDate?: string;
  src?: string;
}

export const ImageCards: React.FC<ImageCardProps> = ({
  name, uploadDate, src, size
}: ImageCardProps) => {

  function download() {
    window.open(src, '_blank')
  }
  return (
    <div onClick={download} className="card relative bg-white rounded-md shadow-md transiotion-transform ease-in duration-300 transform hover:shadow-lg hover:-translate-y-2">
      <img src={src} className="h-56 w-full object-cover rounded-t-md" alt="" />
      <div className="card-body p-4">
        <h5 className="text-x1 font-semibold mb-2 text-gray-600">{name}</h5>
        <p className="text-gray-600">{size}</p>
        <p className="text-gray-600">{uploadDate}</p>

      </div>
    </div>
  )
}