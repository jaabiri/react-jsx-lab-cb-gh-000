const React = require('react');

class RegistrationForm extends  React.Component{
     render(){
        return (
            <form>
                  <input type="text" />
                  <input type ="password" />
                  <button type="submit" >submit</button>
            </form>
        )
     }
}
module.exports =   RegistrationForm ;
