import './CardComponent.css'

const CardComponent = (props) => {

  return (
    <div className={'card'}>{props.children}</div>
  )
}

export default CardComponent;
