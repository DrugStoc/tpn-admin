const table = {
  '.overflow': {
    overflow: 'auto',
    backgroundColor: '#fff',
    maxHeight: '660px',
    fontFamily: "'Be Vietnam Pro', sans-serif",
    marginBottom: '50px',
    color: '#484649',
  },
  '.overflow .table': {
    paddingBottom: '0',
    width: ['100%', '1065px'],
    marginInline: 'auto',
    borderCollapse: 'collapse',
  },
  '.overflow .table thead th': { fontSize: '15px', fontWeight: 500 },
  '.overflow .table tbody tr:last-child': { borderBottom: 'none' },
  '.overflow .table tbody td': { fontSize: '14px', borderCollapse: 'collapse' },
  '.overflow .table tbody td:first-child': {
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
  '.overflow .table tbody th:first-child, .overflow .table thead th:first-child':
    {
      visibility: 'hidden',
    },
  '.overflow .table tbody td, .overflow .table tbody th, .overflow .table thead td, .overflow .table thead th':
    {
      textAlign: 'left',
      paddingInline: '10px',
    },
  '.overflow .table tbody tr, .overflow .table thead tr': {
    borderBottom: '1px solid #f0f0f0',
    height: '60px',
  },
  '.overflow::-webkit-scrollbar': { display: 'none' },
  '.overflow .productImage': {
    width: '25px !important',
    height: '25px !important',
  },
}

export default table
