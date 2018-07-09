use COMPANY
show collections
db.createCollection("DEPT_LOCATIONS")

db.DEPT_LOCATION.insert({"Dnumber":"1","Dlocation":"Huson"})
db.DEPT_LOCATION.insert([{"Dnumber":"4","Dlocation":"Stafford"},{"Dnumber":"5","Dlocation":"Bellaire"},{"Dnumber":"5","Dlocation":"Sugarland"},{"Dnumber":"5","Dlocation":"Houston"}])

db.DEPT_LOCATION.find()

db.createCollection("WORKS_ON")

db.WORKS_ON.insert({"Essn":"123456789","Pno":"1","Hours":"32.5"})
db.WORKS_ON.insert({"Essn":"123456789","Pno":"2","Hours":"7.5"})
db.WORKS_ON.insert({"Essn":"666884444","Pno":"3","Hours":"40.0"})
db.WORKS_ON.insert({"Essn":"453453453","Pno":"1","Hours":"20.0"})
db.WORKS_ON.insert({"Essn":"453453453","Pno":"2","Hours":"20.0"})
db.WORKS_ON.insert({"Essn":"333445555","Pno":"2","Hours":"10.0"})
db.WORKS_ON.insert({"Essn":"333445555","Pno":"3","Hours":"10.0"})
db.WORKS_ON.insert({"Essn":"333445555","Pno":"10","Hours":"10.0"})
db.WORKS_ON.insert({"Essn":"333445555","Pno":"20","Hours":"10.0"})
db.WORKS_ON.insert({"Essn":"999887777","Pno":"30","Hours":"30.0"})
db.WORKS_ON.insert({"Essn":"999887777","Pno":"10","Hours":"10.0"})
db.WORKS_ON.insert({"Essn":"987987987","Pno":"10","Hours":"35.0"})
db.WORKS_ON.insert({"Essn":"987987987","Pno":"30","Hours":"5.0"})
db.WORKS_ON.insert({"Essn":"987654321","Pno":"30","Hours":"20.0"})
db.WORKS_ON.insert({"Essn":"987654321","Pno":"20","Hours":"15.0"})
db.WORKS_ON.insert({"Essn":"888665555","Pno":"20","Hours":"0.0"})

db.WORKS_ON.find()

db.WORKS_ON.remove({"_id":ObjectId("5b42e7de54e80cb4c0a936ca")})

db.createCollection("PROJECT")

db.PROJECT.insert([{"Pname":"ProductX","Pnumber":"1","Plocation":"Bellaire","Dnum":"5"},{"Pname":"ProductY","Pnumber":"2","Plocation":"Sugarland","Dnum":"5"}])
db.PROJECT.insert([{"Pname":"ProductZ","Pnumber":"3","Plocation":"Houston","Dnum":"5"},{"Pname":"Computerization","Pnumber":"10","Plocation":"Stafford","Dnum":"4"}])
db.PROJECT.insert([{"Pname":"Reorganisation","Pnumber":"20","Plocation":"Houston","Dnum":"1"},{"Pname":"Newbenefits","Pnumber":"30","Plocation":"Stafford","Dnum":"4"}])
db.PROJECT.find()

db.createCollection("DEPENDEDNT")

db.DEPENDENT.insert([{"Essn":"333445555","Dependent_name":"Alice","Sex":"F","Bdate":"1986-04-05","Relationship":"Daughter"},
{"Essn":"333445555","Dependent_name":"Theodore","Sex":"M","Bdate":"1983-10-25","Relationship":"Son"},
{"Essn":"333445555","Dependent_name":"Joy","Sex":"F","Bdate":"1958-05-03","Relationship":"Spouce"},
{"Essn":"987654321","Dependent_name":"Abner","Sex":"M","Bdate":"1942-02-28","Relationship":"Spouse"},
{"Essn":"123456789","Dependent_name":"Michael","Sex":"M","Bdate":"1988-01-04","Relationship":"Son"},
{"Essn":"123456789","Dependent_name":"Alice","Sex":"F","Bdate":"1988-12-30","Relationship":"Daughter"},
{"Essn":"123456789","Dependent_name":"Elizabeth","Sex":"F","Bdate":"1967-05-05","Relationship":"Spouse"}])

db.DEPENDENT.find().pretty()