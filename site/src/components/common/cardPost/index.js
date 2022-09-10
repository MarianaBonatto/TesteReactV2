import React from 'react';

import { Card, Space, Comment, Avatar } from 'antd'

const CardPost = () => {

    return (
        <Card
            hoverable
            style={{
                borderRadius: 15,
                width: '70%',
                height: '100%'

            }}>
            <Avatar src="https://avatars.githubusercontent.com/u/73591609?v=4" alt="Nath" />
            <a>Nathaly Oliveira</a>
            <div>
                <p>Abacate</p>
                <iframe width='100%' height='350' src="https://www.youtube.com/embed/q9XTofdjTVQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </Card>
    );
};

export default CardPost;