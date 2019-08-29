class List extends React.Component {
  constructor(){
    super()

    this.state = {
      word:"",
      list : []
    }
  }

    addItem(){
        let addItem = this.state.list;
        let newWord = this.state.word
        addItem.push(newWord);
        console.log(addItem);
        this.setState({list: addItem, word: " ",});
  }

    clearList () {
        let clearItem = this.state.list;
        clearItem = [];
        this.setState({list: clearItem, word: " ",});


  }

  changeHandler(event){
    if (event.target.value.length == 6) {
        alert("please key in less than 4 characters");

    } else {
        console.log(event.target.value);
        let newWord = this.state.word;
        newWord = event.target.value;
        this.setState({word : newWord});
    }

  }


  render() {
      // render the list with a map() here
      console.log("rendering");
      return (
        <div className="list">
        <h1>TO DO ADD FUNCTION</h1>
          <input onChange={(event)=>{this.changeHandler(event)}} value={this.state.word} maxLength ="4"/>
          <button onClick={()=>{this.addItem()}}>add item</button>
          <button onClick={()=>{this.clearList()}}>clear item list</button>
          <h2>To do list </h2>
          {this.state.list.join(" ")}
        </div>
      );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);