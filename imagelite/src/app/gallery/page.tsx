'use client'

import { Template, ImageCards, Button, InputText } from '@/components'
import { Image } from '@/resources/image/image.resource';
import { useImageService } from '@/resources/image/image.service'
import { useState } from 'react'
import Link from 'next/link';

export default function GalleryPage() {

  const useService = useImageService();
  const [images, setImages] = useState<Image[]>([])
  const [query, setQuery] = useState<string>('')
  const [extension, setExtension] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  async function searchImages() {
    setLoading(true)
    const result = await useService.search(query, extension);
    setImages(result);
    setLoading(false)
  }

  function renderImageCard(image: Image) {
    return (
      <ImageCards
        key={image.url}
        name={image.name}
        src={image.url}
        size={image.size}
        extension={image.extension}
        uploadDate={image.uploadDate} />
    )
  }

  function renderImageCards() {
    return images.map(renderImageCard)
  }

  return (
    <Template loading={loading}>

      <section className="flex flex-col items-center justify-center my-5">
        <div className="flex space-x-4">
          <InputText onChange={event => setQuery(event.target.value)} />
          <select onChange={event => setExtension(event.target.value)}
            className="border px-4 py-2 rounded-lg text-gray-900">
            <option value="">All formats</option>
            <option value="PNG">PNG</option>
            <option value="JPEG">JPEG</option>
            <option value="GIF">GIF</option>
          </select>
          <Button style='bg-blue-500 hover: bg-blue-300' label='Search' onClick={searchImages}></Button>
          <Link href="/form">
            <Button style='bg-red-500 hover: bg-red-300' label='Add new image'></Button>
          </Link>
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