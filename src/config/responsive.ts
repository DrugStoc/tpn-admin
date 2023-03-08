export const responsiveness = {
  '@media (max-width: 679px)': {
    '.login-card': {
      width: '90%',
      height: '90vh',
    },
  },
  '@media (max-width: 575px)': {
    '.login-card': {
      width: '100%',
      height: '100vh',
      borderRadius: 0,
      boxShadow: 'none',
    },
    '.box': {
      height: '90vh',
    },
  },
  '.login-box': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  '@media (min-width: 531px)': {
    'input[type="password"]::-ms-reveal, input[type="password"]::-ms-clear': {
      display: 'none',
    },
  },
  '@media (max-width: 480px)': {
    '.card': {
      padding: '20px',
    },
  },
}
