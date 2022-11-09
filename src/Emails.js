import Email from './Email'
import { useState } from 'react'
import EmailBody from './EmailBody'

function Emails(props) {
  const { filteredEmails, toggleStar, toggleRead } = props
  const [openEmail, setOpenEmail] = useState(null)

  return (
    <ul>
      {openEmail !== null && (
        <EmailBody openEmail={openEmail} setOpenEmail={setOpenEmail} />
      )}
      {openEmail === null &&
        filteredEmails.map((email, index) => (
          <Email
            email={email}
            index={index}
            key={email.id}
            toggleStar={toggleStar}
            toggleRead={toggleRead}
            setOpenEmail={setOpenEmail}
          />
        ))}
    </ul>
  )
}

export default Emails
