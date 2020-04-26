import React from 'react'
import { Menu, Segment, Container, Button } from 'semantic-ui-react'

export const NavBar = () => {
    return (
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item header>
                    <img src="/assets/images/logo.png" alt="logo" style={{marginRight: '10px'}} />
                    YouJoinUs
                </Menu.Item>
                <Menu.Item
                    name='Activities'
                />
                <Menu.Item>
                    <Button positive content='Create Activity'></Button>
                </Menu.Item>
            </Container>
        
      </Menu>
    )
}
