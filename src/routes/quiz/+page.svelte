<script>
  import { onMount } from "svelte";
  import { questions } from "./quiz";
  let score = 0;
  let i = 0;
  let currentQues = questions[i];
  let disabled = false;
  let clickedAns = 0;
  let isCorrect = false;
  let isWrong = false;
  let isLast = false;
  const nextQ = () => {
    isCorrect = false;
    isWrong = false;
    disabled = false;
    clickedAns = 0;
    if (i != questions.length - 1) {
      i++;
      currentQues = questions[i];
    }
  };
  const prevQ = () => {
    isCorrect = false;
    isWrong = false;
    disabled = false;
    i--;
    currentQues = questions[i];
  };
</script>

<div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center flex flex-col">
  {#if !isLast}

   
    
    {#each questions as q}
      {#if q === currentQues}
      <h1 class="text-5xl primary-color font-bold">{q.question}</h1>
        <img src={q.image} alt="doby" class="mask mask-squircle">
        <div class="flex flex-row">
            <div class="mr-4">
                <h4 class="text-2xl"><span class="secondary-color font-bold">Current Score:</span> <span class="primary-color">{score}</span></h4>
            </div>
            <div class="ml-4">
                <h4 class="text-2xl"> <span class="primary-color">{i + 1} </span><span class="secondary-color"> out of</span> <span class="primary-color">{questions.length}</span> <span class="secondary-color">questions left!</span></h4>
            </div>
        </div>
        <div class="flex flex-col">
            {#each q.anwsers as a, i}
          <button
          class="btn btn-outline btn-primary sm:btn-sm md:btn-md lg:btn-lg mt-3"
            class:wrong={isWrong && clickedAns === i}
            class:correct={(clickedAns === i && isCorrect) ||
              (disabled && a.isCorrect)}
            {disabled}
            on:click={() => {
              disabled = true;
              clickedAns = i;
              a.isCorrect ? (isCorrect = true) : (isWrong = true);
              a.isCorrect ? score++ : "";
              currentQues === questions[questions.length - 1]
                ? (isLast = true)
                : (isLast = false);
            }}>{a.a}</button
          >
        {/each}
        </div>
        
      {/if}
    {/each}

    <div class="flex flex-row">
    {#if i > 0}
    <div class="me-2">
      <button class="btn btn-secondary sm:btn-sm md:btn-md lg:btn-lg"on:click={prevQ}>Back</button>
    </div>
    {/if}
    <div class="me-2">
    <button class="btn btn-secondary sm:btn-sm md:btn-md lg:btn-lg" on:click={nextQ} disabled={i === questions.length - 1}>Next</button>
    </div>
    </div>
  {:else}
    score {score}/{questions.length}
    <div class="card">
    {#if score >= 4}
        <img alt="drake meme" src="https://i.cbc.ca/1.3279853.1532811524!/fileImage/httpImage/drake.jpg">
    {:else}
        <img alt="drake meme" src="https://media1.metrotimes.com/metrotimes/imager/u/original/17685622/11-drake-hotline-bling.w710.h473.jpg">
    {/if}
    </div>
    <button
     class="btn btn-secondary sm:btn-sm md:btn-md lg:btn-lg"
      on:click={() => {
        i = 0;
        disabled = false;
        clickedAns = 0;
        isCorrect = false;
        isWrong = false;
        isLast = false;
        currentQues = questions[i];
        score = 0;
      }}>try again</button
    >
  {/if}
  </div>
</div>

<style>
  .correct {
    background-color: green;
  }
  .wrong {
    background-color: red;
  }
  img {
    max-width: 450px !important;
    max-height: 450px !important;
  }
  @media (max-width: 767px) {
    h1 {
      font-size: 45px;
    }

    img {
      max-width: 335px;
    }
  }
</style>
