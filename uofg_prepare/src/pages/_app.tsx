import { Layout } from '@/components/layout/Layout';
import { AuthProvider } from '@/contexts/AuthContext';
import '@/styles/globals.css'
import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'
import { GuestProvider } from '@/hooks/guestProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GuestProvider>
      <MantineProvider>
        <AuthProvider>
          <Layout>
            <Component {...pageProps}/>
          </Layout>
        </AuthProvider>
      </MantineProvider>
    </GuestProvider>
  );
}
