import React from 'react';
import { View } from 'react-native';

export default function () {
    return (
        <View style={{ width: '100%', height: 300, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ width: 50, height: 50, backgroundColor: '#00f' }}></View>
            <View style={{ width: 50, height: 50, backgroundColor: '#003' }}></View>
            <View style={{ width: 50, height: 50, backgroundColor: '#006' }}></View>
        </View>
    )
}
