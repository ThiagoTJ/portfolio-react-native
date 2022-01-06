import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 6,
    justifyContent: 'space-around',
    backgroundColor: '#3c2669',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  content: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'justify',
    marginBottom: 4
  },
  subtitle:{
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: -10,
  }
});

export default styles;
