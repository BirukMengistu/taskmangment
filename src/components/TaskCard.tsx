import React from 'react'
import { Tag } from '../task'
import { Badge, Card, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import styles from '../assets/styles/styles.module.css'
type TaskCardProps ={
    id:string,
    title:string,
    tag:Tag[]
}
export default function TaskCard({id, title, tag}:TaskCardProps) {
  return (
    <Card as={Link} to={`/${id}`} key={id} 
    className={`h-100 text-reset text-decoration-none ${styles.card}`}>
        <Card.Body>

          <Stack
          gap={2}
          className="align-items-center justify-content-center h-100"
        >
          <span className="fs-5">{title}</span>
          {tag.length > 0 && (
            <Stack
              gap={1}
              direction="horizontal"
              className="justify-content-center flex-wrap"
            >
              {tag.map(tag => (
                <Badge className="text-truncate p-2" key={tag.id}>
                  {tag.label}
                </Badge>
              ))}
            </Stack>
             )}
             </Stack>
             
      
      </Card.Body>
      
    </Card>
  )
}
