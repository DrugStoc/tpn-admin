const modal = {
  '.modal-overlay': {
    pos: 'fixed',
    top: 0,
    left: '200px',
    right: 0,
    bottom: 0,
    zIndex: 22,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bgColor: 'rgba(0, 0, 0, 0.5)',
    height: '100vh',
    '.modal-content': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '40px',
      bgColor: 'white',
      w: '50%',
      h: '200px',
      borderRadius: '10px',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
      p: {
        w: '90%',
        textAlign: 'center',
      },
      div: {
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        '.firstButton': {
          backgroundColor: '#B3261E',
          color: '#fff',
          borderRadius: 4,
          border: '1px solid #b3261e',
          padding: '5px 40px',
        },
        '.secondButton': {
          backgroundColor: '#fff',
          color: '#514F6D',
          borderRadius: 4,
          border: '1px solid #514F6D',
          padding: '5px 40px',
        },
      },
    },
  },
}

export default modal
