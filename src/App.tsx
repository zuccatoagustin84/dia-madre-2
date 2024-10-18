import React from 'react';
import { Heart, Gift } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 to-purple-300 flex items-center justify-center p-4 font-montserrat">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
        <Heart className="text-red-500 w-16 h-16 mx-auto mb-4 animate-pulse" />
        <h1 className="text-4xl font-bold text-pink-600 mb-4 font-dancing-script">Feliz Día de la Madre</h1>
        <p className="text-xl text-gray-700 mb-6 font-lora italic">
          A la mujer más maravillosa del mundo, nuestra querida esposa y mamá.
        </p>
        <p className="text-lg text-gray-600 mb-4 font-lora">
          Gracias por ser una madre increíble y llenar nuestras vidas de amor y alegría.
        </p>      
        <p className="text-2xl font-semibold text-pink-500 font-dancing-script mt-6">
          Te amamos con todo nuestro corazón.
        </p>
        <div className="mt-6 text-sm text-gray-500">
          Con todo nuestro amor,
        </div>
        <div className="mt-2 text-lg font-semibold text-pink-600 font-dancing-script">
          Agustin y Victoria
        </div>
        
        <div className="mt-10 pt-6 border-t border-pink-200">
          <Gift className="text-purple-500 w-12 h-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-purple-600 mb-4 font-dancing-script">¡Arranca el juego de buscar el regalo!</h2>
          <p className="text-lg text-gray-700 mb-4 font-lora">Acá va la primera pista:</p>
          <blockquote className="italic text-lg text-purple-700 border-l-4 border-purple-500 pl-4 py-2 mb-4">
            "Entre cuerdas y melodías, se esconde un amor que sonreía.<br/>
            Busca donde la música vibra con el alma, y encontrarás la pista que calma."
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default App;