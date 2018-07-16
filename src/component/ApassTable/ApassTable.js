import React from 'react';
import './ApassTable.css'


class ApassTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const columns = this.props.columns;

    const dataSource = this.props.dataSource;

    let colsLength = columns.length;

    let dsLength = dataSource.length;

    let colDiv = new Array();

    for (let i = 0; i < colsLength; i++) {
      let colSpan = new Array();
      colSpan.push(<span className="apass-table-cell" key={columns[i].key}>{columns[i].title}</span>);
      for (let j = 0; j < dsLength; j++) {
        let temp = dataSource[j][columns[i].dataIndex];
        colSpan.push(<span className="apass-table-cell" style={j % 2 == 0 ? {backgroundColor: "#F9F9F9"} : {}}
                           key={j}>{temp}</span>);
      }

      colDiv.push(colSpan);
    }

    var table = colDiv.map((data, index) => {
      return <div className="apass-table-cloumn" key={"div" + index}
                  style={columns[index].visiable ? {display: "inline-block",width:"150px"} : {display: "none"}}>{data}</div>
    });

    return this.props.fixedFirstColums ?
      (
        <div>
          {table.shift()}
          <div className="apass-table-wrapper">
            <div className="apass-table-box">
              {table}
            </div>
          </div>
        </div>
      )
      :
      (
        <div className="apass-table-wrapper">
          <div className="apass-table-box">
            {table}
          </div>
        </div>
      )
  }
}

export default ApassTable;
