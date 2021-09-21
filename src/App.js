import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './utils/theme'
import { useApiData } from './hooks/useApiData'
import {
  Wrapper,
  Header,
  LeftCol,
  RightCol,
  Main,
  ListCol,
  ActiveMovieCol,
  List,
  ListItem,
  EpisodeNumber,
  EpisodeTitle,
  EpisodeDate,
  ActiveMovieTitle,
  ActiveMovieDescription,
  DirectedBy
} from './styles'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'

const App = () => {
  const { error, isLoading, data } = useApiData('https://star-wars-api.herokuapp.com/films')
  const [activeMovie, setActiveMovie] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredMovies, setFilteredMovies] = useState([])

  useEffect(() => {
    setFilteredMovies(
      data.filter((movie) =>
        movie.fields.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, data]);

  const sortByYear = () => {
    const sorted = [...filteredMovies].sort((a, b) => {
      return parseInt(a.fields.release_date.split('-')[0]) - parseInt(b.fields.release_date.split('-')[0]);
    });

    setFilteredMovies(sorted);
  };
  
  const sortByEpisode = () => {
    const sorted = [...filteredMovies].sort((a, b) => {
      return parseInt(a.fields.episode_id) - parseInt(b.fields.episode_id);
    });

    setFilteredMovies(sorted);
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header>
          <LeftCol>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Sort By
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => sortByYear()}>Year</Dropdown.Item>
                <Dropdown.Item onClick={() => sortByEpisode()}>Episode</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>        
          </LeftCol>
          <RightCol>
            <Form>
              <Form.Group>
                <Form.Control type="text" placeholder="Type to search" onChange={(e) => setSearchQuery(e.target.value)} />
              </Form.Group>
            </Form>
          </RightCol>
        </Header>

        <Main>
          <ListCol>
            {isLoading && 'Loading...'}
            <List className="movie-list">
              {filteredMovies.map((movie) => (
                <ListItem onClick={() => setActiveMovie(movie)} key={movie.id}>
                  <EpisodeNumber>Episode {movie.fields.episode_id}</EpisodeNumber>
                  <EpisodeTitle>{movie.fields.title}</EpisodeTitle>
                  <EpisodeDate>{movie.fields.release_date}</EpisodeDate>
                </ListItem>
              ))}
            </List> 
          </ListCol>
          <ActiveMovieCol>
            {!activeMovie && 'No movie selected'}
            {error && <div>{error.message}</div>}
            {activeMovie && (
              <>
                <ActiveMovieTitle>{activeMovie.fields.title}</ActiveMovieTitle>
                <ActiveMovieDescription>{activeMovie.fields.opening_crawl}</ActiveMovieDescription>
                <DirectedBy>Directed By: {activeMovie.fields.director}</DirectedBy>
              </>
            )}
          </ActiveMovieCol>
        </Main>
      </Wrapper>
    </ThemeProvider>
  )
}

export default App