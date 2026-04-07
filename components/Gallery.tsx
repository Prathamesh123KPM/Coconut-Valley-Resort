import React from 'react';

// General site images
import coconutHome from '../coconuthome.webp';
import coconutAbout from '../coconutabout.webp';
import coconutAbove from '../coconutabove.webp';
import coconutGallery from '../coconutgallary.webp';
import coconutJhula from '../coconutjhula.webp';
import coconutPlay from '../coconutplay.webp';
import coconutPool from '../coconutpool.webp';
import coconutWedding from '../coconutwedding.webp';
import coconutWedding1 from '../coconutwedding1.webp';
import coconutWedding2 from '../coconutwedding2.webp';

// Room selections
import tropical1 from '../tropical (1).webp';
import jacuzzi1 from '../jacuzzi (1).webp';
import night1 from '../nightelegence (1).webp';
import star1 from '../starparadisee (1).webp';
import triangle1 from '../traiangleroom (1).webp';
import deluxe1 from '../deluxeroom (1).webp';
import woodenDorm from '../familydormitory.webp'; // Using this as a key visual
import woodenRoom from '../woodenroom.webp';

const Gallery: React.FC = () => {
  const photos = [
    { src: coconutGallery, span: 'md:col-span-2 md:row-span-2', alt: 'Resort Overview' },
    { src: coconutPool, span: 'md:col-span-1 md:row-span-1', alt: 'Swimming Pool' },
    { src: coconutAbove, span: 'md:col-span-1 md:row-span-1', alt: 'Aerial View' },
    { src: coconutJhula, span: 'md:col-span-1 md:row-span-2', alt: 'Garden Jhula' },
    { src: jacuzzi1, span: 'md:col-span-1 md:row-span-1', alt: 'Jacuzzi Bliss' },
    { src: coconutPlay, span: 'md:col-span-2 md:row-span-1', alt: 'Play Area' },
    { src: coconutWedding, span: 'md:col-span-2 md:row-span-2', alt: 'Wedding Venue' },
    { src: night1, span: 'md:col-span-1 md:row-span-1', alt: 'Night Suite' },
    { src: star1, span: 'md:col-span-1 md:row-span-1', alt: 'Star Paradise' },
    { src: tropical1, span: 'md:col-span-1 md:row-span-1', alt: 'Tropical Bliss' },
    { src: triangle1, span: 'md:col-span-1 md:row-span-1', alt: 'Triangle Room' },
    { src: coconutWedding1, span: 'md:col-span-1 md:row-span-1', alt: 'Wedding Moments' },
    { src: coconutWedding2, span: 'md:col-span-1 md:row-span-1', alt: 'Celebrations' },
    { src: woodenRoom, span: 'md:col-span-2 md:row-span-1', alt: 'Wooden Architecture' },
    { src: deluxe1, span: 'md:col-span-1 md:row-span-1', alt: 'Deluxe Comfort' },
    { src: woodenDorm, span: 'md:col-span-1 md:row-span-1', alt: 'Family Dormitory' },
    { src: coconutHome, span: 'md:col-span-2 md:row-span-1', alt: 'Resort Entrance' },
  ];

  return (
    <section id="gallery" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-emerald-700 font-bold tracking-widest uppercase text-sm mb-4 block">Visual Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Sanctuary in Frames</h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto rounded-full mb-8"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Every corner of Coconut Valley tells a story of nature, luxury, and tranquility. Explore our visual narrative.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[250px] gap-6">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`${photo.span} rounded-[2rem] overflow-hidden group relative shadow-lg hover:shadow-2xl transition-all duration-500`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <p className="text-white font-bold text-xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{photo.alt}</p>
                <button className="text-emerald-300 font-medium text-sm flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  Enlarge Photo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
