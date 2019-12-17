import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { asyncFetchUser } from '../../store/actions'

// import { Container } from './styles'

function Home({
  user,
  isLoading,
  //actions
  fetchUser,
}) {
  
  useEffect(() => {
    if(!isLoading && user === null) {
      fetchUser({user: 'hnrqsss' })
    }
  }, [user, isLoading, fetchUser])
  
  return (
    <div />
  )
}

const mapStateToProps = ({ github }) => ({
  user: github.user,
  isLoading: github.isLoading,
})

const mapDispatchToProps = dispatch => ({
  fetchUser: (username) => dispatch(asyncFetchUser(username))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Home)