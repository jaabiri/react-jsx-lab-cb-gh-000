const React = require('react');
const FillerText = require('./FillerText');

class Webpage extends React.Component {
    render() {
        return (
            <div>
                 The world's coolest webpage
                 <FillerText></FillerText>
                 <FillerText></FillerText>
            </div>
        );
    }
}

module.exports =  Webpage;
