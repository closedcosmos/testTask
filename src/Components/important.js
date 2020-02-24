import React, {Component} from 'react';

class Important extends Component {
    render() {
        const {item} = this.props;
        var star = null;
        if (item.important === true) {
            star = <span className="red">*</span>
        }

        return (
            <div>{star}</div>
        )
    }
}

export default Important;
