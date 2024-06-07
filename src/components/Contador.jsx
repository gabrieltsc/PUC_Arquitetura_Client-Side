/*import { useState } from "react";

export function Contador() {
    const [contagem, setContagem] = useState(0);
    function handleClick() {
        //setContagem(contagem + 1);
        setContagem(contagemAtual => contagemAtual + 1);
    }

    return (
        <>
            <button onClick={handleClick}>Clicar</button>
            <span>Contagem {contagem}</span>
        </>
    )
}*/

import { useReducer } from "react";

function reducer(estado, acao) {
    switch (acao.type) {
        case 'incremento': {
            return {contagem: estado.contagem + acao.valor};
        }
        case 'decremento': {
            return {contagem: estado.contagem - 1};
        }
        default: {
            throw new Error(`Tipo de ação desconhecida: ${acao.type}`);
        }
    }
}

export function Contador() {
    const estadoInicial = {contagem: 0};
    const [estado, dispatch] = useReducer(reducer, estadoInicial);

    const handleClickMais = () => {
        dispatch({type:'incremento', valor:2});
    };

    const handleClickMenos = () => {
        dispatch({type:'decremento'});
    };

    return (
        <>
            <button onClick={handleClickMais}>+</button>
            <button onClick={handleClickMenos}>-</button>
            <span>Contagem {estado.contagem}</span>
        </>
    )
}