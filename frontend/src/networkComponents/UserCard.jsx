import * as Card from "./Card.js";
import { useHistory } from "react-router";

export default function UserCard({
  profile_image,
  username,
  introduction,
  id,
}) {
  
  const history = useHistory()
  const Move = () => {
    history.push(`/main/user/${id}`)
  }
  return (
    <Card.Container>
      <Card.Corner />
      <Card.UserCardIcon
        src={`${process.env.REACT_APP_BASE_URL}/${profile_image}`}
        alt={profile_image}
      />
      <Card.Username>{username}</Card.Username>
      <Card.Introduction>{introduction}</Card.Introduction>
      
      <Card.Button onClick={Move}>정보 보기</Card.Button>
      
    </Card.Container>
  );
}
