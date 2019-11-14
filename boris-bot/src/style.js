import styled from 'styled-components';
import { breakpoints } from '@times-visuals/styles';

export const Background = styled.div`
  background-color: #f9f9f9;
`;

export const Container = styled.div`
  width: 95%;
  @media only screen and (max-width: ${breakpoints.micro}) {
    width: 95%;
  }
  @media only screen and (min-width: ${breakpoints.micro}) and (max-width: ${breakpoints.mobile}) {
    max-width: 498px;
  }
  @media only screen and (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    max-width: 78.8%;
  }
  @media only screen and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    max-width: 58.333%;
  }
  @media only screen and (min-width: ${breakpoints.desktop}) {
    max-width: 665px;
  }
  margin: 0 auto;

  h1 {
    font-size: 3.3rem;
    padding-bottom: 1.2rem;
    font-weight: normal;
  }

  h2 {
    font-weight: normal;
    font-family: TimesDigitalW04-Regular !important;
    font-size: 1.8rem !important;
    line-height: 2.3rem !important;
    -webkit-font-smoothing: antialiased;

    @media only screen and (min-width: ${breakpoints.mobile}) {
      font-size: 2rem !important;
      line-height: 2.5rem !important;
    }
  }

  div.quotes {
    text-align: center;
    margin: auto;
  }

  h4 {
    font-size: 2.7rem;
    line-height: 2.9rem;
    font-family: TimesModern-Regular;
    text-align: center;
    color: #000000;
    letter-spacing: 0.14px;
    padding-bottom: 6rem;
    font-weight: normal;
  }

  h5 {
    text-align: center;
    font-size: 1.6rem;
    letter-spacing: 0.14px;
    line-height: 38px;
    font-family: 'Gill Sans';
    font-weight: normal;
    margin-top: -4rem;

    &.Correct {
      color: #064789;
    }

    &.Incorrect {
      color: #c1272d;
    }

    &.hidden {
      visibility: hidden;
    }
  }

  .hihDoL {
    margin: 0;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  button {
    background-color: transparent;
    margin: 1rem;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2.1rem;
    line-height: 2.4rem;
    letter-spacing: 1.41px;
    font-family: 'Gill Sans';
    color: #000000;

    img {
      padding-bottom: 1rem;

      &.hidden {
        display: none;
      }
    }
  }

  .results {
    width: 150%;
    @media only screen and (min-width: ${breakpoints.mobile}) {
      width: 50%;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h2 {
      padding-top: 1rem;
      font-family: TimesModern-Regular;
      color: #000000;
      font-size: 3.6rem;
      font-weight: 800;
      line-height: 4rem;
      text-align: center;
      letter-spacing: 2.41px;
      font-weight: normal;
    }
  }

  button:hover {
    // border: 1px solid #13354e;
    cursor: pointer;
  }

  button:disabled {
    border: none;
  }
`;

export const BorisImage = styled.img`
  &:hover:not(.unhoverable) {
    background: url(${props => props.hover});
    background-size: 100%;
    background-repeat: no-repeat;
  }
`;

export const MoreButton = styled.div`
  width: 100%;
  text-align: center;
  padding: 2rem;

  button {
    margin-top: -8rem;
    border: 1px solid #979797;
    font-size: 1.8rem;
    width: 16rem;
    height: 4rem;
    color: #979797;
    background: transparent;
    font-family: 'Gill Sans';

    &.hidden {
      // opacity: 0;
      visibility: hidden;
    }

    &:hover {
      border: 1px solid #13354e;
      cursor: pointer;
    }
  }
`;
