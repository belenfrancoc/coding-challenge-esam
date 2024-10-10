import React from 'react';
import './styles/chunk-vendors.2e51402a.css'; 
import './styles/app.1af6b734.css';
import MenuButton from './components/menu-button.component';
import images from './images';


function App() {
  return (
    <main className="v-main" style={{ "--v-layout-left": "0px", "--v-layout-right": "0px", "--v-layout-top": "64px", "--v-layout-bottom": "96px" }}>
      <header className="v-toolbar v-toolbar--density-default v-theme--light v-locale--is-ltr v-app-bar"
        style={{ backgroundColor: "rgb(22, 45, 74)", color: "rgb(255, 255, 255)" }}>
        <div className="v-toolbar__content" style={{ height: "64px" }}>
          <div className="v-toolbar-title font-italic">
            <div className="v-toolbar-title__placeholder">Sistema Academico ESAM</div>
          </div>
        </div>
      </header>

      
      <h1>Menu principal</h1>
      <div className="v-container v-locale--is-ltr">
        <div className="v-row">
          
          <MenuButton titulo="Perfil Personal" imagen={images.perfil} />
          <MenuButton titulo="Registro de Programas" imagen={images.registro} />
          <MenuButton titulo="Docentes" imagen={images.docentes} />
        </div>

        <div className="v-row">
          <MenuButton titulo="Postulantes" imagen={images.postulantes} />
          <MenuButton titulo="Programas" imagen={images.programas} />
          <MenuButton titulo="Certificaciones Docentes" imagen={images.certificaciones} />
        </div>
      </div>

      <footer className="v-footer v-theme--light custom-footer"
        style={{ bottom: "0px", zIndex: 1004, transform: "translateY(0%)", position: "fixed", left: "0px", width: "calc(100% + 0px)" }}>
        <div className="v-container v-container--fluid v-locale--is-ltr">
          <div className="v-row">
            <div className="v-col-md-6 v-col-12 text-center text-md-left">
              <div className="v-spacer"></div>
              {/* Botones de redes sociales */}
              <a className="v-btn v-btn--elevated v-btn--icon v-theme--light bg-white v-btn--density-default v-btn--size-default v-btn--variant-elevated" href="https://www.facebook.com/esamcochabambasucursal">
                <span className="v-btn__overlay"></span>
                <span className="v-btn__underlay"></span>
                <span className="v-btn__content" data-no-activator>
                  <i className="mdi-facebook mdi v-icon notranslate v-theme--light v-icon--size-default" aria-hidden="true"></i>
                </span>
              </a>
              <a className="v-btn v-btn--elevated v-btn--icon v-theme--light bg-white v-btn--density-default v-btn--size-default v-btn--variant-elevated" href="https://www.linkedin.com/company/esam-cochabamba/">
                <span className="v-btn__overlay"></span>
                <span className="v-btn__underlay"></span>
                <span className="v-btn__content" data-no-activator>
                  <i className="mdi-linkedin mdi v-icon notranslate v-theme--light v-icon--size-default" aria-hidden="true"></i>
                </span>
              </a>
            </div>

            <div className="v-col-md-6 v-col-12 text-center text-md-right">
              <span>© 2024 ESAM COCHABAMBA SUCURSAL</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
