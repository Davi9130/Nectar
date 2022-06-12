import React from 'react';

export interface ButtonTypes {
  isLoading?: boolean;
  text: string;
  onPress: () => void;
  marginBottom?: number;
  backgroundColor?: string;
  icon?: React.ReactNode;
}
