# fluxmitter
*Javascript emitter for web and Node.*

### Documentation

#### var emitter = fluxmitter({property:"value"})
  Returns a new fluxmitter based on the source object.

#### emitter.on(eventname||"*",callback,parent)
  Runs the given callback when the specified *eventname* is emitted. Optional parent argument will be passed as *this*.

  Multiple callbacks can be assigned to a single event.
  
  A string wildcard will represent every event, even those added later.

  Optional parent argument will be used as the callback's *this* value.

#### emitter.off(eventname,callback)
  Stops the callback from happening when *eventname* is emitted.

#### emitter.emit(eventname||"*",data)
  Runs all callbacks associated with *eventname* passing *data* as argument.
  
  A string wildcard will represent every event, even those added later.  

#### fluxmitter.strict = "true" (default: "false")
  Throws an error if an event is emitted to without having any bound callbacks.
  
  Useful for debugging.
  
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

```
var emitter = fluxmitter({name:"something"});
 
 emitter.on("*",function(data){
  console.log(data);
 });
 
emitter.emit("some event",      "sweet"); //outputs "sweet"
emitter.emit("another event",   "sour");  //outputs  "sour"
emitter.emit("even this one",  "salty");  //outputs "salty"


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
