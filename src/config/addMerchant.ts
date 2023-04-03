import { sections } from './general'

const addMerchant = {
  '.addMerchant': {
    fontFamily: 'fontFamily',
    ...sections,
  },
  '.addMerchant .addMerchant-merchant-detail': {
    width: '61%',
  },
  '.addMerchant .card': { marginBottom: '50px' },
  '.addMerchant .addMerchant-section': {
    width: '90%',
    top: 0,
    pos: 'absolute',
    display: 'flex',
    justifyContent: 'space-between',
  },
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
  '.addMerchant .addMerchant-section .cardBody form, .addMerchant .addMerchant-section .cardBody .deliveryForm':
    {
      marginTop: '60px',
    },
  '.addMerchant .addMerchant-section .cardBody form .form, .addMerchant .addMerchant-section .cardBody .deliveryForm .form':
    {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      marginTop: '-20px',
      marginBottom: '-20px',
    },
  '.formInput': {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  '.addMerchantInput': {
    width: '100%',
  },
  '.addMerchantIdentity': {
    w: '34%',
  },
  '.addMerchantDetail': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '25px',
  },
  '.addMerchantDetail h2': {
    fontSize: '14px',
  },
  '.addMerchantDetail h2 span': {
    fontSize: '12px',
    fontWeight: 400,
  },
  '.addMerchantDetail ul': {
    display: 'flex',
    justifyContent: 'space-between',
    width: '50%',
  },
  '.addMerchantDetail li': {
    listStyleType: 'none',
    fontSize: '12px',
    color: '#AEAAAE',
  },
  '.addMerchantDetailChart': {
    // height: '325px',
  },
  '.addMerchantDetailChartLiner': {
    borderLeft: '1px solid #939094',
    marginLeft: '25px',
    // height: 300,
  },
  '.addMerchant .addMerchant-section .cardBody form :where(.inputLabel), .addMerchant .addMerchant-section .cardBody .deliveryForm :where(.inputLabel)':
    {
      marginBottom: '30px',
      position: 'relative',
    },
  '.addMerchant .addMerchant-section .cardBody form :where(.inputLabel) :where(img), .addMerchant .addMerchant-section .cardBody .deliveryForm :where(.inputLabel) :where(img)':
    {
      position: 'absolute',
      top: '53px',
      left: '22px',
    },
  '.addMerchant .addMerchant-section .cardBody form :where(.inputLabel) label, .addMerchant .addMerchant-section .cardBody .deliveryForm :where(.inputLabel) label':
    {
      fontSize: '14px',
      color: '#1f1c19',
      fontWeight: 500,
      display: 'block',
    },
  '.addMerchant .addMerchant-section .cardBody form :where(.inputLabel) input, .addMerchant .addMerchant-section .cardBody .deliveryForm :where(.inputLabel) input':
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
