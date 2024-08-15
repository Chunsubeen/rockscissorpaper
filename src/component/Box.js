import React, { Component } from 'react';

class Box extends Component {
    render() {
        const { result, title, item } = this.props;

        return (
            <div className={`box ${result}`}>
                <h1>{title}</h1>
                <img 
                    className="item-img"
                    src={item && item.img}
                    alt=""
                />
                <h2>{result}</h2>
            </div>
        );
    }
}

export default Box;
