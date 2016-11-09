
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { MuiThemeProvider } from 'material-ui'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Snackbar from 'material-ui/Snackbar'
import Header from '../../components/Header'
import style from './style.css'
import { navigate } from '../../actions'

injectTapEventPlugin()

const listRoute = [
  { name: 'Kênh', link: '/channels' },
  { name: 'Metacontent', link: '/metacontents' },
  { name: 'Từ khóa', link: '/keywords' },
]

class App extends Component {
  constructor(props) {
    super(props)
    this.handleChangePath = this.handleChangePath.bind(this)
  }

  handleChangePath(path) {
    this.props.navigate(path)
  }

  render() {
    const { children, location, auth } = this.props
    const loggedIn = auth.access_token && auth.expires_on > new Date().getTime()
    return (
      <MuiThemeProvider>
        <div className={style.normal}>
          <Header
            onChangeTab={this.handleChangePath}
            path={location.pathname}
            loggedIn={loggedIn}
            navigate={this.props.navigate}
            zDepth={1}
            listRoute={listRoute}
          />
          <div className={style.children}>
            {children}
          </div>
          <Snackbar
            open={!!this.props.success || !!this.props.error}
            message={this.props.success ? this.props.success : this.props.error}
            autoHideDuration={4000}
          />
        </div>
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.object,
  navigate: React.PropTypes.func.isRequired,
  location: React.PropTypes.object,
  auth: React.PropTypes.object,
  success: React.PropTypes.string,
  error: React.PropTypes.string,
}

function mapStateToProps(state) {
  const { auth } = state
  const { message: { success, error } } = state
  return {
    auth,
    success,
    error,
  }
}

export default connect(mapStateToProps, {
  navigate,
})(App)
