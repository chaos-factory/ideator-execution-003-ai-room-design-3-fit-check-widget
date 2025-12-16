import React from 'react';
import styles from './Chip.module.css';

export interface ChipProps {
  variant: 'pass' | 'warn' | 'fail';
  children: React.ReactNode;
  className?: string;
}

export const Chip: React.FC<ChipProps> = ({ variant, children, className = '' }) => {
  return (
    <span className={`${styles.chip} ${styles[variant]} ${className}`}>
      {children}
    </span>
  );
};
