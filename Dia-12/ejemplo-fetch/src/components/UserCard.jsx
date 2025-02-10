export const UserCard = ({ user }) => {
    const { firstName, lastName, age, image, hair } = user;
  
    const cardStyle = {
      border: `2px solid ${hair.color}`,
      padding: '10px',
      margin: '10px',
      borderRadius: '5px',
    };
  
    return (
      <div style={cardStyle}>
        <img src={image} alt={`${firstName} ${lastName}`} width="100" />
        <h2>{`${firstName} ${lastName}`}</h2>
        <p>Edad: {age}</p>
      </div>
    );
  };