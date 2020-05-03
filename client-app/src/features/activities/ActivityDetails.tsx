import React, { useContext, useEffect } from 'react';
import {  Grid } from 'semantic-ui-react';
import ActivityStore from '../../app/stores/activityStore';
import { observer } from 'mobx-react-lite';
import { RouteComponentProps } from 'react-router-dom';
import { LoadingComponent } from '../../app/layout/LoadingComponent';
import ActivityDetailedHeader from './details/ActivityDetailedHeader';
import ActivityDetailedInfo from './details/ActivityDetailedInfo';
import ActivityDetailedChat from './details/ActivityDetailedChat';
import ActivityDetailedSidebar from './details/ActivityDetailedSidebar';

interface DetailParams {
  id: string;
}


const ActivityDetails: React.FC<RouteComponentProps<DetailParams>> = ({
  match
}) => {//========destructured props========

  const activityStore = useContext(ActivityStore);
  const {activity, loadActivity, loadingInitial} = activityStore;

  useEffect(() => {
    loadActivity(match.params.id)
  }, [loadActivity, match.params.id]);

  if (loadingInitial || !activity) return <LoadingComponent content='loading activity...' />

    return (
       <Grid>
         <Grid.Column width={10}>
            <ActivityDetailedHeader activity={activity} />
            <ActivityDetailedInfo activity={activity} />
            <ActivityDetailedChat />
         </Grid.Column>
         <Grid.Column width={6}>
           <ActivityDetailedSidebar />
           
         </Grid.Column>
       </Grid>
    )
}

export default observer(ActivityDetails);
