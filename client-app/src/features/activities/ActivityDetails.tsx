import React, { useContext } from 'react'
import { Card, Button } from 'semantic-ui-react'
import { IActivity } from '../../app/models/activity'
import ActivityStore from '../../app/stores/activityStore'
import { observer } from 'mobx-react-lite'

interface IProps {
    setEditMode: (setEditMode: boolean) => void;
    setSelectedActivity: (IActivity: IActivity | null) => void; 
}

export const ActivityDetails: React.FC<IProps> = ({setEditMode, setSelectedActivity}) => {
  const activityStore = useContext(ActivityStore);
  const {selectedActivity: activity} = activityStore;
    return (
        <Card fluid>
        <img src={`/assets/images/categoryImages/${activity!.category}.jpg`} alt='an array of pictures'/>
        <Card.Content>
          <Card.Header>{activity!.title}</Card.Header>
          <Card.Meta>
            <span>{activity!.date}</span>
          </Card.Meta>
          <Card.Description>
            {activity!.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button.Group widths={2}>
              <Button onClick={() => setEditMode(true)}  basic color='blue' content='Edit'/>
              <Button onClick={()=> setSelectedActivity(null) } basic color='grey' content='Cancel'/>
          </Button.Group>
        </Card.Content>
      </Card>
    )
}

export default observer(ActivityDetails);