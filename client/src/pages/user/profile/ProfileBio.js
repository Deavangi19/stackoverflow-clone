import React from 'react'

const ProfileBio = ({user}) => {
  return(
      <div>
          <div>
          {user?.tags.length !== 0 ?(
                  <>
                    <h4>Tags Watched</h4>
                      {
                          user?.tags.map((tag)=>(
                              <p key={tag}>{tag}</p>
                          ))
                      }
                  </>
              ):<div>0 tags watched</div>
          }
          </div>
          <div>
              {
                  user?.about ?(
                     <p>{user.about}</p>
                  ):(
                      <p>No Bio Found</p>
                  )
              }
          </div>
      </div>
  )
}
export default ProfileBio