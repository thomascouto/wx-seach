import { useState } from 'react';

import styles from './TextInput.module.scss';

interface TextInputProps {
  action(value: string): void;
  children: React.ReactNode;
}

export default function TextInput({ action, children }: TextInputProps) {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      action(value);
      setValue('');
    }
  };

  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.textInput}
        placeholder="Search for a location..."
        type="text"
        value={value}
        onKeyDown={handleSubmit}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      {children}
    </div>
  );
}
