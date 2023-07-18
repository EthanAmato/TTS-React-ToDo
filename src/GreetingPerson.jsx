function GreetingPerson() {
  let myStudents = ["Z", "Owen", "Sharica", "Albert"];

  return (
    <ul>
      {
        myStudents.map((student, index) => {
            return(
                <li key={index}>{student}</li>
            )
        })
      }
    </ul>
  );
}

export default GreetingPerson;
