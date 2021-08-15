# server-deployment-practice

## Notes

### Importing and Exporting Modules

If one module **exports** a function or an object ...

```javascript
// person.js
const person = {};

person.walk = function() {
  return 'walking';
}

module.exports = person;
```

Another module can **import** and use that function or object

```javascript
const human = require('./person.js'))
console.log( human.walk() );  // prints 'walking'
```

### CI/CD - Continuous Integration and Deployment

In your lab today, you'll be doing a full "professional" deployment using 2 branches, PR's, and a continuous process to get your code deployed.

You will repeat this process for every server based lab moving forward. Keep these notes (and the lab steps) handy for future reference


> the Url to apoint to the heroku application : https://mahmoud-server-deploy-prod.herokuapp.com/ 
> Github actions : https://github.com/Mahmoud-Khader/server-deployment-practice/actions 
> pull request : https://github.com/Mahmoud-Khader/server-deployment-practice/pull/1
> 
