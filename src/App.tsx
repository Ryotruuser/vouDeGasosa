import './App.css'

import logoImg from '/logo.png'

function App() {
  return (
    <div>
      <main className='container'>
        <img 
        className='logo'
          src={logoImg} 
          alt="Logo da calculadora da gasolina ou alcool" />

        <h1 className='title'>Qual melhor opção?</h1>

        <form className="form">
          <label>Álcool (Preço por litro):</label>
          <input 
            className='input'
            type="number" 
            placeholder='4,90'
            min="1"
            step="0.01"
            required
            />

          <label>Gasolina (Preço por litro):</label>
          <input 
            className='input'
            type="number" 
            placeholder='4,90'
            min="1"
            step="0.01"
            required
            />

            <input type="submit" value="Calcular" className='btn' />
        </form>

      </main>
      
    </div>
  )
}

export default App
