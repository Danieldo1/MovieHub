import Image from 'next/image'
import HeaderItems from './HeaderItems'
import {CheckBadgeIcon, HomeIcon,RectangleStackIcon, MagnifyingGlassIcon,UserIcon,BoltIcon} from '@heroicons/react/24/outline'

function Header() {
  return (
   <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
    <div className='flex flex-grow justify-evenly max-w-2xl '>
        <HeaderItems title='HOME' Icon={HomeIcon} />
        <HeaderItems title='TRENDING' Icon={BoltIcon} />
        <HeaderItems title='VERTIFIED' Icon={CheckBadgeIcon} />
        <HeaderItems title='COLLECTIONS' Icon={RectangleStackIcon} />
        <HeaderItems title='SEARCH' Icon={MagnifyingGlassIcon} /> 
        <HeaderItems title='ACCOUNT' Icon={UserIcon} />
    </div>
    <Image 
    src={'https://lh3.googleusercontent.com/pw/ADCreHeSN9kCHeWR_ucBj-778FM-ubhHY-yWLULNsHpzCZCIjnzKdb_LZxKfByvBwoly91Ou2poSgqsjdfH33LL0YM5lHhhjWb-lOqKYPKh7fngk9AmY361UT-XhEgYgCyz0cJFN0bJTvCnTxUUePz_UKzhy6iq4VeQq-15_7mFkypw5zKrF6uH7d5eLtMUk5xwpQNxnqK-6pCw9R3HAJ2pzfO7cNYIngKHVykXi_qwKeM1w2nvkqYN3iwfVb9IzZa8137o8aQZKn6yiqWS05GMX77TNQp-HdLb9RD11S4oHs5WmIkKtrffvGQwNWzGGL66SQVR2zqAbK6A9i_lZBe7zEzjpL5oa8URyRWB9TPuU61CGYRdqvqYVhO-WWQjTpBsxNuP2UvitzdEztxLbEtqoFM9Tg-z2esFZupF4GDuzm96SW-53hHeLiX3DJ6kBjRvtJseBrwft8eMb_3V3HwkKlGPMOwPOm8s5NU_l5iOCwVvluETiI8MHiUi31ddCpUN-5aMEKuVgW8nU1lqk5Zg3-AZ8567o8xSwcsd6UbrK2tjHhE2gtCbS5g3_uUHvnYj-jUVzbWTYD9AXPJ_cv4ynMu7CAZRI7Ik_qKuYQTmXnIpjMjOq-HYsANLAvWvdXi42VJXgW6Q8Hro5UrXfgamEXhvRYmiZkc9dWlFAJ-i_BLG_8rcTP25PnKyIA2fyBiqggzRE2Jo1EjOhHGA0ntzPOzwvSC2NLOHbpzH8zV6b99TOds5eV0OWFklIpbrtoyvrlEKsx-czXO5pOe5MJKbn8uOGHUgQKGHkbs4PX8IeSPKovpVvTvv5O86PixrdA3e9Gvwyd_aklPrxK22JEjNNzATJaiQLOChCcnu5d2CoSSOcHUhen7Uo4582cv0ZUTyFt-y54URMOXWw_Mu8vrN0VZb1-g=w600-h244-s-no-gm?authuser=0'}
       width={200}
       height={100}
       className='object-contain' 
    />

  </header>
  )
}

export default Header