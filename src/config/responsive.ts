const responsive = {
  '@media (max-width: 1088px)': {
    '.inputButton': {
      flexWrap: 'wrap',
      '.dropdown': {
        left: 'initial !important',
        right: '0',
      },
    },
    '.inputSearch': {
      width: '100% !important',
    },
    '.section .fillSearch': { flexDirection: 'column' },
    '.section .fillSearch .chatSearchProducts': {
      width: '100%',
      maxWidth: 'initial',
      marginTop: '-1.5625rem',
    },
    '.section .fillSearch .searchProducts': {
      width: '100% !important',
      marginTop: '49.4375rem',
    },
    '.section .fillSearch .chatSearchProducts .positionVertical': {
      width: '100%',
      marginTop: '1.8125rem',
    },
  },
  '@media (max-width: 963px)': {
    '.inputButton': {
      flexWrap: 'wrap',
      button: {
        width: '40% !important',
      },
    },
  },
  '@media (max-width: 785px)': {
    '.inputButton': {
      button: {
        width: '50% !important',
      },
    },
  },
  '@media (max-width: 700px)': {
    '.sidebar': {
      py: '1.875rem',
      justifyContent: 'center',
      alignItems: 'center',
      w: '2.75rem',
    },
    '.section': {
      w: 'calc(100% - 2.75rem)',
    },
    '.sidebar a': { display: 'none' },
    '.sidebar li': {
      w: 'auto',
      p: '0 0.625rem 0 0.625rem',
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
      p: '0.625rem',
    },
  },
  '@media (max-width: 675px)': {
    '.inputButton': {
      button: {
        width: '60% !important',
      },
    },
  },
  '@media (max-width: 600px)': {
    '.inputButton': {
      button: {
        width: '80% !important',
      },
    },
  },
  '@media (max-width: 575px)': {
    '.login-card': {
      w: 'full',
      borderRadius: 0,
      boxShadow: 'none',
      p: '0 0.625rem',
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
  '@media (max-width: 525px)': {
    '.inputButton': {
      top: '-0.75rem !important',
      button: {
        marginTop: '0.8125rem',
      },
    },
    '.navbar .clock': {
      position: 'relative',
      top: '0',
    },
  },
  '@media (max-width: 505px)': {
    '.inputButton': {
      button: {
        width: '100% !important',
      },
    },
  },
  '@media (max-width: 480px)': {
    '.sidebar': {
      w: '2.5rem',
    },
    '.section': {
      w: 'calc(100% - 2.5rem)',
    },
    '.sidebar li': {
      p: '0.4375rem',
    },
    html: {
      fontSize: '14px',
    },
  },
}

export default responsive
