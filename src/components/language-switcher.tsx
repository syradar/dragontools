import { ValidLanguage } from '../hooks/useValidLanguage'
import { useAppDispatch, useAppSelector } from '../store/store.hooks'
import {
  selectCurrentLanguage,
  selectTranslateFunction,
  setTranslationsAsync,
} from '../store/translations/translation.slice'
import { SegmentedControl } from './SegmentedControl'
import { SegmentedControlButton } from './SegmentedControlButton'
import { LanguageButton } from './language-button'

export const LanguageSwitcher = () => {
  const lang = useAppSelector(selectCurrentLanguage)
  const t = useAppSelector(selectTranslateFunction(['core']))
  const dispatch = useAppDispatch()

  const changeLanguage = async (lng: ValidLanguage) => {
    await dispatch(setTranslationsAsync({ language: lng, source: 'user' }))
  }

  return (
    <SegmentedControl>
      <SegmentedControlButton
        active={lang === 'sv'}
        onPress={() => changeLanguage('sv')}
      >
        {t('core:language.swedish')}
      </SegmentedControlButton>
      <SegmentedControlButton
        active={lang === 'en'}
        onPress={() => changeLanguage('en')}
      >
        {t('core:language.english')}
      </SegmentedControlButton>
    </SegmentedControl>
  )
}
