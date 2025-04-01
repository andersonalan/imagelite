import { Template, ImageCards } from '@/components'

export default function GalleryPage() {
  return (
    <Template>
      <section className="grid grid-cols-3 gap-8">
        <ImageCards />
        <ImageCards />
        <ImageCards />
        <ImageCards />
        <ImageCards />

      </section>
    </Template>
  )

}