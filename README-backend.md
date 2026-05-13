# Backend Setup

Стек:
- `Node.js + Express`
- `MySQL`
- `Socket.IO`

## 1. Установка

```powershell
npm install
```

## 2. Настройка `.env`

Скопируй `.env.example` в `.env` и выставь свои параметры MySQL.

## 3. Создание базы

1. Открой MySQL Workbench
2. Создай базу `monopoly_armenia`
3. Выполни [database/schema.sql](C:\Users\Hawk\OneDrive\Рабочий стол\Мои проекты #1\Монополия\database\schema.sql)

## 4. Запуск сервера

```powershell
npm run dev
```

Сервер поднимется на `http://localhost:3000`.

## 5. Основные API

- `POST /api/register`
- `POST /api/login`
- `POST /api/sessions`
- `POST /api/sessions/:code/join`
- `GET /api/sessions/:code/state`
- `POST /api/sessions/:code/move`

## 6. WebSocket events

- `session:join`
- `session:action`
- `session:state`
- `session:error`
