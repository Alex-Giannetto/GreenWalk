# GreenWalk
This api is used to be the front end of the API : https://github.com/bellatalex/GreenWalk-API.  
The technology, which is used in this api is Ionic 5.  
The purpose of this project is to be able to organise Clean Walk efficiently. Clean Walk is basically walking in a delimited area and taking out trash off the street. This application is really useful because our city and our countryside are being polluted due to plastic waste like plastic bag or even straw.
Please help us to develop our project !   
Go see our Trello to see what will be added next or even do it yourself by contributing : https://trello.com/b/gY8Uhjmg/greenwalk 
You can even be part of this project by coming to our discord and talk directly to us we would love that : https://discord.gg/EyFfywY 
Thanks in advance :heart: 

The Green Walk Team

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
```
