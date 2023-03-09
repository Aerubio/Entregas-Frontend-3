  import React from 'react';

  function Card({ username, postre }) {
    return (
      <div>
        <h2>Gracias por contestar:</h2>
        <p>Hola: {username}</p>
        <p>Ahora sabemos que tu postre favorito es: {postre}</p>
      </div>
    );
  }

  export default Card;