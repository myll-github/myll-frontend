import { useCompound } from 'shared'

const FavoriteActivity = () => {
  const context = useCompound()

  console.log(context)

  return <div>FavoriteActivity</div>
}

export default FavoriteActivity
