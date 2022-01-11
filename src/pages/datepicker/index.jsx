import moment from "moment";
import React, { useState } from "react"
import DatePickerInput from "react-datepicker-ui"
import { Footer, Header } from "../../components"
import './datepicker.scss'

const formats = [
  'DD/MM/YYYY', 'dd/mm/yy', 'mm/dd/yyyy', 'yyyy/mm/dd',
  'L',
  'l',
  'LL',
  'll',
  'LLL',
  'lll',
  'LLLL',
  'llll',
]

const DatePickerDemoPage = () => {
  const [placeholder, setPlaceholder] = useState('MM/DD/YYYY')
  const [format, setFormat] = useState('MM/DD/YYYY')
  const [defaultValue, setDefaultValue] = useState(moment().format(format))
  const [minDate, setMinDate] = useState(moment().format(format))
  const [maxDate, setMaxDate] = useState(moment().add(1, 'M').format(format))
  const [selectedDate, setSelectedDate] = useState(null)
  const [showCopiedMessage, setShowCopiedMessage] = useState(false)


  const handleOnChange = (date) => {
    console.log('data', date)
    setSelectedDate(date)
  }

  const getContent = () => {
    let content = `import DatePickerInput from 'react-datepicker-ui'
import moment from 'moment'

const DatePickerDemo = () => {
\tconst handleOnChange = (date) => { 
\t\tconsole.log('date', date) 
\t}

\treturn (
\t\t<DatePickerInput`
      if (defaultValue) {
        content += `\n\t\t\tdefaultValue='${defaultValue}'`
      }
      if (format) {
        content +=`\n\t\t\tformat={'${format}'}`
      }
      content +=`\n\t\t\tonChange={handleOnChange}`
      if (minDate) {
        content +=`\n\t\t\tminDate={moment('${minDate}').toDate()}`
      }
      if (maxDate) {
        content += `\n\t\t\tmaxDate={moment('${maxDate}').toDate()}`
      }
      if (placeholder) {
        content +=`\n\t\t\tplaceholder={'${placeholder}'}`
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

  const handleOnDefaultValueChange = (data, name) => {
    const {dateString} = data
    if (name === 'defaultValue') {
      setDefaultValue(dateString)
    } else if (name === 'minDate') {
      setMinDate(dateString)
    } else if (name === 'maxDate') {
      setMaxDate(dateString)
    }
  }

  const handleOnInputChange = (e) => {
    const { value, name } = e.target
    if (name === 'placeholder') {
      setPlaceholder(value)
    } else if (name === 'format') {
      setFormat(value)
    }
  }

  const getDatePickerComponent = () => {
    return (
      <DatePickerInput 
        placeholder={placeholder}
        defaultValue={defaultValue}
        format={format}
        minDate={moment(minDate).toDate()}
        maxDate={moment(maxDate).toDate()}
        onChange={handleOnChange}
      />
    )
  }
  return (
    <>
      <Header secondary />
      <div className="datepicker-demo-page">
        <div className="flex-section">
          <div className="left-side">
            <p className="heading">Options</p>
            <div className="form-section">
              <label htmlFor="#">Default Value</label>
              <DatePickerInput
                defaultValue={defaultValue}
                onChange={(data) => handleOnDefaultValueChange(data, 'defaultValue')}
              />
            </div>
            <div className="form-section">
              <label htmlFor="#">Placeholder</label>
              <input
                type="text"
                name="placeholder"
                value={placeholder}
                onChange={handleOnInputChange}
              />
            </div>
            <div className="form-section">
              <label htmlFor="#">Format</label>
              <select
                name="format"
                value={format}
                onChange={handleOnInputChange}
              >
                {formats.map(option => (
                  <option value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="form-section">
              <label htmlFor="#">Min Date</label>
              <DatePickerInput
                defaultValue={minDate}
                onChange={(data) => handleOnDefaultValueChange(data, 'minDate')}
              />
            </div>
            <div className="form-section">
              <label htmlFor="#">Max Date</label>
              <DatePickerInput
                defaultValue={maxDate}
                onChange={(data) => handleOnDefaultValueChange(data, 'maxDate')}
              />
            </div>
          </div>
          <div className="right-side">
            <div className="content">
              <h4 className="heading">React Datepicker Component</h4>
              <div className="demo">
                {getDatePickerComponent()}
                {selectedDate && (
                  <div className="selected-date-section">
                    Selected Date: {moment(selectedDate).format(format)}
                  </div>
                )}
              </div>
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
                    <span className="keyword">import</span> DatePickerInput <span className="keyword">from</span> <span className="string">'react-datepicker-ui'</span>
                  </p>
                  <p>
                    <span className="keyword">import</span> moment <span className="keyword">from</span> <span className="string">'moment'</span>
                  </p>
                  <p>
                    <span className="keyword">const</span> <span className="varaible">DatePickerInputDemo</span>{` = () => {`}
                  </p>
                  <p>
                    <span className="tab" /><span className="keyword">const</span> <span className="varaible">handleOnChange</span> {`= (date) => {`}
                  </p>
                  <p>
                    <span className="tab" /><span className="tab" />{`console.log('Selected date', date)`}
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
                    <span className="varaible">{`<DatePickerInput`}</span>
                  </p>
                  {defaultValue && (
                    <p>
                      <span className="tab" /><span className="tab" /><span className="tab" />
                      {`defaultValue={${defaultValue}}`}
                    </p>
                  )}
                  {format && (
                    <p>
                      <span className="tab" /><span className="tab" /><span className="tab" />
                      {`format='${format}'`}
                    </p>
                  )}
                  {minDate && (
                    <p>
                      <span className="tab" /><span className="tab" /><span className="tab" />
                      {`minDate={moment('${minDate}').toDate()}`}
                    </p>
                  )}
                  {maxDate && (
                    <p>
                      <span className="tab" /><span className="tab" /><span className="tab" />
                      {`maxDate={moment('${maxDate}').toDate()}`}
                    </p>
                  )}
                  <p>
                    <span className="tab" /><span className="tab" /><span className="tab" />
                    {`onChange={handleOnChange}`}
                  </p>
                  {placeholder && (
                    <p>
                      <span className="tab" /><span className="tab" /><span className="tab" />
                      {`placeholder='${placeholder}'`}
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
  );
};

export default DatePickerDemoPage;
