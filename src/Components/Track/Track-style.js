import styled from 'styled-components';
import { Flex, VFlex } from '../../Common/elements/containers';

export const StyledTrack = styled(Flex)`
    align-items: center;
    border-bottom: 1px solid rgba(256, 256, 256, 0.8);
`

export const TrackAction = styled.button`
    cursor: pointer;
    padding: .5rem;
    font-size: 1.05rem;
    transition: color .25s;
    border: 0px;
    background-color: rgba(0, 0, 0, 0);
    color: #fff;

    &:hover {
        color: rgba(265, 265, 265, .5);
    }
`

export const TrackInfromation = styled(VFlex)`
    flex-grow: 1;
    justify-content: center;
    height: auto;

    h3 {
        margin-bottom: .22rem;
    }
    p {
        font-size: .83rem;
        font-weight: 300;
        color: rgba(256, 256, 256, 0.8);
    }
`