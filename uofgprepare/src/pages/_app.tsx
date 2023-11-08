import { Layout } from '@/components/layout/Layout';
import { MantineProviders } from '@/providers/MantineProvider';
import { ExtendedAppProps } from '@/types/Next';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: ExtendedAppProps) {
	const { isReady: routerIsReady } = useRouter();
	return (
				<MantineProviders>
							<Layout>
									{routerIsReady && <Component {...pageProps} />}
							</Layout>
				</MantineProviders>
	);
}