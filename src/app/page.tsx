import styles from "./home.module.css";
export default function Home() {
  return (
    <div className={styles.page}>
      <p className={styles.title}>Welcome to Gameboxd</p>
      <p>Play. Rate. Share. Discover.</p>
      <p>The social network for gamers</p>
    </div>
  );
}
