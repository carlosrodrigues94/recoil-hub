import React, { FormEvent, useCallback,  useRef,  useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Container,Form } from './styles';
import { user } from '../../store/modules/user/atom'
import { useHistory } from 'react-router-dom';
import api from 'services/api';
const SignIn: React.FC = () => {
  const history = useHistory()

  const [gitHubUserName, setGitHubUserName] = useState('')

  const [data, setData] = useRecoilState(user)

  // const gitHubData = useRecoilValue(userGitHubData)

  const refInput = useRef<HTMLInputElement>(null)

  const getGitHubData = useCallback(async (userName:string) => {
    const response = await api.get(`/${userName}`)
    return response.data
  },[])

  const handleFocused = useCallback(() => {
    if(!refInput.current) return
    refInput.current.style.borderColor ='rgba(100,100,100,1)'
  },[])


  const handleSubmit = useCallback(async (event:FormEvent) => {
    event.preventDefault()

    if(!gitHubUserName) {
      if(!refInput.current) return
      refInput.current.style.borderColor = 'rgba(255,0,0,0.6)'
      return
    }

    const user = await getGitHubData(gitHubUserName)

    setData(user)

    history.push('/dashboard')

  },[setData, gitHubUserName, getGitHubData,history])

  return (

    <Container>
      <Form onSubmit={handleSubmit}>
        <img src="https://cdn.dribbble.com/users/31864/screenshots/3666062/free_logos_dribbble_ph.jpg?compress=1&resize=400x300" alt="logo"/>
        <input placeholder="Git hub user-name"
          onChange={(event) => setGitHubUserName(event.target.value)}
          value={gitHubUserName}
          ref={refInput}
          onFocus={handleFocused}
        />
        <button>Sign In</button>
      </Form>
    </Container>)
}

export default SignIn;
