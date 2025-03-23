<template>
  <ArticleContainer
    title="A Big Knight Out"
    subtitle="Work-in-progress video game."
    :page="pages.a_big_knight_out"
  >
    <ArticleSection title="Game Concept">
      <ArticleImage
        src="/games-development/a-big-knight-out/screenshots/dungeon.png"
        alt="Domingo Display Image"
      />
      <p>
        A Big Knight Out is a puzzle video game that I have been working on for
        the last few months with two friends. The game sees the player take
        control of a Knight which moves in the same way as the corresponding
        chess piece. The project is still a work in progress, but we are hoping
        to publish it on stream and mobile app stores this summer. The game is
        made in the Unity Game Engine using C#.
      </p>
      <ArticleAlert variant="important">
        This game is a collaboration with two other developers. I've taken a
        leading role in the programming of the game, but please see
        <NuxtLink to="/games-development/tanks-arena">Tanks Arena</NuxtLink>
        instead if you are looking for an example of a finished video game that
        is entirely my own work.
      </ArticleAlert>
    </ArticleSection>
    <ArticleSection title="Game Mechanics">
      <p>
        The game's levels are turn-based puzzles, in which the environment and
        any enemies move in time with the player. The puzzles draw upon a wide
        range of mechanics, including portal squares, moving platforms, buttons,
        various enemies and more.
      </p>
      <ArticleImage
        src="/games-development/a-big-knight-out/screenshots/diagonal-danger.png"
        alt="Domingo Display Image"
      />
      <p>
        Each of the levels is ultimately stored as a simple JSON file, which is
        dynamically built at runtime. This allows our levels to be easily
        validated and source-controlled, and makes features like the in-game
        level editor possible.
      </p>
      <ArticleImage
        src="/games-development/a-big-knight-out/screenshots/the-journey.png"
        alt="Domingo Display Image"
      />
    </ArticleSection>
    <ArticleSection title="In-Game Level Editor">
      <p>
        One of the most exciting features of the game is the in-game level
        editor, which allows players (and us, as developers) to easily create
        new levels for the game. I was responsible for producing the level
        editor early on in development so that we could move away from editing
        levels as JSON files as soon as possible. There were several interesting
        challenges involved in building the editor:
      </p>
      <ul>
        <li>
          <b>Dynamically Generated Tile Icons</b>: The editor uses render
          textures to automatically generate thumbnail icons for each of the
          tiles and entities available in the level editor.
        </li>
        <li>
          <b>In-Editor Preview</b>: A 'preview' button in the level editor
          allows users to immediately play their level without leaving the
          editor, greatly speeding up the creative process.
        </li>
        <li>
          <b>Animated Changes</b>: After updating the underlying JSON level
          file, the editor smoothly animates changes performed, such as 'scaling
          in' new tiles or smoothly rotating rotated tiles. A lot of careful
          planning was required to get this to work without duplicating code
          from out existing LevelBuilder used in the main game whilst also
          ensuring that the on-screen level could never get out of sync with the
          underlying file.
        </li>
      </ul>
      <!-- <ArticleImage
      src="/games-development/a-big-knight-out/screenshots/level-editor.png"
      alt="A Big Knight Out Level Editor"
      /> -->
    </ArticleSection>
    <ArticleSection title="Complete Electricity System">
      <p>
        One of my favourite features of the game is the electricity system we
        have built into the game, supporting simple electrical components such
        as buttons and switches as well as a whole set of supporting tiles such
        as logic gates and powered spikes. This allows us to create levels with
        truly complex behaviour directly from within the level editor, without
        needing to add any level-specific code. An example of this is a level in
        the game which requires players to stand on tiles in a specific sequence
        in order to produce a chessboard patten – here, the electricity system
        and logic gates are leveraged to automatically open a door to the next
        part of the level once the patten is correct.
      </p>
    </ArticleSection>

    <ArticleSection title="Code Available on GitHub">
      <p>
        The work-in-progress code for A Big Knight Out is available on my
        <a
          href="https://github.com/alasdair-casperd/a-big-knight-out"
          target="_blank"
          >GitHub</a
        >
        page.
      </p>
      <ArticleCodeBlock :snippet="code_snippets.a_big_knight_out" />
    </ArticleSection>
  </ArticleContainer>
</template>

<script setup lang="ts">
useHead({ title: "A Big Knight Out • Alasdair Casperd Portfolio" });

import { code_snippets } from "~/data/code-snippets.data";
import { pages } from "~/data/page.data";
</script>
