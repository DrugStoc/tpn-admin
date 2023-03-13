const error = {
  '.errorSection': {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: '#e9e9e9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '.errorSection section': { position: 'absolute', top: '-65px', width: '76%' },
  '.errorSection section .card': {
    display:  'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '90vh',
    backgroundColor: '#fff',
    position: 'relative',
    left: '100px',
    fontFamily: "'Be Vietnam Pro', sans-serif",
  },
  '.errorSection section .card h1': { fontWeight: 500, fontSize: '40px' },
  '.errorSection section .card h2': { fontWeight: 500, fontSize: '18px' },
  '.errorSection section .card img': {
    marginBlock: '40px',
    width: '70%',
    height: 'auto',
  },
}
  
export default error
