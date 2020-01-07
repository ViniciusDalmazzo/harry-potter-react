
import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class AddCharacterModal extends Component {

    constructor(props) {
        super(props);
        this.setState({ open: true });
        this.handleClose = this._handleClose.bind(this);
    }

    _handleClose() {
        this.setState({ open: false });
    }

    render() {
        const actions = [
            <Button
                type="reset"
                label="Reset"
                secondary={true}
                style={{ float: 'left' }}
            />,
            <Button
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <Button
                type="submit"
                label="Submit"
                primary={true}
            />,
        ];

        return (
            <Dialog
                title="Dialog With Custom Width"
                modal={true}
                open={this.state.open}
            >
                <form action="/" method="POST" onSubmit={(e) => { e.preventDefault(); alert('Submitted form!'); this.handleClose(); }}>
                    This dialog spans the entire width of the screen.
            <TextField name="email" hintText="Email" />
                    <TextField name="pwd" type="password" hintText="Password" />
                    <div style={{ textAlign: 'right', padding: 8, margin: '24px -24px -24px -24px' }}>
                        {actions}
                    </div>
                </form>
            </Dialog>
        );
    }
}