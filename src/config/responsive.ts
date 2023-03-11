const responsive = {
  '@media (max-width: 679px)': {
    '.login-card': {
      w: '90%',
    },
  },
  '@media (max-width: 575px)': {
    '.login-card': {
      w: '100%',
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
