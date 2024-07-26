import React, { useRef } from 'react';
import './BtnUpload.css'

const BtnUpload = () => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const files = event.target.files;

    if (files.length > 1) {
      alert('Por favor, selecione apenas um arquivo.');
      return;
    }

    const file = files[0]; 

    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      console.log(process.env.REACT_APP_SERVER_PORT)

      try {
        const response = await fetch(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/api/upload`, {
          method: 'POST',
          body: formData,
        });

        const result = await response.json(); 

        if (!response.ok) {
          // Se a resposta não for ok, lance um erro com a mensagem retornada pelo backend
          throw new Error(result.message || 'Erro desconhecido');
        }

        
        console.log(result);

        fileInputRef.current.value = null;
      } catch (error) {
        console.error('Erro ao enviar arquivo:', error);
      }
    }
  };

  return (
    <div>
      <button className='btn-red' onClick={handleButtonClick}>Carregar Arquivo</button>
      
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
        accept=".txt"
      />
    </div>
  );
};

export default BtnUpload;
