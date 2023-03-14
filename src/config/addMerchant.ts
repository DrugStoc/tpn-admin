const addMerchant = {
  '.addMerchant': {
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
  '.addMerchant .card': { marginBottom: '50px' },
  '.addMerchant .addMerchant-section': { width: '90%' },
  '.addMerchant .addMerchant-section .cardBody': {
    paddingBlock: '40px',
    paddingInline: '55px',
  },
  '.addMerchant .addMerchant-section .cardBody h1': { fontSize: '24px' },
  '.addMerchant .addMerchant-section .cardBody .buttonHeading': {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '45px',
  },
  '.addMerchant .addMerchant-section .cardBody .buttonHeading button': {
    color: '#514f6d',
    fontSize: '14px',
  },
  '.addMerchant .addMerchant-section .cardBody .buttonHeading .buttonImage': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
  },
  '.addMerchant .addMerchant-section .cardBody form,\n.addMerchant .addMerchant-section .cardBody .deliveryForm':
    {
      marginTop: '60px',
    },
  '.addMerchant .addMerchant-section .cardBody form .form,\n.addMerchant .addMerchant-section .cardBody .deliveryForm .form':
    {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      marginTop: '-20px',
      marginBottom: '-20px',
    },
  '.addMerchant .addMerchant-section .cardBody form :where(.inputLabel),\n.addMerchant .addMerchant-section .cardBody .deliveryForm :where(.inputLabel)':
    {
      marginBottom: '30px',
      minWidth: '405.922px',
      position: 'relative',
    },
  '.addMerchant .addMerchant-section .cardBody form :where(.inputLabel) :where(img),\n.addMerchant .addMerchant-section .cardBody .deliveryForm :where(.inputLabel) :where(img)':
    {
      position: 'absolute',
      top: '53px',
      left: '22px',
    },
  '.addMerchant .addMerchant-section .cardBody form :where(.inputLabel) label,\n.addMerchant .addMerchant-section .cardBody .deliveryForm :where(.inputLabel) label':
    {
      fontSize: '14px',
      color: '#1f1c19',
      fontWeight: 500,
    },
  '.addMerchant .addMerchant-section .cardBody form :where(.inputLabel) input,\n.addMerchant .addMerchant-section .cardBody .deliveryForm :where(.inputLabel) input':
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
  '.addMerchant .addDelivery': { marginTop: '45px' },
  '.addMerchant .addDelivery button': {
    display: 'flex',
    justifyContent: 'space-between',
    border: '2px solid #514f6d',
    alignItems: 'center',
    padding: '8px 24px',
    gap: '8px',
    borderRadius: '4px',
  },
  '.addMerchant .inputLabel': { position: 'relative' },
  '.addMerchant .inputLabel .inputDelivery': { textIndent: '3px !important' },
  '.addMerchant .inputLabel img.arrow': {
    position: 'absolute !important',
    right: '17px !important',
    left: 'auto !important',
  },
}

export default addMerchant
