/** @jsx jsx */
import { jsx } from 'theme-ui'

import Image from './image'
import games from '../games'

const styles = {
  games: {
    display: 'grid',
    gridGap: '24px',
    gridTemplateColumns: 'repeat(auto-fill, minmax(296px, 1fr))',
    margin: 'auto',
    maxWidth: '1280px',
    padding: '4rem 0',
    textAlign: 'center',
  },
  game: {
    display: 'block',
    marginBottom: '24px',
    textDecoration: 'none',
    width: '100%',
  },
  gameImage: {
    borderStyle: 'solid',
    borderWidth: '2px',
    height: 'auto',
    marginBottom: '.5rem',
    width: '100%',
  },
}

const Games = () => (
  <div style={styles.games}>
    {games.map((game) => {
      const { image, title, url, } = game;

      return(
        <a
          key={title}
          href={url}
          rel="noopener noreferrer"
          style={styles.game}
          target="_blank"
          sx={{
            variant: 'styles.a',
          }}
        >
          <Image
            alt={`${title} screenshot`}
            filename={image}
            style={styles.gameImage}
            sx={{
              borderColor: 'gray',
            }}
          />
          {title}
        </a>
      )
    })}
  </div>
)

export default Games
