import React from "react";
import { Form, Button, Card } from "react-bootstrap";

export default function AddStudent() {
  return (
    <>
      <h2 className="mt-3 text-center">Add New Student</h2>
      <Card className="m-5 mt-0">
        <Card.Body>
          <Form>
            <Form.Group className="row">
              <div className="form-group form-check col">
                <label className="form-check-label col">
                  Prospective Student
                </label>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
              </div>
              <Form.Label className="col">Student ID:</Form.Label>

              <Form.Control className="col"></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>First name:</Form.Label>
              <Form.Control></Form.Control>
              <Form.Label>Last name:</Form.Label>
              <Form.Control></Form.Control>
              <Form.Label>Gender:</Form.Label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label">Male</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label className="form-check-label">Female</label>
              </div>
              <Form.Label>Day of Birth:</Form.Label>
              <Form.Control type="date"></Form.Control>
              <Form.Label>Country:</Form.Label>
              <Form.Control></Form.Control>
              <Form.Label>Saskpolytech E-mail:</Form.Label>
              <Form.Control></Form.Control>
              <Form.Label>Campus:</Form.Label>
              <Form.Select>
                <option>Select Campus</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </Form.Select>
              <Form.Label>Academic Period:</Form.Label>
              <Form.Select>
                <option>Select Period</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </Form.Select>
              <Form.Label>Year:</Form.Label>
              <Form.Control></Form.Control>
              <Form.Label>Program</Form.Label>
              <Form.Control></Form.Control>
              <Form.Label>Degree:</Form.Label>
              <Form.Select>
                <option>Select Degree</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </Form.Select>
            </Form.Group>
            <Form.Label>Graduate Ind</Form.Label>
            <Form.Control></Form.Control>
            <Form.Label>Enroll:</Form.Label>
            <Form.Control></Form.Control>
          </Form>
          <Button className="btn btn-primary mt-3">Save new student</Button>
        </Card.Body>
      </Card>
    </>
  );
}
