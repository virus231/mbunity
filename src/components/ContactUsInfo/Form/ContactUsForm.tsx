'use client';
import { ChangeEvent, useState } from 'react';
import { Input } from '~/components/ContactUsInfo/Form/Elements/Input/Input';
import styles from './ContactUsForm.module.scss';
import { RadioGroup } from '~/components/ContactUsInfo/Form/Elements/Radio/Radio';
import { SUBJECT_OPTIONS } from '~/config/form';

export interface IContact {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const ContactUsForm = () => {
  const [formData, setFormData] = useState<IContact>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className={styles.form}>
      <div className={styles.form__fields}>
        <Input
          id="firstName"
          label="First Name"
          type="text"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <Input
          id="lastName"
          label="Last Name"
          type="text"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        <Input
          id="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <Input
          id="phone"
          label="Phone Number"
          type="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
      </div>

      <div className={styles.subject}>
        <RadioGroup
          caption="Select Subject?"
          name="subject"
          onChange={handleInputChange}
          subjects={SUBJECT_OPTIONS}
        />
      </div>
      <div>
        <Input
          id="message"
          label="Message"
          placeholder="Write your message.."
          value={formData.message}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.btn}>
        <button type="submit" className="button">
          Send Message
        </button>
      </div>
    </div>
  );
};
