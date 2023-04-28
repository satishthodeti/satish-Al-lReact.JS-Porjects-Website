// Write your code here
import './index.css'

const DestinationItem = props => {
  const {cityDetails} = props
  const {name, gitLink, projectLink, imgUrl} = cityDetails

  return (
    <li className="imgContainer">
      <img className="pImage" src={imgUrl} alt={name} />
      <h1>{name}</h1>
      <a href={projectLink} rel="noreferrer" target="_blank">
        Project Link: {projectLink}
      </a>
      <a
        className="secondAnchorLink"
        href={gitLink}
        rel="noreferrer"
        target="_blank"
      >
        GitHub Link: {gitLink}
      </a>
    </li>
  )
}
export default DestinationItem
