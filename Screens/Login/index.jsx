import { SafeAreaView, Text, View, Image, TextInput, KeyboardAvoidingView } from 'react-native';
import styles from './style'
import { useState } from 'react';
import { Input } from '../../Components/Input/indext';
import { Link } from '../../Components/Link';
import { Button } from '../../Components/Button'
import { useHeaderHeight } from '@react-navigation/elements'

const Login = ({ navigation }) => {
  const URL_IMAGE_BACKGROUND = '../../public/images/BackgroundImageLogin.jpg'

  const [user, setUser] = useState({
    email: '',
    password: ''
  })


  const handleLogin = () => {
    // Lógica de login aqui
  };

  const handleForgotPassword = () => {
    // Lógica de recuperação de senha aqui
  };

  const height = useHeaderHeight()
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={height + 100}
      behavior="padding"
      style={{ flex: 1 }}
      enabled>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require(URL_IMAGE_BACKGROUND)} />
      </View>
      <View style={styles.sectionForm}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Ola de Novo
          </Text>
          <Text style={styles.text}>
            Vamos juntos rumo a uma vida mais saudável e cheia de energia!
          </Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Input value={user.email} placeholder='a@a.com' setValue={text => setUser({ ...user, email: text })} label='Email' />
            <Input value={user.password} placeholder='****' setValue={text => setUser({ ...user, password: text })} label='Senha' secureTextEntry={true} />
            <Link title='Esqueci a senha' url='Login' onpress={() => navigation.navigate('Login')} />
          </View>
          <View style={styles.buttonsContainer}>
            <Button title='Entrar' onPress={() => navigation.navigate('Home usuario')} isSecondary={false} />
            <Button title='Criar Conta' isSecondary={true} />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export { Login }
