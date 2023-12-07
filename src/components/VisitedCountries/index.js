import './index.css'

const VisitedCountries = props => {
  const {mapDetails, onClickRemove} = props
  const {imageUrl, name, id, isVisited} = mapDetails

  const onClickRemoveBtn = () => {
    onClickRemove(id)
  }

  return (
    <>
      {isVisited ? (
        <li className="list-img">
          <img src={imageUrl} alt="thumbnail" className="image-map" />
          <div className="btn-name-cont">
            <p className="name">{name}</p>
            <button
              className="remove-btn"
              type="button"
              onClick={onClickRemoveBtn}
            >
              Remove
            </button>
          </div>
        </li>
      ) : null}
    </>
  )
}

export default VisitedCountries
