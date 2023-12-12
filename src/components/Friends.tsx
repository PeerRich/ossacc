import { Button } from './Button'

export default function Friends() {
  const res = await fetch('https://formbricks.com/api/oss-friends')
  const resJson = await res.json()
  const friends = resJson.data.filter((item: any) => item.name !== 'Cal.com')
  return (
    <>
      <div
        id="friends"
        className="mb-12 space-y-5 text-center sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl"
      >
        <h2 className="font-cal text-3xl tracking-tight text-black sm:text-4xl">
          Our Open Source Friends
        </h2>
        <p className="text-xl text-gray-500">
          Meet other projects whose code and culture is open
        </p>
      </div>
      <div className="m-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {friends.map((friend: any, index: number) => (
          <div
            key={index}
            className="overflow-hidden rounded bg-gray-50/80 p-6"
          >
            <a href={friend.href} className="mb-2 text-xl font-bold text-black">
              {friend.name}
            </a>
            <p className="mt-4 text-sm text-gray-700">{friend.description}</p>
            <div className="mt-4">
              <Button href={friend.href}>Learn more</Button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
