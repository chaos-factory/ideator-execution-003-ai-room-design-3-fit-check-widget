'use client';

import React, { useState } from 'react';
import styles from './Accordion.module.css';

export interface AccordionItemProps {
  id: string;
  question: string;
  answer: string;
}

export interface AccordionProps {
  items: AccordionItemProps[];
  onItemOpen?: (id: string) => void;
}

export const Accordion: React.FC<AccordionProps> = ({ items, onItemOpen }) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
      onItemOpen?.(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className={styles.accordion}>
      {items.map((item) => {
        const isOpen = openItems.has(item.id);
        return (
          <div key={item.id} className={styles.item}>
            <button
              className={styles.question}
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              aria-controls={`answer-${item.id}`}
            >
              <span>{item.question}</span>
              <svg
                className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div
              id={`answer-${item.id}`}
              className={`${styles.answer} ${isOpen ? styles.answerOpen : ''}`}
              aria-hidden={!isOpen}
            >
              <div className={styles.answerContent}>
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
