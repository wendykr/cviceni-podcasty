export const Podcast = (props) => {

    const {num, title, guest} = props

    return `
        <div class="episode">
            <div class="episode__num">${num}</div>
            <div class="episode__body">
                <div class="episode__title">${title}</div>
                <div class="episode__guest">${guest}</div>
            </div>
        </div>
    `
}