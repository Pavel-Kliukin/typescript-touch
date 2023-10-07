import { Link } from "react-router-dom";
import { User } from "../../features/usersSlice"
import { Card, CardContent, Typography } from "@mui/material";

interface UsersCardProps {
  user: User
}

const UsersCard = ({ user }: UsersCardProps) => {

  return (
    <Link to={`/users/${user.id}`} style={{textDecoration: "none"}}>
      <Card sx={{maxWidth:345, margin:"1rem"}}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {user.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{mt: 1}}>
            {user.username}, {user.email}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{mt: 1}}>
            {user.address.street}, {user.address.suite}
            <br />
            {user.address.city}, {user.address.zipcode}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
}

export default UsersCard