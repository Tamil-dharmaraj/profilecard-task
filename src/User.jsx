
const User = (props) => {
  return (
    <div> 
    <table>
      <tr>
        <th>Name</th>
        <td>
          {props.name}
        </td>
      </tr>
      <tr>
      <th>age</th>
        <td>
          {props.age}
        </td>
      </tr>
      <tr>
      <th>Location</th>
        <td>
          {props.location}
        </td>
      </tr>
    </table>
    </div>
    
  )
}


export default User