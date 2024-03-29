const responsive = {
  '@media (min-width: 1339px)': {
    '.chat1, .chat2': {
      marginLeft: '11px',
      width: '56.7% !important',
      boxShadow: '0 0 2px #f0f2f5',
    },
  },
  // ...
  '@media (max-width: 1227px)': { '.inputLabel': { width: '100%' } },
  // ...
  '@media (max-width: 1253px)': {
    '.inputLabel': { marginBottom: '36px', width: '100%' },
  },
  '@media (max-width: 963px)': {
    '.inputButton': {
      flexWrap: 'wrap',
      button: {
        width: '40% !important',
      },
    },
  },
  '@media (max-width: 1088px)': {
    '.inputButton': {
      flexWrap: 'wrap',
      '.dropdown': {
        left: 'initial !important',
        right: '0',
      },
    },
    '.customersTable, .merchantTable, .productTable, .shippingTable': {
      top: '94px !important',
    },
    '.inputSearch': {
      width: '100% !important',
    },
    '.section .fillSearch': { flexDirection: 'column' },
    '.section .fillSearch .chatSearchProducts': {
      width: '100%',
      maxWidth: 'initial',
      marginTop: '-25px',
    },
    '.section .fillSearch .searchProducts': {
      width: '100%',
      marginTop: '791px',
    },
    '.section .fillSearch .chatSearchProducts .positionVertical': {
      width: '100%',
      marginTop: '29px',
    },
    '.section .chat1, .section .chat2': { width: '90%', left: 'auto' },
    '.section .chat1': { top: '630px' },
    '.section .chat2': { top: '870px' },
    '.ground': { top: '1773px !important' },
  },
  '@media (max-width: 1053px)': { '.discount': { width: '100% !important' } },
  '@media (max-width: 900px)': {
    '.errorSection section': { width: '70% !important' },
  },

  '@media (max-width: 756px)': {
    '.inputLabel': { minWidth: 'auto !important' },
  },
  '@media (max-width: 785px)': {
    '.inputButton': {
      button: {
        width: '50% !important',
      },
    },
  },
  '@media (max-width: 700px)': {
    '.addShipping': { width: 'auto', marginLeft: '46px' },
    '.addShipping .cardBody': { padding: '20px !important' },
    '.addProduct': { width: 'auto', marginLeft: '46px' },
    '.addMerchant': { width: 'auto', marginLeft: '46px', padding: '20px' },
    '.addMerchant .cardBody': { padding: '20px !important' },
    '.errorSection section': { width: '80% !important' },
    '.errorSection section .errorCard': {
      left: '21px !important',
      height: '70vh',
      marginTop: '65px',
    },
    '.navbar .dayTime': {
      marginLeft: '8px !important',
    },
    '.section': { width: 'auto', marginLeft: '46px' },
    '.sidebar': {
      paddingBlock: '30px',
      justifyContent: 'center',
      alignItems: 'center',
      width: 'auto',
    },
    '.sidebar a': { display: 'none' },
    '.sidebar li': {
      width: 'auto',
      padding: '0px 10px 0px 10px',
      marginLeft: 'initial',
    },
    '.sidebar li img': {
      marginRight: 'initial',
      position: 'relative',
      zIndex: 4,
    },
    '.sidebar span': { display: 'none' },
    '.settingLogout': { marginTop: 'auto', marginLeft: 'initial !important' },
    '.box': { marginInline: 'auto !important' },
    '.orderSection, .customerSection, .merchantSection, .productSection, .shippingSection, .addCustomer':
      {
        width: 'auto',
        marginLeft: '46px',
      },
    '.cardBody': { padding: '20px !important' },
  },
  '@media (max-width: 700px) and (min-width: 557px)': {
    '.sidebar': { marginLeft: '4px' },
  },
  '@media (max-width: 679px)': {
    '.login-card': {
      w: '90%',
    },
  },
  '@media (max-width: 675px)': {
    '.inputButton': {
      button: {
        width: '60% !important',
      },
    },
  },
  '@media (max-width: 600px)': {
    '.inputButton': {
      button: {
        width: '80% !important',
      },
    },
  },
  '@media (max-width: 575px)': {
    '.login-card': {
      w: '100%',
      borderRadius: 0,
      boxShadow: 'none',
      p: '0 10px',
    },
    '.login-box': {
      h: '100vh',
    },
  },
  '@media (max-width: 556px)': {
    '.sidebar': { width: '46px' },
    '.sidebar li': { padding: '0px 5px 0px 5px', height: '30px' },
  },
  '@media (max-width: 525px)': {
    '.inputButton': {
      top: '-12px !important',
      button: {
        marginTop: '13px',
      },
    },
    '.navbar .clock': {
      position: 'relative',
      top: '0',
    },
    // '.input': {
    //   display: 'flex',
    //   flexWrap: 'wrap',
    // },
  },
  '@media (max-width: 505px)': {
    '.inputButton': {
      button: {
        width: '100% !important',
      },
    },
  },
}

export default responsive
