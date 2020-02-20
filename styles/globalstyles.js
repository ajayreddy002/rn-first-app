import {
    StyleSheet
} from 'react-native';
export default StyleSheet.create({
    blueBtn: {
        color: '#fff',
        paddingTop: 15,
        paddingBottom: 15,
        // paddingLeft: 40,
        // paddingRight: 40,
        textAlign:'center',
        width: 256,
        backgroundColor: '#007ab6',
        borderRadius: 8,
        fontSize: 14,
        lineHeight: 18,
        fontWeight: '200',
    },
    whiteBg: {
        backgroundColor: '#fff',
        marginTop: 20,
        shadowColor: 'rgba(0, 0, 0, 0.4)',
        shadowOffset: { width: 6, height: 16 },
        shadowOpacity: 0.4,
        shadowRadius: 24,
        paddingTop: 15,
        paddingBottom: 15,
        width: 256,
        textAlign:'center',
        borderRadius: 8,
        fontSize: 14,
        lineHeight: 18,
        fontWeight: '200',
    },
    header:{
        fontSize: 24,
        color: '#0094FF',
        lineHeight: 20,
        marginBottom: 45,
        fontWeight: '700',
        paddingTop: 20
    },
    logoImg:{
        width: '100%',
        height:'100%',
        flex: 1,
        resizeMode: 'cover'
    },
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        flex: 1
    },
    IconName: {
        position: 'absolute',
        top: 50,
        left: 0,
        right: 0,
        zIndex: 99,
        textAlign: 'left',
    }
})