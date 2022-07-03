import styled from "styled-components";

export const MainHeaderContainer = styled.div`
  height: 65vh;
  width: 100%;
  background-color: #290742;
  .footer {
    position: absolute;
    top: 65vh;
    height: 5px;
    width: 100%;
    background-color: #4fff4b;
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: space-between;

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 60px;
  }

  .link-list {
    display: flex;
    align-items: center;
    justify-content: center;

    ul {
      display: flex;
      list-style: none;
    }

    a {
      font-size: 1.2rem;
      font-weight: 500;
      color: #ffffff;
      padding: 20px;
      text-decoration: none;
    }
  }

  .search-bar {
    margin-right: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    input {
      padding: 10px;
      border-radius: 5px 0 0 5px;
      border: none;
      background: #170027;
      color: #ffffff;
      outline: none;
    }

    button {
      border-radius: 0 5px 5px 0;
      border: none;
      height: 34px;
      background: #9e6dc2;
      padding: 2px 15px;
      display: flex;
      align-items: center;
      justify-content: center;

      > svg {
        color: #ffffff;
      }
    }
  }
`;

export const DescriptionSection = styled.section`
  display: flex;
  margin-top: 40px;
  justify-content: center;
  width: 100%;
  .text-content {
    width: 40%;
    margin-right: 170px;

    h1 {
      width: 80%;
      font-size: 2rem;
      color: #9e6dc2;
      margin-bottom: 20px;
    }

    p {
      color: #ffffff;
      text-align: justify;
      width: 75%;
    }

    button {
      display: flex;
      justify-content: center;
      border: none;
      cursor: pointer;
      gap: 5px;
      font-size: 1rem;
      font-weight: 600;
      background-color: #290742;
      color: #9e6dc2;

      > svg {
        color: #4fff4b;
      }
    }
  }
`;
