<template>
  <main id="main">
    <div class="sections">
      <section>
        <List />
      </section>
      <section>
        <Recipe />
        <Procedure />
      </section>
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  flex: 1;
  overflow: hidden;
}

.sections {
  display: flex;
  width: 200vw;
  height: 100%;
  overflow-y: auto;
}

.buttons {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;

  button {
    padding: 10px 20px;
    cursor: pointer;
  }
}
</style>
