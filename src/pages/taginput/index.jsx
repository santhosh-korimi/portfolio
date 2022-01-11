import React, { useEffect, useState } from "react";
import TagsInput from 'taginput-react'
import { Header, Footer } from "../../components";
import "./taginput.scss";

const TagInputDemo = () => {
  const [tags, setTags] = useState([])
  const [tagsList, setTagsList] = useState([])
  const [placeholder, setPlaceholder] = useState('Enter to add')
  const [tagClassName, setTagClassName] = useState('')
  const [showCopiedMessage, setShowCopiedMessage] = useState(false)

  const handleOnChange = (data) => {
    setTags(data)
  }

  const handleOnInputChange = (e) => {
    const { value, name } = e.target
    if (name === 'placeholder') {
      setPlaceholder(value)
    } else if (name === 'tagClassName') {
      setTagClassName(value)
    } else if (name === 'tagsList') {
      setTagsList(value)
    }
  }

  const getTagsComponent = () => {
    return (
      <TagsInput
        tags={tags}
        onChange={handleOnChange}
        placeholder={placeholder}
      />
    )
  }

  const handleOnTagListChange = (data) => {
    setTagsList(data)
    setTags(data)
  }

  const getContent = () => {
    let content = `import TagsInput from 'taginput-react'
const TagsInputDemo = () => {
\tconst handleOnChange = (data) => { 
\t\tconsole.log('data', data) 
\t}

\treturn (
\t\t<TagsInput`
      if (tagClassName) {
        content += `\n\t\t\ttagClassName='${tagClassName}'`
      }
      if (placeholder) {
        content +=`\n\t\t\tplaceholder={'${placeholder}}`
      }
      content +=`\n\t\t\tonChange={handleOnChange}`
      if (tags) {
        content +=`\n\t\t\ttags={[${tags.join(', ')}]}`
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
      <div className="taginput-demo-page">
        <div className="flex-section">
          <div className="left-side">
            <p className="heading">Options</p>
            <div className="form-section">
              <label htmlFor="#">Tags</label>
              <TagsInput
                tags={tagsList}
                onChange={handleOnTagListChange}
                placeholder='Enter default tags'
              />
            </div>
            <div className="form-section">
              <label htmlFor="#">Class Name</label>
              <input
                type="text"
                name="tagClassName"
                onChange={handleOnInputChange}
                value={tagClassName}
                placeholder="tag"
              />
            </div>
            <div className="form-section">
              <label htmlFor="#">Placeholder</label>
              <input
                type="text"
                name="placeholder"
                onChange={handleOnInputChange}
                value={placeholder}
              />
            </div>
          </div>
          <div className="right-side">
            <div className="content">
              <h4 className="heading">React Tags Input Component</h4>
              {getTagsComponent()}
              <div className="code-section">
                <button className="copy-button" onClick={handleOnCopy}>
                  <i className="fa fa-copy" />
                </button>
                {showCopiedMessage && (
                  <span className="copied-message">Code Copied!</span>
                )}
                <code>
                  <p>
                    <span className="keyword">import</span> TagsInput{" "}
                    <span className="keyword">from</span>{" "}
                    <span className="string">'taginput-react'</span>
                  </p>
                  <p>
                    <span className="keyword">const</span>{" "}
                    <span className="varaible">TagsInputDemo</span>
                    {` = () => {`}
                  </p>
                  <p>
                    <span className="tab" />
                    <span className="keyword">const</span>{" "}
                    <span className="varaible">handleOnChange</span>{" "}
                    {`= (data) => {`}
                  </p>
                  <p>
                    <span className="tab" />
                    <span className="tab" />
                    {`console.log('data', data)`}
                  </p>
                  <p>
                    <span className="tab" /> {`}`}
                  </p>
                  <br />
                  <p>
                    <span className="tab" />
                    <span className="keyword">return</span> {`(`}
                  </p>
                  <p>
                    <span className="tab" />
                    <span className="tab" />
                    <span className="varaible">{`<TagsInput`}</span>
                  </p>
                  {tagClassName && (
                    <p>
                      <span className="tab" />
                      <span className="tab" />
                      <span className="tab" />
                      {`tagClassName='${tagClassName}'`}
                    </p>
                  )}
                  {tags && (
                    <p>
                      <span className="tab" />
                      <span className="tab" />
                      <span className="tab" />
                      {`tags={[${tags.join(', ')}]}`}
                    </p>
                  )}
                  <p>
                    <span className="tab" />
                    <span className="tab" />
                    <span className="tab" />
                    {`onChange={handleOnChange}`}
                  </p>
                  {placeholder && (
                    <p>
                      <span className="tab" />
                      <span className="tab" />
                      <span className="tab" />
                      {`placeholder="${placeholder}"`}
                    </p>
                  )}
                  <p>
                    <span className="tab" />
                    <span className="tab" />
                    <span className="varaible">{`/>`}</span>
                  </p>
                  <p>
                    <span className="tab" />
                    {`)`}
                  </p>
                  <p>{`}`}</p>
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TagInputDemo;
