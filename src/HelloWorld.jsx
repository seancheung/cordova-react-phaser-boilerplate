import React from 'react';
import withStyles from 'react-jss';
import keyframes from 'jss-keyframes';
import classNames from 'classnames';
import logo from 'assets/img/logo.png';

const fade = keyframes({
    from: { opacity: 1.0 },
    '50%': { opacity: 0.4 },
    to: { opacity: 1.0 }
});

const styles = {
    app: {
        background: `url(${logo}) no-repeat center top`,
        position: 'absolute',
        left: '50%',
        top: '50%',
        height: '50px',
        width: '225px',
        textAlign: 'center',
        padding: '180px 0px 0px 0px',
        margin: '-115px 0px 0px -112px',
        zIndex: 1
    },
    title: {
        fontSize: '24px',
        fontWeight: 'normal',
        margin: 0,
        overflow: 'visible',
        padding: 0,
        textAlign: 'center'
    },
    event: {
        borderRadius: '4px',
        '-webkit-border-radius': '4px',
        color: '#FFFFFF',
        fontSize: '12px',
        margin: '0px 30px',
        padding: '2px 0px'
    },
    listening: {
        backgroundColor: '#333333'
    },
    received: {
        backgroundColor: '#4B946A'
    },
    blink: {
        animation: `${fade} 3000ms infinite`,
        '-webkit-animation': `${fade} 3000ms infinite`
    }
};

export class HelloWorld extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ready: false
        };
    }

    render() {
        return (
            <div className={this.props.classes.app}>
                <h1 className={this.props.classes.title}>Apache Cordova</h1>
                <div className={this.props.classes.blink}>
                    <p
                        className={classNames(
                            this.props.classes.event,
                            this.props.classes[
                                this.state.ready ? 'received' : 'listening'
                            ]
                        )}
                    >
                        {this.state.ready
                            ? 'Device is Ready'
                            : 'Connecting to Device'}
                    </p>
                </div>
            </div>
        );
    }

    componentDidMount() {
        document.addEventListener(
            'deviceready',
            () => {
                this.setState({ ready: true });
            },
            false
        );
    }

}

export default withStyles(styles)(HelloWorld);
