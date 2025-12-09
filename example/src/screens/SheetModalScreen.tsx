import { useRef } from 'react'
import { Text, View, type TextStyle, type ViewStyle } from 'react-native'
import { TrueSheet } from '@lodev09/react-native-true-sheet'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Button } from '../components'
import { useAppNavigation } from '../hooks'
import { DARK, GRAY, LIGHT_GRAY, SPACING } from '../utils'

export const SheetModalScreen = () => {
  const navigation = useAppNavigation<'SheetModal'>()
  const sheetRef = useRef<TrueSheet>(null)
  const insets = useSafeAreaInsets()

  const close = () => {
    sheetRef.current?.dismiss()
  }

  return (
    <View style={$container}>
      <TrueSheet
        ref={sheetRef}
        name="transparent-modal-sheet"
        sizes={['auto']}
        backgroundColor="white"
        cornerRadius={16}
        dismissible
        initialIndex={0}
        initialIndexAnimated
        onDismiss={() => navigation.goBack()}
        contentContainerStyle={[
          { paddingBottom: insets.bottom + SPACING, padding: SPACING, gap: SPACING },
        ]}
        blurTint="dark"
        dimmedIndex={0}
      >
        <Text style={$label}>Transparent modal</Text>
        <Text style={$title}>Log out?</Text>
        <Text style={$subtitle}>
          This route uses a transparent modal presentation and TrueSheet so you can show contextual
          flows without leaving the current screen.
        </Text>

        <View style={$actions}>
          <Button text="Confirm" onPress={close} />
          <Button text="Cancel" onPress={close} />
        </View>
      </TrueSheet>
    </View>
  )
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: 'rgba(0, 0, 0, 0.45)',
}

const $label: TextStyle = {
  color: LIGHT_GRAY,
  textTransform: 'uppercase',
  letterSpacing: 1,
}

const $title: TextStyle = {
  fontSize: 22,
  fontWeight: '700',
  color: DARK,
}

const $subtitle: TextStyle = {
  color: GRAY,
  lineHeight: 20,
}

const $actions: ViewStyle = {
  gap: SPACING / 2,
}
