# MIPT Store Frontend [![Build Status](https://travis-ci.com/SNVC1/devops-2020.svg?token=1eqkPsLFhPaKepysEJyt&branch=master)](https://travis-ci.com/SNVC1/devops-2020)

---
Это - одностраничное `React` приложение в связке с `react-router-dom` и `react-redux`\
Последовательность команд для запуска приложения (для **UNIX**-систем):
1. Сперва необходимо установить пакетный менеджер `yarn`
2. Все зависимости проекта согласно `package.json` устанавливаются запуском этой команды из корневой директории проекта
```shell script
yarn
```
3. Далее само приложение в режиме разработки запускается командой
```shell script
yarn start --port 3001
```
Сервер будет доступен по адресу `http://localhost:3001/`

В качестве бэкенда используется JSON сервер:
```shell script
yarn global add json-server
json-server --watch --port 3000 db.json
```
