import styled from 'styled-components'

export const Wrapper = styled.div`
  display: block;
  height: 100%;
  min-height: 160px;
  width: 100%;
  min-width: 160px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-size: 80rem 15rem;
  animation: placeholderShimmer 1s linear infinite forwards;
  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }

  img {
    width: 100%;
    height: 100%;
    align-self: flex-end;
    flex-shrink: 0;
  }
`
