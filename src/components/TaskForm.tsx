import { FormEvent, useRef, useState } from "react"
import { Button, Col, Form, Row, Stack } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import CreatableReactSelect from 'react-select/creatable'
import { Tag, TaskData } from "../task"
import {v4 as uuidV4} from 'uuid'

type TaskFormProps={
    onSubmit:(data : TaskData ) =>void
    onAddTag:(tag:Tag)=>void
    avaliableTags:Tag[]
} & Partial<TaskData>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TaskForm=({onSubmit ,onAddTag ,avaliableTags , title='', body='',tags=[]}:TaskFormProps)=> {
    const titleRef =useRef<HTMLInputElement>(null)
    const bodyRef =useRef<HTMLTextAreaElement>(null)
    const [selectTag, setSelectedTag] =useState<Tag[]>(tags)
   
    const navigate = useNavigate()
    function handleSubmit(e: FormEvent) {
        
         e.preventDefault()
         
         onSubmit({
            title:titleRef.current!.value,
            body:bodyRef.current!.value,
            tags:selectTag
         })
         navigate('..')
    } 

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={4}/>
      <Row>
      <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control ref={titleRef} required 
              defaultValue={title} />
            </Form.Group>
      </Col>
        <Col>
            <Form.Group controlId="tags">
            <Form.Label>Tags</Form.Label>
            <CreatableReactSelect onCreateOption={label => {
                  const newTag = { id: uuidV4(), label }
                  onAddTag(newTag)
                  setSelectedTag(prev => [...prev, newTag])
                }}
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
                isMulti/>
            </Form.Group>
        </Col>
        </Row>
        
        <Form.Group controlId="body">
        <Form.Label>Body</Form.Label>
        <Form.Control 
        ref={bodyRef}
        defaultValue={body}
        className="shadow" 
        required as='textarea'
         rows={10}/>
        </Form.Group>
       
        <Stack className="justify-content-end m-2" 
        direction="horizontal" gap={2}>
            <Button type='submit'variant="primary"> Save</Button>
           <Link to='..'>
              <Button type='button' variant="outline-secondray"> Cancel</Button>
           </Link>
            
        </Stack>
      
    </Form>
  )
}

export default TaskForm