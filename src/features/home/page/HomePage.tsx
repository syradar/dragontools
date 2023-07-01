import { Typography } from '../../../components/Typography'
import { PageHeader } from '../../../components/page-header'

import { useAppSelector } from '../../../store/store.hooks'
import { selectTranslateFunction } from '../../../store/translations/translation.slice'

const HomePage = () => {
  const t = useAppSelector(selectTranslateFunction(['home', 'core']))
  const showCommunity = false

  return (
    <div className="max-w-prose">
      <PageHeader>{t('home:Page')}</PageHeader>

      <p className="yx-prose mb-8 text-lg">{t('home:Description')}</p>

      <Typography variant="h2" parchment>
        {t('home:GameTitle')}
      </Typography>

      <p className="yx-prose mb-8 text-lg">
        {t('home:ThanksTo')}{' '}
        <a
          className="text-emerald-600 hover:underline"
          href="https://freeleaguepublishing.com/sv/"
        >
          {t('home:FreeLeague')}
        </a>{' '}
        {t('home:ForAFantasticGame')}
      </p>

      <Typography variant="h2" parchment>
        {t('home:CommunityTitle')}
      </Typography>

      <p className="yx-prose mb-4 text-lg">{t('home:ThanksCommunity')}</p>

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
        {t('home:moreTools.title')}
      </Typography>

      <Typography variant="h3" parchment>
        <a
          className="text-emerald-600 hover:underline"
          href="https://yxans-klagan.vercel.app/"
        >
          {t('home:moreTools.yxansKlagan.name')}
        </a>
      </Typography>

      <p className="yx-prose mb-4 text-lg">
        {t('home:moreTools.yxansKlagan.description')}
      </p>
    </div>
  )
}

export default HomePage
