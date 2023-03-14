const addProduct = {
  '.addProduct': {
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
    fontFamily: 'Be Vietnam Pro',
    width: 'calc(100% - 200px)',
    marginLeft: 'auto',
  },
  '.addProduct .card': { marginBottom: '50px' },
  '.addProduct .addProduct-section': { width: '90%' },
  '.addProduct .addProduct-section .cardBody': {
    paddingBlock: '40px',
    paddingInline: '55px',
  },
  '.addProduct .addProduct-section .cardBody h1': { fontSize: '24px' },
  '.addProduct .addProduct-section .cardBody .buttonHeading': {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '45px',
  },
  '.addProduct .addProduct-section .cardBody .buttonHeading button': {
    color: '#514f6d',
    fontSize: '14px',
  },
  '.addProduct .addProduct-section .cardBody .buttonHeading .buttonImage': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
  },
  '.addProduct .addProduct-section .cardBody form,\n.addProduct .addProduct-section .cardBody .deliveryForm':
    {
      marginTop: '60px',
    },
  '.addProduct .addProduct-section .cardBody form .form,\n.addProduct .addProduct-section .cardBody .deliveryForm .form':
    {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      marginTop: '-20px',
      marginBottom: '-20px',
    },
  '.addProduct .addProduct-section .cardBody form :where(.inputLabel),\n.addProduct .addProduct-section .cardBody .deliveryForm :where(.inputLabel)':
    {
      marginBottom: '30px',
      minWidth: '405.922px',
      position: 'relative',
    },
  '.addProduct .addProduct-section .cardBody form :where(.inputLabel) :where(img),\n.addProduct .addProduct-section .cardBody .deliveryForm :where(.inputLabel) :where(img)':
    {
      position: 'absolute',
      top: '53px',
      left: '22px',
    },
  '.addProduct .addProduct-section .cardBody form :where(.inputLabel) label,\n.addProduct .addProduct-section .cardBody .deliveryForm :where(.inputLabel) label':
    {
      fontSize: '14px',
      color: '#1f1c19',
      fontWeight: 500,
    },
  '.addProduct .addProduct-section .cardBody form :where(.inputLabel) input,\n.addProduct .addProduct-section .cardBody .deliveryForm :where(.inputLabel) input':
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
  '.addProduct .addProduct-section .cardBody .dot': {
    display: 'flex',
    justifyContent: 'space-between',
  },
  '.addProduct .addProduct-section .cardBody .dot .dots': {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  '.addProduct .addProduct-section .cardBody .dot .dots div': {
    width: '8px',
    height: '8px',
    backgroundColor: '#556ab0',
    borderRadius: '50%',
    overflow: 'hidden',
    position: 'relative',
    cursor: 'pointer',
    zIndex: 1,
  },
  '.addProduct .addProduct-section .cardBody .dot .dots div.active': {
    outline: '2px solid #dadcf0',
  },
  '.addProduct .addProduct-section .cardBody .dot .dots div.inactive': {
    backgroundColor: '#dadcf0',
  },
  '.addProduct .addDelivery': { marginTop: '45px' },
  '.addProduct .addDelivery button': {
    display: 'flex',
    justifyContent: 'space-between',
    border: '2px solid #514f6d',
    alignItems: 'center',
    padding: '8px 24px',
    gap: '8px',
    borderRadius: '4px',
  },
  '.addProduct .inputLabel': { position: 'relative' },
  '.addProduct .inputLabel .inputDelivery': { textIndent: '3px !important' },
  '.addProduct .inputLabel img.arrow': {
    position: 'absolute !important',
    right: '15px !important',
    left: 'auto !important',
  },
  '.addProduct .textarea': {
    display: 'block',
    backgroundColor: '#f9f9fc',
    resize: 'none',
    border: '1px solid #f9f9fc',
    outline: 'none',
    marginTop: '20px',
    padding: '20px',
    borderRadius: '4px',
    textIndent: '10px',
    width: '100%',
  },
}

export default addProduct
