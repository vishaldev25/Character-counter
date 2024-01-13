import {ListItem, ListPara, Number} from './styledComponents'

const CounterItem = props => {
  const {inputValue, onDeleteItem} = props
  const {id, word, charLength} = inputValue

  const onDeleteValue = () => {
    onDeleteItem(id)
  }
  return (
    <ListItem>
      <ListPara onClick={onDeleteValue}>
        {word}: <Number>{charLength}</Number>
      </ListPara>
    </ListItem>
  )
}

export default CounterItem
