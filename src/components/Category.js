import styled from 'styled-components'

export const Anchor = styled.a`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`

export const Image = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
  border-radius: 50%;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  height: 75px;
  width: 75px;
`

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export default function Category({ cover = DEFAULT_IMAGE, path, emoji = '?' }) {
  return (
    <Anchor href={path}>
      <Image src={cover} alt={emoji} />
      <span>{emoji}</span>
    </Anchor>
  )
}