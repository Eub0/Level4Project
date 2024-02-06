import router from 'next/router';
import { Signup } from '@/components/login/Signup';
import { BackgroundImage } from '@mantine/core';

export const Login = () => {

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
          <Signup/>
      </BackgroundImage>
    </>
  );
}

export default Login;
