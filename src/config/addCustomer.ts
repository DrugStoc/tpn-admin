import { sections } from './general'

const addCustomer = {
  '.addCustomer': {
    fontFamily: 'fontFamily',
    ...sections,
  },
  '.addCustomer .card': { mb: '50px' },
  '.addCustomer .addCustomer-section': {
    w: '90%',
    top: 0,
    pos: 'absolute',
  },
  '.addCustomer .addCustomer-section .cardBody': {
    py: '40px',
    px: '55px',
  },
  '.addCustomer .addCustomer-section .cardBody h1': {
    fontSize: '24px',
  },
  '.addCustomer .addCustomer-section .cardBody .buttonHeading': {
    display: 'flex',
    justifyContent: 'space-between',
    mt: '45px',
  },
  '.addCustomer .addCustomer-section .cardBody .buttonHeading button': {
    color: '#514f6d',
    fontSize: '14px',
  },
  '.addCustomer .addCustomer-section .cardBody .buttonHeading .buttonImage': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
  },
  '.addCustomer .addCustomer-section .cardBody form, .addCustomer .addCustomer-section .cardBody .deliveryForm':
    {
      mt: '60px',
    },
  '.addCustomer .addCustomer-section .cardBody form .form, .addCustomer .addCustomer-section .cardBody .deliveryForm .form':
    {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      mt: '-20px',
      mb: '-20px',
    },
  '.addCustomer .addCustomer-section .cardBody form :where(.inputLabel), .addCustomer .addCustomer-section .cardBody .deliveryForm :where(.inputLabel)':
    {
      mb: '30px',
      minW: '405.922px',
      pos: 'relative',
    },
  '.addCustomer .addCustomer-section .cardBody form :where(.inputLabel) :where(img), .addCustomer .addCustomer-section .cardBody .deliveryForm :where(.inputLabel) :where(img)':
    {
      pos: 'absolute',
      top: '53px',
      right: '17px',
    },
  '.addCustomer .addCustomer-section .cardBody form :where(.inputLabel) label, .addCustomer .addCustomer-section .cardBody .deliveryForm :where(.inputLabel) label':
    {
      fontSize: '14px',
      color: '#1f1c19',
      fontWeight: 500,
    },
  '.addCustomer input': {
    bgColor: '#f9f9fc',
    borderRadius: '4px',
    mt: '20px',
    h: '30px',
    w: '100%',
    p: '20px',
  },
  '.addCustomer .inputItem': {
    mt: 'initial',
    p: 'initial',
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
  '.addMerchant .inputLabel .inputDelivery': { textIndent: '3px !important' },
  '.addCustomer .inputLabel img.arrow': {
    pos: 'absolute !important',
    right: '15px !important',
    left: 'auto !important',
  },
}

export default addCustomer
