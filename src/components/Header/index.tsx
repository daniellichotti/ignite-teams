import logoImg from "@assets/logo.png";
import { useNavigation } from "@react-navigation/native";
import { BackButton, BackIcon, Container, Logo } from "./styles";


type Props = {
  showBackButton?: boolean;
}

export function Header({ showBackButton= false }: Props){
  const navigation = useNavigation()

  function handleGoBack(){
    navigation.navigate('groups');
  }

  return(
    <Container>
      {
        showBackButton && (
          <BackButton onPress={handleGoBack}>
            <BackIcon color="#FFF" size={32}/>
          </BackButton>
        )
      }
      <Logo source={logoImg} />
    </Container>
  );
}