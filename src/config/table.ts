const table = {
  '.overflow': {
    overflow: 'auto',
    backgroundColor: '#fff',
    maxHeight: '660px',
    fontFamily: 'Be Vietnam Pro, sans-serif',
    marginBottom: '50px',
    color: '#484649',
  },
  '.overflow .table': {
    padding: '0',
    margin: '0 auto',
    width: '1065px',
    borderCollapse: 'collapse',
  },
  '.overflow .table thead th': {
    fontSize: '15px',
    fontWeight: '500',
  },
  '.overflow .table tbody tr:last-child': {
    borderBottom: 'none',
  },
  '.overflow .table tbody td': {
    fontSize: '14px',
    borderCollapse: 'collapse',
    textAlign: 'left',
    padding: '0 10px',
  },
  '.overflow .table tbody td::first-of-type': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '60px',
  },
  '.overflow .table tbody td img': {
    width: '16px',
    height: '16px',
    cursor: 'pointer',
  },
  '.overflow .table tbody th::first-of-type, .overflow .table thead th::first-of-type':
    {
      visibility: 'hidden',
    },
  '.overflow .table tbody tr, .overflow .table thead tr': {
    borderBottom: '1px solid #f0f0f0',
    height: '60px',
  },
  '.overflow::-webkit-scrollbar': {
    display: 'none',
  },
  '.overflow .productImage': {
    width: '25px !important',
    height: '25px !important',
  },
}

export default table
