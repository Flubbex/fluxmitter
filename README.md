# fluxmitter
*Javascript emitter for web and Node.*
 
### Documentation
#### fluxmitter(...)
  Returns a new fluxmitter based on the source object.
  
#### fluxmitter.on(eventname,callback,parent)
  Runs the given callback when the specified *eventname* is emitted. Optional parent argument will be passed as *this*. 
  
  Multiple callbacks can be assigned to a single event.
  
  Optional parent argument will be used as the callback's *this* value. 

#### fluxmitter.off(eventname,callback)
  Stops the callback from happening when *eventname* is emitted.
  
#### fluxmitter.emit(eventname,data)
  Runs all callbacks associated with *eventname* passing *data* as argument. 

### Usage
```
  var emitter = fluxmitter({
    someName:"someValue",
    some:function(){
      return this.someName;
    },
  });
  
  var parent = {
    lorem:"Lorem",
    ipsum:"Ipsum"
  };
  
  emitter.on("event",function(data){
    console.log(data.lorem,this.ipsum,data==this);
  },parent);
  
  emitter.emit("event",parent);
  
  //prints "Lorem" "Ipsum" true
```

### Installation
#### curl
```
curl -L https://raw.githubusercontent.com/Flubbex/fluxmitter/master/index.js > fluxmitter.js
```
#### wget
```
wget https://raw.githubusercontent.com/Flubbex/fluxmitter/master/index.js && mv index.js fluxmitter.js
```
#### GIT
```
git clone https://github.com/Flubbex/fluxmitter.git
```
#### NPM
No NPM package yet, sorry. Happening Soon™
#### BRAZIL 
[Save this as 'fluxmitter.js'](https://raw.githubusercontent.com/Flubbex/fluxmitter/master/index.js)
#### Bower
Haha.
