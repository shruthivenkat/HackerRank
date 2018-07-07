show dbs
use COMPANY
db
db.createCollection("EMPLOYEE")
show collections
db.EMPLOYEE.insert([{"Fname":"John","Minit":"B","Lname":"Smith","Ssn":"123456789","Bdate":"1965-01-09","Address":"731 Fondren Houston,TX","Sex":"M","Salary":"30000","Super_Ssn":"333445555","Dno":"5"},
{"Fname":"Franklin","Minit":"T","Lname":"Wong","Ssn":"33344555","Bdate":"1955-12-08","Address":"638 voss Houston,TX","Sex":"M","Salary":"40000","Super_Ssn":"88866555","Dno":"5"},
{"Fname":"Alicia","Minit":"J","Lname":"Zeleya","Ssn":"99988777","Bdate":"1968-01-19","Address":"3321 castle spring,TX","Sex":"F","Salary":"25000","Super_Ssn":"987654321","Dno":"4"},
{"Fname":"Jennifier","Minit":"S","Lname":"Wallace","Ssn":"987654321","Bdate":"1941-06-20","Address":"291 berry,bellaire,TX","Sex":"F","Salary":"43000","Super_Ssn":"888665555","Dno":"4"},
{"Fname":"Ramesh","Minit":"K","Lname":"Narayan","Ssn":"666884444","Bdate":"1962-09-15","Address":"975 fire oak, humble,TX","Sex":"M","Salary":"38000","Super_Ssn":"333445555","Dno":"5"},
{"Fname":"Joyce","Minit":"A","Lname":"English","Ssn":"453453453","Bdate":"1972-07-31","Address":"5631 rice,Houston,TX","Sex":"F","Salary":"25000","Super_Ssn":"333445555","Dno":"5"},
{"Fname":"Ahmed","Minit":"V","Lname":"Jabbar","Ssn":"987987987","Bdate":"1969-03-29","Address":"980 Dallas, Houston,TX","Sex":"M","Salary":"25000","Super_Ssn":"987654321","Dno":"4"},
{"Fname":"James","Minit":"E","Lname":"Borg","Ssn":"888665555","Bdate":"1937-11-10","Address":"450 stone Houston,TX","Sex":"M","Salary":"55000","Super_Ssn":"NULL","Dno":"1"}])
db.EMPLOYEE.find()

db.EMPLOYEE.find({"Fname":"Ramesh"}).pretty()

db.createCollection("DEPARTMENT")
show collections
db.DEPARTMENT.insert([{"Dname":"Research","Dnumber":"5","Mgr_ssn":"333445555","Mgr_start_date":"1988-05-22"},
{"Dname":"Administration","Dnumber":"4","Mgr_ssn":"987654321","Mgr_start_date":"1995-01-01"},
{"Dname":"Headquaters","Dnumber":"1","Mgr_ssn":"888665555","Mgr_start_date":"1981-06-19"}])
db.DEPARTMENT.find().pretty()

db.EMPLOYEE.find({"Ssn":"33344555"})

db.EMPLOYEE.update({"_id":ObjectId("5b406b54cf52f1ba13b1c1ad")},{$set:{"Ssn":"333445555"}})

  db.EMPLOYEE.update({"_id":ObjectId("5b406b72cf52f1ba13b1c1b5")},{$set:{"Ssn":"333445555"}})
  
  db.EMPLOYEE.find({},{"Fname":1, "_id":0})
  
  db.EMPLOYEE.find({},{"Fname":1, "Minit":1, "_id":0})
    db.EMPLOYEE.find({},{"Fname":1, "Minit":1, "_id":0}).limit(2)
      db.EMPLOYEE.find({},{"Fname":1, "Minit":1, "_id":0}).skip(4).limit(3)
      
        db.EMPLOYEE.find({},{"Fname":1, "Minit":1, "_id":0}).limit(5).sort({"Fname":-1})
        
 db.EMPLOYEE.aggregate([{$group : {"Ssn":"$Sex", Result:{$sum:1}}}])
 
 db.EMPLOYEE.aggregate({$sum:{_id:"$Salary"}})