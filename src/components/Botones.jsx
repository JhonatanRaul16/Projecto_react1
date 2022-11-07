import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaAdn,FaAdversal } from "react-icons/fa";
const Botones = () => {
  return (
    <div className="botones d-flex flex-wrap justify-content-center align-items-center gap-3">
        <button>Primer button <FaAdn className='icon'/></button>
        <button>Primer button <FaAdversal className='icon'/></button>
        <button>Primer button <FaAdversal className='icon'/></button>
        <button>Primer button <FaAdversal className='icon'/></button>
    </div>
  )
}

export default Botones