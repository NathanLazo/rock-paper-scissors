import React, { useState } from 'react';
import Head from "next/head";
import Image from "next/image";

export default function Home() {

const [score, setScore] = useState(0);
const [playerChoice, setPlayerChoice] = useState('');
const [computerChoice, setComputerChoice] = useState('');
const [result, setResult] = useState('');



  function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    switch (choice) {
      case 0:
        setComputerChoice('Rock');
        break;
      case 1:
        setComputerChoice('Paper');
        break;
      case 2:
        setComputerChoice('Scissors');
        break;
      default:
        alert('Something went wrong');
        break;
    }
    getResult();
  }


  function getResult() {
    if (playerChoice === computerChoice) {
      setResult('Draw');
      setScore(score + 0);
    }
    else if(playerChoice === 'Rock' && computerChoice === 'Scissors') {
      setResult('You Win');
      setScore(score + 1);
    }
    else if(playerChoice === 'Rock' && computerChoice === 'Paper') {
      setResult('You Lose');
      setScore(score - 1);
    }
    else if(playerChoice === 'Paper' && computerChoice === 'Rock') {
      setResult('You Win');
      setScore(score + 1);
    }
    else if(playerChoice === 'Paper' && computerChoice === 'Scissors') {
      setResult('You Lose');
      setScore(score - 1);
    }
    else if(playerChoice === 'Scissors' && computerChoice === 'Paper') {
      setResult('You Win');
      setScore(score + 1);
    }
    else if(playerChoice === 'Scissors' && computerChoice === 'Rock') {
      setResult('You Lose');
      setScore(score - 1);
    }
  }


  function endGame(e) {
    e.preventDefault();
    setScore(0);
    setPlayerChoice('');
    setComputerChoice('');
    setResult('');
  }




  return (
    <div className="bg-[#0e0e0e] h-screen">
      <Head>
        <title>Rock Paper Scissors</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta description="Rock Paper Scissors" />
      </Head>
      <main>
        <h1 className="text-white font-extrabold text-3xl mt-8 flex justify-center">Rock paper Scissors</h1>
        <div className="container flex flex-col mx-auto mt-24 lg:px-32">
          <div className="w-auto flex justify-between">
            <button className="border border-zinc-900 shadow-2xl rounded-md focus:border-zinc-700 hover:bg-zinc-900"
              onClick={()=> {
                setPlayerChoice('Rock')
                getComputerChoice();
              }}
            >
              <Image
                src="/images/rock.png"
                alt="Rock"
                width={200}
                height={200}
                draggable={false}
              />
            </button>
            <button className="border border-zinc-900 shadow-2xl rounded-md focus:border-zinc-700 hover:bg-zinc-900"
              onClick={()=> {
                setPlayerChoice('Paper')
                getComputerChoice()
              }}
            >
              <Image
                src="/images/Paper.png"
                alt="Paper"
                width={200}
                height={200}
                draggable={false}
              />
            </button>
            <button className="border border-zinc-900 shadow-2xl rounded-md focus:border-zinc-700 hover:bg-zinc-900"
              onClick={()=> {
                setPlayerChoice('Scissors')
                getComputerChoice()
              }}
            >
              <Image
                src="/images/Scissors.png"
                alt="Scissors"
                width={200}
                height={200}
                draggable={false}
              />
            </button>
          </div>
          <div className="flex flex-col justify-center mt-12">
            <div className='text-gray-200 mx-auto'>Score: {score}</div>
            { result== "You Lose" && <div className='text-red-500 text-2xl uppercase font-bold mx-auto'>{result}</div>}
            { result== "You Win" && <div className='text-green-400 text-2xl uppercase font-bold mx-auto'>{result}</div>}
            { result== "Draw" && <div className='text-white text-2xl uppercase font-bold mx-auto'>{result}</div>}
            <button 
              className="text-4xl bg-gray-600 w-96 mx-auto mt-6"
              onClick={endGame}
            >
              RESET
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
