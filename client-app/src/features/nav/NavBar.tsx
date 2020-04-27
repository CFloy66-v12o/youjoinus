import React from 'react'
import { Menu, Segment, Container, Button } from 'semantic-ui-react'

interface IProps {
    openCreateForm: () => void;
}

export const NavBar: React.FC<IProps> = ({openCreateForm}) => {
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
                    <Button onClick={openCreateForm} positive content='Create Activity'></Button>
                </Menu.Item>
            </Container>
        
      </Menu>
    )
}
