const responsive = {
  '@media (max-width: 700px)': {
    '.sidebar': {
      py: '30px',
      justifyContent: 'center',
      alignItems: 'center',
      w: '44px',
    },
    '.section': {
      w: 'calc(100% - 44px)',
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
  '@media (max-width: 679px)': {
    '.login-card': {
      w: '90%',
    },
    '.sidebar li': {
      height: 'auto',
      p: '10px',
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
  '@media (max-width: 556px)': {
    '.navbar .clock': {
      pos: 'relative',
      top: 0,
    },
  },
  '@media (max-width: 480px)': {
    '.sidebar': {
      w: '40px',
    },
    '.section': {
      w: 'calc(100% - 40px)',
    },
    '.sidebar li': {
      p: '7px',
    },
  },
}

export default responsive
