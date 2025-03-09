
import { useEffect, useState } from 'react'
import './Add.css'
import { useForm } from 'react-hook-form'
import Draft from '../../../models/meeting/meetingDraft'
import { useNavigate } from 'react-router-dom'
import DevelopmentGroup from '../../../models/developmentGroup/developmentGroup'
import developmentGroupsService from '../../../services/developmentGroups'
import meetingsService from '../../../services/meetings'

export default function Add(): JSX.Element {
  const [developmentGroups, setDevelopmentGroups] = useState<DevelopmentGroup[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const DevelopmentGroups = await developmentGroupsService.getAll()
        setDevelopmentGroups(DevelopmentGroups)
      } catch (e) {
        alert(e)
      }
    })()
  }, [])

  const { register, handleSubmit, formState } = useForm<Draft>()

  const navigate = useNavigate()

  async function submit(draft: Draft) {
    try {
      await meetingsService.add(draft)
      alert('Meeting added successfully!')
      navigate('/pages/list')
    } catch (e) {
      alert(e)
    }
  }

  return (
    <div className="Card">
      <h2>Add New Meeting</h2>
      <form onSubmit={handleSubmit(submit)}>
        {/* Development Group Selection */}
        <div>
          <label htmlFor="groupId">Development Group:</label>
          <select
            id="groupId"
            {...register('groupId', { required: "Development group is required" })}
          >
            <option value="" disabled>Select a group</option>
            {developmentGroups.map(({ id, name }) => (
              <option key={id} value={id}>{name}</option>
            ))}
          </select>
          <span className="error">{formState.errors.groupId?.message}</span>
        </div>

        {/* Start Date and Time */}
        <div>
          <label htmlFor="startDatetime">Start Date and Time:</label>
          <input
            type="datetime-local"
            id="startDatetime"
            {...register('startDatetime', { required: "Start date and time is required" })}
          />
          <span className="error">{formState.errors.startDatetime?.message}</span>
        </div>

        {/* End Date and Time */}
        <div>
          <label htmlFor="endDatetime">End Date and Time:</label>
          <input
            type="datetime-local"
            id="endDatetime"
            {...register('endDatetime', { required: "End date and time is required" })}
          />
          <span className="error">{formState.errors.endDatetime?.message}</span>
        </div>

        {/* Meeting Description */}
        <div>
          <label htmlFor="meetingDescription">Meeting Description:</label>
          <textarea
            id="meetingDescription"
            {...register('meetingDescription', { required: "Meeting description is required" })}
          />
          <span className="error">{formState.errors.meetingDescription?.message}</span>
        </div>

        {/* Meeting Room */}
        <div>
          <label htmlFor="meetingRoom">Meeting Room:</label>
          <input
            type="text"
            id="meetingRoom"
            {...register('meetingRoom', { required: "Meeting room is required" })}
          />
          <span className="error">{formState.errors.meetingRoom?.message}</span>
        </div>

        <button type="submit">Add Meeting</button>
      </form>
    </div>
  )
}
