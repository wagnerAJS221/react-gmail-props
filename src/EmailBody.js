function EmailBody(props) {
  const { openEmail, setOpenEmail } = props
  return (
    <div>
      <p>{openEmail.title}</p>

      <button
        onClick={() => {
          setOpenEmail(null)
        }}
      >
        Back
      </button>
    </div>
  )
}
export default EmailBody
