import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
        <div style={{width: 200, height: 200, position: "relative"}}>
      <Image
          src={"/image.png"}
          alt={"image"}
          width={200}
          height={200}
          sizes={"100px"}
      />
        </div>
    </main>
  );
}
