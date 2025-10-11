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
      <div id="ubicacion" className="w-full bg-[url('/landing/bg-marmol.png')]">
        <div className="container py-20">
          <div className="relative flex flex-col md:flex-row gap-16 items-stretch">
            <div className="w-full md:w-1/3">
              <h2 className="font-semibold">Visítanos en</h2>
              <p>
                Av. Jaime Balmes 11 LOCAL 111<br/>
                Polanco, Polanco I Secc,<br/>
                Miguel Hidalgo, 11510<br/>
                Ciudad de México, CDMX<br/>
              </p>
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
      </div>
    </section>
  );
}
