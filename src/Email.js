function Email(props) {
  const { email, index, toggleRead, toggleStar, setOpenEmail } = props

  return (
    <li
      onClick={() => {
        setOpenEmail(email)
      }}
      key={index}
      className={`email ${email.read ? 'read' : 'unread'}`}
    >
      <div className="select">
        <input
          className="select-checkbox"
          type="checkbox"
          checked={email.read}
          onClick={(event) => toggleRead(email, event)}
        />
      </div>
      <div className="star">
        <input
          className="star-checkbox"
          type="checkbox"
          checked={email.starred}
          onClick={(event) => {toggleStar(email, event)}}
        />
      </div>
      <div className="sender">{email.sender}</div>
      <div className="title">{email.title}</div>
    </li>
  )
}

export default Email
