
import { Badge, Button, Col, Container, Row, Stack } from 'react-bootstrap'

import { useTask } from './TaskLayout'
import { Link, useNavigate} from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
type TaskProps={
  onDeletTask: (id:string)=>void
}

export default function Task({onDeletTask}:TaskProps) {
    const task = useTask()
   const navigate = useNavigate()
  return (
    <Container className={`bg-${'#bbdefb'} border rounded shadow-lg m-8`}>
      <Row className='align-items-center my-4'>
       <Col sx='auto'>
       <h1>{task.title}</h1>
       {task.tags.length >0 &&(
        <Stack gap={1}
        direction='horizontal'
        className=' flex-wrap'>
          {task.tags.map(
            tag=>(
                <Badge className='text-trancate' key={tag.id}>
                    {tag.label}
                </Badge>
            )
          )}   
        </Stack>
       )}
       </Col>
       <Col xs='auto'>
       <Stack gap={2}
        direction='horizontal'
        className=' flex-wrap'>
          <Link to={`/${task.id}/edit`}>
            <Button variant='primary'>Edit</Button>
          </Link>
          <Button variant='outline-danger' onClick={()=>{
            onDeletTask(task.id)
            navigate('..')

          }}>Delete</Button>
          <Link  to='..' replace>
            <Button variant='outline-secondary'>Back</Button>
          </Link>
        </Stack>
       </Col>
      </Row>
      <ReactMarkdown className={'bg-light p-1 mb-2 rounded'}>
        {
            task.body
        }
      </ReactMarkdown>
    </Container>
  )
}
