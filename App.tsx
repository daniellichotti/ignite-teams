import { Loading } from '@components/Loading';
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { NewGroup } from '@screens/NewGroup';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme/index';

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold}) //verifica se a fonte foi carregada

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='light-content' //aqui ocorre a estilizacao da status bar
        backgroundColor='transparent'
        translucent
      />
      { fontsLoaded? <NewGroup/> :  <Loading /> } 
    </ThemeProvider>
  );
}