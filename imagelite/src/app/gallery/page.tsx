'use client'

import { Template, ImageCards } from '@/components'
import { useState } from 'react'
import { useImageService } from '@/resources/image/image.service'
import { Image } from '@/resources/image/image.resource';

export default function GalleryPage() {

  const useService = useImageService();
  const [images, setImages] = useState<Image[]>([])
  const [query, setQuery] = useState<string>('')
  const [extension, setExtension] = useState<string>('')

  async function searchImages() {
    console.log("valor digitado: ", query)
    const result = await useService.search(query, extension);
    setImages(result);
  }

  function renderImageCard(image: Image) {
    return (
      <ImageCards
        key={image.url}
        name={image.name}
        src={image.url}
        size={image.size}
        uploadDate={image.uploadDate} />
    )
  }

  function renderImageCards() {
    return images.map(renderImageCard)
  }

  return (
    <Template>

      <section className="flex flex-col items-center justify-center my-5">
        <div className="flex space-x-4">
          <input type="text" onChange={event => setQuery(event.target.value)}
            className="border px-5 py-2 rounded-lg text-gray-900" />
          <select onChange={event => setExtension(event.target.value)}
            className="border px-4 py-2 rounded-lg text-gray-900">
            <option value="">All formats</option>
            <option value="PNG">PNG</option>
            <option value="JPEG">JPEG</option>
            <option value="GIF">GIF</option>
          </select>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={searchImages}>Search</button>
          <button className="bg-red-700 text-white px-4 py-2 rounded-lg">Add new image</button>
        </div>
      </section>


      <section className="grid grid-cols-3 gap-8">
        {
          renderImageCards()
        }
      </section>
    </Template>
  )

}