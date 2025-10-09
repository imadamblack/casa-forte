import Image from 'next/image';

export default function Blockbuster({overhead, title, description, background}) {

  const bg = typeof background === 'object' ? 'bg-black' : background;

  return (
    <section className="relative" style={{
      borderTop: '8px solid transparent',
      borderBottom: '8px solid transparent',
      borderLeft: '0 solid transparent',
      borderRight: '0 solid transparent',
      borderImage: `linear-gradient(
          to right,
          #b8860b 0%,   /* dorado oscuro */
          #ffd700 20%,  /* dorado brillante */
          #fff8dc 40%,  /* casi blanco (reflejo) */
          #ffd700 60%,  /* dorado brillante */
          #b8860b 80%,  /* dorado oscuro */
          #ffd700 100%  /* cierra brillante */
        ) 1`,
      borderImageSlice: 1,
    }}>
      <div className="absolute inset-0 z-[9999] bg-[rgba(0,0,0,0)] backdrop-invert pointer-events-none"/>
      <div
        className={`relative flex flex-col justify-end min-h-[60vh] w-screen md:mb-0 mx-auto py-12 md:py-20 ${bg} bg-center bg-cover invert`}>
        <div className="absolute inset-0 bg-gradient-to-tr from-black to-transparent opacity-60 z-0]"/>

        <div className="container mx-auto z-20">
          <div className="flex flex-col md:flex-row items-stretch justify-stretch">
            <div className="w-full p-8 md:p-14 w-2/3">
              {/*<p className="overhead">{overhead}</p>*/}
              <h2
                dangerouslySetInnerHTML={{__html: title}}
                className="my-auto ft-10 font-bold text-white"
              />
              <p className="hidden md:flex ft-3 mt-8 w-1/2 text-white">{description}</p>
            </div>
          </div>
        </div>

        {/*<div className="w-full pt-[60%] absolute bottom-0 bg-gradient-to-t from-brand-2 via-transparent md:via-transparent to-transparent opacity-90 z-10"/>*/}
        {typeof background === 'object' &&
          <Image src={background} layout="fill" className="object-cover"/>
        }
      </div>
      {description &&
        <div className="flex md:hidden container">
          <p className="ft-3 p-8">{description}</p>
        </div>
      }
    </section>
  );
}