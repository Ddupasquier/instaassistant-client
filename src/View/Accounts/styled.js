import { styled } from '@nextui-org/react';
import { FiTrash2, FiEye } from 'react-icons/fi';

export const Tr = styled('tr', {
  background: '$solid',
  borderRadius: '10px',
  transition: 'all 0.2s ease-in-out',
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
  fontSize: '1rem',
  fontWeight: 'bold',
  textDecoration: 'none',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    color: '$primary',
  },
});
