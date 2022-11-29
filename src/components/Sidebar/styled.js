import { styled } from '@nextui-org/react';

export const SideBar = styled('div', {
  backgroundColor: '$menu',
  width: '20rem',
  zIndex: '100',
  position: 'relative',
  padding: '0',
  margin: '0',
  color: '$text',
});

export const Detail = styled('details', {
  backgroundColor: 'transparent',
});

export const Li = styled('li', {
  margin: '0',
  padding: '0.5rem 0',
  listStyle: 'none',
  width: '100%',
  color: '$text',
  fontSize: '1rem',
  fontWeight: '700',
  cursor: 'pointer',
  transition: 'all .5s',
  '&:hover': {
    backgroundColor: '$hover',
  },
});

export const LowerMenu = styled('div', {
  position: 'absolute',
  bottom: '0',
  width: '100%',
  padding: '1rem 0',
  background: '$myColor',
});

export const Icon = styled('div', {
  position: 'relative',
  top: '2px',
  float: 'left',
  width: '2rem',
});
