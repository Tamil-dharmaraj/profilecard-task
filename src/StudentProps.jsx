import React from 'react'

export const StudentProps = (props) => {
  return (
    <div>
        <table>
            <tr>
                <th>
                    name
                </th>
                <td>{props.name}</td>
            </tr>
            <tr>
                <th>
                    age
                </th>
                <td>{props.age}</td>
            </tr>
            <tr>
                <th>
                isMarried
                </th>
                <td>{props.isMarried ? "Yes" :"No"}</td>
            </tr>
        </table>
    </div>
  );
};

StudentProps.propsTypes={
    name:propsTypes.string,
    age:propsTypes.number,
    isMarried:propsTypes.bool,
};
Studentprops.defaultProps={
    name:"no name",
    age:0,
    isMarried:false
}


