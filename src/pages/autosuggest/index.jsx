import React, { useState } from 'react'
import AutoSuggest from 'react-autosuggest-ui'
import { Footer, Header } from '../../components'
import './autosuggest.scss'

const data = [
  {
      name: 'React.JS',
      value: 'React.JS'
  },{
      name: 'Vue.JS',
      value: 'Vue.JS'
  },
      {
      name: 'Angular.JS',
      value: 'Angular.JS'
  },{
      name: 'JavaScript',
      value: 'JavaScript'
  }
]

const AutosuggestDemoPage = () => {
  const [showCopiedMessage, setShowCopiedMessage] = useState(false)
  const [placeholder, setPlaceholder] = useState('Search')
  const [enableArrowNavigation, setEnableArrowNavigation] = useState(true)
  const [noMatchText, setNoMatchText] = useState('No match found!')
  const [inputClassName, setInputClassName] = useState('')
  const [activeItemBackground, setAcitveItemBackground] = useState('#dddddd')
  const [inactiveItemBackground, setInactiveItemBackground] = useState('#ffffff')


  const getContent = () => {
    let content = `
import AutoSuggest from 'react-autosuggest-ui'

const AutoSuggestDemoe = () => {
\tconst handleOnChange = (data) => { 
\t\tconsole.log('data', data) 
\t}

\treturn (
\t\t<AutoSuggest`
      content +=`\n\t\t\tdata={data}\n\t\t\tonChange={handleOnChange}`
      if (enableArrowNavigation) {
        content +=`\n\t\t\tenableArrowNavigation`
      }
      if (inputClassName) {
        content += `\n\t\t\tclassName='${inputClassName}'`
      }if (placeholder) {
        content +=`\n\t\t\tplaceholder={${placeholder}}`
      }
      if (noMatchText) {
        content += `\n\t\t\tnoMatchText='${noMatchText}'`
      }
      if (activeItemBackground) {
        content += `\n\t\t\tactiveItemBackground='${activeItemBackground}'`
      }
      if (inactiveItemBackground) {
        content += `\n\t\t\tinactiveItemBackground='${inactiveItemBackground}'`
      }
      content += `
\t\t/>
\t)
}`
    return content
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target
    console.log('name', name, value)
    if (name === 'placeholder') {
      setPlaceholder(value)
    } else if (name === 'noMatchText') {
      setNoMatchText(value)
    } else if (name === 'inputClassName') {
      setInputClassName(value)
    } else if (name === 'activeItemBackground') {
      setAcitveItemBackground(value)
    } else if (name === 'inactiveItemBackground') {
      setInactiveItemBackground(value)
    }
  }

  const handleOnCheckboxChange = (e) => {
    const {checked, name} = e.target
    if (name === 'enableArrowNavigation') {
      setEnableArrowNavigation(checked)
    }
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
      <div className="autosuggest-page">
        <div className="flex-section">
          <div className="left-side">
            <p className='heading'>Options</p>
            <div className="form-section">
              <label htmlFor="#">
                Placeholder
              </label>
              <input
                type="text"
                name="placeholder"
                onChange={handleOnChange}
                value={placeholder}
              />
            </div>
            <div className="form-section">
              <label htmlFor="#">
                No Results Text
              </label>
              <input
                type="text"
                name="noMatchText"
                onChange={handleOnChange}
                value={noMatchText}
              />
            </div>
            <div className="form-section">
              <label htmlFor="#">
                Input ClassName
              </label>
              <input
                type="text"
                name="inputClassName"
                onChange={handleOnChange}
                value={inputClassName}
              />
            </div>
            <div className="form-section">
              <label htmlFor="#">
                Active Item Background
              </label>
              <input
                type="color"
                name="activeItemBackground"
                onChange={handleOnChange}
                value={activeItemBackground}
              />
            </div>
            <div className="form-section">
              <label htmlFor="#">
                Inactive Item Background
              </label>
              <input
                type="color"
                name="inactiveItemBackground"
                onChange={handleOnChange}
                value={inactiveItemBackground}
              />
            </div>
            <div className="form-section">
              <label htmlFor="#">
                <input
                  type="checkbox"
                  value={enableArrowNavigation}
                  checked={enableArrowNavigation}
                  name="enableArrowNavigation"
                  onChange={handleOnCheckboxChange}
                />
                Arrow Navigation
              </label>
            </div>
          </div>
          <div className="right-side">
            <div className="content">
              <h4 className='heading'>React Autosuggest Component</h4>
              <AutoSuggest
                data={data}
                placeholder={placeholder}
                enableArrowNavigation={enableArrowNavigation}
                noMatchText={noMatchText}
                activeItemBackground={activeItemBackground}
                inactiveItemBackground={inactiveItemBackground}
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
                    <span className="keyword">import</span> AutoSuggest <span className="keyword">from</span> <span className="string">'react-autosuggest-ui'</span>
                  </p>
                  <p>
                    <span className="keyword">const</span> <span className="varaible">AutoSuggestDemo</span>{` = () => {`}
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
                    <span className="varaible">{`<AutoSuggest`}</span>
                  </p>
                  <p>
                    <span className="tab" /><span className="tab" /><span className="tab" />
                    {`data={data}`}
                  </p>
                  <p>
                    <span className="tab" /><span className="tab" /><span className="tab" />
                    {`onChange={handleOnChange}`}
                  </p>
                  {enableArrowNavigation && (
                    <p>
                      <span className="tab" /><span className="tab" /><span className="tab" />
                      {`enableArrowNavigation`}
                    </p>
                  )}
                  {inputClassName && (
                    <p>
                      <span className="tab" /><span className="tab" /><span className="tab" />
                      {`inputClassName='${inputClassName}'`}
                    </p>
                  )}
                  {activeItemBackground && (
                    <p>
                      <span className="tab" /><span className="tab" /><span className="tab" />
                      {`activeItemBackground="${activeItemBackground || '#ddd'}"`}
                    </p>
                  )}
                  {inactiveItemBackground && (
                    <p>
                      <span className="tab" /><span className="tab" /><span className="tab" />
                      {`inactiveItemBackground="${inactiveItemBackground || '#fff'}"`}
                    </p>
                  )}
                  {placeholder && (
                    <p>
                      <span className="tab" /><span className="tab" /><span className="tab" />
                      {`placeholder='${placeholder}'`}
                    </p>
                  )}
                  {noMatchText && (
                    <p>
                      <span className="tab" /><span className="tab" /><span className="tab" />
                      {`noMatchText='${noMatchText}'`}
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
                  <p>{'/* data is array of objects to fetch suggestions from.'}<br />{'should be like {name: "", value: ""} */'}</p>
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

export default AutosuggestDemoPage
