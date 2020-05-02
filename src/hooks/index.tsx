import React from 'react';

import { AuthProvider } from './auth';
import { TotastProvider } from './toast';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <TotastProvider>{children}</TotastProvider>
  </AuthProvider>
);

export default AppProvider;
