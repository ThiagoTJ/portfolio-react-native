import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3c2669',
        borderRadius: 8,
        padding: 10
    },
    title:{
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
    content:{
        color: '#FFF',
        fontSize: 16,
    },
    rdsoc:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    rdsocCardIcon:{
        width: 40,
        alignItems: 'center',
        marginBottom: 4
    },
    rdsocTextButton:{
        color: '#FFF',
        fontSize: 12,
    }
});

export default styles;