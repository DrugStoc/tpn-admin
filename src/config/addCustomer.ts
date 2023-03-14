import { fixedBody } from './general'

const addCustomer = {
  '.addCustomer': {
    position: 'fixed',
    ...fixedBody,
    overflowY: 'auto',
    fontFamily: 'fontFamily',
    w: 'calc(100% - 200px)',
    ml: 'auto',
  },
  '.addCustomer .addCustomer-card': { mb: '50px' },
  '.addCustomer .addCustomer-section': { w: '90%' },
  '.addCustomer .addCustomer-section .addCustomer-cardBody': {
    py: '40px',
    px: '55px',
  },
  '.addCustomer .addCustomer-section .addCustomer-cardBody h1': {
    fontSize: '24px',
  },
  '.addCustomer .addCustomer-section .addCustomer-cardBody .buttonHeading': {
    display: 'flex',
    justifyContent: 'space-between',
    mt: '45px',
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
      mt: '60px',
    },
  '.addCustomer .addCustomer-section .addCustomer-cardBody form .form,\n.addCustomer .addCustomer-section .addCustomer-cardBody .deliveryForm .form':
    {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      mt: '-20px',
      mb: '-20px',
    },
  '.addCustomer .addCustomer-section .addCustomer-cardBody form :where(.inputLabel),\n.addCustomer .addCustomer-section .addCustomer-cardBody .deliveryForm :where(.inputLabel)':
    {
      mb: '30px',
      minW: '405.922px',
      pos: 'relative',
    },
  '.addCustomer .addCustomer-section .addCustomer-cardBody form :where(.inputLabel) :where(img),\n.addCustomer .addCustomer-section .addCustomer-cardBody .deliveryForm :where(.inputLabel) :where(img)':
    {
      pos: 'absolute',
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
    bgColor: '#f9f9fc',
    borderRadius: '4px',
    border: '1px solid #f9f9fc',
    mt: '20px',
    h: '30px',
    textIndent: '40px',
    w: '100%',
    outline: 'none',
    p: '20px',
  },
  '.addCustomer .addDelivery': { marginTop: '45px' },
  '.addCustomer .addDelivery button': {
    display: 'flex',
    justifyContent: 'space-between',
    border: '2px solid #514f6d',
    alignItems: 'center',
    p: '8px 24px',
    gap: '8px',
    borderRadius: '4px',
  },
  '.addCustomer .inputLabel': { pos: 'relative' },
  '.addCustomer .inputLabel img.arrow': {
    pos: 'absolute !important',
    right: '15px !important',
    left: 'auto !important',
  },
}

export default addCustomer
