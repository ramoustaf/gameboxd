import styles from "./about.module.css";
export default function About(){
    return(
        <div>
            <h1 className={styles.title}>About</h1>
            <p>This is a solo dev, non-profit application made by Raduan Moustafhim. Gameboxd was inspired by the very popular Letterboxd that has allowed 
                many to share their love for all sorts of different movies, and I hope to do the same here with video games. With this application I intend to 
                allow users to rate and share their thoughts on the games they play as well as inspire users to play new games and have new experiences 
                they may not have otherwise. Please enjoy and thanks for using this app!
            </p>
        </div>
    )
}