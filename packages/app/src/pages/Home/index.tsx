import { Button, Heading, Separator } from '@quimera-ui/react';
import { useState } from 'react';
import * as S from './styles';

export function Home() {
  const [handleOpen, setHandleOpen] = useState(false);
  return (
    <S.Container>
      <Heading bold color="primary" size="2xl">
        Title
      </Heading>
      <Button>Button</Button>
      <Separator color="#f0eff4" mb="2rem" />
      <Button variant="filled" onClick={() => setHandleOpen(true)}>
        Abrir Modal
      </Button>
      {/* <Modal
        isOpen={handleOpen}
        viewCloseButton
        onRequestClose={setHandleOpen}
        shouldCloseOnOverlayClick
      >
        Content Modal
      </Modal> */}
    </S.Container>
  );
}
