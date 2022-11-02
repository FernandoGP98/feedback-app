import PropTypes from 'prop-types'

function header({user, bgColor, txtColor}) {

  const headerStyles={
    backgroundColor: bgColor,
    color: txtColor,
  }

  return (
    <header style={headerStyles}>
        <div className="container">
            <h2>Bienvenido, {user.name} {user.apellidoP} de {user.edad} años</h2>
        </div>
    </header>
  )
}

header.defaultProps = {
    user:{
      id:1, name: "Usuario", apellidoP: "AP", edad: "999"
    },
    bgColor: 'rgba(0,0,0,0.4)',
    txtColor: '#ff6a95',
}

header.propTypes = {
    user: PropTypes.object,
    bgColor: PropTypes.string,
    txtColor: PropTypes.string,
}

export default header