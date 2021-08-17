import React from 'react';

import { AuthProvider } from './types';

const AppProvider: React.FC = ({ children }) => {
  return (
      <AuthProvider>
        {children}
      </AuthProvider>
  );
};

export default AppProvider;