import Card from 'react-bootstrap/Card';

export const MusicBar = () => {
    // your code here
    return (
        <>
        <Card bg={'dark'} border="dark" style={{ width: '66rem', height: '10rem'}}  text='light'>
        <Card.Header></Card.Header>
            <Card.Body>
            <Card.Title>Play Div</Card.Title>
                <Card.Text>
                    
                </Card.Text>
            </Card.Body>
        </Card>       
        </>
    );
}