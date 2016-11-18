
import React, { PropTypes } from 'react'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar'
import { FlatButton } from 'material-ui'
import Paper from 'material-ui/Paper'
import FontIcon from 'material-ui/FontIcon'
import globalstyle from '../../style/style.css'
import UsersTable from './usersTable'
import CreateUser from '../CreateUser'


const Users = (props) => {
  const { users, onCreateUser, onDeleteUser, onSubmit, open, onClose } = props
  return (
    <Paper className={globalstyle.centerbody}>
      <Toolbar
        style={{
          backgroundColor: 'white',
        }}
      >
        <ToolbarGroup>
          <ToolbarTitle text="DANH SÁCH USER CỦA HỆ THỐNG" />
        </ToolbarGroup>
        <ToolbarGroup>
          <FlatButton
            label="Tạo"
            primary
            icon={<FontIcon className="material-icons">add</FontIcon>}
            onClick={onCreateUser}
          />
        </ToolbarGroup>
      </Toolbar>
      <UsersTable
        users={users}
        onDeleteUser={onDeleteUser}
      />
      <CreateUser
        onSubmit={onSubmit}
        open={open}
        onClose={onClose}
      />
    </Paper>
  )
}

Users.propTypes = {
  users: PropTypes.array,
  onCreateUser: PropTypes.func.isRequired,
  onDeleteUser: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
}

export default Users
