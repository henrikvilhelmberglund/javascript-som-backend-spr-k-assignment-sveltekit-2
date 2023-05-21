# Javascript som backend-språk assignment sveltekit 2

Henrik Berglund FEND22

## Bankademin

Projektstruktur:

### Frontend (klientkod)

- Ligger i mappen (frontend)

- Alla filer som heter +page.svelte/+layout.svelte

- Alla +page.js med if (browser) eller

```js
export const prerender = false;
export const ssr = false;
```

körs bara på klienten.

### Backend (serverkod)

- hooks.server.js - startar connection mellan SvelteKit och MongoDB (dokumentation [här](https://kit.svelte.dev/docs/hooks))

- +server.js (endpoints)

/api-routen är ett REST-api:

- /api/account - dynamiskt endpoint med GET/PUT/DELETE för att visa/ändra information om enskilda konton eller ta bort konton

- /api/accounts - endpoint med GET för att hitta information om användarens konton och POST för att skapa ett nytt konto

- /api/auth - innehåller fyra endpoints:

  - /api/auth/loggedin - GET för att se om användaren är inloggad

  - /api/auth/login - POST för att logga in

  - /api/auth/logout - POST för att logga ut

  - /api/auth/register - POST för att registera sig

### Småbuggar

- Inte alls mobile first så den är ännu fulare på mobil.

- Cookies tas bort efter 5 minuter oavsett om man använder appen eller inte så man kan bli utloggad om man är kvar länge så man måste logga in igen

- Meddelandet som visas när man sätter in/tar ut pengar kan bugga lite om man trycker många gånger snabbt (om en setTimeout() körs redan)

- Det blir lite 401-spam i konsollen när man hoverar över länkar eftersom sidorna preloadas då, men det kanske inte gör så mycket

### Disclaimer

Det finns antagligen bättre sätt att göra allt det här på men det här är något som jag fick fungera (?) iallafall.

Egentligen när man använder SvelteKit vill man nog inte dela upp frontend/backend lika mycket genom att skicka allt genom fetches utan istället använda t.ex form actions och +server.page.js-filer för att ladda data istället. Men det var med i uppgiften att skicka allt genom JSON (tror jag).

Det är möjligt att jag har varit otydlig här också men om något verkar förvirrande kanske det står något i SvelteKit dokumentationen: [SvelteKit](https://kit.svelte.dev/docs/introduction)
eller [Svelte](https://svelte.dev/docs)
