import styles from './Timer.module.scss';
import Button from '../Button/Button';
import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    const [timerInterval, setTimerInterval] = useState(null);

    useEffect(() =>  {
        let timer;

        if (running){
            timer = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
            setTimerInterval(timer);
        } else {
            clearInterval(timerInterval);
            setTimerInterval(null);
        }
        return() => clearInterval(timer);
    }, [running]);

    return (
        <div className={styles.timer}>
            <div>
                <span>
                    {("0" + Math.floor(time / 3600000) % 24).slice(-2)}:
                </span>
                <span>
                    {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
                </span>
                <span>
                    {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
                </span>
                <span>
                    {("0" + ((time / 10) % 100)).slice(-2)}
                </span>
            </div>
            <div>
            <Button onClick={() => setRunning(true)}>START</Button>
            <Button onClick={() => setRunning(false)}>STOP</Button>
            <Button onClick={() => setTime(0)}>RESET</Button>
            </div>
        </div>
    );
};

export default Timer;