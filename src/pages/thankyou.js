import { info } from '../../info';
import Link from 'next/link';

export default function ThankYou() {
  return (
    <section className="relative flex flex-col flex-grow justify-center pt-20 px-0">
      <div className="container md:w-1/2 flex flex-col min-h-[40dvh] items-center justify-center pt-[8rem] gap-8">
        <h2 className="ft-8 text-center">
          ¡Gracias por contactarnos!
        </h2>
        <p className="ft-4 text-center">
          Muy pronto, uno de nuestros expertos joyeros se pondrá en contacto contigo para valuar tus piezas.
        </p>
        <div className="flex flex-col items-center justify-center gap-10">
          <a
            className="ft-2 py-3 px-6 rounded-lg items-center  bg-green-500 hover:bg-green-600 transition-all hover:scale-105"
            href={`https://wa.me/${info.whatsapp.value}`}
          >
            <p className="text-white">
              O contáctanos por <span className="font-semibold">WhatsApp</span>
            </p>
          </a>
        </div>

      </div>

      <div
        id="ubicacion"
        className="bg-[url('/landing/bg-marmol.png')]"
        style={{
          borderTop: '8px solid transparent',
          borderLeft: '0 solid transparent',
          borderRight: '0 solid transparent',
          borderImage: `linear-gradient(
            to right,
            #b8860b 0%,  
            #ffd700 20%, 
            #fff8dc 40%, 
            #ffd700 60%, 
            #b8860b 80%, 
            #ffd700 100% 
          ) 1`,
          borderImageSlice: 1,
        }}>
        <div className="container py-20">
          <h2 className="mb-12">Visítanos en nuestras sucursales</h2>
          <div className="grid grid-cols-2 gap-8 items-stretch">
            <div className="relative flex flex-col md:flex-row gap-16 items-stretch">
              <div className="flex flex-col flex-grow w-full md:w-5/12">
                <h3 className="font-semibold">Plaza Polanco</h3>
                <p className="mb-8">
                  Av. Jaime Balmes 11 <br/>
                  Local 111<br/>
                  Polanco I Secc, 11510<br/>
                  Ciudad de México
                </p>
                <a
                  href="https://maps.app.goo.gl/YpD9QybQPAYJobTM6"
                  target="_blank"
                  className="button">
                  Cómo llegar?
                </a>
              </div>
              <div className="hidden md:block relative w-full md:w-2/3 aspect-square md:aspect-video">
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

            <div className="relative flex flex-col md:flex-row gap-16 items-stretch">
              <div className="flex flex-col flex-grow w-full md:w-5/12">
                <h3 className="font-semibold">La Cúspide Sky Mall</h3>
                <p className="flex-grow">
                  Avenida Lomas Verdes 1200<br/>
                  Naucalpan de Juárez, 53124<br/>
                  Estado de México<br/>
                </p>
                <a
                  href="https://maps.app.goo.gl/pZV2DLAM5aDzMtf96"
                  target="_blank"
                  className="button mt-auto">
                  Cómo llegar?
                </a>
              </div>
              <div className="hidden md:block relative w-full md:w-2/3 aspect-square md:aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.6328052422414!2d-99.27004977478356!3d19.514427581782556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d2034e0207c5b1%3A0x3199f87d77124290!2sAvenida%20Lomas%20Verdes%201200%2C%20La%20Cuspide%2C%2053124%20Naucalpan%20de%20Ju%C3%A1rez%2C%20M%C3%A9x.!5e0!3m2!1ses!2smx!4v1762803623040!5m2!1ses!2smx"
                  style={{position: 'absolute', inset: 0, border: 0, width: '100%', height: '100%'}}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación: Avenida Lomas Verdes 1200, La Cuspide, Naucalpan de Juárez, Méx."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
