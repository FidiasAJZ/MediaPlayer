import Card from 'react-bootstrap/Card';

export const Main = () => {
    return (
        <>
        {[,
            'Dark'
        ].map((variant) => (
            <Card
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ width: '66rem', height:'30rem', marginBottom: '0rem', paddingBottom: '0px'}}
            >
            <Card.Header></Card.Header>
            <Card.Body>
                <Card.Title>Gallery Section</Card.Title>
                    <Card.Text>
                    
                    </Card.Text>
            </Card.Body>
            </Card>
        ))}
        </>
      );
}