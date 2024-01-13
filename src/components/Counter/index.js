import {Component} from 'react'

import {v4} from 'uuid'

import {
  App,
  AppContainer,
  CounterHeading,
  CounterContainer,
  BossHeading,
  Image,
  FormContainer,
  Input,
  Button,
} from './styledComponents'

import CounterItem from '../CounterItem'

class Counter extends Component {
  state = {
    inputText: '',
    counterList: [],
  }

  onChangeInput = event => {
    this.setState({inputText: event.target.value})
  }

  onDeleteItem = id => {
    const {counterList} = this.state
    const filtered = counterList.filter(each => each.id !== id)
    this.setState({
      counterList: filtered,
    })
  }

  onAddButton = event => {
    event.preventDefault()
    const {counterList, inputText} = this.state
    const newInput = {
      id: v4(),
      word: inputText,
      charLength: inputText.length,
    }
    this.setState(prev => ({
      counterList: [...prev.counterList, newInput],
      inputText: '',
    }))
    return counterList
  }

  renderInputElement = () => {
    const {inputText} = this.state
    return (
      <FormContainer onSubmit={this.onAddButton}>
        <Input
          type="text"
          value={inputText}
          onChange={this.onChangeInput}
          placeholder="Enter the Characters here"
        />
        <Button type="submit">Add</Button>
      </FormContainer>
    )
  }

  renderCounterItem = () => {
    const {counterList} = this.state
    return (
      <div>
        <ul>
          {counterList.map(each => (
            <CounterItem
              inputValue={each}
              key={each.id}
              onDeleteItem={this.onDeleteItem}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {counterList} = this.state
    return (
      <App>
        <AppContainer>
          <BossHeading>Count the characters like a Boss..</BossHeading>
          {counterList.length === 0 ? (
            <Image
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
            />
          ) : (
            this.renderCounterItem()
          )}
        </AppContainer>
        <CounterContainer>
          <CounterHeading>Character Counter</CounterHeading>
          {this.renderInputElement()}
        </CounterContainer>
      </App>
    )
  }
}

export default Counter
