import React, { Component } from 'react';

class Modal extends Component {

    render() {
        const { userDetails, onChangeUserDetails, onSave } = this.props;
        return (
            <>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Update Username</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <input name="login" value={userDetails.login} onChange={e => onChangeUserDetails(e,userDetails.id)} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={onSave}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Modal;
