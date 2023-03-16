const responsive = {
  '@media (max-width: 700px)': {
    '.sidebar': {
      py: 7.5,
      justifyContent: 'center',
      alignItems: 'center',
      w: 'auto',
    },
    '.sidebar a': { display: 'none' },
    '.sidebar li': {
      w: 'auto',
      p: '0 10px 0 10px',
      ml: 'initial',
    },
    '.sidebar li img': {
      mr: 'initial',
      pos: 'relative',
      zIndex: 4,
    },
    '.sidebar span': { display: 'none' },
    '.settingLogout': { mt: 'auto', ml: 'initial !important' },
    '.sidebar-box': { mx: 'auto !important' },
  },
  '@media (max-width: 700px) and (min-width: 557px)': {
    '.sidebar': { ml: 1 },
  },
  '@media (max-width: 679px)': {
    '.login-card': {
      w: '90%',
    },
  },
  '@media (max-width: 575px)': {
    '.login-card': {
      w: 'full',
      borderRadius: 0,
      boxShadow: 'none',
      p: '0 10px',
    },
    '.login-box': {
      h: '100vh',
    },
  },
}

export default responsive
