import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { user } from '../../store/modules/user/atom'

 import { Container, CardUserData } from './styles';

const Dashboard: React.FC = () => {
  const history = useHistory()
  const [data] = useRecoilState(user)

  useEffect(() => {
    if(!data.url){
      history.push('/')
    }
  },[data,history])

  return (
    <Container>
      <CardUserData>
        <img src={data.avatar_url} alt="avatar"/>
        <strong>Name: {data.name}</strong>
        <strong>Location: {data.location}</strong>
        <strong>Member since: {new Date(data.created_at).toDateString()}</strong>
        <strong>Link: <a href={`https://github.com/${data.login}`} target="__blank">Git-Hub</a></strong>
      </CardUserData>
    </Container>
  )
}

export default Dashboard;
