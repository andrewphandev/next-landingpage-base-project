import { Global } from '@emotion/react'

export const fonts = {
  default: 'Poppins',
  primary: 'Inter',
  secondary: 'Annonce',
}

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: "Annonce";
        src: url("/fonts/AnnonceW01Regular.ttf") format("truetype");
        font-weight: 400;
        font-style: normal;
      }
      `}
  />
)
export default Fonts
