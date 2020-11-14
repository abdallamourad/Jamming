import styled from 'styled-components';

export const Flex = styled.div`
    display: flex;
`

export const VFlex = styled(Flex)`
    flex-direction: column;
`

export const CenterFlex = styled(Flex)`
    justify-content: center;
`

export const CenterVFlex = styled(VFlex)`
    align-items: center;
`