import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

import queryClient from './constants/query-client';
import LanguageProvider from './providers/LanguageProvider';
import Home from './views/Home';

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <Home />
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;