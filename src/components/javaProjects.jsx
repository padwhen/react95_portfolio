import { Explorer103 } from '@react95/icons';
import * as S from './layoutStyling';
import { List } from "@react95/core";
import { Button, Window, WindowHeader } from "react95";
import java1 from "../assets/java1.png";
import javaVideo from '../assets/java.mp4'

export const JavaProjects = ({ closeJava, isMobile }) => {
    return (
        <S.layoutMain
            title={"java_projects.txt"}
            height="100%"
            isMobile={isMobile}
            closeModal={closeJava}
            style={{ width: '900px', height: '800px' }}
            icon={<Explorer103 variant='32x32_4' />}
            menu={[
                { name: 'Java', list: (
                    <List>
                        <List.Item onClick={closeJava}>Close</List.Item>
                    </List>
                )}, { name: 'Spring Boot'}, { name: 'Spring Security'}, { name: 'JUnit Test'}
            ]}
        >
            <S.layoutMainContent bg="white" boxShadow="in">
                <Window style={{ width: '850px' }}>
                    <WindowHeader>
                        Full-Stack Quiz App 
                    </WindowHeader>
                    <div style={{ marginTop: '15px', display: 'flex', flexDirection: 'row' }}>
                        <div style={{ flex: '1', marginRight: '10px' }}>
                            <img src={java1} alt="Airbnb" style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <div style={{ flex: '1' }}>
                            <div>
                                Tech Stack: Spring Boot, Spring Security, Spring Authentication, JUnit Test, Thymeleaf, PostgreSQL, H2 Database
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", gap: '15px', marginTop: '10px' }}>
                                <a href='https://github.com/https-github-com-DenisHki/quizzer_app' target='_blank'>
                                    <Button primary>GitHub Repository</Button>
                                </a>
                                <a href='https://quizzer-app-1.onrender.com/' target='_blank'>
                                    <Button primary>Demo Link</Button>
                                </a>
                                <a href="https://github.com/https-github-com-DenisHki/quizzer_app/blob/main/README.md" target='_blank'>
                                    <Button primary>README.md</Button>
                                </a>
                            </div>
                            <div style={{ marginTop: '10px'}}>
                                <b>Project Description</b>
                                <ul>
                                    <li>Produced a full-stack app for teachers and students to interact with Quizzes</li>
                                    <li>Quizzer simplifies quiz management for teachers, providing easy creation, editing, and tracking features. It offers secure sign-up and login for both teachers and students, ensuring smooth access to tailored functions based on their roles. </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Window>
                <Window style={{ width: '850px', marginTop: '50px' }}>
                    <WindowHeader>
                        Log In / Register App with Jsonwebtoken
                    </WindowHeader>
                    <div style={{ marginTop: '15px', display: 'flex', flexDirection: 'row' }}>
                        <div style={{ flex: '1', marginRight: '10px' }}>
                            <video width={'100%'} height={'auto'} controls>
                                <source src={javaVideo} type='video/mp4' />
                            </video>
                        </div>
                        <div style={{ flex: '1' }}>
                            <div>
                                Tech Stack: Spring Boot, Spring Security, Spring Authentication, Jsonwebtoken, PostgreSQL, Docker
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", gap: '15px', marginTop: '10px' }}>
                                <a href='https://github.com/padwhen/spring-boot-jwt-authentication' target='_blank'>
                                    <Button primary>GitHub Repository</Button>
                                </a>
                            </div>
                            <div style={{ marginTop: '10px'}}>
                                <b>Project Description</b>
                                <ul>
                                    <li><b>Spring Security:</b> Ensures secure user authentication and access control in Spring applications, handling authentication processes, user roles, and protected resource rules for a robust security framework.</li>
                                    <li><b>Authentication Controllers:</b> Manage user authentication processes in Spring applications, including signup and login functionalities, ensuring secure user interactions and access control through JWT token generation and validation.</li>
                                    <li><b>Authorization Testing Controller:</b> Facilitates role-based access control testing in Spring applications by defining endpoints for evaluating user authorization, allowing secure access to specific resources based on user roles like user, moderator, or admin.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Window>
            </S.layoutMainContent>
        </S.layoutMain>
    )
}
