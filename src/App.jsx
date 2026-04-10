import { useState } from 'react'
import './App.css'
import './assets/LogoDasa.png'



function App() {

  // const [count, setCount, setPage, page] = useState(0);
  const [page, setPage] = useState("home");

  return (
    <main>
      <h1 img src="assets/LogoDasa.png">Dasa</h1>
      <p> Página atual: {page}</p>

      <button onClick={
        function () {
          setPage("medicos");
        }
      }>Medicos</button>

      <button onClick={
        function () {
          setPage("pacientes");
        }
      }>Pacientes</button>


      <div id="medicos" className={page==="medicos" ? "show" : "hide"}>
        <h2>Medicos</h2>
        <div className="card-container">
          <div className="card">
            <img src="https://bkt-sa-east-1-cms-2-assets-prd.s3.sa-east-1.amazonaws.com/dasa/wp-content/uploads/2024/08/21142421/240728_Dasa_3549.jpg" alt="" width={300} />
            <h2>IEPD</h2>
          </div>
          <div className="card">
            <img src="https://bkt-sa-east-1-cms-2-assets-prd.s3.sa-east-1.amazonaws.com/dasa/wp-content/uploads/2024/08/21142411/240728_Dasa_0108.jpg" alt="" width={300} />
            <h2>NAM</h2>
          </div>
          <div className="card">
            <img src="https://bkt-sa-east-1-cms-2-assets-prd.s3.sa-east-1.amazonaws.com/dasa/wp-content/uploads/2024/08/21142424/240728_Dasa_4647.jpg" alt="" width={300} />
            <h2>Pesquisas Clinicas</h2>
          </div>
        </div>
      </div>
      <div id="pacientes" className={page==="pacientes" ? "show" : "hide"}>
        <h2>Pacientes</h2>
        <div className="card-container">
          <div className="card">
            <img src="https://bkt-sa-east-1-cms-2-assets-prd.s3.sa-east-1.amazonaws.com/dasa/wp-content/uploads/2024/08/21142421/240728_Dasa_3549.jpg" alt="" width={300} />
            <h2>Medicina Diagnostica</h2>
          </div>
          <div className="card">
            <img src="https://bkt-sa-east-1-cms-2-assets-prd.s3.sa-east-1.amazonaws.com/dasa/wp-content/uploads/2024/08/21142409/240728_Dasa_-150.jpg" alt="" width={300} />
            <h2>Dasa Educa</h2>
          </div>

          <div className="card">
            <img src="https://bkt-sa-east-1-cms-2-assets-prd.s3.sa-east-1.amazonaws.com/dasa/wp-content/uploads/2024/08/21142427/240728_Dasa_5559.jpg" alt="" width={300} />
            <h2>Vacinas</h2>
          </div>
        </div>
      </div>
    </main>

  )
}

export default App
