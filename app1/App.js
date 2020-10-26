import React from 'react';
import { View, Text } from 'react-native';
import Caixas from './componentes/Caixas.js'
import Estilos from './estilos/Estilos.js'


// export default class App1 extends Component {
//     render() {
//         return (
//             <View>
//                 <Text>Olá, mundo!</Text>
//             </View>
//         );
//     }
// }

export default function App1() {
    return (
        <View style={Estilos.container}>
            <Caixas />
        </View>
    );
};
