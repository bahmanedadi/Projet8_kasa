import React, { useState } from 'react';


export default function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const openCloseCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div onClick={openCloseCollapse} className={`collapse_title ${isOpen ? 'open' : ''}`}>
        {title}
      </div>
      <div className={`collapse_content ${isOpen ? '' : 'hidden'}`}>{content}</div>
    </div>
  );
}
