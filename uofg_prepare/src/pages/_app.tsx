import { Layout } from '@/components/layout/Layout';
import { Signup } from '@/components/login/Signup';
import { AuthProvider } from '@/contexts/AuthContext';
import '@/styles/globals.css'
import { MantineProvider, useMantineColorScheme } from '@mantine/core'
import type { AppProps } from 'next/app'
import Homepage from './homepage';
import { Signin } from '@/components/login/Signin';

export default function App({ Component, pageProps }: AppProps) {
  return (
      <MantineProvider>
        <AuthProvider>
          <Layout>
            <Component {...pageProps}/>
          </Layout>
        </AuthProvider>
      </MantineProvider>
  );
}
