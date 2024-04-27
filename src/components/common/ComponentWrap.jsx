import './ComponentCommon.css'

function ComponentWrap({ children }) {
  return (
    <div className="component-wrap">
      { children }
    </div>
  )
}

export default ComponentWrap
