# Weather Dashboard

**Weather Dashboard** to aplikacja webowa w React, która pozwala przeglądać aktualną pogodę dla wybranych polskich miast. Aplikacja wykorzystuje nowoczesne technologie front-endowe oraz integrację z OpenWeatherMap API.

---

## Funkcjonalności

* Wyświetlanie listy miast z aktualną pogodą: temperatura, opis pogody, wilgotność, prędkość wiatru, ikona pogody.
* Wyszukiwanie miast po nazwie w czasie rzeczywistym.
* Przełącznik jednostek temperatury (Celsius/Fahrenheit), który zmienia jednostki globalnie.
* Oznaczanie ulubionych miast za pomocą gwiazdki, przechowywanie stanu w Redux i localStorage.
* Kliknięcie na kartę miasta przenosi do szczegółowego widoku danego miasta na całym ekranie.
* Pobieranie rzeczywistych danych pogodowych z OpenWeatherMap API za pomocą Axios.
* Układ kart miast w rzędach, wyśrodkowany na stronie, responsywny dla różnych rozmiarów ekranów.

---

## Technologie

* **React** – komponenty, hooki: `useState`, `useEffect`, `useMemo`, `useReducer`.
* **Redux** – globalny stan aplikacji (`temperature`, `favorites`).
* **React Router** – nawigacja między widokiem listy a szczegółowym widokiem miasta.
* **Axios** – pobieranie danych z OpenWeatherMap API.
* **CSS** – stylizacja komponentów i układ siatki kart.

---

## Struktura projektu

```
src/
├─ components/
│  ├─ CityCard.jsx
│  ├─ UnitSwitcher.jsx
├─ pages/
│  ├─ CityPage.jsx
│  └─ Home.jsx
├─ services/
│  └─ weatherApi.js
├─ store/
│  ├─ index.js
│  ├─ favoritesSlice.js
│  └─ temperatureSlice.js
├─ data/
│  └─ cities.js
├─ App.jsx
├─ index.css
└─ main.jsx
```

---

## Instalacja

1. Sklonuj repozytorium:

```bash
git clone <repo-url>
cd weather-app
```

2. Zainstaluj zależności:

```bash
npm install --legacy-peer-deps
```

3. Uruchom serwer developerski:

```bash
npm run dev
```

4. Otwórz przeglądarkę:

```
http://localhost:5174
```

---

## Konfiguracja API

1. Zarejestruj się na [OpenWeatherMap](https://openweathermap.org/api).
2. Wygeneruj klucz API.
3. Umieść go w pliku `src/services/weatherApi.js` w zmiennej `API_KEY`:

```javascript
const API_KEY = "TWÓJ_API_KEY";
```

---

## Użytkowanie

* Na stronie głównej zobaczysz listę polskich miast z aktualną pogodą.
* Możesz wyszukiwać miasta w czasie rzeczywistym.
* Przełącznik jednostek temperatury zmienia jednostki dla wszystkich kart.
* Kliknięcie gwiazdki oznacza miasto jako ulubione.
* Kliknięcie na kartę miasta otwiera pełnoekranowy widok szczegółowy wybranego miasta.
