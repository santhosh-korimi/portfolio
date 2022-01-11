import React, { useEffect, useRef, useState } from 'react'
import './InlineEditor.scss'

const InlineEditor = ({text, styles, defaultText, textArea, dangerouslyStyled}) => {
  const [inlineText, setInlineText] = useState(text || '')
  const [isFocused, setIsFocused] = useState(false)
  const inputRef= useRef(null)

  const handleOnChange = (e) => {
    const { value } = e.target
    setInlineText(value)
  }

  const handleOnFocus = () => {
    if (!isFocused) {
      setIsFocused(true)
    }
  }

  useEffect(() => {
    if (isFocused) {
      inputRef.current.focus()
    }
  }, [isFocused])

  return (
    <div
      tabIndex="0"
      onClick={handleOnFocus}
      className="inline-editor-container"
    >
      {isFocused ? (
        <>
          {!textArea && (
            <input
              ref={inputRef}
              value={inlineText}
              onChange={handleOnChange}
              onBlur={() => setIsFocused(false)}
              style={{...styles}}
            />
          )}
          {textArea && (
            <textarea
              ref={inputRef}
              value={inlineText}
              onChange={handleOnChange}
              onBlur={() => setIsFocused(false)}
              style={{...styles}}
            />
          )}
        </>
      ) : (
        <>
          {!dangerouslyStyled && <p style={{...styles}}>{inlineText || defaultText }</p>}
          {dangerouslyStyled && (
            <p
              style={{...styles}}
              dangerouslySetInnerHTML={{__html: inlineText || defaultText}}
            />
          )}
        </>
      )}
    </div>
  )
}

export default InlineEditor