import { useRef } from 'react';
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  flex-flow: column;
  height: calc(100vh - 300px);
  justify-content: center;
  margin-inline: 24px;
  svg {
    align-self: center;
  }
`

const Form = styled.form`
  padding: 16px 0;
  margin: 0 24px;
  .error {
    color: rgb(253,0,2);
  }
  opacity: ${props => props['aria-disabled'] ? 0.5 : 1};
`

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
`

const Button = styled.button`
  background: rgb(253,0,2);
  background: linear-gradient(28deg, rgba(253,0,2,1) 0%, rgba(159,0,129,1) 100%);
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
  cursor: pointer;
`

const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin: 12px 24px;
`

const Span = styled.span`
  display: block;
  text-align: center;
  margin-top: 24px;
`

const TextLink = styled.input`
  background-color: none;
  border: none;
  font-size: medium;
  font-weight: bold;
  color: rgb(253,0,2);
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: rgb(180,10,10);
  }
`

export default function UserForm({disabled, onSubmit, title, change, error}){
  const formRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(formRef.current.email.value, formRef.current.password.value)
  }
  
  return (
    <Div>
      <Title>{title}</Title>
      <Form aria-disabled={disabled} ref={formRef} onSubmit={handleSubmit}>
        <Input disabled={disabled} type="text" name="email" />
        <Input disabled={disabled} type="password" name="password" />
        <Button disabled={disabled} type="submit" value="Submit">{title}</Button>
        {error && <Span className="error">{error.message}</Span>}
        <Span>{
          title == "Register"
            ? <>
                <p>Already have an account? <TextLink disabled={disabled} type="button" onClick={() => change()} value={"Log in"} /></p>
              </>
            : <>
                <p>Dont have an account? <TextLink disabled={disabled} type="button" onClick={() => change()} value={"Sign up"} /></p>
              </>
          }
        </Span>
      </Form>
    </Div>
  )
}