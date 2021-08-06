import React, {useState, useEffect} from 'react'
import { getAlbumById } from '../api'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

const OrdersAlbums = ({ albumId }) => {

    const [album, setAlbum] = useState()

    useEffect(() => {
        const mount = async () => {
            try {
                const result = await getAlbumById(albumId)
                setAlbum(result[0])
            } catch(error) {
                console.log(error)
            }
        }
        mount()
    }, [])

    return (
        <div>
            {album ? 
                <Card style={{ width: '18rem', marginBottom: '1rem' }}>
                    <Card.Img variant="top" src={album.img_url} alt={album.album_name} />
                    <Card.Body>
                        <Card.Title>{album.album_name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            {album.artist} ({album.year})
                        </Card.Subtitle>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>{album.total_tracks} tracks</ListGroupItem>
                        <ListGroupItem>Price: ${album.price / 100}</ListGroupItem>
                    </ListGroup>
                </Card> 
            : <div>Loading...</div>
        }</div>
    )
}

export default OrdersAlbums;