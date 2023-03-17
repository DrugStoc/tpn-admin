interface buttonInterface {
  text: string | undefined
  textColor: string
  bgColor: string
  buttonWidth: string
  buttonBorderRadius: string
  buttonBorder: string
  fontSize: string
  handleButtonClick?: VoidFunction
  buttonHeight: string
  fontWeight: string
  fontFamily: string
  linkText: string | undefined | null
  type: 'button' | 'reset' | 'submit' | undefined
}

export type { buttonInterface }
