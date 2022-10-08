import { FC, memo } from "react";

import { styled, theme } from 'ui/styles'

import { Page } from "ui/components";
import image from 'ui/images/image.png';

import { Sidebar } from "ui/components/Sidebar";
import { ProfileContent } from "ui/components/ProfileContent";

const ProfilePage = styled(Page)`
    background-color: ${theme.palette.off_sub_main};
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
`

const WrapperSidebar = styled(Sidebar)`
    flex: 1 0 50px;
`
const WrapperContent = styled(ProfileContent)`
    flex: 10 0 900px;
`

const _Profile: FC = () => {
  return (
    <ProfilePage>
        <img src={image} alt='kartinka'/>
        <Wrapper>
        <WrapperSidebar />
        <WrapperContent />
        </Wrapper>
    </ProfilePage>
  )
}

export const Profile = memo(_Profile);