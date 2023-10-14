import { GroupTitles } from '~/components/GroupTitles/GroupTitles';
import { ContactUsInfo } from '~/components/ContactUsInfo/ContactUsInfo';

export default function Contact() {
  return (
    <>
      <GroupTitles
        title="Contact Us"
        subtitle="Any question or remarks? Just write us a message!"
      />
      <ContactUsInfo />
    </>
  );
}
