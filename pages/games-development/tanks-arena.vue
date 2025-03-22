<script setup lang="ts">
import { code_snippets } from "~/data/code-snippets.data";
</script>

<template>
  <ArticleContainer
    title="Tanks Arena"
    subtitle="Multiplayer Tank Battle Game"
    icon="/games-development/tanks-arena/icon.png"
  >
    <ArticleSection title="Game Concept">
      <p>
        Tanks Arena is a video game prototype produced in the Unity game engine.
        The game draws inspiration from top-down multiplayer games such as
        <i>Boomerang Fu</i>, and sees players control heavily stylised tanks
        which fire absurdly bouncy projectiles. Many of the game mechanics, such
        as the ricocheting bullets, were inspired by old tank-operating games
        such as <i>Tank Trouble</i> and the 'Tanks' game from <i>Wii Play</i>.
      </p>
      <p>
        The two main game-modes include <b>Single Player</b>, in which the
        player battles AI adversaries through a series of challenging levels,
        and <b>Multiplayer</b>, in which two players battle in chaotic arenas
        filled with obstacles and power-ups. Perhaps the game's most interesting
        feature is the <b>Arena Editor</b> which allows players to create their
        own custom arenas in which to play.
      </p>
      <ArticleImage
        src="/games-development/tanks-arena/gameplay-screenshot.png"
        alt="Tanks Arena Display Image"
      />
      <p>
        The game was built almost entirely from scratch in Unity using C#. I
        created all of the assets myself, including all of the gameplay scripts,
        the 3D models and the custom UI components, with the only exceptions
        being the music, the sound-effects and a single explosion particle
        effect.
      </p>
      <ArticleAlert variant="important"
        ><div class="font-bold mb-2">Important Note</div>
        This project is completely unrelated to the official Unity tutorial
        involving a tank-based game. I didn't watch or draw any inspiration from
        this tutorial, as I'm sure is obvious from the game's code and
        structure.
      </ArticleAlert>
    </ArticleSection>

    <ArticleSection title="Gameplay Trailer">
      <p>
        I put together a short trailer for the game showcasing a range of
        multiplayer and single player gameplay. Click below to watch the trailer
        on YouTube.
      </p>
      <ArticleAlert variant="link">
        <a href="https://www.youtube.com/watch?v=BSPG38ITjuY" target="_blank"
          >Watch the Trailer</a
        >
      </ArticleAlert>
    </ArticleSection>

    <ArticleSection title="UI and Menu Design">
      <p>
        Possibly my favourite part of the whole project was creating game's
        various menus, including the main menu, the pause menu and the arena
        editor interface. I found designing these menus surprisingly
        challenging, and spent a good deal of time studying the UI design in
        games such as Sifu, Hitman 3 and Boomerang Fu before settling on the
        final style seen below.
      </p>
      <ArticleImage
        src="/games-development/tanks-arena/multiplayer-menu.gif"
        alt="Tanks Arena UI 1"
      ></ArticleImage>
      <p>
        As the majority of Unity's built-in UI components weren't suitable for
        the designs I had in mind, I ended up creating a wealth of custom UI
        components, including custom pickers, alerts, dialogue boxes and more.
      </p>
      <ArticleImage
        src="/games-development/tanks-arena/arena-editor-menu.png"
        alt="Tanks Arena UI 2"
      ></ArticleImage>
      <p>
        A particularly interesting menu to design was the pause menu. I opted to
        have two panels slide in from each side of the screen when the game is
        paused, allowing for a seamless transition to and from gameplay.
      </p>
      <ArticleImage
        src="/games-development/tanks-arena/pause-menu.png"
        alt="Tanks Arena UI 3"
      ></ArticleImage>
    </ArticleSection>
    <ArticleSection title="3D Modelling">
      <p>
        The very first task in making the game was to create the 3D models that
        would be needed. This was a great opportunity to dust off my 3D
        modelling skills, and I had a blast making these assets with Blender.
        Every element from the tank models to the arena walls to the crates and
        explosive barrels was modelled from scratch in Blender.
      </p>
      <ArticleImage
        src="/games-development/tanks-arena/tanks-3d-model.png"
        alt="Tanks Arena 3D Models"
      ></ArticleImage>
      <p>
        The arena walls posed an interesting problem. I knew that I wanted the
        game to work with a grid-based system to allow for an in-game arena
        editor, and that I wanted the walls to look like roughly like the
        striped barriers you can see in the final game. This proved rather more
        complex that I had anticipated, as each wall block in the grid would
        have to react to all eight of its neighbouring blocks in order to create
        an appropriate transition between the blocks. This required a total of
        15 different wall assets and some interesting code later on to select
        the appropriate asset.
      </p>
      <ArticleImage
        src="/games-development/tanks-arena/wall-elements.png"
        alt="Tanks Arena 3D Models 2"
      ></ArticleImage>
    </ArticleSection>
    <ArticleSection title="Arena Editor">
      <p>
        The feature that I was most excited to implement in the game was an
        Arena Editor that would allow the player to create their own arenas to
        use in the game. I have always been a huge fan of games which offer
        level editors, especially when these are powerful enough to replicate
        any of the original levels playable in the game. With this in mind, the
        Arena Editor took shape fairly early on in the process, and so I was
        able to use it to create each of the official levels and arenas featured
        in the final game.
      </p>
      <ArticleImage
        src="/games-development/tanks-arena/arena-editor.gif"
        alt="Tanks Arena Arena Editor"
      ></ArticleImage>
      <p>
        It was also important to me that the editor felt satisfying to use, and
        I spent a lot of time experimenting with different animations and sound
        effects to find just the right balance between the animations looking
        smooth and feeling snappy.
      </p>
    </ArticleSection>
    <ArticleSection title="Programming the Gameplay">
      <p>
        The core of the project was of course programming the gameplay. This was
        perhaps surprisingly one of the simplest parts of the game, but
        nonetheless there were some fun problems to be solved such as handling
        explosions, managing ricocheting bullets and adding destructible crates.
        The main task here was creating the player-controlled tank and bringing
        it to life with satisfying movement controls. I experimented with
        various different control schemes and mechanics before settling on the
        final controls, and then spent a great deal of time tweaking speeds and
        other values to get the feel of the controls just right. Some
        alternative mechanics that I implemented but subsequently abandoned
        included having players turn the tank manually rather than simply aiming
        with the joystick and giving players the ability to aim their tank's
        turret independently of the body of the tank.
      </p>
      <ArticleImage
        src="/games-development/tanks-arena/unity-screenshot.png"
        alt="Tanks Arena in Unity"
      ></ArticleImage>
    </ArticleSection>
    <ArticleSection title="Single Player">
      <p>
        The single player game-mode sees players battling waves of AI tanks
        through nine increasingly challenging levels. This involved creating AI
        adversaries of various difficulties for the player to encounter in these
        levels. This is handled by an
        <span class="font-bold font-mono">AITank</span> component which
        interfaces with the same
        <span class="font-bold font-mono">Tank</span> component controlled by
        the player through the
        <span class="font-bold font-mono">PlayerTank</span>
        component, which ensures that the AI tanks move and handle in exactly
        the same way as the player. Whilst I'm fairly happy with the resulting
        AI opponents, I'd love to go back and improve on this aspect of the game
        one day – their simple behaviour could be hugely improved with proper
        path-finding and the ability to intentionally bounce bullets off walls.
      </p>
      <ArticleImage
        src="/games-development/tanks-arena/single-player-gameplay.png"
        alt="Tanks Arena Single Player"
      ></ArticleImage>
    </ArticleSection>
    <ArticleSection title="Multiplayer">
      <p>
        In multiplayer, two players battle against each other. Multiplayer
        functions relatively similarly to Single Player, with the main addition
        being power-ups. I hope to add many more someday, but for now there are
        four power-ups featured in the game:
      </p>
      <ul>
        <li>
          <b>Rockets</b> – The player receives three rockets, which are
          fast-travelling projectiles that explode on impact.
        </li>
        <li>
          <b>Homing Rockets</b> – The player receives three 'homing rockets'.
          These travel much more slowly than the regular rockets, but
          automatically lock-on to and follow their targets.
        </li>
        <li>
          <b>Shield</b> – The player receives a small shield which protects them
          from one bullet hit (but not from explosions!).
        </li>
        <li>
          <b>Rapid Fire</b> – The player can fire a continuous stream of bullets
          for a short amount of time.
        </li>
      </ul>
      <ArticleImage
        src="/games-development/tanks-arena/multiplayer-gameplay.png"
        alt="Tanks Arena Multiplayer"
      ></ArticleImage>
    </ArticleSection>
    <ArticleSection title="Code Available on Github">
      <p>
        It was quite some time ago that I started working on Tanks Arena, so
        portions of the code are a little questionable, but I've made it public
        on my GitHub nonetheless. Please don't judge the code too harshly :)
      </p>
      <ArticleCodeBlock :snippet="code_snippets.tanks_arena" />
    </ArticleSection>
  </ArticleContainer>
</template>
