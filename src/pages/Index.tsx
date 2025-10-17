import { useState } from "react";
import RotatingBanana from "@/components/RotatingBanana";

const Index = () => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Fixed rotating banana background */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 opacity-80">
        <RotatingBanana 
          modelPath="/assets/models/banana3d.glb" 
          rotationSpeed={0.0025} 
          pixelSize={1} 
          gapRatio={1.5} 
          customResolution={320} 
          initialRotationAngle={0} 
          solid={false} 
        />
      </div>
      
      <main className="p-4 sm:p-8 lg:p-12 relative z-10 max-w-4xl mx-auto">
        {/* Language Toggle */}
        <div className="flex justify-end mb-8">
          <button
            onClick={toggleLanguage}
            className="text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
          >
            {language === 'es' ? '🇬🇧 English' : '🇪🇸 Español'}
          </button>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {/* Main Content */}
          <div className="text-white space-y-8">
            {language === 'es' ? (
              <>
                {/* Main Title */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-12">
                  🐎 Cabalgata por los Andes
              </h1>

                {/* Introduction */}
                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    Llegas a un evento del mundo startupero. Con tu nametag y una cerveza en la mano - con la etiqueta a medio pelar - sacas tu celular para simular que te llegó un mensaje mientras agarras ánimo para ir a hacer "conexiones".
                  </p>
                  
                  <p>
                    Conexiones que por lo demás estarán tan incómodas como tú, contando los minutos para irse o mirando cada tanto a los lados buscando otra persona de más valor y cumplir así la cuota de Linkedins intercambiados.
                  </p>
                  
                  <p>
                    Porque seamos francos, <span className="text-primary">las mejores interacciones</span> no se dan en ambientes transaccionales como eventos y conferencias; <span className="text-primary">pasan en situaciones más relajadas, como una comida, una caminata o, tal vez, en un paseo a caballo</span>.
                  </p>
                  
                  <p>
                    Dado que ningún evento en Chile está completo sin una visita a la naturaleza, en Platanus <span className="text-primary">queremos cerrar la Tech Week con una cabalgata de 2 días y 1 noche por la Cordillera de Los Andes</span>.
                  </p>
                  
                  {/* Image under the paragraph */}
                  <div className="flex justify-center my-8">
                    <img 
                      src="/lovable-uploads/f694ef5e-7936-469e-a570-5b7d93eafe0d.png" 
                      alt="Cabalgata por los Andes" 
                      className="max-w-4/5 h-auto rounded-lg shadow-lg grayscale hover:grayscale-0 transition-all duration-300" 
                    />
                  </div>
                  
                  <p>
                    Mantendremos el grupo acotado, entre 10 a 20 personas. Un mix de fundadores, inversionistas y personas interesante. Lo más importante, todos buenas onda.
                  </p>
                  
                  <p>
                    Esperamos que este paseo genere conexiones reales mientras disfrutamos de ricos asados, paisajes espectaculares y una noche bajo uno de los cielos más estrellados del mundo.
                  </p>
            </div>
              </>
            ) : (
              <>
                {/* Main Title */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-12">
                  🐎 Horseback Ride through the Andes
                </h1>

                {/* Introduction */}
                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    You arrive at a startup event. Nametag on your chest, a beer in hand—with the label half-peeled—you pull out your phone to fake a message while gathering courage to go make some "connections."
                  </p>
                  
                  <p>
                    Connections that, let's be honest, will be just as uncomfortable as you are—counting the minutes to leave or scanning the room for someone "more valuable," just to meet the quota of LinkedIn's new friends.
                  </p>
                  
                  <p>
                    Because let's face it: <span className="text-primary">the best interactions</span> won't happen in transactional settings like events and conferences. <span className="text-primary">They happen in more relaxed situations—a shared meal, a walk, or maybe, just maybe, on horseback</span>.
                  </p>
                  
                  <p>
                    And since no event in Chile is complete without a visit to nature, at Platanus <span className="text-primary">we want to close Chile Tech Week with a 2-day, 1-night horseback ride through the Andes</span>.
                  </p>
                  
                  {/* Image under the paragraph */}
                  <div className="flex justify-center my-8">
                    <img 
                      src="/lovable-uploads/f694ef5e-7936-469e-a570-5b7d93eafe0d.png" 
                      alt="Horseback Ride through the Andes" 
                      className="max-w-4/5 h-auto rounded-lg shadow-lg grayscale hover:grayscale-0 transition-all duration-300" 
                    />
              </div>
                  
                  <p>
                    We'll keep it small: 10 to 20 people. A mix of founders, investors, and interesting folks. Most importantly—everyone with <em>buena onda</em>.
                  </p>
                  
                  <p>
                    We hope this ride sparks real connections while we enjoy great <em>asados</em>, spectacular landscapes, and a night under one of the starriest skies in the world.
                  </p>
                </div>
              </>
            )}

            {/* Itinerario Section */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                {language === 'es' ? 'Itinerario' : 'Itinerary'}
              </h2>
              
              <div className="space-y-4 text-lg leading-relaxed">
                {language === 'es' ? (
                  <>
                    <p>
                      La organización de la cabalgata estará a cargo de <a href="https://rimaya.cl/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 transition-colors">Rimaya</a>, expertos en este tipo de experiencias.
                    </p>
                    
                    <p>
                      Pasarán a recogerte a tu hotel/casa y nos juntaremos todos en el Fundo Santa Matilde a tomar un buen desayuno.
                    </p>
                    
                    <p>
                      Con la guata bien llena nos subimos a nuestros caballos y partimos la aventura subiendo por el río Molina hasta el Valle del Cepo, donde remontaremos el río para seguir subiendo.
                    </p>
                    
                    {/* Image after the paragraph */}
                    <div className="flex justify-center my-8">
                      <img 
                        src="/lovable-uploads/73cd8f23-4bb0-41bc-8791-2a3a77e76a57.png" 
                        alt="Cabalgata por el río Molina hacia Valle del Cepo" 
                        className="max-w-4/5 h-auto rounded-lg shadow-lg grayscale hover:grayscale-0 transition-all duration-300" 
                      />
                    </div>
                    
                    <p>
                      En algún punto del valle tendremos un rico aperitivo y un almuerzo de montaña, para luego continuar hasta Piedra Numerada, un antiguo puesto incaico convertido en campamento arriero.
                    </p>
                    
                    {/* Image after the paragraph */}
                    <div className="flex justify-center my-8">
                      <img 
                        src="/lovable-uploads/85ef3029-4974-4072-81ea-b9c8ab1019ef.png" 
                        alt="Piedra Numerada campamento arriero" 
                        className="max-w-4/5 h-auto rounded-lg shadow-lg grayscale hover:grayscale-0 transition-all duration-300" 
                      />
              </div>
                    
                    <p>
                      Nos estará esperando un campamento armado, listo para pasar una noche bajo las estrellas, con parrilla prendida y musica en vivo. Es alrededor del fuego donde comenzarán a fluir las historias.
                    </p>
                    
                    {/* Image after the paragraph */}
                    <div className="flex justify-center my-8">
                      <img 
                        src="/lovable-uploads/e406049f-08d8-4fb0-96be-647dc626caac.png" 
                        alt="Campamento bajo las estrellas con parrilla y música en vivo" 
                        className="max-w-4/5 h-auto rounded-lg shadow-lg grayscale hover:grayscale-0 transition-all duration-300" 
                      />
         </div>
                    
                    <p>
                      El segundo día nos levantamos temprano a tomar otro buen desayuno para reponer energías y comenzar nuestra segundo tramo por la ruta que va al parque Yerba loca.
                    </p>
                    
                    {/* Image after the paragraph */}
                    <div className="flex flex-col items-center my-8">
                      <img 
                        src="/lovable-uploads/b0fe2f32-a647-454a-8c00-215d787a9554.png" 
                        alt="Segundo día cabalgata hacia parque Yerba Loca" 
                        className="max-w-4/5 h-auto rounded-lg shadow-lg grayscale hover:grayscale-0 transition-all duration-300" 
                      />
                      <p className="text-sm text-primary mt-2 italic text-center">
                        Las carpas que se ven a la derecha es el sector del campamento.
                      </p>
            </div>
                    
                    <p>
                      Pasaremos por un antiguo refugio de montaña donde tendremos un rico aperitivo. El último tramo nos dejará en la entrada del parque Yerba Loca donde cerraremos la cabalgata con otro aperitivo más una degustación y maridaje de vinos.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      The ride will be organized by <a href="https://rimaya.cl/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 transition-colors">Rimaya</a>, experts in this type of experiences.
                    </p>
                    
                    <p>
                      You'll be picked up at your hotel/home and we'll all meet at Fundo Santa Matilde for a hearty breakfast.
                    </p>
                    
                    <p>
                      With the <em>guata</em> full, we'll saddle up and begin our adventure, following the Molina River up to the Valle del Cepo, where we'll ride further into the mountains.
                    </p>
                    
                    {/* Image after the paragraph */}
                    <div className="flex justify-center my-8">
                      <img 
                        src="/lovable-uploads/73cd8f23-4bb0-41bc-8791-2a3a77e76a57.png" 
                        alt="Horseback ride along Molina River to Valle del Cepo" 
                        className="max-w-4/5 h-auto rounded-lg shadow-lg grayscale hover:grayscale-0 transition-all duration-300" 
                      />
                    </div>
                    
                    <p>
                      At some point in the valley we'll stop for a mountain <em>aperitivo</em> and lunch, before continuing on to Piedra Numerada, an old Incan post turned <em>arrieros'</em> camp.
                    </p>
                    
                    {/* Image after the paragraph */}
                    <div className="flex justify-center my-8">
                      <img 
                        src="/lovable-uploads/85ef3029-4974-4072-81ea-b9c8ab1019ef.png" 
                        alt="Piedra Numerada arrieros camp" 
                        className="max-w-4/5 h-auto rounded-lg shadow-lg grayscale hover:grayscale-0 transition-all duration-300" 
                      />
                    </div>
                    
                    <p>
                      There, our campsite will be waiting—set for a night under the stars, grill fired up, and live music. Around the fire, the stories will start flowing.
                    </p>
                    
                    {/* Image after the paragraph */}
                    <div className="flex justify-center my-8">
                      <img 
                        src="/lovable-uploads/e406049f-08d8-4fb0-96be-647dc626caac.png" 
                        alt="Campsite under the stars with grill and live music" 
                        className="max-w-4/5 h-auto rounded-lg shadow-lg grayscale hover:grayscale-0 transition-all duration-300" 
                      />
                    </div>
                    
                    <p>
                      On the second day, we'll rise early for another solid breakfast before setting out on the second leg of the journey toward Yerba Loca Park.
                    </p>
                    
                    {/* Image after the paragraph */}
                    <div className="flex flex-col items-center my-8">
                      <img 
                        src="/lovable-uploads/b0fe2f32-a647-454a-8c00-215d787a9554.png" 
                        alt="Second day horseback ride toward Yerba Loca Park" 
                        className="max-w-4/5 h-auto rounded-lg shadow-lg grayscale hover:grayscale-0 transition-all duration-300" 
                      />
                      <p className="text-sm text-primary mt-2 italic text-center">
                        The tents you see on the right are the camping area.
                      </p>
                  </div>
                    
                    <p>
                      We'll pass an old mountain refuge where we'll enjoy another <em>aperitivo</em>. The final stretch takes us to the entrance of Yerba Loca, where we'll close out the ride with one last meal plus a wine tasting.
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* What to bring Section */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                {language === 'es' ? '¿Qué debo llevar?' : 'What should I bring?'}
              </h2>
              
              {language === 'es' ? (
                <>
                  <p className="text-lg leading-relaxed">
                    Aunque estemos acercándonos al verano, en la montaña siempre hace frío. Para no pasar un mal rato, es necesario llevar lo siguiente:
                  </p>
                  
                  <ul className="list-disc ml-6 space-y-2 text-lg">
                    <li>Primera capa lana merino, arriba y abajo.</li>
                    <li>Calcetín delgado y grueso (recambio)</li>
                    <li>Pantalón cómodo</li>
                    <li>Polar delgado y grueso / Cortaviento</li>
                    <li>Chaqueta pluma / Chaqueta Primaloft</li>
                    <li>Gorro lana/ Buff/ Jockey sol</li>
                    <li>Anteojos de sol</li>
                    <li>Zapatilla de trekking y/o Bototo de trekking</li>
                    <li>Ropa cómoda para el campamento</li>
                    <li>Linterna frontal</li>
                    <li>Implementos de aseo personal</li>
               </ul>
                </>
              ) : (
                <>
                  <p className="text-lg leading-relaxed">
                    Even though summer is near, the mountains are always cold. To stay comfortable, you'll need:
                  </p>
                  
                  <ul className="list-disc ml-6 space-y-2 text-lg">
                    <li>Merino wool base layer (top and bottom)</li>
                    <li>Thin and thick socks (spares)</li>
                    <li>Comfortable pants</li>
                    <li>Thin and thick fleece / windbreaker</li>
                    <li>Down jacket / Primaloft jacket</li>
                    <li>Wool hat / Buff / Sun cap</li>
                    <li>Sunglasses</li>
                    <li>Trekking shoes and/or hiking boots</li>
                    <li>Comfortable clothes for camp</li>
                    <li>Headlamp</li>
                    <li>Personal toiletries</li>
                  </ul>
                </>
              )}
                </div>

            {/* What's included Section */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                {language === 'es' ? 'Lo que viene incluido' : "What's included"}
              </h2>
              
              {language === 'es' ? (
                <ul className="list-disc ml-6 space-y-2 text-lg">
                  <li>Producción, guiado, seguridad y Logística</li>
                  <li>Guías especializados: WFR</li>
                  <li>Camping Piedra Numerada Carpas The North Face VE25</li>
                  <li>Caballos y arrieros</li>
                  <li>Teléfono Satelital y comunicación por radio entre staff</li>
                  <li>Alimentación completa</li>
                  <li>Comida de montaña en campamento</li>
                  <li>Actividades: Trekking Guiado, Cabalgata</li>
                  <li>Entradas al parque y permisos asociados</li>
                  <li>Equipo de Campamento (saco de dormir, catre y colchoneta)</li>
                  <li>Transporte por tierra</li>
                </ul>
              ) : (
                <ul className="list-disc ml-6 space-y-2 text-lg">
                  <li>Production, guiding, safety, and logistics</li>
                  <li>Specialized guides: WFR</li>
                  <li>Camping at Piedra Numerada (The North Face VE25 tents)</li>
                  <li>Horses and herders</li>
                  <li>Satellite phone and radio communication between staff</li>
                  <li>All meals included</li>
                  <li>Mountain cuisine at camp</li>
                  <li>Activities: Guided trekking, horseback riding</li>
                  <li>Park entrance and permits</li>
                  <li>Camping gear (sleeping bag, cot, and mat)</li>
                  <li>Ground transportation</li>
                </ul>
              )}
              </div>

            {/* Not included Section */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                {language === 'es' ? 'No está incluido' : 'Not included'}
              </h2>
              
              {language === 'es' ? (
                <ul className="list-disc ml-6 space-y-2 text-lg">
                  <li>Equipo personal y ropa</li>
                  <li>Registro audiovisual</li>
                </ul>
              ) : (
                <ul className="list-disc ml-6 space-y-2 text-lg">
                  <li>Personal gear and clothing</li>
                  <li>Photo/video coverage</li>
            </ul>
              )}
            </div>

            {/* Cost Section */}
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                {language === 'es' ? 'Costo' : 'Cost'}
              </h2>
              <p className="text-3xl sm:text-4xl font-bold text-primary">US$750</p>
            </div>
          </div>

          {/* Logo at the end */}
          <div className="flex justify-center mt-16 mb-8">
            <div className="w-64 h-64 lg:w-96 lg:h-96">
              <img 
                src="/lovable-uploads/0f3371ba-2aa4-4033-85b0-6985b333647d.png" 
                alt="Logo" 
                className="w-full h-full object-contain" 
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;