# ionic-notes
dependancies: Node.js 10

to run: 
1) npm install
# to run in browser
2) npm start 

to build on device
# ios:
    ionic cordova build ios -- --buildFlag="-UseModernBuildSystem=0" -allowProvisioningUpdates

# android: 
        ionic cordova run android --prod --release
        # or
        ionic cordova build android --prod --release
