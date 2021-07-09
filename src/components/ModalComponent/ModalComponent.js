import './ModalComponent.css'

const ModalComponent = (props) => {

  const modalVisibilityHandler = () => {
    console.log('CLOSED');
    props.isModalVisible(false);
  }

  return (
    <div className={'modalContainer'}>
      <div onClick={modalVisibilityHandler} className={'overlay'}/>
      <div className={'body'}>
        <div className={'title'}>Invalid input</div>
        <div className={'errorMessage'}>{props.children}</div>
        <div className={'buttonContainer'}>
          <button className={'modalButton'} type={'button'} onClick={modalVisibilityHandler}>Okay</button>
        </div>
      </div>
    </div>
  )
}

export default ModalComponent;
