'use client';
import { useParams, useRouter } from 'next/navigation';

export default function InProgressPage() {
  const { id } = useParams();

  return (
    <h1
      style={{
        fontSize: '26px',
        fontFamily: 'var(--font-poppins)',
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
      }}
    >
      Page {id.toString().charAt(0).toUpperCase() + id.toString().substring(1)}{' '}
      in progress
    </h1>
  );
}
