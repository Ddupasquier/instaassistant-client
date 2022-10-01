import { styled } from '@nextui-org/react';
import { FiTrash2, FiEye } from 'react-icons/fi';

export const Tr = styled('tr', {
  background: '$solid',
  borderRadius: '10px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  },
});

export const Eye = styled(FiEye, {
  color: '$font',
  fontSize: '1.5rem',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    color: '$primary',
  },
});

export const Trash = styled(FiTrash2, {
  color: '$font',
  fontSize: '1.5rem',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    color: '$error',
  },
});

export const Username = styled('a', {
  color: '$font',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  textDecoration: 'none',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    color: '$primary',
  },
});
