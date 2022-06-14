import styled, {keyframes} from "styled-components"

export default function TextAnimation({text}) {
    return <Wrapper>{text}</Wrapper>
}

const animation = keyframes`
    0% {opacity:0;}
    100% {opaccity:1}
`

const Wrapper = styled.span`
    animation-name: ${animation};
    animation-duration: 6s;
    animation-fill-mode: forwards;
`