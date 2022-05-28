import type { AppProps } from 'next/app';

import '../styles/global.scss';
import { appWithTranslation } from 'next-i18next';
import { QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { queryClient } from '@/utils/queryClient';

import store, { persistor } from '../store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-proxima-nova/style.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

export default appWithTranslation(MyApp);
