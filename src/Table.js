import React, {Component} from 'react';


const TableHeader = () => {
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Delete</th>
            </tr>
        </thead>
    )
};

const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
        return(
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>
                    <button onClick={()=>props.removeCharacter(index)}>Remove</button>
                </td>
            </tr>
        );
    });

    return(
        <tbody>
        {rows}
        </tbody>
    )
}

class Table extends Component{
    constructor(props){
        super();
        console.log('table constructor',props);
    }
    render(){
        const {characterData, removeCharacter} = this.props;
        //console.log(characterData);

        return(
            <table>
                <TableHeader/>
                <TableBody characterData={characterData}
                    removeCharacter={removeCharacter}
                />
            </table>

        )
    }
}

export default Table;
