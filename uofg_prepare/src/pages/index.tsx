import router from 'next/router';
import { AuthenticationTitle } from '@/components/login/Signup';
import { BackgroundImage } from '@mantine/core';

export const Login = () => {

  const navigateToHomepage = () => {
    router.push('/homepage');
  };

  return (
    <>
      <BackgroundImage
					src="@/images/homepage/welcome.jpeg"
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: '100vw',
						minHeight: '100vh',
					}}
			>
          <AuthenticationTitle/>
      </BackgroundImage>
    </>
  );
}

export default Login;
