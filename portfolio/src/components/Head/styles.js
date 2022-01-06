import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#3c2669',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  cardAvatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#574675',
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
  },
  nome: {
    fontSize: 12,
    color: '#C3C4C6',
  },
});

export default styles;
