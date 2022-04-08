import React from 'react'
import { Button, Checkbox, Icon, Table } from 'semantic-ui-react'
import logo from "../images/logo.png"

const Footer = () => (
    <Table celled compact definition style={{ border: '1px transparent'}} className="pt-5 pb-5">
        <Table.Header fullWidth>
            <Table.Row>
                <Table.HeaderCell />
                <Table.HeaderCell>Multiple Store</Table.HeaderCell>
                <Table.HeaderCell>Infomation</Table.HeaderCell>
                <Table.HeaderCell>Recruitment News</Table.HeaderCell>
                <Table.HeaderCell>Download</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            <Table.Row>
                <Table.Cell collapsing>
                </Table.Cell>
                <Table.Cell><i className="bi bi-geo-alt pe-2"></i> Address</Table.Cell>
                <Table.Cell>Introduce</Table.Cell>
                <Table.Cell>Acountancy</Table.Cell>
                <Table.Cell>Apple Store</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell collapsing>
                </Table.Cell>
                <Table.Cell><i className="bi bi-telephone pe-2"></i> Phone number</Table.Cell>
                <Table.Cell>News</Table.Cell>
                <Table.Cell>Sales</Table.Cell>
                <Table.Cell>CH Play</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell collapsing>
                </Table.Cell>
                <Table.Cell><i className="bi bi-globe pe-2"></i> Website</Table.Cell>
                <Table.Cell>Terms of use</Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
            </Table.Row>
        </Table.Body>

    </Table>
)

export default Footer