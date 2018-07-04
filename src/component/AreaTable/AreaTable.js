import React from 'react';
import './AreaTable.css'

class AreaTable extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      columns: props.columns
    }


  }


  render() {

    const columns = this.state.columns;
    const lists = columns.map((date,index) =>
      <span className="item" key={index}>{date.title}</span>
    )


    return (
      <div className="box">
        <div className="columns">
          {lists}
        </div>

      </div>
    )
  }
}

export default AreaTable;
