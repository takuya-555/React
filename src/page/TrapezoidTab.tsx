import Tab from '@mui/material/Tab';
import { styled } from '@mui/system';

const TrapezoidTab = styled(Tab)(({ theme }) => ({
  position: 'relative',
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  backgroundColor: 'transparent',
  zIndex: 0,

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    transform: 'skewX(-20deg)',
    transformOrigin: 'top left',
    background: theme.palette.primary.main || '',
    zIndex: -1,
  },

  '& .MuiTab-label': {
    position: 'relative',
    zIndex: 1,
    color: theme.palette.text.primary || '',
  },

  '&:hover::before': {
    background: theme.palette.primary.dark || '',
  },

  '&:hover .MuiTab-label': {
    color: theme.palette.primary.contrastText || '',
  },
}));

export default TrapezoidTab;
