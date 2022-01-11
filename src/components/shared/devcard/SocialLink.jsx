import React from 'react'
import InlineEditor from '../inline-editor'

const SocialLink = ({data, itemIndex, onRemoveItem}) => {
  const {name, iconName, defaultText} = data
  return (
    <div className="sm--section" key={`socila-link-${name}-${itemIndex}`}>
      <div
        tabIndex="0"
        className="remove-icon"
        onClick={() => onRemoveItem(itemIndex)}>
        ×
      </div>
      <div className="sm--left-side">
        <i className={`fa ${iconName}`} />
      </div>
      <div className="sm--right-side">
        <h4 className="sm--heading">
          {name}
        </h4>
        <InlineEditor
          text={defaultText}
          defaultText={defaultText}
          styles={{
            marginBottom: 0,
            color: '#83aff0',
            fontSize: 14,
          }}
        />
      </div>
    </div>
  )
}

export default SocialLink