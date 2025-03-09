import { ChangeEvent, useEffect, useState } from "react";
import "./List.css";
import Card from "../card/Card";
import DevelopmentGroup from "../../../models/developmentGroup/developmentGroup";
import Meeting from "../../../models/meeting/meeting";
import developmentGroupsService from "../../../services/developmentGroups";
import meetingsService from "../../../services/meetings";

export default function List(): JSX.Element {
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [developmentGroups, setDevelopmentGroups] = useState<DevelopmentGroup[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const developmentGroupsFromService = await developmentGroupsService.getAll();
        setDevelopmentGroups(developmentGroupsFromService);
      } catch (e) {
        alert(e);
      }
    })();
  }, []);

  async function developmentGroupChanged(event: ChangeEvent<HTMLSelectElement>) {
    const groupId = event.currentTarget.value;
    const currentDevelopmentGroup = await meetingsService.getPerJob(groupId)
    setMeetings(currentDevelopmentGroup);
  }

  return (
    <div className="List">
      <div className="jobsSelection">
        <select onChange={developmentGroupChanged}>
          <option value="" disabled selected>
            please select category meeting...
          </option>
          {developmentGroups.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div>
        {meetings.map((e) => (
          <Card meeting={e} removeMeeting={function (): void {
            throw new Error("meeting deleted");
          } } />
        ))}
      </div>
    </div>
  );
}