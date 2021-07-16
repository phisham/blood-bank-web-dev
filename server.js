const express=require("express");
const bodyParser=require("body-parser");
const { ifError } = require("assert");
const app=express();
const fs=require('fs');

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/intro.html");
})
app.get("/regh",function(req,res){
    res.sendFile(__dirname+"/hosp-reg.html")
})
app.get("/done",function(req,res){
    res.sendFile(__dirname+"/hosp-login.html")
})
app.get("/info",function(req,res){
    res.sendFile(__dirname+"/addinfo.html")
})
app.get("/end",function(req,res){
    res.sendFile(__dirname+"/infoupdate.html")
})
app.get("/reghnew",function(req,res){
    res.sendFile(__dirname+"/recvr-reg.html")
})
app.get("/donenew",function(req,res){
    res.sendFile(__dirname+"/recvr-login.html")
})
app.get("/avail1",function(req,res){
    res.sendFile(__dirname+"/avail1.html")
})
app.get("/avail2",function(req,res){
    res.sendFile(__dirname+"/avail2.html")
})
app.get("/avail3",function(req,res){
    res.sendFile(__dirname+"/avail3.html")
})
app.get("/avail4",function(req,res){
    res.sendFile(__dirname+"/avail4.html")
})
app.get("/avail5",function(req,res){
    res.sendFile(__dirname+"/avail5.html")
})
app.get("/avail6",function(req,res){
    res.sendFile(__dirname+"/avail6.html")
})
app.get("/avail7",function(req,res){
    res.sendFile(__dirname+"/avail7.html")
})
app.get("/avail8",function(req,res){
    res.sendFile(__dirname+"/avail8.html")
})

