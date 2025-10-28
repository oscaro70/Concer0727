export default function Testimonios() {
  return (
    <div className="container my-5">
      {/* Título principal */}
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold text-center text-primary mb-4">Testimonios de Porteros Profesionales</h1>
        <p className="text-muted">
          Las mejores manos del mundo confían en nuestros guantes. Escucha lo que dicen los porteros que defienden con pasión.
        </p>
      </div>

      {/* Sección de testimonios */}
      <div className="row g-4">
        {/* Testimonio 1 */}
        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8lQJWeIEpifFNmURoDLqdYv9SDr8fXo5CZQ&s"
              className="card-img-top rounded-top"
              alt="Portero profesional 1"
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold"><a href="#David">David Hernández</a></h5>
              <p className="text-muted mb-1">Portero - Selección Nacional de México</p>
            </div>
          </div>
        </div>

        {/* Testimonio 2 */}
        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVvsVqA3o2gyqU1viKxFleXCjENBXPBQOkWA&s"
              className="card-img-top rounded-top"
              alt="Portero profesional 2"
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold"><a href="#Ochoa">Guillermo Ochoa</a></h5>
              <p className="text-muted mb-1">Portero - Selección Nacional de México</p>

            </div>
          </div>
        </div>

        {/* Testimonio 3 */}
        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToIxG4Rj6Bu7fPQA6K2oFcgsL2MxmzZ2IZVQ&s"
              className="card-img-top rounded-top"
              alt="Portera profesional 3"
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold"><a href="#Sofia">Sofía Martínez</a></h5>
              <p className="text-muted mb-1">Portera - Liga Femenil Internacional</p>
              
            </div>
          </div>
        </div>
        
        <div className="row">
          <div id="Ochoa" className="col ">
          <br /><br /><br /><br />
          <h4 className="fw-bold mb-1 text-primary">Guillermo Ochoa</h4><br />
          <p className="text-muted mb-3"><strong>Portero Profesional - Selección Mexicana</strong></p>

          <p className="text-muted  text-justify">
            “Desde mis primeros entrenamientos, siempre he creído que los guantes son más
            que una herramienta: son una extensión de tus manos y tu confianza. Hace poco
            decidí probar los guantes de <strong>Cacu Store</strong> y debo decir que fue
            una experiencia que superó mis expectativas. Desde el primer contacto noté la
            calidad del material, el agarre firme bajo cualquier condición climática y el
            ajuste perfecto que me brinda seguridad en cada atajada.<br /><br />
          
            Además, el proceso de compra fue rápido, seguro y muy personalizado. El equipo
            de atención me asesoró para encontrar el modelo ideal para mi estilo de juego.
            Recibí los guantes en tiempo récord y con un empaque impecable. Es evidente
            que en Cacu Store se preocupan por cada detalle y por ofrecer un producto que
            realmente marca la diferencia dentro del campo.<br /><br />
          
            Recomiendo ampliamente a todos los porteros —profesionales y amateurs— que
            busquen elevar su rendimiento, confiar en la calidad de Cacu Store. No son solo
            guantes, es confianza en tus manos.”
          </p>
          <div className="mt-4">
            <span className="text-warning fs-4">★★★★★</span>
            <p className="small text-muted mt-1"><a href="#">Calificación: 5/5 estrellas</a></p>
          </div>
          </div>

        </div>
       
        <div className="row">

          <div id = "Sofia" className="col">
          <br /><br /><br /><br />
        
          <h4 className="fw-bold mb-1 text-primary">Sofía Martínez</h4><br />
          <p className="text-muted mb-3"><strong>Portera - Liga Femenil Internacional</strong></p>

          <p className="text-muted text-justify">
            “Como portera profesional, sé que los guantes no son solo un accesorio, sino
            una parte fundamental del rendimiento. En cada entrenamiento y partido confío
            en mis reflejos, pero también en el equipo que uso. Cuando descubrí
            <strong> Cacu Store</strong>, me llamó la atención su dedicación exclusiva al
            mundo del portero. Decidí probar sus guantes y desde el primer uso supe que
            había encontrado algo diferente: comodidad, ligereza y un agarre impecable.<br /><br />
          
            Lo que más me sorprendió fue la atención personalizada. Me ayudaron a elegir
            el modelo que mejor se adaptaba a mis manos y estilo de juego. El envío fue
            rápido, el empaque de excelente calidad y los guantes llegaron listos para
            rendir al máximo. Incluso después de varios partidos bajo lluvia y sol, el
            material sigue intacto, demostrando su durabilidad.<br /><br />
          
            En Cacu Store encontré más que un producto: una marca que entiende lo que
            significa ser portera. Recomiendo sus guantes a todas las jugadoras que buscan
            seguridad, confianza y un rendimiento de nivel internacional.”
          </p>

          <div className="mt-4">
            <span className="text-warning fs-4">★★★★★</span>
            <p className="small text-muted mt-1"><a href="#">Calificación: 5/5 estrellas</a></p>
          </div>
          </div>

        </div>
        <div className="row">
          <div id ="David" className="col">
          <br /><br /><br /><br />  
          <h4 className="fw-bold mb-1 text-primary">David Hernández</h4><br />
          <p className="text-muted mb-3"><strong>Portero - Selección Nacional de México</strong></p>

          <p className="text-muted text-justify">
            “Ser portero de la selección mexicana exige concentración, técnica y, sobre todo,
            confianza en cada movimiento. Durante mucho tiempo busqué guantes que ofrecieran
            el equilibrio perfecto entre agarre, comodidad y durabilidad. Fue en <strong> Cacu Store</strong> donde finalmente encontré ese nivel de calidad que
            buscaba. Sus guantes se ajustan perfectamente a mis manos, permiten un control
            total del balón y brindan la seguridad que necesito en cada entrenamiento y partido. <br /><br />
          
            La experiencia de compra también me sorprendió. Desde la atención personalizada
            hasta el envío rápido y seguro, todo fue impecable. Además, el equipo de Cacu Store entiende realmente lo que los porteros necesitamos dentro del campo. Cada modelo está pensado para rendir al máximo sin sacrificar comodidad, incluso en condiciones
            extremas.<br /><br />
          
            Hoy puedo decir con confianza que Cacu Store se ha convertido en mi marca de confianza.
            No solo venden guantes: transmiten pasión por el fútbol y respeto por quienes
            defendemos la portería. Recomiendo sus productos a todo portero que busque rendir
            al más alto nivel.”
          </p>

          <div className="mt-4">
            <span className="text-warning fs-4">★★★★★</span>
            <p className="small text-muted mt-1"><a href="#">Calificación: 5/5 estrellas</a></p>
          </div>
             
          </div>

        </div>
      </div>
      

      {/* CTA final */}
      <div className="text-center mt-5">
        <a href="/contacto" className="btn btn-primary px-4 py-2">
          Envíanos tu testimonio
        </a>
      </div>
    </div>


  );
}
