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

<div class="mx-auto card">
  {#if !isLast}
    {score}
    {i + 1} out of {questions.length}
    {#each questions as q}
      {#if q === currentQues}
        {q.question}
        {#each q.anwsers as a, i}
          <button
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
      {/if}
    {/each}

    {#if i > 0}
      <button on:click={prevQ}>Back</button>
    {/if}
    <button on:click={nextQ} disabled={i === questions.length - 1}>Next</button>
  {:else}
    score {score}/{questions.length}
    {#if score >= 3}
         :)
    {:else}
        :(
    {/if}
    <button
      on:click={() => {
        i = 0;
        disabled = false;
        clickedAns = 0;
        isCorrect = false;
        isWrong = false;
        isLast = false;
      }}>try again</button
    >
  {/if}
</div>

<style>
  .correct {
    background-color: green;
  }
  .wrong {
    background-color: red;
  }
</style>
