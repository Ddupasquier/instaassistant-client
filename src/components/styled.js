import { styled } from '@nextui-org/react';
import { FiTrash2, FiEye } from 'react-icons/fi';
import { BiTask } from 'react-icons/bi';

export const Tr = styled('tr', {
  background: '$solid',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    filter: 'brightness(95%)',
    transform: 'translateY(-4px)',
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

export const Task = styled(BiTask, {
  color: '$font',
  fontSize: '1.5rem',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    color: '$primary',
  },
});

export const TaskCell = styled('a', {
  color: '$font',
  fontSize: '1rem',
  fontWeight: '700',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    color: '$primary',
  },
});

export const Username = styled('span', {
  color: '$font',
  fontSize: '1rem',
  fontWeight: 'bold',
  textDecoration: 'none',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    color: '$primary',
  },
});

export const Select = styled('select', {
  background: 'none',
  outline: '2px solid #b6b6b67c',
  border: 'none',
  color: '$font',
  padding: '0.5rem',
  borderRadius: '0.8rem',
  fontSize: '1rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    outline: '2px solid #6200ff',
  },
  '&:focus': {
    outline: '2px solid #6200ff',
  },
});

export const ColButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  width: '100%',
  background: 'none',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  fontWeight: 'bold',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    color: '$font',
  },
});

export const BackNext = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'none',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  fontWeight: 'bold',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    color: '$font',
    transform: 'translateY(-4px) scale(1.1)',
  },
});

export const PageButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$font',
  borderRadius: '50%',
  background: 'none',
  border: 'none',
  width: '1.7rem',
  height: '1.7rem',
  outline: 'none',
  cursor: 'pointer',
  fontWeight: 'bold',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    color: '$font',
    transform: 'translateY(-4px) scale(1.1)',
  },
});
