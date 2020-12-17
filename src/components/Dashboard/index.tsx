import React from 'react';
import { useRecoilState } from 'recoil';

import { user } from '../../store/modules/user/atom'

 import { Container, CardUserData } from './styles';

const Dashboard: React.FC = () => {

  const [data] = useRecoilState(user)

  return (
    <Container>
      <CardUserData>
        <img src={data.avatar_url} alt="avatar"/>
        <strong>Name: {data.name}</strong>
        <strong>Location: {data.location}</strong>
        <strong>Member since: {new Date(data.created_at).toDateString()}</strong>
        <strong>Link: <a href={data.url}>{data.url}</a></strong>
      </CardUserData>
    </Container>
  )
}

export default Dashboard;
