const sidebar = {
  '.sidebar': {
    position: 'fixed',
    width: '200px',
    height: '100vh',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    fontFamily: "'Be Vietnam Pro', sans-serif",
    overflowY: 'auto',
    color: '#484649',
    zIndex: 1,
  },
  '.sidebar li': {
    display: 'flex',
    alignItems: 'center',
    padding: '0px 40px 0px 30px',
    marginLeft: '-10px',
    height: '40px',
  },
  '.sidebar li img': { marginRight: '10px' },
  '.sidebar li:hover, .sidebar li.active': {
    backgroundColor: '#dadcf0',
    cursor: 'pointer',
    borderRadius: '4px',
  },
  '.sidebar .settingLogout': { marginLeft: '20px' },
  '.sidebar::-webkit-scrollbar': { display: 'none' },
}

export default sidebar
