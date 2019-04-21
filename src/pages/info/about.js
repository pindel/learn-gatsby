import React from 'react';
import {Link} from 'gatsby';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from "../../components/layout2";

import myImage from '../../images/johnLednipmin.jpg';

const UserWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 0, auto, 12px, auto;
`

const Avatar = styled.img`
    flex: 0 0 96px;
    width: 96px;
    margin: 0;
`

const Descrtipion = styled.div`
    flex: 1;
    margin-left: 18px;
    padding: 12px; 
`

const Username = styled.div`
    margin: 0 0 12px 0;
`

const Excerpt = styled.p`
    margin: 0;
`
const User = props => (
    <UserWrapper>
        <Avatar src={props.avatar} atl="" />
        <Descrtipion>
            <Username>{props.username}</Username>
            <Excerpt>{props.excerpt}</Excerpt>
        </Descrtipion>
    </UserWrapper>
)

const AboutPage = ({data}) => (
    <Layout>
        <div>
            <h1>About Page</h1>
            <User
                username={data.site.siteMetadata.author}
                avatar={myImage}
                excerpt="QA Engineer & World Traveler"/>
            <br />
            <Link to="/">Go Back To Home</Link>
         </div>
    </Layout>
)

export const query = graphql `
    query {
        site {
            siteMetadata {
                author
            }
        }
    }
`

export default AboutPage;