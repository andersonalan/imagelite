'use client'

import { Template, ImageCards } from '@/components'
import { useState } from 'react'
import { useImageService } from '@/resources/image/image.service'
import { Image } from '@/resources/image/image.resource';

export default function GalleryPage() {

  const useService = useImageService();
  const [images, setImages] = useState<Image[]>([])

  async function searchImages() {
    const result = await useService.search();
    setImages(result);
    console.table(result)
  }

  function renderImageCard(image: Image) {
    return (
      <ImageCards name={image.name}
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
      <button className='bg-gray-500' onClick={searchImages}>CLIQUE</button>
      <section className="grid grid-cols-3 gap-8">
        {
          renderImageCards()
        }
      </section>
    </Template>
  )

}