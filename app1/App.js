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

function fExibir(vp1) {
    if (vp1) {
        return (<Text>Curso de React Native</Text>)
    } else {
        return (<Text>- - - - - -</Text>)
    }
}

export default function App1() {
    let vExibir = true;
    return (
        <View style={Estilos.container}>
            <Caixas exibir={vExibir} />
            {fExibir(false)}
            {vExibir ? <Text>Curso de React Native</Text> : <Text>- - - - - -</Text>}
            {vExibir && <Text>Curso de React Native</Text>}
        </View>
    );
};
