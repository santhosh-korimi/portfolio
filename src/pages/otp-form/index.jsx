import React, { useState } from 'react'
import OtpForm from 'react-otp-ui'
import { Footer, Header } from '../../components'
import './otp-form.scss'

const OtpFormPage = () => {
  const [numberOfInputs, setNumberOfInputs] = useState(4)
  const [showSeparator, setShowSeparator] = useState(false)
  const [separator, setSeparator] = useState('-')
  const [secureInput, setSecureInput] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [showCopiedMessage, setShowCopiedMessage] = useState(false)
  const [classNameValue, setClassNameValue] = useState('')

  const handleOnChange = (e) => {
    const {value, name} = e.target
    if (name === 'numberOfInputs') {
      if (value > 10) {
        setNumberOfInputs(10)
      } else {
        setNumberOfInputs(parseInt(value))
      }
    } else if (name === 'separator') {
      setSeparator(value)
    } else if (name === 'className') {
      setClassNameValue(value)
    }
  }

  const handleOnCheckboxChange = (e) => {
    const {checked, name} = e.target
    if (name === 'showSeparator') {
      setShowSeparator(checked)
    } else if(name === 'secureInput') {
      setSecureInput(checked)
    } else {
      setDisabled(checked)
    }
  }

  const getContent = () => {
    let content = `
import OtpForm from 'react-otp-ui'

const OTPDemo = () => {
\tconst handleOnChange = (data) => { 
\t\tconsole.log('data', data) 
\t}

\treturn (
\t\t<OtpForm`
      if (classNameValue) {
        content += `\n\t\t\tclassName='${classNameValue}'`
      }
      if (disabled) {
        content +=`\n\t\t\tdisabled`
      }
      content +=`\n\t\t\tnumberOfInputs={${numberOfInputs}}\n\t\t\tonChange={handleOnChange}`
      if (secureInput) {
        content +=`\n\t\t\tsecureInput`
      }
      if (showSeparator) {
        content +=`\n\t\t\tshowSeparator`
        content += `\n\t\t\tseparator='${separator || `-`}'`
      }
      content += `
\t\t/>
\t)
}`
    return content
  }

  const handleOnCopy = () => {
    const content = getContent()
    navigator.clipboard.writeText(content).then(function() {
      console.log('Async: Copying to clipboard was successful!');
      setShowCopiedMessage(true)
      setTimeout(() => {
        setShowCopiedMessage(false)
      }, 3000)
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    })
  }

  return (
    <>
      <Header secondary />
      <div className="otp-form-page">
        <div className="flex-section">
          <div className="left-side">
            <p className='heading'>Options</p>
            <div className="form-section">
              <label htmlFor="#">
                Number of Inputs
              </label>
              <input
                type="number"
                name="numberOfInputs"
                onChange={handleOnChange}
                value={numberOfInputs}
                placeholder="Default 4"
              />
            </div>
            <div className="form-section">
              <label htmlFor="#">
                <input
                  type="checkbox"
                  value={showSeparator}
                  name="showSeparator"
                  onChange={handleOnCheckboxChange}
                />
                Show Separator
              </label>
            </div>
            {showSeparator && (
              <div className="form-section">
                <label htmlFor="#">
                  Separator
                </label>
                <input
                  type="text"
                  name="separator"
                  onChange={handleOnChange}
                  value={separator}
                  placeholder="Default -"
                  maxLength="1"
                />
              </div>
            )}
            <div className="form-section">
              <label htmlFor="#">
                <input
                  type="checkbox"
                  value={secureInput}
                  name="secureInput"
                  onChange={handleOnCheckboxChange}
                />
                Secure Input
              </label>
            </div>
            <div className="form-section">
              <label htmlFor="#">
                <input
                  type="checkbox"
                  value={disabled}
                  name="disabled"
                  onChange={handleOnCheckboxChange}
                />
                Disabled
              </label>
            </div>
            <div className="form-section">
                <label htmlFor="#">
                  Class Name
                </label>
                <input
                  type="text"
                  name="className"
                  onChange={handleOnChange}
                  value={classNameValue}
                  placeholder="otp-input"
                />
              </div>
          </div>
          <div className="right-side">
            <div className="content">
              <h4 className='heading'>React OTP Component</h4>
              <OtpForm
                numberOfInputs={numberOfInputs || 4}
                showSeparator={showSeparator}
                separator={separator || '-'}
                secureInput={secureInput}
                disabled={disabled}
              />
              <div className="code-section">
                <button className="copy-button" onClick={handleOnCopy}>
                  <i className="fa fa-copy" />
                </button>
                {showCopiedMessage && (
                  <span className="copied-message">
                    Code Copied!
                  </span>
                )}
                <code>
                  <p>
                    <span className="keyword">import</span> OtpForm <span className="keyword">from</span> <span className="string">'react-otp-ui'</span>
                  </p>
                  <p>
                    <span className="keyword">const</span> <span className="varaible">OTPDemo</span>{` = () => {`}
                  </p>
                  <p>
                    <span className="tab" /><span className="keyword">const</span> <span className="varaible">handleOnChange</span> {`= (data) => {`}
                  </p>
                  <p>
                    <span className="tab" /><span className="tab" />{`console.log('data', data)`}
                  </p>
                  <p>
                    <span className="tab" /> {`}`}
                  </p> 
                  <br />
                  <p>
                    <span className="tab" /><span className="keyword">return</span> {`(`}
                  </p>
                  <p>
                    <span className="tab" /><span className="tab" />
                    <span className="varaible">{`<OtpForm`}</span>
                  </p>
                  {classNameValue && (
                    <p>
                      <span className="tab" /><span className="tab" /><span className="tab" />
                      {`className='${classNameValue}'`}
                    </p>
                  )}
                  {disabled && (
                    <p>
                      <span className="tab" /><span className="tab" /><span className="tab" />
                      {`disabled`}
                    </p>
                  )}
                  <p>
                    <span className="tab" /><span className="tab" /><span className="tab" />
                    {`numberOfInputs={${numberOfInputs || 4}}`}
                  </p>
                  <p>
                    <span className="tab" /><span className="tab" /><span className="tab" />
                    {`onChange={handleOnChange}`}
                  </p>
                  {secureInput && (
                    <p>
                      <span className="tab" /><span className="tab" /><span className="tab" />
                      {`secureInput`}
                    </p>
                  )}
                  {showSeparator && (
                    <p>
                      <span className="tab" /><span className="tab" /><span className="tab" />
                      {`separator="${separator || '-'}"`}
                    </p>
                  )}
                  {showSeparator && (
                    <p>
                      <span className="tab" /><span className="tab" /><span className="tab" />
                      {`showSeparator`}
                    </p>
                  )}
                  <p>
                    <span className="tab" /><span className="tab" />
                    <span className="varaible">{`/>`}</span>
                  </p>
                  <p>
                    <span className="tab" />
                    {`)`}
                  </p>
                  <p>
                    {`}`}
                  </p>
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default OtpFormPage
