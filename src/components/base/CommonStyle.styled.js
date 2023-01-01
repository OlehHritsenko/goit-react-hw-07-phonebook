import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  justify-content: center;
  grid-gap: 15px;
  width: 400px;
  margin: 30px auto;
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.75);
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 36px;
  font-weight: 700;
  color: #000;
`;

export { Container, Section, Title };