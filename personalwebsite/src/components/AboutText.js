import React from "react"
import Joke from "./Joke"

function AboutText() {
    return (
        <div className="abouttext">
            <h1>Welcome</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis luctus ligula, sit amet faucibus mi. Nulla dapibus ante vitae vehicula sollicitudin. Integer arcu tortor, malesuada nec diam a, porta dapibus nibh. In hac habitasse platea dictumst. Donec feugiat laoreet gravida. Fusce in tempor dolor. Vivamus commodo maximus dignissim. Pellentesque mattis aliquet semper. Mauris sapien ligula, molestie nec auctor vel, sagittis luctus nulla.
            </p>
            <p>
            Maecenas interdum tempor eros, a consectetur metus blandit sit amet. Vivamus sagittis quam ex, nec dapibus nunc consectetur non. Aenean tortor mi, molestie in fermentum sit amet, tristique sit amet augue. Morbi pulvinar erat nec risus facilisis accumsan. Fusce ut gravida est. Aenean tempor libero id metus pellentesque maximus. Pellentesque posuere blandit purus, nec auctor turpis aliquet non. Nullam luctus elementum velit, et facilisis ipsum fringilla id. Aliquam nec fringilla justo.

            </p>
            <p>
            Pellentesque vulputate orci mi, sed tincidunt quam accumsan at. Integer ullamcorper lorem neque. Praesent a sollicitudin massa, non ullamcorper mauris. Phasellus viverra lorem at metus gravida, a scelerisque odio pretium. Quisque posuere faucibus malesuada. Cras efficitur cursus congue. Maecenas lacinia lectus ante, quis rutrum magna blandit quis. Nullam quis feugiat ipsum. Proin molestie elit et auctor fringilla. Cras ex quam, viverra eu pellentesque ut, semper a lectus. Sed turpis eros, semper nec mattis lobortis, blandit sit amet nisi. Vestibulum quis sagittis nisi. Vivamus rhoncus, erat eu laoreet venenatis, nisl mi imperdiet massa, vulputate egestas leo est vel ex. Quisque et ultricies ex, malesuada vulputate orci. Nullam et erat ex.
            </p>

            <Joke />
        </div>
    )
}

export default AboutText