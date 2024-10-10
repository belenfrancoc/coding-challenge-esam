import React from 'react';
import '../styles/app.1af6b734.css'; 
import '../styles/chunk-vendors.2e51402a.css'; 


const MenuButton = ({ titulo, imagen }) => (
  <div className="v-col">
    <button
      type="button"
      className="v-btn v-btn--elevated v-theme--light v-btn--density-default v-btn--variant-elevated button-style"
      style={{ height: '300px', width: '300px' }}
    >
      <span className="v-btn__overlay"></span>
      <span className="v-btn__underlay"></span>
      <span className="v-btn__content" data-no-activator>
        
        <img
          src={imagen}
          alt={titulo}
          style={{ height: '200px', width: '200px' }} 
        />
        
        <h3 className="text-position">{titulo}</h3>
      </span>
    </button>
  </div>
);

export default MenuButton;