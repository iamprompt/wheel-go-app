import type { FC } from 'react'
import { Modal as RNModal, View } from 'react-native'
import COLORS from '~/styles/colors'

interface ModalProps {
  isVisible: boolean
  onClose: () => void
  onAction?: () => void
  modal: FC<{ onClose: () => void; onAction?: () => void }>
}

export const Modal: FC<ModalProps> = ({
  isVisible,
  onClose,
  onAction,
  modal: ModalContent,
}) => {
  return (
    <RNModal visible={isVisible} animationType="fade" transparent>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: COLORS.magenta[600],
          opacity: 0.6,
          flex: 1,
        }}
      />
      <View
        style={{
          padding: 16,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ModalContent onClose={onClose} onAction={onAction} />
      </View>
    </RNModal>
  )
}
