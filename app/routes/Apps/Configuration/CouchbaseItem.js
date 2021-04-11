import React from 'react'
import {
  Col,
  FormGroup,
  Input,
  Card,
  CardBody,
  Badge,
} from './../../../components'
import GluuLabel from '../Gluu/GluuLabel'

function CouchbaseItem({ couchbase, index, formik }) {
  return (
    <Card
      style={{
        marginBottom: '5px',
        backgroundColor: index % 2 === 0 ? 'white' : '#f7f7f7',
      }}
    >
      <CardBody>
        <FormGroup row>
          <GluuLabel label="Configuration Id" size={4} />
          <Col sm={8}>
            <Input
              id="configId"
              name="configId"
              disabled
              defaultValue={couchbase.configId}
              onChange={formik.handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <GluuLabel label="Servers" size={4} />
          <Col sm={8}>
            {couchbase.servers.map((server, index) => (
              <Badge key={index} color="primary">
                {server}
              </Badge>
            ))}
          </Col>
        </FormGroup>
        <FormGroup row>
          <GluuLabel label="Connection Timeout" size={2} />
          <Col sm={2}>
            <Input
              id="connectTimeout"
              name="connectTimeout"
              type="number"
              disabled
              defaultValue={couchbase.connectTimeout}
              onChange={formik.handleChange}
            />
          </Col>
          <GluuLabel label="Computation Pool Size" size={2} />
          <Col sm={2}>
            <Input
              id="computationPoolSize"
              name="computationPoolSize"
              type="number"
              disabled
              defaultValue={couchbase.computationPoolSize}
              onChange={formik.handleChange}
            />
          </Col>
          <GluuLabel label="Use SSL" size={3} />
          <Col sm={1}>
            <Input
              id="useSSL"
              name="useSSL"
              type="checkbox"
              disabled
              defaultChecked={couchbase.useSSL}
              onChange={formik.handleChange}
            />
          </Col>
        </FormGroup>
      </CardBody>
    </Card>
  )
}

export default CouchbaseItem
