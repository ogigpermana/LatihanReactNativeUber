import React, { Component } from 'react'
import { Container, TypeTitle, TypeDescription, TypeImage, RequestButton, RequestButtonText } from './styles'
import DetailImage from '../../assets/uberx.png'
export default class index extends Component {


    render() {
        return <Container>
            <TypeTitle>Tempat Popular</TypeTitle>
            <TypeDescription>Tempat popular untuk anak-anak muda nongkrong</TypeDescription>
            <TypeImage source={DetailImage} />
            <TypeTitle>Bpk. Udin</TypeTitle>
            <TypeDescription>Rp. 1500,-</TypeDescription>
            <RequestButton onPress={() => { }}>
                <RequestButtonText>
                    Pesan sekarang
                </RequestButtonText>
            </RequestButton>
        </Container>;
    }
}
