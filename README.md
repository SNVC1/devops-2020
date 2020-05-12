# MIPT Store Frontend [![Build Status](https://travis-ci.com/SNVC1/devops-2020.svg?token=1eqkPsLFhPaKepysEJyt&branch=master)](https://travis-ci.com/SNVC1/devops-2020)

---
Последовательность команд для запуска приложения:
1. Установить все зависимости проекта согласно `package.json`
```shell script
yarn
```
2. Запустить приложение в режиме разработки
```shell script
yarn start
```

В качестве бэкенда используется JSON сервер:
```shell script
yarn global add json-server
json-server --watch db.json
```
