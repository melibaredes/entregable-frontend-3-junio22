import React from 'react'
import Cabecera from './components/Cabecera'
import Listado from './components/Listado'
// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

function App() {
  const [elementosCarrito, setElementosCarrito] = React.useState(0)

  function actualizarCarrito(){
    console.log("Actualizando elementosCarrito")
    setElementosCarrito(elementosCarrito + 1)
  }

  return (
    <div className="App">
      <Cabecera cantCarrito={elementosCarrito}/>
      <Listado funcionCarrito={actualizarCarrito}/>
    </div>
  );
}

export default App;
