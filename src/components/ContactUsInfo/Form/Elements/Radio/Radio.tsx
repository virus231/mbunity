import { ChangeEvent, ComponentPropsWithoutRef, FC, useState } from 'react';
import styles from './Radio.module.scss';

interface RadioProps extends ComponentPropsWithoutRef<'input'> {
  caption?: string;
  name: string;
  subjects: { id: string; label: string; value: string }[];
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const RadioGroup: FC<RadioProps> = ({
  caption,
  subjects,
  name,
  onChange,
  ...otherProps
}) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    onChange(event);
  };

  return (
    <div className={styles.field}>
      {caption && <span className={styles.caption}>{caption}</span>}
      <div className={styles.group}>
        {subjects.map(({ id, label, value }) => (
          <div key={id} className={styles.radio}>
            <label>
              <input
                {...otherProps}
                type="radio"
                className={styles.radioInput}
                name={name}
                value={value}
                checked={selectedOption === value}
                onChange={handleOptionChange}
              />
              <span className={styles.indicator} />
              <span className={styles.label}>{label}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
