import styled from 'styled-components';
import { CenterVFlex } from '../../Common/elements/containers';

export const StyledPlaylist = styled(CenterVFlex)`
  overflow-y: scroll;
  width: 37%;
  max-height: 950px;
  padding: 2.27rem 1.16rem;
  background-color: rgba(1, 12, 63, 0.7);
  box-shadow: 0 4px 2px 2px #000000;

  input {
    width: 100%;
    border: 0;
    outline: 0;
    background: transparent;
    border-bottom: 1px solid #6f6f6f;
    font-family: 'Poppins', sans-serif;
    font-size: 1.55rem;
    color: #fff;
  }
  @media (max-width: 1020px) {
    width: 90%;
  }
`

export const PlaylistSaveBtn = styled.button`
  cursor: pointer;
  width: 10rem;
  padding: .77rem 0;
  border-radius: 54px;
  border-width: 0px;
  margin-top: 1.27rem;
  background-color: #6c41ec;
  text-align: center;
  font-size: .83rem;
  transition: background-color .25s;
  color: #fff;
  font-weight: 500;

  &:hover {
    background-color: rgba(108, 65, 233, .7);
  }
`  
