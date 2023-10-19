import React, { useMemo, useState } from 'react'
import { Button, Col, Container, Form, Modal, Row, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReactSelect from 'react-select'
import { Tag ,TaskData, Tasks} from './task'
import { v4 as uuidV4 } from 'uuid';
import TaskCard from './components/TaskCard'

type SimplifiedTask = {
    tags: Tag[]
    title: string
    id: string
  }
type TaskListProps={
    avaliableTags:Tag[]
    tasks:SimplifiedTask[]
    onDeleteTag: (id: string) => void
    onUpdateTag: (id: string, label: string) => void
}
type EditTagsModalProps = {
  show: boolean
  availableTags: Tag[]
  handleClose: () => void
  onDeleteTag: (id: string) => void
  onUpdateTag: (id: string, label: string) => void
}
export default function Home({avaliableTags ,tasks , onUpdateTag,
  onDeleteTag}:TaskListProps) {
    const [selectTag, setSelectedTag] =useState<Tag[]>([])
    const [title, setTitle] =useState('')
    const [editTagsModalIsOpen, setEditTagsModalIsOpen] = useState(false)
    const  filteredTask= useMemo(()=>{
        return tasks.filter(task =>{
            return (title === '' || task.title.toLowerCase().includes(title.toLowerCase())) 
            && (selectTag.length === 0) &&
             (selectTag.every(tag => task.tags.some(Tasktag=>
                Tasktag.id === tag.id)))
        })
    },[title ,setSelectedTag,tasks])
  return (
    <Container className='align-item-center shadow-lg m-8 p-4 '>
      <></>
    <Row>
        <Col><h1>Tasks - <span>{(new Date()).toString().slice(0,10)}</span></h1></Col>
        <Col xs='auto'>
        <Stack gap={2}  direction='horizontal' className="ml-2"/>
        <Link to='/new' >
            <Button className="m-2" variant='primary'>Create</Button>
            
        </Link>
        <Button variant='outline-secondary'
         onClick={() => setEditTagsModalIsOpen(true)}
         >Edit Tags</Button>
        </Col>
    </Row>
      <Form>
        <Row className="mb-4">
            <Col className="mb-4">
              <Form.Group controlId='title' >
                <Form.Label>Title</Form.Label>
                <Form.Control type='text'
                 value={title}
                 onChange={(e)=> setTitle(e.target.value)}/>
              </Form.Group>
            </Col>
            <Col>
        <Form.Group controlId="title">
        <Form.Label>Tag</Form.Label>
        <ReactSelect
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
                isMulti
              />
        </Form.Group>
        </Col>
        </Row>
     </Form>
     <Row xs={1} sm={2} lg={3} xl={4}
      className='g-4'>
        {
            filteredTask.map(task =>(
                <Col key={task.id}>
                    <TaskCard id={task.id} title={task.title} tag={task.tags}/>
                </Col>
            ))
        }
     </Row>
     <EditTagsModal
        onUpdateTag={onUpdateTag}
        onDeleteTag={onDeleteTag}
        show={editTagsModalIsOpen}
        handleClose={() => setEditTagsModalIsOpen(false)}
        availableTags={avaliableTags}
      />
    </Container>
  )
}

function EditTagsModal({
  availableTags,
  handleClose,
  show,
  onDeleteTag,
  onUpdateTag,
}: EditTagsModalProps) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Tags</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack gap={2}>
            {availableTags.map(tag => (
              <Row key={tag.id}>
                <Col>
                  <Form.Control
                    type="text"
                    value={tag.label}
                    onChange={e => onUpdateTag(tag.id, e.target.value)}
                  />
                </Col>
                <Col xs="auto">
                  <Button
                    onClick={() => onDeleteTag(tag.id)}
                    variant="outline-danger"
                  >
                    &times;
                  </Button>
                </Col>
              </Row>
            ))}
          </Stack>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

