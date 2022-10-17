import styled from 'styled-components';

export type ModalContentProps = {
  isOpen: boolean;
  widthModal?: string;
} & React.HTMLAttributes<HTMLElement>;

type ModalOverlayProps = {
  shouldCloseOnOverlayClick?: boolean;
  shouldCloseOnEscClick: boolean;
  isOpen: boolean;
};

export const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const ModalContent = styled.div<ModalContentProps>`
  display: flex;
  flex-direction: column;
  width: ${({ widthModal }) => widthModal || 'fit-content'};
  height: fit-content;
  border-radius: ${({ theme }) => theme.border.radius.medium};
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.content};
  color: ${({ theme }) => theme.colors.neutral_black};
  z-index: ${({ theme }) => theme.layers.modal};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
`;

export const ModalOverlay = styled.div<ModalOverlayProps>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: ${({ theme }) => theme.layers.overlay};
`;

export const ModalCloseButton = styled.button`
  margin-left: auto;
  margin-right: -14px;
  margin-top: -14px;
  color: ${({ theme }) => theme.colors.primary};
  background: transparent;
  border: 0;
  transition: 0.3s;
  border-radius: ${({ theme }) => theme.border.radius.circle};
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray_20};
  }
`;

export const ModalRoot = styled.div`
  .quimera-overlay-enter {
    opacity: 0;
  }
  .quimera-overlay-enter-active {
    opacity: 1;
    transition: opacity 300ms;
  }
  .quimera-overlay-exit {
    opacity: 1;
  }
  .quimera-overlay-exit-active {
    opacity: 0;
    transition: opacity 300ms;
  }

  .quimera-modal-enter {
    opacity: 0;
    transform: scale(0.9);
  }
  .quimera-modal-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms, transform 300ms;
  }
  .quimera-modal-exit {
    opacity: 1;
  }
  .quimera-modal-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }
`;
