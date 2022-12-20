var mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://miservermongo23:eJQbiCa12F2ccdleJux2cvxzFzytGRCAx3YvDe66CVZUS2XorL9RmAXIJ72Il25KWBGWuB3YvI2lACDbHt036Q%3D%3D@miservermongo23.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@miservermongo23@", function (err, client) {
  client.close();
});