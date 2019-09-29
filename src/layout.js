/** @jsx jsx */
import { jsx, Styled, useColorMode } from 'theme-ui'
import { Link } from 'gatsby'
import { Global } from '@emotion/core'

const modes = [
  'light',
  'black',
  'dark',
  'deep',
  'hack',
  'pink',
]

const ColorButton = ({
  mode,
  ...props
}) =>
  <button
    {...props}
    title='Cycle Color Mode'
    sx={{
      display: 'inline-block',
      appearance: 'none',
      bg: 'transparent',
      color: 'inherit',
      p: 1,
      m: 0,
      border: 0,
      borderRadius: 9999,
      ':hover,:focus': {
        color: 'primary',
        boxShadow: '0 0 0 3px',
        outline: 'none',
      }
    }}>
    <svg
      viewBox='0 0 32 32'
      width='24'
      height='24'
      fill='currentcolor'
      sx={{
        display: 'block',
      }}>
      <circle
        cx='16'
        cy='16'
        r='14'
        fill='none'
        stroke='currentcolor'
        strokeWidth='4'
      />
      <path
        d={`
          M 16 0
          A 16 16 0 0 0 16 32
          z
        `}
      />
    </svg>
  </button>

export default props => {
  const [mode, setMode] = useColorMode()
  const cycleMode = e => {
    const i = modes.indexOf(mode)
    const n = (i + 1) % modes.length
    setMode(modes[n])
  }

  return (
    <div
      sx={{
        variant: 'styles.root',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}>
      <Global
        styles={{
          '*': {
            boxSizing: 'border-box',
          },
          body: {
            margin: 0,
          }
        }}
      />
      <header
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          maxWidth: 'wide',
          mx: 'auto',
          px: 3,
          py: 4,
        }}>
        <Styled.a
          as={Link}
          to='/'
          sx={{
            variant: 'styles.navitem',
            mr: 3,
          }}>
          {` `}Dev Arcade
        </Styled.a>
        <div sx={{ mx: 'auto' }} />
        <ColorButton
          mode={mode}
          onClick={cycleMode}
        />
      </header>
      <main
        sx={{
          width: '100%',
          maxWidth: 'wide',
          px: 3,
          mx: 'auto',
          flex: '1 1 auto',
        }}>
        {props.children}
      </main>
      <footer
        sx={{
          px: 3,
          py: 5,
          width: '100%',
          maxWidth: 'wide',
          mx: 'auto',
        }}>
        <div
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            fontSize: 0,
          }}>
          <div sx={{ my: 2 }}>
            <a
              href="https://github.com/joshbuchea/dev-arcade/"
              rel="noopener noreferrer"
              sx={{
                variant: 'styles.navitem',
              }}
              target="_blank"
              title="View Source"
            >
              View Source
            </a>
          </div>
          <div sx={{ mx: 'auto' }} />
          <div sx={{ my: 2 }}>
            Made by{` `}
            <a
              href='https://twitter.com/joshbuchea'
              rel="noopener noreferrer"
              sx={{
                variant: 'styles.navitem',
              }}
              target="_blank"
              title="View Source"
            >
              @joshbuchea
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
