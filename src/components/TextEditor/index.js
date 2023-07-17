import {Component} from 'react'

import {GrBold} from 'react-icons/gr'

import {BiItalic, BiUnderline} from 'react-icons/bi'

import {
  Button,
  UnderlineButton,
  ItalicButton,
  TextAreaElement,
} from './styledComponents'

import './index.css'

class TextEditor extends Component {
  state = {textToBold: false, textToItalic: false, textToUnderline: false}

  bold = () => {
    this.setState(prevState => ({textToBold: !prevState.textToBold}))
  }

  italic = () => {
    this.setState(prevState => ({textToItalic: !prevState.textToItalic}))
  }

  underline = () => {
    this.setState(prevState => ({textToUnderline: !prevState.textToUnderline}))
  }

  render() {
    const {textToBold, textToItalic, textToUnderline} = this.state

    const color = textToBold === false ? '#f1f5f9' : ' #faff00'

    const italicButtonColor = textToItalic === false ? '#f1f5f9' : ' #faff00'

    const underlineButtonColor =
      textToUnderline === false ? '#f1f5f9' : ' #faff00'

    const fontWeight = textToBold === false ? 'normal' : 'bold'

    const fontStyle = textToItalic === false ? 'normal' : 'italic'

    const textDecoration = textToUnderline === false ? 'normal' : 'underline'
    return (
      <div className="bg-container">
        <div className="responsive-container">
          <div className="text-editor-container">
            <h1 className="heading">Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
              className="image"
            />
          </div>
          <div className="styles-container">
            <ul className="ul-container">
              <Button
                data-testid="bold"
                color={color}
                type="button"
                onClick={this.bold}
              >
                <li className="bold-element">
                  <GrBold height={25} />
                </li>
              </Button>
              <ItalicButton
                className="button"
                data-testid="italic"
                type="button"
                onClick={this.italic}
                color={italicButtonColor}
              >
                <li className="bold-element">
                  <BiItalic />
                </li>
              </ItalicButton>
              <UnderlineButton
                className="button"
                data-testid="underline"
                type="button"
                onClick={this.underline}
                color={underlineButtonColor}
              >
                <li className="bold-element">
                  <BiUnderline />
                </li>
              </UnderlineButton>
            </ul>
            <hr className="hr-line" />
            <TextAreaElement
              fontWeight={fontWeight}
              fontStyle={fontStyle}
              textDecoration={textDecoration}
            />
          </div>
        </div>
      </div>
    )
  }
}
export default TextEditor
