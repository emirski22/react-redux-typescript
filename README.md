# Getting Started

Project structure:
```
|-app/ <-- Инициализирующая логика приложения(настройки, стили и провайдеры для всего приложения)
|--providers/
|--styles/
|--types/
|--App.tsx
|--...
↓
|-pages/ <-- (страницы) — композиционный слой для сборки полноценных страниц из сущностей, фич и виджетов
|--Profile/
|--Auth/
|--...
↓
|-widgets/ <-- (виджеты) — композиционный слой для соединения сущностей и фич в самостоятельные блоки(например, IssuesList, UserProfile).
|---IssuesList/
|---UserProfile/
|---Header/
|---Sidebar/
|---...
↓
|-features/ <-- (фичи) — взаимодействия с пользователем, действия, которые несут бизнес-ценность для пользователя.(например, SendComment, AddToCart, UsersSearch)
|---SendComment/
|---AddToCart/
|---UsersSearch/
|---...
↓
|-entities/ <-- (сущности) — бизнес-сущности.(например, User, Product, Order)
|---User/
|---Product/
|---Order/
|---...
↓
|-shared/ <-- переиспользуемый код, не имеющий отношения к специфике приложения/бизнеса.(например, UIKit, libs, API)
|---types/ <-- Глобальные типы не зависящие от предметной области
|---api/ <-- Апишка
|---ui/ <-- UI не зависящий от предметной области
|---hooks/ <-- Хуки не зависящие от предметной области
```

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build:dev`

Builds the app for production to the `build` folder.\
It correctly bundles React in development mode.

### `npm run build:prod`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run analyze`

Analyze project

### `npm run lint:ts`

Linting typescript files

### `npm run lint:ts:fix`

Fix lint typescript files

### `npm run lint:scss`

Linting style files

### `npm run lint:scss:fix`

Fix lint style files

### `npm run format`

Formatting files

