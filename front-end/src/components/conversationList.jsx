//#region for IMPORT
/**
 *   @notice watch to address, if change path, must modify in the require part*/
import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";
import conv_apis from "../api/conversation";
import ReactTable from "react-table";
import "react-table/react-table.css";
import styled from "styled-components";
//#endregion

// Bootstrap styling for wrapper tag
const Wrapper = styled.div`
  padding: 0 40px 40px 40px;
`;

// Class component named "ConversationList"
class ConversationList extends Component {
  constructor(props) {
    super(props);
    // State for react component this is used to save the id, conversation array and isLoading boolean
    this.state = {
      id: this.props.match.params.id,
      conversation: [],
      isLoading: false,
    };
  }

  // This is used to set the state "isLoading" to true
  componentDidMount = async () => {
    // turn on isLoading flag which we load data
    this.setState({ isLoading: true });
    // set id to what's available in state
    const { id } = this.state;

    // api route from "conversation.js"
    await conv_apis.getConversationByID(id).then(
      // this is the data coming from api call
      (conversation) => {
        // setting the "conversation" in the state with response
        this.setState({
          conversation: conversation.data.data,
          // need to reference the data using syntax above right
          // then turn isLoading off now that we're done
          isLoading: false,
        });
      }
    );
  };

  render() {
    // "conversation","isLoading" from the state to variables
    const { conversation, isLoading } = this.state;
    // columns array
    const columns = [
      {
        // Header named "Category" with styles and row cell
        Header: "Category",
        accessor: "category",
        style: { whiteSpace: "unset" },
        Cell: (row) => <div style={{ textAlign: "center" }}>{row.value}</div>,
      },
      {
        // Header named "Subject" with styles and row cell
        Header: "Subject",
        accessor: "subject",
        style: { whiteSpace: "unset" },
        Cell: (row) => <div style={{ textAlign: "center" }}>{row.value}</div>,
      },
      {
        // Header named "Date created" with styles and row cell
        Header: "Date created",
        accessor: "datecreated",
        style: { whiteSpace: "unset" },
        Cell: (row) => <div style={{ textAlign: "center" }}>{row.value}</div>,
      },
      {
        // Header named "Created By" with styles and row cell
        Header: "Created By",
        accessor: "createdby",
        style: { whiteSpace: "unset" },
        Cell: (row) => <div style={{ textAlign: "center" }}>{row.value}</div>,
      },
      {
        // Header named "Last Updated" with styles and row cell
        Header: "Last Updated",
        accessor: "lastupdatedby",
        style: { whiteSpace: "unset" },
        Cell: (row) => <div style={{ textAlign: "center" }}>{row.value}</div>,
      },
      {
        // Empty header with widht 100 and row cell
        Header: "",
        accessor: "",
        width: 100,
        Cell: (row) => <div style={{ textAlign: "center" }}>Details</div>,
      },
    ];

    // variable "showTable" is set to true to check converstation are loaded
    let showTable = true;

    // Condition if there is no conversation set showTable variable to false
    if (!conversation.length) {
      showTable = false;
    }
    // return with all the html tags to display on browser
    return (
      // Card with style
      <Card className="mx-auto " style={{ width: "75%", "margin-top": "80px" }}>
        {/* Bootstrap Wrapper */}
        <Wrapper>
          {/* if showTable variable true then the data is showed */}
          {showTable && (
            //   Table to show conversation
            <ReactTable
              data={conversation}
              columns={columns}
              loading={isLoading}
              defaultPageSize={10}
              showPageSizeOptions={true}
              minRows={0}
            />
          )}
        </Wrapper>
      </Card>
    );
  }
}

// export the component "ConversationList"
export default ConversationList;
