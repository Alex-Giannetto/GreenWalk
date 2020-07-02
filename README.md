# GreenWalk
Ionic project for GreenWalk mobile application

## Install

- Clone the repository
```
git clone https://github.com/Alexg78bis/GreenWalk
```

- install dependencies
```
npm install
```

then execute the live server


### With Docker
```
docker run -it -p 8100:8100 -v $(pwd):/usr/src/app govargo/ionic npm run start
```

### Manually

- install ionic
```
npm install -g ionic cordova
```

- run the server
```
ionic serve
```

## Build 
For the iOS version, you need to install Xcode. So you will need Mac OS
```
ionic cordova build ios
```

Pour la version Android, vous devez installer Android Studio, JDK 8 et Graddle
```
ionic cordova build android
``
