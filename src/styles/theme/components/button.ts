export const buttonStyles = {
  components: {
    Button: {
      variants: {
        primary: {
          background: '#31D49E',
          padding: '20px',
          color: '#F7F7F7',
          boxShadow: '0px 5px 34px rgba(16, 255, 139, 0.3)',
          borderRadius: '8px',
          fontFamily: 'secondary',
          fontWeight: 'normal',
          fontSize: '16px',
          lineHeight: '20px',
        },
        secondary: {
          background: '#0A0A0A',
          padding: '20px',
          color: '#F7F7F7',
          border: '1px solid gray',
          borderRadius: '8px',
          fontFamily: 'secondary',
          fontWeight: 'normal',
          fontSize: '14px',
          lineHeight: '16px',
        },
        'no-hover': {
          _hover: {
            boxShadow: 'none',
          },
        },
      },
      baseStyle: {},
    },
  },
}
