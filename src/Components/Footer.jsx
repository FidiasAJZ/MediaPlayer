import Card from 'react-bootstrap/Card';

export const Footer = () => {
    // your code here
    return (
        <>
        <Card bg={'dark'} border="dark" style={{ width: '66rem', height: '11rem', marginBottom:'0rem'}} text='light'>
        <Card.Header></Card.Header>
            <Card.Body>
            <Card.Title>Footer</Card.Title>
                <Card.Text>
                    
                </Card.Text>
            </Card.Body>
        </Card>       
        </>
    );
}