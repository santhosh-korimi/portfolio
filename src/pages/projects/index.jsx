import React, {useState} from 'react'
import { Footer, Header } from '../../components'
import DatePickerInput from 'react-datepicker-ui'
import Drawer from 'react-ui-drawer'
import TagsInput from 'taginput-react'
import OTPInput from 'react-otp-ui'
import AutoSuggest from 'react-autosuggest-ui'
import './projects.scss'
import { Link } from 'react-router-dom'

const npmPackages = [
  {
    name: 'react-datepicker-ui',
    info: 'Datepicker',
    description: 'Date picker component for React',
    url: 'https://www.npmjs.com/package/react-datepicker-ui',
    github: 'https://github.com/Santhosh1392/react-datepicker-ui',
    link: '/projects/datepicker'
  },
  {
    name: 'react-ui-drawer',
    info: 'Drawer',
    description: 'Drawer is a panel that is slides in from Left, Right, Top or Bottom.',
    url: 'https://www.npmjs.com/package/react-ui-drawer',
    github: 'https://github.com/Santhosh1392/react-ui-drawer',
    // link: '/projects/drawer'
  },
  {
    name: 'taginput-react',
    info: 'Tags Input',
    description: 'Tags input component in react.',
    url: 'https://www.npmjs.com/package/taginput-react',
    github: 'https://github.com/Santhosh1392/taginput-react',
    link: '/projects/taginput'
  },
  {
    name: 'react-otp-ui',
    info: 'OTP Component',
    description: 'OTP input component in react.',
    url: 'https://www.npmjs.com/package/react-otp-ui',
    github: 'https://github.com/Santhosh1392/react-otp-ui',
    link: '/projects/otp-form'
  },
  {
    name: 'react-autosuggest-ui',
    info: 'AutoSuggest',
    description: 'Autosuggest component in react.',
    url: 'https://www.npmjs.com/package/react-autosuggest-ui',
    github: 'https://github.com/Santhosh1392/react-autosuggest-ui',
    link: '/projects/autosuggest'
  }
]
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
const POSITIONS = ['left', 'right', 'top', 'bottom']
const menuItems = [
  {
    name: 'Home',
    icon: 'fa-home'
  },
  {
    name: 'Contacts',
    icon: 'fa-address-book'
  },
  {
    name: 'Messages',
    icon: 'fa-envelope'
  },
  {
    name: 'Podcast',
    icon: 'fa-podcast'
  },
  {
    name: 'Profile',
    icon: 'fa-user-circle-o'
  },
  {
    name: 'Settings',
    icon: 'fa-cogs'
  }
]

const ProjectsPage = () => {
  const [showDrawer, setShowDrawer] = useState(false)
  const [position, setPosition] = useState('left')

  const [tags, setTags] = useState(["Santhosh", "Korimi"]);
  const handleOnChange = (data) => {
    setTags(data);
  };

  const handleOpenDrawer = (pos) => {
    setPosition(pos)
    setShowDrawer(prevState => !prevState)
  }

  return (
    <div className="projects-page">
      <Header secondary />
      <div className="projects--section">
        <h4 className="heading">Recent Projects</h4>
        <div className="npm-packages-section">
          <h4 className="sub-heading">
            NPM Packages
          </h4>
          <div className="flex-section">
            {npmPackages.map((pack, index) => {
              const { name, description, url, github, info, link } = pack
              return (
                <div className="package-card" key={name}>
                  <div className='links-section'>
                    <span className="index">{index + 1}. </span>
                    <span className="name">{info}</span>
                    <a href={url} target="_blank" rel="noreferrer" className='name-link'>({name}) <i className="fa fa-external-link" /></a>                    <a href={github} target="_blank" rel="noreferrer" className='github-lin'>
                      <i className="fa fa-github" />
                    </a>
                  </div>
                  <p className="desc">{description}</p>
                  <div className="demo-section">
                    {index === 0 && (
                      <DatePickerInput />
                    )}
                    {index === 1 && (
                      <>
                        {POSITIONS.map((position, index) => (
                          <button
                            className='open-drawer-button'
                            onClick={() => handleOpenDrawer(position)}>
                            {position}
                          </button>
                        ))}
                        {showDrawer && (
                          <Drawer
                            position={position}
                            requestClose={() => setShowDrawer(false)}
                          >
                            <div className="links-container">
                              {menuItems.map((link, index) => (
                                <div className="link-section">
                                  <i className={`fa ${link.icon}`} />
                                  {link.name}
                                </div>
                              ))}
                            </div>
                          </Drawer>
                        )}
                      </>
                    )}
                    {index === 2 && (
                      <TagsInput
                        tags={tags}
                        onChange={handleOnChange}
                        placeholder="Enter to add"
                      />
                    )}
                    {index === 3 && (
                      <OTPInput numberOfInputs={6} />
                    )}
                    {index === 4 && (
                      <AutoSuggest
                        data={data}
                      />
                    )}
                  </div>
                  {link && (
                    <div className="button-section-xs">
                      <button>
                        <Link to={link}>
                          View Demo
                          <i className="fa fa-arrow-right" style={{marginLeft: 10}} />
                          </Link>
                      </button>
                      <div className="span-after" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProjectsPage
