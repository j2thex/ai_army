export function generateNickname(): string {
    const adjectives = [
        'Happy', 'Lucky', 'Sunny', 'Clever', 'Brave', 'Calm', 'Eager', 'Fancy',
        'Gentle', 'Jolly', 'Kind', 'Lively', 'Merry', 'Nice', 'Proud', 'Silly',
        'Witty', 'Zesty', 'Bright', 'Cool'
    ]

    const animals = [
        'Panda', 'Tiger', 'Eagle', 'Dolphin', 'Fox', 'Wolf', 'Bear', 'Lion',
        'Hawk', 'Owl', 'Koala', 'Otter', 'Seal', 'Whale', 'Swan', 'Duck',
        'Cat', 'Dog', 'Rabbit', 'Deer'
    ]

    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)]
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)]
    const randomNumber = Math.floor(Math.random() * 1000)

    return `${randomAdjective}${randomAnimal}${randomNumber}`
}
