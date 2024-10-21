"use client"
import { VimeoPlayer } from "reactjs-vimeo-player";
import styles from "./page.module.css";
import 'reactjs-vimeo-player/dist/style.css'
import { Button, Modal } from "antd";
import { useState } from "react";

export default function Home() {

  const [open, setIsOpen] = useState(false)
  const [open1, setIsOpen1] = useState(false)
  return (
    <>

    <Button onClick={() => setIsOpen(true)}>Открыть модалку (видео 4:3)</Button>
    <Button onClick={() => setIsOpen1(true)}>Открыть модалку (видео 16:9)</Button>
    <Modal open={open}
    width={1280}
    style={{top: 10}}
    destroyOnClose
    onCancel={() => setIsOpen(false)}
    >
      <VimeoPlayer  fullWidth className={styles.player} id={1021748228}/>
    </Modal>
    <Modal open={open1}
    width={1280}
    style={{top: 10}}
    destroyOnClose
    onCancel={() => setIsOpen1(false)}
    >
      <VimeoPlayer  fullWidth className={styles.player} id={1021766325}/>
    </Modal>
    </>
  );
}
