import React, { useDispatch } from 'react-redux'
import { delete_task, done } from '../redux/Actions'
import { Button, Card } from 'react-bootstrap'
function Task({ description, isDone, id }) {
    const dispatch = useDispatch()

    return (
        <Card body style={{ backgroundColor: isDone ? '#f9ccac' : '#d9ecd0', borderRadius: '10px', margin: '5px', border: '1px solid#454140' }}>
            <h2 style={{ textDecoration: isDone && 'line-through', fontWeight: '700' }}>{description}</h2>
            <div>
                <Button style={{ width: '100px', margin: '5px', borderRadius: "10px" }} onClick={() => dispatch(done(id))} variant="success">{isDone ? 'Re-Take' : 'Done'}</Button>
                <Button style={{ width: '100px', margin: '5px', borderRadius: "10px" }} onClick={() => dispatch(delete_task(id))} variant="danger">Delete</Button>
            </div>
        </Card>
    )
}

export default Task;
