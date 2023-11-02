import React from 'react'

const UserProfile = ({ displayName, username, email, isEmailVerified }) => {
  return (
    <div>
        <div>
            <div>
                <span>
                    Display Name: {''}
                    {displayName.length > 30 
                    ? displayName.slice(0,28).concat('...')
                    :  displayName 
                    }
                </span>
            </div>
            <div>
                <span>User Name: {username}</span>
            </div>
            <div>
                <span>Email : {email}</span>
            </div>
            <div>
                Verified : { isEmailVerified ? 'Email Verified' : 'Email Not Verified' }
            </div>
        </div>
    </div>
  )
}

export default UserProfile