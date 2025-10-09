import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { info } from '../../info';
import { content } from '../../content';

import OptInForm from '../components/form/opt-in-form';
import Link from 'next/link';
import Blockbuster from '../components/blockbuster';
import Faqs from '../components/faqs';
import scrollDepth from '../utils/scrollDepth';

export default function Index() {
  const [lastClick, setLastClick] = useState('');
  const [slide, setSlide] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    scrollDepth({
      values: [25, 50, 75, 100],
      callback: (value) => fbq('trackCustom', `Scroll Depth: ${value}`),
    });
  });

  const goToContact = (origin) => {
    setLastClick(origin);
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({behavior: 'smooth', block: 'start'});
    // if (typeof window !== 'undefined' && window.fbq) {
    //   window.fbq('trackCustom', 'CTA_Click', {origin});
    // }
  };


  const {hero, beneficios, atributos, catalogo, garantias, testimonios, faqs, cta} = content;

  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-[80rem] w-full flex flex-col md:justify-end items-center bg-white overflow-hidden">
        <div className="relative min-h-[32rem] flex-grow w-full md:absolute top-0 inset-x-0 bottom-1/2 md:bottom-0">

          <div className="absolute inset-0 z-[9999] bg-[rgba(0,0,0,0)] backdrop-invert pointer-events-none"/>

          <div
            className="w-full h-[12rem] pt-[80%] top-0 absolute bg-gradient-to-b from-black/50 to-transparent z-10 invert"/>
          <div
            className="w-full h-[12rem] md:pt-[100%] bottom-0 absolute bg-gradient-to-t from-white md:from-yellow-600 to-transparent md:opacity-60 z-10 invert"/>

          <Image src="/landing/hero.jpg" layout="fill" className="object-cover object-right invert"/>

        </div>

        <div className="container min-h-[40rem] text-white w-full text-left z-20 py-20">
          <h1
            className="md:w-2/3 relative ft-11 invert">
            {hero.banner.title}
          </h1>
          <p className="ft-3 mt-16 md:text-white invert" dangerouslySetInnerHTML={{__html: hero.banner.description}}/>

          <div className="flex flex-col justify-start items-start mt-20 md:invert">
            <Link href="#contact">
              <a onClick={() => goToContact('benefits')} className="button mb-4">{hero.cta.main ?? 'Contáctanos'}</a>
            </Link>
            <p className="-ft-1">{hero.cta.second}</p>
          </div>

        </div>
      </section>

      {catalogo != null &&
        <section id="catalogo" style={{
          borderTop: '8px solid transparent',
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
          <div className="reading-container my-20">
            <h2 className="text-center font-semibold" dangerouslySetInnerHTML={{__html: catalogo.banner.title}}/>
            <p className="ft-2" dangerouslySetInnerHTML={{__html: hero.content.paragraph}}/>
          </div>
          <div className="px-16">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8 items-stretch">
              {catalogo.content.items.map((i, idx) =>
                <div className="relative flex flex-col w-full gap-4">
                  <div>
                    <div className="relative shadow-md w-full aspect-square overflow-hidden">
                      <Image src={`/landing/${i.img}`} layout="fill" objectFit="cover"/>
                    </div>
                  </div>
                  <div className="flex flex-col shadow-lg border p-8 flex-grow gap-4">
                    <h3 className="ft-3 font-semibold tracking-wide">{i.title}</h3>
                  </div>
                </div>,
              )}
            </div>
          </div>
          <div className="reading-container mt-20">
            <Link href="#contact">
              <a onClick={() => goToContact('catalogo')} className="button mb-4">{hero.cta.main ?? 'Contáctanos'}</a>
            </Link>
            <p className="-ft-1">{hero.cta.second}</p>
          </div>
        </section>}

      {/* BENEFICIOS */}
      {/*<section id="beneficios">*/}
      {/*  <Blockbuster*/}
      {/*    background={`bg-[url('/landing/beneficios.jpg')]`}*/}
      {/*    title={beneficios.banner.title}*/}
      {/*    description={beneficios.banner.description}*/}
      {/*  />*/}
      {/*  <div className="container mb-20">*/}
      {/*    <p className="reading-container ft-2 m-20" dangerouslySetInnerHTML={{__html: beneficios.content?.paragraph}}/>*/}
      {/*    <div className="grid lg:grid-cols-3 gap-8 items-stretch">*/}
      {/*      {beneficios.content.items.map((i, idx) =>*/}
      {/*        <div*/}
      {/*          id={`beneficio-${idx}`}*/}
      {/*          className="relative flex flex-col gap-8 w-full bg-white rounded-2xl shadow-lg overflow-hidden">*/}

      {/*          <div className="w-full aspect-[16/9]">*/}
      {/*            <div className="relative w-full h-full">*/}
      {/*              <Image src={`/landing/${i.img}`} layout="fill" objectFit="cover"/>*/}
      {/*            </div>*/}
      {/*          </div>*/}

      {/*          <div className="p-20">*/}
      {/*            <h3 className="ft-4 font-semibold tracking-wide flex-grow">{i.title}</h3>*/}
      {/*            <p className="ft-1">{i.description}</p>*/}
      {/*          </div>*/}

      {/*        </div>,*/}
      {/*      )}*/}
      {/*    </div>*/}

      {/*    <div className="flex flex-col justify-start md:justify-center items-start md:items-center mt-20">*/}
      {/*      <Link href="#contact">*/}
      {/*        <a onClick={() => goToContact('benefits')} className="button mb-4">{hero.cta.main ?? 'Contáctanos'}</a>*/}
      {/*      </Link>*/}
      {/*      <p className="-ft-1">{hero.cta.second}</p>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/*UBICACION*/}

      <section id="ubicacion" className="bg-[url('/landing/bg-marmol.png')]" style={{
        borderTop: '8px solid transparent',
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
        <div className="container py-20">
          <div className="relative flex flex-col md:flex-row gap-16 items-stretch">
            <div className="w-full md:w-1/3">
              <h2 className="font-semibold">En dónde nos encontramos</h2>
              <p>
                Av. Jaime Balmes 11 LOCAL 111<br/>
                Polanco, Polanco I Secc,<br/>
                Miguel Hidalgo, 11510<br/>
                Ciudad de México, CDMX<br/>
              </p>
              <div className="mt-12">
                <Link href="#contact">
                  <a onClick={() => goToContact('atributos')}
                     className="button mb-4">Contáctanos y visítanos</a>
                </Link>
                <p className="-ft-1">{hero.cta.second}</p>
              </div>
            </div>
            <div className="relative w-full md:w-2/3 aspect-square md:aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.412608709584!2d-99.2130516238643!3d19.437769440514046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d20218e6121855%3A0xa8dbee5e568ec80c!2sAv.%20Jaime%20Balmes%2011%2C%20Polanco%2C%20Polanco%20I%20Secc%2C%20Miguel%20Hidalgo%2C%2011510%20Ciudad%20de%20México%2C%20CDMX!5e0!3m2!1sen!2smx!4v1759963423092!5m2!1sen!2smx"
                style={{position: 'absolute', inset: 0, border: 0, width: '100%', height: '100%'}}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación: Av. Jaime Balmes 11, Polanco, CDMX"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ATRIBUTOS */}
      <section id="atributos">
        <Blockbuster
          background={`bg-[url('/landing/atributos.jpg')]`}
          title={atributos.banner.title}
          description={atributos.banner.description}
        />
        <div className="px-16 my-40">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-16 items-stretch">
            {atributos.content.items.map((i, idx) =>
              <div className="flex flex-col w-full gap-4">

                <div className="relative pt-[100%]">
                  <div className="absolute inset-8 aspect-square rounded-full overflow-hidden z-10">
                    <Image src={`/landing/${i.img}`} layout="fill" objectFit="cover"/>
                  </div>
                </div>

                <div className="flex flex-col py-20 px-8 flex-grow gap-4 shadow-lg">
                  <h3 className="ft-6 font-semibold text-center max-w-[16ch] mx-auto">{i.title}</h3>
                  <p className="text-center">{i.description}</p>
                </div>
              </div>,
            )}
          </div>
          <div className="flex flex-col justify-start md:justify-center items-start md:items-center mt-20">
            <Link href="#contact">
              <a onClick={() => goToContact('atributos')} className="button mb-4">{hero.cta.main ?? 'Contáctanos'}</a>
            </Link>
            <p className="-ft-1">{hero.cta.second}</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios">
        <Blockbuster
          background={`bg-[url('/landing/testimonios.jpg')]`}
          title={testimonios.banner.title}
          description={testimonios.banner.description}
        />
        <div className="container my-40">
          <div className="grid md:grid-cols-3 gap-16 items-stretch">
            {testimonios.content.items.map((i, idx) =>
              <div className="relative flex flex-col p-12 pt-32 border border-yellow-500 shadow-md">
                <p className="!text-[16rem] absolute -top-28 -left-2 material-icons">format_quote</p>
                <p className="ft-2 font-medium flex-grow my-20">{i.description}</p>
                <p className="ft-1 text-right">
                  {i.title}
                </p>
              </div>,
            )}
          </div>
          <div className="flex flex-col justify-start md:justify-center items-start md:items-center mt-20">
            <Link href="#contact">
              <a onClick={() => goToContact('testimonios')}
                 className="button mb-4">{hero.cta.main ?? 'Contáctanos'}</a>
            </Link>
            <p className="-ft-1">{hero.cta.second}</p>
          </div>
        </div>
      </section>

      {/* GARANTIAS */}
      {garantias != null &&
        <section id="garantias">
          <Blockbuster
            background={`bg-[url('/landing/garantias.jpg')]`}
            title={garantias.banner.title}
            description={garantias.banner.description}
          />
          <div className="container my-40">
            <div className="grid md:grid-cols-3 gap-16 items-stretch">
              {garantias.content.items.map((i, idx) =>
                <div className="flex md:flex-col items-center md:justify-start gap-12">
                  <div
                    className="bg-yellow-400 border-2 border-yellow-500 w-1/4 md:h-[16rem] md:w-[16rem] rounded-full overflow-hidden p-6 md:p-12">
                    <div className="relative w-full pt-[100%]">
                      <Image src={`/landing/${i.img}`} layout="fill" objectFit="contain"/>
                    </div>
                  </div>
                  <div className="relative w-3/4 md:w-full flex flex-col flex-grow p-12 border-2 rounded-3xl shadow-md">
                    <h3>{i.title}</h3>
                    <p>{i.description}</p>
                  </div>
                </div>,
              )}
            </div>
            <div className="flex flex-col justify-start md:justify-center items-start md:items-center mt-20">
              <Link href="#contact">
                <a onClick={() => goToContact('garantias')}
                   className="button mb-4">{hero.cta.main ?? 'Contáctanos'}</a>
              </Link>
              <p className="-ft-1">{hero.cta.second}</p>
            </div>
          </div>
        </section>
      }

      {/* FAQS */}
      <section id="faqs" className="border-b-2 border-brand-1">
        <Blockbuster
          background={`bg-[url('/landing/faqs.jpg')]`}
          title={faqs.banner.title}
          description={faqs.banner.description}
        />
        <div className="container my-20">
          <Faqs questions={faqs.content.items}/>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact"
               className="border-t-2 border-brand-1 bg-white
                bg-center bg-cover py-20 z-[99999]">
        <div className="container">
          <div className="w-full md:w-1/2 mx-auto">
            <h2 className="!font-bold text-neutral-900">
              {cta.main}
            </h2>
            <div className="mt-20 mb-12">
              <p className="ft-1 font-semibold text-neutral-900">{cta.description}</p>
              <p className="ft-1 text-neutral-900" dangerouslySetInnerHTML={{__html: cta.paragraph}}/>
            </div>
            <OptInForm
              lastClick={lastClick}
            />
          </div>
        </div>
      </section>

      <div
        className='fixed inset-x-0 bottom-4 px-8 z-[9999] isolate'>
        <div className='flex justify-center lg:justify-end'>
          <a
            href="#contact"
            onClick={() => goToContact('wa-btn')}
            className='ft-3 button hover:bg-brand-5 !mt-0 !py-6 !px-16 !rounded-full shadow-lg'
          >
            <span className="filter invert mr-4"><Image src="/whatsapp.svg" width={24} height={24}/></span>
            Mándanos un WhatsApp
          </a>

        </div>
      </div>
    </>
  );
}
