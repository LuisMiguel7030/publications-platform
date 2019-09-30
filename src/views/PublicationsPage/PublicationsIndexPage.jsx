import './publicationsIndexPage.scss';
import { Card, Button, Input } from 'components/core';
import { User } from 'components/core/Icon';
import React, { useState } from 'react';
import statusMock from 'mock/statusMock'

function PublicationsIndexPage() {

    const [status, setStatus] = useState(statusMock);
    const [publication, setPublication] = useState('');

    const handleOnClick = () => {
        if (publication) {
            setStatus([
                ...status,
                {
                    name: 'Juan Rodriguez',
                    status: publication,
                    comments: 0
                }
            ]);
            setPublication('');
        }
    };

    const handleOnChange = event => {
        setPublication(event.target.value);
    };

    const renderPublicationsStatus = ({ name, status, comments, index}) => (
        <section className="publications publications--status" key={index}>
            <Card>
                <Card.Content>
                    <div className="publications-header">
                        <User className="publications-header__icon"/>
                        <span className="publications-header__name">{name}</span>
                    </div>
                    <p className="publications--status__text">{status}</p>
                </Card.Content>
                <Card.Actions>
                    <span>{`${comments} comentarios`}</span>
                </Card.Actions>
            </Card>
        </section>
    );

    return (
        <div className="publications-index-page">
            <section className="publications publications--write-status">
                <Card>
                    <Card.Content>
                        <Input
                            type="text"
                            placeholder="Escribe aqui tu estado"
                            onChange={handleOnChange}
                            value={publication}
                        />
                    </Card.Content>
                    <Card.Actions className="publications--write-status__button">
                        <Button color="green" onClick={() => handleOnClick()}>
                            Publicar
                        </Button>
                    </Card.Actions>
                </Card>
            </section>

            {status.map( (info, index) => renderPublicationsStatus({...info, index})).reverse()}
        </div>
    )
}

export default PublicationsIndexPage;