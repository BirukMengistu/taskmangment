import { useState} from 'react'
import { Button, Col, Container, Form, Row, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReactSelect from 'react-select'
import { Tag } from '../task'
//import {v4 as uuidV4} from 'uuid'
type TaskListProps={
    avaliableTags:Tag[]
}


export default function TaskList({avaliableTags}:TaskListProps) {
    const [selectTag, setSelectedTag] =useState<Tag[]>([])

  return (
    <Container className='shadow-lg m-4'>
    <Row>
        <Col><h1>Tasks - <span>{(new Date()).toString().slice(0,10)}</span></h1></Col>
        <Col xs='auto'>
        <Stack gap={2}  direction='horizontal' className="ml-2"/>
        <Link to='/new' >
            <Button className="m-2" variant='primary'>Create</Button>
            
        </Link>
        <Button variant='outline-secondary'
        
         >Edit Tags</Button>
        </Col>
    </Row>
      <Form>
        <Row className="mb-4">
            <Col className="mb-4">
              <Form.Group controlId='title' >
                <Form.Label>Title</Form.Label>
                <Form.Control type='text'/>
              </Form.Group>
            </Col>
            <Col>
        <Form.Group controlId="title">
        <Form.Label>Tag</Form.Label>
        <ReactSelect isMulti
         value={selectTag.map(tag => {
          return { label: tag.label, value: tag.id }
        })}
        options={avaliableTags.map(tag => {
          return { label: tag.label, value: tag.id }
        })}
        onChange={tags => {
          setSelectedTag(
            tags.map(tag => {
              return { label: tag.label, id: tag.value }
            })
          )
        }}
       />
        </Form.Group>
        </Col>
        </Row>
     </Form>
   
      
    </Container>
  )
}

