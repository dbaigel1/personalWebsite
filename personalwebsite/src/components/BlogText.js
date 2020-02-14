import React from "react"
/* function to display the html of each blogpost 
    psa: get ready for a wall of text
*/


function Bloghtml(value) {
    let html = ""
    if (value === 1){
        html = 
        <div className="blogPost">
            <p>Hi everyone!
                <br></br>
                <br></br>
                 Here is the first update email about my life in China. 
                This update is being sent to all different kinds of people in my life: 
                family, friends, ex-co-workers, etc. so I will try to write this in a way 
                that is tangible for everyone. The beginning of this email might be 
                repetitious for a lot of you but bear with me while I catch everyone up 
                to speed! Also this email might get pretty long so I’ll write a succinct 
                TLDR at the end.
            </p>
            <p>
            For those of you that I haven’t updated about my current plans, 
            I am currently living in Shenzhen (SZ), a city you may not have heard 
            about since 40 years ago it was a small fishing village just North of 
            Hong Kong with 30,000 people living in it, but now boasts a population 
            of almost 13 million people. To put it in perspective that’s 1.5 times 
            bigger than the biggest city in the US, NYC. Why am I here you might be 
            wondering? 
            </p>
            <p>
            To be completely honest I am not entirely sure what I am doing.
             I left what people call “the greatest city in the world” where I had 
             friends, a job I legitimately enjoyed, and family, to come to a city I 
             had never heard of 6 months ago where I don’t know anyone (except for my 
             friend Will) and I don’t speak Mandarin! All I know is that I want to 
             have an adventure and do something new and uncomfortable before I decide 
             to settle down into a career and life back in the states.
            </p>
            <p>
                Since I grew up in New York and spent the last year of my life living 
                in Manhattan, comparing the two cities has been the most natural thing 
                for me to do. Shenzhen is much rainier than NY, it rained almost every 
                single day my first week in the city. Not only that but it’s extremely 
                hot and humid, it would be the perfect place to settle down if you were 
                a mosquito. For those of you that know me well it wouldn’t be a surprise 
                for me to tell you that I start sweating as soon as I leave any air conditioned 
                space. I have arrived in SZ during the middle of the rainy season and I’m told 
                that by Winter the heat, humidity, and rainfall will all die down. 
                Sorry mosquitos.
                </p> 
                <p>
                In terms of public transportation SZ is pretty remarkable. 
                It has an extensive metro system with 11 different lines traversing the 
                entire city. On top of that they come every 2 minutes or so, something you 
                definitely cannot say about the outdated metro system of NYC. The subway 
                stations are clean, air conditioned (thank god), and are in Mandarin, 
                Cantonese, and English! So for all of you that want to come visit me, 
                there’s just one more reason to. SZ compared to NY is also much much 
                greener, with trees lining every street and parks in every area of the 
                city. In NY, I could go weeks without laying eyes on a single tree.
            </p>
        
            <figure className="blogFigure">
                <img src="../../blogimages/outsideapt.jpeg" alt="outside apartment" height="400em" width="300em" style={{border: "1px solid var(--color1)"}}/> 
                 <figcaption style={{fontSize: "20px"}}>Image 1: Outside my apartment. Check out those trees.
                </figcaption>
            </figure>
                
            
        <p>
        The biggest and probably greatest difference between SZ and NY is cost of living. In NY I split an apartment with 2 roommates (shoutout to you Becky) where I lived in the living room with a wall that went just over half-way up to the ceiling. For that I paid over $1300 a month plus utilities, and I lived in the financial district, an area not many people in their early 20s want to live. In SZ, Will and I just settled into a nice 2-bedroom apartment on the main metro line in the city where we pay ~$500 USD monthly each. A ride on the subway costs differently depending on how far you are going, but generally costs around 50 cents per ride. In terms of food and drinks, I have paid as little as $2 for a full dinner and as much as $10 at a fancier place. You get the idea, living in China, especially compared to NY, is cheap.
        </p>
        <p>
        
        Actually I lied, there’s an even bigger difference between Shenzhen and the US in general. Shenzhen is extremely technologically ahead of the curve. I haven’t even begun to tap into all the things I can do here since I don’t have a bank account yet but Will (my lord and savior who I owe my soul to at this point for covering all my costs so far) has shown me some pretty cool things you can do here with technology. First of all, WeChat is an all-encompassing mobile app in China acts not only as your messaging hub for you and your friends, but also allows you to connect to any shop or business out there. 
        </p>
        <p>
        For example, I haven’t seen a restaurant, clothing store, supermarket, etc. accept a credit card. Credit cards don’t seem to be a thing here. In fact, people chuckle when I pay in cash here, which I have to do since I don’t have a bank account I can connect to WeChat. WeChat is generally how everyone pays for everything. Want to order a bubble tea? Just scan the store’s QR code and pay on your phone. Want to pay rent for your apartment? Just open the building’s app through WeChat and pay there. Want to order food? WeChat. Buy a metro card? WeChat. It’s amazing. There are other applications too such as the ones that host the bike sharing economy here but they operate on the same scanning principle.
        </p>
        <p>
        That’s the basic overview of SZ, so now I’ll update you on what I’ve actually been up to and how I feel about living here.
        
        I landed on Wednesday, July 25th and was met at the airport by a woman named Ruby. I am currently employed to be a part-time English teacher for a public school and Ruby works for the company that places me at the school. She has great English (actually she has been the only person I have been able to communicate with other than Will so any English is great English) and brought me to the hotel where I met with my friend from Tufts, Will. We stayed in a hotel for 5ish days before we were able to get an apartment, but that’s a story I will tell in a bit. The first couple days were a real whirlwind for me as I was super jet lagged and in an entirely new place. During that time I learned how to navigate the public transportation (which was quite easy), got a phone plan so I could communicate without wi-fi, and registered with the police to gain a residence permit. One of the things I had to do was go through a wildly long and comprehensive health exam where six different doctors conducted multiple tests on me including blood tests, urine tests, EKGs, eye exams, you name it.
        </p>
        <p>
        The next period of my settling in was dominated by exploring the city and hunting for an apartment to live in. Shenzhen can be thought of as the Silicon Valley of China, or at least I think that’s what China wants it to be known as. However, instead of a software focus SZ is a playground for hardware. In an area of Shenzhen called Futian there is a massive warehouse where you can buy anything electronic from the smallest capacitor or circuitboard, to microphones to electronic musical instruments. Here’s a <a href = 'https://www.youtube.com/watch?v=BL0OvdTqzBs&t=168s' className="blogLink">video</a> of it since I forgot to take pictures while I was there.
        </p>
        <p>
        Bike sharing is also a big part of everyday life here so one morning Will and I hopped on some bikes and pedaled through the parks on the East coast of the city overlooking Shenzhen Bay. Man did we pick the wrong day to bike though as it was scorching hot with infinite humidity. We ended up taking a breather in a mall by the Hong Kong - Shenzhen border. Oh yeah, Shenzhen has toooons of malls. On top of their love for electronics, they also seem to be very into shopping.
        </p>
        <p>
        Finding an apartment in Shenzhen has been quite the experience. I would equate it to being a mouse in a maze trying to find a block of cheese for the first time. Everywhere we looked we kept running into walls. To find apartments we used a few different approaches such as scrolling through the ‘Craigslist’ of SZ called Shenzhen party. After talking to a few different agents and seeing a couple different apartments, we got a tour of an apartment that we decided would fit our needs and was in our price range. 
        </p>
        <p>
        Since SZ is so high-tech, we were told that we could do the entire signing of the lease and paying rent on our phones. That night we attempted to sign the lease but man was it a struggle. First of all the entire thing is in Mandarin, and while Will is amazing at Chinese for having only been in China for a year, he wasn’t super up-to-date on renting an apartment vocabulary. We managed to slowly make our way through the application translating as we went, and after finishing, went to bed. The application took 24 hours to process so we checked the next night to see if we had been approved but apparently we were denied since the photo of our passport wasn’t correct. 
        </p>
        <p>
        After explaining the situation to Ruby she told us that we needed to upload a photo of me holding up the passport next to my face, rather than just uploading a photo of my passport. She also put us in touch with one of her friends who is an apartment agent in case we needed more help. After taking and uploading the correct photograph, we were allowed to move forward with the application. This involved us having to fill out a whole bunch of information about ourselves like our education backgrounds and current jobs. 
        
        Once we had filled out all the information and we tried to move on to pay, we got a message saying we couldn’t rent the apartment since I didn’t have a high enough social credit score. Here’s an <a href = 'https://newyork.cbslocal.com/2018/04/24/china-assigns-every-citizen-a-social-credit-score-to-identify-who-is-and-isnt-trustworthy/' className="blogLink">article</a> briefly explaining what that means. 
        </p>
        <p>
        Basically, each person in China is given a score and if your score gets too low, you can’t do basic tasks such as in this case, renting an apartment. To rent an apartment you need a score of 70 or above, and after filling in all my information I boasted a score of 60 points. After doing some research, Will and I figured out that you could raise your social score by creating a profile on the Chinese version of LinkedIn. Creating a profile on a Chinese website entirely in Chinese is no easy feat but after a bit of struggling we made it through. I even added a bunch of random people as my “friends” in a hope that that would increase my score. 
        </p>
        <p>
        After this whole ordeal we checked back on my social score and it had only increased to a whopping 65! Still not enough to rent an apartment. As my jet-lag started to get the best of me we decided to message Sharon (the agent Ruby put us in touch with in case we needed help) and dozed off. I’m not sure to this day what magic Sharon did but the next morning she said we should be good and when we checked my social score, it had raised to 70. I am officially the lowest possible form of acceptable human living in China! However, when we attempted to move forward to pay (we owed 3 months of rent each plus a security deposit each plus an agent fee), it said that Will’s bank account couldn’t withdraw that much money from his account at once.
        </p>

        <figure className="blogFigure">
            <img src="../../blogimages/socialscore.jpeg" alt="credit score app" height="400em" width="300em" className="blogImage"/> 
            <figcaption className="blogCaption">Image 2: Social credit score before renting an apartment in China.
            </figcaption>
            
        </figure>
        
        <p>
        At this point we decided that seeing Sharon in person might help us get the job done faster. We spent some time at her office and eventually figured out that we could do multiple deposits of smaller amounts of money. We finally successfully put down a deposit on an apartment! Sharon took us to the place to sign some documents and a government official met us to seal the deal. The apartment was ours! To celebrate after Sharon left, Will and I stood on our new balcony overlooking the city. We had a pretty cool view (I’ll attach some photos in this email). When we tried to get back inside, we realized we had locked ourselves on the balcony…It turns out the doors automatically lock when they are closed. With nobody else in the apartment and no phones on us, we had no ideal options. The only two options we could think of were kicking through the glass, or forcibly tearing the door off the wall. 
        </p>
        <p>
        We decided to try to pull the door off, since neither of us wanted to deal with broken glass (Also to think that I could break through thick balcony glass is pretty laughable). After some serious effort we managed to tear out the sliding door from the wall, nails and all. Lastly, and I know this story has dragged on for quite a while, both the original agent who showed us the house and Sharon apparently worked for different companies and wanted to claim the agent fee. Will and I sort of got out of dealing with it by sending them each others contacts and having them deal with it. 
        </p>
        <p>
        Finally, Will and I leave for a 2-week backpacking trip to Yunnan Province in Western China on Friday. When I get back from that and maybe once I start my actual job I’ll be sure to send out another email.
        </p>
        <p>
        I hope you all are well wherever in the world you are! If you’d like to reach me directly you can either email me, message me on Facebook, or download WeChat and add me there (daniel_baigel).
        <br></br>
        <br></br>
        Thanks for tuning in,
        <br></br>
        <br></br>
        Baigs
        </p>
        <p>
        TLDR: I live in Shenzhen, China now. It is super high-tech and the cost of living is a dream compared to NY. I landed in Shenzhen safely and spent a few days searching for an apartment, which took more time than expected because I don’t have a very high social credit score. I settled into a place and have been furnishing and exploring the city with Will. Chinese is extremely overwhelming to learn. We leave for a 2-week backpacking trip in Yunnan province on Friday. 
        </p>
        </div>
    }
    else if (value === 2){
        html = 
            <div className="blogPost">
                <p>
                    Hi All!
                    <br></br>
                    <br></br>

                    The past few weeks have been the perfect way to get introduced to China. I went on a trip and explored more of the country, and I got my fair share of bodily sicknesses that seem like a rite of passage at this point for traveling to new places. This email will mostly cover my trip to Yunnan province as that’s what I’ve been up to recently. As always there will be a TLDR at the end if you have no interest in reading the email, but signed on to receive updates anyway.
                    </p>
                    <p>


                    Yunnan province is located in the very southwest of China, so basically directly west of where Will and I live in Shenzhen, and borders Myanmar. Our entire trip lasted about 10 days and included tons of trains of buses to get us to the far-off places we wanted to see. For example, our first morning we woke up at 5am (ick) and took a 1-hour metro ride to the train station where we boarded our first 8-hour bullet train to Kunming, the capital of Yunnan. We got off, took another 1-hour metro ride to the other side of the city, got some lunch, walked to a different train station and boarded an overnight train to get from Kunming to Lijiang. By the time we arrived in Lijiang at 6am, we had spent 25 hours traveling and celebrated by taking a 5-hour nap in our new temporary home. 
                    </p>
                    <p>
                    Having never been on a bullet train before I found it pretty incredible. It reached a top speed of 300 km/h (which is almost 190 mph) and it passed through some spectacular landscapes of southwest China. The second train was an overnight train, where each person gets a room with two bunkbeds in it and three new friends to make. On top of that, they also had carts running up and down the aisles with snacks and drinks, which sort of reminded me of Harry Potter as long as you replace the chocolate frogs with cups of noodles.
                    Will and I originally got split into different rooms, but a woman kindly switched with Will so that we could be together as the only two foreigners on the entire train. We were thankful until we all went to sleep and one of our new friends started snoring as if he was a trumpet player with no shame.
                    </p>
                    <p>
                    Lijiang is an amazing city. It’s known for its proximity to incredible nature, and the old town of Lijiang is actually famous as a UNESCO world heritage site. Unfortunately due to that and it being a really cool place it's riddled with tourists. Not international tourists, but rather Chinese tourists from different provinces. I previously thought that I was getting a lot of stares from people in Shenzhen, a tier 1 city, but I was not prepared for the attention I got in Lijiang. You could say the trip was almost defined by other people forcing interactions with us. People would come up to us on the street and take pictures with us, people would try to sneakily take pictures of us in restaurants, people would come up to us and ask us questions such as “what do you like to do?” or “do you like rice noodles?” probably just to practice their English. Initially, it felt like Will and I were some sort of royalty where everyone stared in wonder, but it quickly got tiring as it took an extra 10 minutes to get anywhere due to multiple photo shoots and interviews.</p>

                    <div style={{
                        display: "flex",
                        justifyContent: "space-between"
                       
                    }}>
                        <figure className="blogFigure">
                            <img src="../../blogimages/lijiangstreet.jpeg" alt="outside apartment" height="400em" width="300em" className="blogImage"/> 
                            <figcaption className="blogCaption">Image 1: Lijiang streets at night.
                            </figcaption>
                    
                        </figure>

                        
                        <figure className="blogFigure">
                            <img src="../../blogimages/lijiangstreet2.jpeg" alt="outside apartment" height="400em" width="300em" className="blogImage"/> 
                            <figcaption className="blogCaption">Image 2: Lijiang streets at day.
                            </figcaption>
                    
                        </figure>
                    </div>

                    <p>
                    Walking around Lijiang on the first day we stumbled upon a Naxi dance ceremony. They, of course, ushered us to join them in the dance and afterward, a couple of the dancers proceeded to take us around their house telling us about the history of the Naxi ethnicity in China. After wandering around the town, we took our hostel owner’s advice and hiked up a mountain in order to gain free backdoor access to the “Black Dragon Pool” (which otherwise cost $12 USD to get in). The hike was apparently how all the locals got to the pool (which was really a pond) for free, though it was hard to imagine. The hike was relatively arduous, though I’m probably just super out of shape. 
                    </p>
                    <p>
                    At the pool itself, we walked through a garden where a group of musicians was rehearsing. A man stopped us and sat us down, poured us some tea and proceeded to talk to us, but really just Will, for an hour about the differences in cultures between China and the US. He was a professor of economics from a university in the area. While I couldn’t follow along with the majority of the conversation, he did equate the difference in Chinese culture and American culture to the different styles of chess games that we have, which I thought was pretty interesting. In American chess in order to win a player must destroy their opponent's pieces and sacrifice their own. However, in Weiqi (Go), the object of the game isn’t to destroy the opponent but rather just to have more territory in the end. It’s a much more peaceful game which results not in someone’s demise, but in two people sharing a board where one person is just a bit bigger than the other. He said the best ways to learn about Chinese culture are to learn the language, play Go, and practice calligraphy. Seems easy enough.
                    </p>

                    <p>
                    As we neared the end of the day, a pain in my mouth that I had attributed to burning my tongue a couple days earlier began to intensify. It was getting difficult to eat anything or even talk normally. Taking a look in a mirror I noticed that I had these white ulcers underneath and on the sides of my tongue. I’ll leave out any more graphic details don’t worry. I figured they would just disappear after a couple days but as the days continued and the pain intensified, I figured I should probably go see a doctor or something. Will (my guardian angel and absolute savior) and I walked into a walk-in clinic/pharmacy type thing and after showing them my mouth they gave me some medicine which turned out to be an oral numbing gel and some “fire purging” tea. 
                    </p>
                    <p>
                    I began the treatment as we set off for our full-day Tiger Leaping Gorge hike. After another 5am wake-up and 4-hour bus ride, we were at the foot of a beautiful mountain overlooking a gorge. We began our ascent and quickly realized that the trail wasn’t marked at all and at multiple intersections we chose paths that led us astray (including but not limited to: a trail that led us into someone’s personal garden containing among other things a cage with monkeys in it, and a newly paved road that was so newly paved that our shoes sunk into the pavement and left permanent marks, right before being yelled at to go a different way.). On our journey, we walked through herds of horses, walked through waterfalls, and took lots of water breaks. I guess I should really start working out or at least go on runs.</p>

                    <figure className="blogFigure">
                        <img src="../../blogimages/monkeys.jpeg" alt="monkeys" height="400em" width="300em" className="blogImage"/> 
                        <figcaption className="blogCaption">Image 3: A pair of monkeys in someone's backyard.
                        </figcaption>
                
                    </figure>

                    <p>
                    The next leg of our journey took place at Lugu Lake, a massive beautiful lake with ethnic minority groups surrounding the shores. While being there was a breathtaking and relaxing experience, getting there was a whole different story. The morning we left we woke up early and walked around Lijiang trying to find the right bus station to buy a bus ticket to get to Lugu Lake. Like the trails of Tiger Leaping Gorge, there was no signage to help people find their way. After walking around for an hour, we found a station that sold tickets to Lugu Lake but they only had 1 ticket left. 
                    </p>
                    <p>
                    We managed to get help from someone who worked there and she advised us to buy tickets to a town halfway instead, and then transfer there to another bus that would take us the rest of the way. We didn’t see any other options so we followed her advice and got on the 3-hour bus ride to the halfway point. Upon arriving we got out in the middle of a highway where another man with a small van was stopped in the middle of the road. We were ushered inside with another family and buckled in for the second 3-hour trip. Halfway there, our driver told us that there is a foreigner’s tax for entering Lugu Lake and if we didn’t want to pay it we should hide from the border police. Not wanting to pay the extra price Will and I decided to try hiding. 10 minutes before reaching the border we unpacked a bunch of our clothing and covered ourselves in the back of the van such that (hopefully) it just looked like a pile of clothes. Upon reaching the border, however, we were easily discovered and had to pay for a ticket. It seemed like everyone was paying though, so perhaps something was lost in translation, or maybe the driver of our van just wanted to see a couple foreigners attempt to smuggle themselves into the area. 
                    </p>
                    <p>
                    We finally entered the Lugu Lake area and dropped the other family off. Right before we left for our destination, however, a man on the street started yelling at our driver. He got out of the car and after a comically short amount of arguing time a fist fight broke out in the middle of the street right behind our van! We were shocked but at the same time had front row seats and couldn’t look away. It seemed like our driver was getting the best of the other guy; he had landed a couple punches to the face almost unreciprocated. 
                    </p>
                    <p>
                    However, the newcomer had friends who quickly joined in the fray and turned the tide in the complete opposite direction. Our driver was slammed into the back window of our van right where we were watching from! It felt like we were up against the glass at a hockey game. As he was clearly outmatched and had taken a beating enough to calm his aggression, the fighting stopped and everyone retired to the sidewalk for a smoke break. As our driver sat on the curb with his dusty suit and head wounds smoking a cigarette, Will and I decided that this would be a good time to leave and find another driver. Surprisingly, this was hard to do. We walked all over the little town using what Chinese we could to ask people for directions to the area just 10 miles North where our hostel was. People seemed not to know or just unwilling to be helpful. After a couple hours of walking around and with our frustrations rising, Will managed to negotiate with the hostel to send a driver to come to pick us up. 
                    </p>
                    <p>
                    We stayed two nights there and spent the majority of our time doing small hikes to incredible viewpoints and walking around the lake. One area that was truly amazing was a small island that you could only get to by walking on small cinderblocks that were centimeters above the water level. There was only one path, so you had to time it well such that nobody was coming from the other direction, otherwise someone would have to step into the water. Other than a hill with a great view of the lake, the island boasted four or five houses whose bottom floors acted as restaurants and top floors acted as hotels. On our last night, while we were sitting under the awning of a house while it poured with rain, a couple families preparing to eat dinner together invited us in to join them. We had a lovely meal with them (although my mouth ulcers still prevented me from enjoying most foods that weren’t coconut milk) and spent the remainder of the night talking. Again, Will dominated the conversation as they didn’t speak English so my participation was minimal, but I was thankful to enjoy the free food and tea and company.
                    </p>

                    <figure className="blogFigure">
                        <img src="../../blogimages/lugulake.jpg" alt="Lugu Lake" height="400em" width="300em" className="blogImage"/> 
                        <figcaption className="blogCaption">Image 4: Lugu lake.
                        </figcaption>
                
                    </figure>

                    <p>
                    Upon leaving Lugu Lake we took a 6-hour bus ride back to Lijiang and then took another night train back to Kunming where we would spend the last few days of our trip. Before that, however, in our last night in Lijiang we passed by a bar with live music so we decided to check it out. We were immediately asked by a group of people our age to join them at their table. We played different drinking games and tried a sake-like liquor that was super sweet. It literally might have just been simple syrup, I’m not sure. After the band ended their set, they joined us at our table and let me play guitar for a few songs as well, which was pretty cool since I was useless trying to communicate in Chinese in a loud venue. Thus ended our Lijiang leg of the journey. 
                    </p>
                    <p>
                    Arriving in Kunming as you can imagine after all the hiking and traveling we had been doing, we were pretty burned out. We spent our time in Kunming exploring the city, renting bikes, and playing Go in coffee shops when it rained (which happened frequently). Finally, it was time to head home and we boarded our last 8-hour bullet train back to Shenzhen, which has begun to feel like home sweet home.
                    </p>
                    <p>
                    HUGE shoutout to Will for putting up with my strange ailments and unfit body, my inability to pay for anything as I didn’t have a bank account at the time, as well as being our sole translator in a country that is not very foreigner friendly. Mom, please send this boy a gift as I would not have made it this far without him.
                    </p>
                    <p>
                    This past week we’ve been taking it easy in Shenzhen. We went out one night with a bunch of other expats (we all met at a bar literally called “xpats”) including a guy from Tufts!
                    We experienced our first bad air quality day with the AQI (air quality index) reaching 160. I’ve spent a lot of time reading (I’ve almost finished Murakami’s 1Q84) and playing dominion with Will (shoutout to Keyrus boardgames crew!).
                    </p>
                    <p>
                    At the time that I send out this email, I will have almost spent a month in China. Time has been flying for me, I wonder if it has been the same for all of you. I start my teaching job at a public middle school around the corner from where I live next week. How I am qualified to teach this job I am not so sure but I will tell you all about my first experiences and impressions of teaching in my next email! Don’t be a stranger!
                    <br></br>
                    <br></br>
                    Miss you all,
                    <br></br>
                    <br></br>
                    Baigs
                    </p>
                    <p>
                    TLDR: Took a trip to Yunnan which had incredible natural beauty. People there were obsessed with us, we had many interactions with people who wanted to take our pics and/or spend quality time with us. I refuse to go on another bus/train for the next short while as we spent countless hours on them during our trip. Will is an angel and we are all lucky he exists on this Earth. I start teaching in a week!
                </p>

            </div>
    }
    else if (value === 3){
        html = 
            <div className="blogPost">
                <p>
			Hey everyone, 

			It’s felt like ages since I last wrote one of these (although in actuality it’s been less than a month) since my life has been a complete whirlwind the last few weeks. The biggest events being that I started my new teaching job, meant a bunch of new expat teaching colleagues, and traveled to Hong Kong. Of those things, the new teaching job has been the most exciting, unpredictable, and new thing for me so I’ll just jump straight into that. 

			Before I begin however, I should warn you that the majority of this email might come off as a bit of a rant. The lack of communication and assistance I have received from both the company that hired me and the school I work for has not set me up for success, to say the least. Let it be known that I have no prior teaching experience, have not been trained to be a teacher (other than a laughable TEFL course that taught me that I need to spend my money more wisely), and I have never really interacted with children. Somehow I am now an English teacher in a public elementary school in China.

			The week before school started the company that hired me that places teachers in schools in Shenzhen held a 2-day orientation. On the first day we talked about how to set yourself up for success in China which included: downloading WeChat, getting a Chinese SIM card, getting a Chinese bank account, finding an apartment etc. Essentially all things that Will and I struggled to do by ourselves when we moved here a month prior. The second day was just as useless as the first in that I learned nothing that would help me succeed as a teacher, but I did get to meet all the other foreign teachers. All of whom had the same complaints as me; the company that hired us did little to help us. At this stage, a Thursday evening before classes supposedly started on Monday, I still had no idea what school I would be teaching at or what grades I would be teaching. I was a bit nervous.

			Later that night I received a text saying that I had to give a demo lesson at a school the next morning. For what age group? No idea. What is a demo lesson? No idea. How long should the lesson be? They’ll tell me when I get there. I immediately started planning lesson plans for elementary aged kids, and middle school aged kids. I asked for help from other teachers I had met during the orientation and after a long night had mustered up some material that I thought could convince them to let me stand in a classroom in front of children everyday for a year. The next morning I received a text saying they delayed the demo until 2pm, which was cool, gave me more time to prepare. At 2pm I met up with a person from my company and five other teachers also giving demo lessons. It turns out we were interviewing at a school group which owned a bunch of public schools in the area. When we got there they had us sit in a classroom together. One by one they took us into a new room for the demo, of course, I was picked first. In the room they gave me a sheet of paper with some vocabulary words on it like “bank”, “grocery store”, and “living room”. They told me that I had 15 minutes to create an 8-minute demo lesson for a middle school aged class. Great. Time to use my improv skills I guess. They watched me write a lesson plan in a classroom like hawks, so I couldn’t just whip out my phone and look up sample lesson plans. I decided to structure my lesson just like a sample lesson I had watched online the night before, but tailored it to locations in a house rather than the topic the online one had, sports. I can’t quite remember what my lesson entailed as this was a few weeks ago now, but I remember walking into the classroom, realizing that I was teaching the lesson to 6 teachers instead of a classroom of kids, and scrapped the majority of what I had planned as it wouldn’t work without a full classroom of children. After a painful 5 minutes, I ended my lesson on “rooms of the house”. The only comment I got was that I didn’t use the full time. Fingers crossed!

			I didn’t hear anything until Monday morning, when I got a text saying that they want to hire me for one of their schools and that I had to go see the school that morning. A small win, but now the real test began. I was to teach 3rd-5th grade at a school 20 minutes by bus from my apartment called Lilin primary school. I went that afternoon and met some of the teachers there. Everyone seemed really nice and excited to have an American as part of their staff. Work began the next day for me, meaning I had one evening to prepare three different lesson plans, one for each grade. I asked them for a syllabus, which they didn’t have. So, I asked them if there were textbooks they wanted me to use, which there weren’t. Teaching materials were up to me to decide as well. Great. Sitting at home that night I racked my brain for what a good first lesson would be for kids in each age group. With an open canvas and no direction it was incredibly difficult to pick a topic. It didn’t help that my VPN wasn’t working either so browsing the internet for ideas wasn’t really an option. I turned to some of the other foreign teachers for advice and a guy named Sam sent me the lesson plan he made, a true hero. I decided to just use it for all three grades and call it a night. I had no idea what skill level these kids would be at, so without a point of reference I decided to see what would happen.

			I showed up to my first class with both my laptop and a usb stick with my powerpoint presentation on it. Unfortunately the classrooms have no way to handle that, according to the teacher who brought me to the class. Instead I was supposed to upload any presentations I had to their server beforehand. Thanks for the heads up guys! I ran back up to my office (yeah I get an office how cool is that) and one of the other teachers helped me navigate the school’s file system, which needless to say is all in Chinese. I ran back down to my first class and began the lesson (which I’ve attached to this email in case you all are curious). This whole server thing is frustrating because it means I can never edit my slides in class, or even at school. The school doesn’t have wifi so my laptop is useless if I want to do anything on the internet, and Microsoft isn’t a thing here so the school computer that I was given can’t edit my slides either. If I ever want to make a change I have to wait until I get home, make the changes on my laptop, put the new slides on the usb, and then re upload them the next morning on the school server. Not ideal.</p>

			<figure className="blogFigure">
				<img src="../../blogimages/school.jpeg" alt="school" height="400em" width="400em" className="blogImage"/> 
				<figcaption className="blogCaption">Image 1: Entrance to my school (hell).
				</figcaption>
	
			</figure>
			<p>

			However, all the struggles I had dealt with up until this point pale in comparison to what I had to deal with in the classroom. My first day of school I had three different classes, two 4th grade and one 5th. My only description for each class would be ‘total disaster’. I wish that I was recording the whole thing because it was so outrageous. I don’t even know where to begin. I suppose firstly I should say that each class has 50 students in it. That’s not an exaggeration. 50 students. A couple have closer to 60. I teach 20 classes every week for a total of 1000 students. Wish me luck. The English skill level in a given class ranges from students who do not understand nor speak a word of English, to students who ask me things like what my favorite type of seafood is or whether or not I prefer Shenzhen to New York and why, and everything in-between. How do you teach classes like that? If I teach to the students that are really struggling, I lose the attention of everyone else. If I teach to the top performers in the class, I also lose people’s attention. In either scenario the classroom becomes a nightmare. Also, I am the only teacher in the room. I don’t have a teaching assistant to help me communicate ideas when they don’t understand or quiet the class down when they are noisy. Which leads me to the thing that has been the most difficult, and that is discipline. I’d say at this stage that my job is 80% discipline and 20% actually teaching, maybe even a 90-10 split in my 3rd grade classes. For example, in my first class perhaps 3 minutes in, there a few students in the front that were engaged and listening, there was a group of students in the back left noisily talking to each other, and a couple of students were strangling each other with the curtains in the back right corner. The rest of the students were watching the scene and commentating on it out loud as if they were sports announcers. I tried quieting everyone down, but with my quiet voice and mild temperament it was difficult for me to make my presence commanding enough to stop the ruckus. 
            </p>

			<figure className="blogFigure">
				<img src="../../blogimages/sampleclass.jpeg" alt="3rd grade classroom" height="400em" width="500em" className="blogImage"/> 
				<figcaption className="blogCaption">Image 2: Grade 3 Class 8. Demons, but the cute kind.
				</figcaption>
	
			</figure>
			<p>
			This type of scene happened in each one of my classes on the first day. I went home, completely overwhelmed and defeated. I doubted my choice in becoming a teacher. Maybe I had reached too far out of my comfort zone. I didn’t know what to do with myself, so I wrote a 'pros and cons list’, something I hadn’t done since deciding on whether I wanted to move to China or not. The highlights of which were as follows:
            </p>
			<ul> Pros:
			    <li>I had a pretty easy commute</li>
			    <li>The teachers at the school were friendly</li>
			    <li>I had some support from other foreign teachers at my company (though I didn’t want to rely on them too much)</li>
			</ul>

			<ul> Cons:
			    <li>I have no teaching experience</li>
			    <li>I have never interacted with children</li>
			    <li>I was not given a syllabus, textbook, or teaching materials</li>
			    <li>I was not trained</li>
			    <li>I was not told what level the students would be at</li>
			    <li>I was not told what school or grades I’d be teaching until the day before
			    </li>
			    <li>I didn’t know the technology that would be available in the classrooms</li>
			</ul>

            <p>
			You get the idea, the cons greatly outnumbered and outweighed the pros. I don’t think a pros and cons list really makes sense in this situation, like I wasn’t trying to make a decision on doing something or not, but I just needed to write down my frustrations so that I had a reason for why my first day was such a failure. You can ask Will, that entire evening I was a total mess. I generally don’t show stress if I’m feeling it, but I definitely was that day.

			The days following the first day got better and better over time. I knew what to expect, and got used to Chinese school culture. In China the students stay in one classroom the whole day while teachers move from room to room. At first I didn’t know if I should leave a class of 50 students alone for the 10-minute break in-between classes, or if I should wait for their next teacher to come. I decided to wait just to be safe, but was told that I could just leave them alone in the future. Seems dangerous to me… There’s also a 2 and a half hour lunch break from 12pm to 230pm? Sweet deal, but it just means that my days are longer than they need to be.

			Discipline issues and Chinese classroom culture aside, there are some pretty amazing things about being a foreign teacher in a Chinese school. The best parts of my job are without a doubt the interactions I have with the kids between class ending and me trying to leave the classroom. I say trying because after each period, the students rush up to the front and swarm me. One student couldn’t stop herself from touching my beard, one student gave me a sheet of paper with his telephone number on it, one student asked if I liked Chinese food and then invited me over to her house for dinner, claiming that her mom makes really good Chinese food. I’ve had students tell me how handsome I am and that I have pretty eyes. I’ve had students ask if we can hang out after school, and I’m being asked constantly to take a photo with them. If you all ever need a confidence booster, I recommend becoming a teacher in China. I’ve never felt famous before, but I feel like a complete celebrity at school. Just walking from my office to a classroom down the hall I get said ‘hello Daniel!’ to 10-20 times, and maybe 2-3 “you’re so handsome”’s or so. My favorite comment in a class however, has been the student who raised her hand 10 seconds into my lesson and asked “Why are you handsome in your photo, but not in person”? It was a blow to my self-esteem, but I think I needed it given all the attention I had been getting. 
            </p>

			<figure className="blogFigure">
				<img src="../../blogimages/classselfie.jpeg" alt="selfie with students" height="400em" width="300em" className="blogImage" /> 
				<figcaption className="blogCaption">Image 3: A quality selfie with the boys in grade 4 class 1. Not pictured, literally 40 other students surrounding me.
				</figcaption>
	
			</figure>
			
            <p>

			Of course there are still days that are tough, each day is a new adventure. Just the other day I watched a kid in thr front row (while I was literally talking) turn to his friend and sucker punch him in the face. The friend of course grabbed his face and broke down crying. I was so stunned that a kid would do this right in front of my eyes while I was teaching and the classroom was relatively quiet for once. Luckily, one of the other students said he would take him to the nurse's office, which I didn’t even know existed. As for the kid who punched him, I didn’t know what to do with him. After the class, I asked one of the other teachers what to do in that situation and she said that I should just ignore it. That maybe sheds a light into what I’ve been dealing with.  

			The last thing I’ll say about my job is that on the Monday of my second week unbeknownst to me there was a holiday called Teacher’s Day. I’m not sure if this is a thing back in the US, if it is I don’t remember ever celebrating it. Basically it is what it sounds like, a day across the entire country where teachers are recognized for how amazing they are (and trust me I now know what teachers have to go through, they deserve a teacher’s day every month). When I walked into my office, my desk was covered in flowers. Throughout the day, students would come into my office and give me more flowers or letters or even gifts. I had been teaching there for only a week and I was getting gifted for being a teacher, something I still barely even consider myself. I’m an adult in a classroom at best. Among the gifts I received was a bluetooth speaker, a blender, and my favorite: a women’s designer leather sun parasol. Definitely bringing that one back home to start a new fashion trend.

			In short, teaching has been a wildly overwhelming experience but I think as I start getting better at making lesson plans and discipline in the classroom, it will become easier. 

			I’ll quickly summarize my first trip to Hong Kong before signing off because I know this email is long and you just read a crazy rant about one topic. After my first week of teaching, Will and I decided to check out Hong Kong for the weekend. It took about 2 hours to get from my apartment in Shenzhen through the Hong Kong border to downtown Hong Kong (although apparently this process will only take 15 minutes when the bullet train opens next week). I was blown away by how Western it felt. First of all, everyone speaks some English there. They had more than just Chinese food options, so we ate burritos and my god was it the best burrito I’ve ever had. The people diversity was huge, similar to New York. There were so many different cultures and languages being spoken, a stark contrast to Shenzhen where everyone is Chinese and only speaks Mandarin. It was crazy how these cities could be so close to each other yet so different.

			We spent our time there exploring the different areas of the city. We took a day to hike a mountain on Lantau island and ended up seeing a massive Buddha statue as well. Another night we went to a jazz bar and saw some live music, and another morning we had delicious dim sum. Easily the best pork buns I’ve ever had, so if you’re planning on visiting me you can bet I’ll take you there. The only downside to HK is that it’s super expensive, probably equivalent to NYC prices. Not the best place to travel to if you’re on my teacher’s salary.
            </p>

			<figure className="blogFigure">
				<img src="../../blogimages/hkstreet.jpeg" alt="Hong Kong street" height="400em" width="300em" className="blogImage"/> 
				<figcaption className="blogCaption">Image 4: Neon Hong Kong.
				</figcaption>
	
			</figure>
			<p>

			I am currently writing this email while pent up in my apartment with a massive typhoon looming outside. I woke up to the sounds of our windows and doors creaking and swinging open and our entire building shaking. We spent the next few hours running around trying to keep water out of our apartment and trying not to worry that our building would collapse. I know hurricane Florence is in the news, but if you were unaware there is also a massive typhoon hitting the Hong Kong-Shenzhen area. Funny how I am all the way here and still experiencing a similar thing to you guys. I hope all of you are doing well wherever you are in the world, and I look forward to hearing from you! As always, feel free to reach out to me by whatever means is easiest for you, as long as it’s WeChat then it works for me.
            </p>

			<figure className="blogFigure">
				<img src="../../blogimages/typhoon.jpeg" alt="Typhoon" height="400em" width="500em" className="blogImage"/> 
				<figcaption className="blogCaption">Image 5: Typhoon aftermath outside my apartment.
				</figcaption>
	
			</figure>
			<p>

			All the best,
            <br></br>
            <br></br>
			Baigs
            </p>
            <p>
			TLDR; I am a teacher now and it has been a super overwhelming experience. I teach 3rd-5th graders with 50 kids in each class. Discipline has been the biggest issue, but I think that I’ll get better at controlling classes over time. The kids here are obsessed with me, entirely because I am the only foreigner in the school. I also went to Hong Kong and it was western and an incredible break from mainland China.
		    </p>
            </div>
    }
    else if (value === 4){
        html = 
            <div className="blogPost">
                <p>
			Hi everyone! 
            <br></br>
            <br></br>
            It has been a while since I last sent an email, so I hope all is still well. I’ve been traveling a bunch this month, which marks the third month of my journey. It’s crazy to think that if I decide to only stay in China for this one year, my time here is already 25% done. While I don’t feel completely at home here still, and I don’t think I ever will, it is amazing how settled in I am. I have my work routine down, I have my favorite restaurants around me that I frequent, my social life revolves around weekend trips, exploring with Will, and occasionally meeting up with other foreign English teachers. I also recently purchased a $30 guitar on TaoBao (Chinese Amazon) just to make me feel even more at home. While this past month has been characterized by settling into my job and weekly routine, I have done quite a lot of traveling, so I’ll tell you all about that. As always there will be a TLDR at the end of this email. 
            </p>
            <p>

        For those of you who have reached out to me concerned about my well-being after I described my teaching situation, things have gotten better! Well, to be completely honest, I think I more or less just know what to expect now. I have singled out the most disruptive classes and even the specific students in those classes who give me the most trouble. There are also classes that are well-behaved and it’s a joy to teach them. Out of the 3 grades I teach, I find my 3rd graders the best as they are old enough to pay attention (though not too old to think they’re too cool for school) and young enough to be completely enamored by a foreign teacher. After most classes my third grade students will rush to the front where I stand and hug me, touch my arms, and ask me the hard-hitting questions like “you have so much hair, are you a woman”? Or “Why are you so fat”? Mom, according to my students I have put on some weight so you don’t have to worry about me not eating enough. The past couple of weeks a few girls in one of my classes have been standing outside my office pulling faces at me, and when I go outside to greet them they grab onto me like their lives depend on it and only release their grips when the bell for the next class rings. Also, I made the mistake of giving one of my students my email address after he had been asking me for it for weeks. Not only does he email me “good morning” and “good night” every day and then ask me at school why I never responded, but now all my other students want my email address. I gave it to one student but I am beginning to realize how critical a mistake this could turn out to be. I might have to burn this email address after leaving China.

        In China there is a holiday called "National Day”, which actually lasts a week so it’s nicknamed “Golden Week”. With this vacation I decided to travel to Vietnam! I had never been and it was one of the countries on the top of my list, accompanying Japan. However, when you get national holidays in China, you have to make up some of the missed time by working on the weekend. That means before my trip I had to work the Saturday and Sunday, and yes that means the students were in school too. Right as school ended I jumped on a bike for the train station so I could catch a high speed rail train to Hong Kong. The high speed rail has proven to be a really fast and great way to cross the Shenzhen-Hong Kong border. It takes you from downtown Shenzhen right to downtown Kowloon, Hong Kong. Upon arriving in Hong Kong, I took the airport express to the airport in order to catch my 3-hour flight to Hanoi, Vietnam. 

        This was my first time traveling alone. The plan was to travel in and around Hanoi for 4 days, and then Will would join me in Ha Long Bay for the remainder of the trip. That meant I was on my own in a new country where English is not spoken. I was pretty excited actually. I don’t mind doing things by myself, and when you travel with other people there always has to be a group consensus on what to do or where to eat. Being alone meant that I could completely control my experience and do as much or as little as I wanted. Basically I could skip the museums and just do a food tour of Hanoi.

        When I arrived at my hostel I was shocked to see how lively it was. I have never lived in a frat house but my time there felt like what living in a frat house most likely feels like. By that I mean that the lobby, which had a large bar directly opposite the reception area, was filled with white guys in their late 20s with sleeveless tees and backwards hats double-fisting beers with loud pop music blaring in the background. Constantly. This made checking in when I arrived at 8pm a nightmare, as I couldn’t hear a word the reception was saying and wanted to talk to them about day trips, but decided to cut my losses and just check into my room. Other than the never-ending party downstairs, the hostel itself was quite nice. It cost $5 USD a night and included free breakfast, a free walking tour, and an assortment of trip packages that you could purchase. They also served fresh smoothies at the bar so no matter what happened the rest of the trip, I was happy. I put my backpack down in my room and one of my roommates, a guy in his late 20s with a sleeveless tee named Zander, started chatting with me. He had just flown in from New Zealand and was staying in the hostel for a month while looking for teaching jobs there. We were both traveling alone and he was extroverted enough to carry a conversation for the both of us so we decided to grab some food together and walk around the area. We were staying in an area of Hanoi called the Old Quarter, which was a maze of really narrow roads with more motorbikes than people and food stalls lining the sidewalks. We sat down on these tiny plastic chairs maybe 6 inches off the ground and ordered some Vietnamese food which included a plate of snails. Zander ordered a couple beers to occupy his hands. Walking onwards we came across a lake called Hoan Kiem Lake, which seemed to be the center of all nightlife in Hanoi. Something that struck me as we were walking was just how many foreigners there were. It seemed like for every Vietnamese person I saw there were two foreigners. </p>

            <figure className="blogFigure">
                <img src="../../blogimages/hanoi-market.jpeg" alt="Hanoi Market" height="400em" width="300em" className="blogImage" /> 
                <figcaption className="blogCaption">Image 1: Old Quarter, Hanoi.
                </figcaption>
            
            </figure>
            <p>

        The next morning I took the complimentary walking tour that the hostel offered and walked around the old quarter during the day. We saw many markets and historical buildings, including the building where Ho Chi Minh wrote the Declaration of independence after WW2. We ended the tour at a hidden cafe where the specialty drink was called egg coffee, and is exactly what you think it is. It’s coffee mixed with a raw whipped egg and some cream/sugar. They also served egg beer, egg rum, and egg coke. We tried the egg beer and I definitely preferred the coffee. I spent the remainder of the day walking around the city eating different foods, including western favorites like Pho and Bahn Me, and recovering from drinking the egg beer. On day 3 I took a day trip to a village called Hoa Lu, which actually used to be the capital of Vietnam 1000 years ago. I toured some ancient temples where the queen and king used to live, and almost bought one of those conical rice hats to block the intense sun, but decided that it would be too touristy. After Hoa Lu I went to Tam Coc, which is a beautiful river that offers tours where locals row you (with their feet) in a small boat through caves and rice fields. I then rented a bike and rode through some roads that passed by the river until I had to catch a bus back to Hanoi. It was definitely an incredibly scenic few hours. </p>

            <figure className="blogFigure">
                <img src="../../blogimages/eggbeer.jpeg" alt="Egg Beer" height="400em" width="300em" className="blogImage"/> 
                <figcaption className="blogCaption">Image 2: Eggs and beer. Sound good? It was alright.
                </figcaption>
            
            </figure> 

        <p>
        Will joined me the evening of the next day as we prepared to leave for Ha Long Bay, a UNESCO world heritage site that I can’t recommend enough. It’s a bay that features tons of islands and limestone karsts (I had to look up what that was too). Will and I stayed on Cat Ba island, which is a slightly smaller island on the outskirts of the bay. Since it was a little outside of the super touristy center, we basically had the island to ourselves. We dropped our bags, got some smoothies, and rented a pair of motorbikes for $3 each. Don’t worry mom we wore helmets. It took about 20 minutes to figure out how to control the bike (they didn’t exactly give us any lessons or even ask for driving licenses) but once I got the hang of it, driving a motorbike across a remote island was one of the most beautiful things I have ever done. We drove from one end of the island to the other, which took about an hour, and only stopped to fill up with gas and pick up Will’s phone which fell out of his pocket. At the other end of the island we rested on a ledge by the water, and while we were laying there Will’s phone decided to take on a life of its own again and dive into the bay. With little hesitation he jumped in to rescue it, and while he miraculously found it, it had sustained too much damage over the day to be resurrected. 

        Near our hostel there was a big hill which according to reception had one of the best views in Vietnam. The top of the hill was called Cannon Fort, and originally was a military outpost built by Japan during World War 2. We decided to race our bikes back across the island to try to catch the 5:30pm sunset (it was already 4:30pm). Along the way Will’s bike ran out of gas again, so we stopped at a random person’s house/store to ask for petrol. He didn’t seem to have any but told us to wait there. He tucked his 2 year-old child under his arm, hopped on his motorbike, and came back 3 minutes later with a water bottle filled with petrol. It was pretty incredible how friendly everyone was, even though there was such a language barrier. With no more interruptions albeit a couple wrong turns, we coasted all the way to cannon fort. We had to get off to pay for entrance tickets, and when we returned to our bikes Will’s wouldn’t start back up! We tried for a few minutes, and a bunch of Vietnamese people upon seeing us having bike difficulties all came over to try to fix it. Apparently everyone in Vietnam is a mechanic. They deemed the bike broken, so we decided since we would miss the sunset by walking up to the top, that he should jump on the back of mine. I’m not sure how many of you all have ever driven motorbikes, but driving up a windy hill with two people is considerably harder than driving across a flat island by yourself. We took it a bit slow, and unfortunately despite all of our efforts, missed the sunset by a few minutes. The view from the top however was still staggering. The reception really didn’t lie when they said cannon fort had incredible views. My photography skills do not do it justice.</p>

            <figure className="blogFigure">
                <img src="../../blogimages/cannonfort.jpeg" alt="Typhoon" height="400em" width="300em" className="blogImage"/> 
                <figcaption className="blogCaption">Image 3: 1 broken bike, 2 hungry boys, and 3 minutes after sunset.
                </figcaption>
            
            </figure>
        <p>
        The following day we decided to explore other islands in Ha Long Bay. We rented kayaks at the docks and the guy who rented them to us took us out on his boat through the bay to an island he recommended, called Monkey Island. We spent some time kayaking around the island first, stopping at random beaches and inlets along the way. Both of us shared a kayak, and while I was vastly out of shape, my tiredness was worth it. We beached our kayak on one of Monkey Island’s beaches and walked around a bit. We climbed to two different peaks on the island, one of which had stairs leading up to it and the other of which was basically rock climbing. We admired the views for quite some time, and then kayaked back to the boat that was meeting us to take us back to Cat Ba Island. That night we hiked Cannon Fort again in an attempt to catch the sunset, and while we made it up there in time, we ordered food at the cafe and didn’t finish eating until after the sunset again. I suppose I’ll have to go back one day to finally catch it. </p>

            <figure className="blogFigure">
                <img src="../../blogimages/monkey-island.jpeg" alt="Typhoon" height="400em" width="300em" className="blogImage" /> 
                <figcaption className="blogCaption">Image 4: Monkey Island. That's me and the other one is Will.
                </figcaption>
            
            </figure>
        <p>
        A couple weeks after getting back to China, my friend Mikey, who also moved to China to teach English for a year, and I decided to meet up for a weekend trip. He and his girlfriend Hana are living in a tiny village in East China called Jinyun where they are the only foreigners. On top of that they also teach high school students with smaller class sizes and received lots of help with teaching materials/syllabus from their program. Basically, while were are both living in China we are having completely different experiences. We decided to meet up in a city called Xiamen. It’s one of the major port cities in China and is in-between where they live, and Shenzhen. It’s a beautiful city on the water that boasts both the world’s longest elevated bike path, and a pedestrian-only island called Gulangyu. Of course, we had to do both of these things. The island was small enough such that we could probably walk the whole thing given a few hours, but since we could only manage to get on a ferry at 3pm, we didn’t have enough time to see all of it. We prioritized the things we wanted to do most, which involved walking through the town, and watching the sunset from “sunlight rock”. I know, I love my sunsets.

        The city itself reminded me of Santa Monica, a place outside of LA that my sister had taken me to when I visited her (~shoutout to you Mbaigs~). The weather was perfect, there were palm trees everywhere, and there were tons of cafes right on the water. We stopped at some cafes, toured around an art district, rode bikes on the elevated bike path, and called it a trip. While we did a lot, we realized that doing everything in a city of nearly 4 million people in a single weekend was near impossible. Definitely looking forward to exploring another new city with Mikey and Hana soon!

        That sums up the traveling I’ve been doing up until now. I still have to visit Guangzhou, the massive metropolis 45 minutes from Shenzhen, and I imagine I’ll do more trips to Hong Kong in the near future. I already have tons of people coming to visit me starting in December all the way until March, so it won’t be too long before I leave China again. 

        Meanwhile in China, Will and I have befriended this family that keeps taking us out to dinner. We were on our way to some board game meet up in our neighborhood, and when we got there we couldn’t find the right room in an apartment building. Just before giving up and going back home, a woman and her six-year-old child walked in and started talking to us, well, started talking to Will. I just stood on the sidelines and exchanged silly faces with the daughter while the adults talked. Pretty soon Will and the woman added each other on WeChat and before we knew it we were invited out to dinner. The parents and daughter took us out to a nice hot pot restaurant. Hot pot is a Chinese cooking style where customers cook their own food in a boiling bowl of soup. Throughout the dinner I said very few words, but had a great time tasting all the different dishes that were brought out. It definitely made me want to improve my Chinese though. The parents would be having a conversation with Will about something like the discrepancies between STEM education in the US and China, and then after 15 minutes or so they would feel the urge to include me. They would turn to me and ask a question like “How old are you?” or, “do you like China?”. And I would look to Will to help translate the words I didn’t know, and then respond with something like “I am 23” or “Yes, I like eating in China”. Not my proudest moments. The family took us out on another occasion just a week later, this time their daughter, who I connected with most on our last dinner since neither of us participated in the grown ups conversation, didn’t come. Instead they brought one of their daughter's teachers. We went to a great Thai restaurant, but as the night went on it became clear that this family wasn’t just trying to make us feel at home in China, but rather wanted to hire us as teachers in their new STEM education company they were starting. I played a very small role in the conversation again, I let Will handle navigating their questions while I savored the pineapple fried rice and coconut water. </p>
            <div style={{
                                display: "flex",
                                justifyContent: "space-between"
                            
                            }}>
                <figure className="blogFigure">
                    <img src="../../blogimages/family-dinner.jpeg" alt="Dinner 1" height="400em" width="500em" className="blogImage"/> 
                    <figcaption className="blogCaption">Image 5: Me with my new best friend and her parents.
                    </figcaption>
                
                </figure>

                <figure className="blogFigure">
                    <img src="../../blogimages/family-dinner2.jpeg" alt="Dinner2" height="400em" width="500em" className="blogImage"/> 
                    <figcaption className="blogCaption">Image 6: My new best friend and I playing games. Will is jealous.
                    </figcaption>
                
                </figure>
            </div>
        <p>
        That’s it for now, apologies that it took me a little longer than usual to get this update out. I miss you all and looking forward to hearing about life back in the states. Back to studying Chinese and writing lesson plans, I guess.

        Peace,

        Baigs

        TLDR; Teaching is getting a little easier, not because the students are better behaved, but because I know what to expect when I walk into each class now. While I don’t like teaching, I love the little moments in-between class where I get to interact with the kids. I Went to Vietnam for a week by myself and Will joined me halfway through. Hanoi was cheap and interesting with bad air pollution, and Ha Long Bay was an amazing beautiful experience. I met up with my high school friend Mikey who is also teaching English in China and is having a completely different experience from me. A random Chinese family keeps inviting Will and me out to dinner to try to convince us to join their STEM education startup as teachers.  
        </p>

        </div>
    }
    else if (value === 5){
        html = <div className="blogPost">
            <p>Hey everyone,  

I hope you all haven’t forgotten about me! Or if you have, that you at least remember me now that you’ve received this email. These last couple months have been filled with small trips, family and friends visiting me, and getting approached by ~hundreds of Chinese people for various reasons including and strictly limited to English lessons/language exchange. Seriously, I’ve been added on WeChat by tons of random people I meet on the Shenzhen streets. 


A quick example: After working out one fine evening I was waiting outside my favorite fried chicken food-stand to get some dinner when another man who was also waiting for his delicious yet totally unsanitary chicken asked me if I work out. (This place, like most food stands here, has raw meat sitting out in the open until someone decides to order it. I’ve even seen a guy kill a fly that was sitting on one of the pieces of meat and then peel it off the meat with his bare hand). I eloquently responded "yes", giving myself a mental and potentially visible fist pump for being able to understand his question. We exchanged a few painful back-and-forths thanks to his patience and my phone’s translate app, before he asked to add me on WeChat, which I accepted. We then went our separate ways never to talk again. This same kind of situation has happened a countless number of times including but not limited to the hairdresser that gave me my last haircut, the hairdresser's three friends that also worked at the barbershop but didn’t interact with me at all, one of the trainers at my gym who continually tells me I need to work out more because I’m “weak and skinny", and the entire movie theatre staff (3 people) at my local movie theatre. This coupled with the love and attention I get at school makes me feel like the most popular person alive. 

Just after I sent my last update, I had the opportunity to go on a field trip with my school. I found out the day before and nobody told me where we were going but the next morning I was excited to spend some quality time outside of school with my students. When I got to school there were maybe 50 double decker coach buses waiting outside all packed with students ready to go wherever we were going. It turns out we were headed to a rock museum and unlike me, my students were absolutely amped. The hour long bus ride consisted of two main events. First, a man who seemingly was hired to entertain the students did 30 minutes of stand up comedy. Either everyone was super tired and not paying attention, or this man was terrible at telling jokes, for nobody was laughing. I wish I understood what he was saying. After his set, he turned on the radio which immediately rejuvenated the crowd as everyone sang along to Chinese and American songs alike. He came up front to sit with me, asked me where I was from and then asked for my WeChat.

The museum consisted of three floors of rocks. I’m not really sure what was so special about this place, there was literally no context on any floor, just single rocks or gems sitting behind glass with little signs that said the English name and Chinese name of the stone. Regardless, these kids were excited to be there, most likely because they would be happier anywhere than in a classroom all day. I was constantly being pulled by kids who individually wanted to show me pieces of slate, or ruby gemstones, or diamonds. We spent maybe 20 minutes there before all the kids took buses to a local beach and all the teachers took buses to a hotel where we took naps and ate lunch. We never interacted with the kids again and after lunch took the buses home. So much for spending quality time with my students.</p>

<figure className="blogFigure">
    <img src="../../blogimages/fieldtrip.jpeg" alt="Field Trip" height="400em" width="350em" className="blogImage"/> 
    <figcaption className="blogCaption">Image 1: Field trip with grade 4 class 6! So much peace.
    </figcaption>

</figure>
<p>
In other news my life here is probably as acclimated as it will get. I’ve got my routine down, and have finally grown used to the stares I get everywhere I go, the different food options, and nonstop spitting of locals. Not to get too descriptive but you know that deep phlegm throat clearing sound people make occasionally and then everyone around them is grossed out and gives them disapproving looks? Everyone does that here, from grandmothers to 2-year olds. I attribute it to the poor air quality more than anything. Anyway, I have my routine down where I go to school in the days and then study Chinese, or play guitar, and grab dinner with Will. We also play board games once every week or so with a board games group we found near where we live. I supplement this routine by taking as many trips as I can to explore new places.

Will and I took one day to check out Guangzhou for the first time. Only 40 minutes away on the high speed rail, Guangzhou is another major metropolis boasting an urban population of over 14 million, and is the capital of Cantonese cultural in mainland China. We only spent 24 hours there but filled our time by trying to see as much of the city as we could. We started our day off at the Sacred Heart Cathedral, one of the few remaining active churches in Guangzhou. It looked like something you would see in Europe, which makes sense as it was built during the Second Opium War with influence from Britain and France. We then took a bus to the South Tea Market, which despite being the biggest tea market with the highest quality tea I had ever been to, was surprisingly empty. We got stuck in one of the shops tasting endless tea while conversing to the store owners who were excited to talk to a Chinese-speaking foreigner and his semi-illiterate foreigner companion. We left to check out Shamian island, an old foreigners residential area now turned tourist site. It boasts European architecture, which is hard to come by in China, and a green area for strolling. It was nice, but like, whatevs. There’s more to see and do in this city. We took a metro over to the famous Beijing street which is a massive pedestrian area with tons of restaurants, shops, and yes even a chinchilla store. After buying some fresh kicks we put them on and ran over to a different area of the city that is known to house the biggest African immigrant community in all of China. We walked around a bit, Will bought more shoes, and then we left for the new city to see the public library and the Canton Tower, the iconic landmark of Guangzhou. We then finished our day under the Canton Tower by eating some of the best dim sum I’ve eaten yet. All before our 8pm train back to Shenzhen. While this paragraph was probably boring for most of you to read as nothing crazy or interesting happened, I mostly just wanted to brag about how much we did in under 24 hours. Although, it’s all a bit of a blur now so I will definitely have to go back.</p>

<figure className="blogFigure">
<img src="../../blogimages/chinchilla.jpeg" alt="Typhoon" height="400em" width="300em" className="blogImage"/> 
<figcaption className="blogCaption">Image 2: Ralph.
</figcaption>

</figure>

<p>
Just a week later my friends Mikey and Hana (you might remember their names from my previous update) flew down to Hong Kong for a week during one of their vacations. I met them there for the weekend and played tour guide as best I could, though we mostly did things I hadn’t done before. The two standouts for me were hiking Dragon’s Back, and taking the tram up at night to see the view from Victoria’s Peak. The views and company were spectacular, the photos were high quality, and the salmon curry I ate for dinner in a little village called Tai O next to Dragon’s Back was pretty good. 

Finally, the moment you’ve all been waiting for, or at least what I had been looking forward to the most, was a visit from my mom and sister! They flew into Hong Kong on Tuesday, and I met them there on Wednesday. (I got Thursday and Friday off of school for some sports activities/competitions — perfect timing!). We did all the things I enjoy in HK, from eating at Tim Ho Wan for dim sum, to hiking Dragon’s Back and seeing the view from Victoria’s Peak, to calling it an early night due to “jet lag”. It also happened to be my mom’s birthday while we were in Hong Kong so we celebrated by eating at a fancy Cantonese restaurant called Tin Lung Heen. Last year we were in Chile for my mom’s birthday and went to a restaurant called Borago, which has been my favorite eating experience in this life so far, so we tried to replicate that in Hong Kong. Dinner was delicious, and we had an amazing view of the Hong Kong skyline to go with it.

Our time in Hong Kong came to an end and we all took the train to Shenzhen. I still had work the week they visited, so each morning I would go to work, and when I got off I would take the train to wherever they were. According to both my mom and sister, the highlight of their trip was when they came to sit in on one of my classes at school. They watched one of my 4th grade classes that also happens to be my most well-behaved class and for that reason one of my favorites to teach. Before class started I took my visitors to come meet the other teachers I share an office with. They were given a warm welcome of tea and chicken feet; They graciously accepted the tea. Then a few students came in as they usually do before class so that they could walk with me in the hallway. They stood there like deer in headlights when they saw my family, but quickly got excited and started asking them questions. Pretty soon there were 20 students crowding the room as word had gotten out that there was a 200% increase in the number of foreigners in school today. They continually told my sister that she was so pretty and for some reason loved asking my mom how old she was. The bell rang and as we walked into the classroom the students’ usual cheer turned into piercing excited screams as they all realized that they had two new guests today. My mom and sister stood in the back of the classroom, while I played a review game with my students. Amazingly there were no major fights, nobody cried, and the noise level was tolerable. Although my mom and sister later told me that two kids in the back of the room were playing with knives and smashing their desks into each other.  </p>

<figure className="blogFigure">
    <img src="../../blogimages/students-grade4.jpeg" alt="Typhoon" height="400em" width="300em" className="blogImage"/> 
    <figcaption className="blogCaption">Image 3: Pictured left to right: Batman, Sophie, Amy, Sophie.
    </figcaption>

</figure>

<p>
Another highlight of our time in Shenzhen was at the Dafen oil painting village. I had never been here before as it’s nearly two hours away from where I live, but I had heard good things so we went to go see it one day after school. Upon leaving the metro station however, I realized I had no idea how to find it. I had underestimated how good at hiding an entire village could be. 

We wandered around for quite a while, stopped for some lunch, wandered around some more and eventually stopped to consult the internet. While all staring down at our phones, an older man approached us and asked if we needed help. Miraculously he spoke pretty good English and also knew exactly how to get where we wanted to go to. We walked along for 20 minutes (we had been walking in the total opposite direction) and eventually we found it tucked behind a massive construction area. There’s no chance I would have found it without him. We spent some time walking around the village, which had small cobblestone streets lined with small open-faced houses where artists were painting away. If you’ve ever bought generic oil paintings on Amazon to add some atmosphere to your dorm room (like I have), then you might be interested to hear that this village is where they are made. I literally saw multiple copies of a monkey wearing headphones <a href="https://www.amazon.com/DVQ-Art-Framed-Painting-Headphone-16x24inch/dp/B01MZXFUZG/ref=sr_1_5?ie=UTF8&qid=1545980499&sr=8-5&keywords=monkey+oil+painting" className="blogLink">painting</a> that I have bought on Amazon before. Just type in ‘oil painting wall decoration’ into Amazon and everything that pops up is made there.   


That night Will joined us in Luohu, the Eastern part of the city, for dinner. I wanted to make sure that my sister ate some of the Chinese classics before she left. We found a food court and passed by an insect stand, where my sister insisted on trying scorpion. Scorpion definitely isn’t a Chinese classic and almost certainly a tourist trap, but who was I to stop her? We all ordered a scorpion and were pleasantly surprised by how crunchy and flavorless they were. The next stop was stinky tofu, a food I had tried before in Taipei, and hated. For those of you who don’t know it, stinky tofu is a fermented tofu that smells like the worst smell you can think of times 1000. When you’re walking around and you smell it, you’ll instantly know when a stinky tofu stand is nearby. We had no problem sniffing out a stand, and ordered a bowl full of it for the three of us to eat. Unfortunately they put so much spicy sauce on top that it was hard to really taste the tofu as it had an overwhelmingly spicy flavor that limited us to just a couple bites each. We washed that down with some sugarcane juice we bought at the stand next door.
 </p>

<figure className="blogFigure">
    <img src="../../blogimages/stinky-tofu.jpeg" alt="Stinky Tofu" height="400em" width="300em" className="blogImage"/> 
    <figcaption className="blogCaption">Image 4: Stinky (Spicy) tofu.
    </figcaption>

</figure>

<p>
We ended our time together by taking the high speed rail up to a city called Guilin, and staying in a town just outside of it called Yangshuo. It was a bit chilly this time of year, especially considering that I’ve been living in 70+ degree heat since arriving in China. We spent the weekend mostly admiring the beautiful scenery of natural karst rock formations (similar to the ones in Ha Long Bay, Vietnam). Our first morning there we took a bamboo raft down a river and enjoyed the landscape. It was quite misty that day, which gave the entire valley a mysterious yet peaceful feel. That afternoon we hiked up a mountain called Xiang Gong mountain which offered a beautiful view of the Li River, after climbing endless stairs of course. (It was actually not endless but rather 950 stairs. Yes, we counted.). 

Our taxi dropped us off at West Street, a famous tourist street in Yangshuo that can get pretty crowded at night. It’s filled with restaurants and stores selling all sorts of things such as jewelry, beef jerky, and clothing. The best moment of the night happened just after dinner. We had left the restaurant and walked for perhaps five minutes when my mom realized that we had forgotten a bag back inside. I decided I’d run back to get it and meet them at the top of the street. After picking up the bag though, I was stopped by a 6 or 7-year old girl in the street. She said “hello” to me and asked if I had a minute to spare. I told her of course I did, as teaching has now made me way more affectionate/welcoming towards children. She then handed me an envelope and said “Merry Christmas and Happy New Year!”. Her dad came over then and asked if he could take a photo of us, and I obliged. They then said thank you and wished me a happy new year again and went on their way. I was so taken aback that someone at that age would approach a stranger, who doesn’t speak their language, just to wish them well AND give them a homemade holiday card. The card read, My dear friend, we wish you Merry Christmas and Happy New Year! -Kiki”. Best gift ever. My only regret is not asking them to send me the photo. </p>

<figure className="blogFigure">
    <img src="../../blogimages/holidaycard.jpeg" alt="Holiday Card" height="400em" width="400em" class = "rotateimg90" className="blogImage"/> 
    <figcaption className="blogCaption">Image 5: Happy Holidays Kiki!
    </figcaption>

</figure>

<p>
The next morning we woke up and walked a portion of the ’Ten-Mile Gallery’, a picturesque walking road next to a river that takes you through old villages. It was a beautiful day, and a great way to end our time in Yangshuo. We hurried back to the hotel because we had forgotten our passports in the room safe, and caught a taxi to the train station. That night, as it was my family’s last night in Shenzhen, I stayed in their hotel with them. According to my sister she enjoyed Shenzhen the most, then Yangshuo, then Hong Kong. Feel free to reach out to her for her detailed report which may or may not be “Shenzhen was clean and cool”. In the morning I said goodbye to them as they set off for Vietnam for a week, and took the subway back to my apartment. Will had left for the US while I was in Guilin, so the past week I’ve had the place to myself. 

On Christmas Eve I got invited to hang out and have dinner with our friend Ty, who is the main guy we play boardgames with, and his friends at an airbnb he rented back in Luohu. To my surprise when I got there, dinner was Turkey with mashed potatoes, gravy, and cranberry sauce. So festive! I hadn’t had real Western food in a while, and it was perfect.  </p>

<figure className="blogFigure">
    <img src="../../blogimages/turkey-dinner.jpeg" alt="Turkey" height="400em" width="300em" className="blogImage"/> 
    <figcaption className="blogCaption">Image 6: Attempting to carve a turkey. It's way harder than it looks.
    </figcaption>

</figure>

<p>
That’s it for this update. I’m super excited for the upcoming couple months as the first semester of teaching is coming to an end, and I’ve got some big trips planned including a trip to Australia with my dad, and a trip to Japan with my friends from back home! Shout out to Owen, Becky, and Jake for coming all the way out to Asia to go exploring with me. As always feel free to reach out anytime and I’ll get back to you as soon as my VPN lets me. 
<br></br>
<br></br>
Cool, 
<br></br>
<br></br>
Baigs 
</p>
<p>
TLDR; Went to Guangzhou and tried to see as much of it as I could in one day. Met up with friends in Hong Kong. Mom and sister visited me! We spent time in Hong Kong, Shenzhen, and Yangshuo. Had some American Christmas dinner in China with friends, and also have amassed tons of “friends” on WeChat just from people randomly asking for it on the streets. 
</p>
</div>
    }
    else if (value === 6){
        html = <div className="blogPost">
            <p>
			The past two months have been so busy with travel, I feel as if I could write multiple entries about them. Luckily for you all, I’m going to condense it all into one entry and just fill it with the most interesting of my stories. Why have I been so busy? From January 10th until February 17th I had a vacation from teaching for the Chinese New Year holiday, and traveled for every single day of it. I went to Thailand, Australia, and Japan, and had the opportunity to show friends and family around Shenzhen, Guangzhou, and Hong Kong. Having done so much, all the experiences are beginning to blend together so this post will act as a good way to remember the events that happened and organize my thoughts. Let's start with my last-second trip to Thailand. 

			On January 8th I was told by my school that instead of classes ending on the 20th, they actually were going to end on the 10th. With an extra 10 days added to my vacation time, I decided that a trip needed to be planned and taken. I was already scheduled to fly out to Australia to meet my dad on January 20th, which gave me 10 days to see an entirely new country. I began researching countries nearby in Southeast Asia and eventually settled on Thailand due to its proximity, price of last-minute flights, and abundance of things to see there. Will unfortunately still had work the following week so he was unable to make the trip, but a couple of my work friends (Max and Alistair) were also looking to travel so we all teamed up. We decided on going to Chiang Mai in Northern Thailand, staying there for a few days, and then renting motorbikes and taking them up to a town called Pai. 

		  Chiang Mai is a small city in Northern Thailand that is pretty overrun by tourists and filled with artsy coffee shops, Thai massage parlors, bike repair shops, and ancient temples, some of which date back to over 700 years ago. We spent our time there hopping from restaurant to restaurant, getting Thai massages (where they basically just beat you up for an hour) and checking out the myriad of cafes. Some major food highlights included papaya salad, kao soi (curry noodles), and of course pad thai. 

		  On our first night we stayed up late experiencing the local nightlife, and woke up early the next morning to rent motorbikes and take them to a ’sticky waterfall’. The sticky waterfall was a big waterfall system where the rocks were made out of limestone, allowing people to climb up and down it without needing any special gear or major athletic skills. To my surprise, I was able to navigate the perilous climb successfully while only falling a few times to watch packs of 6-year-olds pass me by. Fading quickly from the few hours of sleep we got the night before we decided to head back to our hostel for an early night, but only after a couple plates of pad thai and some mango smoothies.	 </p>

		<figure className="blogFigure">
			<img src="../../blogimages/stickywaterfall.jpeg" alt="Sticky waterfall" height="400em" width="300em" className="blogImage" /> 
			<figcaption className="blogCaption">Image 1: Sticky waterfall. Also me.
			</figcaption>
		</figure>

		<p>
			The next morning was the morning of our big trip. We drove our bikes 80 miles North, driving the infamous 762 winding curves through beautiful mountain views and quaint villages until we arrived at a hippy village called Pai. Along the way we took multiple stops to sample the local dishes of the towns and check out any and every sign that claimed to lead to a waterfall. The drive took about four hours due to our numerous stops, and once we arrived filled me with relief as no major accidents happened. None of us were experienced motorbike drivers and to take them for a multi-hour drive across a country on a dangerous road didn’t seem like the safest idea at the time. I don’t like spoiling stories but in case you were wondering, we made it back without any injuries as well. </p>

			<figure className="blogFigure">
				<img src="../../blogimages/thaibike.jpeg" alt="Thai Bike" height="400em" width="400em" class = "rotateimg90" className="blogImage"/> 
				<figcaption className="blogCaption">Image 2: Ol' Bessy.
				</figcaption>
			</figure>

			<p>
			In terms of tourism Pai made Chiang Mai look like a local untouched city. Pai reminded me of Woodstock, New York in the late 60s: a place I have never visited before but completely filled with American hippies. Everywhere we looked we saw foreigners with dreadlocks wearing free-flowing elephant pants and rags the size of bed sheets instead of shirts. The only Thai people we saw the whole time we were there were the ones manning the countless food stalls lining the one big touristy street in the village. We spent the day hiking the Pai canyon, a skinny path hundreds of feet up with no walls or rails, and relaxing in a natural hot spring. 
			
			At the hot spring we got to watch some meditation class going on where a guy was softly speaking to a group of foreigners that were floating in the water in a circle around him. Each person was floating on his or her back with floaties on their ankles and wrists and another person was standing behind them holding their heads just above the water. They stayed that way for at least an hour, and a couple of them even broke down crying. I’m still unsure what exactly it was, probably some hippy thing I’ll never understand. 

			That night we walked the food stand street again and decided to leave Pai the next morning, a day earlier than we had planned to. While Chiang Mai was touristy as well, it at least offered more interesting day trips than being stuck in the middle of nowhere up North. Unfortunately at around 4am the next morning both Alistair and I woke up with violent food poisoning. Reasoning that biking three hours back through windy mountain turns with food poisoning probably wasn’t the best idea, we resolved to stay at the hostel drinking ginger ale and eating bread until we felt better. 

			Luckily for us 24 hours later we were feeling well enough to slowly ride the bikes back to Chiang Mai. However, the food poisoning did have a lasting effect in turning the last couple days of the trip into a more mellow experience. With the inability to try all the delicious foods and with the prospect that either one of us might need the bathroom at a moment’s notice, we took our last day easy, leisurely visiting some temples and villages, most notably being a village that specializes in making the colorful umbrellas you might find in tropical cocktails.

			Our Thailand trip now over, I had to quickly shake off the food poisoning residue and get ready to visit my dad in Australia. This was my first time being in a truly Western country in six months and I didn’t realize how much I missed it until I got there. 24 hours after returning to Shenzhen I was waking up in a hotel in Melbourne after a post-flight nap. We walked around the city, got dinner with my dad’s cousins, and checked out Melbourne’s Chinatown; I had to test its authenticity. 

			I was actually really impressed by the hipness of Melbourne’s back alleys and its overall diversity. Maybe it’s just because I’ve been living in a very homogenous area, but Melbourne seemed like a true melting pot of backgrounds. I imagine when I return to New York I’ll feel similarly about that too. 

			The reason my dad and I went to Australia was because he wanted to see the Australian open for the first time. I had forgotten how much I enjoyed watching and playing tennis until we walked onto the grounds and flashbacks of my high school tennis days played through my head. We got to see some great matches and had beautiful seats under the shade of the stadium (avoiding the Australian sun). I could summarize the eight days I spent in Australia by saying I got to watch some tennis and spend a lot of time with people triple my age, as my dad understandably wanted to connect with all his family he hadn’t seen in years. I did get to see some of my cousins closer in age to me in Melbourne and spend time with his two adorable children, as well as a friend of mine from New York now living in Sydney.  </p>

			<figure className="blogFigure">
				<img src="../../blogimages/aopen.jpeg" alt="Australian Open" height="400em" width="300em" className="blogImage"/> 
				<figcaption className="blogCaption">Image 3: Tennis is a sport where 2 people hit a yellow ball across a net.
				</figcaption>
			</figure>

			<p>

			One of the most memorable experiences in Australia was probably when I unexpectedly entered a sailing regatta for the first time. On our first day right after touching down in Sydney, we met up with my dad’s cousin Ivan. I was told that we’d be spending a couple of hours on his boat in Sydney Harbor. Joining the three of us was his son and son’s friend, as well as his cousins and their small children. The 10 of squeezed onto his sailboat and set off. After about five minutes of coasting through the breeze at precisely 6:28pm, Ivan asked me for the time. Naturally I responded with “nearly 6:30”. With a tone of annoyance in his voice he implored me for the exact time. "6:28” I said, beginning to regret getting on a boat with a bunch of strangers. He asked me to shout out the time on the minute every minute until 6:35. At this point I asked why, and he replied saying that 6:35 was when the race started. Sensing that I was a bit confused he had his son, who also happened to be my cousin, teach me how to tighten and loosen the ropes attached to the sails. Once the clock struck 6:35 and the race began, Ivan began barking commands at me and his fellow passengers (excluding the kids and my dad who got to sit back and watch). I was put to work running around a boat attempting to tighten and loosen ropes at a speed equal to the pace at which instructions were being yelled at me. Meanwhile the wind and waves were causing us to sway back and forth, the boat alternating between angles of about 30 degrees on either side. We had to make a series of sharp turns which caused some of the kids in the boat to begin crying, and others in the boat (potentially just me) to get seasick and question how anyone could find this fun. Although tightening and loosening ropes sounds like an easy task, when the boat you’re on is fully tilted on one edge and gravity is fighting against you, doing anything becomes a challenge. One hour later we cruised back to the docks and celebrated by enjoying some barbecue and watching the sunset. IT turns out we got second place in the race! At that point I vowed to follow one of my favorite idioms and quit while I was ahead. 

			After Australia I showed my dad around China, and celebrated my birthday in Hong Kong the night before leaving for Japan. Finally, a moment I had been looking forward to for years, I would get to visit Japan. I met up with my friends Jake, Becky, and Owen from Tufts in Tokyo the night of February 2nd. Unlike a lot of my travel I had done previously, our trip in Japan ran smoothly from day one until we left for China. That’s half due to the credit of Jake’s excellent planning abilities, and half due to the fact that Japan is an amazing country to visit, rich in culture, delicious food, and friendly locals willing to lend a helping hand. 
			

			Traveling in a group always proves to be interesting since people like to travel in different ways. For example Jake loves to travel through food and so we made sure to sample everything from fresh sushi at Toyosu market, to ramen in Tokyo station, to Tonkatsu pork. I do want to take a second to explain the best meal we had on the trip, and probably one of the best meals I’ve had in general. One morning in Tokyo we woke up before sunrise to head over to Toyosu market, where the famous bluefin tuna auctions happen. That morning after watching some of the auctioning we ate breakfast at an omakase sushi restaurant called Sushi Dai. It consisted of 10 pieces of sashimi, of whatever fish was fresh that day. I truly had never had sushi like that before. The best of all was the last piece, which was the only piece we got to choose ourselves. After consulting with the waiter about what to order, we all settled on trying the seasonal special, cod sperm sacs. They had the exact consistency you’re probably imagining right now; slimy white sacs that popped in your mouth when you bite into them. Although it took a few seconds to adjust to, they actually were packed with flavor, an opinion that I alone may have held.  </p>

			<figure className="blogFigure">
				<img src="../../blogimages/sushi.jpeg" alt="Sushi" height="400em" width="300em" className="blogImage"/> 
				<figcaption className="blogCaption">Image 4: :) 
				</figcaption>
			</figure>
			<p>

			Owen, while still enjoying trying all the food, put more emphasis on the cultural aspects of wherever we were visiting. We visited both the samurai and sumo museums, walked around the imperial palace, hiked through the Fushimi Inari shrine in Kyoto, and did a tour of the Okunoin cemetery and temple in Koyasan. One of the craziest moments for me in Japan was walking around some of the arcades in Tokyo. There were a plethora of massive multi-story arcades peppered all throughout the city that housed hundreds of people mindlessly clicking buttons on games they seemingly were born playing. Most impressive of all of them were the people playing some type of dance dance revolution remake. 

			 One of the highlights of the entire trip came from a recommendation Will gave me. Of course Will has to be mentioned in every entry at least once so here’s his sentence of fame. We left Kyoto for a mountain village called Koyasan on mount Koya. It took about three hours to get there, including a nauseating bus ride up the windy roads of the mountain. We stayed that night in a Buddhist temple in a traditional room with tatami mats. They served us a vegan dinner and breakfast, allowed us to attend the morning prayers at 6am, and they had a thermal spring bath which we completely took advantage of due to the freezing cold weather. We did a hike that afternoon, and toured the cemetery at night. What I loved about the cemetery was that over 200,000 people are buried there and they accept anyone from around the world practicing any faith. The next morning it began to snow so we took a scenic stroll through the cemetery again and left that afternoon for Osaka, our last day of the trip. After eating more sushi, walking through some markets, and eating one more bowl of ramen, we were ready to explore China.  </p>
            <div style={{
                display: "flex",
                justifyContent: "space-between"
            }}>
                <figure className="blogFigure">
                    <img src="../../blogimages/temple.jpeg" alt="Koyasan Temple" height="400em" width="300em" className="blogImage"/> 
                    <figcaption className="blogCaption">Image 4: Our temple home.
                    </figcaption>
                </figure>

                <figure className="blogFigure">
                    <img src="../../blogimages/cemetery.jpeg" alt="cemetery" height="400em" width="300em" className="blogImage"/> 
                    <figcaption className="blogCaption">Image 5: Cemetery Koyasan.
                    </figcaption>
                </figure>
            </div>

			<p>
			Arriving in Hong Kong we had a quick dim sum brunch before catching the bullet train to Shenzhen. Our first couple days in Shenzhen I was amazed to see how quiet everything was. Everyone from food stall owners to electronics market shop owners to regular pedestrians seemed to have left town for the holidays. A big chunk of our China trip was spent in Guangzhou. Right after getting to the hostel we decided to try to buy tickets to the Guangzhou Long Lions CBA (Chinese Basketball Association) game. We eventually found the stadium and after being hassled to buy scalped tickets from some people outside the front, we eventually decided to buy tickets we were confident were real from some security guards sitting outside the entrance. We had great seats near the front at a game that was less than half full. It was actually a super close game against the Beijing Ducks which ended in a close finish with Guangzhou winning by just a couple baskets. Each team had two American players that greatly overshadowed the rest of the players on the court. Each American player had 30+ points, though the Chinese players certainly had more fouls than the Americans; two of them even fouled out of the game. The craziest part of the game was that in the last quarter, both teams took out their star players. We couldn’t understand what the deal was, especially during such a close game. Only afterwards did we look up the rules and realize that there are constraints against non-Asian players. For example, each team can only have a maximum of two non-Asian players, who can only play a total of six quarters in a game. So in the case of the game we watched, both teams had maxed out the number of quarters they could play their foreigners by the last quarter. Also, each team can only play one foreign player in the last quarter. We also found out that there are rules in the league that apply only when playing a specific team. The Bayi Rockets, a team founded by the People’s Liberation Army (PLA), has no foreign players and so when playing the Rockets teams must limit their foreigners to five quarters.  </p>

			<figure className="blogFigure">
				<img src="../../blogimages/basketball.jpeg" alt="Typhoon" height="400em" width="300em" className="blogImage"/> 
				<figcaption className="blogCaption">Image 6: Chinese Basketball Association.
				</figcaption>
			</figure>

			<p>
			We ate dim sum three times on this trip. Once in Hong Kong at Tim Ho Wan, a classic, and twice in Guangzhou. Our first attempt at eating dim sum in Guangzhou was quite a riot. We woke up our first morning after the basketball game, looked up the most recommended dim sum places, and headed for one that was nearby. Unfortunately it was closed, probably due to it still being the holidays. Another highly recommended dim sum spot was nearby so we walked the 15 minutes but when we got there, there was a huge line. Deciding that it would probably be worth the wait we decided to stay there and bide our time until a table was ready. It took nearly two hours. By the time we finally got to our table, we were grumpy and starving but excited to eat some good food. This particular restaurant only had Chinese menus with no pictures, so we asked the waitress if we could be taken around so that we could point at things either in the kitchen or just what other people were eating that looked good. Probably due to my poor Chinese communication skills she only took us to the dessert section, so our first round of dishes were primarily desserts, and durian desserts at that. We decided to take our chances with random dishes on the menu as well as some of their recommendations. We got some interesting dishes, all of which were quite good, though the kitchen reported that a few of what we ordered was out of stock. We did a couple more rounds of ordering 5 or so dishes and each time they came back saying 2-3 of them were no longer being served. Not only did we not know what we were ordering, but we didn’t know what we were getting or what was out of stock. After a frustrating, tasty but not satisfying breakfast, we decided to ask for one more order of shrimp shumai, a staple. About 30 minutes later our dish still hadn’t arrived and at that point we were all ready to just leave. As I was getting up to pay the bill, a woman ran over and placed a dish on our table. It looked like shrimp shumai but it had what looked like oysters on top, and instead of the usual four dumplings to a dish, this only had two dumplings. It was time to give up and get our day started. Even though it wasn’t the most relaxing and satisfying breakfast we all hoped for, it was definitely a good insight into how frustrating it can be to a foreigner in China and never know what’s going on or what food you’re about to eat.  

			The rest of the trip went smoothly as we all began to tire out from traveling for two straight weeks (five straight weeks in my case) and took it easy in our last day in Shenzhen. The last day we went to Hong Kong and met up with Owen’s colleague from work who showed us around Hong Kong. We went to a fisherman’s island called Cheung Chau where we sampled different mochi, and watched the sunset. We also went to the top of the Peak for a final Chinese dinner. We finished out the trip by playing cards (a game called Mao that I taught everyone) in a bar in SoHo (yes there’s a SoHo in Hong Kong too). I think (hope) all my friends enjoyed the trip, regardless, Owen left with a couple oil paintings and a cast iron wok, so I’d say it was pretty successful. 

			That’s all for now, I’ve just started my second semester as an English teacher teaching the same students as last semester. They were pumped to have me back, but I'm beginning to feel ready for the next thing, whatever that may be. 
            <br></br>
            <br></br>
			Until next time!
            <br></br>
            <br></br> 

			Baigs 
            </p>
            <p>
			TLDR; Traveled a ton. Thailand, Australia, Japan, China. Saw family and friends. To hear more about it, read the email.


		</p>
        </div>
    }
    else if (value === 7){
        html = <div className="blogPost">
            <p>
		Hi all,

Writing this in early April I’m realizing how quickly my time here is moving. I’ve nearly been living in Shenzhen for 8 months, I only have 3 months left of teaching, and every night I go to sleep with the impending question of what should I do next swimming through my head. Last month I had more friends come visit me, and this month my sister Mic turns 20; so on the 28th everyone should wish her a warm welcome into post-teen life! I also went on a backpacking/camping trip in Hong Kong over a 3-day weekend with Will. Stay tuned for stories on all the above. 

Back in early March Will and I had the pleasure of taking our friend from college named Colin around Hong Kong for a weekend. He was coming to visit us with our other friend Brett, whose parents live in Wuhan, China. Before heading up to Wuhan however, he spent a weekend with us in Hong Kong. Getting to catch up with Colin after not seeing each other for nearly two years was surely a highlight, as was hiking around Lamma island, but I’ll always remember walking to our hostel from Central late at night trying to catch cabs unsuccessfully all the way home. It was two hours of pure frustration and excellent 3am exercise. 

The following week flew by with the anticipation of taking a bullet train five hours North to see Colin, Brett, and his family and soon enough there I was in Wuhan. Wuhan is one of the biggest cities you probably have never heard of. It’s in central China and boasts a population of 12 million people. I only had from Friday night to Sunday afternoon to explore the city so I definitely didn’t get to see it all, but I had a great time just being with friends. We walked around a plum/cherry blossom park right as they were starting to bloom, sampled the Wuhan famous hot dry noodles, and explored a massive wholesale market where you could find anything, and thousands of them. I personally bought a couple pairs of boxers as I was running low and couldn’t resist the incredible deal. </p> 
	
			<figure>
				<img src="images/blogimages/wuhannoodles.jpeg" alt="Noodles" height="275em" width="280em" class = "rotateimg90"/> 
				<figcaption>Image 1: Hot dry noodles.
				</figcaption>
			</figure>
		
			<p>

Brett and Colin then stayed with Will and me down in Shenzhen for the week while I was teaching. That Monday, they got to see me teach a class at school as well as perform in an English language festival. This past month my school has been hosting an English language month where every week there is a different event. The events range from entire-school assemblies in English, to English speaking competitions. Brett, Colin, and Will got to see me perform a poem (that the school wrote) with some of my students, and recently I also got to judge one of the English speaking competitions. Supposedly I’m also going to compete in a speaking competition in the upcoming weeks against the other teachers, though I don’t really understand why as I’m the only native English speaker. I just hope I don’t lose. I’ll report back on that in the next entry.


In Shenzhen we took them to the standard spots (Electronics market, Baishizhou, Luohu fake goods mall, Dongmen walking street) as well as some things we hadn’t done before. One night we met up with a couple of our Chinese friends and went to a really cool jazz bar that they showed us. We followed up with more music and went to a massive building dedicated to ktv (karaoke). We got a room and spent the next couple hours trading between singing American and Chinese pop songs. I unfortunately had to taxi back home afterwards as I was teaching the next day, but they went off to get late night barbecue. It was a great last night in Shenzhen with friends, and I now have excellent blackmail material of my friends singing (screaming) Ariana Grande songs. </p>

			<figure>
				<img src="images/blogimages/ktv.jpeg" alt="ktv" height="400em" width="300em"/> 
				<figcaption>Image 2: Colin belts karaoke.
				</figcaption>
			</figure>
		
			<p>


That weekend we traveled together to Guangzhou, a city I have been to many times now but conveniently a city that Brett grew up in during his middle school years. I gave him total control over the weekend as I’m sure he wanted to do some nostalgia-inducing activities. We did a nice mixture of old and new for me. We walked through an old medicine market with massive bags full of dried ingredients, and cages with all sorts of animals. We got foot massages, ate superb dim sum in a restaurant Brett used to go to, and walked around malls and arcades sipping bubble tea. My favorite night was when we sat in Zhen Zhu New Town overlooking the Canton Tower and wrote poems. During college my friends and I would host poetry nights where people would come over and for 30 minutes write poetry and we’d all share them after. None of us are poets, and most of them were intentionally comedic. We decided to do a poetry night in Guangzhou and it was awesome. Here’s a poem Brett wrote that I think is worth sharing.

Hainan Chicken Rice



Though a sterile concrete jungle

I wouldn't visit twice or thrice

Each day I thank thee, Singapore

For Hainan chicken rice



Boiled in broth with ginger and onion

Until meat is tender and juicy white

Supple flesh to be slurped off the bone

O, delicious chicken rice



A coarse paste of garlic, ginger, oil 

Adorns fatty skin and tastes so nice

A contrast of subtle and strong flavors

O, fantastic chicken rice



Whether Michelin stars count one, two or more

A meal out with you will forever suffice

Last time I cooked you at home I got salmonella

O, difficult chicken rice



So simple, so dainty yet so delicious

Should be easy to just boil a freaking chicken right?

If you want to be hungry for three hours then immediately get salmonella

Try cooking chicken rice



I should have bought health insurance.

It's just that I'm socially liberal and fiscally conservative, aiite?

Next thing I've contracted a mid-15th century disease

From hainan chicken rice



Dear god I ate every last bit of that chicken

I'm crying and sweating and puking all night

I'm in the hospital, paying in cash for salmonella

Induced by Hainan chicken rice



And as I lay here in my diarrhea stained death bed

My family's bank accounts bare with strife

I smile as I order my last meal on earth

Fajitas!
</p>

			<figure>
				<img src="images/blogimages/guangzhoudimsum.jpeg" alt="dim sum" height="300em" width="400em"/> 
				<figcaption>Image 3: Post-dim sum smiles.
				</figcaption>
			</figure>
		
			<p>

Saying goodbye to my friends was tough, but it was quickly followed up by a 3-day weekend trip to Hong Kong with Will. China just celebrated Qingming festival, or tomb sweeping day, which is a day for people to honor the dead. All schools got the Friday off and we decided to take the opportunity to camp in the Hong Kong New Territories, an area largely uninhabited and protected by the government so that people can’t build on the land. Needless to say it’s full of forest, mountain, and beach, all natural things things that you don’t see very often in such proximity to major metropolises.

To prepare for the trip we ordered a tent on Taobao, and although we thought we ordered a 2-person tent, it turned out to be for 1 person. Either we had read the listing incorrectly, or Taobao had deceived us! We packed up our bags for the weekend, everything from clothes to our tent to water and food. We didn’t have big enough backpacks to fit enough supplies for 3 days of camping and hiking, so we decided to create a route that centered around a beach campsite with food and water. 

On our first day after I got off from school, we caught the subway into Hong Kong, ate a late lunch, and filled the space we had left in our bags with 7 Eleven snacks. We caught a series of three subsequent buses and right as the sun was setting we found ourselves standing in front of our first campsite. We had gotten off the bus and walked through the woods a bit and when we found it there was a big sign that said it was closed! Our trip was off to a good start. Luckily Will had a phone with a data plan and so we looked around the map for the nearest campsite. We walked back up to the road and waited for another to bus to come and take us a few more stops to the new site. This new site was right on the side of the road and by the time we got there and set up camp, it was pitch black. We were the only ones sleeping there that night so we were able to use our flashlights and talk. After pitching our single person tent we sat on a bench and ate most of our snacks for dinner and talked for a couple hours before heading to bed. However, I began feeling itchy all over my body so I got up from the bench and turned my phone’s flashlight on. The entire bench was swarming with ants, specifically around the spot where I left my sandwich wrapper. We threw out the wrapper, and I took some time to rid the ants from my body. It was definitely a good lesson in camping; clean up immediately after eating in the wild. </p>

			<figure>
				<img src="images/blogimages/tent.jpeg" alt="Tent" height="300em" width="400em"/> 
				<figcaption>Image 4: How to squeeze two people in a one-person tent?
				</figcaption>
			</figure>
		
			<p>

We woke up early the next morning, mostly because of the poor sleeping conditions. We slept on the hard ground with no room for movement in the tent. We began our hike to the next campsite and within 10 seconds of starting on the trail, a huge snake slid across the path in front of us. Off to a good start. We hiked steep inclines for about four hours on limited supplies (the ants had gotten into my water bottle as well) until we came to a small village on a beach with a cafe. We bought more water, ate some much needed food, and hiked a bit more to a remote beach village; our second campsite. We rested for a couple hours there and started talking with a Chinese tour group from Shenzhen who were all petroleum engineers. There was a 4-year old boy (not a petroleum engineer yet but rather one of their sons) who kept shooting Will and me with a plastic bottle masquerading as a rifle. I faked my death maybe 100 times that evening just to appease him. More and more people came to the beach so Will and I decided to hike a bit further on to an even more remote beach and setup camp there. When we reached the beach, we were warmly welcomed by a herd of cows basking in the Spring sun. I guess it really was remote. We ate dinner at the campsite, walked around the beach at night, and sustained no fewer than 50 mosquito bites before heading to bed. </p>

			<figure>
				<img src="images/blogimages/cows.jpeg" alt="cows" height="305em" width="280em" class = "rotateimg90"/> 
				<figcaption>Image 5: Cows.
				</figcaption>
			</figure>
		
			<p>

The next day we packed up and did another grueling couple hours of pure uphill hiking until we reached a road with a bus stop. Along the way however I ran into two of my 5th grade students! I actually didn’t recognize them and was mostly focusing on just making it up this mountain, but they shouted my name as they passed us walking down. I stopped and traded a few words with them before we went our separate ways. The following week in school in their class though everyone had heard that I had seen a couple students while hiking and everyone wanted to know what I was doing there. News travels fast when you’re 10 years old I guess. We then took a bus to a town called Sai Kung so that we could get lunch and restock our supplies. At the restaurant we ate at, the owner’s mother came out and sat with us for a couple hours. It was nice to hear her perspective on the future of China and Hong Kong.

She walked us to a grocery store where we bought 12 slices of salami, a container of tomatoes, and some salt and pepper crackers for dinner, and a bag of muesli for breakfast. We said goodbye to her and began our ascent to our last campsite of the trip. Luckily for us the next campsite was on top of a mountain, about 2 hours of stairs away. We were already pretty worn out from not sleeping well and hiking all day on low amounts of food, but we managed to make it all the way up and were rewarded with the best view of the trip. We ate our dinner overlooking Sai Kung and the bay, made sure not to feed any ants, waved at all the cows, and pitched our tent for the lat time. That night we shared the space with a Hong Kong middle school group, who kept us up all night with their screaming and woke us up early with it too.

We let out our frustrations by passively saying nothing to them and on Sunday morning left for home. The way back was short as we just had to hike down the other side of the mountain and find a metro stop that would take us back to Shenzhen. However, we took a wrong path on the way down and basically walked down an extremely tight goat path (I think?). Our legs were getting scraped by brambles with every step and we ran into a group of older hikers who gifted us with grapes, an orange, and a photoshoot. Eventually we made it to a subway, and subsequently Shenzhen, and I took a much needed shower and sleep.

In other news I am beginning to plan my next moves! I only have a few months left of teaching in China, but before coming home I still want to do some more traveling. My plan as of now is to take a few months to travel as much of Japan as I can! I had a really great time when I went with my friends back in February, but I felt as if the country had so much more to explore.

I haven’t bought any flights yet, but I am currently planning on being in Japan from late July until my money runs out. If you or anyone you know wants to travel with me in Japan, or already lives in Japan, please let me know! Especially if you know anyone that lives in Japan and would be willing to host me! 

That’s all for now; I’m looking forward to hearing back from you all, and don’t forget to send a Happy Birthday wish to my sister on April 28th!

Great,

Baigs

TLDR; My friends Brett and Colin came to visit. We went to Guangzhou and wrote some poetry. Will and I went hiking and I learned what nature was. I’m planning on traveling to Japan for some months starting in late July so please send me recommendations and/or contacts of people you know that live there! ~Thanks

		</p>
        </div>
    }
    else if (value === 8){
        html = 
        <div className="blogPost">
            <p>
            Sup everyone,

Remember me? I’ve been waiting for some new, crazy, exciting thing to happen to write another one of these. Unfortunately, I haven’t done anything wild so now I’m left with 2 months full of small events to try to write about. I’m laying in bed with the AC blasting (as Shenzhen has recently turned back into swampland mosquito paradise) listening to ambient ~music~ to both concentrate, and hopefully get me in a zen state in preparation for Japan.

Speaking of Japan, I’ve recently put down the Chinese books and instead started teaching myself some Japanese. I haven’t gotten very far, but hopefully I’ll be able to learn how to read a little and communicate some basic phrases while I’m there, without doing too much damage to the Chinese I’ve already learned. On top of that, I also bought a giant book of haiku, which I plan to read while traveling. Here’s my best attempt at a haiku before spending more time in Japan:

Japan is quite cool
There is a lot of nature
Also tasty food.

Ok, I’ve got some room for improvement but I’ll work on it and send a final haiku after my travels in the land of haiku.

In other travel news, I flew to Chengdu over a holiday we had back in May with my friend Max. He and I met up with his friend Stella who lives in Chengdu and took us around the city for our time there. Of course, it didn’t end up as planned as in typical Daniel fashion I got sick immediately upon arrival (at least this time it wasn’t food poisoning). I’m not sure why, but I always seem to get sick when I travel. When I went to India back in college I got intense food poisoning for nearly a week, in Thailand I got food poisoning as well, in Yunnan province I had the mouth ulcers, and now in Chengdu, I got the flu. For someone who loves traveling, I guess I’m really not that good at it. 

Stella picked me up at the airport late at night, as I arrived earlier than Max, and drove me to the hotel she had recommended we stay in for the first night. The hotel was specifically close to the airport since it was nearly midnight. Stella, while an exceptionally kind soul for picking me up without having met me before, had no directional abilities. It took us nearly two hours to find the right hotel that ended up being a 5-minute drive from the airport parking lot. On top of being directionally challenged, we also went to the wrong hotel first much further away; who could have guessed that in Chengdu, the city of pandas, there would be multiple hotels called ’The Panda Hotel’.

The next morning we got a big Sichuan lunch and walked around the downtown area before I started feeling off. Luckily I was able to eat at least one meal. For the remainder of the trip, I was stuck in bed, taking pain killers and drinking gallons of water. I vaguely remember seeing Stella’s apartment, meeting her mom (and her cat) and being fed spicy tofu and greens that were deemed not spicy by the locals. I left Chengdu having not really experienced it, and Will met me in Hong Kong to help me visit a doctor, as I was super sick at the time. As always, Will comes to my rescue. I was sick in bed for 5 more days in Shenzhen, missing school but not being too upset about it.

The past couple of months I’ve been in Shenzhen, I’ve tried to do some nuanced activities that might give me more insight into the culture. For example, there is an Internet cafe near my apartment that I’ve never been in but am always curious what it’s like. One afternoon after teaching I went inside and saw tons of computers lined up in rows with huge monitors, oversized headphone, bright LED keyboards and mouses (mice? What’s the plural form for a computer mouse? I’m just gonna go with mouses) and big black comfy chairs. Most of the seats were taken up by guys in their mid-20s to mid-30s, all chain-smoking cigarettes or eating instant ramen and playing computer games that all looked the same to me. I asked the woman at the front desk if I could use a computer for an hour, and she returned my question with a look of pure confusion. Either she had never seen a foreigner in that cafe, or I totally could have just messed up my question in Chinese. 

She asked me for my passport, which made me wonder why she needed it, but luckily I had it on me. It turns out you needed to use your passport number as a password to access the computers, but I also imagine that they were monitoring everything I was doing and if I searched for something deemed sensitive to the Chinese government, they would know my identity. After successfully getting on the computer, I realized I had no idea what I actually wanted to do. I think I just wanted to experience the vibe. Everything was in Chinese as to be expected and while I eventually figured out how to navigate to the games selection through trial and error, I needed a Chinese ID to create accounts for every game. I was out of luck. I ended up just sitting and watching all the guys around me play their games while inhaling all their second-hand smoke. It was fun?

In a similar fashion one weekend day, I went to a public swimming pool with my friend Max and his Chinese friend who told me to call her Sarah. When we got there they made us all purchase swimming caps so that our hair wouldn’t shed into the pool. I stood in front of the desk with my exposed chest full of hair ripe for shedding and asked them if I would also need to wear a full-body suit. The two women manning the desk giggled, but didn’t answer the question and still made me buy the swimming cap. The experience in the pool was unremarkable at best. It was a cloudy day so it wasn’t full of people, and the pool was cold so I didn’t want to swim for very long. The most exciting discovery was that Sarah was, for whatever reason, extremely scared of jumping off the edge of the pool into the water; it was perhaps a 3-inch jump. Every time she jumped she let out a piercing scream that made everyone in the pool immediately look in our direction. Regardless, she was intent on overcoming her fear and jumped over 10 times, never failing to release a scream.

Another night I went out with Will and Max (and more of Max’s Chinese friends) to a Latin bar where they had a free Latin dancing class. The bar had two Russian dancing instructors who taught us the art of Bachata and Dance Hall style dancing. Latin dancing with a bunch of Chinese people and being taught by Russians was culturally comical and fun, but for me, the highlight of the night was actually sitting at the bar and holding down a conversation with the Chinese people in our group in Chinese for a while. The conversation was simple of course; I mostly asked them questions like “What do you like to do?” And “have you ever been to America?”. But hey, that’s better than nothing.

As we only have one month left living in Shenzhen, Will and I decided to spend one last weekend in Hong Kong. We wanted to do a mix of new things and nostalgia-inducing activities that we have done a million times. A million is a bit of an exaggeration, though I did count the number of China stamps I have in my passport from traveling to and from Hong Kong. While a million is more than 32, 16 visits to Hong Kong is still quite a lot. 

We started off the weekend with a morning hike of Suicide Cliff, a new hike for us. While the name is meant to spark fear in the hearts of potential climbers, it wasn’t as dangerous as we had anticipated. Having said that, it was an arduous hike that involved us having to swim through overgrown bushes while stepping in mud and attracting bugs seemingly from the entire country. On one occasion a stick bug fell from a tree onto my shoulder and refused to let go of me. I appreciated the sentiment, but I really wasn’t looking for anything serious at the time and eventually convinced him to go back into the wilderness.

We hiked down the mountain and arrived at the Chi Lin nunnery and gardens. It was a beautiful scene, I just felt a little out of place being covered in sweat and mosquito bites. After looking inside and wandering through the gardens we left to find some lunch.

That night we went up to Victoria Peak to see the iconic skyline one last time. On our way down it started to rain, so we stopped by Little Bao for some green tea ice cream bao, and decided to call it a night due to the heavy rain. The next day was filled with nostalgia-inducing activities such as a final dim sum at Tim Ho Wan, taking the star ferry across the harbor, and drinking various teas with the owner of a tea shop called Fukien Tea Company. That night we ate at a typical Hong Kong cafe and ended our trip with a cocktail at a famous cocktail bar called The Old Man. It’s a bar dedicated to Ernest Hemingway and finds itself near the top of a list of the best cocktail bars in Asia. My drink included Guava gin, carrot puré, and tarragon amongst other hard-to-name ingredients. 

This year Hong Kong has been a home away from home, away from home of sorts. I feel this deep sense of nostalgia for it, even though I have never lived there. It has been an excellent outlet for when mainland China gets frustrating, and when you get past the incessant consumerism that dominates large parts of the downtown areas, it’s a city with incredible culture, beautiful nature, budding industry, and a vibrant nightlife. I’m sure that I’ll be back to visit one day, even if it’s just to climb Victoria Peak to see the skyline or stop into Tim Ho Wan for a pork bun.

I’d like to finish off this email with my final thoughts on being a teacher and how life at school has been. After all, that’s what I’ve been spending most of my time doing and I don’t think I’ve talked about it much ever since that first email where I vented about how overwhelming it was.

At the time of writing this update, I only have 3 more weeks of teaching left. Surprisingly it’s a bitter-sweet ending for me. Teaching has been a strange experience. It’s been absolutely frustrating at times when students refuse to stay quiet and listen. It’s been tiring when you have to teach 5 classes in a row in a given day and you’re constantly on your feet and yelling. It’s also been monotonous at times. Every week I prepare a lesson plan (which gets pretty easy once you get in the rhythm of it) and then for an entire week I’m just executing on a plan 20 times over again until the next week comes. It’s quite repetitive and not something that I find particularly engaging. That’s not to say that I think all teaching is repetitive and boring, I just think my unique situation doesn’t line up well with my interests. 

Having said all of this, the one aspect that makes this departure a bitter-sweet one is the bond I have created with many of my students. I teach 1000 students, so I can’t say that I know all of my students or even know the names of most of them, but there is a handful that I feel I have connected with. These students run to my room before class, grab my hand and walk me to their classrooms. They always participate and try to speak English as best as they can. They give me snacks whenever they have them, draw me pictures, write me letters, create origami swans for me, and tell me I am their favorite teacher. This past week I taught a lesson on inventions and had students create their own inventions. In my classes there were multiple students whose inventions were ‘robot Daniels’, robots that were exactly like me but could stay and teach them in my place when I leave to go back home. I don’t think I’ll ever be met with such excitement and happiness when I walk into work in the morning as I do teaching here. Maybe I’ll ask my future coworkers to scream and give me high-fives and snacks every morning but that seems like a tall order.

This last month Will has taken up a pledge of only speaking Chinese in an attempt to fully immerse himself in the language. It has made communicating difficult and sometimes downright impossible, but on the other hand, it’s certainly improving my Chinese as well. We probably should have done this from the beginning if I really wanted to get better at Chinese… but too late now!

In a few weeks when my job ends, I plan on traveling for a month all throughout China. I’d love to visit Beijing and Shanghai as those are two major cities I haven’t been to yet, but I’d also like to get a look into what rural life is like here. Will and I are planning a trip to travel through rural Sichuan province in mid-July so I’ll keep you all updated on how that goes. After that, as you know I am embarking for Japan. I might stay there for a month, or two, or more. At this point, it’s all up in the air. I’ll probably write one more update email after my travels in China and before I leave for Japan, so be on the lookout for that in a month or so.

As always I look forward to hearing from all of you back home! I hope all is well.

Best,

Baigs
            </p>
        </div>
    }
    else if (value === 9){
        html = 
        <div className="blogPost">
            <p>
            Hi all, welcome to the last of my Chinese update emails. For those of you still reading these, congrats on making it all the way through! I’m sitting in my empty apartment next to my two fully packed suitcases on my last night in Shenzhen getting ready to catch a plane to Japan. These past couple of months have been packed with finishing up teaching, traveling all throughout China, and planning my last trip to Japan. As you can imagine I have a lot to write about, but since I only have a couple of hours before I need to pack my computer, I’ll gloss over the details and only talk big-picture. If you want more details just message me privately, or wait until I come home in a couple of months and let’s grab lunch!

June ended with saying goodbye to all of my students at Lilin primary school in Shenzhen. As I noted in my previous email, it was bitter-sweet for me. Most of my students didn’t grasp that I was leaving forever, and I imagine to them it was irrelevant (they’ll just get a new foreign English teacher next year who probably is more qualified and doesn’t have a receding hairline). However, some of my students were sad to see me go. A couple of students bought me gifts on my last day (as well as gifts for my sister) and lots of students gave me hugs telling me they’ll miss me. I actually gave out my WeChat account to all of my 4th and 5th-grade classes and chaos quickly ensued. I have woken up every day with 10 new friend requests and hundreds of messages saying “good morning” or “do you like China?” or “where are you and what are you doing?”. I decided to deal with it all to create a group chat with everyone in it, and while it helped organize everything, I still get flooded with messages every day. I’m hoping that one day in the future students will be able to reach out to me, especially if they are planning on coming to the US for college.

To celebrate school ending I took a weekend trip to Macau. Macau was given back to the Chinese government pretty recently in 1999 by Portugal, so it still feels relatively European. It’s also a gambling hub, rivaling Los Vegas. The city has some really quaint and historic areas but the juxtaposition between them and the massive gaudy casino strips was startling. I spent my time walking through the historic towns, eating egg tarts, and watching thousands of people lose large amounts of money in casinos. The most common game by a wide margin was Baccarat, whose presence dominated every casino. The minimum buy-in for a single hand was $75 USD and to my horror after learning the rules, the game required no strategy. It’s basically a blind guessing game. I guess gambling isn’t for me.

In my last few days before flying out to Northern China, I took up a part-time job as a voice actor for children’s English books. I found the gig through a language partner I met online while I was studying Chinese, and visited him in his recording studio in Shenzhen. On two separate occasions, I spent about four hours sitting in a recording studio reading basic English dialogue. It wasn’t the most interesting of jobs, but the idea that my voice might be heard by students all over China is pretty funny. 

One of my goals in China was to play a game of Mahjong, and I finally got to do it on one of my final nights. One of my friends invited both Will and me and a bunch of her Chinese friends to her apartment for a final hotpot dinner and Mahjong night. We learned all the basic rules and then played a few rounds. Mahjong is a game for four players who take turns drawing tiles and trying to make 3-of-a-kind, or 3-in-a-row, or basic pairs with them. You might recognize it if you’ve seen the recent Hollywood blockbuster ‘Crazy Rich Asians’. Much to my liking and much to my host and her friends disliking, I somehow was able to win 2 of the 3 rounds that we played. Big shoutout to Sena for allowing me to realize one of my Chinese dreams!

The past three weeks I’ve been traveling throughout China non-stop, seeing mostly major cities (Beijing, Shanghai, etc.) but also some really rural areas in Sichuan province. I did so many things during this trip that it would be a whole email in itself so I’ll just brush over some highlights. In the first 11 days, I went to Hangzhou, Shanghai, and Beijing. Hangzhou is a peaceful lake city just an hour from Shanghai on high-speed rail. The highlight in Hangzhou for me was walking through the Longjing green tea fields and sipping tea while overlooking them. Hangzhou is famous for its Longjing “Dragon Well” green tea. Before coming to China and while I was doing research on what city I wanted to move to, I found a video about Hangzhou and its tea fields and it made me want to live there. Obviously, I didn’t end up moving there, but I wanted to experience the tea fields just like the guy in the video I watched did. While I don’t think I walked through the fields as gracefully or majestically as the guy in the video, I was happy just to be there.

Next up was Shanghai, a city so international that I forgot I was even in China. I enjoyed all the tourist destinations (The bund, French concession, yu garden, Jing’an temple, etc.), ate soup dumplings galore, and got drinks of rooftops on multiple occasions. I happened to be in Shanghai during July 4th, and since Shanghai has a huge foreigner population, there were celebrations all over. My friend Max joined me in Hangzhou and Shanghai and he had a couple of friends living there that we met up with for barbecue and drinks. It was a welcomed experience to speak English and celebrate an American holiday, especially in a city that felt so Western.

My time in Beijing was truly special. Max left to go back to Shenzhen, and I met up with my friend Ping from college who lives in Beijing and works for her dad’s musical instrument company. Upon arriving at her apartment, we went straight to her grandparent’s house for a homemade Beijing meal. It consisted of lots of dumplings, among other various dishes. Her grandparents were shocked and excited to have a foreigner in their home, and other than asking me all sorts of questions, they showed me their wall of plates that they collected from their travels.

I did a lot of the main toast attractions alone since Ping was getting ready for a trip back to the US. Tiananmen Square, The Forbidden City, The Summer Palace, etc. were all interesting and would have felt traditional and authentic had there not been swarms of tourists everywhere. I now really understand what people say when they say that there are lots of people in China. She did, however, hike the Great Wall with me, which was a spectacular sight. People definitely hype it up a lot but I think it deserves all the praise it gets. When you’re up there you get a real sense for how vast and impressive a structure it really is. Before we hiked the Great Wall, Ping took me around the musical instrument factory that she works at. It was really cool to see both how string instruments get made from scratch, and how a Chinese factory operates.

Ping is a big foodie, so for every meal, she made sure we ordered all the authentic Beijing dishes and it was all delicious. The big highlight in the food department, of course, the Peking duck we had. She also volunteers in a farm-to-table cafe owned by a Taiwanese-American woman and her husband, so I got to eat lunch there as well. While the bagel and lox I had there don’t rival what you get in NY, it was still a real treat and a nostalgic taste of home.

I did a quick pit stop for a day back in Shenzhen to do laundry and rest for a moment before flying back up to meet Will in Chongqing. I should have just gone straight to Chongqing and saved myself a flight but whatever, hindsight is 20/20. The next 10 days Will and I traveled together throughout Sichuan including Chongqing (a major city) but also three rural towns called Leshan, Emeishan, and Xichang. With our last time together Will and I wanted to find the “real” China since living in Shenzhen and even traveling in the major cities can be a very different experience. 

I can say we officially found the “real” China. It began with the 7-hour local train ride we took through the countryside cramped between a family of perhaps 20. The train was packed with people standing in the aisles and filled with people yelling, babies crying, and dead chickens staying silent. Over the next week, we got more stares, more finger points, and more photos taken of us than ever before. I firmly believe that I will be featured in multiple Chinese families Christmas cards next year, or whatever the Chinese equivalent of that is. 

Everything we ate was spicy, and I mean everything, especially the Chongqing hotpot we ate. One night we ate at a communist themed hotpot restaurant which on top of being spicy, was also a novel experience. Waiters were dressed up in Mao-era uniforms, and there were communist posters surrounding the room on the walls.

When we arrived in Xichang, a town whose claim to fame is a lake, out hotel that we booked simply didn’t exist. Luckily we talked to some guy on the street who helped us find a new hotel down the road. We spent our last day in Xichang mostly recovering from all the traveling we had done, but also biking 40 kilometers around Qionghai lake. It was actually really beautiful and it’s definitely not on the tourist circuit so, to anyone traveling to China in the future: if you want to avoid tourists and people in general, I recommend checking out Xichang and its lake.

Well, that’s it! Will left to go back to Seattle a couple of days ago, leaving me to fend for myself. People have been asking me if I feel sad to be leaving China, and like most annoying answers my answer is “yes and no”. I’m sad to be leaving a place that I lived in for a year, a place that I called home and had countless eye-opening experiences in. At the same time, I feel ready to move on to the next thing. I came to China in the first place to get out of my comfort zone, to try something new, to travel, and to pick up some Chinese. After 367 days living in China, I am happy to announce that I escaped from my zone of comfort, tried more new things than I can remember, traveled too much, and kind of learned some Chinese? Compared to Will my Chinese is trash, but I am satisfied with the basic conversational abilities I did pick up.

Thanks to everyone again for reading these and special thanks to all of you who wrote me messages each month and kept in touch. Tomorrow I leave for Japan, a trip I’ve been dreaming about for a long time. Other than that I’ll be home sometime in September! I might decide to write a final email recounting my experiences in Japan, if I do, you all will be the first to know.

All the best,

Daniel “大牛” Baigel
            </p>    
        </div>
    }
    else if (value === 10){
        html = 
        <div className="blogPost">
            <p>
            Hello! Welcome to my last email!

This past month I was traveling all around Japan, alone for 4 weeks and with my friend Bob for 10 days. While I was in Japan I visited these cities/towns: Fukuoka, Nagasaki, Kumamoto, Hiroshima, Kobe, Osaka, Tanabe, Nara, Kyoto, Sapporo, Otaru, Asahikawa, Biei, and Furano. Wow writing it out makes me realize how many places I went to. I got to see major cities like Osaka, as well as tiny villages like Biei and traveled from the southern Kyushu area of Japan to the northern Hokkaido island.

Japan is about as different from China as you can get. People are extremely quiet and polite, and compared to China the streets of Japan feel empty. Unlike Chinese, which I learned because I needed to survive, Japanese has been interesting and fun for me to learn. I found myself walking down streets trying to read all the signs and smiling when I could understand things. I hope to continue studying Japanese when I get home.

You’re all probably wondering why I spent so much time in Japan in the first place. There are a few answers to that question. Firstly, when I traveled there for the first time this past Winter I loved it. I loved the food, the culture, the language, the public transportation efficiency, the constant presence of vending machines, and most importantly the toilets with heated toilet seats and built-in bidets. On top of all these reasons though, going to Japan felt nostalgic for me. Growing up I used to watch a lot of Miyazaki animated films, which took place in Japan, and so it’s always been a country I’ve wanted to visit. Lastly, because I’ve enjoyed traveling in Japan so much, I’ve been considering moving out there for work. Ideally, it wouldn’t be to teach English, as I feel like I’ve already experienced that before, but rather to further my career. So this trip was in part to see if I would be happy living there.

Alright, now I’ll tell you all about some of the highlights from my travels.

One of the more surprising parts of my trip was how much I enjoyed Kumamoto, a city in Kyushu with a population of about 700,000. It was a last-minute decision after leaving Nagasaki to see one more city before heading up to Hiroshima, and I’m glad I did it. I found Kumamoto to be one of the most hospitable places of my entire trip, most likely because the city doesn’t see a lot of tourism. One evening the hostel I was staying in hosted a Somen night. Somen is a Japanese cuisine/event where you put noodles down a slide with running water and then catch them at the end with chopsticks. Then you dip the noodles into a cold soup before eating them. I don’t know if you gave the previous sentence much thought, but I’ll reiterate that you have to catch noodles sliding down a slide at top speeds with chopsticks. Luckily I had been doing chopstick exercises every night before going to sleep so I was prepared. 

That night I met the hostel owner’s friend Yuko who was learning English and was infatuated with me, probably because I was the only non-Japanese person there. After dinner, she took me into the downtown area and brought me to a local shochu bar. Shochu is a Japanese spirit, similar to sake but actually way more consumed in Japan. It’s highly popular specifically in Kumamoto and other Kyushu cities. Yuko had me try multiple different shochus, and when we left also gave me a list of Japanese foods to try throughout my travels. Included on that list was horse, a delicacy in Kumamoto, so the following night I tried horse carpaccio and was pleasantly surprised by how tasty and lean it was.

After Kumamoto, I traveled to Hiroshima, a city infamous for the atomic bombing during WW2. While I would have visited Hiroshima anyway, I also planned my trip so that I would visit during the peace memorial ceremony on August 6th, the 74th anniversary of the bombing. In the morning there was an hour-long memorial service where government officials, including prime minister Shinzo Abe, gave speeches. There was a moment of silence on the exact minute the bomb dropped, and afterward, they released 100 white doves into the air. I was surprised by the number of tourists that were there. I initially was self-conscious about being an American at the event, but it turns out the majority of people there were from abroad anyway. During the day I walked around the city and visited the atomic bomb museum, which contained stories from survivors of the bombing amongst recovered artifacts and history. It was pretty emotional, as you can imagine.

That night was part two of the ceremony, a lantern lighting event where people create their lanterns and send them down the river together. It was a moment I had been dreaming about unknowingly for years, as I have always loved lanterns, especially when they float on rivers. I sat on the river bank for a couple of hours watching the sunset as thousands of people crowded around in anticipation. When it got dark and people started to release lanterns into the river, I decided to join in. On each side of the paper I wrote the word “peace” in the four languages that I “know" (English, Spanish, Chinese, and Japanese), and once I lit the candle inside I sent it down the river. Watching it float next to hundreds of other colorful lanterns was a pretty special moment. I stayed and watched for a bit, tried to get the perfect Instagram photo like everyone else was, and eventually called it a night.

A few days later into my trip my friend Bob from high school joined me for 10 days. He was on Summer break as well as he is a music teacher in Ohio. The first few days we spent in Osaka exploring the city. We ate excellent street food, visited various shrines, stumbled upon a Yugioh card tournament in a card shop, and tried our luck at Japan’s most ubiquitous arcade game, Pachinko. 

Pachinko parlors can be found all over Japan, and contain hundreds of mechanical devices that people sit at and gamble away their money in exchange for the opportunity to win non-cash prizes. Logically it didn’t make sense to me, but Bob and I wanted to try it anyway to see what all the hype was about. The first thing we noticed when walking in one of the parlors was how loud it was. There were hundreds of machines all lined up, each blasting music and sound effects. Lots of the people playing inside were wearing earplugs; I wish we had got the memo. We had no idea how to play the machines so we told one of the attendants that we wanted to play, and he gave us an instruction manual. Even though it had English instructions, we still couldn’t figure out how to play or what the strategy was. It was sort of like pinball, in that you shoot small metallic balls into the main arena, but then you just watch them fall and if they fall in the right place, you get more balls to shoot. I guess if you’re really good you amass metallic balls over time that eventually you can trade in for sweet prizes like stuffed animals or a box of tissues. After 10 or so minutes of “playing” and once the machine started to beep angrily at us, we decided to leave. Needless to say, we did not win any prizes.

The next couple days we spent hiking the Kumano Kodo pilgrimage trail in Wakayama prefecture. We spent two days and two nights on the trail, sleeping in traditional Japanese guesthouses on the route. The guesthouses were small, with 3-4 rooms and tatami mats, private onsen baths, and fresh meals. Some of my favorite meals all trip actually came from the guesthouses. For example, on one night we had a home-cooked meal of steamed duck and mushrooms, tofu boiled in natural onsen water, a whole boiled fish, and my favorite dish of the night, deer sashimi.

The trails themselves were beautiful, with shrines popping up every so often. We got a passport at the beginning of the trail to collect stamps at all the major shrines along the way. Unfortunately, it rained on and off during both days so the passport got pretty wet, causing all the stamps to blend together. On top of the rain, Bob and I were carrying all of our belongings on our backs with 4 liters of water each, so we were sweating up a storm. On the first day after just the first kilometer, which to my defense was all steep incline, my clothes were dripping as if I had just jumped in a pool. Luckily the two-day hike went by pretty smoothly, although I did experience my very first leech on the second day. We were taking one of many breaks when I felt a sharp pain on my ankle, and when I looked down there was a leech on my leg right above my sock. Luckily for me and unluckily for him, after 10 seconds or so of pulling I eventually managed to remove him and toss him into the bushes. I spent the remainder of the hike hoping that I would turn into “Leech Man” in spider-man like fashion, but my dreams never came true.

After a 4-hour windy bus-ride through the mountains, we reached our next destination, Nara. Nara is famous for its wild deer park, where you can see and feed hundreds of deer. We bought some crackers and walked around feeding them. In true Japanese fashion before eating the crackers, the deer would bow their heads at you as if to say “thank you for the meal”. That night also happened to be the last night of the Nara Tokae Lantern Festival. Throughout the entire deer park, there were thousands of small lanterns lit up on the ground.

Bob and I ended our trip in Kyoto, a city I had traveled to before but since there’s so much to see there, I had to go back. We toured different temples, walked around a bamboo forest, and went back to the Fushimi Inari shrine (the one with all the red gates). Bob had a family friend living in Kyoto so we visited her one evening and got a home-cooked meal! It also happened to be the night of a festival called Daimonji where they ignite massive bonfires on the mountains surrounding the city in the shape of Japanese characters. The idea behind the festival is that in the days leading up to the festival, called the Obon period, the souls of your ancestors come to visit. The fires are lit in the mountains on the final day of the Obon period to guide the souls of your ancestors back to heaven. We watched until the fires burned out and just like the souls, went to bed.

Bob left a few days later and I had two weeks left to myself to travel Hokkaido, Japan’s northern-most island. I spent most of my time walking around, eating all the seafood (squid, sea urchin, crab, eel, etc.), and doing day trips to small towns. One of my favorite northern Japanese dishes was called Jingisukan (pronounced like Genghis Khan) and is a Mongolian influenced barbecue of lamb and other vegetables. 

One evening in Sapporo I decided to hike up mount Moiwa, which is supposed to have one of the top night views from the top. It was only about an hour-long hike, but when I got to the top, there was fog completely blocking the view. Disappointed, I decided to take the cable car down since it was dark out however when I got to it, an attendant told me it was closed for repairs. She also told me that I wasn’t allowed to hike down in the dark because it was dangerous and that no public transportation comes up the mountain. With that, I was left with one option, which was to call a cab and pay $60 to get down. With my daily budget evaporated and my spirits in ruins, I settled for some 7/11 dinner and a drink at an anime-themed bar. The bar had about eight seats in it and the three employees inside were dressed up as some tv characters, I assumed.

My Japan experience ended with a few days out in rural Hokkaido. For two nights I stayed in a national park outside of the small town called Biei, which is famous for its nature. On one of the days, I rented a bike and rode through tons of farmland and flower fields. I’ll attach some photos so you can see. While the landscape was stunning, it was a lot of biking as all the landmarks I wanted to visit were 10 miles away from each other. I probably don’t need to do leg day at the gym for a few years now. The last destination on my bike day was at the famous Biei blue pond, which you might recognize because it was used as a default Mac desktop background for a while. I sat around the pond writing some poetry and marveled at the blue water as well as the floods of tourists coming and going. I’ll include some of the poems I wrote during my trip in this post. I think I ended up writing about 50 poems so if you want to read more of them, just send me a letter requesting them by carrier pigeon and I’ll e-mail them to you.

In my last day in rural Japan, I toured Tomita farm in a town called Furano. They’re famous for lavender fields, which I had missed by a few weeks, as well as their melons. I walked around the flower fields, ate some melon, and had delicious lavender ice cream, which was worth the lactose-induced stomach cramping.

Right as I was ready to come home, the protests that have been ongoing in Hong Kong began to ramp up again. Unfortunately for me, I was flying through Hong Kong to pick up my luggage that my friend was storing. The airport was essentially closed down with all transportation methods cut off, so I had to come up with a different option. With only 16 hours until my flight, I furiously searched for a workaround, and I eventually found a site that claimed I could get a 1-day visa into China on arrival. I needed to get into China so that I could pick up my bags in Shenzhen. The only issue was that it required 4 different flights over 48 hours and I had no guarantee I would be able to get the visa.

With my fingers crossed I boarded my flight to Tianjin (en route to Shenzhen) and incredibly I was able to convince the immigration officers to give me a 24-hour visa into the country. Success! I got into Shenzhen and stayed the night with my friend Max, who decided to teach another year in Shenzhen. It was fun to travel back to Shenzhen for a day, it felt like a homecoming of sorts. I didn’t have much time though as the next morning I went to my other friend’s apartment, picked up my bags and went straight to the airport to await my two more flights back to the US. 24 hours later I was back in New York, where I am writing this now!

That’s it! That’s the last one. I will not send any more e-mails after this one. I hope you enjoyed them while they lasted.

Thanks to everyone that read them, and even more thanks to those of you that reached out! I’m looking forward to seeing you all now that I’m back home! I’ll add some poems to the bottom of this email right after I sign off by saying “All the best, Baigs”.

All the best,

Baigs
            </p>
        </div>
    }
    else {
        html = "cannot find blog entry"
    }
    return (
        <div>
            {html}
        </div>
    )
}

export default Bloghtml

