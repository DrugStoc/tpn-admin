const addShipping = {
  '.addShipping': {
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
  '.addShipping .card': { marginBottom: '50px' },
  '.addShipping .addShipping-section': { width: '90%' },
  '.addShipping .addShipping-section .cardBody': {
    paddingBlock: '40px',
    paddingInline: '55px',
  },
  '.addShipping .addShipping-section .cardBody h1': { fontSize: '24px' },
  '.addShipping .addShipping-section .cardBody .buttonHeading': {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '45px',
  },
  '.addShipping .addShipping-section .cardBody .buttonHeading button': {
    color: '#514f6d',
    fontSize: '14px',
  },
  '.addShipping .addShipping-section .cardBody .buttonHeading .buttonImage': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
  },
  '.addShipping .addShipping-section .cardBody form,\n.addShipping .addShipping-section .cardBody .deliveryForm':
    {
      marginTop: '60px',
    },
  '.addShipping .addShipping-section .cardBody form .form,\n.addShipping .addShipping-section .cardBody .deliveryForm .form':
    {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      marginTop: '-20px',
      marginBottom: '-20px',
    },
  '.addShipping .addShipping-section .cardBody form :where(.inputLabel),\n.addShipping .addShipping-section .cardBody .deliveryForm :where(.inputLabel)':
    {
      marginBottom: '30px',
      minWidth: '405.922px',
      position: 'relative',
    },
  '.addShipping .addShipping-section .cardBody form :where(.inputLabel) :where(img),\n.addShipping .addShipping-section .cardBody .deliveryForm :where(.inputLabel) :where(img)':
    {
      position: 'absolute',
      top: '53px',
      left: '22px',
    },
  '.addShipping .addShipping-section .cardBody form :where(.inputLabel) label,\n.addShipping .addShipping-section .cardBody .deliveryForm :where(.inputLabel) label':
    {
      fontSize: '14px',
      color: '#1f1c19',
      fontWeight: 500,
    },
  '.addShipping .addShipping-section .cardBody form :where(.inputLabel) input,\n.addShipping .addShipping-section .cardBody .deliveryForm :where(.inputLabel) input':
    {
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
  '.addShipping .addDelivery': { marginTop: '45px' },
  '.addShipping .addDelivery button': {
    display: 'flex',
    justifyContent: 'space-between',
    border: '2px solid #514f6d',
    alignItems: 'center',
    padding: '8px 24px',
    gap: '8px',
    borderRadius: '4px',
  },
  '.addShipping .inputLabel': { position: 'relative' },
  '.addShipping .inputLabel .inputDelivery': { textIndent: '3px !important' },
  '.addShipping .inputLabel img.arrow': {
    position: 'absolute !important',
    right: '15px !important',
    left: 'auto !important',
  },
}

export default addShipping
