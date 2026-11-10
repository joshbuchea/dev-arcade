# :joystick: Dev Arcade

Play Games, Level Up

[![Deploy to GitHub Pages](https://github.com/joshbuchea/dev-arcade/actions/workflows/deploy.yml/badge.svg)](https://github.com/joshbuchea/dev-arcade/actions/workflows/deploy.yml)

## Development

This site is built with [Eleventy](https://www.11ty.dev/).

### Install dependencies

```bash
yarn install
```

### Run development server

```bash
yarn start
```

### Build for production

```bash
yarn run build
```

The built site will be in the `_site` directory.

### Deployment

Pushes to `master` are built and deployed to GitHub Pages by the [deploy workflow](.github/workflows/deploy.yml).

### Screenshots

Images are 1280x800 PNGs, and are stored in `src/images/`. They are referenced in `src/_data/games.json`.

## :memo: TODO

- [ ] Add Avatar/Logo?
- [ ] Add Music?
- [ ] Add New Themes (Retro, ?)
- [ ] Add Easter Egg(s)? (Cheat Codes, Console Message, ?)

Potential Colors for Retro Theme:

- #650D89
- #A461D7
- #D40078
- #F6019D
- #F706CF
- #FD3777

## :computer: Contributing

Contributions are very welcome. Please check out the [contributing document](CONTRIBUTING.md).

## :bookmark: License

This project is [MIT](LICENSE) licensed.
