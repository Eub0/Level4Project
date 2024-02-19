import router from 'next/router';
import { Signin } from '@/components/login/Signin';
import { BackgroundImage } from '@mantine/core';

export const Login = () => {

  const navigateToHomepage = () => {
    router.push('/homepage');
  };

  return (
    <>
      <BackgroundImage
					src="/images/uofgcloisters.jpg"
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: '100vw',
						minHeight: '100vh',
					}}
			>
          <Signin/>
      </BackgroundImage>
    </>
  );
}

export default Login;
