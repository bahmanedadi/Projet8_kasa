import React, { useState } from 'react';
import './Collapse.scss';

export default function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const openCloseCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Collapse">
      <div onClick={openCloseCollapse} className={`Collapse-title ${isOpen ? 'open' : ''}`}>
        {title}
      </div>
      <div className={`Collapse-content ${isOpen ? '' : 'hidden'}`}>{content}</div>
    </div>
  );
}
