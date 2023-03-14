const addCustomer = {
  '.addCustomer': {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: '#e9e9e9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflowY: 'auto',
    fontFamily: "'Be Vietnam Pro'",
    width: 'calc(100% - 200px)',
    marginLeft: 'auto',
  },
  '.addCustomer .addCustomer-card': { marginBottom: '50px' },
  '.addCustomer .addCustomer-section': { width: '90%' },
  '.addCustomer .addCustomer-section .addCustomer-cardBody': {
    paddingBlock: '40px',
    paddingInline: '55px',
  },
  '.addCustomer .addCustomer-section .addCustomer-cardBody h1': {
    fontSize: '24px',
  },
  '.addCustomer .addCustomer-section .addCustomer-cardBody .buttonHeading': {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '45px',
  },
  '.addCustomer .addCustomer-section .addCustomer-cardBody .buttonHeading button':
    {
      color: '#514f6d',
      fontSize: '14px',
    },
  '.addCustomer .addCustomer-section .addCustomer-cardBody .buttonHeading .buttonImage':
    {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '8px',
      cursor: 'pointer',
    },
  '.addCustomer .addCustomer-section .addCustomer-cardBody form,\n.addCustomer .addCustomer-section .addCustomer-cardBody .deliveryForm':
    {
      marginTop: '60px',
    },
  '.addCustomer .addCustomer-section .addCustomer-cardBody form .form,\n.addCustomer .addCustomer-section .addCustomer-cardBody .deliveryForm .form':
    {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      marginTop: '-20px',
      marginBottom: '-20px',
    },
  '.addCustomer .addCustomer-section .addCustomer-cardBody form :where(.inputLabel),\n.addCustomer .addCustomer-section .addCustomer-cardBody .deliveryForm :where(.inputLabel)':
    {
      marginBottom: '30px',
      minWidth: '405.922px',
      position: 'relative',
    },
  '.addCustomer .addCustomer-section .addCustomer-cardBody form :where(.inputLabel) :where(img),\n.addCustomer .addCustomer-section .addCustomer-cardBody .deliveryForm :where(.inputLabel) :where(img)':
    {
      position: 'absolute',
      top: '53px',
      left: '22px',
    },
  '.addCustomer .addCustomer-section .addCustomer-cardBody form :where(.inputLabel) label,\n.addCustomer .addCustomer-section .addCustomer-cardBody .deliveryForm :where(.inputLabel) label':
    {
      fontSize: '14px',
      color: '#1f1c19',
      fontWeight: 500,
    },
  '.addCustomer input': {
    background: '#f9f9fc',
    borderRadius: '4px',
    border: '1px solid #f9f9fc',
    marginTop: '20px',
    height: '30px',
    textIndent: '40px',
    width: '100%',
    outline: 'none',
    padding: '20px',
  },
  '.addCustomer .addDelivery': { marginTop: '45px' },
  '.addCustomer .addDelivery button': {
    display: 'flex',
    justifyContent: 'space-between',
    border: '2px solid #514f6d',
    alignItems: 'center',
    padding: '8px 24px',
    gap: '8px',
    borderRadius: '4px',
  },
  '.addCustomer .inputLabel': { position: 'relative' },
  '.addCustomer .inputLabel img.arrow': {
    position: 'absolute !important',
    right: '15px !important',
    left: 'auto !important',
  },
}

export default addCustomer
