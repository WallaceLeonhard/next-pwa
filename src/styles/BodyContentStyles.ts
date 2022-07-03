import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #ffffff;

  .post-container {
    display: flex;
    margin-top: 60px;
    margin-left: 50px;
    gap: 200px;
  }

  .img-container {
    width: 40%;
    display: flex;
    flex-direction: column;

    span {
      font-size: 14px;
    }
  }

  .post-text {
    h2 {
      font-size: 24px;
      color: #290742;
    }

    p {
      font-size: 16px;
    }
  }

  .side-post {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .side-post-1 {
    border-bottom: 1px solid #f2e7fa;
    padding-bottom: 20px;
    span {
      font-size: 14px;
    }

    h2 {
      color: #290742;
      font-size: 24px;
    }
    p {
      font-size: 16px;
    }

    span {
      font-size: 14px;
    }
  }

  .side-post-2 {
    span {
      font-size: 14px;
    }

    h2 {
      color: #290742;
      font-size: 24px;
    }
    p {
      font-size: 16px;
    }
  }

  .lower-posts {
    margin-top: 50px;
    display: flex;
    gap: 40px;
  }

  .lower-post-1 {
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    h2 {
      color: #290742;
      font-size: 24px;
    }
    p {
      font-size: 16px;
    }

    span {
      margin-top: 5px;
      font-size: 14px;
    }
  }

  .lower-post-2 {
    display: flex;
    flex-direction: column;
    h2 {
      color: #290742;
      font-size: 24px;
    }
    p {
      font-size: 16px;
    }

    span {
      margin-top: 5px;
      font-size: 14px;
    }
  }

  .lower-post-3 {
    margin-right: 50px;
    display: flex;
    flex-direction: column;
    h2 {
      color: #290742;
      font-size: 24px;
    }
    p {
      font-size: 16px;
    }

    span {
      margin-top: 5px;
      font-size: 14px;
    }
  }
`;