app.post("/regh",function(req,res){
      var n1=req.body.one;
    var n2=req.body.two;
    
    var n=n1.concat(n2);
    

    var sec=fs.readFile('hosp-reg.txt','utf-8',function(err,data){
       if(err) throw err;
       var a=data.search(n1);
       var b=data.search(n2);
       if(n1=='' || n2==''){
           res.send("Enter name/password");
       }
       else if(a!=-1 && b!=-1){
           res.send("This name/password exist !!!please change the name/password.");
       }
       else {
            fs.writeFile('hospitalnames.txt',n1,function(err){
                if(err) throw err;

            })
            var fileuser=fs.appendFile('hosp-reg.txt',n+' ',function(err){
                    if(err) throw err;
                    res.redirect('/done');
            });
           
   
        }


    })
})
app.post("/done",function(req,res){
    var n3=req.body.ONE;
    var n4=req.body.TWO;
    
    var p=n3.concat(n4);
    
     
      var fr=fs.readFile('hosp-reg.txt','utf-8',function(err,data){
          if(err) throw err;
          var h=data.search(p+' ');
          if(h==-1 || n3=='' || n4==''){
            res.send("Login Failed!!");
          }
          else res.redirect('/info');
      })
     

})
app.post("/info",function(req,res){

    
    if(req.body.name1!=''){
        var group1=req.body.name1;

        fs.readFile('hospitalnames.txt','utf-8',function(err,hospital){
            if(err) throw err;
            var data=hospital+' - '.concat(group1);
            var fls=fs.appendFile('bloodinfo-A.txt',data+'',function(err){
                if(err) throw err;
                
            })
        })
        
        
    }
    if(req.body.name2!=''){
        var group2=req.body.name2;

        fs.readFile('hospitalnames.txt','utf-8',function(err,hospital){
            if(err) throw err;
            var data=hospital+' - '.concat(group2);
            var fls=fs.appendFile('bloodinfo-A-ve.txt',data+'',function(err){
                if(err) throw err;
                
            })
        })
        
        
    }
    if(req.body.name3!=''){
        var group3=req.body.name3;

        fs.readFile('hospitalnames.txt','utf-8',function(err,hospital){
            if(err) throw err;
            var data=hospital+' - '.concat(group3);
            var fls=fs.appendFile('bloodinfo-B.txt',data+'',function(err){
                if(err) throw err;
                
            })
        })
        
        
    }
    if(req.body.name4!=''){
        var group4=req.body.name4;

        fs.readFile('hospitalnames.txt','utf-8',function(err,hospital){
            if(err) throw err;
            var data=hospital+' - '.concat(group4);
            var fls=fs.appendFile('bloodinfo-B-ve.txt',data+'',function(err){
                if(err) throw err;
                
            })
        })
        
        
    }
    if(req.body.name5!=''){
        var group5=req.body.name5;

        fs.readFile('hospitalnames.txt','utf-8',function(err,hospital){
            if(err) throw err;
            var data=hospital+' - '.concat(group5);
            var fls=fs.appendFile('bloodinfo-AB.txt',data+'',function(err){
                if(err) throw err;
                
            })
        })
        
        
    }
    if(req.body.name6!=''){
        var group6=req.body.name6;

        fs.readFile('hospitalnames.txt','utf-8',function(err,hospital){
            if(err) throw err;
            var data=hospital+' - '.concat(group6);
            var fls=fs.appendFile('bloodinfo-AB-ve.txt',data+'',function(err){
                if(err) throw err;
                
            })
        })
        
        
    }
    if(req.body.name7!=''){
        var group7=req.body.name7;

        fs.readFile('hospitalnames.txt','utf-8',function(err,hospital){
            if(err) throw err;
            var data=hospital+' - '.concat(group7);
            var fls=fs.appendFile('bloodinfo-O.txt',data+'',function(err){
                if(err) throw err;
                
            })
        })
        
        
        
    }
    if(req.body.name8!=''){
        var group8=req.body.name8;

        fs.readFile('hospitalnames.txt','utf-8',function(err,hospital){
            if(err) throw err;
            var data=hospital+' - '.concat(group8);
            var fls=fs.appendFile('bloodinfo-O-ve.txt',data+'',function(err){
                if(err) throw err;
                
            })
        })
        
        
    }
    res.redirect('/end');
})
var doc;
app.post("/",function(req,res){
    fs.readFile('bloodinfo-A.txt','utf-8',function(err,data){
        if(err) throw err;
        var one=data;
        fs.readFile('bloodinfo-A-ve.txt','utf-8',function(err,data1){
            if(err) throw err;
            var tw0=data1;
            fs.readFile('bloodinfo-B.txt','utf-8',function(err,data2){
                if(err) throw err;
                var three=data2;
                fs.readFile('bloodinfo-B-ve.txt','utf-8',function(err,data3){
                    if(err) throw err;
                    var four=data3;
                    fs.readFile('bloodinfo-AB.txt','utf-8',function(err,data4){
                        if(err) throw err;
                        var five=data4;
                        fs.readFile('bloodinfo-AB-ve.txt','utf-8',function(err,data5){
                            if(err) throw err;
                            var six=data5;
                            fs.readFile('bloodinfo-O.txt','utf-8',function(err,data6){
                                if(err) throw err;
                                var seven=data6;
                                fs.readFile('bloodinfo-O-ve.txt','utf-8',function(err,data7){
                                    if(err) throw err;
                                    var eight=data7;
                                    var con1=one+''.concat(tw0+'');
                                    var con2=con1.concat(three+'');
                                    var con3=con2.concat(four+'');
                                    var con4=con3.concat(five+'');
                                    var con5=con4.concat(six+'');
                                    var con6=con5.concat(seven+'');
                                    var con7=con6.concat(eight+'');
                                    res.send(con7);
                                })
        
                            })
        
                        })
        
                    })
        
                })
        
            })

          
        })
        
       
        
        
        
        
        
        
    })
    
})
app.post("/reghnew",function(req,res){
    var n1=req.body.one;
    var n2=req.body.two;
    var n3=req.body.three;
    var n=n1.concat(n2);
    

    var sec=fs.readFile('recvr-reg.txt','utf-8',function(err,data){
       if(err) throw err;
       var a=data.search(n1);
       var b=data.search(n2);
       if(n1=='' || n2==''){
           res.send("Enter name/password");
       }
       else if(a!=-1 && b!=-1){
           res.send("This name/password exist !!!please change the name/password.");
       }
       else {
            var fileuser=fs.appendFile('recvr-reg.txt',n+' ',function(err){
                    if(err) throw err;
                    res.redirect('/donenew');
            });
   
        }


    })
})
app.post("/donenew",function(req,res){
    var n3=req.body.ONE;
    var n4=req.body.TWO;
    var n5=req.body.THREE;
    var p=n3.concat(n4);
    
    
     
      var fr=fs.readFile('recvr-reg.txt','utf-8',function(err,data){
          if(err) throw err;
          var h=data.search(p+' ');
          if(h==-1 || n3=='' || n4==''){
            res.send("Login Failed!!");
          }
          else if(n5=='A' || n5=='A+ve' || n5=='a' || n5=='a+ve') res.redirect('/avail1');
          else if(n5=='A-ve' || n5=='a-ve') res.redirect('/avail2');
          else if(n5=='B' || n5=='B+ve' || n5=='b' || n5=='b+ve') res.redirect('/avail3');
          else if(n5=='B-ve' || n5=='b-ve') res.redirect('/avail4');
          else if(n5=='AB' || n5=='AB+ve' || n5=='ab' || n5=='ab+ve') res.redirect('/avail5');
          else if(n5=='AB-ve' || n5=='ab-ve') res.redirect('/avail6');
          else if(n5=='O' || n5=='O+ve' || n5=='o' || n5=='o+ve') res.redirect('/avail7');
          else if(n5=='O-ve' || n5=='o-ve') res.redirect('/avail8');
          
      })
     

})
app.post("/avail1",function(req,res){
    fs.readFile('bloodinfo-A.txt','utf-8',function(err,data){
        res.send(data);
    })
})
app.post("/avail2",function(req,res){
    fs.readFile('bloodinfo-A-ve.txt','utf-8',function(err,data){
        res.send(data);
    })
})
app.post("/avail3",function(req,res){
    fs.readFile('bloodinfo-B.txt','utf-8',function(err,data){
        res.send(data);
    })
})
app.post("/avail4",function(req,res){
    fs.readFile('bloodinfo-B-ve.txt','utf-8',function(err,data){
        res.send(data);
    })
})
app.post("/avail5",function(req,res){
    fs.readFile('bloodinfo-AB.txt','utf-8',function(err,data){
        res.send(data);
    })
})
app.post("/avail6",function(req,res){
    fs.readFile('bloodinfo-AB-ve.txt','utf-8',function(err,data){
        res.send(data);
    })
})
app.post("/avail7",function(req,res){
    fs.readFile('bloodinfo-O.txt','utf-8',function(err,data){
        res.send(data);
    })
})
app.post("/avail8",function(req,res){
    fs.readFile('bloodinfo-O-ve.txt','utf-8',function(err,data){
        res.send(data);
    })
})

app.listen(3700,function(req,res){
    console.log("server has started on port 3700");
})
