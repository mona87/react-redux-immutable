import React from 'react';
import Immutable from 'immutable';
import { connect } from 'react-redux';


class Todos extends React.Component {

 	addItems (e) {		
 		let text = this.refs.myInput.value;
 		this.refs.myInput.value ='';
 		this.props.actions.addItem(text);
 		
	}
	removeItem (e){
		let id = Number(e.target.dataset.id);
		this.refs.myInput.value ='';
		this.props.actions.removeItem(id);
	}
	editItem (e){
		let id = Number(e.target.dataset.id);
		let text = this.refs.edit.value;
		this.refs.edit.value ='';
		this.props.actions.editItem(id, text);
		
	}
	completeItem (e){
		let id = Number(e.target.dataset.id);
		console.log('props ',this.props.todos._root)
		this.props.actions.completeItem(id);
	}
	render () {
		//shortcut for writing this.props
		 const {todos} = this.props;
	
		return (
		<div id="todo-list">
				
				{todos.map((todo, index) =>{
					return(
						<h1 key={index}>
							{todo}	<br/>	
							<input ref='edit'/>
							<button data-id={index} onClick={this.editItem.bind(this)} >Edit Me</button>
							<br/>			
							<button data-id={index} onClick={this.removeItem.bind(this)} >Remove Me</button>
							<br/>					
						</h1>
					)
				
				})		
				}
				<input ref='myInput'/>	

				{/*bind 'this' to the 'this' inside addItems function*/}
				<button onClick={this.addItems.bind(this)} >Add Me</button>

		</div>
		)
	}


}

export default connect(state => ({todos: state}))(Todos);