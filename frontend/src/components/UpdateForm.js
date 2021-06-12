import React, { Component } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';

class UpdateForm extends Component {
    render() {
        return (
            <Modal show={this.props.showModelForm} onHide={this.props.hiddenModel}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Book</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={(e) => this.props.updateRecipe(e)}>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Recipe Name:</Form.Label>
                            <Form.Control onChange={(e) => this.props.updateLabel(e)} type='text' value={this.props.label} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Recipe Image:</Form.Label>
                            <Form.Control onChange={(e) => this.props.updateImage(e)} type='text' value={this.props.image} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.hiddenModal}>
                        Close
                   </Button>
                    <Button variant="primary" onClick={this.props.updateRecipe}>
                        Update 
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default UpdateForm
