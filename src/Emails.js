import Email from "./Email";

function Emails(props) {
  const { filteredEmails, toggleStar, toggleRead } = props;

  return (
    <ul>
      {filteredEmails.map((email, index) => (
        <Email
          email={email}
          index={index}
          key={email.id}
          toggleStar={toggleStar}
          toggleRead={toggleRead}
        />
      ))}
    </ul>
  );
}

export default Emails;
