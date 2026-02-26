import Image from 'next/image';

interface ImageCardProps {
  title: string;
  imageSrc: string;
  alt?: string;
}

export function ImageCard({ title, imageSrc, alt }: ImageCardProps) {
  return (
    <div className="relative group w-full h-[500px] overflow-hidden rounded-md bg-gray-100 mb-8 shadow-xl">
      <Image
        src={imageSrc}
        alt={alt || title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-100 transition-opacity duration-300" />

      <div className="absolute inset-x-0 bottom-0 flex justify-center pb-10 px-6 z-10">
        <p className="text-white text-2xl font-bold tracking-wide text-center drop-shadow-md">
          {title}
        </p>
      </div>
    </div>
  );
}