import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: 'rgb(50,50,50)',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 50,
    },
    iconeHome: {
        resizeMode: 'contain',
        width: 100,
        height: 100,
    },
    bmv: {
        textAlign: 'center',
        color: 'rgb(0,100,255)',
        padding: 35,
    },
    btnHome: {
        backgroundColor: 'rgb(0,0,255)',
        width: "80%",
        height: 50,
        borderRadius: 20,
        borderColor: "rgb(255,255,255)",
        borderWidth: 1,
    },
    textoBtnHome: {
        color: 'rgb(255,255,255)',
        fontSize: 25,
        margin: "auto",
    },
});

export default style;