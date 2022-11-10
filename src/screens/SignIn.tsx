import { Center, Text, Icon } from 'native-base';
import Fontisto from '@expo/vector-icons/Fontisto';

import Logo from '../assets/logo.svg';
import { Button } from '../components/Button';

export function SignIn() {
	return (
		<Center flex={1} bg='gray.900' p={7}>
			<Logo width={214} height={40} />
			<Button
				title='ENTRAR COM O GOOGLE'
				type='SECUNDARY'
				leftIcon={
					<Icon as={Fontisto} name='google' color={'white'} size='md' />
				}
				mt={12}
			/>
			<Text color='white' textAlign='center' mt={4}>
				Não utilizamos nenhuma informação além {'\n'} do seu e-mail para criação
				de sua conta.
			</Text>
		</Center>
	);
}
