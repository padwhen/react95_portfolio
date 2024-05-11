import React, { useCallback, useState } from "react";
import { GlobalStyle, ThemeProvider, List, Frame, ProgressBar, TaskBar } from '@react95/core'
import { Progman37, Mspaint, User, CdMusic, Progman34, Mail, Comdlg32536, Computer, Msnp32FolderIcon, Msnp32ServerIcon, Cdplayer114, Msrating102 } from '@react95/icons'
import * as S from './layoutStyling'
import index1 from "../assets/airbnb_index1.png"
import index2 from "../assets/airbnb_index2.png"
import index3 from "../assets/airbnb_index3.png"
import index4 from "../assets/airbnb_index4.png"
import lindex1 from "../assets/language_index1.png"
import lindex2 from "../assets/language_index2.png"
import lindex3 from "../assets/language_index3.png"
import lindex4 from "../assets/language_index4.png"
import { Button, GroupBox, Toolbar, Window, WindowHeader } from "react95";
import Shortcuts from './desktopIcons'
import socialMedia  from './socialMedia'
import './desktop.css'
import './styles.scss'
import CV from "./cv";
import { JavaProjects } from "./javaProjects";

export const Desktop = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    )
    const [items] = useState([])

    /* About Modal */
    const [showAboutModal, setShowAboutModal] = useState(true)
    const handleOpenAboutModal = useCallback(() => {
        setShowAboutModal(true)
    }, [])
    const handleCloseAboutModal = useCallback(() => {
        setShowAboutModal(false)
    }, [])

    /* Skills Modal */
    const [showSkillsModal, setShowSkillsModal] = useState(true)
    const handleOpenSkillsModal = useCallback(() => {
        setShowSkillsModal(true)
    }, [])
    const handleCloseSkillsModal = useCallback(() => {
        setShowSkillsModal(false)
    }, [])
    /* Bookings Modal */
    const [showBookingsModal, setShowBookingsModal] = useState(true)
    const handleOpenBookingsModal = useCallback(() => {
        setShowBookingsModal(true)
    }, [])
    const handleCloseBookingsModal = useCallback(() => {
        setShowBookingsModal(false)
    }, [])
    /* LanguageLearningApp Modal*/
    const [showLanguageModal, setShowLanguageModal] = useState(true)
    const handleOpenLanguageModal = useCallback(() => {
        setShowLanguageModal(true)
    }, [])
    const handleCloseLanguageModal = useCallback(() => {
        setShowLanguageModal(false)
    }, [])
    /* CV Shortcut */
    const [cvOpened, toggleCV] = useState(false)
    const closeCv = () => {
        toggleCV(false)
    }
    const openCv = () => {
        toggleCV(true)
    }
    /* Java Projects Shortcut */
    const [javaOpened, toggleJava] = useState(false)
    const closeJava = () => {
        toggleJava(false)   
    }
    const openJava = () => {
        toggleJava(true)
    }
    return (
        <ThemeProvider theme="millenium">
            <GlobalStyle></GlobalStyle>
            {showLanguageModal && (
                <S.layoutMain 
                    isMobile={isMobile}
                    style={{ width: '1200px', top: "10px", right: "20px"}}
                    title={"LanguageLearningApp.txt"}
                    closeModal={handleCloseLanguageModal}
                    icon={<Computer variant="32x32_4" />}
                    menu={[
                        { name: 'React.JS'}, { name: 'Express.JS'}, { name: 'TailwindCSS'}, { name: 'MongoDB'},
                        { name: 'ShadcnUI'}, { name: 'NodeJS'}, { name: 'OpenAI API'},
                    ]}
                >
                    <S.layoutMainContent bg="white" boxShadow="out">
                        <Window resizable className="window" style={{ width: '1000px'}}>
                            <WindowHeader className="window-title" style={{ height: '80px'}}>
                                <h1>🧿 Language Learning App</h1>
                            </WindowHeader>
                            <div className="h4-style">
                                <p>This language learning application allows users to input sentences or paragraphs, which are then automatically<b> translated and parsed into individual words</b> Users can <b>save these words as flashcards</b> to their own decks, enabling them to efficiently study and memorize vocabularies. The app incorporates a <b>spaced-repetition</b> algorithm to optimize learning retention.
                                </p>                                
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", gap: '15px' }}>
                                <a href="https://github.com/padwhen/language-learning-app" target="_blank">
                                    <Button primary>GitHub Repository</Button>
                                </a>
                                <a href="https://padwhen-learningapp.fly.dev/" target="_blank">
                                    <Button primary>Demo Link</Button>
                                </a>
                                <a href="https://github.com/padwhen/language-learning-app/blob/main/README.md" target="_blank">
                                    <Button primary>README.md</Button>
                                </a>
                            </div>
                            <div style={{ marginLeft: '15px'}}>
                                <h3>From users' queries...</h3>
                                <p>the app will translate the whole queries into English. From then, it will extract each word and divide them into types, displaying in tables. Each word will be a modal like below. You can try it out in the website!</p>
                                <img src={lindex1} alt="Airbnb" style={{ width: '800px', height: '400px' }} />
                            </div>
                            <div style={{ marginLeft: '15px'}}>
                                <h3>Word Details - Add words into decks</h3>
                                <p>A word modal will display the original word, pronunciation, English translation, and the reason why the word is modified in the given query by the user. User can choose to add this word into a deck, either by an exisiting one or create a new one. Existing deck will display complete percentage and the quantity of flashcards it is having.</p>
                                <img src={lindex2} alt="Airbnb" style={{ width: '800px', height: '400px' }} />
                            </div>
                            <div style={{ marginLeft: '15px'}}>
                                <h3>Deck Details</h3>
                                <p>In deck details, you can see all the flashcards belong to this deck. Flashcards will be divided into 3 parts: Still learning, Not studied, and completed. Not studied cards will be display first, then Still learning. You can autoplay or flip the card by yourself.</p>
                                <img src={lindex3} alt="Airbnb" style={{ width: '800px', height: '400px' }} />
                            </div>
                            <div style={{ marginLeft: '15px'}}>
                                <h3>Learn a deck</h3>
                                <p>You can learn a deck by answering quizzes. The question is going to be the flashcard in the user's language. For example: Finnish. The answer is English, is a mixture of all English translation of the other cards. Answering the card will modify the point of it. If it reaches to a certain point, it will be moved to 'Completed' cards section. 'Completed' cards will not be studied in quiizes unless the user wants to</p>
                                <img src={lindex4} alt="Airbnb" style={{ width: '800px', height: '400px' }} />
                            </div>

                        </Window>
                    </S.layoutMainContent>
                </S.layoutMain>
            )}
            {showBookingsModal && (
                <S.layoutMain 
                    isMobile={isMobile}
                    style={{ width: '1200px'}}
                    title={"BookingApp.txt"}
                    closeModal={handleCloseBookingsModal}
                    icon={<Computer variant="32x32_4" />}
                    menu={[
                        { name: 'React.JS'}, { name: 'Express.JS'}, { name: 'TailwindCSS'}, { name: 'MongoDB'},
                        { name: 'Firebase'}, { name: 'NodeJS'}, { name: 'Supertest'},
                    ]}
                >
                    <S.layoutMainContent bg="white" boxShadow="out">
                        <Window resizable className="window" style={{ width: '1000px'}}>
                            <WindowHeader className="window-title" style={{ height: '80px'}}>
                                <h1>🏨 Booking App</h1>
                            </WindowHeader>
                            <div className="h4-style">
                                <p>A full-stack app coverings main features including <b>user registeration</b>, <b>login</b>. Users can easily <b>make bookings</b>, <b>create new listings</b> of available places for rent, <b>modifying existing listings</b>, and <b>leave reviews for their experiences</b>
                                </p>                                
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", gap: '15px' }}>
                                <a href="https://github.com/padwhen/booking-app" target="_blank">
                                    <Button primary>GitHub Repository</Button>
                                </a>
                                <a href="https://padwhen.fly.dev/" target="_blank">
                                    <Button primary>Demo Link (deployed into Fly.io)</Button>
                                </a>
                                <a href="https://github.com/padwhen/booking-app/blob/main/README.md" target="_blank">
                                    <Button primary>README.md</Button>
                                </a>
                            </div>
                            <div style={{ marginLeft: '15px'}}>
                                <h3>Index Page - Where all places are listed</h3>
                                <p>Each place will display its location, price, and a short description. Of course, you can filter out where you want to see on the Header. Or even rent out your home, log in, and see your profile details</p>
                                <img src={index1} alt="Airbnb" style={{ width: '800px', height: '400px' }} />
                            </div>
                            <div style={{ marginLeft: '15px'}}>
                                <h3>Place Details - Reviews - Booking Widget</h3>
                                <p>See description of a place, its reviews based on clients who stayed there. If it's good enough, you can book this place</p>
                                <img src={index2} alt="Airbnb" style={{ width: '800px', height: '400px' }} />
                            </div>
                            <div style={{ marginLeft: '15px'}}>
                                <h3>Create a new place</h3>
                                <p>Rent your own place with all the criterias. You can add photo by links, or upload from your own device. With uploading from your own device, the URL will be generated by Firebase Database.</p>
                                <img src={index3} alt="Airbnb" style={{ width: '800px', height: '400px' }} />
                            </div>
                            <div style={{ marginLeft: '15px'}}>
                                <h3>Create a new place</h3>
                                <p>Rent your own place with all the criterias. You can add photo by links, or upload from your own device. With uploading from your own device, the URL will be generated by Firebase Database.</p>
                                <img src={index3} alt="Airbnb" style={{ width: '800px', height: '400px' }} />
                            </div>
                            <div style={{ marginLeft: '15px'}}>
                                <h3>Project's structure</h3>
                                <p>Maintained a clear, readable structure for upkeep and scalable application features.</p>
                                <img src={index4} alt="Airbnb" style={{ width: '800px', height: '400px' }} />
                            </div>
                        </Window>
                    </S.layoutMainContent>
                </S.layoutMain>
            )}
            {showSkillsModal && (
                <S.layoutMain
                    isMobile={isMobile}
                    title={"Skills.txt"}
                    closeModal={handleCloseSkillsModal}
                    style={{ right: "calc(20% + 100px)" }}
                    icon={<Mspaint variant="32x32_4" />}
                    menu={[
                        {
                            name: "Options",
                            list: (
                                <List>
                                    <List.Item onClick={handleCloseSkillsModal}>Close</List.Item>
                                </List>
                            )
                        }
                    ]}
                >
                    <S.layoutMainContent bg="white" boxShadow="in">
                        <S.textModal>
                            <p>
                                {" "}
                                <h1>My skills</h1>
                                <h3>🖥️ Programming languages 🖥️</h3>
                                <p>JavaScript, TypeScript, Java, Python, HTML, CSS (SASS)</p>
                                <h3>🧩 Web Frameworks / Libraries 🧩</h3>
                                <p>React.JS, Spring Boot, Angular, Redux, React Native, GraphQL</p>
                                <h3>🖼️ UI Libraries 🖼️</h3>
                                <p>TailwindCSS, Bootstrap, Material UI, ShadcnUI</p>
                                <h3>📁 Database 📁</h3>
                                <p>MongoDB, PostgreSQL, Firebase</p>
                                <h3>☁️ Cloud ☁️</h3>
                                <p>Google Cloud Platform</p>
                                <h3>🛠️ Dev Tools 🛠️</h3>
                                <p>VS Code, Docker, Rapid API, IntelliJ, Git, GitHub</p>
                                <h3>💗 Other skills 💗</h3>
                                <ul>
                                    <li>CI/CD</li>
                                    <li>Agile methods</li>
                                    <li>Product development</li>
                                    <li>Project management</li>
                                    <li>Design systems</li>
                                    <li>User testing</li>
                                </ul>
                            </p>
                        </S.textModal>
                    </S.layoutMainContent>
                </S.layoutMain>
            )}
            {showAboutModal && (
                <S.layoutMain
                    isMobile={isMobile}
                    icon={<Progman37 variant="32x32_4" />}
                    title={"About.txt"}
                    style={{ left: "130px", top: "150px" }}
                    closeModal={handleCloseAboutModal}
                    menu={[
                        {   name: "Options",
                            list: (
                                <List>
                                    <List.Item onClick={handleCloseAboutModal}>Close</List.Item>
                                </List>
                            )}]}>
                    <S.layoutMainContent bg="white" boxShadow="out">
                        <S.textModal>
                            <h1>Moikka! Hello! Xin chào!</h1>
                            <p>
                                😃 I'm Phat Nguyen (/pad-when/), a passionate programmer based in Helsinki.<br />
                                💫 into structured and systems oriented software development, where design is agile and rapid. <br />
                                ♐ want to be a better developer and contribute my impact to innovative projects <br />
                                🥝 Feel free to check out my portfolio 
                            </p>
                            <h3>
                                More about me 💫
                            </h3>
                            <p>
                                Dedicated, enthusiastic, disciplined developer and a fast learner with great problem solving skills and adaptive mindset. 
                                <br />Team player, eager to cope with new challenges and learn more.
                                <br />A funny person, you can tell, based on my zodiac sign
                            </p>
                            <p>
                                <br />
                                This portfolio, has been build with Create React App and {" "}<a href="https://github.com/React95/React95" target="_blank">React95</a>,
                                an open-source Windows95 component library for React.
                            </p>
                        </S.textModal>
                    </S.layoutMainContent>
                </S.layoutMain>
            )}
            <TaskBar list={
                <List>
                    <List.Item as="a" href="mailto:phattrong.a@gmail.com" icon={<Mail variant="32x32_4" />} target="_blank">Email me</List.Item>
                    <List.Divider />
                    <List.Item icon={<Msnp32ServerIcon variant="32x32_4" />}>
                        Projects
                        <List>
                            <List.Item onClick={handleOpenBookingsModal}>Booking app</List.Item>                           
                            <List.Item onClick={handleOpenLanguageModal}>Language app</List.Item>                           
                            <List.Item onClick={toggleJava}>Java Projects</List.Item>
                        </List>
                    </List.Item>
                    <List.Item icon={<Mspaint variant="32x32_4" />} onClick={handleOpenSkillsModal}>Skills</List.Item>
                    <List.Divider />
                    <List.Item icon={<Progman37 variant="32x32_4" />} onClick={handleOpenAboutModal}>About</List.Item>
                    <List.Divider />
                    <List.Item icon={<Progman34 variant="32x32_4" />}>
                        Socials
                        <List>
                            {socialMedia.map(({ icon, name, url }) => (
                                <List.Item as="a" href={url} icon={icon} key={name} rel="openner" target="_blank">
                                    {name}
                                </List.Item>
                            ))}                            
                        </List>
                    </List.Item>
                    <List.Item onClick={openCv} icon={<Msrating102 variant="32x32_4" />}>CV</List.Item>
                </List>
            } />
            <React.Fragment>
                <Shortcuts openCV={openCv} openJava={openJava} />
                {cvOpened && <CV items={items} closeCV={closeCv} isMobile={isMobile} />}
                {javaOpened && <JavaProjects items={items} closeJava={closeJava} isMobile={isMobile} />}
            </React.Fragment>
        </ThemeProvider>
    )
}