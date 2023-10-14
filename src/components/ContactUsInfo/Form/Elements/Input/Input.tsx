import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  FC,
  InputHTMLAttributes,
  useState,
} from 'react';
import styles from './Input.module.scss';
import { IContact } from '~/components/ContactUsInfo/Form/ContactUsForm';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  id: keyof IContact;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label: string;
}

export const Input: FC<InputProps> = ({
  label,
  id,
  value,
  placeholder = '',
  onChange,
  ...otherProps
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={`${styles.field} ${isFocused ? styles.focused : ''}`}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <div className={styles.element}>
        <input
          className={styles.input}
          placeholder={placeholder}
          name={id}
          value={value}
          id={id}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...otherProps}
        />
      </div>
    </div>
  );
};
