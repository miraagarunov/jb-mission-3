import Meeting from "../../../models/meeting/meeting";
import meetingsService from "../../../services/meetings";
import './Card.css';

interface CardProps {
  meeting: Meeting;
  removeMeeting(id: string): void;
}

export default function Card(props: CardProps): JSX.Element {
  const { id, startDatetime, endDatetime, meetingDescription, meetingRoom } = props.meeting;
  const { name } = props.meeting.developmentGroup;

  async function deleteMe() {
    try {
      await meetingsService.remove(id);
      props.removeMeeting(id); 
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div className="Card">
      <h4>Start Date: {(new Date(startDatetime)).toLocaleDateString()}</h4>
      <p>End Date: {(new Date(endDatetime)).toLocaleDateString()}</p>
      <p>Meeting Description: {meetingDescription}</p>
      <p>Meeting Room: {meetingRoom}</p>
      <p>Development Group: {name}</p>

      <div>ס
        <button onClick={deleteMe}>Delete</button>
      </div>
    </div>
  );
}
