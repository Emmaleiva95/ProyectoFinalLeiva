

const LoaderSpinner = ({widthSpinner = '300px'}) => {
  return (
    <img src="/assets/img/loader.gif" style={ {width:widthSpinner, margin:'auto'} } alt="Cargando.."/>
  )
}

export default LoaderSpinner