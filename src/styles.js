import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  padding: ${({ theme }) => theme.gutter};
  display: flex;
  border: 1px solid ${({ theme }) => theme.colorGray};
`

export const LeftCol = styled.div``

export const RightCol = styled.div`
  padding-left: ${({ theme }) => theme.gutter};
  flex: 2;
`

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex: 2;
`

export const ListCol = styled.div`
  width: 50%;
  border-right: 1px solid ${({ theme }) => theme.colorGray};
`

export const ActiveMovieCol = styled.div`
  width: 50%;
  padding: ${({ theme }) => theme.gutter};
`

export const List = styled.ul`
  padding-left: 0;
`

export const ListItem = styled.li`
  display: flex;
  padding: ${({ theme }) => theme.gutterSmall + ' ' + theme.gutter};
  border-bottom: 1px solid ${({ theme }) => theme.colorGray};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colorGrayLight};
  }
`

export const EpisodeNumber = styled.div`
  margin-right: ${({ theme }) => theme.gutter};
`

export const EpisodeTitle = styled.div``

export const EpisodeDate = styled.div`
  margin-left: auto;
`

export const ActiveMovieTitle = styled.div`
  font-size: 2rem;
  margin-bottom: ${({ theme }) => theme.gutter};
`

export const ActiveMovieDescription = styled.div`
  margin-bottom: ${({ theme }) => theme.gutter};
`

export const DirectedBy = styled.div``

