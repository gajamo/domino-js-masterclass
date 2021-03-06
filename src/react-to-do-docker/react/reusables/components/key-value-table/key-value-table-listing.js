import React from 'react';
import _ from 'lodash';

import {Table, TableHeader, TableRow, TableHeaderColumn, TableBody} from 'material-ui/Table';
import {Card, CardTitle, CardText} from 'material-ui/Card';

/*
	Custom Components Import
*/
import KeyValueTableEntry from './key-value-table-entry';

class KeyValueTableListing extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			data:props.data
		}

    //Setup Event Binding
    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
	}

	onAdd(index){
		let tmpArray = this.state.data;
		let tmpIndex = index + 1;

		let entry = {
			paramKey:"",
			paramValue:""
		};

		tmpArray.splice(tmpIndex, 0, entry);
  	this.setState({data:tmpArray});

    return true;
	}

  onDelete(index){
		let tmpArray = this.state.data;
		
		if(tmpArray.length === 1){
			tmpArray[0].paramKey = "";
			tmpArray[0].paramValue = "";
		}else{
			tmpArray.splice(index, 1);
		}

		this.setState({data:tmpArray});

    return true;
	}

	render(){
    let tmpIndex = 0;

		return(
			<Card>
		    <CardTitle title={this.props.title} />
		    <CardText>
				<Table selectable={false}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Key</TableHeaderColumn>
              <TableHeaderColumn>Value</TableHeaderColumn>
						<TableHeaderColumn style={{width:150}}>Actions</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
						{this.state.data.map(entry =>
							<KeyValueTableEntry
								key={_.uniqueId("single_")}
                entry={entry}
								count={this.state.data.length}
								index={tmpIndex++}
								trashEnabled={this.props.trashEnabled}
								addEnabled={this.props.addEnabled}
								addEnabled={true}
								onAdd={this.onAdd}
								onDelete={this.onDelete}
							/>
						)}
          </TableBody>
        </Table>
		    </CardText>
		  </Card>
		)
	}
}

export default KeyValueTableListing;
