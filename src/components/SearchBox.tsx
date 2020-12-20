import React from 'react';
import styled from 'styled-components';

interface Props {
  text?: string;
}

const Card = styled.div`
  width: 200px;
  height: 200px;
  border: none;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${(props: { imageUrl: string }) => props.imageUrl});
  background-repeat: no-repeat;
  background-size: cover;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
`;

const UserName = styled.span`
  color: rgb(75 178 252);
`;

const CardBody = styled.div``;

const Form = styled.form`
  position: relative;
  width: 30rem;
  background: #57bd84;
  border-radius: 0.7rem;
`;

const Label = styled.label`
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0;
  border: 0;
  height: 1px;
  width: 1px;
  overflow: hidden;
`;

const Input = styled.input`
  height: 5rem;
  font-family: 'Lato', sans-serif;
  border: 0;
  color: #2f2f2f;
  font-size: 1.8rem;

  outline: 0; // <-- shold probably remove this for better accessibility, adding for demo aesthetics for now.
  width: 100%;
  background: #fff;
  padding: 0 1.6rem;
  border-radius: 0.7rem;
  appearance: none; //for iOS input[type="search"] roundedness issue. border-radius alone doesn't work
  transition: all 0.3s cubic-bezier(0, 0, 0.43, 1.49);
  transition-property: width, border-radius;
  z-index: 1;
  position: relative;

  &:not(:placeholder-shown) {
    border-radius: 0.7rem 0 0 0.7rem;
    width: calc(100% - 6rem);
    + Button {
      display: block;
    }
  }
`;

const Button = styled.button`
  height: 5rem;
  font-family: 'Lato', sans-serif;
  border: 0;
  color: #2f2f2f;
  font-size: 1.8rem;

  display: none; // prevent being able to tab to it
  position: absolute;
  top: 0;
  right: 0;
  width: 6rem;
  font-weight: bold;
  background: #57bd84;
  border-radius: 0 0.7rem 0.7rem 0;
`;

const SearchBox: React.FC<Props> = ({ text }) => {
  return (
    <Form>
      <Label htmlFor="search">Buscar playlists</Label>
      <Input
        id="search"
        type="search"
        placeholder="Buscar..."
        autoFocus
        required
      />
      <Button type="submit">Ir</Button>
    </Form>
  );
};

export default SearchBox;
