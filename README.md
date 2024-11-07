# Welcome to Historical Forecast!

- 📖 Main framework: [Remix](https://remix.run/docs)
- 📖 UI: [Shadcn](https://ui.shadcn.com/)
- 📖 API: [OpenWeatherMap](https://openweathermap.org/api)

## Future Improvements

- [ ] Add unit and playwright tests
- [ ] Zod validation for environment variables
- [ ] Considering using [Victory Chart](https://commerce.nearform.com/open-source/victory/docs/api/victory-zoom-container) it has built in zoom container
- [ ] Logging and error tracking with Sentry
- [ ] Add rate limiting
- [ ] Deploy to Fly.io, setup CDN and github actions

## Development

Run the dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.
