**Requirements**

To run the program, the following must be installed. I have provided the links to the software if you do not already have the software installed

[-Docker](https://hub.docker.com/editions/community/docker-ce-desktop-windows/) 

[-NPM/ Node](https://nodejs.org/dist/v14.16.0/node-v14.16.0-x64.msi)

Project Files provided. in a folder called MongoTask.

**Instructions For Usage**

The project built differs from that defined ... instead of operating at the command line, it operates through a web page. On loading the web page two boxes appear on the page. with a submit below. Enter your JSON string in the left box, press submit, and the flattened JSON will appear on the right. The output is formatted similarly to the original string for ease of reading.

I took this as an opportunity to use a few new technologies that I am eager to become more familiar with, namely Docker and React (I used CRA (Create React App) to autogenerate a vanilla frontend) and then lastly I utilised jest for testing. 



**Running on Local Machine**

Copy the folder of files provided to your Desktop.

use the terminal to **cd**  into the root of this folder (**mongotask**) 

This step is needed whether running locally or through Docker.

**$ npm install** ... to setup node/npm on your device

**$ npm run start** ... to start the server and run the program from within the project folder.

Using a browser - Navigate to **localhost:3000**



**Testing on Local Machine**

(Provided that npm install has already been executed)

**$ npm run test** 



**Running in a Virtual Docker Container**

***Running***

Build Docker image (execute from root of mongotask and please do not forget the '.' at the end of the command as this specifies docker's Build Context) : 

**$ docker build** . 

// Retrieve imageid from the console at the end of the logged output from the 'build' command for use in the following 'run' command

Run newly created docker image and map the running docker container port 8080 to local machine's 8080 port. 

**$ docker run -p 8080:3000 <IMAGE_ID> .** 

Open web browser of choice and navigate to **localhost:8080** 



Note : The initial docker build will take a few minutes as the dependencies for this project are pulled in, but consideration was made for consequent build times, so rather than COPY the node_modules of the project across each time the project is rebuilt, just the **package.json** is copied across and '**npm install'** run on the virtual container to pull in the dependencies prior to copying the code component of the project. Docker builds images iteratively and uses a cache of prior images to speed up the build process, as docker will not see any changes (typically) in the dependencies then the npm install portion will not be executed every time there is a code change, thus saving a lot of development time. 

Running ''**$ docker build .**' for a second time will demonstrate the time regained by utilising this method. 

How to stop the Running Docker container : 

**$ docker ps**  - this will show all docker IDs running, select the one you wish to stop and use the following command.

$ **docker stop <CONTAINER_ID>** 





***Testing in a Virtual Docker Container***

There are 3 tests included with the project files.

**$ docker build .**  

**$ docker run -it <IMAGE_ID> npm run test .**

Note: the 'it' portion will allow console output from the container to the local machine and will have the container running in the VM to accept input from the console, so you will be provided with options for rerunning tests, rerunning specified tests and you will also be able to see the logged results of the tests. 





