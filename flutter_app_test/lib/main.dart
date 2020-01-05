import 'package:flutter/material.dart';
import 'dart:math';
void main() => runApp(MyApp());


RandomNumber(){
  List arr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
  int min = 0;
  int max = 15;
  String myString = "0x";
  Random random = new Random();
  for(int i = 0; i < 8; i++){
    myString+= "${arr[min + random.nextInt(max - min)]}";
  }
  var constColorInt = num.tryParse(myString);
  return constColorInt;
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: new ThemeData(
        primaryColor: Colors.blue,
      ),
      debugShowCheckedModeBanner: false,
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;
  List myCounter = [];
  int _counterForList = 0;
  String titleText = "";

  void _incrementCounter() {
    setState(() {
      titleText = "Hey there :)";
      _counterForList = 0;
      _counter = RandomNumber();
      _incrementList();
    });
  }
  void _incrementCountereBack(){
    int _lengthList = myCounter.length;
    _counterForList++;
    int _numberCheck = _lengthList -_counterForList;
    setState(() {
      if(myCounter.length > 1){
        _counter = _numberCheck > 1 ? myCounter[_lengthList-1-_counterForList] : myCounter[0];
      } else titleText = myCounter.length == 1 ? "You only clicked once on the screen and you have only one color": titleText = "Please click on the screen";
    });
  }

  void _incrementList(){
    setState((){
      myCounter.add(_counter);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Flutter test api'),
      ),
      body: Center(
        child: InkWell(
          onTap:
          _incrementCounter,
          child: new Container(
            width: MediaQuery.of(context).size.width ,
            height: MediaQuery.of(context).size.height,
            color: Color(_counter),
            child: Center(
              child: Text(
//                'Hey there :)',
                titleText,
                textAlign: TextAlign.center,
                style: TextStyle(
                    color: Colors.pinkAccent,
                    fontSize: 30,
                ),
              ),
            ),
          ),
        ),

      ),
       floatingActionButton: FloatingActionButton(
        onPressed: _incrementCountereBack,
        tooltip: 'Increment',
        child: Icon(Icons.chevron_left),
      )
    );
  }
}


