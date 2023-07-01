import { Typography } from '../../../components/Typography'
import { PageHeader } from '../../../components/page-header'

import { useAppSelector } from '../../../store/store.hooks'
import { selectTranslateFunction } from '../../../store/translations/translation.slice'

const HomePage = () => {
  const t = useAppSelector(selectTranslateFunction(['home', 'core']))
  const showCommunity = false

  return (
    <div className="max-w-prose">
      <PageHeader>{t('home:page')}</PageHeader>

      <p className="yx-prose mb-8 text-lg">{t('home:description')}</p>

      <Typography variant="h2" parchment>
        {t('home:game_title')}
      </Typography>

      <p className="yx-prose mb-8 text-lg">
        {t('home:thanks_to')}{' '}
        <a
          className="text-emerald-600 hover:underline"
          href="https://freeleaguepublishing.com/sv/"
        >
          {t('home:free_league')}
        </a>{' '}
        {t('home:for_a_fantastic_game')}
      </p>

      <Typography variant="h2" parchment>
        {t('home:community.title')}
      </Typography>

      <p className="yx-prose mb-4 text-lg">{t('home:community.thanks')}</p>

      {showCommunity ? (
        <div className="yx-prose flex flex-wrap gap-4 text-lg">
          <a
            className="text-red-700 hover:underline"
            href="https://discord.gg/RnaydHR"
          >
            Discord
          </a>
          <a
            className="text-red-700 hover:underline"
            href="https://www.reddit.com/r/ForbiddenLands/"
          >
            Reddit
          </a>
          <a
            className="text-red-700 hover:underline"
            href="https://www.facebook.com/groups/469674263432738/"
          >
            Facebook
          </a>
          <a
            className="text-red-700 hover:underline"
            href="https://forum.frialigan.se/"
          >
            Forum
          </a>
        </div>
      ) : null}

      <Typography variant="h2" parchment>
        {t('home:more_tools.title')}
      </Typography>

      <Typography variant="h3" parchment>
        <a
          className="text-emerald-600 hover:underline"
          href="https://yxans-klagan.vercel.app/"
        >
          {t('home:more_tools.yxans_klagan.name')}
        </a>
      </Typography>

      <p className="yx-heading mb-4 text-lg">
        {t('home:more_tools.yxans_klagan.description')}
      </p>
    </div>
  )
}

export default HomePage
