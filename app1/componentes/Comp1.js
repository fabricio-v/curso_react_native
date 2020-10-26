import React from 'react';
import { Text } from 'react-native';
import Estilos from '../estilos/Estilos.js'

let nome;

export default function (props) {
    nome = props.nome;
    return (
        <Text style={Estilos.textoCursos}>nome: {nome}</Text>
    );
}
