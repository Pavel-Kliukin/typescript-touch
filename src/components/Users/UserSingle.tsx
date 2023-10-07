import { useEffect } from "react"
import { Album, getUserAlbums, getUsers } from "../../features/usersSlice"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { useParams } from "react-router-dom"

const UserSingle = () => {

  const dispatch = useAppDispatch()
  const users = useAppSelector(state => state.users.data)
  const {userId} = useParams()
  const albums = useAppSelector(state => state.users.usersAlbums)

  useEffect(() => {
    if (users.length === 0) {
      dispatch(getUsers())
    }
    
    for (const user of users) {
      
      if (user.id === Number(userId)) {
        dispatch(getUserAlbums(user.id))
      }
    }
  },[dispatch, users])



  
  // We should return a table of the users album data here
  // Remember that the user table has 3 field of data: id, title, and userId
  // We are only interested in the id and title of each album
  return (
    <div>
      <h1>UserSingle</h1>
      <h2>Albums</h2>
      <table>
        <thead>
          <tr>
            <th>Album ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {albums.map((album: Album) => (
            <tr key={album.id}>
              <td>{album.id}</td>
              <td>{album.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserSingle