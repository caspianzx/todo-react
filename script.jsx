
class TodoItem extends React.Component {

      render() {
      // render the list with a map() here
      return (
        <div className="list">
          <button onClick= {this.props.addItem}>add item</button>
          <button onClick= {this.props.clearList}>clear item list</button>
          <h2>To do list </h2>
          <ul>{this.props.list.map( (items, index) =>  {return <li key={index}> {items} <button onClick ={this.props.delete} key={index} value= {items}>remove</button></li>})}</ul>
        </div>
      );
  }

}

class Deleted extends React.Component {
    render () {
        return (
            <div>
            <h1>deletedItem</h1>
                <ul>{this.props.deletedItem.map( items =>  {return <li> {items} </li>})}</ul>
            </div>
            )
    }
}



class ItemList extends React.Component {
  constructor(){
    super()

    this.state = {
      word:"",
      list: [],
      deletedItem: []
    };
    this.addItem = this.addItem.bind(this);
    this.clearList = this.clearList.bind(this);
    this.delete = this.delete.bind(this);
  }

    delete (event) {
        //for loop to search array for same value and remove it
        console.log(event.target.value);
        let array = this.state.list;
        let index = array.indexOf(event.target.value);
        array.splice(index,1);

        let deletedItem = this.state.deletedItem;
        deletedItem.push(event.target.value);
        this.setState({deletedItem: deletedItem, list: array,})


    }

    addItem(){
        let addItem = this.state.list;
        let newWord = this.state.word
        addItem.push(newWord);
        console.log(addItem);
        this.setState({list: addItem, word: " ",});
  }

    clearList () {
        let deletedItem = this.state.list;
        let clearItem = this.state.list;
        clearItem = [];
        this.setState({list: clearItem, word: " ", deletedItem: deletedItem,});


  }

  changeHandler(event){

        console.log(event.target.value);
        let newWord = this.state.word;
        newWord = event.target.value;
        this.setState({word : newWord});

  }


  render() {
      // render the list with a map() here
      console.log("rendering");
      return (
        <div className="list">
        <h1>TO DO ADD FUNCTION (lifting state)</h1>
          <input onChange={(event)=>{this.changeHandler(event)}} value={this.state.word}/>
          <TodoItem addItem = {this.addItem} clearList = {this.clearList} list ={this.state.list}  delete={this.delete} />
          <Deleted deletedItem = {this.state.deletedItem}/>
        </div>
      );
  }
}

ReactDOM.render(
    <ItemList/>,
    document.getElementById('root')
);