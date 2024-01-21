import { useState } from 'react';

import styles from './TextInput.module.scss';

interface TextInputProps {
  action(value: string): void;
}

export default function TextInput({ action }: TextInputProps) {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      action(value);
      setValue('');
    }
  };

  return (
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
  );
}
