'use client';

import React, { useEffect, useCallback, useRef } from 'react';
import styles from './Modal.module.css';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      // Store current focus
      previousFocusRef.current = document.activeElement as HTMLElement;
      
      // Lock body scroll
      document.body.style.overflow = 'hidden';
      
      // Add escape key listener
      document.addEventListener('keydown', handleEscape);
      
      // Focus modal
      modalRef.current?.focus();
      
      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleEscape);
        
        // Restore previous focus
        previousFocusRef.current?.focus();
      };
    }
  }, [isOpen, handleEscape]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={handleOverlayClick} aria-modal="true" role="dialog">
      <div
        ref={modalRef}
        className={styles.modal}
        tabIndex={-1}
        aria-labelledby={title ? "modal-title" : undefined}
      >
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        {title && <h2 id="modal-title" className={styles.title}>{title}</h2>}
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
};
