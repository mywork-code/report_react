import React from 'react';
import './ApassTable.css'


class ApassTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns:props.columns,
      dataSource:props.dataSource,
    }
  }

  render() {

    const columns = this.state.columns;
    const dataSource = this.state.dataSource;


    let colsLength = columns.length;
    let dsLength = dataSource.length;

    let colDiv = new Array(columns.length);

    for(let i=0 ; i< colsLength ; i++){

      let colSpan = new Array();

      colSpan.push(<span className="cell" key={columns[i].key}>{columns[i].title}</span>);

      for(let j=0 ; j < dsLength ; j++){
        let temp = dataSource[j][columns[i].dataIndex];
        colSpan.push(<span className="cell" style={ j%2 == 0 ? { backgroundColor:"#F9F9F9"} : {}} key={j}>{ temp ? temp: '' }</span>);
      }

      colDiv.push(colSpan);
    }

    var table = colDiv.map((data,index) =>{
      return <div className="cloumn" key={"div"+index}>{data}</div>
    });



    return (
      <div className="table-box">
        <div className="big-box">
          {table}
        </div>
      </div>
    )
  }
}

export default ApassTable;
