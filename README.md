# Employee Directory

Employee Directory is a web application implemented using React and JS.
This application provide following functionality :
```python
1- Display employee complete information such as profile picture, id, name, date of birth, gender, address, nationality, login username and password.
2- It allows user to sort each column in ascending or descending order.
3- User can search for employee using Firstname.
```

### Technology used:
###### Single Page Application using React. Function Components and Hooks are used to implement UI and dynamic rendering.
###### Third part API(provided in assessment) is used to render employee information : "https://randomuser.me"
###### Language : Javascript


## Installation

Follow commands to install and run the application :

##### Open terminal and navigate to the folder where you want to clone project : 
```bash
git clone {the url to the GitHub repo}
cd [local repository]
```

##### Check package.json file and ensure scripts are notated as below:

```bash
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
}
```
##### Delete the node_modules folder and any 'lock' files such as yarn.lock or package-lock.json if present.

```bash
npm install
npm start
```
## Usage
```python
Employee Directory Home page
```
<img width="1439" alt="Screenshot 2021-07-21 at 8 02 41 PM" src="https://user-images.githubusercontent.com/61482989/126574465-58a49788-c9e0-439b-933e-b40e6155d076.png">

```python
Employee Directory Listing page
```
<img width="1440" alt="Screenshot 2021-07-21 at 8 04 01 PM" src="https://user-images.githubusercontent.com/61482989/126574531-8e4f9875-465a-47f9-b065-1fc9715d43e3.png">

```python
Displayed content using pagination. Row count allows to select number of rows to be visible (5, 10, 20)
```
<img width="1440" alt="Screenshot 2021-07-21 at 7 56 31 PM" src="https://user-images.githubusercontent.com/61482989/126574213-a75fa767-cf6f-49ff-973b-640ad7d9fb8e.png">

```python
Search bar to search employee using first name
```
<img width="1438" alt="Screenshot 2021-07-21 at 8 01 19 PM" src="https://user-images.githubusercontent.com/61482989/126574378-e0569ef9-faae-4157-b98d-3771e68d777f.png">


