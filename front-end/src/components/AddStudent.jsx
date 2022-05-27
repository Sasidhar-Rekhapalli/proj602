import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// React function component
export default function AddStudent() {
  return (
    <>
      {/* Card with title */}
      <Card.Title className="mt-3 mb-3 text-center">Add New Student</Card.Title>
      {/* Card */}
      <Card className="mx-auto container" >
        <Card.Body style={{ padding: "1rem 2rem" }}>
          {/* Form  */}
          <Form>
            <Form.Group className="row mb-3">
              {/* Prospective Student Checkbox  */}
              <div className=" col">
                <input
                  type="checkbox"
                  className="form-check-input "
                  id="exampleCheck1"
                />
                <label className="col">Prospective Student</label>
              </div>
              {/* Student ID label with input  */}
              <Form.Label className="col-sm-2" style={{ textAlign: "right" }}>
                Student ID:
              </Form.Label>
              <Form.Control className="col pt-0"></Form.Control>
            </Form.Group>

            {/* First and Last name with input and label  */}
            <Form.Group>
              <div className="row mb-3">
                <Form.Label className="col-md-2">First name:</Form.Label>
                <Form.Control className="col"></Form.Control>
                <Form.Label className="col-md-2">Last name:</Form.Label>
                <Form.Control className="col"></Form.Control>
              </div>

              {/* Check box for Gender  */}
              <div className="row mb-3">
                <Form.Label className="col-lg-2">Gender:</Form.Label>
                <div className="form-check col-lg-1">
                  <input
                    className="form-check-input col"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label col">Male</label>
                </div>
                <div className="form-check col-lg-1">
                  <input
                    className="form-check-input col"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label className="form-check-label col">Female</label>
                </div>
                {/* Date of Birth with input and label  */}
                <Form.Label className="col-lg-2" style={{ textAlign: "right" }}>
                  Day of Birth:
                </Form.Label>
                <Form.Control type="date" className="col pt-0"></Form.Control>
              </div>

              {/* Country input and label  */}
              <div className="row mb-3">
                <Form.Label className="col-md-2">Country:</Form.Label>
                <Form.Control className="col"></Form.Control>
                {/* SaskPolytech email with input and label  */}
                <Form.Label className="col">Saskpolytech E-mail:</Form.Label>
                <Form.Control className="col"></Form.Control>
              </div>

              {/* Campus Select with options and label  */}
              <div className="row mb-3">
                <Form.Label className="col-md-2">Campus:</Form.Label>
                <Form.Select className="col">
                  <option>Select Campus</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </Form.Select>
                {/* Academic period with options and label  */}
                <Form.Label className="col">Academic Period:</Form.Label>
                <Form.Select className="col">
                  <option>Select Period</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </Form.Select>
              </div>

              {/* Year and Program with label and input  */}
              <div className="row mb-3">
                <Form.Label className="col-md-2">Year:</Form.Label>
                <Form.Control className="col"></Form.Control>
                <Form.Label className="col">Program:</Form.Label>
                <Form.Control className="col"></Form.Control>
              </div>

              {/* Degree with options and label  */}
              <div className="row">
                <Form.Label className="col-md-2">Degree:</Form.Label>
                <Form.Select className="col">
                  <option>Select Degree</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </Form.Select>

                {/* Graduate Ind with label and input  */}
                <Form.Label className="col" style={{ textAlign: "right" }}>
                  Graduate Ind:
                </Form.Label>

                {/* Enroll with label and input  */}
                <Form.Control className="col"></Form.Control>
                <Form.Label className="col" style={{ textAlign: "right" }}>
                  Enroll:
                </Form.Label>
                <Form.Control className="col"></Form.Control>
              </div>
            </Form.Group>
          </Form>

          {/* Link to go to student page  */}
          <Link to="/studentlist">
            {/* Button to save new student  */}
            <Button className="btn btn-primary mt-3" style={{ float: "right" }}>
              Save new student
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}
