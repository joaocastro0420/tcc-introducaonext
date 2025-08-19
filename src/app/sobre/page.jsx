'use client';

import Botao from "@/componentes/botao";

import { useState } from "react";

export default function Sobre() {
    const [numero, setNumero] = useState(0);
    return(
        <div className="container">
            <h1>Sobre</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quia incidunt perferendis accusamus 
                non porro dignissimos. Consectetur unde incidunt officiis similique accusantium cumque?
                 Officiis, facere atque corporis voluptas provident quia.</p>
                 <br />

                <label>{numero}</label>
                 <button 
                 type="button"
                 onClick={() => setNumero(numero +1)}
                 >Contar</button>

                 <Botao label={'Mais um'} acao={() => setNumero(numero +1)} />
                 <Botao label={'Alerta'} acao={() => alert('Erro!')} />
        </div>
    );
}