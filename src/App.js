import React, { Component } from 'react';


import './button.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      newItem:"",
      list:[]
    }
  }


updateInput(key, value){
  this.setState({
    [key]: value
  })
}
  addItem(){
    //criar item com ID unica
    if(this.state.newItem!==""){
      const newItem={
        id: 1 + Math.random(),
        value: this.state.newItem.slice()
      };
      //copiar a lista de itens atuais
      const list = [...this.state.list];

      //Adiciona novo Item para a lista
        list.push(newItem)

      //Atualiza o estado com uma nova lista e reseta o new item
      this.setState({
      list,
      newItem:""
  })
  }else alert("Insira algo")
}

deleteItem(id){
  //copia a lista atual de items
  const list = [...this.state.list];

  //filtra o item sendo deletado
  const updatedList = list.filter(item => item.id !== id);

  this.setState({list: updatedList});
}
  render() {
    return (
    <div className="App">
        <div/>
        <header className="App-header">

        <div className="App-logo">___________________________________
        </div>
        <div className="App-title">Tarefas</div>
        </header>
          <br/>
          <div className="text">
          <input
            type="text"
            
            placeholder="Anote Aqui"
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
           
          />
          </div>
          
          <button 
            onClick={() => this.addItem()}
            >
              <div className="button">Incluir</div>
              </button>
              <br/>
              <ul>
                {this.state.list.map(item => {
                  return(
                    <li key={item.id}>
                    <div className="item">
                      {item.value}
                      </div>
                      <button
                        onClick={() => this.deleteItem(item.id)}
                        >
                        <div className="button">Resolvido</div>
                      </button>
                    </li>
                  )
                })}
              </ul>
    </div>
    );
  }
}

export default App;
