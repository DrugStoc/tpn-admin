const navbar = {
  '.navbar': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    top: '-80px',
    flexWrap: 'wrap',
    fontFamily: 'fontFamily',
    color: '#1f1c19',
    marginTop: '100px',
    width: '90%',
    marginInline: 'auto',
  },
  '.navbar + section': {
    position: 'absolute',
    top: '-25px',
  },
  '.navbar + section img.img': {
    position: 'absolute',
    top: '14px',
    left: '10px',
  },
  '.navbar h2': {
    fontSize: '16px',
    fontWeight: '600',
  },
  '.navbar .dayTime': {
    marginLeft: '24px',
  },
}

export default navbar
